import { useEffect } from 'react';

export default function TeamPage() {
  useEffect(() => {
    document.title = 'Kautilya — Team';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <div className="section-eyebrow">The Counsel</div>
        <h1 className="section-title">The People Behind the Mandate</h1>
        <p className="section-body">
          A focused team, not a headcount. Every engagement is led by senior practitioners who've built pipelines across
          sectors and deal types.
        </p>
      </div>
      <div className="content-section">
        <div className="team-grid">
          <div className="team-member reveal">
            <div className="team-avatar">—</div>
            <div className="team-name">Team Member</div>
            <div className="team-role">Managing Partner</div>
            <div className="team-bio">
              Background in M&amp;A advisory and corporate development. Leads mandate strategy and client relationships.
            </div>
          </div>
          <div className="team-member reveal" style={{ transitionDelay: '.15s' }}>
            <div className="team-avatar">—</div>
            <div className="team-name">Team Member</div>
            <div className="team-role">Director, Research</div>
            <div className="team-bio">
              Former strategy consultant. Builds target universes and oversees the proprietary sourcing methodology.
            </div>
          </div>
          <div className="team-member reveal" style={{ transitionDelay: '.3s' }}>
            <div className="team-avatar">—</div>
            <div className="team-name">Team Member</div>
            <div className="team-role">Associate</div>
            <div className="team-bio">
              Focused on outreach execution and target qualification. The engine room of every active mandate.
            </div>
          </div>
        </div>

        <div className="culture-section reveal">
          <div className="section-eyebrow">Ethos</div>
          <h2 className="section-title">How We Operate</h2>
          <p className="section-body">
            Kautilya runs on precision, not volume. Every search is conducted with the rigor of a research mandate and the
            urgency of a live transaction. We are small by design.
          </p>
          <div className="values-row">
            <div className="value-item">
              <div className="value-word">Rigor</div>
              <div className="value-desc">Systematic, never haphazard</div>
            </div>
            <div className="value-item">
              <div className="value-word">Discretion</div>
              <div className="value-desc">Confidential by default</div>
            </div>
            <div className="value-item">
              <div className="value-word">Conviction</div>
              <div className="value-desc">Thesis-driven, always</div>
            </div>
            <div className="value-item">
              <div className="value-word">Velocity</div>
              <div className="value-desc">Speed without compromise</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
