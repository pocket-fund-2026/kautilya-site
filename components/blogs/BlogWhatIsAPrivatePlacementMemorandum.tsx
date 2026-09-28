'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

export default function BlogWhatIsAPrivatePlacementMemorandum() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('What a private placement memorandum actually is, what goes inside one, and how it differs from a prospectus or a pitch deck, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('What Is a Private Placement Memorandum? A Complete Guide');
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

      {/* ── Hero: uses existing .story-hero, .meta-tag ── */}
      <div className="story-hero" id="storyStart">
        <Link href="/blog" className="back-link">← Blog</Link>
        <div className="meta-row">
          <span className="meta-tag">Fundamentals</span>
          <span className="meta-tag">Capital Raising</span>
          <span className="meta-tag">8 min read</span>
        </div>
        <h1>What Is a Private Placement Memorandum? A Complete Guide</h1>
        <div className="subtitle">
          What a PPM Is, Why It Exists, What Goes Inside One, and How It Differs From a Prospectus or a Pitch Deck
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;28 September 2026</p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <p>
          A private placement memorandum sounds like the kind of document only a securities
          lawyer would read closely. In practice, anyone raising capital privately, or investing
          in a fund, a search fund acquisition, or a deal that isn&apos;t listed on an exchange,
          will run into one sooner or later.
        </p>
        <p>
          This guide covers what a PPM actually is, why it exists, what goes inside one, and how
          it differs from the other documents it gets confused with: a prospectus, a business
          plan, and a pitch deck.
        </p>

        <div className="key-takeaways">
          <div className="phase-label">Key Takeaways</div>
          <ul>
            <li>A private placement memorandum (PPM) is a disclosure document given to prospective investors in a private securities offering. It explains the investment, the risks, and the legal terms before anyone wires money.</li>
            <li>A PPM is not a marketing brochure. It is written to protect the issuer from liability just as much as it is written to inform the investor.</li>
            <li>The core sections are largely the same everywhere: an offering summary, risk factors, business description, use of proceeds, terms of the offering, management background, and financial information.</li>
            <li>A PPM is used instead of a public prospectus specifically because the offering is private, meaning it is exempt from the full registration process that public securities go through.</li>
            <li>Requirements and exemption categories vary by country, but the underlying logic does not: disclose enough that a reasonable investor can make an informed decision, and document that disclosure well enough to defend it later.</li>
          </ul>
        </div>

        <h2>What a Private Placement Memorandum Actually Is</h2>
        <p>
          A private placement memorandum, usually shortened to PPM, is a legal disclosure
          document that an issuer gives to prospective investors before they commit capital to a
          private offering. &ldquo;Private&rdquo; is the operative word. The security being sold,
          whether that&apos;s equity in a company, an interest in a fund, or a debt instrument, is
          not registered for sale to the general public. Instead, it&apos;s offered to a limited
          group of investors under an exemption that most jurisdictions carve out of their general
          securities laws.
        </p>
        <p>
          Because the offering skips the public registration process, regulators expect the
          issuer to compensate with direct, detailed disclosure to the people who are actually
          being asked to invest. That disclosure is what the PPM provides. It lays out what the
          investment is, what the money will be used for, what could go wrong, who is running the
          show, and exactly what an investor is agreeing to by signing.
        </p>
        <p>
          Think of it less as a pitch and more as a sworn statement. A pitch deck exists to get a
          meeting. A PPM exists to survive one, and to survive scrutiny long after the meeting is
          over.
        </p>

        <h2>Why a PPM Exists in the First Place</h2>
        <p>
          Every country with functioning capital markets regulates the sale of securities to the
          public. Public offerings come with heavy disclosure requirements: audited financials,
          ongoing reporting, regulatory review, and often a formal prospectus. That process is
          expensive and slow, and it exists to protect retail investors who may have no way to
          independently verify what they&apos;re being sold.
        </p>
        <p>
          Private placements exist as a narrower, faster path for issuers who are raising money
          from a smaller, typically more sophisticated pool of investors, such as accredited or
          qualified investors, institutions, or people with an existing relationship to the
          issuer. Because these investors are presumed to be better equipped to evaluate risk (or
          required to meet a wealth or income threshold that suggests they can absorb a loss),
          regulators allow the offering to skip most of the public-market machinery.
        </p>
        <p>
          The trade-off is disclosure. Skipping registration doesn&apos;t mean skipping honesty.
          The PPM is the document that carries that obligation. It exists so that an investor who
          was never protected by a regulator&apos;s review of the offering still received enough
          information to make an informed decision, and so that the issuer has a clear record of
          exactly what was disclosed if a dispute ever arises.
        </p>

        <h2>What&apos;s Actually Inside a PPM</h2>
        <p>
          The specific format varies by country and by the type of security being offered, but
          most PPMs are built around the same core sections.
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Section</th><th>What it covers</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Cover page &amp; offering summary</td>
                <td data-label="What it covers">Security type, amount being raised, minimum investment, and a statement that the securities are unregistered and subject to resale restrictions — the first thing a lawyer or compliance officer checks</td>
              </tr>
              <tr>
                <td>Risk factors</td>
                <td data-label="What it covers">Often the longest section. Has to be specific to the actual business and offering, not generic boilerplate — business risk, market risk, liquidity risk, regulatory risk, key person risk, dilution risk, among others relevant to the specific deal</td>
              </tr>
              <tr>
                <td>Business or fund description</td>
                <td data-label="What it covers">A factual account of what the company does, what the fund invests in, or what the project is, written for disclosure rather than persuasion</td>
              </tr>
              <tr>
                <td>Use of proceeds</td>
                <td data-label="What it covers">A breakdown of exactly where the capital raised will go. Specific line items hold up better than vague answers like &ldquo;general business purposes&rdquo;</td>
              </tr>
              <tr>
                <td>Terms of the offering</td>
                <td data-label="What it covers">Security type, pricing, minimum and maximum subscription amounts, investor eligibility requirements, fees, and, for funds, management fees, carried interest, and fund duration</td>
              </tr>
              <tr>
                <td>Management &amp; key people</td>
                <td data-label="What it covers">Biographies of founders, fund managers, or directors, including relevant experience and any prior legal or regulatory issues a reasonable investor would want to know about</td>
              </tr>
              <tr>
                <td>Financial information</td>
                <td data-label="What it covers">Historical financials where they exist, clearly-labeled projections where they don&apos;t, and, for a fund, a capitalization table showing ownership before and after the raise</td>
              </tr>
              <tr>
                <td>Subscription documents</td>
                <td data-label="What it covers">Not always bound into the PPM itself, but usually delivered alongside it: the paperwork an investor signs to commit capital, plus an eligibility questionnaire</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>PPM vs Prospectus vs Business Plan vs Pitch Deck</h2>
        <p>
          These documents get confused constantly, and the confusion causes real problems,
          because each one carries different legal weight.
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Document</th><th>Built for</th><th>Legal weight</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Prospectus</td>
                <td data-label="Built for">A public, registered offering, available to any member of the public who wants to buy the security</td>
                <td data-label="Legal weight">Filed with, and typically reviewed by, a securities regulator before the offering can go live</td>
              </tr>
              <tr>
                <td>PPM</td>
                <td data-label="Built for">A private, exempt transaction — same underlying purpose as a prospectus, built for a narrower audience</td>
                <td data-label="Legal weight">Generally not filed for public review in the same way, but still a binding legal disclosure</td>
              </tr>
              <tr>
                <td>Business plan</td>
                <td data-label="Built for">Making the case for the business: the opportunity, the strategy, the team&apos;s ambitions</td>
                <td data-label="Legal weight">Written to persuade, not to disclose — a business plan that never mentions what could go wrong would be disqualifying in a PPM</td>
              </tr>
              <tr>
                <td>Pitch deck</td>
                <td data-label="Built for">Getting a first meeting or a follow-up conversation</td>
                <td data-label="Legal weight">Short, visual, and optimistic by design. Nobody invests off a pitch deck alone</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A PPM borrows some content from a business plan, the business description section, for
          instance, but wraps it in legal disclosure language and, critically, pairs every
          opportunity described with the risks that could prevent it from materializing. The PPM
          (or an equivalent disclosure document) is what actually gets read, negotiated over, and
          signed against once real capital is on the table.
        </p>

        <h2>Who Actually Uses a PPM</h2>
        <p>
          PPMs show up anywhere private securities are being sold to investors, which covers a
          wider range of situations than people expect.
        </p>
        <ul className="constraint-list">
          <li>Fund managers raising a venture capital, private equity, real estate, or hedge fund vehicle use a PPM to disclose the fund&apos;s strategy, fee structure, and risks to limited partners before they commit capital.</li>
          <li>Companies raising private capital, whether an early-stage startup doing a seed round or a more established private company raising growth equity or debt, use a PPM instead of a public prospectus because the raise is exempt from public registration.</li>
          <li>Real estate sponsors syndicating a property acquisition or development project use a PPM to bring in passive investors under the same private-offering logic.</li>
          <li>Search fund sponsors and holding-company acquirers use a PPM-style disclosure when raising acquisition or search capital from a small group of investors — the same underlying logic as a fund raise, applied to a single deal.</li>
        </ul>
        <p>
          Investors, meanwhile, read a PPM as their primary tool for evaluating the deal: what
          they&apos;re actually buying, what they&apos;re exposed to, and what rights they have if
          things go wrong. A sophisticated investor who skips the PPM and relies only on the pitch
          deck or a verbal summary is skipping the one document specifically designed to tell them
          what could go wrong. If you&apos;re on the sourcing side of that raise rather than the
          investor side, our guide to{' '}
          <Link href="/blog/how-to-find-acquisition-capital">
            how to find acquisition capital
          </Link>{' '}
          covers what happens before a PPM is even drafted.
        </p>

        <h2>Who Prepares a PPM, and What It Costs</h2>
        <p>
          A PPM is a legal document, and it&apos;s drafted, or at minimum reviewed closely, by a
          securities attorney familiar with the relevant exemption the offering relies on.
          Founders and fund managers typically supply the business content, the description, the
          use of proceeds, the financials, while counsel drafts or reviews the risk factors and
          the legal and regulatory language, since getting that section wrong carries real
          liability.
        </p>
        <p>
          Cost and timeline vary widely depending on jurisdiction, deal complexity, and whether
          the issuer is using a template as a starting point or building from scratch, but a
          properly prepared PPM is rarely something to shortcut. It&apos;s the document an issuer
          will point to if an investor later claims they weren&apos;t told about a risk that in
          fact was disclosed on page fourteen.
        </p>

        <h2>Common Mistakes</h2>
        <ul className="constraint-list">
          <li><strong>Treating the PPM as a marketing document.</strong> Overly promotional language undermines the credibility of the whole document and can create liability if it overstates the opportunity relative to the risks disclosed.</li>
          <li><strong>Generic, copy-pasted risk factors.</strong> Risk factors that could apply to any company in any industry signal to sophisticated investors, and to regulators, that the disclosure wasn&apos;t taken seriously.</li>
          <li><strong>Vague use of proceeds.</strong> &ldquo;Working capital and general corporate purposes&rdquo; invites questions a specific, itemized breakdown would have avoided.</li>
          <li><strong>Skipping legal review to save time or cost.</strong> A PPM is the primary defense against a claim that investors weren&apos;t properly informed. Cutting corners here shows up later, usually at the worst possible time.</li>
          <li><strong>Assuming one country&apos;s exemption framework applies everywhere.</strong> The categories of eligible investor, the disclosure thresholds, and the filing requirements differ by jurisdiction. An offering that spans multiple countries needs local counsel checking the framework in each one, not a single template stretched across borders.</li>
        </ul>

        <p style={{ fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic' }}>
          This article explains how private placement memoranda generally work. It is not legal
          or investment advice, and it is not a substitute for a securities attorney reviewing any
          specific offering. Requirements vary by jurisdiction and by exemption; confirm the
          applicable framework with local counsel before drafting or relying on one.
        </p>

        <h2>Where to Start</h2>
        <p>
          Before drafting or relying on a PPM, get clear answers to three questions: which
          exemption the offering is actually relying on, and what that exemption requires in this
          specific jurisdiction; whether the risk factors are written for this business and this
          offering, not copied from a template; and whether the use-of-proceeds section is
          specific enough to survive a skeptical investor&apos;s questions. None of those three
          answers depend on how polished the document looks, they depend on the substance
          underneath it, and that&apos;s where a raise actually succeeds or fails scrutiny.
        </p>
        <p>
          Kautilya works on the buy side of acquisition deals, sourcing, valuation, and diligence
          for search fund and holding-company acquirers. If you&apos;re structuring the capital
          side of an acquisition, our guide to{' '}
          <Link href="/blog/how-to-find-acquisition-capital">
            where acquisition capital actually comes from
          </Link>{' '}
          is the natural next read.
        </p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">Is a private placement memorandum legally required?</div>
            <p className="blog-faq-a">It depends on the jurisdiction and the exemption being used. Some private-offering exemptions require formal written disclosure along the lines of a PPM; others don&apos;t mandate a specific document but still expect the issuer to avoid misleading investors, which in practice means preparing something functionally equivalent anyway.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Who can invest through a PPM?</div>
            <p className="blog-faq-a">Typically accredited, sophisticated, or qualified investors, depending on how the relevant jurisdiction defines eligibility for private offerings. These categories are usually based on income, net worth, professional experience, or institutional status.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How long is a typical PPM?</div>
            <p className="blog-faq-a">Anywhere from twenty to over a hundred pages, depending on the complexity of the offering and the depth of the risk factors and financial disclosures required.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Is a PPM the same as a prospectus?</div>
            <p className="blog-faq-a">No. Both disclose an offering to investors, but a prospectus is for a public, registered offering and is typically reviewed by a regulator before use. A PPM is for a private, exempt offering and generally isn&apos;t filed for public review in the same way.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Does a PPM guarantee the investment is safe?</div>
            <p className="blog-faq-a">No. A PPM discloses risk; it doesn&apos;t eliminate it. A long and thorough risk factors section is often a sign of a well-prepared document, not a red flag about the deal itself.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Who writes a PPM?</div>
            <p className="blog-faq-a">Usually a collaboration between the issuer, who supplies the business and financial details, and a securities attorney, who drafts or reviews the legal, regulatory, and risk disclosure language.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>Labelled inference, not data</h3>
          <p>This piece describes the general structure and purpose of a private placement memorandum, and the exemption logic behind private offerings, as commonly practiced across jurisdictions, not as figures from a specific published dataset. Not legal or investment advice, and not a substitute for a securities attorney reviewing any specific offering — exemption categories, disclosure thresholds, and filing requirements vary by jurisdiction.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Structuring the capital side of an acquisition and want the buy-side sourcing,
            valuation, and diligence to match? That&apos;s the work we do end to end.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
