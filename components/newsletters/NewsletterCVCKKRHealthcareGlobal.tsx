'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function NewsletterCVCKKRHealthcareGlobal() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('CVC bought HealthCare Global at ₹130 a share in 2020 and handed it to KKR at ₹445 five years later — a $400M deal, a ~3.4x return, and a founder who never sold a share. A deal-structure teardown, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent("CVC's $400M Secondary Sale of HealthCare Global to KKR, Explained");
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
          <span className="meta-tag">Indian Healthcare &amp; PE</span>
          <span className="meta-tag">9 min read</span>
        </div>
        <h1>CVC&apos;s $400M Secondary Sale of HealthCare Global to KKR, Explained</h1>
        <div className="subtitle">
          How ₹130 Became ₹445 in Five Years — and Why the Founder Never Sold
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;18 September 2026</p>
        <p className="currency-note">
          Currency note: dollar figures carry an approximate rupee equivalent beside them, converted
          at ~₹83/$1, the rate implied by the announced $400M headline against the disclosed rupee
          consideration. Every converted figure is a Kautilya estimate, not an independently reported
          number.
        </p>
        <div className="hero-line" />
      </div>

      {/* ── Body ── */}
      <article className="story-body">
        <p>
          One private equity firm sold India&apos;s largest cancer hospital chain to another. CVC
          bought HealthCare Global at ₹130 a share in 2020 and handed it to KKR at ₹445 five years
          later, a $400M deal and a ~3.4x return. No founder cashed out, no business changed what it
          does. Only the owner did.
        </p>
        <p>
          That is the whole story in one sentence, and it is also the reason this deal is worth
          reading closely. Every other teardown in this newsletter has involved a strategic buyer
          absorbing a target, or a multinational parent exiting a listed Indian subsidiary. This one
          is neither. It is a fund-to-fund handover: CVC&apos;s Aceso vehicle, which built its stake
          in HealthCare Global (HCG) during the depths of the COVID-19 pandemic, sold control to KKR
          at a price that valued the platform roughly 3.4 times higher than what CVC paid in. The
          hospitals kept treating patients, the founder kept his office, and the only thing that
          moved was which fund&apos;s name sat on the shareholder register.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>CVC&apos;s Aceso vehicle sold up to 54% of HealthCare Global to KKR at ₹445/share, a ~3.4x return on its 2020 entry price of ₹130/share.</li>
            <li>This was a secondary sale — private equity to private equity — not a strategic acquisition or a founder exit. HCG&apos;s founder, Dr B.S. Ajaikumar, retained a non-executive chairman role and did not sell out.</li>
            <li>KKR&apos;s mandatory open offer to public shareholders was priced at ₹504.41/share, above CVC&apos;s exit price — a reminder that the open-offer formula and the negotiated control price are two separate numbers, set by two separate mechanisms.</li>
            <li>The deal complements KKR&apos;s existing Max Healthcare stake, giving it a second, oncology-focused platform in Indian hospital care.</li>
          </ul>
        </div>

        <h2>The Setup, the Move, and the Point</h2>
        <ul className="constraint-list">
          <li><strong>The setup.</strong> In June 2020, at the height of pandemic uncertainty, CVC&apos;s Aceso Company Pte Ltd invested roughly ₹384 Cr in HCG through a share subscription at ₹130/share, plus a further ₹129 Cr through warrants — a rescue-priced entry into a hospital chain that needed capital and got it from a fund willing to underwrite oncology care through a public-health crisis. By September 2020, Aceso&apos;s stake had grown to 49.99%, and it built toward majority control over the years that followed.</li>
          <li><strong>The move.</strong> On February 23, 2025, KKR signed a definitive agreement to buy up to 54% of HCG from CVC&apos;s Aceso vehicle at ₹445/share, a deal valuing the transaction at roughly $400M. Because HCG is listed, the purchase triggered a mandatory open offer to public shareholders for a further 26%, priced under SEBI&apos;s takeover formula at ₹504.41/share — meaning KKR&apos;s eventual stake could land anywhere between 54% and 77% depending on how many public shareholders tendered.</li>
          <li><strong>The point.</strong> This is what a clean secondary exit looks like in Indian healthcare: no restructuring drama, no founder walking away with a check, no change to what the business does day to day. CVC bought scarcity — India&apos;s only private oncology platform operating at real scale — held it through a growth phase, and sold that same scarcity to a buyer with a bigger balance sheet and an existing hospital platform to bolt it onto.</li>
        </ul>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Deal value</td><td>~$400M (up to 54% stake, at ₹445/share)</td></tr>
              <tr><td>CVC&apos;s 2020 entry price</td><td>₹130/share</td></tr>
              <tr><td>Implied return</td><td>~3.4x over roughly five years</td></tr>
              <tr><td>Mandatory open offer price</td><td>₹504.41/share, for a further 26%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          The headline number that makes this a teardown worth reading: the exit price and the
          public open-offer price are not the same number, and that gap is not an accident. Sources:
          CVC media statement, KKR/HCG joint announcement, BSE filings.
        </p>

        <h2>What HealthCare Global Actually Is</h2>
        <p>
          Founded in 1989 by Dr B.S. Ajaikumar, HealthCare Global Enterprises operates 25 cancer
          care centres across 19 cities in India, with roughly 2,500 beds, 100 operating theatres,
          and 40 linear accelerator (LINAC) machines for radiation therapy. It is, by scale, the only
          private oncology-focused hospital platform operating at this size anywhere in India. Most
          general hospital chains treat cancer as one department among many; HCG built its entire
          footprint around it instead. That specialisation is the asset. A generalist hospital group
          can add oncology capacity; building 25 centres&apos; worth of specialist radiation
          equipment, trained oncologists, and referral relationships from scratch cannot be done
          quickly, which is exactly why a platform like this trades at a premium to a generic
          hospital chain of similar revenue.
        </p>

        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Indicator</th><th>Figure</th></tr>
            </thead>
            <tbody>
              <tr><td>Buyer</td><td>KKR, via a controlling-stake purchase from CVC&apos;s Aceso Company Pte Ltd</td></tr>
              <tr><td>Target</td><td>HealthCare Global Enterprises Ltd (NSE/BSE: HCG), founded 1989 by Dr B.S. Ajaikumar</td></tr>
              <tr><td>Seller</td><td>CVC Capital Partners, via Aceso Company Pte Ltd, exiting the majority stake it built from 2020</td></tr>
              <tr><td>Consideration</td><td>Up to 54% of HCG at ₹445/share, ~$400M in total deal value</td></tr>
              <tr><td>CVC&apos;s 2020 entry</td><td>~₹384 Cr equity subscription at ₹130/share, plus ~₹129 Cr in warrant subscription</td></tr>
              <tr><td>Mandatory open offer</td><td>26% of public shareholders at ₹504.41/share, up to ₹1,870.87 Cr, under SEBI&apos;s takeover regulations</td></tr>
              <tr><td>Post-deal stake range</td><td>54%–77%, depending on open-offer take-up</td></tr>
              <tr><td>Founder&apos;s role</td><td>Dr B.S. Ajaikumar transitions to Non-Executive Chairman, retaining a clinical and research focus; did not sell a personal stake in the transaction</td></tr>
              <tr><td>Target footprint</td><td>25 cancer centres, 19 cities, ~2,500 beds, 100 operating theatres, 40 LINAC machines</td></tr>
              <tr><td>Announced → expected close</td><td>February 23, 2025 → targeted for Q3 2025, subject to customary closing conditions</td></tr>
              <tr><td>Buyer&apos;s existing India healthcare exposure</td><td>KKR is also a shareholder in Max Healthcare, one of India&apos;s largest hospital networks</td></tr>
            </tbody>
          </table>
        </div>
        <p className="currency-note">
          Five years, one price that tripled and change. Sources: CVC statement, KKR/HCG joint press
          release, Businesswire, BSE/SEBI filings.
        </p>

        <h2>The Return, and Why the Math Is Cleaner Than It Looks</h2>
        <p>
          <strong>In plain terms, a secondary sale:</strong> one financial sponsor selling its stake
          to another financial sponsor, rather than to a strategic operator or back to the company
          itself. The business, its management, and its operations are unaffected in the near term —
          what changes is which fund&apos;s capital and which fund&apos;s hold-period clock now sits
          behind the ownership.
        </p>
        <ul className="constraint-list">
          <li><strong>₹130 to ₹445 is a real number, and it is not adjusted for anything.</strong> CVC&apos;s original entry combined a ₹130/share equity subscription with a separate warrant subscription, so its true blended cost basis was almost certainly higher than ₹130 alone once the warrants are folded in. The ~3.4x figure quoted publicly compares headline share prices, not a fully loaded return net of warrant dilution and any capital CVC deployed along the way — treat it as the right order of magnitude, not a precise IRR.</li>
          <li><strong>Five years at ~3.4x works out to roughly a 28% annualised return</strong>, using the simple compounding math (3.4 to the power of 1/5, minus one). That sits comfortably inside — arguably at the strong end of — what a control-stake healthcare platform investment is expected to deliver over a five-year hold, especially one entered at a stressed, pandemic-era price.</li>
          <li><strong>The entry price was depressed by the moment, not by the business.</strong> June 2020 was a period of acute uncertainty for hospital operators: elective procedures were down, capital markets were closed to weaker credits, and CVC was one of the few funds willing to underwrite a specialist oncology platform through that window. Part of the 3.4x is genuine value creation; part of it is simply the spread between a crisis-priced entry and a normalised exit.</li>
        </ul>

        <h2>Two Prices, Two Mechanisms: The Exit Price vs. the Open-Offer Price</h2>
        <p>
          <strong>In plain terms, the open-offer price:</strong> under SEBI&apos;s takeover code, when
          an acquirer buys control of a listed Indian company, it must offer public shareholders an
          exit for at least 26% of the company, at a price set by a formula anchored to trading data
          around the announcement date. It is a regulatory floor, not a negotiation, and it is
          calculated independently of whatever price the controlling shareholder actually negotiated.
        </p>
        <p>
          Here the two numbers point in an unusual direction relative to most deals this newsletter
          has covered. In several prior teardowns — JSW&apos;s purchase of Akzo Nobel India, or
          ChrysCapital&apos;s buyout of Novartis India — the market re-rated the stock upward
          immediately after announcement, leaving the formula-based open-offer price stranded below
          where the stock actually traded, and public shareholders declined to tender. In this deal,
          the open-offer price of ₹504.41/share was set{' '}
          <em>above</em> the ₹445/share KKR paid CVC for control. That is not a contradiction — the
          two prices are calculated by entirely different mechanisms, one negotiated bilaterally
          between two sophisticated funds and one set mechanically off historic trading data — but it
          is a useful reminder that &ldquo;the deal price&rdquo; and &ldquo;the open-offer
          price&rdquo; answer two different questions and should never be treated as the same number
          when you are modelling a takeover.
        </p>
        <p className="currency-note">
          The negotiated price and the regulatory floor, moving in opposite directions from most of
          this newsletter&apos;s prior deals. Sources: KKR/HCG joint announcement, SEBI open-offer
          filings.
        </p>

        <h2>Why the Founder Didn&apos;t Sell</h2>
        <p>
          The detail that separates this deal from almost every other ownership change covered in
          this newsletter: the person who built the business is still in the building. Dr B.S.
          Ajaikumar founded HCG in 1989 and ran it for over three decades before CVC&apos;s 2020
          investment diluted his personal stake to a minority position. In this transaction, he moves
          to Non-Executive Chairman, staying focused on clinical and research work rather than
          day-to-day operations — but he did not sell out, because by 2025 the shares being
          transacted were CVC&apos;s, not his.
        </p>
        <p>
          That is the mechanical explanation for why &ldquo;no founder cashed out&rdquo; here: once a
          fund holds majority control, the founder&apos;s remaining stake is a minority position that
          simply isn&apos;t large enough to be the subject of a control transaction. The more
          interesting question is why KKR wanted him to stay at all, and the answer is scarcity of a
          different kind — clinical reputation and physician relationships built over 35 years don&apos;t
          transfer with a share purchase agreement the way a hospital building does.
        </p>

        <h2>Why This Fits Inside KKR&apos;s Existing India Healthcare Bet</h2>
        <p>
          KKR was not building a healthcare platform in India from zero. It already holds a stake in
          Max Healthcare, one of the country&apos;s largest hospital networks, which is broad and
          multi-specialty by design. HCG is the opposite shape: narrow, deep, and built entirely
          around oncology. Bolting a specialist cancer-care platform onto a generalist network is a
          different move from buying a second general hospital chain — it adds a service line Max
          doesn&apos;t have at HCG&apos;s scale, rather than adding more of what KKR&apos;s existing
          platform already does. Whether the two platforms are formally integrated or run as separate
          investments is a decision for KKR&apos;s portfolio construction, not something this deal&apos;s
          public filings settle — but the strategic logic of pairing a specialist asset with a
          generalist one is consistent with how consolidators in other sectors covered in this
          newsletter have behaved.
        </p>

        <h2>Three Things This Deal Confirms About Indian Healthcare PE</h2>
        <ul className="constraint-list">
          <li><strong>For funds nearing the end of a hold period, a sponsor-to-sponsor sale is a clean exit.</strong> No new operator due diligence on whether a strategic buyer&apos;s culture fits, no employee integration risk, no customer-facing disruption. CVC sold to a buyer who already understands healthcare platform economics, which likely compressed the time between agreement and close relative to a strategic sale.</li>
          <li><strong>For platform builders, category leadership commands a premium that a generic asset of the same revenue would not get.</strong> HCG&apos;s scarcity value — the only private oncology platform at real scale in India — is doing real work in that 3.4x, separate from whatever organic growth the business delivered over five years.</li>
          <li><strong>For public shareholders in any Indian takeover, the open-offer price is a formula output, not a market read.</strong> This deal happened to price the open offer above the control price; others in this newsletter have shown the opposite. Either way, the lesson is the same: read the open-offer mechanics on their own terms, and don&apos;t assume they track the negotiated deal price in either direction.</li>
        </ul>
        <p className="currency-note">Ownership changed hands twice in five years; the hospitals never closed a single day. Sources: BSE filings, CVC and KKR statements.</p>

        <p>
          <strong>Read this before you evaluate a secondary sale in Indian healthcare.</strong>{' '}
          Three questions matter more than the headline multiple: was the entry price depressed by a
          moment (a crisis, a sector scare) rather than by the business itself; does the asset have a
          scarcity characteristic — category leadership, a licence, a specialist capability — that a
          generic competitor of the same size couldn&apos;t replicate quickly; and does the incoming
          buyer already have a platform to bolt the asset onto, or is it starting cold. HCG scores
          well on the first two and, given KKR&apos;s existing Max Healthcare stake, plausibly on the
          third as well. Not investment advice.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">How much did KKR pay for HealthCare Global?</div>
            <p className="blog-faq-a">KKR agreed to acquire up to 54% of HealthCare Global Enterprises from CVC&apos;s Aceso vehicle at ₹445/share, a deal valued at approximately $400M, announced February 23, 2025 and targeted to close by Q3 2025.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What return did CVC make on HealthCare Global?</div>
            <p className="blog-faq-a">CVC's Aceso vehicle originally invested in HCG in June 2020 at ₹130/share. Selling at ₹445/share roughly five years later implies a return of about 3.4x on the headline share price, or roughly 28% annualised — though this doesn't account for the separate warrant subscription CVC also took at entry, which likely changes its true blended cost basis.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Did HealthCare Global's founder sell his shares in this deal?</div>
            <p className="blog-faq-a">No. Dr B.S. Ajaikumar, HCG's founder, retained a non-executive chairman role focused on clinical and research work. The shares transacted belonged to CVC's Aceso vehicle, which had held majority control since 2020 — the founder's own remaining stake was not part of this sale.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is a secondary sale in private equity?</div>
            <p className="blog-faq-a">A secondary sale is when one private equity fund sells its stake in a company to another private equity fund, rather than to a strategic (operating) buyer or via an IPO. The underlying business and its operations typically continue unchanged; what changes is the identity — and the return expectations and hold-period clock — of the controlling shareholder.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Why was the open offer price higher than the price KKR paid CVC?</div>
            <p className="blog-faq-a">The two prices are set by different mechanisms. KKR's ₹445/share was a bilaterally negotiated control price paid to CVC. The ₹504.41/share open-offer price to public shareholders was calculated under SEBI's takeover-code formula, anchored to historic trading data around the announcement date. There's no requirement that the two align, and in this deal the formula happened to land above the negotiated price — the reverse of what several other deals in this newsletter have shown.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Does this deal connect to KKR's other Indian healthcare investments?</div>
            <p className="blog-faq-a">Yes. KKR already holds a stake in Max Healthcare, a large multi-specialty Indian hospital network. HCG adds a specialist oncology platform alongside that generalist network, though public filings for this deal don't specify whether the two will be operationally integrated.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Deal facts</h3>
          <ul>
            <li>CVC Capital Partners media statement, &ldquo;CVC agrees the sale of up to 54% stake in Healthcare Global Enterprises for up to US$400m&rdquo; (Feb 2025); KKR/HCG joint announcement via Businesswire (Feb 23, 2025); BSE/SEBI open-offer filings (Detailed Public Statement, Feb–Mar 2025); HCG&apos;s June 4, 2020 stock-exchange intimation on the original Aceso investment agreement.</li>
          </ul>
          <h3>Kautilya&apos;s own calculations, not disclosed figures</h3>
          <p>The ~3.4x return and the ~28% annualised-return estimate are Kautilya calculations comparing CVC&apos;s disclosed ₹130/share entry price to KKR&apos;s disclosed ₹445/share exit price; neither company has published an audited IRR for the investment, and the calculation does not net out CVC&apos;s separate warrant subscription at entry. Dollar/rupee conversions are approximate, back-solved from the disclosed $400M headline against the rupee consideration.</p>
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
