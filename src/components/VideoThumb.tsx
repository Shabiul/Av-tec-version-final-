'use client';

import { useState, useEffect, useRef } from 'react';

interface VideoThumbProps {
  src: string;
  alt?: string;
  rotate?: number;
}

/**
 * Performant, resilient video thumbnail generator.
 * Uses IntersectionObserver so <video> elements only fetch metadata when
 * scrolled near the viewport (prevents browser media connection choking).
 * Ensures background is always dark cinematic (#091220) to eliminate white box glitches.
 */
export default function VideoThumb({ src, alt, rotate }: VideoThumbProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="video-thumb-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#091220',
        overflow: 'hidden',
      }}
    >
      {isVisible && !hasError && (
        <video
          preload="metadata"
          muted
          playsInline
          aria-label={alt}
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            pointerEvents: 'none',
            background: '#091220',
            transform: rotate ? `rotate(${rotate}deg) scale(1.78)` : undefined,
          }}
        >
          <source src={`${encodeURI(src)}#t=0.5`} type={src.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
        </video>
      )}
    </div>
  );
}
