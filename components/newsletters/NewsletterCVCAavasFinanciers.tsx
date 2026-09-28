'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function NewsletterCVCAavasFinanciers() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('CVC paid ₹3,425 Cr for a 26.47% block of Aavas Financiers, then offered the public the same exit — and almost nobody took it. The buyer landed at 48.96%, just short of a majority. A deal-structure teardown, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent("CVC's Aavas Financiers Buyout, Explained");
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
          font-family: var(--font-fraunces), 'Fraunces', serif;
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
          font-family: var(--font-fraunces), 'Fraunces', serif;
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
          <span className="meta-tag">Indian NBFC &amp; PE</span>
          <span className="meta-tag">9 min read</span>
        </div>
        <h1>CVC&apos;s Aavas Financiers Buyout, Explained</h1>
        <div className="subtitle">
          How a ₹3,425 Cr Block Deal and an Undersubscribed Open Offer Left the Buyer at 48.96%
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;28 September 2026</p>
        <p className="currency-note">
          Currency note: figures here are quoted in rupees as disclosed. Where a dollar equivalent
          is useful, it is a Kautilya estimate at ~₹83/$1, not an independently reported number.
        </p>
        <div className="hero-line" />
      </div>

      {/* ── Body ── */}
      <article className="story-body">
        <p>
          CVC paid ₹3,425 Cr for a 26.47% block of Aavas Financiers, then offered the public the
          same exit — and almost nobody took it. So the buyer landed at 48.96%, controlling one of
          India&apos;s largest affordable-housing lenders but just short of a majority. Within a
          year it replaced the chief executive, and the stock fell about 25%.
        </p>
        <p>
          This is a control deal that never quite closed the last mile to a clean majority, and
          that gap — between the 52.47% CVC was structurally entitled to buy and the 48.96% it
          actually ended up holding — is the most instructive part of the whole transaction. Two
          existing private equity sellers exited cleanly. A new promoter took the wheel of a
          373-branch affordable-housing NBFC without quite getting full control of the steering.
          And the market&apos;s verdict on the year that followed was a quarter of the share price,
          gone.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>CVC (via its SPV Aquilo House) bought a 26.47% block in Aavas Financiers from Kedaara Capital and Partners Group for ₹3,425 Cr, then ran a mandatory open offer for a further 26%.</li>
            <li>The open offer, priced at ₹1,767/share, was undersubscribed — only about 22.5% of the target was tendered, leaving CVC at 48.96% overall, short of the 52.47% maximum and short of an outright majority.</li>
            <li>Within roughly a year and a half of the deal closing, CVC pushed out CEO Sachinderpalsingh Bhinder over performance concerns and installed Manu Singh, a Kotak Mahindra Bank home-loans veteran, in his place.</li>
            <li>Aavas shares fell roughly 25% in the months around the leadership transition, though recent analyst commentary points to an expected recovery starting in the following quarters.</li>
          </ul>
        </div>

        <h2>The Setup, the Move, and the Point</h2>
        <ul className="constraint-list">
          <li><strong>The setup.</strong> Aavas Financiers, founded in 2012 and focused on affordable housing loans for low- and middle-income borrowers across semi-urban and rural India, had been jointly backed by two financial sponsors, Kedaara Capital and an affiliate of Partners Group, since well before its 2018 IPO. Both were long-term holders looking for a clean exit rather than a strategic buyer.</li>
          <li><strong>The move.</strong> On August 10, 2024, CVC Capital Partners, through its SPV Aquilo House Pte Ltd, agreed to buy Kedaara and Partners Group&apos;s combined 26.47% stake for ₹3,425 Cr, valuing the company at roughly ₹12,900–13,000 Cr. Because Aavas is listed, the purchase triggered a mandatory open offer for a further 26% at ₹1,767/share, worth up to ₹3,664 Cr if fully subscribed — a combined structure that could have taken CVC to 52.47% control.</li>
          <li><strong>The point.</strong> The open offer closed on March 21, 2025 with only about 22.5% actually tendered, not the full 26% on offer. CVC ended up at 48.96% — enough to become the company&apos;s new promoter and run the board, but short of the clean 50%-plus-one majority a buyer typically wants for a control deal. A private equity buyer can win a takeover battle and still not get everything it structured for.</li>
        </ul>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Block purchase</td><td>26.47% for ₹3,425 Cr (Aug 2024)</td></tr>
              <tr><td>Open offer price</td><td>₹1,767/share, for a further 26%</td></tr>
              <tr><td>Open offer take-up</td><td>~22.5% tendered, not the full 26% on offer</td></tr>
              <tr><td>Final CVC stake</td><td>48.96% — short of a clean majority</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          A buyer structured for up to 52.47% and landed at 48.96%. Sources: CVC media statement,
          BSE/NSE filings, Business Standard.
        </p>

        <h2>What Aavas Financiers Actually Is</h2>
        <p>
          Aavas is an affordable-housing finance company, not a bank or a general NBFC — its loan
          book is built almost entirely around small-ticket home loans for borrowers in semi-urban
          and rural India, many of them self-employed or without formal income documentation, which
          is a harder underwriting problem than salaried, urban home loans and is precisely why the
          category commands specialist attention rather than blanket coverage from a large bank.
          At the time of the CVC deal, the company operated roughly 370 branches across 13 states
          with an assets-under-management book in the ₹17,000–18,000 Cr range, and had targeted
          20–25% annual growth. That growth story, not distress, is what made the business
          attractive to a fresh financial sponsor rather than a rescue buyer.
        </p>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Buyer</td><td>CVC Capital Partners, via SPV Aquilo House Pte Ltd</td></tr>
              <tr><td>Target</td><td>Aavas Financiers Ltd (NSE: AAVAS), founded 2012, affordable housing finance</td></tr>
              <tr><td>Sellers</td><td>Kedaara Capital and an affiliate of Partners Group, both existing PE investors</td></tr>
              <tr><td>Block consideration</td><td>₹3,425 Cr for 26.47%, announced August 10, 2024</td></tr>
              <tr><td>Implied company value</td><td>~₹12,900–13,000 Cr at the block price</td></tr>
              <tr><td>Mandatory open offer</td><td>Up to 26% at ₹1,767/share, up to ₹3,664 Cr, per SEBI takeover rules</td></tr>
              <tr><td>Open offer result</td><td>~22.5% tendered (closed March 21, 2025) against 26% on offer</td></tr>
              <tr><td>Final combined stake</td><td>48.96% — Aquilo House becomes new promoter, short of outright majority</td></tr>
              <tr><td>Target footprint</td><td>~370 branches, 13 states, AUM in the ₹17,000–18,000 Cr range at deal time</td></tr>
              <tr><td>CEO at deal signing</td><td>Sachinderpalsingh Bhinder, MD &amp; CEO</td></tr>
              <tr><td>CEO transition</td><td>Bhinder resigned effective April 20, 2026, citing professional/personal commitments; reports point to performance concerns raised by CVC. Continues as senior advisor.</td></tr>
              <tr><td>New CEO</td><td>Manu Yeshpal Singh, formerly heading home loans at Kotak Mahindra Bank, approved effective April 21, 2026, subject to RBI and shareholder approval</td></tr>
              <tr><td>Stock performance</td><td>Down roughly 25% in the months around the leadership transition; some analysts (e.g. JM Financial) point to expected recovery in subsequent quarters</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          One deal, two exits for the sellers, and a promoter who is still short of a majority
          eighteen months later. Sources: CVC statement, Business Standard, NSE filings.
        </p>

        <h2>Why the Open Offer Came Up Short</h2>
        <p>
          <strong>In plain terms, an undersubscribed open offer:</strong> when a mandatory tender
          offer is priced below what public shareholders believe the stock is worth going forward,
          fewer of them tender than the maximum on offer, and the buyer simply ends up owning less
          than it structured for. There is no mechanism to force the remaining shares in — the
          buyer either accepts the lower stake or launches a fresh, separate purchase later.
        </p>
        <ul className="constraint-list">
          <li><strong>The offer price was anchored to the deal price, not to sentiment about the new owner.</strong> ₹1,767/share tracked the block-deal economics agreed with Kedaara and Partners Group. Public shareholders who liked Aavas&apos;s growth story as an independent, PE-and-founder-influenced NBFC had no obligation to sell at a price set by a formula tied to someone else&apos;s negotiated exit.</li>
          <li><strong>Some shareholders were betting on the new owner, not against it.</strong> An undersubscribed offer isn&apos;t automatically a vote of no confidence in the buyer — it can equally mean existing shareholders wanted to keep riding the stock under new, better-capitalised ownership rather than cash out at a fixed formula price. Distinguishing those two readings from the outside is genuinely hard, and this deal is a caution against assuming an offer's take-up rate tells you sentiment in only one direction.</li>
          <li><strong>Falling 3.5 percentage points short of a clean majority has real governance consequences.</strong> At 48.96%, Aquilo House is unambiguously the controlling promoter and can run the board, but it does not have the unilateral voting power a 50%-plus-one holder has on every resolution. Every board-level decision now runs through a coalition that a slightly better-subscribed offer would have made unnecessary.</li>
        </ul>
        <p className="currency-note">
          A structure built for 52.47%, delivered at 48.96%. Sources: BSE/NSE filings, Business
          Standard.
        </p>

        <h2>Replacing the CEO: What Actually Happened</h2>
        <p>
          Sachinderpalsingh Bhinder had led Aavas as MD &amp; CEO for more than three years before
          CVC&apos;s arrival. His resignation, effective April 20, 2026, was announced as being for
          professional and personal commitments — the standard formal language for an exit — but
          multiple reports at the time pointed to performance concerns CVC had raised as the actual
          driver. He stayed on afterward as a senior advisor, which is a common way to preserve
          institutional continuity without keeping the outgoing chief executive in an operating
          seat.
        </p>
        <p>
          His replacement, Manu Yeshpal Singh, came from outside the company entirely — more than
          twenty years in retail lending at Kotak Mahindra Bank and Tata Capital, most recently
          leading Kotak&apos;s home-loans business. That profile signals what CVC wanted fixed: not
          a specialist in Aavas&apos;s existing rural, informal-income underwriting niche, but a
          large-bank retail-lending operator who can professionalise processes and risk discipline
          at scale. The appointment required RBI and shareholder approval, standard for any NBFC
          chief executive change, underlining that even a controlling PE owner cannot simply swap a
          CEO by fiat at a regulated lender.
        </p>

        <h2>The Stock's Verdict, and Why It Doesn't Settle the Argument</h2>
        <p>
          Aavas shares fell roughly 25% in the months surrounding the leadership transition — a
          meaningful de-rating for a company whose growth thesis had been intact at the time CVC
          bought in. It would be a mistake to read that fall as a single, simple verdict on the
          deal itself, for two reasons. First, an undersubscribed open offer and a subsequent CEO
          change are two distinct events roughly a year apart, and the stock's reaction plausibly
          reflects both the disruption of the leadership change specifically and broader questions
          about execution under new ownership, not the acquisition price paid in 2024. Second, at
          least one sell-side house, JM Financial, has since pointed to an expected recovery
          starting in coming quarters — a reminder that a 25% drawdown around a CEO transition is a
          data point about market nervousness in the short run, not necessarily a verdict on whether
          CVC's underlying thesis for the business was right.
        </p>
        <p className="currency-note">
          A quarter of the share price, and a debate about whether it was the deal or the disruption.
          Sources: Business Standard, BusinessToday, JM Financial research commentary as reported.
        </p>

        <h2>Three Things This Deal Confirms About Indian NBFC Buyouts</h2>
        <ul className="constraint-list">
          <li><strong>A well-structured open offer can still land short.</strong> CVC did everything the takeover code asks of an acquirer — priced the offer off the negotiated block price, ran the tender process by the book — and still ended up 3.5 percentage points shy of a clean majority. Model the downside case (partial subscription) before you count on the upside case (full subscription) in any Indian control deal financed partly through a mandatory offer.</li>
          <li><strong>Buying control of a regulated lender doesn't mean buying the freedom to change management on your own timeline.</strong> Even a 48.96% promoter needed RBI and shareholder sign-off to install its preferred CEO, and the process took roughly a year and a half from deal signing to the new chief executive taking the seat. Budget that regulatory runway into any thesis premised on an operational turnaround.</li>
          <li><strong>The market will price the disruption before it prices the strategy.</strong> A 25% fall around a leadership change is a normal, almost mechanical reaction to uncertainty — it happened here regardless of whether the underlying strategic logic (professionalising underwriting at scale) eventually proves right. Don't mistake the immediate stock reaction to a governance event for a verdict on the deal's economics.</li>
        </ul>
        <p className="currency-note">Two sellers exited cleanly; the buyer is still finishing the job. Sources: CVC statement, BSE/NSE filings.</p>

        <p>
          <strong>Read this before you structure a control deal with a mandatory open offer in
          India.</strong> Three questions matter more than the headline stake you're aiming for:
          what happens to your governance position if the offer is only partially subscribed; how
          long a regulator-dependent leadership change will realistically take once you're in
          control; and whether the market's reaction to the disruption of getting there will be
          read, fairly or not, as a verdict on the price you paid. CVC's Aavas buyout answers the
          first two clearly and is still writing the answer to the third. Not investment advice.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much did CVC pay for its stake in Aavas Financiers?</div>
            <p className="blog-faq-a">CVC, via its SPV Aquilo House Pte Ltd, paid ₹3,425 Cr for a 26.47% block from Kedaara Capital and an affiliate of Partners Group, announced August 10, 2024. A subsequent mandatory open offer at ₹1,767/share for a further 26% closed on March 21, 2025 with only about 22.5% tendered, taking CVC's total stake to 48.96%.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why didn't CVC end up with a majority of Aavas Financiers?</div>
            <p className="blog-faq-a">CVC's mandatory open offer for an additional 26% was undersubscribed — only about 22.5% of shares were tendered, not the full 26% on offer. Combined with its 26.47% block purchase, that left CVC at 48.96%, just short of a clean 50%-plus-one majority, even though it became the company's controlling promoter.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did Aavas Financiers replace its CEO after the CVC deal?</div>
            <p className="blog-faq-a">MD &amp; CEO Sachinderpalsingh Bhinder resigned effective April 20, 2026, officially citing professional and personal commitments, though reports at the time pointed to performance concerns raised by CVC as the actual driver. Manu Yeshpal Singh, previously head of home loans at Kotak Mahindra Bank, was approved to succeed him effective April 21, 2026, subject to RBI and shareholder approval.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did Aavas Financiers' stock fall after the CVC takeover?</div>
            <p className="blog-faq-a">Shares fell roughly 25% in the months around the CEO transition, a common market reaction to leadership uncertainty at a lender. At least one analyst house, JM Financial, has pointed to an expected recovery in subsequent quarters, suggesting the fall reflects near-term disruption rather than a settled verdict on the underlying deal economics.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is an undersubscribed open offer in an Indian takeover?</div>
            <p className="blog-faq-a">It's when fewer shares are tendered into a mandatory open offer than the maximum the acquirer offered to buy — typically because public shareholders believe the stock is worth more than the formula-set offer price, or because they'd rather stay invested under the new owner. The acquirer simply ends up with a smaller stake than it structured for; there's no mechanism to force the remaining shares into the offer.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Deal facts</h3>
          <ul>
            <li>CVC Capital Partners media statement, &ldquo;CVC Funds to acquire 26.47% stake in Aavas Financiers from Kedaara Capital and Partners Group&apos;s Affiliate&rdquo; (Aug 10, 2024); SEBI/BSE/NSE open-offer filings and public announcement (Aug 2024–Mar 2025); Business Standard reporting on the open-offer result and CEO transition; BusinessToday reporting on prior shareholding changes; reported analyst commentary from JM Financial on post-transition recovery expectations.</li>
          </ul>
          <h3>Kautilya&apos;s own framing, not disclosed figures</h3>
          <p>The implied company valuation and the characterisation of the open offer as "undersubscribed" are derived from the disclosed stake percentages and consideration, not stated verbatim in a single filing. The ~25% stock decline and recovery-expectation commentary are as reported by financial media and sell-side research, not independently verified by Kautilya.</p>
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
