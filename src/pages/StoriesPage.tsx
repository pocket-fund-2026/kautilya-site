import { useEffect } from 'react';

export default function StoriesPage() {
  useEffect(() => {
    document.title = 'Kautilya — Stories';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <div className="section-eyebrow">Intelligence</div>
        <h1 className="section-title">Published Thinking</h1>
        <p className="section-body">
          Market analyses, sourcing frameworks, and sector intelligence. We publish what we learn — because the best way to
          demonstrate expertise is to give it away.
        </p>
      </div>
      <div className="content-section">
        <div className="media-grid">
          <div className="media-card featured reveal">
            <div>
              <div className="media-type">Featured Analysis</div>
              <div className="media-title">
                The Fragmentation Thesis: Why Consolidation in Business Services is Accelerating
              </div>
              <div className="media-excerpt">
                A framework for identifying sectors where roll-up economics are most favorable for strategic acquirers. We
                examine the structural forces — owner demographics, margin compression, technology adoption — that create
                acquisition opportunity windows.
              </div>
              <div className="media-date">February 2026</div>
            </div>
            <div className="media-featured-visual">Featured Image</div>
          </div>

          <div className="media-card reveal">
            <div className="media-type">Sourcing Framework</div>
            <div className="media-title">
              Beyond the Broker: Building Proprietary Deal Flow in Off-Market Segments
            </div>
            <div className="media-excerpt">
              How systematic outreach and sector intelligence produce opportunities that intermediaries never surface.
            </div>
            <div className="media-date">January 2026</div>
          </div>

          <div className="media-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="media-type">Sector Intelligence</div>
            <div className="media-title">
              Healthcare Services M&amp;A: Where the Next Wave of Bolt-On Value Lives
            </div>
            <div className="media-excerpt">
              Mapping the white space in behavioral health, home care, and specialty physician practices.
            </div>
            <div className="media-date">December 2025</div>
          </div>

          <div className="media-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="media-type">Market Observation</div>
            <div className="media-title">
              The Owner-Operator Cliff: Why 2026 Is the Year of the Succession Sale
            </div>
            <div className="media-excerpt">
              Baby boomer business owners are aging out. The implications for buy-side sourcing are profound.
            </div>
            <div className="media-date">November 2025</div>
          </div>

          <div className="media-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="media-type">Deal Mechanics</div>
            <div className="media-title">From First Call to LOI: Anatomy of a 90-Day Proprietary Search</div>
            <div className="media-excerpt">
              A step-by-step breakdown of how we construct and execute a buy-side mandate from thesis to signed letter.
            </div>
            <div className="media-date">October 2025</div>
          </div>
        </div>

        {/* SOCIAL */}
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