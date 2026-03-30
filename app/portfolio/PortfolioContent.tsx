'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NumberTicker } from '@/components/NumberTicker';
import { BorderBeam } from '@/components/BorderBeam';

/* -- deal data -- */
interface DealMetric {
  val: string;
  label: string;
}

interface Deal {
  tag: string;
  tagClass: string;
  price: string;
  name: string;
  logo?: string;
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
    logo: '/images/portfolio-logos/inspire3.png',
    oneLiner:
      'Full-scope financial and operational due diligence on a $1.8M digital wellness portfolio. 30,134 transactions audited across 19 websites in under 15 days.',
    metrics: [
      { val: '30,134', label: 'Transactions Validated' },
      { val: '19', label: 'Websites Audited' },
      { val: '7+', label: 'Discrepancies Found' },
      { val: '$1.4M', label: 'Revenue Audited' },
      { val: '<15 Days', label: 'Turnaround' },
    ],
    storyLink: '/stories/inspire3',
    fullWidth: true,
  },
  {
    tag: 'Deal Advisory',
    tagClass: 'advisory',
    price: '£1-5M',
    name: 'UK Immigration Advisory',
    oneLiner:
      'Rewrote the M&A playbook for UK immigration — built a proprietary deal pipeline in a market that doesn\'t do deals, saving ~£11.5K in the process.',
    metrics: [
      { val: '2,600+', label: 'Outreach Touches' },
      { val: '8-10', label: 'Opportunities' },
      { val: '£70-80K', label: 'Pipeline Value' },
      { val: '6 Wks', label: 'Sprint' },
    ],
    storyLink: '/stories/borderless',
  },
  {
    tag: 'Sourcing to Close',
    tagClass: 'sourcing',
    price: '$39K',
    name: 'Dino Games',
    logo: '/images/portfolio-logos/dino-games.jpeg',
    oneLiner:
      'Sourced, structured, and closed a cash-flow-positive mobile game acquisition, from off-market discovery to operator deployment in 8 weeks.',
    metrics: [
      { val: '500+', label: 'Outbound' },
      { val: '~130', label: 'Conversations' },
      { val: '1.1x', label: 'Revenue Multiple' },
      { val: '~8 Wks', label: 'Time to Close' },
    ],
    storyLink: '/stories/dino-games',
  },
  {
    tag: 'Sourcing to Close',
    tagClass: 'sourcing',
    price: '$110K',
    name: 'Runify',
    logo: '/images/portfolio-logos/runify.png',
    oneLiner:
      'Sourced, diligenced, and structured a mobile app acquisition with only $20K deployed at close, protected by a performance-linked earn-out.',
    metrics: [
      { val: '~500', label: 'Outbound' },
      { val: '~45 Days', label: 'Time to Close' },
      { val: '$20K', label: 'Upfront Capital' },
      { val: '33%', label: 'MRR Correction' },
    ],
    storyLink: '/stories/runify',
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
    storyLink: '/stories/smartprompt',
  },
];

/* -- stats bar (now rendered inline with NumberTicker) -- */

/* -- component -- */
export default function PortfolioContent() {
  const gridRef = useRef<HTMLDivElement>(null);

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
    <div className="page portfolio-page">
      {/* -- Hero -- */}
      <div className="page-hero">
        <div className="section-eyebrow">Case Studies</div>
        <h1 className="section-title">Deal Portfolio</h1>
        <p className="section-body">
          Case studies from our advisory, sourcing, and diligence engagements across digital assets.
        </p>

        {/* Stats bar */}
        <div className="dash-stats-bar">
          <div className="dash-stat">
            <div className="ds-val"><NumberTicker value={5} /></div>
            <div className="ds-label">Engagements</div>
          </div>
          <div className="dash-stat">
            <div className="ds-val">$<NumberTicker value={1.96} startValue={1.5} decimalPlaces={2} />M+</div>
            <div className="ds-label">Total Deal Value</div>
          </div>
          <div className="dash-stat">
            <div className="ds-val"><NumberTicker value={2100} startValue={1800} /></div>
            <div className="ds-label">Analyst Hours</div>
          </div>
          <div className="dash-stat">
            <div className="ds-val"><NumberTicker value={100} startValue={85} suffix="%" /></div>
            <div className="ds-label">Buyer-Side</div>
          </div>
        </div>
      </div>

      {/* -- Deal Grid -- */}
      <div className="content-section" ref={gridRef}>
        <div className="deal-grid">
          {deals.map((d, i) => {
            const inner = (
              <>
                <div className="deal-card-top">
                  <span className={`deal-tag ${d.tagClass}`}>{d.tag}</span>
                  <span className="deal-price">{d.price}</span>
                </div>
                {d.logo && (
                  <div className="deal-logo">
                    <img src={d.logo} alt={`${d.name} – ${d.tag} – Kautilya Portfolio`} />
                  </div>
                )}
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
                  href={d.storyLink}
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

      {/* Service Cards */}
      <div className="portfolio-services">
        <div className="engage-service-card">
          <BorderBeam duration={10} colorFrom="rgba(201,185,154,0.7)" colorTo="rgba(201,185,154,0.05)" />
          <div className="service-accent service-accent--advisory" />
          <div className="service-eyebrow">BUY-SIDE ADVISORY</div>
          <p className="service-desc">
            We construct proprietary acquisition pipelines on demand: market mapping, deal sourcing, diligence, and execution across digital assets, SaaS, and micro-PE.
          </p>
          <Link href="/engage" className="service-cta">Start a mandate →</Link>
        </div>
        <div className="engage-service-card">
          <BorderBeam duration={10} delay={5} colorFrom="rgba(201,185,154,0.5)" colorTo="rgba(201,185,154,0.05)" />
          <div className="service-accent service-accent--intelligence" />
          <div className="service-eyebrow">MARKET INTELLIGENCE</div>
          <p className="service-desc">
            Sector analyses, acquisition frameworks, and deal breakdowns, built from real engagements, not theory. We publish what we learn.
          </p>
          <Link href="/stories" className="service-cta">Read our stories →</Link>
        </div>
      </div>
    </div>
  );
}
