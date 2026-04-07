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
      'A $1.8M wellness business put 19 websites and 30,134 transactions in front of us. We checked every dollar in under 15 days and flagged the ones the seller had missed.',
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
      'A buyer wanted to grow by acquisition in a sector where almost nobody sells. We mapped the market from scratch and handed them a list of real, contactable owners — work that would have cost them about £11.5K to do in-house.',
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
    // Logo intentionally omitted: the previous asset was Google's well-known
    // Chrome offline T-Rex graphic, which read as a borrowed brand mark
    // rather than this company's own logo. Card falls back to text-only.
    oneLiner:
      'A buyer asked us to find a profitable mobile game that was already paying for itself. Eight weeks later they owned one — and an operator was running it.',
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
      'A $110K mobile app deal where the buyer only had to put $20K in cash on the table at closing. The rest is paid out of the app\'s own future revenue.',
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
      'We walked away from two deals before finding the right one. The buyer paid $12K for an education business that comparable buyers were paying ~200x more for.',
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
          What we've actually done for buyers — finding deals, checking the numbers, and getting them across the line.
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
            Tell us what you want to buy. We'll find the companies, check them out, and help you close — even in markets where nothing is for sale.
          </p>
          <Link href="/engage" className="service-cta">Start a mandate →</Link>
        </div>
        <div className="engage-service-card">
          <BorderBeam duration={10} delay={5} colorFrom="rgba(201,185,154,0.5)" colorTo="rgba(201,185,154,0.05)" />
          <div className="service-accent service-accent--intelligence" />
          <div className="service-eyebrow">MARKET INTELLIGENCE</div>
          <p className="service-desc">
            Long-form notes on the deals we worked on, why we walked from the ones we didn't, and what we'd do differently. Written from the chair, not a textbook.
          </p>
          <Link href="/stories" className="service-cta">Read our stories →</Link>
        </div>
      </div>
    </div>
  );
}
