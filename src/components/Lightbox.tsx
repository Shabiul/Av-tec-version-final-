'use client';

import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

export interface LightboxItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  title: string;
  tag?: string;   // service / tool label
  meta?: string;  // secondary line (equipment · venue)
  rotate?: number;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

/**
 * Shared modal for images AND videos. Dark overlay, large media, caption bar,
 * prev/next arrows, keyboard support (Esc / ← / →), body scroll lock.
 * Videos use preload="metadata"; changing item remounts the <video> (via key)
 * so only one ever plays and it stops on navigate/close.
 */
export default function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;

  // Render into <body> via a portal so the overlay escapes page-layout rules
  // (e.g. `.section > *` forcing position:relative) and stays a true fixed,
  // centered modal instead of dropping into flow at the bottom of the page.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const go = useCallback(
    (dir: number) => {
      if (index === null || items.length === 0) return;
      onIndexChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open, go, onClose]);

  const item = index === null ? null : items[index];

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
            title="Close (Esc)"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {items.length > 1 && (
            <>
              <button
                className="lightbox-arrow prev"
                type="button"
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
              >
                <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                className="lightbox-arrow next"
                type="button"
                aria-label="Next"
                onClick={(e) => { e.stopPropagation(); go(1); }}
              >
                <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
              </button>
              <span className="lightbox-counter">{index! + 1} / {items.length}</span>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              {item.type === 'video' ? (
                <motion.video
                  key={item.src}
                  className="lightbox-video"
                  poster={item.poster}
                  controls
                  autoPlay
                  preload="metadata"
                  playsInline
                  initial={{ opacity: 0, scale: 0.94, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined, maxHeight: item.rotate ? '70vh' : undefined }}
                >
                  <source src={encodeURI(item.src)} type={item.src.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                </motion.video>
              ) : (
                <motion.img
                  key={item.src}
                  src={item.src}
                  alt={item.title}
                  initial={{ opacity: 0, scale: 0.94, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined, maxHeight: item.rotate ? '70vh' : undefined }}
                />
              )}
            </AnimatePresence>

            <motion.div
              className="lightbox-caption"
              key={`cap-${item.src}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, delay: 0.05 }}
            >
              <h3>{item.title}</h3>
              {item.tag && <span className="cap-tag">{item.tag}</span>}
              {item.meta && <p>{item.meta}</p>}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
