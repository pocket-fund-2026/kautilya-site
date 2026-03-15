import { useEffect } from 'react';
import StoriesTimeline from '../components/StoriesTimeline';

export default function StoriesPage() {
  useEffect(() => {
    document.title = 'Kautilya — Stories';
  }, []);

  return (
    <div className="page stories-page">
      <StoriesTimeline />

      <div className="content-section stories-follow-section">
        <div className="social-section reveal">
          <div className="section-eyebrow">Follow Our Thinking</div>
          <h2 className="section-title">Across Channels</h2>
          <div className="social-grid">
            <a className="social-card" href="#">
              <div className="social-platform">Twitter / X</div>
              <div className="social-handle">@kautilya</div>
              <div className="social-desc">Deal sourcing observations, market threads, and sector takes.</div>
            </a>
            <a className="social-card" href="#">
              <div className="social-platform">Instagram</div>
              <div className="social-handle">@kautilya.advisory</div>
              <div className="social-desc">Visual insights, infographics, and behind-the-scenes.</div>
            </a>
            <a className="social-card" href="#">
              <div className="social-platform">LinkedIn</div>
              <div className="social-handle">Kautilya Advisory</div>
              <div className="social-desc">Long-form posts, case reflections, and industry commentary.</div>
            </a>
            <a className="social-card" href="#">
              <div className="social-platform">Reddit</div>
              <div className="social-handle">u/kautilya</div>
              <div className="social-desc">Community discussions on M&amp;A, sourcing, and deal mechanics.</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}