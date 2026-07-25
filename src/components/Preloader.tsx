'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment by 1-2% every tick (~2.5 to 3 seconds total)
        const diff = Math.random() > 0.3 ? 1 : 2;
        return Math.min(prev + diff, 100);
      });
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = '';
      }, 300);

      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 800); // 300ms delay + 500ms fade-out transition

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`preloader-overlay ${isLoaded ? 'preloader-fade-out' : ''}`}
      aria-hidden={isLoaded}
    >
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <Image
            src="/assets/images/logos/logo-web.png"
            alt="AV-TEC Loading"
            width={180}
            height={95}
            priority
            className="preloader-logo"
          />
          <div className="preloader-glow" />
        </div>

        <div className="preloader-progress-box">
          <div className="preloader-bar-bg">
            <div
              className="preloader-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="preloader-meta">
            <span className="preloader-text">
              {progress < 100 ? 'INITIALIZING EXPERIENCE...' : 'WELCOME TO AV-TEC'}
            </span>
            <span className="preloader-percent">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
