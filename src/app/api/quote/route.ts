import { NextRequest, NextResponse } from 'next/server';
import { validateEnquiry } from '@/lib/enquiry';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't submit your enquiry. Your details have been kept. Please try again.",
      },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't submit your enquiry. Please try again." },
      { status: 400 },
    );
  }

  const { errors, normalized } = validateEnquiry({
    name: String(body.name ?? ''),
    company: String(body.company ?? ''),
    email: String(body.email ?? ''),
    date: String(body.date ?? ''),
    event_type: String(body.event_type ?? ''),
    location: String(body.location ?? ''),
    phone: String(body.phone ?? ''),
    message: String(body.message ?? ''),
    agree: String(body.agree ?? ''),
  });

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Apps Script web apps issue a 302 redirect to the actual execution
      // result on success — follow it rather than treating it as a failure.
      redirect: 'follow',
      body: JSON.stringify({
        subject: body.subject ?? 'New AV-TEC Enquiry',
        timestamp: new Date().toISOString(),
        name: normalized.name,
        company: normalized.company,
        email: normalized.email,
        date: normalized.date,
        event_type: normalized.event_type,
        location: normalized.location,
        phone: normalized.phone,
        message: normalized.message,
        agree: 'yes',
      }),
    });

    const json = await res.json().catch(() => null);
    if (res.ok && json?.result !== 'error') {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't submit your enquiry. Your details have been kept. Please try again.",
      },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't submit your enquiry. Your details have been kept. Please try again.",
      },
      { status: 502 },
    );
  }
}
