import { NextRequest, NextResponse } from 'next/server';
import { validateEnquiry } from '@/lib/enquiry';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
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

  const web3key = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3key) {
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3key,
          subject: body.subject ?? 'New AV-TEC Enquiry',
          from_name: normalized.name,
          ...normalized,
        }),
      });
    } catch (err) {
      console.warn('[WEB3FORMS SERVER SUBMIT ERROR]', err);
    }
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const isRealWebhook = webhookUrl && !webhookUrl.includes('YOUR_DEPLOYMENT_ID');

  if (isRealWebhook) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

      const text = await res.text().catch(() => '');
      let isSuccess = res.ok;
      if (text) {
        try {
          const json = JSON.parse(text);
          if (json?.result === 'error') isSuccess = false;
        } catch {
          // Response is text output or redirect HTML
        }
      }
      if (isSuccess) {
        return NextResponse.json({ ok: true });
      }
    } catch (err) {
      console.warn('[ENQUIRY WEBHOOK ERROR - FALLBACK LOGGED]', err);
    }
  }

  // Log enquiry details server-side as backup and return success to user
  console.log('[AV-TEC ENQUIRY RECEIVED]', {
    timestamp: new Date().toISOString(),
    ...normalized,
    subject: body.subject ?? 'New AV-TEC Enquiry',
  });

  return NextResponse.json({ ok: true });
}
