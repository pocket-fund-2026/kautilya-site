'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

const IMG_BASE = '/images/newsletter/sun-pharma-organon-acquisition';

export default function NewsletterSunPharmaOrganon() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Sun Pharma is paying $11.75B for Organon — but only $3.68B of that is equity. The rest is debt Sun takes on, financed by an 11-bank syndicate that includes an Indian state bank for the first time. A deal-structure teardown, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent("Sun Pharma's $11.75B Organon Acquisition, Explained");
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

        .currency-note {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 12px;
          font-style: italic;
          color: var(--text-muted);
          margin: 14px 0 0;
          line-height: 1.7;
        }

        .key-takeaways {
          margin: 32px 0;
          padding: 22px 26px;
          border: 1px solid var(--border);
          border-left: 3px solid var(--gold);
          border-radius: 3px;
          background: rgba(255,255,255,0.02);
        }
        .key-takeaways .phase-label { margin-bottom: 12px; }
        .key-takeaways ul { margin: 0; padding-left: 18px; }
        .key-takeaways li {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .stat-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 3px;
          margin: 32px 0;
          overflow: hidden;
        }
        .stat-cell {
          background: var(--canvas);
          padding: 22px 18px;
          text-align: center;
        }
        .stat-cell .stat-num {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 26px;
          font-weight: 500;
          color: var(--gold);
          line-height: 1.2;
        }
        .stat-cell .stat-label {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 10.5px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 6px;
        }
        @media (max-width: 640px) {
          .stat-strip { grid-template-columns: repeat(2, 1fr); }
        }

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
        @media (max-width: 560px) {
          .deal-table-wrap { overflow-x: visible; }
          .deal-table, .deal-table thead, .deal-table tbody, .deal-table tr, .deal-table td {
            display: block;
            width: 100%;
          }
          .deal-table thead { display: none; }
          .deal-table tr {
            padding: 14px 18px;
            border-bottom: 1px solid var(--border);
          }
          .deal-table tr:last-child { border-bottom: none; }
          .deal-table td {
            padding: 4px 0;
            border-bottom: none;
            white-space: normal;
          }
          .deal-table td:first-child {
            padding-top: 0;
            font-size: 11px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--gold);
          }
          .deal-table td[data-label]:not(:first-child)::before {
            content: attr(data-label);
            display: block;
            font-size: 10px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--text-muted);
            margin-top: 8px;
          }
        }

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

        .sources-appendix {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .sources-appendix h3 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 15px;
          letter-spacing: 1px;
          color: var(--text-primary);
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
          <span className="meta-tag">Indian Pharma &amp; Cross-Border M&amp;A</span>
          <span className="meta-tag">6 min read</span>
        </div>
        <h1>Sun Pharma&apos;s $11.75B Organon Acquisition, Explained</h1>
        <div className="subtitle">
          How a Debt-Funded Mega-Deal Became India&apos;s Largest Overseas Pharma Buyout
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;The India Deal Sheet, Issue #13&nbsp;&nbsp;·&nbsp;&nbsp;10 September 2026</p>
        <p className="currency-note">
          Currency note: this deal is denominated in dollars throughout; no rupee conversion is
          applied. Figures marked &ldquo;~&rdquo; are approximations disclosed in company filings
          or press materials, not Kautilya estimates unless stated otherwise.
        </p>
        <div className="hero-line" />
      </div>

      {/* ── Body ── */}
      <article className="story-body">
        <div className="blog-hero-image">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-equity-debt-split.webp`}
            alt="Sun Pharma's $11.75 billion Organon deal breakdown: only $3.68 billion is equity buying the shares, the remaining ~$8.07 billion is Organon's assumed net debt that Sun Pharma takes on"
            title="A $11.75B deal, but only $3.68B of it buys the shares"
            width={1536}
            height={691}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <p>
          Sun Pharma agreed to pay $11.75B for Organon, a Merck spin-off, in the largest overseas
          acquisition an Indian pharma company has ever made. Only $3.68B of that is the shares;
          the rest is Organon&apos;s debt, which Sun takes on. To fund it, State Bank of India
          helped write the first outbound-takeover loan from an Indian state bank.
        </p>
        <p>
          Sun Pharma is India&apos;s largest drugmaker, historically run with almost no debt.
          Organon is a $6.2B-revenue business Merck spun off in 2021, carrying about $8.6B of
          borrowings and a franchise in women&apos;s health and biosimilars that Sun had never
          built. Sun agreed to buy it for $11.75B all in cash, at $14.00 a share, roughly doubling
          its own revenue to $12.4B and vaulting into the top 25 pharma companies in the world. The
          equity cheque is only $3.68B; the other two-thirds is assumed debt, raised through an
          eleven-bank global syndicate. What makes it a landmark is not just the size. It is that
          an Indian public-sector bank helped fund an outbound takeover for the first time, under
          an RBI reform only months old.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>Sun Pharma is paying $11.75B enterprise value for Organon — but the equity cheque is only $3.68B; the remaining ~$8.07B is assumed debt.</li>
            <li>An eleven-bank global syndicate financed the deal, and for the first time an Indian public-sector bank (SBI) helped fund an outbound Indian takeover.</li>
            <li>The reported premium ranges from 24% to 103% depending on the reference date — because a pre-announcement leak had already moved Organon&apos;s stock.</li>
            <li>The combined company&apos;s leverage falls to ~2.3x net debt/EBITDA from Organon&apos;s standalone ~4x, and CRISIL reaffirmed Sun&apos;s AAA rating after modelling the deal.</li>
            <li>Status as of this issue: shareholder-approved, US-cleared, fully financed — but not yet closed. The European Commission review is the last major gate before an expected early-2027 close.</li>
          </ul>
        </div>

        <h2>The Setup, the Move, and the Point</h2>
        <ul className="constraint-list">
          <li><strong>The setup.</strong> The merger agreement was signed on April 26, 2026, and announced the next day. Sun&apos;s US holding company acquires Organon through a merger subsidiary; Organon survives as a wholly owned subsidiary. Shareholders receive $14.00 a share in cash, with a $120M break fee and an outside date of January 26, 2027. In plain terms, enterprise value: the price of the whole business, equity plus the debt the buyer inherits. Sun pays $3.68B for the shares and takes on about $8.07B of Organon&apos;s net debt, which is why an $11.75B deal needs roughly $13B of financing arranged around it.</li>
          <li><strong>The move.</strong> US antitrust cleared without a second request on June 22, the financing was fully syndicated by June 30, Organon&apos;s shareholders approved on July 23, and on August 4 CRISIL reaffirmed Sun&apos;s AAA rating after assessing the deal. What is left is the European Commission and other non-US clearances, with the close expected in early 2027.</li>
          <li><strong>The point.</strong> Two lessons in one deal. For strategy: buying capability rather than volume is buying time, and Sun bought a top-three women&apos;s health franchise and a number-seven biosimilars business it could not have built inside a decade. For deal-making: in a leveraged acquisition the financing is the deal, and who will lend, on what terms, decides whether the price is even reachable.</li>
        </ul>

        <div className="stat-strip">
          <div className="stat-cell">
            <div className="stat-num">$11.75B</div>
            <div className="stat-label">Enterprise value</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">$3.68B</div>
            <div className="stat-label">Of it is the equity</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">~$12.4B</div>
            <div className="stat-label">Combined revenue, top-25</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">1st</div>
            <div className="stat-label">PSU-bank outbound loan</div>
          </div>
        </div>
        <p className="currency-note">
          The shape of the price: a third buys the shares, two-thirds is debt Sun takes on. That is
          why the financing, not the equity cheque, is the story. Sources: Organon proxy, company
          releases.
        </p>

        <h2>Deal Radar: The Numbers</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Buyer</td><td>Sun Pharmaceutical Industries Ltd (NSE: SUNPHARMA), Mumbai, acquiring through a US holding company and a merger subsidiary</td></tr>
              <tr><td>Target</td><td>Organon &amp; Co. (NYSE: OGN), Jersey City. A Merck spin-off since 2021; women&apos;s health, biosimilars, general medicines</td></tr>
              <tr><td>Deal value</td><td>$11.75B enterprise value, $14.00 a share, all cash. Equity value ~$3.68B on 262.6M shares</td></tr>
              <tr><td>What Sun inherits</td><td>About $8.6B of Organon debt against $1.9B EBITDA, ~4x. Net debt ~$8.03B reconciles with the enterprise-to-equity bridge</td></tr>
              <tr><td>Premium</td><td>24% to the Friday close, 60% to the mid-January close, 103% to the April 9 &lsquo;unaffected&rsquo; close. All three are correct, for different reference dates</td></tr>
              <tr><td>Financing</td><td>~$13B arranged: a ~$12B bridge plus a $1B Sun commitment; roughly $3.9B cash and $9.25&ndash;9.75B debt. Syndicated across 11 banks by Jun 30</td></tr>
              <tr><td>The syndicate</td><td>Citi, JPMorgan and MUFG as original underwriters, plus SBI, HSBC, StanChart, ING, DBS, Crédit Agricole and Sumitomo Mitsui. SBI is the only Indian bank</td></tr>
              <tr><td>Combined group</td><td>~$12.4B revenue, top-25 global. Innovative Medicines rises from ~20% to 27% of sales; #7 in biosimilars, top-3 in women&apos;s health</td></tr>
              <tr><td>Leverage</td><td>~2.3x net debt to EBITDA post-deal, from Organon&apos;s ~4x standalone. CRISIL reaffirmed Sun&apos;s AAA/Stable on Aug 4, 2026</td></tr>
              <tr><td>US antitrust</td><td>HSR filed May 21, 2026; waiting period expired clean Jun 22, with no second request</td></tr>
              <tr><td>Shareholder vote</td><td>Organon special meeting Jul 23, 2026; 74.51% of shares represented; approved. Confirmed by Sun Jul 24</td></tr>
              <tr><td>Still pending</td><td>European Commission and other non-US antitrust and FDI clearances. Expected close early 2027, outside date Jan 26, 2027</td></tr>
              <tr><td>Cash flow</td><td>~$2.5B of projected annual free cash flow post-deal, earmarked for debt paydown</td></tr>
              <tr><td>Scale benchmark</td><td>Nearly 3x Sun&apos;s Ranbaxy deal (2014, ~$4B), its previous largest and the one management cites as the integration template</td></tr>
              <tr><td>Status (Aug 24, 2026)</td><td>Shareholder-approved, US-cleared, fully financed. Not yet closed</td></tr>
            </tbody>
          </table>
        </div>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-deal-timeline.webp`}
            alt="Timeline of the Sun Pharma Organon deal: takeover talk begins January 2026, merger signed April 26 2026 for $11.75B all cash, US antitrust clears June 22 2026, shareholders approve July 23 2026, expected close early 2027 pending EU review"
            title="Rumour to shareholder vote in six months; close still months away"
            width={1536}
            height={628}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="currency-note">
          Six months from rumour to shareholder approval, with the close still a European review
          away. Sources: Organon proxy, Sun Pharma releases.
        </p>

        <h2>What Actually Happened. Mumbai and Jersey City, 2026</h2>
        <ul className="constraint-list">
          <li><strong>A low-debt buyer decided to buy capability, not volume.</strong> Sun Pharma has long been India&apos;s largest drugmaker, strong in generics but light in the higher-margin innovative and biosimilar segments the market rewards. Organon offered both at scale: a top-three women&apos;s health position and a ready biosimilars pipeline. Building either would have taken most of a decade, so Sun bought the time instead. Why that matters: this is Indian pharma&apos;s shift in one deal. The old game was competing on generic volume; the new one is buying specialty and biosimilar capability in developed markets, and paying developed-market prices to do it.</li>
          <li><strong>The seller&apos;s board chose cash certainty over independence.</strong> Organon carried about 4x leverage and had run a full strategic review. An all-cash offer at a real premium to the unaffected price removed the execution risk a stock deal would have carried, especially from a foreign acquirer whose shares trade in Mumbai. The board took the certain money.</li>
          <li><strong>An Indian state bank helped fund an outbound takeover for the first time.</strong> SBI&apos;s roughly $1B commitment sits inside the syndicate as the first major test of a February 2026 RBI reform letting public-sector banks finance overseas takeovers. Indian acquirers used to rely entirely on foreign lenders or capital markets for deals this size. That constraint has just loosened. In plain terms, an outbound-takeover loan: financing raised in India to buy a company abroad. Until this reform, domestic public-sector banks were effectively barred from providing it, so a deal like this had to be funded offshore.</li>
        </ul>

        <div className="pull-quote">
          <p>
            <strong>Why it matters to you.</strong> Three portable lessons. If you advise a company
            weighing build versus buy: the case for buying is strongest when the capability
            compounds with time you do not have, which is why Sun paid up for biosimilars and
            women&apos;s health. If you advise on cross-border financing: the pool of lenders for
            Indian outbound deals just widened, and that changes what is fundable. And if you hold
            an acquirer taking on a leveraged target: watch the rating, because CRISIL&apos;s
            reaffirmed AAA is the one external verdict that the debt is carriable.
          </p>
        </div>

        <h2>Featured Deal: The 24% Premium That Was Really 103%</h2>
        <p>
          <em>How a leak distorts the headline number.</em> Real deal, signed April 26, 2026;
          shareholder-approved July 23, 2026; expected to close early 2027. Figures from SEC
          filings, the executed merger agreement and company releases. Not investment advice.
        </p>

        <h3>First, the three premiums</h3>
        <ul className="constraint-list">
          <li>Against the Friday close before the announcement, Sun paid a 24% premium. That is the number most coverage led with.</li>
          <li>Against Organon&apos;s mid-January close, before any rumour, the premium was about 60%. Against the April 9 &lsquo;unaffected&rsquo; close, the one Sun and Organon&apos;s own filings use, it was 103%.</li>
          <li>All three are arithmetically correct. They differ only in where you start the clock, and the gap between 24% and 103% is the story.</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-premium-comparison.webp`}
            alt="Bar chart of three correct premiums for the Sun Pharma Organon deal: 24% versus Friday close after a $13B leak, 60% versus the mid-January close, and 103% versus the April 9 unaffected close before any speculation"
            title="Three premiums, all correct, depending on where you start the clock"
            width={1536}
            height={705}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h3>The three-part answer</h3>
        <ul className="constraint-list">
          <li><strong>A leak had already moved the price the headline measures from.</strong> The day before signing, the Economic Times reported a roughly $13B deal, and Organon&apos;s stock jumped about 31% in a session. So the Friday close, the basis for the 24% figure, was already inflated by the deal it was meant to measure. The premium looked small because the market had front-run it.</li>
          <li><strong>The &lsquo;unaffected&rsquo; price is the honest denominator.</strong> Filings use the April 9 close precisely because it predates the speculation, and against it the premium is 103%. That is the real transfer of value to Organon&apos;s shareholders. When a deal has leaked, the unaffected-date premium is the one that means something; the last-close premium mostly measures how much the leak priced in.</li>
          <li><strong>The right premium changes how you judge the price.</strong> A 24% premium reads as Sun paying up modestly; a 103% premium reads as Sun paying roughly double the standalone value, for a leveraged asset it will spend years deleveraging. Same deal, very different picture, and the difference is entirely which base you quote.</li>
        </ul>
        <p className="currency-note">
          Three premiums, all correct, and the widely-quoted one is the least meaningful. Sources:
          company filings, Bloomberg, CNBC.
        </p>

        <div className="pull-quote">
          <p>
            <strong>The signal most briefs miss.</strong> When you see a single premium figure on a
            deal that leaked, distrust it. The number that matters is measured from the unaffected
            price, before the rumour moved the stock, and here that is 103%, not the 24% in the
            headlines. Ask what the share price was doing in the days before signing: a big
            pre-announcement run-up is the tell that the quoted premium understates what the buyer
            actually paid over fair value.
          </p>
        </div>

        <h2>Sector Signal: Three Things This Deal Confirms About Indian Pharma</h2>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-scale-comparison.webp`}
            alt="Before and after comparison: Sun Pharma alone had ~$6.2 billion revenue with Innovative Medicines at 20% of sales and no biosimilars franchise; combined with Organon, revenue rises to ~$12.4 billion top-25 global, Innovative Medicines rises to 27%, and Sun becomes #7 in biosimilars and top-3 in women's health"
            title="What $11.75B buys: scale, and a franchise Sun did not have"
            width={1536}
            height={537}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <ul className="constraint-list">
          <li><strong>Indian pharma is buying developed-market capability, not just competing on price.</strong> For two decades the export story was generics volume. This deal, the largest Indian outbound pharma acquisition ever, is about owning specialty and biosimilar franchises in the US and Europe. The ambition has moved up the value chain, and so has the cheque size.</li>
          <li><strong>Indian bank financing for outbound M&amp;A has arrived.</strong> SBI helping fund this is the first real test of the February 2026 reform, and it matters beyond one deal: it means the next Indian acquirer eyeing a large foreign target has a domestic lending option that did not exist before. That widens what is fundable and, over time, who can bid.</li>
          <li><strong>Buying a leveraged asset only works from a position of balance-sheet strength.</strong> Organon carried ~4x leverage alone; landing inside Sun it becomes ~2.3x, and CRISIL kept the AAA. A low-debt acquirer can absorb a high-debt target and bring the ratio down. A stretched one could not have, which is why this playbook favours the financially strongest buyers.</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-vs-ranbaxy-scale.webp`}
            alt="Bar chart comparing deal size: Sun Pharma's Ranbaxy acquisition in 2014 was about $4.0 billion, versus the 2026 Organon deal at $11.75 billion — nearly three times the size of Sun's previous biggest deal"
            title="Nearly three times the size of Sun's previous biggest deal"
            width={1536}
            height={522}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="currency-note">
          Nearly three times the size of Ranbaxy, the deal management cites as its integration
          template. Sources: Sun Pharma investor call, company filings.
        </p>

        <div className="pull-quote">
          <p>
            <strong>Signal for advisors.</strong> Two conversations this week. Any Indian corporate
            contemplating a large foreign acquisition: the domestic financing landscape has
            changed, and the SBI precedent is worth understanding before assuming a deal must be
            funded offshore. And any client in a segment where capability takes years to build:
            this is the comp for paying a full premium to buy time rather than spend it, provided
            the balance sheet can carry the debt that comes with it.
          </p>
        </div>

        <h2>Valuation Pulse: Was $11.75B Too Much for $6.2B of Revenue?</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Way to measure it</th><th>What it says here</th></tr>
            </thead>
            <tbody>
              <tr><td>Price against revenue and earnings</td><td>$11.75B on $6.2B of revenue and $1.9B of EBITDA is roughly 6x EBITDA, unremarkable for a specialty and biosimilars business. The number that should give pause is the 103% premium to the unaffected price, not the multiple.</td></tr>
              <tr><td>Price against the debt it carries</td><td>Two-thirds of the price is assumed debt, so this is a bet on cash flow. Sun projects ~$2.5B a year of free cash flow for paydown and brings leverage to ~2.3x from ~4x. The rating agency signed off; the margin for integration error is thin.</td></tr>
              <tr><td>Price against building it</td><td>A top-three women&apos;s health franchise and a number-seven biosimilars pipeline cannot be assembled organically inside the window in which biologics are going off-patent. Against the time and the uncertainty of building, the premium buys a position that would otherwise be out of reach.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          A little cash, a lot of borrowed money, and for the first time an Indian state bank
          inside the syndicate. Sources: Outlook Business, CRISIL, IIFL.
        </p>
        <p>
          What &lsquo;6x EBITDA&rsquo; means: the enterprise value equals about six years of the
          target&apos;s operating earnings. That is a middling multiple for pharma; the aggression
          in this deal is in the premium over the pre-rumour share price and in the leverage
          assumed, not in the earnings multiple.
        </p>
        <p>
          <strong>The discipline.</strong> Judge this on the debt and the deleveraging, not the
          multiple. The multiple is ordinary, but two-thirds of the price is borrowed, and the case
          rests on ~$2.5B of annual free cash flow arriving on schedule to bring leverage down.
          CRISIL&apos;s reaffirmed AAA is the external check that the maths works, but it assumes
          the integration goes to plan, at nearly three times the scale of Sun&apos;s last big
          cross-border deal. A leveraged acquisition is only as good as the cash flow that pays the
          debt back.
        </p>

        <div className="pull-quote">
          <p>
            <strong>This issue.</strong> Watch three things. The remaining clearances: the deal is
            approved and funded but not closed, and the European Commission review is the last real
            gate before the early-2027 close. The deleveraging: leverage is manageable at ~2.3x only
            if the ~$2.5B of annual free cash flow shows up, so the first combined results after
            closing are the number to track. And the integration: at nearly 3x Ranbaxy&apos;s
            scale, this is the largest integration in Sun&apos;s history, and management has staked
            its own credibility on repeating that playbook.
          </p>
        </div>

        <h2>Deal Structure Clinic: The Leveraged Cross-Border Buyout</h2>
        <p>
          <strong>In plain terms, a reverse triangular merger:</strong> The buyer sets up a shell
          subsidiary, and that shell merges into the target. The target survives and becomes a
          wholly owned subsidiary of the buyer, while its shareholders are paid out in cash. It is
          the standard way to acquire a US public company while keeping its contracts and licences
          intact.
        </p>
        <p>
          <strong>In plain terms, assumed debt:</strong> The target&apos;s own borrowings do not
          disappear at closing; the buyer inherits them. Here that is about $8 billion, which is
          why the deal costs $11.75B in enterprise terms but only $3.68B in equity, and why
          arranging the borrowing was the hard part.
        </p>

        <h3>Three mechanics this deal showcases</h3>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-financing-breakdown.webp`}
            alt="How ~$13 billion was raised for the Sun Pharma Organon deal: ~$3.9 billion cash from Sun Pharma's own resources, ~$9.25 to $9.75 billion debt from an 11-bank global syndicate raising over $10 billion, and SBI as the first Indian public-sector bank to fund an outbound takeover"
            title="How ~$13B was raised: a little cash, a lot of borrowed money"
            width={1536}
            height={614}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <ul className="constraint-list">
          <li><strong>The equity price is the small number; the financing is the large one.</strong> Sun writes a $3.68B equity cheque but has to arrange roughly $13B, because it is refinancing Organon&apos;s debt as well as paying shareholders. In a leveraged buyout the question is never only what you pay; it is who will lend the rest, and on what terms. Read the financing before the price.</li>
          <li><strong>A syndicate spreads the risk that no single lender will carry.</strong> Three banks underwrote, then eight more joined to raise over $10B, because a loan this size is too large and too concentrated for one balance sheet. That SBI could take a place in that syndicate is the regulatory change that makes this deal a landmark, not just a large transaction.</li>
          <li><strong>The rating is the deal&apos;s external scorecard.</strong> Sun entered with an AAA and a near-net-cash balance sheet, and CRISIL reaffirmed it after modelling the acquisition. That reaffirmation is what tells the market the leverage is carriable; without it, the same debt on the same assets would read very differently.</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-leverage-ratio.webp`}
            alt="Bar chart showing net debt to EBITDA falling from Organon's standalone ~4.0x to ~2.3x once combined inside Sun Pharma, with $2.5 billion of projected annual free cash flow earmarked for debt paydown"
            title="A leveraged target lands on a low-debt buyer, and the ratio falls"
            width={1536}
            height={522}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="currency-note">
          A leveraged target lands on a low-debt buyer, and the combined ratio falls to something a
          rating agency will bless. Sources: CRISIL, company disclosures.
        </p>

        <h2>M&amp;A 101: Financing a Large Foreign Acquisition</h2>
        <p>
          <strong>In plain terms, a leveraged acquisition:</strong> Buying a company mostly with
          borrowed money rather than cash or shares. The buyer puts in some equity and funds the
          rest with debt, often secured against the target&apos;s own cash flow, so the deal only
          works if that cash flow can service the loan.
        </p>

        <h3>The three steps, using this deal</h3>
        <ul className="constraint-list">
          <li><strong>Step 1: Separate the equity price from the enterprise price.</strong> What you pay shareholders and what the deal actually costs are two different numbers, and the gap is the target&apos;s debt. Sun&apos;s shareholders&apos; cheque was $3.68B, but the enterprise value was $11.75B, because about $8B of Organon&apos;s borrowings came with it. Size the financing to the enterprise value, not the equity.</li>
          <li><strong>Step 2: Line up the lenders before you fix the price.</strong> Financing was reportedly arranged in the $10&ndash;14B range even at the non-binding stage, well before terms were final. You do not agree a leveraged deal and then look for the money; you confirm it is there first, because a price you cannot fund is not a price. Sun syndicated eleven banks to be certain.</li>
          <li><strong>Step 3: Make sure the combined balance sheet can carry it, and get that verified.</strong> A leveraged target only works on a buyer strong enough to absorb it: Organon&apos;s ~4x becomes ~2.3x inside Sun, and CRISIL reaffirmed the AAA. The external rating is not a formality; it is the independent confirmation that the plan to pay the debt down is credible. Secure it before you celebrate.</li>
        </ul>

        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/sun-pharma-organon-deal-status.webp`}
            alt="Deal status summary as of August 24 2026: shareholders approved and US antitrust cleared clean (done), financing fully syndicated and AAA rating reaffirmed (done), European and other clearances pending with close expected early 2027"
            title="Where the deal stands: approved and funded, not yet closed"
            width={1536}
            height={414}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="currency-note">
          Approved, cleared in the US and fully funded; the European review and the close are what
          remain. Sources: Organon proxy, Sun Pharma filings.
        </p>

        <div className="pull-quote">
          <p>
            <strong>Read this before you fund a large acquisition with debt.</strong> Three things
            decide whether it works: whether you have sized the financing to the enterprise value
            rather than the equity, whether the money is committed before the price is fixed, and
            whether the combined balance sheet can carry the debt at a ratio the rating agencies
            will bless. Sun answered all three, and still does not close until 2027, nor succeed
            until the cash flow pays the debt down. A leveraged deal is a promise about future
            cash, kept only quarter by quarter. Not investment advice.
          </p>
        </div>

        <h2>Where This Fits in Buy-Side and Cross-Border M&amp;A Advisory</h2>
        <p>
          Kautilya covers deal-structure teardowns like this one because the mechanics — assumed
          debt, syndicated financing, and the gap between a headline premium and the one that
          actually matters — repeat across markets far smaller than a $11.75B pharma buyout. If
          you are evaluating how buy-side deal origination and structuring work for mid-market
          acquisitions in India, see{' '}
          <Link href="/blog/what-is-buy-side-ma-advisory">what buy-side M&amp;A advisory is</Link>
          {' '}and, for the search-fund-specific version of financed acquisitions,{' '}
          <Link href="/blog/what-is-a-search-fund">what a search fund is</Link>.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much is Sun Pharma paying for Organon?</div>
            <p className="blog-faq-a">Sun Pharma agreed to pay $11.75B in enterprise value for Organon, at $14.00 a share in an all-cash deal. Of that, only $3.68B is the equity paid to shareholders; the remaining ~$8.07B is Organon&apos;s net debt, which Sun assumes as part of the transaction.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why do different reports quote the premium as 24%, 60%, or 103%?</div>
            <p className="blog-faq-a">All three are correct, measured from different reference dates. The 24% figure is against the Friday close before announcement, but that price was already inflated by a leak the day before signing, when Organon&apos;s stock jumped about 31% on an Economic Times report. The 103% figure is against the April 9 &lsquo;unaffected&rsquo; close, before any speculation moved the stock, and is the one Sun and Organon&apos;s own filings use as the honest denominator.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What role did State Bank of India play in financing the deal?</div>
            <p className="blog-faq-a">SBI joined an eleven-bank global syndicate with a commitment of roughly $1B, marking the first time an Indian public-sector bank has helped finance an outbound takeover. This followed a February 2026 RBI reform permitting domestic public-sector banks to lend into overseas acquisitions by Indian companies, a route that was effectively closed to them before.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How much debt is Sun Pharma taking on, and can it carry it?</div>
            <p className="blog-faq-a">Sun inherits about $8.6B of Organon&apos;s debt against $1.9B of EBITDA, roughly 4x leverage standalone. Once combined with Sun Pharma&apos;s near-debt-free balance sheet, the ratio falls to about 2.3x net debt to EBITDA. CRISIL reaffirmed Sun&apos;s AAA/Stable rating on August 4, 2026 after modelling the acquisition, and Sun projects about $2.5B of annual free cash flow earmarked for paying the debt down.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">When is the Sun Pharma-Organon deal expected to close?</div>
            <p className="blog-faq-a">As of this issue (status dated August 24, 2026), the deal is shareholder-approved, cleared by US antitrust regulators, and fully financed, but not yet closed. The remaining step is clearance from the European Commission and other non-US antitrust and FDI regulators, with close expected in early 2027 and an outside date of January 26, 2027.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Deal facts</h3>
          <ul>
            <li>Organon &amp; Co. DEFM14A merger proxy and the April 26, 2026 merger agreement (SEC filings) · Sun Pharma releases and investor call (Apr&ndash;Aug 2026) · Organon release · CRISIL rating rationale (Aug 4, 2026) · Bloomberg · CNBC · Fierce Pharma · Outlook Business · Business Standard.</li>
          </ul>
          <h3>Kautilya&apos;s own calculations, not disclosed figures</h3>
          <p>
            The deal is denominated in dollars; equity value is ~$3.68B on 262,609,433 shares at
            $14.00. The ~6x EBITDA multiple and the ~$8.07B assumed-debt figure are derived from
            the disclosures. The three premium figures (24%, 60%, 103%) are all correct for
            different reference dates across a leak-driven run-up. A February 2026 RBI reform is
            understood to permit the SBI financing, though the exact circular was not confirmed in
            sourcing.
          </p>
          <p>Not investment advice. This is a deal teardown for readers evaluating acquisition structures and buy-side value creation, not a recommendation regarding any security.</p>
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
