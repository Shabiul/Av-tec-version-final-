'use client';

import { useState, useEffect, useRef } from 'react';

interface VideoThumbProps {
  src: string;
  poster?: string;
  alt?: string;
  rotate?: number;
}

/**
 * Resilient, fast video thumbnail component.
 * Loads a JPEG poster image first (same path as video with .jpg extension),
 * eliminating browser media connection limits and blank box glitches.
 * Falls back to HTML5 <video> with #t=0.5 if no JPEG poster is found.
 */
export default function VideoThumb({ src, poster, alt, rotate }: VideoThumbProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [useFallbackVideo, setUseFallbackVideo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-derive poster path if not explicitly provided
  const derivedPoster = poster || src.replace(/\.(mp4|MP4|mov|MOV|webm)$/i, '.jpg');

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
      {isVisible && (
        !useFallbackVideo ? (
          <img
            src={derivedPoster}
            alt={alt || 'Video preview'}
            loading="lazy"
            onError={() => setUseFallbackVideo(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              pointerEvents: 'none',
              background: '#091220',
              transform: rotate ? `rotate(${rotate}deg) scale(1.78)` : undefined,
            }}
          />
        ) : (
          <video
            preload="metadata"
            muted
            playsInline
            aria-label={alt}
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
        )
      )}
    </div>
  );
}
