'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import StoriesTimeline from '@/components/StoriesTimeline';

export default function StoriesContent() {
  const eventVideoRef = useRef<HTMLVideoElement>(null);
  const singVideoRef = useRef<HTMLVideoElement>(null);
  const [playerSrc, setPlayerSrc] = useState<string | null>(null);

  const handleVideoHover = (ref: React.RefObject<HTMLVideoElement | null>, play: boolean) => {
    const video = ref.current;
    if (!video) return;
    if (play) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  const openPlayer = (src: string) => {
    setPlayerSrc(src);
    document.body.style.overflow = 'hidden';
  };

  const closePlayer = useCallback(() => {
    setPlayerSrc(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!playerSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePlayer();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [playerSrc, closePlayer]);

  return (
    <div className="page stories-page">
      <StoriesTimeline />

      <style dangerouslySetInnerHTML={{ __html: `
        .video-showcase-section {
          padding: 20px 48px 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .video-showcase-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .video-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .video-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: #000;
          transition: border-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .video-card:hover {
          border-color: var(--gold-dim);
          transform: translateY(-4px);
        }

        .video-card video {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          display: block;
        }

        .video-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px;
          background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 40%, transparent 70%);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .video-card:hover .video-card-overlay {
          opacity: 0.6;
        }

        .video-card-tag {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }

        .video-card-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 22px;
          font-weight: 500;
          color: #fff;
          line-height: 1.3;
        }

        .video-card-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          margin-top: 6px;
          font-style: italic;
        }

        .video-play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(201,185,154,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }

        .video-card:hover .video-play-icon {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .video-play-icon svg {
          width: 18px;
          height: 18px;
          fill: rgba(201,185,154,0.9);
          margin-left: 3px;
        }

        /* YouTube CTA */
        .yt-cta {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 28px;
          padding: 24px 32px;
          border: 1px solid var(--border);
          border-radius: 12px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          text-decoration: none;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .yt-cta:hover {
          border-color: var(--gold-dim);
          background: rgba(255,255,255,0.015);
        }

        .yt-cta-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FF0000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .yt-cta-icon svg {
          width: 20px;
          height: 20px;
          fill: #fff;
          margin-left: 2px;
        }

        .yt-cta-text { flex: 1; }

        .yt-cta-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .yt-cta-sub {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .yt-cta-arrow {
          font-size: 20px;
          color: var(--gold-dim);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .yt-cta:hover .yt-cta-arrow {
          transform: translateX(4px);
          color: var(--gold);
        }

        /* Fullscreen Video Player */
        .video-player-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: vp-fade-in 0.25s ease;
        }

        @keyframes vp-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .video-player-close {
          position: absolute;
          top: 24px;
          right: 28px;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
          z-index: 2;
        }

        .video-player-close:hover {
          border-color: rgba(201,185,154,0.6);
          background: rgba(0,0,0,0.7);
        }

        .video-player-close svg {
          width: 18px;
          height: 18px;
          stroke: rgba(255,255,255,0.8);
          stroke-width: 2;
          fill: none;
        }

        .video-player-content {
          width: 90vw;
          max-width: 1200px;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 80px rgba(0,0,0,0.6);
        }

        .video-player-content video {
          width: 100%;
          height: 100%;
          display: block;
          background: #000;
        }

        /* Tighter follow section */
        .stories-follow-compact {
          padding: 40px 48px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .video-showcase-section {
            padding: 16px 24px 0;
          }

          .video-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .video-card-title { font-size: 18px; }
          .video-card-overlay { padding: 20px; }

          .yt-cta {
            flex-direction: column;
            text-align: center;
            gap: 14px;
            padding: 20px 20px;
          }

          .video-player-content {
            width: 96vw;
            border-radius: 8px;
          }

          .video-player-close {
            top: 16px;
            right: 16px;
            width: 38px;
            height: 38px;
          }

          .stories-follow-compact {
            padding: 28px 24px 60px;
          }
        }

        @media (max-width: 480px) {
          .video-showcase-section {
            padding: 12px 20px 0;
          }

          .stories-follow-compact {
            padding: 24px 20px 50px;
          }
        }
      `}} />

      {/* VIDEO SHOWCASE */}
      <div className="video-showcase-section">
        <div className="video-showcase-header">
          <div className="section-eyebrow">From the Studio</div>
          <h2 className="section-title">Watch</h2>
        </div>

        <div className="video-grid">
          <div
            className="video-card"
            onMouseEnter={() => handleVideoHover(eventVideoRef, true)}
            onMouseLeave={() => handleVideoHover(eventVideoRef, false)}
            onClick={() => openPlayer('/videos/WebEventFinal.mp4')}
          >
            <video
              ref={eventVideoRef}
              src="/videos/WebEventFinal.mp4"
              aria-label="Inside the Room — what happens when acquisition entrepreneurs get together"
              muted
              playsInline
              loop
              preload="metadata"
            />
            <div className="video-card-overlay">
              <div className="video-card-tag">Event</div>
              <div className="video-card-title">Inside the Room</div>
              <div className="video-card-sub">What happens when acquisition entrepreneurs get together.</div>
            </div>
            <div className="video-play-icon">
              <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
            </div>
          </div>

          <div
            className="video-card"
            onMouseEnter={() => handleVideoHover(singVideoRef, true)}
            onMouseLeave={() => handleVideoHover(singVideoRef, false)}
            onClick={() => openPlayer('/videos/WebSingFinal.mp4')}
          >
            <video
              ref={singVideoRef}
              src="/videos/WebSingFinal.mp4"
              aria-label="Beyond the Deal — the people behind the spreadsheets"
              muted
              playsInline
              loop
              preload="metadata"
            />
            <div className="video-card-overlay">
              <div className="video-card-tag">Culture</div>
              <div className="video-card-title">Beyond the Deal</div>
              <div className="video-card-sub">The people behind the spreadsheets.</div>
            </div>
            <div className="video-play-icon">
              <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
            </div>
          </div>
        </div>

        <a
          className="yt-cta"
          href="https://www.youtube.com/@devlikesbizness"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="yt-cta-icon">
            <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
          </div>
          <div className="yt-cta-text">
            <div className="yt-cta-title">See more on YouTube</div>
            <div className="yt-cta-sub">Deal breakdowns, market analyses, and the journey — documented weekly on @devlikesbizness</div>
          </div>
          <span className="yt-cta-arrow">&rarr;</span>
        </a>
      </div>

      {/* SOCIAL / FOLLOW */}
      <div className="stories-follow-compact">
        <div className="social-section reveal">
          <div className="section-eyebrow">Follow Our Thinking</div>
          <h2 className="section-title">Across Channels</h2>
          <div className="social-grid">
            <a className="social-card" href="https://x.com/microsearchfund">
              <div className="social-platform">Twitter / X</div>
              <div className="social-handle">@microsearchfund</div>
              <div className="social-desc">Deal sourcing observations, market threads, and sector takes.</div>
            </a>
            <a className="social-card" href="https://www.instagram.com/microsearchfund/">
              <div className="social-platform">Instagram</div>
              <div className="social-handle">@microsearchfund</div>
              <div className="social-desc">Visual insights, infographics, and behind-the-scenes.</div>
            </a>
            <a className="social-card" href="https://www.linkedin.com/company/pocket-fund/?originalSubdomain=in">
              <div className="social-platform">LinkedIn</div>
              <div className="social-handle">Pocket Fund</div>
              <div className="social-desc">Long-form posts, case reflections, and industry commentary.</div>
            </a>
            <a className="social-card" href="https://www.reddit.com/r/InsideAcquisitions/">
              <div className="social-platform">Reddit</div>
              <div className="social-handle">r/InsideAcquisitions</div>
              <div className="social-desc">Community discussions on M&amp;A, sourcing, and deal mechanics.</div>
            </a>
          </div>
        </div>
      </div>

      {/* FULLSCREEN VIDEO PLAYER */}
      {playerSrc && (
        <div className="video-player-backdrop" onClick={closePlayer}>
          <button
            className="video-player-close"
            onClick={closePlayer}
            aria-label="Close video"
          >
            <svg viewBox="0 0 24 24">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
          <div className="video-player-content" onClick={(e) => e.stopPropagation()}>
            <video
              src={playerSrc}
              aria-label="Kautilya video player"
              autoPlay
              controls
              playsInline
              controlsList="nodownload"
            />
          </div>
        </div>
      )}
    </div>
  );
}
