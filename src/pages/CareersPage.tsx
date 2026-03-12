import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CareersPage() {
  useEffect(() => {
    document.title = 'Kautilya — Careers';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <div className="section-eyebrow">Careers</div>
        <h1 className="section-title">Build With Us</h1>
        <p className="careers-statement">
          Kautilya is a small team that operates with disproportionate intensity. We think systematically about markets, value
          precision over volume, and believe that the best deal sourcing is an intellectual discipline — not a numbers game.
        </p>
      </div>
      <div className="content-section">
        <div className="roles-section">
          <div className="section-eyebrow">Open Roles</div>
          <div className="role-card reveal">
            <div>
              <div className="role-title">Analyst — Deal Sourcing</div>
              <div className="role-detail">
                Research, outreach execution, and target qualification across active mandates.
              </div>
              <div className="role-tags">
                <span className="role-tag">Full-Time</span>
                <span className="role-tag">Remote / Hybrid</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card reveal" style={{ transitionDelay: '.1s' }}>
            <div>
              <div className="role-title">Associate — Market Intelligence</div>
              <div className="role-detail">
                Sector mapping, pipeline construction, and client-facing delivery of sourcing engagements.
              </div>
              <div className="role-tags">
                <span className="role-tag">Full-Time</span>
                <span className="role-tag">Remote / Hybrid</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card reveal" style={{ transitionDelay: '.2s' }}>
            <div>
              <div className="role-title">Content &amp; Brand Lead</div>
              <div className="role-detail">
                Own Kautilya's published intelligence — writing, social, and brand presence across channels.
              </div>
              <div className="role-tags">
                <span className="role-tag">Full-Time</span>
                <span className="role-tag">Remote</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
        </div>

        {/* CULTURE */}
        <div className="culture-block reveal">
          <div className="section-eyebrow">What It's Like</div>
          <h2 className="section-title">Working at Kautilya</h2>
          <div className="culture-grid">
            <div className="culture-item">
              <div className="culture-title">Ownership from Day One</div>
              <div className="culture-desc">
                There are no junior tasks. Every person on the team touches live mandates, speaks with buyers, and shapes
                sourcing strategy. You'll have more responsibility here in month one than most people get in year two
                elsewhere.
              </div>
            </div>
            <div className="culture-item">
              <div className="culture-title">Intellectual Rigor</div>
              <div className="culture-desc">
                We treat deal sourcing as a discipline, not a grind. That means building frameworks, questioning assumptions,
                and continuously refining how we identify and evaluate opportunities.
              </div>
            </div>
            <div className="culture-item">
              <div className="culture-title">Small Team, Large Impact</div>
              <div className="culture-desc">
                We're intentionally small. That means every person matters, every contribution is visible, and the feedback
                loop between effort and outcome is tight.
              </div>
            </div>
            <div className="culture-item">
              <div className="culture-title">Builder's Mentality</div>
              <div className="culture-desc">
                Kautilya is being built. If you want to join a finished institution, this isn't it. If you want to help build
                one — with your fingerprints on the methodology, the brand, and the culture — this is the place.
              </div>
            </div>
          </div>
        </div>

        {/* OPEN INVITE */}
        <div className="open-invite reveal">
          <h2 className="section-title">Don't see your role?</h2>
          <p className="section-body">
            We're always interested in exceptional people who think systematically about markets and acquisitions.
          </p>
          <a href="mailto:careers@kautilya.co">careers@kautilya.co →</a>
        </div>
      </div>
    </div>
  );
}
