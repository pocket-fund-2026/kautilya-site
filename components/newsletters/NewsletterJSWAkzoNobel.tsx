'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

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

export default function NewsletterJSWAkzoNobel() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('JSW paid up to ₹12,915 Cr for Akzo Nobel India and became India\'s No. 4 paints player overnight. A deal-structure teardown, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('JSW Paints–Akzo Nobel Deal, Explained');
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
      {/* Only styles not covered by globals.css */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-author-byline {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13px;
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

        .story-body h3 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
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
          font-size: 13.5px;
        }
        .deal-table th {
          text-align: left;
          font-size: 10px;
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

        /* Three-price comparison strip */
        .price-compare {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 3px;
          overflow: hidden;
          margin: 32px 0;
        }
        .pc-cell {
          padding: 28px 18px;
          background: var(--canvas);
          text-align: center;
        }
        .pc-cell.highlight { background: rgba(201,185,154,0.04); }
        .pc-value {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 30px;
          font-weight: 500;
          line-height: 1;
          color: rgba(201,185,154,0.4);
          margin-bottom: 10px;
        }
        .pc-cell.highlight .pc-value { color: var(--gold); }
        .pc-desc {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .pc-cell.highlight .pc-desc { color: var(--text-secondary); }

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
          font-size: 12.5px;
          color: var(--text-muted);
          line-height: 1.8;
        }
        .sources-appendix ul { margin: 0 0 16px; padding-left: 18px; }

        /* FAQ */
        .blog-faq {
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid var(--border);
        }
        .blog-faq-item {
          border-bottom: 1px solid var(--border);
          padding: 22px 0;
        }
        .blog-faq-q {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 10px;
        }
        .blog-faq-a {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.9;
          margin: 0;
        }

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

        @media (max-width: 640px) {
          .price-compare { grid-template-columns: 1fr; }
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
          <span className="meta-tag">Consumer &amp; Retail</span>
          <span className="meta-tag">13 min read</span>
        </div>
        <h1>JSW Paints&ndash;Akzo Nobel Deal, Explained</h1>
        <div className="subtitle">
          How ₹12,915 Crore Bought India&apos;s No. 4 Paints Position Overnight
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;Kautilya Deal Table teardown&nbsp;&nbsp;·&nbsp;&nbsp;SPA signed 27 June 2025&nbsp;&nbsp;·&nbsp;&nbsp;Closed 10 December 2025</p>
        <div className="hero-line" />

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">₹12,915 Cr</div>
            <div className="metric-label">Max deal value</div>
          </div>
          <div className="metric">
            <div className="metric-value">25×</div>
            <div className="metric-label">EV / EBITDA paid</div>
          </div>
          <div className="metric">
            <div className="metric-value">No. 4</div>
            <div className="metric-label">Market position won</div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <article className="story-body">
        <p>
          Asian Paints took eight decades to build its market dominance. Birla Opus has burned
          through crores since 2024 grinding out 6&ndash;7% share. JSW Paints took a different
          route: it bought Akzo Nobel India, the maker of Dulux, for up to ₹12,915 crore, and
          collected in one deal what organic building could not deliver in time &mdash; a premium
          brand, a profitable dealer network, roughly 7% market share, and the No. 2 position in
          industrial coatings.
        </p>
        <p>
          The company is now called JSW Dulux Ltd. And the timing was the sharpest part: JSW
          bought a consistently profitable incumbent precisely while the market leaders were
          distracted by the most brutal price war Indian paints has seen.
        </p>
        <p>
          That is the headline. The more interesting story is why a six-year-old paints business
          would pay a premium multiple for an asset it could, in theory, have tried to build
          organically &mdash; a textbook case study in buy-versus-build strategy that every
          founder and PE-backed platform eventually faces.
        </p>

        <h2>The Deal at a Glance</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <tbody>
              <tr><td>Buyer</td><td>JSW Paints Ltd (with JTPM Metal Traders, JSW EduInfra); part of the $23B JSW Group</td></tr>
              <tr><td>Target</td><td>Akzo Nobel India Ltd &mdash; Dulux, Sikkens, International brands</td></tr>
              <tr><td>Seller</td><td>Akzo Nobel N.V. via ICI Ltd (50.46%) and Akzo Nobel Coatings Intl B.V. (24.3%)</td></tr>
              <tr><td>SPA consideration</td><td>Up to ₹8,986 Cr for up to 74.76%, at ₹2,762.05/share (+ up to ₹447 Cr contingent)</td></tr>
              <tr><td>Open offer</td><td>Up to ₹3,929.06 Cr for 25.24% at ₹3,417.77/share (SEBI formula)</td></tr>
              <tr><td>Maximum total</td><td>~₹12,915 Cr (~$1.5B); India&apos;s largest paints-sector deal</td></tr>
              <tr><td>Valuation</td><td>EV ~€1.4B; 25x EBITDA (Akzo NV FY2025 disclosure; ~22x analyst est. at announcement)</td></tr>
              <tr><td>Announced &rarr; closed</td><td>Jun 27, 2025 &rarr; Dec 10, 2025 (CCI cleared Sep 23)</td></tr>
              <tr><td>Stake at close</td><td>60.76% (SPA) + 0.44% (open offer) = 61.2%</td></tr>
              <tr>
                <td>Tags</td>
                <td>
                  <div className="deal-tags">
                    <span className="deal-tag">Paints &amp; Coatings</span>
                    <span className="deal-tag">MNC India Exit</span>
                    <span className="deal-tag">SPA + Open Offer</span>
                    <span className="deal-tag">~$1.5B</span>
                    <span className="deal-tag">Buy-vs-Build Signal</span>
                    <span className="deal-tag">Advisor Lens</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Deal Timeline: 2019 to 2026</h2>
        <p>Six years from launch to No. 4: buying what building couldn&apos;t deliver in time.</p>
        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">2019</div>
            <p><strong>JSW Paints launches, from scratch.</strong> No legacy brand, no dealer
            network, no market share &mdash; just a conglomerate&apos;s stated intent to enter
            paints.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">June 2025</div>
            <p><strong>Signs to buy Dulux.</strong> JSW agrees to pay up to ₹12,915 crore for
            control of Akzo Nobel India, beating rival bidders including an Advent
            International&ndash;Indigo Paints consortium and Pidilite.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">December 2025</div>
            <p><strong>Closes with 61.2%.</strong> CCI clearance lands in September; the deal
            closes in December, and JSW is instantly India&apos;s No. 4 paints player.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">March 2026</div>
            <p><strong>Renamed JSW Dulux Ltd.</strong> Effective March 11, 2026 &mdash; with a
            merger of unlisted JSW Paints into the listed entity widely expected next.</p>
          </div>
        </div>

        <h2>The Numbers Behind the ₹12,915 Crore Deal</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Maximum total</td><td>~₹12,915 Cr (~$1.5B); India&apos;s largest paints-sector deal</td></tr>
              <tr><td>Announced &rarr; closed</td><td>Jun 27, 2025 &rarr; Dec 10, 2025 (CCI cleared Sep 23)</td></tr>
              <tr><td>Seller proceeds</td><td>€922M actual (vs ~€900M guided): €500M debt paydown + €400M buybacks</td></tr>
              <tr><td>Retained by Akzo NV</td><td>Powder coatings business + International Research Centre</td></tr>
              <tr><td>Target financials</td><td>FY25 revenue ₹4,091.21 Cr (4th record year); ~7% market share; No. 2 in industrial</td></tr>
              <tr><td>Combined capacity</td><td>~420,000 KL decorative (ANIL ~250,000 + JSW ~170,000): 4th in India</td></tr>
              <tr><td>Post-close (latest)</td><td>Q3 FY26 PAT ₹74.3 Cr (&minus;31.6%); stock ~₹2,900; FY26E combined revenue ~₹7,000 Cr</td></tr>
            </tbody>
          </table>
        </div>
        <p className="blog-author-byline">
          SPA at ₹2,762.05/share; open offer at ₹3,417.77/share (SEBI formula). Enterprise value
          ~€1.4B, ~25x EBITDA. For context on how India&apos;s mandatory open offer requirement
          works, see the SEBI Substantial Acquisition of Shares and Takeovers (SAST) Regulations,
          which govern every listed-company takeover in India, including this one.
        </p>

        <h2>What Actually Happened: Mumbai and Amsterdam, 2024&ndash;2026</h2>

        <h3>A multinational decided India retail was no longer core</h3>
        <p>
          Akzo Nobel&apos;s October 2024 strategic review concluded that its South Asia decorative
          paints business was worth more sold than kept. The parent exited at 25x EBITDA,
          collected €922 million, and retained the two pieces it valued most: the powder coatings
          business and its International Research Centre.
        </p>
        <p>
          In plain terms: the parent sold the shop but kept the lab and one specialist counter.
          Deciding what stays behind is often where the real negotiation happens in any MNC exit
          from India.
        </p>

        <h3>A conglomerate paid up for speed</h3>
        <p>
          JSW&apos;s stated target was 10% paints market share by the end of 2026 &mdash; a target
          organic growth simply was not going to hit in time. Buying Akzo Nobel India (ANIL)
          delivered brand equity, distribution reach, manufacturing capacity, and existing
          profitability in one closing, beating out rival bidders including the Advent
          International&ndash;Indigo Paints consortium and Pidilite.
        </p>

        <h3>The public delivered a verdict nobody ordered</h3>
        <p>
          Of the 25.24% stake JSW offered to buy from public shareholders at ₹3,417.77 per share,
          shareholders tendered just 0.44%. The stock traded above the offer price for the entire
          window &mdash; holders effectively chose to bet on JSW&apos;s future plans over
          JSW&apos;s cash offer.
        </p>
        <p>
          Why that matters: an undersubscribed open offer at a premium-to-formula price is the
          market signaling that it expects more value ahead &mdash; most likely tied to the widely
          anticipated merger of unlisted JSW Paints into the newly listed JSW Dulux.
        </p>

        <div className="pull-quote">
          <p>
            Three portable lessons. If you advise a company weighing entry into a consolidating
            sector, price the buy-versus-build clock honestly &mdash; six years of organic
            grinding bought JSW ~2% share; one deal bought ~7%. If you advise MNC subsidiaries,
            the Akzo playbook &mdash; review, carve-out, premium multiple, clean exit &mdash; is
            the current template. And if you hold shares in any takeover target, the open-offer
            price is a floor, not a ceiling &mdash; this deal proved the market knows it.
          </p>
        </div>

        <h2>The Two-Price Puzzle</h2>
        <p>
          Why the Seller Took ₹2,762 While the Public Refused ₹3,418. One company. Three different
          prices in a single summer.
        </p>

        <div className="price-compare">
          <div className="pc-cell">
            <div className="pc-value">₹2,762</div>
            <div className="pc-desc">Promoter&apos;s<br />negotiated price</div>
          </div>
          <div className="pc-cell highlight">
            <div className="pc-value">₹3,418</div>
            <div className="pc-desc">Mandated<br />open-offer price</div>
          </div>
          <div className="pc-cell">
            <div className="pc-value">₹3,651</div>
            <div className="pc-desc">Where the market<br />actually traded</div>
          </div>
        </div>
        <p className="blog-author-byline">
          Market reference: Asian Paints exited its own 4.42% stake in ANIL at ₹3,651 on July 9,
          2025.
        </p>

        <h3>Why would a seller accept 16% below market?</h3>
        <p>
          Because ₹2,762.05 was the price for a controlling block, sold in one clean transaction
          with certainty, speed, and no market impact. Trying to sell 74.76% into the open market
          would have crushed the price long before the block could clear. Certainty carries a
          discount when you&apos;re exiting a country. In plain terms: wholesale and retail prices
          differ everywhere. A promoter selling control is selling wholesale.
        </p>

        <h3>Why was the public offered more than the promoter got?</h3>
        <p>
          SEBI&apos;s takeover rules set the open-offer price by a formula that looks back at
          recent trading prices, ensuring public shareholders are never offered less than the
          stock has recently traded for. Here the formula produced ₹3,417.77 &mdash; well above
          the promoter&apos;s negotiated price. The rules worked exactly as intended.
        </p>

        <h3>And why did almost nobody accept even that?</h3>
        <p>
          Because the market price stayed higher still. Shareholders read JSW&apos;s entry as the
          beginning of the story, not the end of it &mdash; with a merger of the unlisted JSW
          Paints into the listed entity widely expected within 2&ndash;3 years. Nobody sells the
          floor when they expect the ceiling.
        </p>

        <div className="pull-quote">
          <p>
            The signal most analyses miss: JSW ended up owning 61.2%, not the 75% legal maximum
            &mdash; and that gap changes the next chapter. The expected merger of JSW Paints into
            JSW Dulux must now clear minority shareholders who just demonstrated, by refusing the
            open offer, that they will not accept a low price. The 0.44% tender wasn&apos;t apathy
            &mdash; it was the minority pre-negotiating the eventual merger ratio.
          </p>
        </div>

        <h2>Three Things This Deal Confirms About India&apos;s Paints War</h2>
        <ul className="constraint-list">
          <li><strong>Consolidation has replaced coexistence.</strong> For decades, Indian paints
          was a stable oligopoly. Birla Opus&apos;s 2024 entry broke that peace &mdash; Asian
          Paints posted its weakest year in decades (FY25 volumes +2.5%, value &minus;5.7%)
          &mdash; and now a top-five asset has changed hands entirely.</li>
          <li><strong>Profitable incumbents are the scarce asset.</strong> Anyone can burn capital
          for share; Birla Opus is proving how expensive that is. What cannot be replicated
          quickly is a trusted premium brand with a profitable dealer network &mdash; that
          scarcity is why ANIL commanded 25x EBITDA in a margin-pressured sector.</li>
          <li><strong>Conglomerates are treating consumer categories as adjacencies.</strong> JSW
          already sells steel and cement into the construction chain; paints is the
          consumer-facing end of the same house. Expect more group-led entries into branded
          consumer categories.</li>
        </ul>

        <h2>Was 25x EBITDA a Sane Price to Pay? Three Ways to Judge It.</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Way to measure it</th><th>What it says here</th></tr>
            </thead>
            <tbody>
              <tr><td>Multiple vs. sector&apos;s listed leaders</td><td>Asian Paints and Berger have historically traded at 40&ndash;60x earnings; against that, 25x EBITDA for control of a premium franchise is rich but not reckless.</td></tr>
              <tr><td>Price vs. what building would cost</td><td>Birla Opus reached ~6&ndash;7% share only through massive capex and industry-wide margin destruction. Buying ~7% profitable share may be cheaper than burning to build it.</td></tr>
              <tr><td>Price vs. the strategic clock</td><td>JSW&apos;s 10%-share-by-2026 target was unreachable organically. Paying a control premium to compress a decade into a year is a rational trade.</td></tr>
            </tbody>
          </table>
        </div>

        <div className="pull-quote">
          <p>
            The discipline: judge a control premium against the cost of the alternative, not
            against the trading multiple alone. 25x EBITDA looks steep until you price what six
            more years of organic grinding would cost in a price war, in capital, margin and time.
            Watch the merger ratio &mdash; Parth Jindal has called merging unlisted JSW Paints
            into listed JSW Dulux &ldquo;natural,&rdquo; with analysts expecting it within
            2&ndash;3 years. The Q3 FY26 profit dip (₹74.3 Cr, &minus;31.6%) is integration cost
            showing up before synergy &mdash; the standard sequence; the FY27 print will show
            whether it completes.
          </p>
        </div>

        <h2>The SPA + Open Offer: How Every Indian Listed-Company Takeover Works</h2>
        <p>
          <strong>Share Purchase Agreement (SPA), in plain terms:</strong> the private contract
          where the buyer agrees to purchase the promoter&apos;s controlling block at a negotiated
          price. Here: up to 74.76% at ₹2,762.05 per share.
        </p>
        <p>
          <strong>Mandatory open offer, in plain terms:</strong> once a buyer agrees to acquire
          control (25%+ of a listed company), SEBI&apos;s takeover code forces it to offer to buy
          at least 26% more from public shareholders, at a price set by formula. The offer sought
          a quarter of the company; it received less than half a percent.
        </p>

        <h3>Three mechanics this deal showcased</h3>
        <ul className="constraint-list">
          <li><strong>The 75% cap shapes everything.</strong> Listed companies must keep at least
          25% with the public. JSW&apos;s maximum was therefore 75%, and Akzo&apos;s ICI even sold
          5% via block deals in September 2025 (at ₹3,358.80, to Goldman, Morgan Stanley, Citi and
          Nippon MF) purely to stay inside the cap before closing.</li>
          <li><strong>The offer price is a formula, not a negotiation.</strong> SEBI&apos;s SAST
          formula looks back at trading prices, producing ₹3,417.77 here, 24% above the
          promoter&apos;s price.</li>
          <li><strong>An undersubscribed offer is information.</strong> JSW budgeted up to ₹3,929
          Cr for the public leg and spent a sliver of it &mdash; a signal the minority is staying
          for the next event.</li>
        </ul>

        <h2>How a Foreign Parent Exits a Listed Indian Subsidiary: The 3-Step Playbook</h2>
        <p>
          <strong>An MNC exit, in plain terms:</strong> a multinational sells its stake in an
          Indian listed subsidiary, usually after a strategic review concludes the capital earns
          more elsewhere. The mechanics are the SPA-plus-open-offer route above, run at the
          parent&apos;s pace.
        </p>
        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">Step 1 &middot; The review sets the perimeter</div>
            <p>Akzo&apos;s October 2024 review decided what was for sale (India decorative) and
            what was not (powder coatings, research centre). The carve-out is where the seller
            protects its crown jewels.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Step 2 &middot; A competitive process sets the price</div>
            <p>JSW won against an Advent-Indigo consortium and Pidilite. Multiple credible bidders
            pushed the outcome to 25x EBITDA &mdash; a negotiated single-buyer sale rarely gets
            there.</p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Step 3 &middot; The residue gets cleaned up fast</div>
            <p>Post-close, ICI sold its remaining ~9% in a December block at ~₹3,150 (a ~13%
            discount that dropped the stock 13% in a day), completing the exit.</p>
          </div>
        </div>

        <div className="pull-quote">
          <p>
            Read this before you touch any MNC-exit situation: the headline price is set at
            signing, but three later prices decide who actually won &mdash; the open-offer
            take-up (here, the public said no), the residual-stake exit discount (here, 13% and a
            one-day stock drop), and, still ahead, the merger ratio with the buyer&apos;s unlisted
            business. An MNC exit is a sequence of prices, not one.
          </p>
        </div>

        <h2>Lessons for Founders, Investors, and Advisors</h2>
        <p>
          If you&apos;re a founder, a PE professional, or an advisor evaluating a similar
          situation, three things from this deal are directly portable:
        </p>
        <ul className="constraint-list">
          <li><strong>Price the buy-versus-build clock honestly.</strong> Organic growth is not
          free just because it avoids a control premium &mdash; it costs time, capital, and
          margin.</li>
          <li><strong>In consolidating sectors, profitable incumbents are the scarcest asset.</strong> Not
          brand awareness or distribution alone, but the combination with existing profitability
          commands premium multiples.</li>
          <li><strong>If you hold minority shares in any takeover target, the open-offer price is
          a floor, not a ceiling.</strong> This deal is a clean, recent, real-world proof point of
          that principle in the Indian market.</li>
        </ul>

        <h2>The Kautilya Deal Score</h2>
        <div className="deal-table-wrap">
          <table className="deal-score-table">
            <tbody>
              <tr><td>Price Discipline</td><td><Stars value={4} /></td></tr>
              <tr><td>Structure &amp; Risk Absorption</td><td><Stars value={4} /></td></tr>
              <tr><td>Cash-Flow Quality</td><td><Stars value={4.5} /></td></tr>
              <tr><td>Strategic Fit / Value Path</td><td><Stars value={4.5} /></td></tr>
              <tr><td>Replicability</td><td><Stars value={3} /></td></tr>
              <tr className="overall-row"><td>Overall</td><td><Stars value={4} /></td></tr>
            </tbody>
          </table>
        </div>
        <p className="deal-verdict">
          <strong>Verdict: Strong.</strong> A competitively priced control acquisition of a
          genuinely profitable, brand-rich incumbent, run through a textbook SPA-plus-open-offer
          structure, timed precisely against a rival&apos;s cash-burning organic push. The
          discount is replicability: this specific setup &mdash; a distracted market leader, an
          MNC ready to exit, a conglomerate with a hard share target and deep pockets &mdash; will
          not recur often at this scale.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much did JSW pay for Akzo Nobel India (Dulux)?</div>
            <p className="blog-faq-a">Up to ₹12,915 crore (~$1.5 billion) in total &mdash; up to ₹8,986 crore for a controlling block bought directly from Akzo Nobel N.V.&apos;s parent entities, plus up to ₹3,929 crore for a mandatory public open offer. The deal closed with JSW holding 61.2% of the company.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why is JSW Paints now called JSW Dulux Ltd?</div>
            <p className="blog-faq-a">After the acquisition closed on December 10, 2025, JSW renamed the company to JSW Dulux Ltd, effective March 11, 2026, to reflect its ownership of the Dulux brand in India.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What market share did JSW gain from the Akzo Nobel deal?</div>
            <p className="blog-faq-a">The combined entity holds roughly 7% of the Indian decorative paints market and became the No. 4 player overall, and the No. 2 player in industrial coatings, immediately on closing.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did the public shareholders refuse the open offer?</div>
            <p className="blog-faq-a">JSW offered ₹3,417.77 per share, but the stock traded above that price throughout the entire offer window. Shareholders bet that a widely expected merger of unlisted JSW Paints into the listed entity would deliver more value than the fixed cash offer. Only 0.44% of the targeted 25.24% stake was tendered.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Is 25x EBITDA expensive for a paints company?</div>
            <p className="blog-faq-a">It&apos;s rich relative to a pure trading multiple, but reasonable against two alternatives: Asian Paints and Berger have historically traded at 40&ndash;60x earnings, and Birla Opus spent massive capital to reach a similar ~6&ndash;7% share organically, with none of the existing profitability ANIL brought.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What happens next in the JSW Dulux story?</div>
            <p className="blog-faq-a">The next major event to watch is the expected merger of unlisted JSW Paints into the now-listed JSW Dulux, anticipated within 2&ndash;3 years. The ratio at which that merger happens will determine how much value remaining minority shareholders capture.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Deal facts</h3>
          <ul>
            <li>Public reporting and disclosures on the JSW Paints&ndash;Akzo Nobel N.V. transaction: JSW Group releases (June 27 &amp; December 10, 2025), Akzo Nobel N.V. disclosures, Business Standard, Reuters, Kotak, Coatings World, Upstox, Storyboard18, the MCA certificate renaming the entity JSW Dulux Ltd (March 11, 2026), and exchange filings.</li>
          </ul>
          <h3>Kautilya&apos;s own framing, not disclosed figures</h3>
          <p>The Kautilya Deal Score above is Kautilya&apos;s own qualitative assessment, not a figure disclosed by either party. Every reference to analyst-estimated multiples (e.g. ~22x at announcement vs. 25x per Akzo NV&apos;s later FY2025 disclosure) is flagged as an estimate where the underlying source is an estimate.</p>
          <h3>Open items</h3>
          <ul>
            <li>The eventual ratio at which unlisted JSW Paints merges into listed JSW Dulux has not been announced; every reference to it here describes market expectation, not a disclosed term.</li>
          </ul>
          <p>This analysis is for informational purposes only and does not constitute investment advice.</p>
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
