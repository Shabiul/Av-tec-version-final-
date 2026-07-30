'use client';

interface HeroVideoProps {
  src: string;
  poster: string;
}

/**
 * Background hero video. Autoplays for all visitors (muted + looping). The
 * poster shows while the clip buffers.
 */
export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const safeSrc = encodeURI(src);
  const mimeType = src.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4';

  return (
    <video autoPlay muted loop playsInline preload="metadata" poster={poster} aria-hidden="true">
      <source src={safeSrc} type={mimeType} />
    </video>
  );
}
