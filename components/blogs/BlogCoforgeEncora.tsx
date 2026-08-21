'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function BlogCoforgeEncora() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Coforge bought Encora for $2.35B and paid zero cash — an all-stock deal that handed the sellers 21.8% of Coforge and two board seats, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Coforge Bought Encora for $2.35B With Zero Cash');
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
        <Link href="/blog" className="back-link">← Blog</Link>
        <div className="meta-row">
          <span className="meta-tag">Deal Teardowns</span>
          <span className="meta-tag">Indian IT &amp; ER&amp;D</span>
          <span className="meta-tag">10 min read</span>
        </div>
        <h1>Coforge Bought Encora for $2.35B With Zero Cash</h1>
        <div className="subtitle">
          How an All-Stock Preferential Allotment Handed the Sellers 21.8% of the Buyer
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;21 August 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body ── */}
      <article className="story-body">
        <p>
          Coforge bought Silicon Valley&apos;s Encora at a $2.35 billion enterprise value and did
          not pay a rupee of cash for it. It printed 93.8 million new shares instead. The
          private-equity sellers, Advent International and Warburg Pincus, took every one of them,
          and two seats on the board.
        </p>
        <p>
          A private-equity fund exists to turn holdings back into money. Advent and Warburg Pincus
          did the opposite. Having built Encora from a Warburg asset worth around $1.5B in 2021
          into a business guided to ~$600M of revenue, they sold it and took the entire price in
          the buyer&apos;s stock. Coforge issued 9,37,96,508 shares at ₹1,815.91, worth ₹17,032.60
          Cr ($1.89B), for 100% of Encora at a $2.35B enterprise value — the largest ER&amp;D
          takeover ever by an Indian IT company. The sellers walked out owning about 21.8% of
          Coforge. Coforge got an AI-native engineering business overnight; the sponsors swapped a
          private holding for a liquid one without leaving the trade; and a cross-border deal
          guided to take six months was done in under four.
        </p>

        <h2>The Setup, the Move, and the Point</h2>
        <ul className="constraint-list">
          <li><strong>The setup.</strong> Announced after market close on December 26, 2025, with the definitive agreement and board approval landing the same day. The consideration was fixed in rupees, ₹17,032.60 Cr, and settled entirely in new Coforge shares issued at ₹1,815.91, a 14.5% premium to the pre-announcement close on Business Standard&apos;s framing. In plain terms, a preferential allotment: instead of buying shares on the market, the seller receives newly created ones straight from the company at an agreed price. The buyer pays with ownership rather than money, and every existing shareholder&apos;s slice gets smaller.</li>
          <li><strong>The move.</strong> Under four months from signature to settlement. Clearances from the RBI, Australian antitrust, Romanian and Spanish FDI regimes, other European authorities and Coforge&apos;s own shareholders were all secured by April 13, 2026; the deal completed on April 23; Encora&apos;s accounts consolidated from May 1. At closing Coforge cancelled the equity raise it had planned and took a $550M three-year loan at 4.6% instead.</li>
          <li><strong>The point.</strong> Two lessons in one deal. For strategy: when the capability you need is being created by the same wave that threatens you, buying it at scale beats building it slowly, and Coforge&apos;s stock had already fallen ~13% in 2025 on exactly that threat. For deal-making: the currency you pay in decides who is still in the room afterwards. Cash ends a relationship. Shares begin one.</li>
        </ul>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Buyer</td><td>Coforge Ltd (NSE: COFORGE), Noida; mid-cap IT services, CEO Sudhir Singh</td></tr>
              <tr><td>Target</td><td>Encora Digital LLC, Santa Clara: AI-native engineering for Fortune 1000 and digital-native clients; the AIVA agentic-AI platform</td></tr>
              <tr><td>Sellers</td><td>Advent International, Warburg Pincus and minority holders, selling 100%</td></tr>
              <tr><td>Enterprise value</td><td>$2.35B (~₹21,133 Cr), about 3.9x Encora&apos;s FY26 estimated revenue &mdash; a multiple derived from the disclosures, not stated by the company</td></tr>
              <tr><td>Equity consideration</td><td>$1.89B (₹17,032.60 Cr), settled entirely in Coforge shares</td></tr>
              <tr><td>The currency</td><td>9,37,96,508 new shares at ₹1,815.91, a 14.5% premium to the pre-announcement close</td></tr>
              <tr><td>What sellers own</td><td>~21.8% of Coforge&apos;s 42,96,47,126 expanded capital, plus two non-executive directors</td></tr>
              <tr><td>Debt</td><td>$550M three-year loan at 4.6% from JPMorgan, Bank of America, Citi, HSBC and BNP Paribas; the planned equity raise was cancelled at closing</td></tr>
              <tr><td>Announced &rarr; completed</td><td>Dec 26, 2025 &rarr; Apr 23, 2026; consolidation from May 1, 2026</td></tr>
              <tr><td>Target financials</td><td>CY2024 revenue $516M; FY26 estimate ~$600M at ~19% adjusted EBITDA</td></tr>
              <tr><td>Combined group</td><td>~$2.5B revenue run-rate; ~14% EBIT guided; earnings-accretive in FY27</td></tr>
              <tr><td>Q1 FY27</td><td>Revenue $592.2M (₹5,527.7 Cr, +49%); EBIT margin 16.0%, ahead of guidance; net profit ₹518.6 Cr, down 15% sequentially</td></tr>
              <tr><td>Scale benchmark</td><td>Largest ER&amp;D takeover by an Indian IT firm; 4th-largest ER&amp;D deal globally; 2nd-largest acquisition by an Indian IT-services company</td></tr>
              <tr><td>Status (Aug 19, 2026)</td><td>Closed. Operational integration declared complete; one merged quarter reported</td></tr>
            </tbody>
          </table>
        </div>

        <h2>What Actually Happened. Noida and Santa Clara, 2021 to 2026</h2>
        <ul className="constraint-list">
          <li><strong>Two sponsors built the asset they eventually sold to each other&apos;s successor.</strong> Advent bought control of Encora from Warburg Pincus at a valuation around $1.5B in 2021, with Warburg keeping exposure. Together they scaled it through organic growth and bolt-ons to $516M of CY2024 revenue, guided to roughly $600M, run by Anand Birje out of Santa Clara with more than 9,000 engineers across four regions.</li>
          <li><strong>A mid-cap decided the disruption was cheaper to own than to survive.</strong> Coforge&apos;s shares had fallen about 13% during 2025 as the market priced AI as a threat to services revenue. It had already bought Cigniti for roughly ₹4,343 Cr in 2024. Encora is the second and far larger bet, and the thesis is blunt: own the thing doing the disrupting. A mid-cap outbid the tier-one firms for the largest engineering-services asset the Indian IT sector has seen change hands &mdash; consolidation is no longer something only the biggest players do.</li>
          <li><strong>The sellers took paper, and seats.</strong> Every rupee of the ₹17,032.60 Cr was settled in Coforge stock, and on completion day Advent&apos;s Shweta Jalan and Atin Hirachand Jain joined the board as non-executive directors. In plain terms, a rollover: a seller who reinvests the sale proceeds into the buyer rather than banking them. It signals confidence, and it means the seller&apos;s return now depends on how well the acquirer runs the thing it just bought.</li>
        </ul>
        <p>
          <strong>Why it matters.</strong> If you advise a company paying in stock: the issue price
          is not a detail, it is the deal, because a fixed rupee consideration means the price
          alone decides how much of the company you hand over. If you advise a sponsor nearing the
          end of a hold: a rollover into listed paper is a third option between cash and holding
          on, and it is spreading as private and public valuations drift apart. And if you hold a
          serial acquirer: watch what management does with its own currency, because cancelling a
          planned share sale in favour of debt tells you what it thinks its stock is worth.
        </p>

        <h2>The Exit That Wasn&apos;t: Why Advent and Warburg Took Shares, Not $1.89 Billion</h2>
        <p>
          Private-equity funds have finite lives. They raise money, buy companies, improve them and
          sell, and their investors expect it back as cash within roughly a decade. A sale is
          normally the moment that happens, which is why sponsors run auctions, favour buyers with
          committed funding, and treat an all-stock offer as the least attractive kind. Here two of
          the world&apos;s largest sponsors did the opposite: they accepted 100% of a $1.89B price
          in the shares of a mid-cap listed in Mumbai.
        </p>
        <ul className="constraint-list">
          <li><strong>Listed stock is liquid; a private holding is not.</strong> A stake in Encora could only be sold through another negotiated process, on someone else&apos;s timetable. Coforge shares can be sold on any trading day. The rollover converted an illiquid asset into a tradable one at a price struck above the market.</li>
          <li><strong>They kept the thesis they had been proved right about.</strong> Encora&apos;s value rests on enterprises shifting spend toward AI-led engineering. Selling for cash monetises the part of that shift which has already happened; taking stock keeps exposure to the part that has not, now attached to a larger distribution network.</li>
          <li><strong>A stake with board seats is not a passive position.</strong> Two non-executive directors and committee rights turn a shareholding into influence over the integration that decides whether the shares are worth what they were issued at.</li>
        </ul>
        <p>
          <strong>The signal most briefs miss.</strong> At announcement, Coforge said it would raise
          up to $550M through a bridge loan or a share sale to institutions. Dilution was already
          the bear case, with a fifth of the company going to the sellers. By closing, Coforge had
          cancelled the share sale entirely and taken a $550M three-year bank loan at 4.6% instead,
          saying explicitly that there would be no further dilution. That swap costs roughly $25M a
          year in interest, and it was made in the four months while the stock was recovering. When
          a company converts planned equity into debt between signing and closing, read it as a
          statement about how cheap it thinks its own shares are.
        </p>

        <h2>Three Things This Deal Confirms About Indian IT and AI</h2>
        <ul className="constraint-list">
          <li><strong>The mid-caps are doing the consolidating now.</strong> This is the largest ER&amp;D takeover ever by an Indian IT company and the fourth-largest such deal anywhere, and it was done by a firm outside the top tier.</li>
          <li><strong>Capability is being bought rather than built.</strong> Encora brought AIVA, a composable agentic platform with a library of pre-built agents; Coforge already had Quasar and its governed APIs. The emerging differentiator in engineering services is a proprietary agentic layer plus enough scale to sell it, which is what separates this combination from GlobalLogic, EPAM and Globant.</li>
          <li><strong>Sponsor rollovers are becoming the bridge between private and public valuations.</strong> When sponsors cannot get the price they want in cash, taking listed stock lets them realise a valuation on paper and defer the argument about what it is worth.</li>
        </ul>

        <h2>Was 3.9x Revenue Too Much for an AI-Services Business?</h2>
        <p>
          About 3.9x FY26 estimated revenue is full for a services business, and it sets a bar:
          Encora must keep delivering $600M-plus at around 19% EBITDA. But the shares went out at a
          14.5% premium to the pre-announcement close &mdash; in an all-stock deal your own
          valuation is half the price, so issuing above market is cheaper than issuing below it.
          And nine thousand engineers across four regions, an agentic platform already in
          production, and Fortune 1000 relationships cannot be hired inside the window in which
          enterprise AI budgets are being decided.
        </p>
        <p>
          In an all-stock deal there are two prices, and only one is in the press release. Coforge
          paid roughly 3.9x revenue, but paid in a currency the market had marked down about 13%
          during 2025 and then marked up about 10% after the first merged quarter. If the shares
          hold, the deal was cheaper than it looked; if they fall back, Coforge overpaid in real
          terms and the sellers gave up value. Judge a paper deal on both sides of the exchange
          rate.
        </p>

        <h2>The All-Stock Preferential Allotment, and Why the Issue Price Is the Whole Negotiation</h2>
        <p>
          <strong>In plain terms, a preferential allotment:</strong> the company creates new shares
          and issues them directly to a chosen party at a price fixed in the agreement. No money is
          raised from the public and no shares change hands on the market. The recipient becomes a
          shareholder; everyone else owns a slightly smaller share of the same company.
        </p>
        <p>
          The consideration here was a fixed rupee amount, ₹17,032.60 Cr. When the total is fixed,
          the issue price is the only variable, and it alone decides how many shares get created and
          therefore how much of the company the seller ends up with. At ₹1,815.91 the sellers
          received 9.38 crore shares and about 21.8% of Coforge. Ten per cent lower and they would
          have taken roughly 23.7%; ten per cent higher, about 20.2%. The headline price never
          moves, and the ownership does.
        </p>
        <p>
          Paying in stock also imports the seller onto your register, permanently. Cash
          consideration ends the relationship at settlement. Shares mean the counterparty stays,
          votes and, here, sits on the board &mdash; alignment while the thesis is working, and an
          overhang the moment it is not, both true at the same time. And the funding plan is not
          fixed until closing: Coforge announced a bridge-or-equity-raise option and finished with
          neither, replacing it with a syndicated bank loan and cancelling the equity leg. Anything
          described as a plan at announcement is a range of outcomes; check what actually got
          signed.
        </p>

        <h2>Paying With Your Own Shares: A Three-Step Playbook</h2>
        <p>
          An all-stock deal is one where the buyer creates new shares and hands them to the seller
          instead of money. It preserves cash and borrowing capacity, but pays with something the
          market prices rather than the buyer, and permanently changes who owns the company.
        </p>
        <ul className="constraint-list">
          <li><strong>Step 1: Decide what your own paper is worth before you decide what theirs is.</strong> An all-stock offer swaps two valuations, and the one you control least is your own. Coforge struck its issue price 14.5% above market, which meant fewer shares for the same rupee consideration.</li>
          <li><strong>Step 2: Price the dilution as a cost, not a footnote.</strong> Handing over 21.8% of a company is a real payment competing directly with cash and debt as a funding choice. Coforge guided to accretion in FY27 and beat its margin guidance in the first merged quarter.</li>
          <li><strong>Step 3: Design what happens to the stake afterwards.</strong> A seller paid in shares becomes a permanent feature of your register, so settle upfront what they can do with it and what they get in return. Here that meant two board seats and committee rights, bought with alignment through the integration.</li>
        </ul>
        <p>
          Three numbers decide what a seller paid in shares actually received: the issue price,
          which sets how much of the company you get; the lock-in, which sets when you can act on
          it; and the buyer&apos;s own growth rate, which sets what it is worth by then. Advent and
          Warburg secured the first, accepted the second and bought exposure to the third. One
          quarter of results is nowhere near enough to know how that ends. Not investment advice.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much did Coforge pay for Encora?</div>
            <p className="blog-faq-a">Coforge acquired Encora at a $2.35B enterprise value, with equity consideration of $1.89B (₹17,032.60 Cr) settled entirely in new Coforge shares — no cash changed hands.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did Advent and Warburg Pincus take Coforge stock instead of cash?</div>
            <p className="blog-faq-a">Listed Coforge stock is liquid and can be sold on any trading day, unlike a private Encora stake that would need another negotiated sale. Taking stock also let the sponsors keep exposure to the AI-led engineering shift Encora was built to capture, and the two board seats they received give them influence over the integration that determines what those shares end up being worth.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How much of Coforge do the Encora sellers now own?</div>
            <p className="blog-faq-a">Advent, Warburg Pincus and minority holders received about 21.8% of Coforge&apos;s expanded share capital — 9,37,96,508 new shares issued at ₹1,815.91 each — plus two non-executive board seats held by Advent&apos;s Shweta Jalan and Atin Hirachand Jain.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is a preferential allotment in an M&amp;A deal?</div>
            <p className="blog-faq-a">A preferential allotment is when a company issues brand-new shares directly to a chosen party at an agreed price, rather than the buyer paying cash or the seller buying shares on the open market. Because the total consideration here was fixed in rupees, the issue price alone decided how much of Coforge the sellers ended up owning.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why does this deal matter for Indian IT M&amp;A?</div>
            <p className="blog-faq-a">It&apos;s the largest ER&amp;D (engineering R&amp;D) takeover ever by an Indian IT company, done by a mid-cap rather than a top-tier player, and it shows sponsor rollovers into listed stock becoming a bridge between private and public valuations when cash buyers are hesitant to pay sponsor-level prices.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Deal facts</h3>
          <ul>
            <li>Coforge press release and board-meeting filing (Dec 26, 2025); Coforge completion release (Apr 23, 2026); Coforge Q1 FY27 release and earnings call (Jul 27&ndash;28, 2026); Bloomberg; Business Standard; Investing.com; MarketScreener; Outlook Business; SiliconANGLE; Everest Group; Angel One.</li>
          </ul>
          <h3>Kautilya&apos;s own calculations, not disclosed figures</h3>
          <p>Dollar figures converted at ~₹90 to the dollar, the rate implied by the announced consideration. The ~3.9x revenue multiple and the ~$25M annual interest cost are derived from the disclosures, not stated by the company; the 14.5% premium is Business Standard&apos;s framing; the 21.8% seller stake is computed from the filed share counts, against the ~20&ndash;21.25% quoted at announcement.</p>
          <p>Not investment advice. This is a deal teardown for readers evaluating acquisition structures and buy-side value creation, not a recommendation regarding any security.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Every Kautilya teardown tags buyer, target, structure, and score the same way, so you
            can compare them later. Get the next one the day it publishes.
          </p>
          <Link href="/blog" className="coda-link">Read More Teardowns</Link>
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
