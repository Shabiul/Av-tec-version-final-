import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CountUp from '@/components/CountUp';
import { CASE_STUDIES } from '@/data/case-studies';
import { TESTIMONIALS } from '@/data/testimonials';

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
  'Clear Communication Units',
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

      {/* ═══ CLIENT REVIEWS ═══ */}
      <section className="section">
        <div className="section-center">
          <h2 className="heading-crimson">Client Reviews</h2>
        </div>
        <div className="reviews-grid">
          {TESTIMONIALS.map((t) => (
            <div className="review-card" key={t.name}>
              <div className="google-badge sm">
                <svg className="google-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="google-badge-text">Google Verified</span>
                <div className="google-stars" aria-label="5 stars">★★★★★</div>
              </div>
              <p className="review-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="review-meta">
                <div className="review-avatar">{t.initials}</div>
                <div>
                  <p className="review-name">{t.name}</p>
                  <p className="review-role">{t.role}</p>
                  {t.eventType && <p className="review-event">{t.eventType}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
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
