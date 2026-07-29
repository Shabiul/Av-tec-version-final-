import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact AV-TEC | Bengaluru Event AV Company',
  description: 'Get in touch with AV-TEC for audio, lighting, video, and event technical solutions. Based in Bengaluru, Karnataka, India.',
  alternates: {
    canonical: '/contact',
    languages: { 'en-IN': '/contact', 'en': '/contact' },
  },
  openGraph: {
    url: '/contact',
    title: 'Contact AV-TEC | Bengaluru Event AV Company',
    description: 'Get in touch with AV-TEC for audio, lighting, video, and event technical solutions. Based in Bengaluru, Karnataka, India.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.avtecindia.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.avtecindia.com/contact' },
  ],
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Plan Your Event"
        subtitle="Tell us about your event and we'll shape the technical solution — sound, light, video, and crew."
        bg="/assets/images/gallery/festival-night-show.jpg"
      />
      <section className="section">
        <div className="section-center" style={{ maxWidth: '860px', marginBottom: '32px' }}>
          <span className="eyebrow">Instant Quote Enquiry</span>
          <h2 className="heading-crimson">Request a Quote</h2>
        </div>
        <div className="contact-layout">
          <div className="contact-inner" style={{ margin: 0 }}>
            <ContactForm subject="New AV-TEC Quote Enquiry" />
          </div>
          <div className="contact-info">
            <div className="contact-info-card">
              <h4>Phone</h4>
              <p><a href="tel:+917975784962">+91 79757 84962</a></p>
            </div>
            <div className="contact-info-card">
              <h4>Email</h4>
              <p style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a href="mailto:ilangovan@avtecindia.com">ilangovan@avtecindia.com</a>
                <a href="mailto:balaji@avtecindia.com">balaji@avtecindia.com</a>
              </p>
            </div>
            <div className="contact-info-card">
              <h4>Address</h4>
              <p>Bengaluru, Karnataka, India</p>
            </div>
            <div className="contact-info-card">
              <h4>Availability</h4>
              <p>On-site event support across India, 24/7 during live shows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
