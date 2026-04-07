"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';
import ShimmerImage from '@/components/ShimmerImage';

export default function StorySearchFunds() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('The Rise of Search Funds , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('The Rise of Search Funds');
    const body = encodeURIComponent(`Check out this story: ${window.location.href}`);
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
      <div className="reading-progress" id="readingProgress" />

      <div className="share-bar" id="shareBar">
        <button className="share-btn" onClick={shareTwitter} aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="tooltip">Twitter / X</span>
        </button>
        <button className="share-btn" onClick={shareLinkedIn} aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="tooltip">LinkedIn</span>
        </button>
        <button className="share-btn" onClick={(e) => copyLink(e.currentTarget)} aria-label="Copy link">
          <svg viewBox="0 0 24 24">
            <path
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="tooltip">Copy link</span>
        </button>
        <button className="share-btn" onClick={shareEmail} aria-label="Share via email">
          <svg viewBox="0 0 24 24">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="tooltip">Email</span>
        </button>
      </div>

      <div className="story-hero" id="storyStart">
        <Link href="/stories" className="back-link">&larr; Stories</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Search Funds</span>
          <span className="meta-tag geo">Global</span>
          <span className="meta-tag stage">Search Funds &middot; Nov 2025</span>
        </div>
        <h1>The Rise of Search Funds</h1>
        <div className="subtitle">
          How a niche investment model is redefining entrepreneurship through acquisition — globally.
        </div>
        <div className="story-date">November 6, 2025</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">

        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14, borderLeft: '2px solid var(--border)', paddingLeft: 16 }}>
          From the PF team: This is our first attempt at curating various studies and literature on search funds.
          We&rsquo;d love to receive feedback and answer any questions &mdash; just hit reply on this email.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/evol_of_search_fund.png" alt="Evolution of the Search Fund Model 1984–2024: cumulative funds launched, IRR, and ROI from Jim Southern's first fund to 81% solo funds today" width={1200} height={675} />
        </figure>

        <h2>Introduction</h2>
        <p>
          The search fund model was born in the early 1980s at Stanford GSB, designed as a vehicle
          for capable but inexperienced MBA graduates to become CEOs. One of the first deals under
          this model was Jim Southern raising a fund in 1984 and acquiring Uniform Printing &mdash;
          validating the model&rsquo;s potential and launching what is now recognized as the first
          search fund, Nova Capital.
        </p>
        <p>
          What began as a niche experiment has evolved into a distinct asset class and career path.
          Evolution has brought variations: institutional &ldquo;core&rdquo; searches, self-funded
          searches, and hybrid approaches emerging across continents. Each version represents a
          different balance of risk, ownership, and support.
        </p>
        <p>
          Here, we trace that evolution &mdash; from the early days of search capital to the current
          wave of independent operators reshaping the lower middle market. For searchers,
          understanding this evolution isn&rsquo;t historical trivia. It&rsquo;s strategic context.
          The rules of the game are changing, and knowing how they changed is the first step in
          playing it well.
        </p>

        <div className="pull-quote">
          <p>
            <span style={{ color: 'var(--gold)' }}>37%</span> fail to find any deal.{' '}
            <span style={{ color: 'var(--gold)' }}>63%</span> of letters of intent fail after
            signature. The median search takes{' '}
            <span style={{ color: 'var(--gold)' }}>20 months</span>. This is not a shortcut &mdash;
            it is a discipline.
          </p>
        </div>

        <h2>The Searcher: Profile, Pressure, and Performance</h2>

        <h3 style={{ color: 'var(--gold)' }}>Who Are the Searchers?</h3>
        <p>
          The data on searcher demographics &mdash; median age 31&ndash;32, typically with an MBA
          and a background in finance or consulting &mdash; paints a clear picture of the r&eacute;sum&eacute;.
          The intangible qualities that correlate with success are often more telling.
        </p>
        <p>
          Studies and investor feedback consistently point to three key traits. The first is
          <strong> perseverance</strong> &mdash; the search is a long, tiring, and emotionally
          stressful numbers game filled with rejection. The second is a specific kind of
          <strong> humility</strong>: successful searchers demonstrate a willingness to seek, and
          heed, criticism. Given that most are first-time CEOs, this ability to listen is critical.
          Finally, searchers need a high degree of <strong>flexibility</strong> and an aptitude for
          decision-making to navigate constant trade-offs and uncertainty.
        </p>
        <p>
          The single biggest non-obvious mistake is often psychological. The search has a binary,
          highly emotional outcome, and the clock is always ticking. As a searcher runs out of time,
          he or she may feel pressured into a questionable deal &mdash; simply out of time pressure.
          Veterans flag this as the primary way good searchers close bad acquisitions.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>Solo vs. Partnered?</h3>
        <p>
          The data presents a paradox. Partnered searches historically achieve{' '}
          <strong>40.5% IRR</strong> versus <strong>30.3%</strong> for solo searches &mdash; likely
          because a second view leads to better decisions. Yet{' '}
          <strong>81% of new funds in 2022&ndash;2023 were solo</strong>.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/solo_vs_partnered.png" alt="Solo vs Partnered Searchers: IRR & Equity Retention — partnered 40.5% IRR / 25–30% equity, solo 30.3% IRR / 20–25% equity" width={1200} height={675} />
        </figure>

        <p>
          The decision is deeply personal. A solo searcher typically retains a 20&ndash;25% equity
          stake, whereas partners must share a combined 25&ndash;30%. Five of the six searchers
          achieving 10x+ ROI recently were solo operators &mdash; suggesting they are betting on
          variance over average returns.
        </p>
        <p>
          In 1995, Kevin Taweel and Jim Ellis launched a partnered search and acquired Road Rescue,
          a Houston-based dispatch service, for approximately $8 million. They pivoted the company
          into the nascent market for cell phone insurance, renaming it Asurion. The result: the most
          successful search acquisition to date, valued at over a billion dollars. Other partnered
          funds, such as Headland Partners (D. Sellers and B. Godsey), have also generated outsized
          returns &mdash; exiting their acquisition at an 11x investor return.
        </p>
        <p>
          So why do so many searchers go solo? The 81% that go solo are making a rational bet on
          variance over the mean &mdash; accepting a lower probability of success in exchange for a
          100% claim on the entire prize.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>International vs. North America: Explaining the Gap</h3>
        <p>
          There is a striking difference in international acquisition success rates (79% vs. 63% in
          the US/Canada). The primary hypothesis is market maturity. International markets are
          younger, with the model expanding to many countries only after 2003 &mdash; suggesting a
          larger, less-picked-over supply of available businesses with less competition.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/industry_focus_shift.png" alt="Industry focus shift in search fund acquisitions: tech-enabled services, healthcare services, and business services leading" width={1200} height={675} />
        </figure>

        <p>
          The 2019 acquisition of OKM detectors in Germany illustrates this. Stephan Grund, a
          business-school graduate and former strategy consultant, launched a search in Germany and
          successfully acquired OKM, a leading SME manufacturing metal detectors. Between 2018 and
          2022, Germany had over half a million SMEs seeking successors, and Finland had over 78,000
          owners set to retire &mdash; markets wide open for prepared searchers.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>1984</div>
            <div className="metric-label">First Search Fund Deal</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>20 mo</div>
            <div className="metric-label">Median Search Duration</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>40.5%</div>
            <div className="metric-label">Partnered Search IRR</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$14.4M</div>
            <div className="metric-label">Median Core Purchase Price</div>
          </div>
        </div>

        <h2>The Target: Sourcing, Selection, and Valuation</h2>

        <h3 style={{ color: 'var(--gold)' }}>What a &ldquo;Good Horse&rdquo; Looks Like</h3>
        <p>
          The definition of a &ldquo;good horse&rdquo; remains remarkably consistent. The criteria
          from the seminal 2014 IESE report &mdash; a history of profitability, high recurring
          revenue, low CapEx requirements, and operating in a growing, fragmented industry &mdash;
          are still the ideal. These criteria are aimed at reducing risk for a first-time CEO.
        </p>

        <p>
          The rise of software and tech-enabled services has not changed this definition; rather,
          these industries often fit the criteria perfectly, which explains their popularity. Recent
          data from the 2024 Stanford study indicates a slight moderation in pure software, with
          continued strong focus on tech-enabled services, healthcare services, and other business
          services.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>Explaining the Multiple Gap</h3>
        <p>
          The core model targets larger deals with a median purchase price of{' '}
          <strong>$14.4 million at 7.0x EBITDA</strong>, operating in a more competitive deal
          environment where private equity firms and strategic buyers drive prices higher.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/explaining_multiple_gap.png" alt="Explaining the multiple gap: core search fund vs self-funded median purchase prices and EBITDA multiples" width={1200} height={675} />
        </figure>

        <p>
          The self-funded model, by contrast, targets the micro-cap segment &mdash; typically
          companies with $500K to $2M in EBITDA. This market is generally too small for traditional
          PE, creating a less competitive environment where <strong>3.0x&ndash;5.0x multiples</strong>{' '}
          are the norm.
        </p>
        <p>
          Chenmark Capital, founded by Trish and James Higgins, is a premier real-world example.
          Chenmark acquires small, non-glamorous, cash-flowing travel businesses &mdash; seasonal
          operations too small for institutional PE that fit perfectly within the self-funded target
          range. These are precisely the types of businesses (home services, commercial maintenance)
          that trade at 3x&ndash;5x multiples.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>How Are Searchers Sourcing Their Deals?</h3>
        <p>
          Proprietary sourcing is often the make-or-break factor. The 2024 IESE study identifies
          &ldquo;Proprietary Exploration&rdquo; as the most common deal sourcing approach, used by{' '}
          <strong>64% of searchers</strong>. Its importance lies in finding businesses not actively
          for sale &mdash; less competitive bidding, lower prices.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/how_search_source_deal.png" alt="How searchers source deals: proprietary exploration used by 64% of searchers, trade shows, River Guides, and intermediaries" width={1200} height={675} />
        </figure>

        <p>
          Advanced proprietary methods include conducting deep industry research, attending trade
          shows to gain credibility, and engaging &ldquo;River Guides&rdquo; &mdash; typically
          retired industry CEOs or trade association presidents compensated to provide warm
          introductions to potential sellers. A highly effective way to establish credibility before
          any conversation begins.
        </p>

        <h2>The Deal: Due Diligence, Negotiation, and Failure</h2>

        <h3 style={{ color: 'var(--gold)' }}>Why Do Deals Fail Post-LOI?</h3>
        <p>
          The period between signing an LOI and closing is arguably the most critical. The 2024 IESE
          study identifies the top reasons: problems discovered during due diligence (<strong>63%</strong>)
          and valuation issues (<strong>48%</strong>). These two findings are directly linked &mdash;
          they describe the most common and predictable crisis point in any deal.
        </p>
        <p>
          A searcher signs an LOI based on a seller&rsquo;s represented $1.5M EBITDA. The
          commissioned QoE report returns an adjusted EBITDA of $1.1M. The tactical playbook: do not
          view this as a failure &mdash; view it as the process working correctly. Frame the QoE as
          objective third-party validation that both sides need. The conversation is then
          straightforward: the initial offer was based on $1.5M in earnings; the verified number of
          $1.1M requires a proportional adjustment. It needs to be a renegotiation, not an
          accusation.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/why_deals_fail_post_loi.png" alt="Why deals fail post-LOI: 63% due diligence problems, 48% valuation issues, 38% seller retraction" width={1200} height={675} />
        </figure>

        <h3 style={{ color: 'var(--gold)' }}>How to Handle Seller Considerations</h3>
        <p>
          Seller retraction accounts for <strong>38%</strong> of post-LOI failures. This statistic
          proves that a searcher is acquiring a business from a <em>person</em>, not just a set of
          financials. For many owners, this is an emotional process of selling not just the business,
          but their life&rsquo;s work &mdash; decades of effort and identity. If the seller does not
          believe you can genuinely take their business forward, no offer will close the deal.
        </p>
        <p>
          From the first meeting, work to understand the seller&rsquo;s true motivations. Are they
          genuinely ready for retirement? Solving for legacy outcomes? A seller who is just
          &ldquo;seeing what offers they get&rdquo; is a significant waste of time and energy.
          Building trust and maintaining open, constructive communication is the only way to keep a
          seller committed through a long, difficult acquisition process.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>When to Walk Away</h3>
        <ul className="constraint-list">
          <li><strong>Turnaround situations</strong> &mdash; searchers need stable, profitable companies, not broken ones</li>
          <li><strong>High customer concentration</strong> &mdash; one customer accounting for over 30% of sales</li>
          <li><strong>High churn or volatile earnings</strong> with no forward visibility</li>
          <li><strong>Seller lacks transparency or obstructs diligence</strong> &mdash; the biggest red flag of all, indicating a critical lack of trust and likely a fatal, unfixable flaw</li>
        </ul>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/when_2walk_away.png" alt="When to walk away: turnaround situations, high customer concentration, high churn, seller obstructs diligence" width={1200} height={675} />
        </figure>

        <h2>The Exit and Final Reflections</h2>
        <p>
          The 2024 Stanford data shows a barbell distribution. <strong>11%</strong> of acquisitions
          achieve a grand-slam greater than 10x ROI, while <strong>31%</strong> result in losses.
          Quality of asset is what separates them. Losses are almost always linked to acquiring
          turnaround situations, businesses with high customer concentration, or those in volatile,
          unpredictable industries.
        </p>

        <figure className="story-img">
          <ShimmerImage src="/images/stories/search-fund/exit_final_reflections.png" alt="Distribution of ROI Outcomes (Stanford 2024): 31% loss, 27% 1–2x, 36% 2–5x, 25% 5–10x, 11% achieve 10x+ ROI" width={1200} height={675} />
        </figure>

        <p>
          The choice between core and self-funded is a direct and personal trade-off between risk
          and reward. The core model offers a median exited payout of{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$2.25M</span></strong> with significantly
          lower personal risk &mdash; the searcher receives a salary during the search and investors
          bear the financial risk of failure.
        </p>
        <p>
          The self-funded path is a high-risk, high-reward bet on oneself. The searcher forgoes a
          salary and puts themselves at risk of personal bankruptcy. The explicit return for taking
          on this risk is retaining a substantial majority &mdash; usually{' '}
          <strong>60%+</strong> of the equity.
        </p>
        <p>
          The best advice is to make this deeply personal choice based on an honest assessment of
          your financial cushion and psychological tolerance for high-stakes, personal liability.
        </p>

        <h2>Bibliography</h2>
        <ol style={{ paddingLeft: 20, color: 'var(--text-muted)', fontSize: 13, lineHeight: 2 }}>
          <li>Benjamin, Elad, et al. <em>Search Fund Primer.</em> Stanford GSB, May 2021.</li>
          <li>Harvard Business Review. <em>How Search Funds Are Redefining Entrepreneurship.</em> HBR, 2019.</li>
          <li>Hurst, A., &amp; Pickenpack, L. <em>Foundational Guide to Self-Funded Search Funds.</em> Searchfunder.com, 2021.</li>
          <li>Kowalewski, Ann-Sophie, et al. <em>International Search Fund Study 2024.</em> IESE Business School, Sept. 2024.</li>
          <li>Kolarova, Lenka, et al. <em>IESE Search Fund Study 2022.</em> IESE Business School, Oct. 2022.</li>
          <li>Leung, Yannie, and Christina Stiles. <em>Entrepreneurship through Acquisition &ndash; A Scoping Review.</em> Harvard Business School, 2022.</li>
          <li>Ruback, Richard S., and Royce Yudkoff. <em>Search Funds &mdash; What Has Made Them Work?</em> IESE Business School, 2016.</li>
          <li>Stanford Graduate School of Business. <em>2024 Search Fund Study: Selected Observations.</em> Center for Entrepreneurial Studies, 2024.</li>
        </ol>

        <div className="story-coda">
          <div className="coda-text">
            The search fund model proves that you do not need to build from zero to become a CEO. You need to find the right business and have the discipline to close.
          </div>
        </div>
      </article>
    </>
  );
}
