import Link from 'next/link';

// Social profile URLs — replace '#' with the client's real profile links.
const SOCIAL: Record<string, { label: string; url: string; path: string }> = {
  instagram: {
    label: 'AV-TEC on Instagram',
    url: '#',
    path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z',
  },
};

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Work', href: '/work' },
  { label: 'Rental', href: '/rental' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms', href: '/terms' },
];

const SocialIcon = ({ name }: { name: keyof typeof SOCIAL }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d={SOCIAL[name].path} /></svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img className="footer-logo" src="/assets/images/logos/logo-web.png" alt="AV-TEC" width="64" height="65" />
        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <div className="footer-social-row">
          <span className="footer-social-label">Follow Us</span>
          <div className="footer-social">
            {(['instagram'] as const).map((s) => (
              <a key={s} href={SOCIAL[s].url} aria-label={SOCIAL[s].label} target="_blank" rel="noopener noreferrer"><SocialIcon name={s} /></a>
            ))}
          </div>
        </div>
        <div className="footer-address">
          <div className="footer-address-line1">
            <a
              href="https://www.google.com/maps/place/AV-TEC/@12.9868205,77.5990784,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae167ace1b6c7d:0x19c0a8b850319ad3!8m2!3d12.9868205!4d77.5990784"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bengaluru, Karnataka, India
            </a>
          </div>
          <div className="footer-address-line2">
            <a href="tel:+917975784962">+91 79757 84962</a>
            <span className="footer-sep">•</span>
            <a href="mailto:ilangovan@avtecindia.com">ilangovan@avtecindia.com</a>
            <span className="footer-sep">•</span>
            <a href="mailto:balaji@avtecindia.com">balaji@avtecindia.com</a>
          </div>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} AV-TEC. All rights reserved.
          <span className="footer-sep" style={{ margin: '0 8px' }}>•</span>
          <span>
            Designed &amp; Developed by{' '}
            <a
              href="https://naazailabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              naazailabs.com
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
