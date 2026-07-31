import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Equipment Rental | AV-TEC Bengaluru',
  description: 'Rent sound systems, lighting, LED walls, and event AV equipment from AV-TEC in Bengaluru for concerts, weddings, corporate events, and more.',
  alternates: {
    canonical: '/rental',
    languages: { 'en-IN': '/rental', 'en': '/rental' },
  },
  openGraph: {
    url: '/rental',
    title: 'Equipment Rental | AV-TEC Bengaluru',
    description: 'Rent sound systems, lighting, LED walls, and event AV equipment from AV-TEC in Bengaluru for concerts, weddings, corporate events, and more.',
  },
};

const EVENT_TYPES = ['Concerts', 'Weddings', 'Corporate', 'Festivals', 'Exhibitions', 'Medical Conferences'];

const INCLUDES = [
  { title: 'Sound Systems', desc: 'Line arrays, monitors, consoles and wireless mics for any venue size.' },
  { title: 'Lighting & Video', desc: 'Moving lights, LED walls and projection with control and content support.' },
  { title: 'Crew & Delivery', desc: 'Transport, rigging, setup, operation and strike — handled by our team.' },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.avtecindia.com' },
    { '@type': 'ListItem', position: 2, name: 'Rental', item: 'https://www.avtecindia.com/rental' },
  ],
};

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'AV-TEC Audio Visual Equipment Rental Catalog',
  url: 'https://www.avtecindia.com/rental',
  numberOfItems: 3,
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Sound Systems & Line Array Rental',
        description: 'D&B audiotechnik, Martin Audio line arrays, digital mixing consoles & wireless mics.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Stage Lighting & Truss Rigging Rental',
        description: 'Robe & Clay Paky moving head lights, Avolites control & Prolyte trussing.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Fine Pitch LED Video Wall Rental',
        description: 'P2.6 Indoor and P6 Outdoor high-resolution LED screens with Novastar processors.',
      },
    },
  ],
};

export default function RentalPage() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, offerCatalogJsonLd]) }}
      />
      <PageHero
        eyebrow="Rental"
        title="Equipment Rental & Event Production"
        subtitle="Professional sound, lighting, video and LED — delivered, set up and operated by experienced crew."
        bg="/assets/images/gallery/main-stage-line-array.jpg"
      />

      {/* ═══ INQUIRY FORM ═══ */}
      <section className="section rental-form-section">
        <div className="contact-inner">
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>Rental Inquiry</span>
          <h2>Request a Quote</h2>
          <p className="contact-subtitle">Share your event details and equipment needs — we&apos;ll get back with a tailored quote.</p>
          <ContactForm subject="New AV-TEC Rental Inquiry" />
        </div>
      </section>

      {/* ═══ EVENT TYPES ═══ */}
      <section className="section">
        <div className="section-center">
          <h2 className="heading-crimson">Built for Every Event</h2>
          <div className="trusted-strip" style={{ marginTop: '24px' }}>
            {EVENT_TYPES.map((e) => <span key={e}>{e}</span>)}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED ═══ */}
      <section className="section panel-section">
        <div className="section-center">
          <h2 className="heading-crimson">What We Provide</h2>
        </div>
        <div className="reviews-grid">
          {INCLUDES.map((i) => (
            <div className="info-card" key={i.title}>
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
