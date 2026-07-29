import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | AV-TEC Rental & Services',
  description: 'Answers to common questions about AV-TEC event technology rentals, sound systems, LED walls, stage lighting, pricing, and pan-India coverage.',
  alternates: {
    canonical: '/faq',
    languages: { 'en-IN': '/faq', 'en': '/faq' },
  },
  openGraph: {
    url: '/faq',
    title: 'Frequently Asked Questions | AV-TEC',
    description: 'Find answers about AV-TEC event technology rentals, sound systems, LED video walls, lighting, and technical support across India.',
  },
};

const FAQS = [
  {
    q: 'Who provides sound system, stage lighting, and LED wall rentals in Bengaluru?',
    a: 'AV-TEC is a leading audio-visual and event technology rental company based in Bengaluru, Karnataka. Established in 1992, AV-TEC provides professional sound reinforcement, D&B audiotechnik line arrays, stage lighting, P2.5 LED video walls, trussing, and on-site technical support for corporate events, concerts, weddings, and conferences.',
  },
  {
    q: 'What audio-visual equipment does AV-TEC rent for events?',
    a: 'AV-TEC rents a complete range of professional AV equipment including D&B audiotechnik line arrays and subwoofers, DiGiCo & Yamaha digital mixing consoles, Shure Axient Digital wireless microphones, moving head stage lights, pixel mapping LED bars, high-resolution indoor/outdoor P2.5 & P3.9 LED video walls, aluminium trussing, and system processors.',
  },
  {
    q: 'Which cities and states in India does AV-TEC serve?',
    a: 'AV-TEC is headquartered in Bengaluru, Karnataka, and operates pan-India across over 40 major cities including Mumbai, Delhi NCR, Hyderabad, Chennai, Goa, Kochi, Pune, and Ahmedabad for large-scale corporate events, destination weddings, and live concert tours.',
  },
  {
    q: 'Does AV-TEC provide on-site technical crew during live shows?',
    a: 'Yes. Every AV-TEC equipment deployment includes experienced, certified system engineers, FOH audio mixing engineers, lighting designers, LED technicians, and stage hands who manage setup, sound checks, live show operation, and teardown 24/7.',
  },
  {
    q: 'How far in advance should an event AV setup be booked?',
    a: 'We recommend booking 2 to 4 weeks in advance for standard corporate events and conferences, and 1 to 3 months in advance for large concert productions, festivals, or multi-day destination weddings to ensure equipment availability and custom system engineering.',
  },
  {
    q: 'How can I request a customized quote for my event?',
    a: 'You can submit an inquiry directly on our website at www.avtecindia.com/contact, call our team at +91 79757 84962, or email us at ilangovan@avtecindia.com or balaji@avtecindia.com. Our technical team responds with a detailed proposal within one business hour.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.avtecindia.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.avtecindia.com/faq' },
  ],
};

export default function FAQPage() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Help & Knowledge"
        title="Frequently Asked Questions"
        subtitle="Clear answers about our AV equipment rental, event technical support, setup lead times, and service coverage across India."
      />

      <section className="section">
        <div className="section-center" style={{ maxWidth: 860, textAlign: 'left' }}>
          <div className="faq-grid">
            {FAQS.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">
                  <span className="faq-q-badge">Q</span>
                  {faq.q}
                </h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '48px',
              padding: '32px',
              borderRadius: 'var(--radius)',
              background: 'linear-gradient(135deg, rgba(234,88,12,0.15) 0%, rgba(10,22,40,0.8) 100%)',
              border: '1px solid rgba(234,88,12,0.3)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
              Have More Questions About Your Event?
            </h3>
            <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
              Our technical directors are ready to review your floor plans and event requirements.
            </p>
            <Link className="btn btn-primary btn-large" href="/contact">
              Contact Technical Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
