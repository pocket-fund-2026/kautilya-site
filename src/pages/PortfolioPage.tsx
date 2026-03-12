import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ── deal data ── */
interface DealMetric {
  val: string;
  label: string;
}

interface Deal {
  tag: string;
  tagClass: string;
  price: string;
  name: string;
  oneLiner: string;
  metrics: DealMetric[];
  storyLink?: string;
  fullWidth?: boolean;
}

const deals: Deal[] = [
  {
    tag: 'Due Diligence',
    tagClass: 'diligence',
    price: '$1.8M',
    name: 'Inspire3',
    oneLiner:
      'Full-scope financial and operational due diligence on a $1.8M digital wellness portfolio — 30,134 transactions audited across 19 websites in under 15 days.',
    metrics: [
      { val: '30,134', label: 'Transactions Validated' },
      { val: '19', label: 'Websites Audited' },
      { val: '7+', label: 'Discrepancies Found' },
      { val: '$1.4M', label: 'Revenue Audited' },
      { val: '<15 Days', label: 'Turnaround' },
    ],
    fullWidth: true,
  },
  {
    tag: 'Deal Advisory',
    tagClass: 'advisory',
    price: '£1-5M',
    name: 'Borderless',
    oneLiner:
      'Built a proprietary M&A pipeline through unconventional deal structures in the UK immigration market — saved ~£11.5K in the process.',
    metrics: [
      { val: '2,600+', label: 'Outreach Touches' },
      { val: '8-10', label: 'Opportunities' },
      { val: '£70-80K', label: 'Pipeline Value' },
      { val: '6 Wks', label: 'Sprint' },
    ],
    storyLink: '/story-borderless',
  },
  {
    tag: 'Sourcing to Close',
    tagClass: 'sourcing',
    price: '$39K',
    name: 'Dino Games',
    oneLiner:
      'Sourced, structured, and closed a cash-flow-positive mobile game acquisition — from off-market discovery to operator deployment in 8 weeks.',
    metrics: [
      { val: '500+', label: 'Outbound' },
      { val: '~130', label: 'Conversations' },
      { val: '1.1x', label: 'Revenue Multiple' },
      { val: '~8 Wks', label: 'Time to Close' },
    ],
    storyLink: '/story-dino-games',
  },
  {
    tag: 'Sourcing to Close',
    tagClass: 'sourcing',
    price: '$110K',
    name: 'Runify',
    oneLiner:
      'Sourced, diligenced, and structured a mobile app acquisition with only $20K deployed at close — protected by a performance-linked earn-out.',
    metrics: [
      { val: '~500', label: 'Outbound' },
      { val: '~45 Days', label: 'Time to Close' },
      { val: '$20K', label: 'Upfront Capital' },
      { val: '33%', label: 'MRR Correction' },
    ],
    storyLink: '/story-runify',
  },
  {
    tag: 'Full Mandate',
    tagClass: 'mandate',
    price: '$12K',
    name: 'SmartPrompt',
    oneLiner:
      'Killed two deals, closed one. Acquired a GPT-native education platform at a 200x discount to market comparables.',
    metrics: [
      { val: '~300', label: 'Evaluated' },
      { val: '2 of 3', label: 'Deals Killed' },
      { val: '12 Wks', label: 'Time to Close' },
      { val: '200x', label: 'Pricing Efficiency' },
    ],
  },
];

/* ── stats bar ── */
const stats = [
  { val: '5', label: 'Engagements' },
  { val: '$1.96M+', label: 'Total Deal Value' },
  { val: '2,100+', label: 'Analyst Hours' },
  { val: '100%', label: 'Buyer-Side' },
];

/* ── component ── */
export default function PortfolioPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Kautilya — Portfolio';
  }, []);

  /* scroll-reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 },
    );
    gridRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="section-eyebrow">Portfolio of Proof</div>
        <h1 className="section-title">Deal Portfolio</h1>
        <p className="section-body">
          Case studies from our advisory, sourcing, and diligence engagements across digital assets.
        </p>

        {/* Stats bar */}
        <div className="dash-stats-bar">
          {stats.map((s) => (
            <div className="dash-stat" key={s.label}>
              <div className="ds-val">{s.val}</div>
              <div className="ds-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Deal Grid ── */}
      <div className="content-section" ref={gridRef}>
        <div className="deal-grid">
          {deals.map((d, i) => {
            const inner = (
              <>
                <div className="deal-card-top">
                  <span className={`deal-tag ${d.tagClass}`}>{d.tag}</span>
                  <span className="deal-price">{d.price}</span>
                </div>
                <div className="deal-name">{d.name}</div>
                <div className="deal-one-liner">{d.oneLiner}</div>
                <div className="deal-metrics">
                  {d.metrics.map((m) => (
                    <div className="deal-metric" key={m.label}>
                      <div className="dm-val">{m.val}</div>
                      <div className="dm-label">{m.label}</div>
                    </div>
                  ))}
                </div>
                {d.storyLink && <div className="deal-card-cta">View Case Study →</div>}
              </>
            );

            if (d.storyLink) {
              return (
                <Link
                  key={d.name}
                  to={d.storyLink}
                  className={`deal-card reveal${d.fullWidth ? ' full-width' : ''}`}
                  style={{ textDecoration: 'none', animationDelay: `${i * 0.08}s` }}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <div
                key={d.name}
                className={`deal-card reveal${d.fullWidth ? ' full-width' : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
