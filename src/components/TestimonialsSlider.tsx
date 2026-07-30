'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TESTIMONIALS, type Testimonial } from '@/data/testimonials';

interface TestimonialsSliderProps {
  items?: Testimonial[];
  showCta?: boolean;
  ctaLink?: string;
  ctaText?: string;
  variant?: 'hero' | 'card';
}

export default function TestimonialsSlider({
  items = TESTIMONIALS,
  showCta = true,
  ctaLink = '/work',
  ctaText = 'SEE PROOF OF WORK',
  variant = 'hero',
}: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const list = items && items.length > 0 ? items : TESTIMONIALS;
  const total = list.length;

  const goToSlide = (index: number) => {
    if (isFading || total <= 1) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((index + total) % total);
      setIsFading(false);
    }, 200);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, total]);

  const current = list[currentIndex] || list[0];

  if (variant === 'card') {
    return (
      <div
        className="testimonials-section-inner"
        onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
      >
        <h2 className="testimonials-heading">WHAT OUR CLIENTS SAY</h2>

        <div className="testimonials-single-wrap">
          <div className={`testimonial-single-card ${isFading ? 'is-fading' : ''}`}>
            <p className="testimonial-client-quote">&ldquo;{current.quote}&rdquo;</p>
            <div className="testimonial-client-meta">
              <div className="testimonial-client-avatar">{current.initials}</div>
              <div className="testimonial-client-author">
                <p className="testimonial-client-name">{current.name}</p>
                <p className="testimonial-client-role">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Pane Controls */}
          {total > 1 && (
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
                {list.map((t, idx) => (
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
          )}
        </div>

        {showCta && (
          <div style={{ textAlign: 'center', marginTop: '18px' }}>
            <Link href={ctaLink} className="btn-testimonial-cta">{ctaText}</Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="testimonials-slider-wrap"
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
    >
      <div className={`testimonials-hero-card ${isFading ? 'is-fading' : ''}`}>
        <p className="testimonials-eyebrow">TESTIMONIALS</p>
        <h2 className="testimonials-hero-title">What Our Clients Say</h2>

        <p className="testimonial-hero-quote">&ldquo;{current.quote}&rdquo;</p>

        <div className="testimonial-hero-meta">
          <div className="testimonial-hero-avatar">{current.initials}</div>
          <p className="testimonial-hero-name">{current.name}</p>
          <p className="testimonial-hero-role">{current.role}</p>
        </div>

        {/* Navigation Controls */}
        {total > 1 && (
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
              {list.map((t, idx) => (
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
        )}

        {showCta && (
          <div style={{ marginTop: '22px' }}>
            <Link href={ctaLink} className="btn-testimonial-cta">{ctaText}</Link>
          </div>
        )}
      </div>
    </div>
  );
}


