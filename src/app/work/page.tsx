import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CountUp from '@/components/CountUp';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import { CASE_STUDIES } from '@/data/case-studies';

export const metadata = {
  title: 'Our Work | AV-TEC Event Case Studies',
  description: 'See past events AV-TEC has produced, including concerts, corporate summits, festivals, and private functions.',
  alternates: {
    canonical: '/work',
    languages: { 'en-IN': '/work', 'en': '/work' },
  },
  openGraph: {
    url: '/work',
    title: 'Our Work | AV-TEC Event Case Studies',
    description: 'See past events AV-TEC has produced, including concerts, corporate summits, festivals, and private functions.',
  },
};

const STATS = [
  { num: '30+', label: 'Years' },
  { num: '4000+', label: 'Events' },
  { num: '40+', label: 'Cities' },
  { num: '50k', label: 'Peak Audience' },
];

const MARQUEE = [
  'D&B audiotechnik',
  'Martin Audio',
  'Avid',
  'Allen & Heath',
  'Shure',
  'Sennheiser',
  'Electro-Voice',
  'Oliver System Limited',
  'Teleprompter',
  'Quiz Buzzer',
  'Clear Comms Units',
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" /></svg>
      ))}
    </div>
  );
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.avtecindia.com' },
    { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://www.avtecindia.com/work' },
  ],
};

export default function WorkPage() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Proof of Work"
        title="Our Work"
        subtitle="Three decades of shows delivered — and the clients who trust us."
        bg="/assets/images/gallery/festival-night-show.jpg"
      />

      {/* ═══ STAT BAND + MARQUEE GEAR ═══ */}
      <section className="section">
        <div className="stat-band">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-num"><CountUp value={s.num} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="trusted-strip" style={{ marginTop: '40px' }}>
          {MARQUEE.map((m) => <span key={m}>{m}</span>)}
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="section panel-section">
        <div className="section-center">
          <h2 className="heading-crimson">Featured Productions</h2>
        </div>
        <div className="case-grid">
          {CASE_STUDIES.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="case-card">
              <img src={c.heroImage} alt={c.title} loading="lazy" />
              <span className="case-tag">{c.city} &middot; {c.date}</span>
              <h3>{c.title}</h3>
              <p>{c.services.join(' · ')} — {c.audience} audience</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ CLIENT REVIEWS / TESTIMONIALS ═══ */}
      <section className="section testimonials-card-section">
        <TestimonialsSlider variant="card" ctaLink="/contact" ctaText="GET A QUOTE" />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <div className="section-center" style={{ maxWidth: '640px' }}>
          <h2>Ready to Deliver Your Show?</h2>
          <p className="section-lead">From concept to strike, we bring the equipment, the crew and the calm.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-pill btn-crimson">Get a Quote</Link>
            <Link href="/services" className="btn-pill">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
