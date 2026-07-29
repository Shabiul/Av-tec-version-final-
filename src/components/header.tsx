'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Work', href: '/work' },
  { label: 'Rental', href: '/rental' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let isScrolled = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (!isScrolled && y > 50) {
        isScrolled = true;
        setScrolled(true);
      } else if (isScrolled && y < 20) {
        isScrolled = false;
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-bar">
        <Link href="/" className="header-brand" aria-label="AV-TEC Home">
          <img
            className="header-logo"
            src="/assets/images/logos/logo-web.png"
            alt="AV-TEC Audio Visual Technology"
            width="180"
            height="183"
          />
          <span className="header-tagline">Where Innovation Meets Experiences</span>
        </Link>

        <nav
          ref={navRef}
          className={`header-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`header-nav-link ${
                pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href)) ? 'active' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="header-theme-wrap">
            <ThemeToggle />
          </div>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
