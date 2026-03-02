import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'Kautilya — Portfolio';
  }, []);

  return (
    <div className="page">
      <div className="page-hero">
        <div className="section-eyebrow">Portfolio of Proof</div>
        <h1 className="section-title">Closed Engagements</h1>
        <p className="section-body">
          A buyer came to us with a thesis. Here's what happened. Every engagement below began as an empty search — no
          pipeline, no pre-existing deal flow. Just a thesis and the Kautilya machine.
        </p>
        <div className="filter-bar">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Healthcare</button>
          <button className="filter-btn">Business Services</button>
          <button className="filter-btn">Tech-Enabled</button>
          <button className="filter-btn">Industrial</button>
          <button className="filter-btn">Financial Services</button>
          <button className="filter-btn">Consumer</button>
        </div>
      </div>
      <div className="content-section">
        <div className="deal-grid">
          {/* FEATURED STORY — Borderless */}
          <Link
            to="/story-borderless"
            className="deal-card reveal"
            style={{
              textDecoration: 'none',
              gridColumn: 'span 2',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div>
              <div className="deal-meta">
                <span className="deal-tag sector">Immigration &amp; Global Mobility</span>
                <span className="deal-tag buyer">Seed → Series A</span>
                <span className="deal-tag size">United Kingdom</span>
              </div>
              <div className="deal-title" style={{ fontSize: 24 }}>
                Borderless: Rewriting the M&amp;A Playbook
              </div>
              <div className="deal-challenge">
                How Kautilya built a proprietary deal pipeline in a market that doesn't do deals. 960 hours. 1,500 advisors
                mapped. A new model for non-dilutive growth.
              </div>
              <div className="deal-divider" />
              <div className="deal-outcome">
                £70–80K annualised cashflow · 8–10 pipeline opportunities · £1–5M valuation uplift
              </div>
            </div>
            <div style={{ fontSize: 24, color: 'var(--gold-dim)', transition: 'transform 0.3s' }}>→</div>
          </Link>

          {/* FEATURED STORY — Dino Games */}
          <Link
            to="/story-dino-games"
            className="deal-card reveal"
            style={{
              textDecoration: 'none',
              gridColumn: 'span 2',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div>
              <div className="deal-meta">
                <span className="deal-tag sector">Consumer Mobile Gaming</span>
                <span className="deal-tag buyer">Asset Purchase</span>
                <span className="deal-tag size">Global · Android + iOS</span>
              </div>
              <div className="deal-title" style={{ fontSize: 24 }}>
                Acquiring a Self-Funding Mobile Asset in 8 Weeks
              </div>
              <div className="deal-challenge">
                Off-market sourcing through founder-native channels. Console-level diligence.
                Operators deployed from day one. $39K total consideration at 1.1× revenue.
              </div>
              <div className="deal-divider" />
              <div className="deal-outcome">
                $39K total · 56% at close · ~13 month payback · 8M installs · Operators deployed day one
              </div>
            </div>
            <div style={{ fontSize: 24, color: 'var(--gold-dim)', transition: 'transform 0.3s' }}>→</div>
          </Link>

          {/* FEATURED STORY — Runify */}
          <Link
            to="/story-runify"
            className="deal-card reveal"
            style={{
              textDecoration: 'none',
              gridColumn: 'span 2',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div>
              <div className="deal-meta">
                <span className="deal-tag sector">Consumer Mobile · Health &amp; Fitness</span>
                <span className="deal-tag buyer">Single-Asset Acquisition</span>
                <span className="deal-tag size">Global · iOS</span>
              </div>
              <div className="deal-title" style={{ fontSize: 24 }}>
                $110K Acquisition, $30K Down: Structuring Around Uncertainty
              </div>
              <div className="deal-challenge">
                3-month-old fitness app. Revenue was AUD not USD. Trial-heavy MRR. Kautilya underwrote
                on verified cash and moved every unproven variable into earn-out structure.
              </div>
              <div className="deal-divider" />
              <div className="deal-outcome">
                $110K total · $20K upfront · 45-day close · 24-month earn-out · $30K guaranteed risk
              </div>
            </div>
            <div style={{ fontSize: 24, color: 'var(--gold-dim)', transition: 'transform 0.3s' }}>→</div>
          </Link>

          <div className="deal-card reveal">
            <div className="deal-meta">
              <span className="deal-tag sector">Healthcare Services</span>
              <span className="deal-tag buyer">PE-Backed</span>
              <span className="deal-tag size">$5M–$15M EBITDA</span>
            </div>
            <div className="deal-title">Regional Behavioral Health Platform</div>
            <div className="deal-challenge">
              Fragmented market, owner-operated targets with no broker representation. Buyer needed 8+ bolt-on candidates in a
              6-state geography.
            </div>
            <div className="deal-divider" />
            <div className="deal-outcome">14 qualified targets identified · 3 LOIs executed · 2 closed</div>
          </div>

          <div className="deal-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="deal-meta">
              <span className="deal-tag sector">Business Services</span>
              <span className="deal-tag buyer">Corporate</span>
              <span className="deal-tag size">$3M–$15M EBITDA</span>
            </div>
            <div className="deal-title">National Facilities Management Roll-Up</div>
            <div className="deal-challenge">
              Strategic acquirer entering a new vertical. Required a full market map with recurring revenue models.
            </div>
            <div className="deal-divider" />
            <div className="deal-outcome">200+ targets mapped · 22 engaged · Platform acquisition closed</div>
          </div>

          <div className="deal-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="deal-meta">
              <span className="deal-tag sector">Tech-Enabled Services</span>
              <span className="deal-tag buyer">Family Office</span>
            </div>
            <div className="deal-title">Vertical SaaS in Construction Tech</div>
            <div className="deal-challenge">
              First-time buyer with a narrow thesis. Needed proprietary access to founders not running a formal process.
            </div>
            <div className="deal-divider" />
            <div className="deal-outcome">9 direct founder introductions · 1 platform acquisition closed</div>
          </div>

          <div className="deal-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="deal-meta">
              <span className="deal-tag sector">Industrial Distribution</span>
              <span className="deal-tag buyer">PE-Backed</span>
            </div>
            <div className="deal-title">Specialty Chemical Distribution Bolt-On</div>
            <div className="deal-challenge">
              Hyper-specific product focus. Required targets with exclusive supplier relationships.
            </div>
            <div className="deal-divider" />
            <div className="deal-outcome">45 targets screened · 6 proprietary introductions · 1 closed</div>
          </div>

          <div className="deal-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="deal-meta">
              <span className="deal-tag sector">Financial Services</span>
              <span className="deal-tag buyer">Corporate</span>
              <span className="deal-tag size">$200M+ AUM</span>
            </div>
            <div className="deal-title">Wealth Management Tuck-In</div>
            <div className="deal-challenge">
              Needed RIA practices in specific metro markets, with principals willing to stay post-close.
            </div>
            <div className="deal-divider" />
            <div className="deal-outcome">18 qualified targets · 5 engaged · 2 LOIs · 1 closed</div>
          </div>

          <div className="deal-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="deal-meta">
              <span className="deal-tag sector">Food &amp; Beverage</span>
              <span className="deal-tag buyer">PE-Backed</span>
              <span className="deal-tag size">$5M+ Revenue</span>
            </div>
            <div className="deal-title">Branded CPG Platform Build</div>
            <div className="deal-challenge">
              Greenfield platform search. DTC-native brand with clean supply chain in better-for-you space.
            </div>
            <div className="deal-divider" />
            <div className="deal-outcome">30+ brands evaluated · 4 deep-dives · Platform acquired</div>
          </div>
        </div>

        {/* SECTOR RANGE */}
        <div className="sector-range reveal">
          <div className="section-eyebrow">Search Domains</div>
          <h2 className="section-title">Where We've Built Pipelines</h2>
          <p className="section-body">We don't specialize. We systematize.</p>
          <div className="sector-tags">
            <div className="sector-chip">Healthcare Services</div>
            <div className="sector-chip">Business Services</div>
            <div className="sector-chip">Tech-Enabled Services</div>
            <div className="sector-chip">Industrial Distribution</div>
            <div className="sector-chip">Financial Services</div>
            <div className="sector-chip">Food &amp; Beverage</div>
            <div className="sector-chip">Infrastructure</div>
            <div className="sector-chip">Government Services</div>
            <div className="sector-chip">Education &amp; Training</div>
            <div className="sector-chip">Consumer &amp; Retail</div>
            <div className="sector-chip">Consumer Mobile</div>
            <div className="sector-chip">Environmental Services</div>
            <div className="sector-chip">Logistics &amp; Supply Chain</div>
          </div>
        </div>
      </div>
    </div>
  );
}
