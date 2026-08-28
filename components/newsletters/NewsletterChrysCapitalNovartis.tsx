'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function NewsletterChrysCapitalNovartis() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('ChrysCapital paid ₹1,445.89 Cr for 70.68% of Novartis India — India\'s first PE-led pharma buyout in 27 years. The public was offered an exit at ₹860.64 a share. Forty shares took it. A deal-structure teardown, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent("ChrysCapital's Novartis India Buyout, Explained");
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
        <Link href="/newsletter" className="back-link">← Kautilya Newsletter</Link>
        <div className="meta-row">
          <span className="meta-tag">Deal Teardown</span>
          <span className="meta-tag">Indian Pharma &amp; PE</span>
          <span className="meta-tag">6 min read</span>
        </div>
        <h1>ChrysCapital&apos;s Novartis India Buyout, Explained</h1>
        <div className="subtitle">
          Why the Public Was Offered ₹860.64 a Share — and Only 40 Took It
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;28 August 2026</p>
        <p className="currency-note">
          Currency note: dollar figures carry an approximate rupee equivalent beside them, converted
          at ~₹91/$1, the rate implied by the announced consideration. Every converted figure is a
          Kautilya estimate, not an independently reported number.
        </p>
        <div className="hero-line" />
      </div>

      {/* ── Body ── */}
      <article className="story-body">
        <p>
          ChrysCapital paid ₹1,445.89 Cr (~$159M) for 70.68% of Novartis India, a 79-year-old listed
          company with no factory of its own and about fifty employees. It then had to offer the
          public the same exit. Forty shares were tendered.
        </p>
        <p>
          Novartis AG took two years to decide that a mass-market, India-only listed subsidiary no
          longer belonged inside a group built around innovative medicines. A consortium led by
          ChrysCapital bought 1,74,50,680 shares, 70.68% of the company, for ₹1,445.89 Cr at signing
          and ₹1,376.8 Cr after closing adjustments, giving India&apos;s largest homegrown private
          equity firm majority control of a pharmaceutical company for the first time in 27 years.
          What it bought owns no plant: Voveran, Calcium Sandoz and Tegrital, three decades of
          prescribing habit, and a debt-free listed shell to consolidate into. Novartis kept its
          Hyderabad laboratories; the public kept their shares; and ChrysCapital got a platform,
          which is a different thing from a company.
        </p>

        <h2>The Setup, the Move, and the Point</h2>
        <ul className="constraint-list">
          <li><strong>The setup.</strong> The share purchase agreement was signed on February 19, 2026. The mandatory open offer covered 26% of the company, 64,19,608 shares at ₹860.64, worth up to ₹552.49 Cr, managed by Axis Capital: a 3.64% premium to the ₹830.45 close three days earlier. In plain terms, an open offer: when someone buys control of a listed Indian company, SEBI compels them to offer the same exit to public shareholders at a price fixed by formula from past trading. It is a floor, not a valuation, and it is set on the announcement date.</li>
          <li><strong>The move.</strong> The stock hit its upper circuit at ₹996.50 the next morning and kept climbing, trading more than 72% above the offer price during the tender window against a 52-week high of ₹1,690. An interim disclosure in June showed zero acceptances; by the July 10 close, forty shares. Sale and offer concluded together on July 29, at the 245th board meeting, where six directors resigned and six were appointed inside eighty minutes.</li>
          <li><strong>The point.</strong> Two lessons in one deal. For strategy: a consolidator does not buy a business, it buys permission, and here that meant a listed vehicle, a clean balance sheet and brands doctors already write without thinking. For deal-making: a mandatory offer priced by formula on the announcement date is stale by the time the tender opens, and everybody in the market knows it except the formula.</li>
        </ul>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>SPA consideration</td><td>₹1,445.89 Cr (~$159M) at signing; ₹1,376.8 Cr at closing</td></tr>
              <tr><td>Stake acquired</td><td>70.68% — 1,74,50,680 equity shares</td></tr>
              <tr><td>Target headcount</td><td>~50 employees, no factories of its own</td></tr>
              <tr><td>Open offer take-up</td><td>40 shares tendered, out of 64,19,608 on offer</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          The split that made the deal: the listed brands went to a buyer, the laboratories stayed
          with the seller. Sources: Novartis AG statement, BSE filings.
        </p>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Buyer</td><td>A ChrysCapital-led consortium: WaveRise Investments (Mauritius) 56.45%, ChrysCapital Fund X 10.32%, Two Infinity Partners (India) 3.91%</td></tr>
              <tr><td>Target</td><td>Novartis India Ltd (BSE: 500672), incorporated December 13, 1947. Voveran, Calcium Sandoz, Tegrital, Simulect, Certican, Neoral, Myfortic, Exelon</td></tr>
              <tr><td>Seller</td><td>Novartis AG, Basel, exiting the listed entity completely</td></tr>
              <tr><td>Consideration</td><td>₹1,445.89 Cr headline (~$159M); ₹1,376.8 Cr at closing. The ₹69.1 Cr difference was a standard adjustment, mechanics undisclosed</td></tr>
              <tr><td>Shares transacted</td><td>1,74,50,680 equity shares, 70.68% of paid-up capital</td></tr>
              <tr><td>Two prices</td><td>WaveRise, offshore, paid ₹860.64 a share; Fund X and Two Infinity, onshore, paid ₹701.25. The filings do not explain the split</td></tr>
              <tr><td>Tranches</td><td>WaveRise ₹1,199.59 Cr · ChrysCapital Fund X ₹178.75 Cr · Two Infinity ₹67.55 Cr</td></tr>
              <tr><td>Open offer</td><td>26% (64,19,608 shares) at ₹860.64, up to ₹552.49 Cr. Manager Axis Capital. A 3.64% premium to the ₹830.45 close of Feb 16, 2026</td></tr>
              <tr><td>Open offer result</td><td>40 shares tendered, about ₹34,426. Public holding afterwards 29.32%</td></tr>
              <tr><td>Announced → closed</td><td>Feb 19, 2026 → Jul 29, 2026, both concluding at the same board meeting</td></tr>
              <tr><td>What Novartis kept</td><td>Novartis Healthcare Private Ltd, unlisted: the Hyderabad centre, R&amp;D and clinical trials, and innovative medicines. Plus a royalty-free Tegrital licence and a five-year distribution deal</td></tr>
              <tr><td>New leadership</td><td>Dr Vikas Gupta as MD and CEO, Bhagwat Singh Deora as CFO, Ramesh Ramadurai as Chairperson. Six directors out, six in, on closing day</td></tr>
              <tr><td>Target financials</td><td>FY25 revenue ₹356.27 Cr, PAT ₹100.90 Cr. FY26 revenue ₹354 Cr, PAT ₹93.18 Cr, down 6.8%</td></tr>
              <tr><td>Q1 FY27</td><td>Revenue ₹103.81 Cr (+18.6%); net profit up 16.6%. The first quarter under the new owner</td></tr>
              <tr><td>The buyer</td><td>ChrysCapital, founded 1999; ~$8.5B raised across ten funds; Fund X closed at $2.2B in November 2025 with a buyout mandate</td></tr>
              <tr><td>Status (Aug 24, 2026)</td><td>Closed. A name change has cleared the Central Registration Centre, awaiting the 78th AGM vote</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          Two years of deliberation in Basel, then five months from signature to a new board in
          Mumbai. Sources: Novartis AG statement, BSE filings, Axis Capital.
        </p>

        <h2>What Actually Happened. Basel and Mumbai, 2024 to 2026</h2>
        <ul className="constraint-list">
          <li><strong>A Swiss parent decided its Indian listing was capital, not strategy.</strong> Novartis AG opened a strategic review in February 2024 and concluded, two years on, that a mass-market generics business listed in India had limited relevance to a group built around innovation-led medicines. This was not an exit from India: the Hyderabad centre, the R&amp;D and clinical-trial operations and the innovative-medicines business all sit in an unlisted company Novartis still owns. In plain terms, reclassified from promoter to public: the seller stops being treated as a controlling shareholder under the listing rules and becomes an ordinary one. Here it happened on the closing date, and Novartis AG holds no shares at all. Why that matters: this is the same pattern as Akzo Nobel&apos;s sale of its India paints business to JSW. Global groups increasingly treat India-only listed vehicles as capital to redeploy, which keeps producing debt-free, legacy-brand targets for domestic buyers.</li>
          <li><strong>India&apos;s largest homegrown private equity firm changed what it does.</strong> ChrysCapital has invested in Indian pharma for 27 years, in Intas, Eris Lifesciences, Corona Remedies and La Renon, and every one was a minority stake with board influence rather than control. Fund X closed at $2.2B in November 2025 with buyouts as the mandate, and this is the first live example. Reported losing bidders included Dr Reddy&apos;s and Alkem, both of whom would have absorbed it as a bolt-on.</li>
          <li><strong>The public was offered ₹860.64 and declined, almost unanimously.</strong> The offer opened after the stock had already re-rated on the news. By the June interim disclosure not one share had been accepted; by the July 10 close, forty. Public shareholding finished at 29.32%, essentially where it started.</li>
        </ul>

        <p>
          <strong>Why it matters.</strong> Three portable lessons. If you advise a listed MNC
          subsidiary: a parent&apos;s strategic review is a two-year clock, and when it concludes,
          control, board and management change in one afternoon. If you advise a fund raising for
          control: this is proof that the domestic buyer pool for MNC carve-outs now includes Indian
          PE, not just strategics. And if you hold shares in a takeover target: the open offer is a
          floor priced on the announcement date, so once the market re-rates above it, tendering is
          simply the worst trade.
        </p>

        <h2>Two Prices on One Day: Why the Mauritius Buyer Paid ₹860.64 and the Indian Buyers Paid ₹701.25</h2>
        <p>
          Three buyers, one share purchase agreement, one signing date. WaveRise Investments,
          registered in Mauritius, took 56.45% at ₹860.64 a share. ChrysCapital Fund X and Two
          Infinity Partners, both onshore Indian vehicles, took 14.23% between them at ₹701.25. The
          same shares, in the same transaction, at a price 22.7% lower. The filings disclose both
          prices precisely and explain neither. What follows is what the structure implies, not what
          anyone said.
        </p>
        <ul className="constraint-list">
          <li><strong>The rulebook depends on where the buyer sits.</strong> India&apos;s exchange-control rules cap what a resident may pay a non-resident for shares: not more than fair value. A non-resident buying from another non-resident faces no such ceiling. Novartis AG is Swiss and WaveRise is Mauritian, so that leg sat outside the cap while the two Indian entities did not. The pattern fits the prices exactly, though it is inference rather than disclosure.</li>
          <li><strong>The higher price then set the floor for everyone else.</strong> SEBI&apos;s takeover code treats a consortium and its persons acting in concert as one acquirer, and the offer must be at least the highest price any of them paid. It came out at ₹860.64, the offshore number, not ₹701.25. A structuring decision taken for the buyers&apos; own reasons handed the public an offer 22.7% better than it might have been.</li>
          <li><strong>And it made no difference, because the market outran the formula.</strong> ₹860.64 was a 3.64% premium to the pre-announcement close, which is what a backward-looking formula produces. Within a day the stock was at ₹996.50, and it kept going. Forty shares out of 64,19,608 is not shareholder apathy. It is arithmetic.</li>
        </ul>
        <p className="currency-note">
          Five prices from one deal, and only two of them were negotiated. Sources: Axis Capital
          Detailed Public Statement, BSE filings, Kotak Neo.
        </p>

        <p>
          <strong>The signal most briefs miss.</strong> The open-offer price is not a valuation of
          the company. It is a by-product of how the buyer chose to organise itself. Read the
          acquirer list before you read the offer price: which entities are onshore, which are
          offshore, and which one paid the most, because that last number becomes the floor for
          every public shareholder. Here the composition of a consortium was worth 22.7% to people
          who had no part in designing it, and who then declined it anyway.
        </p>

        <h2>Three Things This Deal Confirms About Indian Pharma and Indian PE</h2>
        <ul className="constraint-list">
          <li><strong>The MNC exit has become a supply line, not an event.</strong> Novartis follows Akzo Nobel out of a listed Indian subsidiary, and the logic is the same each time: a global group decides an India-only vehicle is capital rather than strategy. Every such decision produces the same kind of target, debt-free, brand-rich and thinly staffed, and there is a queue of domestic buyers for exactly that.</li>
          <li><strong>Indian private equity has moved from minority cheques to control.</strong> ChrysCapital raised $2.2B for Fund X with buyouts as the mandate and, for the first time, roughly 15% participation from Indian limited partners. Domestic capital taking outright control of a listed MNC subsidiary is a different market from the one where PE bought 20% and a board seat.</li>
          <li><strong>The below-market open offer is now the default outcome.</strong> JSW–Akzo saw 0.44% tendered, Torrent–JB Chemicals almost nothing, and this one forty shares. When a control deal is well received, the SEBI formula price is stale before the tender window opens. Treat the offer as a funding contingency you will not spend, and model the deal without it.</li>
        </ul>
        <p className="currency-note">Ownership changed, and so did the operating model. Sources: BSE filings, ScanX.</p>

        <p>
          <strong>Signal for advisors.</strong> Two conversations this week. Any client running or
          advising a listed MNC subsidiary in India: strategic reviews conclude, and the successful
          buyers here were domestic, so the relevant comparison set has widened. And any client
          sitting on shares of a company in play: the open offer is a floor, not a target, and the
          right question is whether the market has already priced the control premium the formula
          missed.
        </p>

        <h2>Was ₹1,446 Cr Too Much for ₹354 Cr of Revenue? Three Ways to Judge It</h2>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Way to measure it</th><th>What it says here</th></tr>
            </thead>
            <tbody>
              <tr><td>Price against earnings</td><td>₹1,445.89 Cr for 70.68% implies about ₹2,046 Cr for the whole company, roughly 22 times FY26 profit of ₹93.18 Cr. A full price for a business whose profit fell 6.8% that year, and both figures are derived rather than disclosed.</td></tr>
              <tr><td>Price against what the market said</td><td>The stock hit its upper circuit the next day and market value ranged from ₹3,089 Cr to ₹4,119 Cr through 2026, near 44 times earnings at the top. The market decided the buyer had bought well before the buyer had done anything.</td></tr>
              <tr><td>Price against building it</td><td>Voveran, Calcium Sandoz and Tegrital carry three decades of prescriber recall, which no launch budget recreates quickly. The listed, debt-free, 79-year-old vehicle is itself part of the asset: a consolidator needs something to consolidate with.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          What was paid against what the market said afterwards. Sources: BSE filings, MarketsMojo.
        </p>
        <p>
          What &apos;22 times earnings&apos; means: the implied price for the whole company equals
          about twenty-two years of last year&apos;s profit. Unremarkable for a business growing
          steadily; for one whose profit fell 6.8%, it is a price for what the buyer intends to do
          next.
        </p>
        <p>
          <strong>The discipline.</strong> Price this as a platform, then hold the platform to
          evidence. The multiples above are derived from the consideration and the stake, not
          disclosed, and the earnings beneath them are not a growth series: FY26 profit fell 6.8%
          and the December 2025 quarter fell 36.8%. Q1 FY27&apos;s rebound to 18.6% revenue growth
          is one quarter under new management, a data point rather than a trend. The case rests on
          bolt-ons not yet announced, by a firm that has never run a pharmaceutical company.
        </p>
        <p>
          <strong>This issue.</strong> Watch three things. The 78th AGM, where shareholders vote on
          the new name and memorandum already cleared by the Central Registration Centre. The
          operational load: an ESOP scheme, new articles, a full C-suite transition and the wind-down
          of a Dr Reddy&apos;s distribution agreement effective September 30, 2026, all landing on a
          fifty-person organisation inside one year. And the first bolt-on, because until one is
          announced the platform thesis is an intention, not a strategy.
        </p>

        <h2>The Consortium Purchase, and Why the Acquirer List Decides the Public&apos;s Price</h2>
        <p>
          <strong>In plain terms, persons acting in concert:</strong> everyone buying together
          toward a common objective, whether or not they are formally related. The takeover code
          adds them up and treats them as a single acquirer, so their combined holding triggers the
          offer and the highest price any of them paid sets its price.
        </p>
        <p>
          <strong>In plain terms, the offer price:</strong> not a valuation and not a negotiation. It
          is the highest of several benchmarks defined in the regulations, including the highest
          price the acquirer group paid, calculated from a reference date that is fixed when the deal
          is announced.
        </p>
        <ul className="constraint-list">
          <li><strong>One consortium, three entities, and the most expensive one wins.</strong> WaveRise, Fund X and Two Infinity bought together, alongside named persons acting in concert. Because the code aggregates them, the ₹860.64 paid on one leg, not the ₹701.25 paid on two others, became the public&apos;s price. When you structure a consortium, you are also pricing the mandatory offer.</li>
          <li><strong>The headline consideration is not the money that moves.</strong> ₹1,445.89 Cr was signed; ₹1,376.8 Cr was paid. The ₹69.1 Cr gap is a standard closing adjustment and its mechanics were never published. Always establish which of the two numbers is the cheque before you build anything on it.</li>
          <li><strong>Control changes in a single afternoon, and everything moves at once.</strong> The 245th board meeting ran from 4:20 to 5:40 PM. Inside those eighty minutes: the sale completed, the open offer concluded, the seller was reclassified from promoter to public, six directors left, six arrived, and a new chief executive, finance chief and chairperson took office. Plan the first day as an operation, not a formality.</li>
        </ul>
        <p className="currency-note">
          Three buyers on the register, one acquirer in the eyes of the code. Sources: Axis Capital
          Detailed Public Statement, ScanX.
        </p>

        <h2>Buying a Listed Subsidiary from a Multinational: The Three-Step Playbook</h2>
        <p>
          <strong>In plain terms, a platform deal:</strong> buying a company not to run it as it is,
          but to use it as the base for acquiring others. The first purchase supplies the listing,
          the balance sheet and the management team; the returns are expected to come from what gets
          bought afterwards.
        </p>
        <ul className="constraint-list">
          <li><strong>Step 1: Buy the vehicle, not only the business.</strong> What made Novartis India worth ₹1,446 Cr was not ₹354 Cr of revenue from a fifty-person operation. It was a debt-free, 79-year-old listed company with brands doctors already prescribe: a platform to bolt onto rather than a business to fix. Value the vehicle separately from the earnings; they are two different assets.</li>
          <li><strong>Step 2: Structure the consortium before you price the offer.</strong> Who buys through which entity determines the tax treatment, the exchange-control ceiling and, through the takeover code, the price every public shareholder is offered. The offer price is an output of the structure, and once filed it cannot be revisited.</li>
          <li><strong>Step 3: Replace the operating system on day one.</strong> ChrysCapital changed the board, the C-suite, the articles, the domain and the name within three weeks, because a subsidiary running on a parent&apos;s systems has none of its own. Budget the transition as a project with an owner, not paperwork that follows completion.</li>
        </ul>
        <p className="currency-note">
          One quarter under new ownership, and the years that came before it. Sources: Folo.one,
          MarketsMojo.
        </p>

        <p>
          <strong>Read this before you buy a listed MNC subsidiary.</strong> Three things decide
          whether it works: what you paid for the vehicle as distinct from the earnings, how fast you
          can replace an operating model that was never designed to stand alone, and whether the
          bolt-ons you are counting on actually exist at prices you can pay. ChrysCapital has
          answered the first two and not yet the third, which is why one quarter of 18.6% revenue
          growth is encouraging rather than conclusive. Not investment advice.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much did ChrysCapital pay for Novartis India?</div>
            <p className="blog-faq-a">ChrysCapital&apos;s consortium paid ₹1,445.89 Cr (~$159M) at signing, ₹1,376.8 Cr after closing adjustments, for 70.68% of Novartis India — 1,74,50,680 equity shares. It was announced on February 19, 2026 and closed on July 29, 2026.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did the public open offer for Novartis India shares fail?</div>
            <p className="blog-faq-a">The mandatory open offer was priced at ₹860.64 a share, a 3.64% premium to the pre-announcement close. The stock hit its upper circuit the next day and traded more than 72% above the offer price during the tender window, so shareholders had no reason to tender. Only 40 of 64,19,608 shares were accepted.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why did WaveRise pay ₹860.64 a share while ChrysCapital Fund X paid ₹701.25?</div>
            <p className="blog-faq-a">WaveRise Investments is a Mauritius entity buying from Swiss seller Novartis AG, a non-resident-to-non-resident transfer that sits outside India&apos;s exchange-control fair-value cap. ChrysCapital Fund X and Two Infinity Partners are onshore Indian vehicles, subject to that cap. The filings disclose both prices but do not explain the split; this is Kautilya&apos;s inference from the structure, not a disclosed reason.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is a mandatory open offer under Indian takeover rules?</div>
            <p className="blog-faq-a">When an acquirer buys control of a listed Indian company, SEBI&apos;s takeover code requires it to offer public shareholders an exit for at least 26% of the company, at a price set by formula from trading data as of the announcement date. It is a regulatory floor, not a valuation of the business, and consortium members acting in concert are treated as one acquirer — the highest price any of them paid sets the offer price for everyone.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What did Novartis India keep after the sale?</div>
            <p className="blog-faq-a">Novartis AG retained Novartis Healthcare Private Ltd, an unlisted entity holding the Hyderabad R&amp;D and clinical-trial operations and the innovative-medicines business, plus a royalty-free licence for Tegrital and a five-year distribution agreement with the newly sold listed entity.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Deal facts</h3>
          <ul>
            <li>Novartis AG statement to the board of Novartis India (Feb 19, 2026); Axis Capital Detailed Public Statement and Draft Letter of Offer (Feb–Mar 2026); BSE and SEBI filings, including the 245th board meeting outcome (Jul 29, 2026); ScanX; Screener.in; Business Standard; Folo.one; MarketsMojo; Kotak Neo.</li>
          </ul>
          <h3>Kautilya&apos;s own calculations, not disclosed figures</h3>
          <p>Dollar equivalents at ~₹91 to the dollar. The implied whole-company value and the earnings multiples are derived from the disclosed consideration and stake, not company-stated. The split onshore and offshore pricing was not explained in the filings; the reading offered here is inference.</p>
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
