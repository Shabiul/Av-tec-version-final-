'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TESTIMONIALS } from '@/data/testimonials';

interface TestimonialsSliderProps {
  showCta?: boolean;
  ctaLink?: string;
  ctaText?: string;
}

export default function TestimonialsSlider({
  showCta = true,
  ctaLink = '/work',
  ctaText = 'SEE PROOF OF WORK',
}: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS.length;

  const goToSlide = (index: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((index + total) % total);
      setIsFading(false);
    }, 200);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <div
      className="testimonials-slider-wrap"
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
    >
      <div className={`testimonial-content slider-card ${isFading ? 'is-fading' : ''}`}>
        {/* Google Verified Review Badge */}
        <div className="google-badge">
          <svg className="google-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="google-badge-text">Google Verified Review</span>
          <div className="google-stars" aria-label="5 stars">★★★★★</div>
        </div>

        <p className="testimonial-quote">&ldquo;{current.quote}&rdquo;</p>

        <div className="testimonial-meta">
          <div className="testimonial-avatar">{current.initials}</div>
          <div className="testimonial-author">
            <p className="testimonial-name">{current.name}</p>
            <p className="testimonial-role">{current.role}</p>
          </div>
        </div>

        {/* Navigation Pane Controls */}
        <div className="slider-nav-pane">
          <button
            type="button"
            className="slider-arrow prev"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            &#8592;
          </button>
          <div className="slider-dots">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.name + idx}
                type="button"
                className={`slider-dot ${idx === currentIndex ? 'is-active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="slider-arrow next"
            onClick={nextSlide}
            aria-label="Next review"
          >
            &#8594;
          </button>
        </div>

        {showCta && (
          <div style={{ marginTop: '16px' }}>
            <Link href={ctaLink} className="btn-testimonial-cta">{ctaText}</Link>
          </div>
        )}
      </div>
    </div>
  );
}
