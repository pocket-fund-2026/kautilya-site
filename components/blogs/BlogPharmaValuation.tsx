'use client';

import Link from 'next/link';

export default function BlogPharmaValuation() {
  return (
    <article className="blog-post">
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-post {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px 120px;
          font-family: var(--font-lora), 'Lora', serif;
          color: var(--text-primary);
        }

        /* Title block */
        .blog-post-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 52px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: 0.5px;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        .blog-post-subtitle {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 24px;
          font-style: italic;
          font-weight: 400;
          color: var(--gold);
          margin-bottom: 40px;
          line-height: 1.4;
        }
        .blog-post-rule {
          width: 100%;
          height: 1px;
          background: rgba(201,185,154,0.18);
          margin-bottom: 48px;
        }

        /* Lede */
        .blog-post-lede {
          font-size: 18px;
          line-height: 1.9;
          color: var(--text-primary);
          margin-bottom: 48px;
          font-weight: 400;
        }

        /* Section */
        .blog-post h2 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 34px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.5px;
          line-height: 1.25;
          margin: 64px 0 24px;
        }
        .blog-post h3 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 24px;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.3px;
          line-height: 1.3;
          margin: 40px 0 16px;
        }
        .blog-post p {
          font-size: 16px;
          line-height: 1.95;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        /* Stat callout */
        .blog-stat-callout {
          border-left: 2px solid var(--gold);
          padding: 28px 32px;
          margin: 40px 0;
          background: rgba(201,185,154,0.04);
          border-radius: 0 4px 4px 0;
        }
        .blog-stat-callout p {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 22px;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.65;
          margin: 0;
        }

        /* Section separator */
        .blog-section-sep {
          width: 48px;
          height: 1px;
          background: rgba(201,185,154,0.3);
          margin: 56px 0;
        }

        /* Checklist */
        .blog-checklist {
          list-style: none;
          padding: 0;
          margin: 20px 0 32px;
        }
        .blog-checklist li {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.85;
          padding: 10px 0 10px 24px;
          position: relative;
          border-bottom: 1px solid rgba(201,185,154,0.08);
        }
        .blog-checklist li:last-child { border-bottom: none; }
        .blog-checklist li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-size: 13px;
        }

        /* Sub-checklist groups */
        .blog-check-group {
          margin: 32px 0;
        }
        .blog-check-group-label {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
          display: block;
        }

        /* FAQ */
        .blog-faq {
          margin-top: 72px;
        }
        .blog-faq-eyebrow {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 20px;
        }
        .blog-faq h2 {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 34px;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0 0 40px;
        }
        .blog-faq-item {
          border-top: 1px solid rgba(201,185,154,0.12);
          padding: 28px 0;
        }
        .blog-faq-item:last-child { border-bottom: 1px solid rgba(201,185,154,0.12); }
        .blog-faq-q {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 21px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 14px;
        }
        .blog-faq-a {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.9;
          margin: 0;
        }

        /* CTA */
        .blog-cta {
          margin-top: 80px;
          border: 1px solid rgba(201,185,154,0.2);
          border-radius: 4px;
          padding: 48px 52px;
          background: rgba(201,185,154,0.03);
          text-align: center;
        }
        .blog-cta-eyebrow {
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 20px;
        }
        .blog-cta-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 32px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 16px;
        }
        .blog-cta-body {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.85;
          max-width: 520px;
          margin: 0 auto 36px;
        }
        .blog-cta-btn {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--canvas);
          background: var(--gold);
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .blog-cta-btn:hover { opacity: 0.88; }

        /* Mobile */
        @media (max-width: 768px) {
          .blog-post { padding: 0 20px 80px; }
          .blog-post-title { font-size: 34px; }
          .blog-post-subtitle { font-size: 18px; }
          .blog-post h2 { font-size: 26px; margin-top: 48px; }
          .blog-post h3 { font-size: 20px; }
          .blog-post-lede { font-size: 16px; }
          .blog-stat-callout { padding: 20px 22px; }
          .blog-stat-callout p { font-size: 18px; }
          .blog-cta { padding: 36px 24px; }
          .blog-cta-title { font-size: 26px; }
        }
        @media (max-width: 480px) {
          .blog-post-title { font-size: 28px; }
          .blog-post h2 { font-size: 22px; }
        }
      `}} />

      {/* Title */}
      <h1 className="blog-post-title">
        How to Value a Founder-Owned Pharma Business in India
      </h1>
      <div className="blog-post-subtitle">
        What the Torrent-JB Chemicals Deal Actually Tells You
      </div>
      <div className="blog-post-rule" />

      {/* Lede */}
      <p className="blog-post-lede">
        If you run a pharma business in India and you have not read the Torrent-JB Chemicals deal
        announcement carefully, you should. Not because it is a pharma story. Because it is the
        clearest public data point we have had in years on what your business is actually worth,
        and what it would be worth if you spent five years preparing it properly before a sale.
      </p>

      <p>
        Torrent Pharmaceuticals paid 24.8x EBITDA for JB Chemicals in June 2025. The deal was
        valued at Rs. 25,689 Cr including the mandatory open offer. KKR had bought the same
        business in 2020 for roughly Rs. 3,100 Cr. Five years. Eight times the entry price. No
        new drugs invented. No new markets entered. No company rebuilt from scratch.
      </p>
      <p>
        Most coverage treated this as a pharma consolidation story. It is actually a business
        preparation story, and the gap it reveals between what founder-owned pharma businesses
        sell for today and what they could sell for with the right preparation is the most
        important number in Indian mid-market M&A right now.
      </p>

      <div className="blog-section-sep" />

      {/* Section 1 */}
      <h2>What Pharma Business Valuation in India Actually Looks Like</h2>
      <p>
        The current market prices founder-owned pharma businesses in the Rs. 50 to 500 Cr
        revenue range at 6 to 8x EBITDA. PE-backed assets with institutional governance,
        professional management, and documented operations trade at 18 to 24x. That is not a
        sector difference. Both pools sit in the same therapeutic categories, the same
        geographies, the same regulatory environment.
      </p>
      <p>
        The difference is diligence-readiness. What a buyer finds when they open the data room
        determines where in that range your business prices. A promoter-owned business where the
        P&L carries personal expenses, where customer concentration is undocumented, where the
        MD is the only relationship the company has with its top three distributors: that business
        prices at the bottom of the range, if it closes at all.
      </p>

      <div className="blog-stat-callout">
        <p>
          JB Chemicals under the Mody family: Rs. 2,800 Cr revenue, EBITDA margins of 15–18%,
          9% revenue CAGR. Under KKR: 18% revenue CAGR, EBITDA margins of 27–29%, Rs. 7–7.5
          billion in annual free cash flow. Same assets. Different preparation. Three times the
          multiple.
        </p>
      </div>

      <div className="blog-section-sep" />

      {/* Section 2 */}
      <h2>Five Decisions That Created Rs. 22,000 Crore of Exit Value</h2>
      <p>
        KKR did not run a complicated playbook. They made five decisions over five years, each
        replicable at a fraction of the scale by any founder thinking about exit in the next
        five to seven years.
      </p>

      <h3>1. Separate ownership from management on day one</h3>
      <p>
        Within weeks of closing the 2020 acquisition, KKR appointed Nikhil Chopra as CEO: a
        24-year Cipla veteran who had run Cipla&apos;s India Business, a Rs. 6,000 Cr domestic
        franchise. The Mody family exited operations immediately and cleanly.
      </p>
      <p>
        This is the decision most promoter-owned businesses refuse to make. The argument is
        usually that the promoter knows the business better than any professional hire. That may
        be true. It is also irrelevant to an acquirer, who will not pay 20x for a business that
        stops working when the promoter steps back.
      </p>

      <h3>2. Run a consistent bolt-on acquisition strategy</h3>
      <p>
        KKR completed five bolt-on acquisitions in four years: Sanzyme&apos;s probiotic
        portfolio including Sporlac (Rs. 628 Cr), Azmarda from Novartis (a patented
        sacubitril-valsartan cardiac franchise), Razel, and the Novartis ophthalmology book.
        Each acquisition entered a high-growth therapy area and received the same operating
        playbook. Sporlac grew 34% post-acquisition. Razel grew 33%. JB Chemicals moved from
        28th to 21st in the Indian pharma market.
      </p>
      <p>
        The lesson is not that you need to make five acquisitions. It is that a consistent,
        documented operating playbook applied to every asset you add converts a collection of
        businesses into a platform. Platforms command platform multiples.
      </p>

      <h3>3. Fund the capability the promoter had been ignoring</h3>
      <p>
        Contract manufacturing contributed roughly 11% of JB Chemicals&apos; revenue when KKR
        arrived: a medicated lozenges business with genuine global potential that had never
        received serious capital under family ownership. KKR funded it. By FY25, that CDMO arm
        was generating Rs. 446 Cr annually with global leadership in the USD 4.6 billion
        medicated lozenges segment.
      </p>
      <p>
        Every founder-owned pharma business has a version of this: a geography, a product
        vertical, a service capability that exists but has never been resourced properly.
        Identifying and funding that capability in the three to five years before an exit is
        often the single highest-return investment available.
      </p>

      <div className="blog-stat-callout">
        <p>
          When Torrent&apos;s executive chairman described the CDMO platform as &ldquo;a new
          long-term avenue of growth&rdquo; at the deal announcement, that was not a compliment
          to the seller. It was an acquirer explaining why it paid the price it paid.
        </p>
      </div>

      <h3>4. Improve the economics without changing the business</h3>
      <p>
        EBITDA margins nearly doubled: from 15 to 18% to a guided 27 to 29%. Not through price
        increases. Through supply chain optimisation, product mix improvement, and cost
        discipline applied systematically over five years. PAT CAGR reached 20.5% over FY20 to
        FY24. The business funded four acquisitions and stayed nearly debt-free while generating
        Rs. 7 to 7.5 billion in annual free cash flow.
      </p>
      <p>
        The promoter version of this work is less glamorous but equally impactful: remove
        personal expenses from the P&L, document your cost structure, identify the product lines
        that carry the margins and the ones that dilute them. Buyers pay for EBITDA. Cleaning
        what counts as EBITDA is not financial engineering: it is accurate representation.
      </p>

      <h3>5. Build governance so any buyer can understand the business quickly</h3>
      <p>
        The family promoter structure was replaced with an institutional board. Independent
        directors with credentialed backgrounds were installed. The audit trail was rebuilt to
        institutional diligence standards. When Torrent arrived at the data room, there were no
        structural surprises.
      </p>
      <p>
        In Indian mid-market pharma, that is rarer than it sounds. Diligence on most
        promoter-owned businesses surfaces something that forces a price renegotiation or kills
        the deal entirely: an undisclosed liability, an informal distributor relationship that
        cannot be transferred, a key customer contract that names the promoter personally.
        Governance that eliminates those surprises before diligence begins is what separates an
        asset that prices at 24x from one that stalls at 14x and dies.
      </p>

      <div className="blog-section-sep" />

      {/* Section 3 */}
      <h2>Why the Next 24 Months Are an Unusual Window for Indian Pharma Sellers</h2>
      <p>
        Three forces are converging in 2025 and 2026 that make this a genuinely unusual window
        for founder-owned pharma businesses in India.
      </p>

      <h3>1. Schedule M compliance pressure is live</h3>
      <p>
        Revised Schedule M became binding on January 1, 2026. Tier 3 manufacturers who cannot
        fund the upgrades are approaching advisors now: not distressed, but unable to wait out
        another market cycle. Sellers who move in this window will price as motivated sellers.
        Those who wait until the compliance gap forces their hand will price as distressed ones.
      </p>

      <h3>2. PE capital is actively deployed</h3>
      <p>
        ChrysCapital&apos;s Rs. 1,300 Cr acquisition of 71% of Novartis India in Q1 2026
        confirmed that institutional buyers are not on the sidelines. The Torrent-JB deal sets
        the ceiling multiple. ChrysCapital-Novartis sets the template for PE re-entry at the
        mid-market tier.
      </p>

      <h3>3. Succession pressure is real</h3>
      <p>
        Second-generation promoter families across the Rs. 50 to 300 Cr pharma segment are
        facing a question the first generation never had to answer: does this business need to
        stay in the family? The answer is increasingly no, and the conversations that result
        tend to close privately, before any formal auction process begins.
      </p>

      <div className="blog-section-sep" />

      {/* Section 4 */}
      <h2>What a Valuation-Ready Pharma Business Looks Like Before a Sale</h2>
      <p>
        The preparation that separates a 6x exit from an 18x exit is not capital-intensive.
        Most of it is decisions, not investment.
      </p>

      <div className="blog-check-group">
        <span className="blog-check-group-label">Governance</span>
        <ul className="blog-checklist">
          <li>At least one credentialed independent director on the board before any formal process begins</li>
          <li>Clean separation between company expenses and promoter personal expenses in the P&L</li>
          <li>All key customer and distributor relationships documented and transferable</li>
          <li>Regulatory compliance current and auditable: GMP, Schedule M, GST/ITR/EPF/ESI</li>
        </ul>
      </div>

      <div className="blog-check-group">
        <span className="blog-check-group-label">Management</span>
        <ul className="blog-checklist">
          <li>A second layer of management that can run the business without the promoter for 90 days</li>
          <li>Key person dependency documented and mitigated where possible</li>
          <li>Succession plan for any role where departure would affect revenue</li>
        </ul>
      </div>

      <div className="blog-check-group">
        <span className="blog-check-group-label">Financial Documentation</span>
        <ul className="blog-checklist">
          <li>Three years of audited financials with no unexplained adjustments</li>
          <li>EBITDA reconciliation a buyer&apos;s CFO can verify without help from the promoter</li>
          <li>Customer concentration quantified: top five customers as a percentage of revenue, contract terms, renewal history</li>
        </ul>
      </div>

      <div className="blog-check-group">
        <span className="blog-check-group-label">Strategic Narrative</span>
        <ul className="blog-checklist">
          <li>One identified dormant capability with a documented investment thesis and projected returns</li>
          <li>Clear answer to: why would a strategic buyer pay more for this business than a financial buyer?</li>
        </ul>
      </div>

      <p>
        None of this requires hiring an investment bank today. It requires 12 to 24 months of
        deliberate preparation and an honest assessment of where your business currently sits on
        each dimension. The promoters who do that work now will price at the top of the range
        the Torrent-JB deal has just established. Those who do not will price at the floor,
        or not at all.
      </p>

      <div className="blog-section-sep" />

      {/* Section 5 */}
      <h2>The Risks This Deal Creates</h2>
      <p>
        The Torrent-JB deal will cause some buyers to overpay for pharma assets on the
        assumption that every founder-owned business contains hidden upside of the same type.
        It does not. The CDMO vertical at JB Chemicals was genuinely underinvested: a specific
        set of conditions that does not exist in every mid-market acquisition. Buying a business
        at 18x on the assumption that a dormant capability exists when it does not is an
        expensive lesson.
      </p>
      <p>
        For sellers, the risk is timing. The Schedule M compliance window and the current PE
        deployment cycle are creating motivated but non-distressed seller conditions. Those
        conditions will not persist indefinitely. A founder who treats this as a signal to begin
        preparation is thinking correctly. One who waits until distress forces the decision will
        find the window has closed.
      </p>

      {/* FAQ */}
      <div className="blog-faq">
        <span className="blog-faq-eyebrow">Frequently Asked Questions</span>
        <h2>Pharma Business Valuation in India</h2>

        <div className="blog-faq-item">
          <div className="blog-faq-q">What EBITDA multiple do pharma businesses sell for in India?</div>
          <p className="blog-faq-a">
            Founder-owned pharma businesses in the Rs. 50 to 500 Cr revenue range typically
            sell at 6 to 8x EBITDA. PE-backed assets with institutional governance and
            professional management trade at 18 to 24x. The Torrent-JB Chemicals deal at 24.8x
            represents the current ceiling for institutionally prepared assets in Indian
            mid-market pharma.
          </p>
        </div>

        <div className="blog-faq-item">
          <div className="blog-faq-q">How long does it take to prepare a pharma business for sale in India?</div>
          <p className="blog-faq-a">
            Meaningful preparation typically requires 18 to 36 months. The highest-priority
            work: installing a professional management layer, cleaning the P&L of personal
            expenses, documenting customer relationships, resolving governance gaps, and
            identifying and beginning to fund any dormant capability. Businesses that begin
            preparation 24 months before an intended sale will have significantly more options
            at exit.
          </p>
        </div>

        <div className="blog-faq-item">
          <div className="blog-faq-q">What did KKR do to increase JB Chemicals&apos; value before selling to Torrent?</div>
          <p className="blog-faq-a">
            KKR made five moves over five years: appointed a professional CEO, ran a consistent
            bolt-on acquisition strategy across five targets using the same operating playbook,
            funded a dormant CDMO capability in medicated lozenges that grew to Rs. 446 Cr in
            revenue, improved EBITDA margins from 15–18% to a guided 27–29% through operational
            discipline, and rebuilt governance to institutional standards so diligence produced
            no structural surprises. The combined effect was a Rs. 22,000 Cr increase in exit
            value.
          </p>
        </div>

        <div className="blog-faq-item">
          <div className="blog-faq-q">What is the difference between a motivated seller and a distressed seller in Indian pharma M&A?</div>
          <p className="blog-faq-a">
            A motivated seller approaches the market by choice, with time and options. A
            distressed seller approaches because an external pressure — such as a compliance
            deadline or succession crisis — has removed optionality. Motivated sellers price at
            the top of the range. Distressed sellers price at the bottom, because buyers
            discount for urgency and the institutional uncertainty that typically accompanies
            distress. The current Schedule M compliance window is creating motivated sellers;
            founders who wait until the gap becomes acute risk crossing into distressed
            territory.
          </p>
        </div>

        <div className="blog-faq-item">
          <div className="blog-faq-q">Do I need an investment bank to sell a pharma business in India?</div>
          <p className="blog-faq-a">
            For businesses in the Rs. 50 to 300 Cr range, a boutique M&A advisory firm with
            demonstrated experience in Indian mid-market pharma will typically be more effective
            than a large investment bank, which tends to focus on transactions above Rs. 500 Cr.
            The advisor&apos;s most important work happens in the 18 to 24 months before any
            sale process, not during it.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="blog-cta">
        <span className="blog-cta-eyebrow">Talk to Kautilya</span>
        <div className="blog-cta-title">
          Thinking about an exit in the next two to five years?
        </div>
        <p className="blog-cta-body">
          Kautilya sources and advises on off-market, founder-led business acquisitions across
          India. If you are a promoter in pharma or an adjacent sector, the right time to talk
          is before you engage a bank.
        </p>
        <Link href="/engage" className="blog-cta-btn">Begin the Conversation</Link>
      </div>
    </article>
  );
}
