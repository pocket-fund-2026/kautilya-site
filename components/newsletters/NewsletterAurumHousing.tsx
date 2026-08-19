'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

const IMG_BASE = '/images/newsletter/aurum-housing-com-acquisition';

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="deal-stars" aria-label={`${value} out of 5`}>
      {'★'.repeat(full)}
      {half ? '⯨' : ''}
      {'☆'.repeat(empty)}
      <span className="deal-stars-value">{value}</span>
    </span>
  );
}

export default function NewsletterAurumHousing() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('REA didn\'t sell Housing.com for cash — it swapped operating control for a 24.9% stake in Aurum PropTech. The deal-structure teardown, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent("Aurum's Housing.com Acquisition, Explained");
    const body = encodeURIComponent(`Thought you'd find this useful: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }, []);

  const copyLink = useCallback((btn: HTMLButtonElement) => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      btn.classList.add('copied');
      const tooltip = btn.querySelector('.tooltip');
      if (tooltip) tooltip.textContent = 'Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        if (tooltip) tooltip.textContent = 'Copy link';
      }, 2000);
    });
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-author-byline {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 14px;
          margin-bottom: 0;
        }
        .blog-author-byline a {
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .blog-author-byline a:hover { border-bottom-color: var(--gold); }

        .currency-note {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13px;
          font-style: italic;
          color: var(--text-muted);
          margin: 14px 0 0;
          line-height: 1.7;
        }

        .story-body h3 {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 21px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.5px;
          margin: 32px 0 12px;
          line-height: 1.3;
        }

        /* Deal snapshot + numbers tables */
        .deal-table-wrap {
          margin: 32px 0;
          border: 1px solid var(--border);
          border-radius: 3px;
          overflow-x: auto;
        }
        .deal-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14.5px;
        }
        .deal-table th {
          text-align: left;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          padding: 12px 18px;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          white-space: nowrap;
        }
        .deal-table td {
          padding: 12px 18px;
          border-bottom: 1px solid var(--border);
          color: var(--text-secondary);
          line-height: 1.6;
          vertical-align: top;
        }
        .deal-table tr:last-child td { border-bottom: none; }
        .deal-table td:first-child {
          color: var(--text-primary);
          font-weight: 500;
          white-space: nowrap;
        }
        .deal-table td.status-reported { color: var(--text-secondary); }
        .deal-table td.status-estimated {
          color: var(--gold);
          font-style: italic;
        }

        .deal-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .deal-tag {
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 4px 10px;
        }

        /* Deal score table */
        .deal-score-table { width: 100%; border-collapse: collapse; font-family: var(--font-lora), 'Lora', serif; font-size: 14px; }
        .deal-score-table td { padding: 14px 18px; border-bottom: 1px solid var(--border); color: var(--text-secondary); }
        .deal-score-table tr:last-child td { border-bottom: none; }
        .deal-score-table tr.overall-row td {
          color: var(--text-primary);
          font-weight: 500;
          background: rgba(201,185,154,0.04);
        }
        .deal-stars { color: var(--gold); letter-spacing: 1px; font-size: 15px; white-space: nowrap; }
        .deal-stars-value { color: var(--text-muted); font-size: 12px; margin-left: 8px; letter-spacing: 0; }

        .deal-verdict {
          margin-top: 18px;
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.85;
        }
        .deal-verdict strong { color: var(--text-primary); }

        /* Sources & method appendix */
        .sources-appendix {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .sources-appendix h3 {
          font-size: 15px;
          letter-spacing: 1px;
          margin: 24px 0 8px;
        }
        .sources-appendix p,
        .sources-appendix li {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.8;
        }
        .sources-appendix ul { margin: 0 0 16px; padding-left: 18px; }

        /* CTA button */
        .story-coda .coda-link {
          display: inline-block;
          margin-top: 24px;
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--canvas);
          background: var(--gold);
          padding: 13px 30px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .story-coda .coda-link:hover { opacity: 0.88; }
        .story-coda .coda-link.secondary {
          background: transparent;
          border: 1px solid var(--gold-dim);
          color: var(--gold);
          margin-left: 12px;
        }

        /* Editorial images */
        .blog-hero-image {
          margin: 32px 0 40px;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .blog-hero-image img { width: 100%; height: auto; display: block; }

        .blog-figure {
          margin: 40px 0;
          border-radius: 3px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.015);
        }
        .blog-figure img { width: 100%; height: auto; display: block; }

        @media (max-width: 640px) {
          .story-coda .coda-link.secondary { margin-left: 0; margin-top: 12px; }
        }
      `}} />

      <div className="reading-progress" id="readingProgress" />

      <div className="share-bar" id="shareBar">
        <button className="share-btn" onClick={shareTwitter} aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          <span className="tooltip">Twitter / X</span>
        </button>
        <button className="share-btn" onClick={shareLinkedIn} aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          <span className="tooltip">LinkedIn</span>
        </button>
        <button className="share-btn" onClick={(e) => copyLink(e.currentTarget)} aria-label="Copy link">
          <svg viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="tooltip">Copy link</span>
        </button>
        <button className="share-btn" onClick={shareEmail} aria-label="Share via email">
          <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="tooltip">Email</span>
        </button>
      </div>

      {/* ── Hero ── */}
      <div className="story-hero" id="storyStart">
        <Link href="/newsletter" className="back-link">← Kautilya Newsletter</Link>
        <div className="meta-row">
          <span className="meta-tag">Deal Teardown</span>
          <span className="meta-tag">India</span>
          <span className="meta-tag">11 min read</span>
        </div>
        <h1>Aurum&apos;s Housing.com Acquisition, Explained</h1>
        <div className="subtitle">
          How REA &ldquo;Exited&rdquo; by Becoming Aurum&apos;s Biggest Shareholder
        </div>
        <p className="blog-author-byline">
          By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;Kautilya Deal Table teardown&nbsp;&nbsp;·&nbsp;&nbsp;Published 25 July 2026&nbsp;&nbsp;·&nbsp;&nbsp;Deal announced 16 July 2026
        </p>
        <p className="currency-note">
          Currency note: all figures are converted at approximate current rates: ~₹96.6/$1 and ~$0.70/AUD1 (July 2026 spot rates).
          Every conversion is a Kautilya estimate, not an independently disclosed figure; see Sources &amp; Method.
        </p>
        <div className="hero-line" />

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">₹458 Cr</div>
            <div className="metric-label">Deal value · all-stock</div>
          </div>
          <div className="metric">
            <div className="metric-value">5.54% → 24.90%</div>
            <div className="metric-label">REA&apos;s stake in Aurum</div>
          </div>
          <div className="metric">
            <div className="metric-value">~AUD 110M</div>
            <div className="metric-label">Implied loss to REA</div>
          </div>
        </div>
      </div>

      <article className="story-body">
        <div className="blog-hero-image">
          <Image
            src={`${IMG_BASE}/aurum-housing-hero.webp`}
            alt={'REA "exited" Housing.com and it became Aurum\'s biggest shareholder — a zero-cash, all-share deal that rewired an MNC\'s India exit, ₹458 crore, 100% share swap, REA stake 5.54% to 24.90%'}
            title="Aurum's Housing.com acquisition — deal overview"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <p>
          REA Group &ldquo;exited&rdquo; Housing.com for ₹458 crore (~$47.4M), and took every rupee
          of it in stock, not cash. REA&apos;s stake in the acquirer, listed proptech Aurum
          PropTech, jumped from 5.54% to 24.90%, making the seller the single largest
          non-promoter shareholder of the company that just bought its India business. On the
          reported numbers, this books REA a AUD 110 million (~$77M / ~₹744 crore) loss. But REA
          didn&apos;t leave India; it rotated. Operating control of one portal traded for a
          quarter of a listed acquirer. For any advisor sitting across from an MNC parent
          that&apos;s done running its Indian subsidiary, this all-share, all-stock structure is
          now the template to know.
        </p>

        <h2>The Snapshot</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <tbody>
              <tr><td>Buyer</td><td>Aurum PropTech Ltd (BSE-listed; formerly Majesco)</td></tr>
              <tr><td>Target</td><td>Locon Solutions Pvt Ltd, parent of Housing.com</td></tr>
              <tr><td>Seller</td><td>REA India Pte Ltd (REA Group, Australia)</td></tr>
              <tr><td>Sector</td><td>Proptech / real estate marketplaces</td></tr>
              <tr><td>Size / price</td><td>₹458.06 crore (~$47.4M), 100% share swap, zero cash</td></tr>
              <tr><td>Structure</td><td>All-share preferential issue: 1,97,93,309 Aurum shares at ₹231.42/share (~$2.40/share) to REA; REA&apos;s Aurum stake rises 5.54% → 24.90%</td></tr>
              <tr><td>Announced</td><td>July 16, 2026 (board approval same day; BSE intimation same day)</td></tr>
              <tr><td>Region</td><td>India (target); Australia (seller)</td></tr>
              <tr>
                <td>Tags</td>
                <td>
                  <div className="deal-tags">
                    <span className="deal-tag">Consumer &amp; Commerce</span>
                    <span className="deal-tag">Proptech Consolidation</span>
                    <span className="deal-tag">All-Share Preferential Acquisition</span>
                    <span className="deal-tag">~$47M</span>
                    <span className="deal-tag">MNC-Exit-Via-Equity-Carry Signal</span>
                    <span className="deal-tag">Advisor Lens</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pull-quote">
          <p>
            REA didn&apos;t sell Housing.com for cash. It swapped operating control for a 24.90%
            stake in the buyer, converting a portfolio exit that would have crystallized a real
            loss into a bet on the acquirer&apos;s future instead.
          </p>
        </div>

        <h2>What Happened</h2>

        <h3>The announcement</h3>
        <ul className="constraint-list">
          <li>July 16, 2026: Aurum PropTech&apos;s board approves acquiring 100% of Locon Solutions (Housing.com&apos;s parent) for ₹458.06 crore (~$47.4M), covering equity shares, compulsorily convertible preference shares, and debentures on a fully diluted basis.</li>
          <li>The entire consideration is paid in Aurum stock: 1,97,93,309 shares issued to REA at ₹231.42/share (~$2.40/share), on a preferential basis. No cash changes hands.</li>
          <li>REA&apos;s Aurum stake rises from 5.54% to 24.90%, deliberately just under the 25% threshold that would trigger a mandatory open offer to Aurum&apos;s public shareholders.</li>
          <li>Same day, Aurum also issues 51,00,000 warrants to its own promoter at the identical ₹231.42 price (up to ₹118 crore / ~$12.2M), taking promoter holding to 41.17% fully diluted.</li>
        </ul>

        <h3>The company underneath</h3>
        <ul className="constraint-list">
          <li>Locon Solutions, founded 2012, owns Housing.com, one of India&apos;s largest real estate marketplaces: ~58 million average monthly visits, ~12 million monthly active users, spanning search, developer inventory, brokerage, and rentals.</li>
          <li>Locon&apos;s revenue: FY24 ₹447.49 crore (~$46.3M), FY25 ₹687.46 crore (~$71.2M, +53.7% YoY), FY26 ₹309.93 crore (~$32.1M, unaudited). That&apos;s a ~55% drop from FY25 that is not yet explained in public filings.</li>
          <li>Aurum itself: ₹241.19/share (~$2.50/share) on deal day, ~₹1,738 crore (~$180M) market cap, 52-week range ₹151.90–264.64 (~$1.57–$2.74), trading around a P/E of ~96.</li>
        </ul>

        <h3>The timing</h3>
        <ul className="constraint-list">
          <li>This is REA&apos;s second asset sold to Aurum. PropTiger went across in September 2025 for ₹86.45 crore (~$9.0M), an all-share deal that first took REA to its 5.54% starting stake.</li>
          <li>REA entered India in January 2017 via Elara Technologies, investing US$50M (~₹483 crore at current rates, for scale reference only, not the 2017 historical rate) to combine PropTiger and Housing.com. Total investment over nine years reached roughly AUD 300 million (~$210M / ~₹2,029 crore).</li>
          <li>Two all-share swaps, eighteen months apart, took REA from an operator with ~$210M invested to a 24.90% shareholder with zero cash recovered: a full rotation, not a single event.</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/aurum-housing-operating-control-swap.webp`}
            alt="Before and after: REA owned Housing.com outright with zero cash exchanged; after the deal, Aurum owns Housing.com, REA holds 24.90% of Aurum, paid entirely in Aurum shares"
            title="Operating control traded for equity carry"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2>The Numbers</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Metric</th><th>Value</th><th>Period</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>Deal value</td><td>₹458.06 crore (~$47.4M)</td><td>At announcement</td><td className="status-reported">Reported (BSE filing)</td></tr>
              <tr><td>REA&apos;s total India investment</td><td>~AUD 300M (~$210M / ~₹2,029 crore)</td><td>2017–2026</td><td className="status-reported">Reported</td></tr>
              <tr><td>Implied loss to REA</td><td>~AUD 110M (~$77M / ~₹744 crore)</td><td>On reported metrics</td><td className="status-reported">Reported</td></tr>
              <tr><td>Shares issued to REA</td><td>1,97,93,309 at ₹231.42/share (~$2.40/share)</td><td>At close</td><td className="status-reported">Reported</td></tr>
              <tr><td>REA&apos;s Aurum stake, pre → post</td><td>5.54% → 24.90%</td><td>At close</td><td className="status-reported">Reported</td></tr>
              <tr><td>Locon revenue, FY24</td><td>₹447.49 crore (~$46.3M)</td><td>FY24</td><td className="status-reported">Reported</td></tr>
              <tr><td>Locon revenue, FY25</td><td>₹687.46 crore (~$71.2M)</td><td>FY25</td><td className="status-reported">Reported</td></tr>
              <tr><td>Locon revenue, FY26</td><td>₹309.93 crore (~$32.1M)</td><td>FY26</td><td className="status-reported">Reported, unaudited</td></tr>
              <tr><td>Deal multiple</td><td>~0.67x FY25 revenue</td><td>N/A</td><td className="status-estimated">Estimated: Kautilya calc</td></tr>
              <tr><td>Prior PropTiger deal</td><td>₹86.45 crore (~$9.0M), all-share</td><td>Sep 2025</td><td className="status-reported">Reported</td></tr>
              <tr><td>Aurum market cap, deal day</td><td>~₹1,738 crore (~$180M)</td><td>Jul 2026</td><td className="status-reported">Reported</td></tr>
            </tbody>
          </table>
        </div>

        <h3>What we can infer</h3>
        <ul className="constraint-list">
          <li>The ~0.67x FY25-revenue multiple (₹458 crore deal value ÷ ₹687 crore FY25 revenue) is a genuinely low print for Indian consumer-tech: a 70 to 85% haircut against the 2x to 4x revenue multiples late-stage proptech rounds fetched in 2022 to 24.</li>
          <li>That low multiple reflects three things at once, not one: FY26 revenue softness, REA&apos;s priority on exiting rather than maximizing price, and consideration paid in equity rather than cash (which itself tends to price cheaper than a cash deal would).</li>
          <li>A pure-cash version of this same deal would likely have printed even lower. The equity structure is doing some of the work of making 0.67x look acceptable to REA at all.</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/aurum-housing-exit-multiples.webp`}
            alt="Real-estate portal exit multiples: Housing.com priced at 0.67x revenue versus a 2x-4x range for late-stage private proptech in 2022-24, a 70-85% haircut from peak private marks"
            title="What the exit multiples are actually printing"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h3>The open question the piece can&apos;t resolve</h3>
        <ul className="constraint-list">
          <li>Locon&apos;s disclosed FY26 revenue of ₹309.93 crore (~$32.1M) is down roughly 55% on FY25&apos;s ₹687.46 crore (~$71.2M), and it&apos;s explicitly marked unaudited. The deal&apos;s Regulation 30 annexure sizes the target on the FY25 figure, not FY26.</li>
          <li>Aurum&apos;s diligence evidently judged the drop recoverable, or a basis artefact, but that judgment isn&apos;t explained in the material available. The EGM notice (August 14, 2026) is where that explanation should surface, and it hasn&apos;t yet.</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/aurum-housing-revenue-swing.webp`}
            alt="Locon's revenue swing: FY24 Rs 447 crore, FY25 Rs 687 crore (+53.7% YoY), FY26 Rs 310 crore unaudited — a roughly 55% drop that is unexplained in public filings"
            title="Locon's revenue swing — the deal's open question"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h2>The Structure</h2>
        <p>
          This is an all-share preferential issue engineered around a specific regulatory line.
          The design carries as much of the story as the price.
        </p>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/aurum-housing-stake-trigger-line.webp`}
            alt="REA's Aurum stake, engineered just under the trigger line: from 5.54% pre-deal to 24.90% post-deal, a +19.36% increase deliberately kept under the 25% open-offer trigger"
            title="REA's Aurum stake, engineered just under the 25% open-offer trigger"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <ul className="constraint-list">
          <li><strong>Zero cash, entirely in stock.</strong> Aurum pays for a ₹458 crore (~$47.4M) acquisition, more than a quarter of its own ~₹1,738 crore (~$180M) market cap, without touching its treasury or raising new public capital.</li>
          <li><strong>Priced at the regulatory floor.</strong> ₹231.42/share (~$2.40/share) is the SEBI ICDR floor (the higher of the 90-day or 10-day VWAP), sitting about 4% below Aurum&apos;s deal-day close of ₹241.19 (~$2.50).</li>
          <li><strong>24.90% is an engineered ceiling, not a coincidence.</strong> Crossing 25% would trigger a mandatory open offer to Aurum&apos;s public shareholders under India&apos;s Takeover Regulations. Landing at 24.90% is the deliberate stop just short of that line.</li>
          <li><strong>A three-year lock-in.</strong> SEBI&apos;s rules on preferential allotments to non-promoters lock REA out of selling its new shares until roughly Q3 FY29.</li>
        </ul>

        <h3>Which risk did each side actually manage, and which did they leave open?</h3>
        <ul className="constraint-list">
          <li><strong>Aurum&apos;s managed risk.</strong> It bought scale (58 million monthly visits, a major consolidation move) without straining its balance sheet, and it avoided both a cash outlay and a public dilution event. The preferential-to-one-named-allottee route sidesteps both.</li>
          <li><strong>REA&apos;s accepted risk.</strong> It converted a certain, crystallized loss into an uncertain, three-year-locked bet on Aurum&apos;s share price. Whether that trade pays off depends entirely on Aurum successfully integrating Housing.com and re-rating, a risk REA now carries for three years with no ability to exit early.</li>
        </ul>

        <h2>Why It Matters</h2>
        <p>
          Aurum&apos;s framing, &ldquo;we&apos;re consolidating the sector,&rdquo; is true but
          incomplete. Three sharper reads:
        </p>

        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">Read 01</div>
            <p><strong>REA rotated its exposure; it didn&apos;t reduce it.</strong> Taking ₹458
            crore (~$47.4M) in cash would have crystallized the AUD 110M (~$77M) loss and ended
            REA&apos;s India story cleanly. Instead, REA holds 24.90% of the combined platform.
            Any post-integration re-rating of Aurum flows back to REA, for better or worse. This
            is a portfolio rotation wearing the language of a divestment, not an actual exit.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Read 02</div>
            <p><strong>Every listed mid-market acquirer with a credible share price now has this
            playbook.</strong> Aurum moved ₹458 crore (~$47.4M) of value without a rupee of cash
            or a public capital raise. The preferential-issue-to-one-named-allottee route is
            available to any listed company with stock investors will accept as payment. Expect
            more stock-for-asset offers from listed Indian acquirers chasing consolidation, not
            just this one.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Read 03</div>
            <p><strong>India&apos;s independent proptech portal count just dropped to
            three.</strong> Housing.com and PropTiger now both sit under Aurum. Magicbricks
            belongs to Times Group; 99acres to Info Edge; NoBroker and a handful of smaller
            players are what&apos;s left independent. A founder-owned proptech business shopping
            for a strategic buyer just lost a seat at the table.</p>
          </div>
        </div>

        <h2>The Buyer&apos;s Takeaway</h2>
        <p>
          Written for the advisor/operator lens, what this teaches someone structuring an exit
          for a foreign parent, or a consolidation for a listed acquirer:
        </p>
        <ul className="constraint-list">
          <li><strong>1. An all-share preferential issue is a real alternative to a cash sale, not a consolation prize.</strong> If your client is an MNC parent done running its Indian subsidiary, this structure preserves India upside instead of forcing a clean, lower-value cash exit. Model the three-year lock-in and the seller&apos;s ongoing exposure to the buyer&apos;s share price before calling it worse than cash.</li>
          <li><strong>2. Watch for the number just under a regulatory trigger.</strong> 24.90% next to a 25% open-offer threshold is not a coincidence; it&apos;s an engineered ceiling. Any large preferential allotment landing suspiciously close to a regulatory line deserves a second look at what threshold it&apos;s avoiding.</li>
          <li><strong>3. An unexplained revenue swing doesn&apos;t have to kill a deal, but it should change your price.</strong> Locon&apos;s FY26 revenue nearly halved from FY25, unaudited, unexplained in public filings, and the deal still priced off the higher FY25 figure. If you&apos;re advising the buyer side, that&apos;s exactly the kind of gap that should show up as a lower multiple or a holdback, not get absorbed silently.</li>
        </ul>
        <p>
          The limit: this structure depends on the buyer being listed with a share price sellers
          are willing to accept as payment, and on the seller genuinely preferring optioned
          upside over a clean cash exit. A seller who needs cash now, or a buyer whose stock
          isn&apos;t credible currency, can&apos;t run this playbook.
        </p>

        <h2>The Kautilya Deal Score</h2>
        <div className="deal-table-wrap">
          <table className="deal-score-table">
            <tbody>
              <tr><td>Price Discipline</td><td><Stars value={4.5} /></td></tr>
              <tr><td>Structure &amp; Risk Absorption</td><td><Stars value={4.5} /></td></tr>
              <tr><td>Cash-Flow Quality</td><td><Stars value={2} /></td></tr>
              <tr><td>Strategic Fit / Value Path</td><td><Stars value={4} /></td></tr>
              <tr><td>Replicability</td><td><Stars value={4} /></td></tr>
              <tr className="overall-row"><td>Overall</td><td><Stars value={3.8} /></td></tr>
            </tbody>
          </table>
        </div>
        <p className="deal-verdict">
          <strong>Verdict: Solid.</strong> An exceptionally well-engineered structure, cheap for
          the buyer, cash-preserving, regulatorily precise, built on top of a target whose most
          recent year of revenue is a genuine, unresolved red flag. The structure is the
          transferable lesson; the FY26 numbers are the reason this isn&apos;t scored higher.
        </p>

        <div className="pull-quote">
          <p>
            &ldquo;I&apos;d study this structure harder than I&apos;d study this specific deal.
            Getting a cash-strapped listed acquirer to pay for a real asset with paper, at a
            price barely inside the regulatory floor, while locking the seller in for three
            years, that&apos;s genuinely elegant dealmaking, and it&apos;s replicable well below
            this deal&apos;s size. What I wouldn&apos;t do is treat the 0.67x multiple as evidence
            Aurum won on price alone; nobody has explained why Housing.com&apos;s revenue nearly
            halved in FY26, and until that&apos;s on the record, I&apos;d want that gap priced
            into the deal, not waved through on FY25&apos;s numbers.&rdquo;
          </p>
        </div>
        <p className="blog-author-byline" style={{ marginTop: -32, marginBottom: 32 }}>— Dev Shah, The Operator&apos;s Take</p>

        <div className="sources-appendix">
          <div className="phase-label">Sources &amp; Method</div>
          <h3>Sources, by confidence</h3>
          <ul>
            <li>High: Deal terms, structure, share issuance, and stake mechanics — Aurum PropTech&apos;s BSE intimation (July 16, 2026).</li>
            <li>High: Deal narrative, prior PropTiger deal, revenue figures — Business Standard, Entrackr, Business Upturn.</li>
            <li>Medium-high: Aurum market cap, share price history, promoter holding — Screener.</li>
            <li>Medium-high: REA&apos;s nine-year India investment history — RP Realty Plus, Elite Agent, Entrackr.</li>
            <li>Medium: Comparable proptech valuation multiples (2022 to 24 private rounds) — Kautilya sector analysis, not independently re-verified per source in this pass.</li>
          </ul>
          <h3>Kautilya&apos;s own calculations (not disclosed figures)</h3>
          <p>
            The ~0.67x FY25-revenue multiple, and every USD conversion of a disclosed ₹ or AUD
            figure in this piece (converted at approximate July 2026 spot rates: ~₹96.6/$1,
            ~$0.70/AUD1, sourced via live web search, not a fixed internal rate; treat every
            converted figure as directional, not exact).
          </p>
          <h3>Open items we could not verify</h3>
          <ul>
            <li>Why Locon&apos;s FY26 revenue fell ~55% from FY25. No public explanation exists yet; the EGM notice (August 14, 2026) may address it.</li>
            <li>Whether the ~0.67x multiple would look materially different computed against FY26&apos;s (lower, unaudited) revenue instead of FY25&apos;s.</li>
            <li>The precise terms of REA&apos;s three-year lock-in beyond the standard SEBI non-promoter preferential-allotment rule.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Every Kautilya Teardown tags buyer, target, structure, and score the same way, so you
            can compare them later. Get the next one the day it publishes.
          </p>
          <Link href="/newsletter" className="coda-link">Read More Teardowns</Link>
          <a
            href="https://kautilya-pe.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="coda-link secondary"
          >
            Subscribe on Beehiiv
          </a>
        </div>
      </article>
    </>
  );
}
