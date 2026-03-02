import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function StoryBorderlessPage() {
  useEffect(() => {
    document.title = 'Kautilya — Borderless: Rewriting the M&A Playbook';

    // Reading progress bar
    const updateProgress = () => {
      const bar = document.getElementById('readingProgress');
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
    };

    // Show/hide share bar
    const toggleShareBar = () => {
      const shareBar = document.getElementById('shareBar');
      const storyStart = document.getElementById('storyStart');
      if (!shareBar || !storyStart) return;
      const startOffset = storyStart.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY > startOffset - 200) {
        shareBar.classList.add('visible');
      } else {
        shareBar.classList.remove('visible');
      }
    };

    const onScroll = () => {
      updateProgress();
      toggleShareBar();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Borderless: Rewriting the M&A Playbook — via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('Borderless: Rewriting the M&A Playbook');
    const body = encodeURIComponent(`Check out this case study: ${window.location.href}`);
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
      {/* READING PROGRESS */}
      <div className="reading-progress" id="readingProgress" />

      {/* SHARE BAR */}
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

      {/* STORY HERO */}
      <div className="story-hero" id="storyStart">
        <Link to="/portfolio" className="back-link">← Portfolio</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Immigration &amp; Global Mobility</span>
          <span className="meta-tag geo">United Kingdom</span>
          <span className="meta-tag stage">Seed → Series A</span>
        </div>
        <h1>Borderless: Rewriting the M&amp;A Playbook for UK Immigration</h1>
        <div className="subtitle">How Kautilya built a proprietary deal pipeline in a market that doesn't do deals.</div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <p>
          Borderless had the kind of problem most seed-stage startups would envy. A $2.5M raise behind them, $2–3M in ARR on
          the books, and a Series A process on the horizon. What they needed wasn't more product. It was more revenue. Fast,
          non-dilutive, and executable before investors came knocking.
        </p>
        <p>
          The math was straightforward. In venture markets, companies at Borderless's stage typically command around 20×
          revenue multiples. If they could add £50K–£250K in annualised cashflow through acquisitions or partnerships, that
          would translate into £1M–£5M in enterprise value — without issuing a single new share.
        </p>
        <p>
          So Borderless came to Kautilya with a clear brief: help us acquire immigration law firms or client books, absorb
          their recurring revenue onto our platform, and enter the Series A process with real growth levers investors can
          underwrite.
        </p>
        <p>Simple enough in theory. In practice, the UK immigration market had other plans.</p>

        <h2>The Market Said No</h2>
        <p>
          Kautilya's initial market work revealed something that a traditional M&amp;A advisor might have taken months to
          discover — or never acknowledged at all.
        </p>
        <p>
          The UK immigration advisory space is deeply relationship-driven, governed by strict regulatory and ethical
          constraints, and culturally resistant to transactional dealmaking. Operators don't sell partial client books. They
          don't respond well to cold acquisition outreach. And they certainly don't hand over their most valuable asset —
          client trust — to a stranger with a term sheet.
        </p>
        <ul className="constraint-list">
          <li>Full firm acquisitions required long diligence cycles, partner approvals, and regulatory reviews</li>
          <li>Partial client-book sales were seen as reputationally risky or outright non-compliant</li>
          <li>Cold outreach for acquisitions consistently underperformed due to trust barriers</li>
        </ul>
        <p>
          A conventional advisor would have either forced the process anyway or walked away from the mandate. Kautilya did
          neither.
        </p>

        <h2>The Reframe</h2>
        <div className="pull-quote">
          <p>
            Borderless didn't actually need to own a business. They needed access to cash-flowing clients. Once that
            distinction was clear, everything changed.
          </p>
        </div>
        <p>
          Instead of asking operators to sell, Kautilya asked a different question: if sellers won't part with their clients
          outright, how else can cashflow be transferred — compliantly, quickly, and with trust intact?
        </p>
        <p>
          Two structures emerged. First, targeted client book transfers where legally and operationally feasible. Second — and
          this became the real unlock — referral-based overflow partnerships, where operators route excess demand to Borderless
          in exchange for downstream economics.
        </p>
        <p>This wasn't standard M&amp;A playbook. But it was structurally aligned with how the market actually works.</p>

        <h2>960 Hours of Market Exhaustion</h2>
        <p>Kautilya doesn't sample markets. It exhausts them.</p>
        <p>
          Over six weeks, the team executed a research-led sourcing operation across the full UK immigration advisory
          landscape. The goal was to map every viable counterparty in Borderless's core segment — B2B Skilled Worker
          sponsor-license providers — and stress-test which deal structures would actually convert.
        </p>
        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">~1,500</div>
            <div className="metric-label">Advisors Mapped</div>
          </div>
          <div className="metric">
            <div className="metric-value">2,600+</div>
            <div className="metric-label">Outreach Touches</div>
          </div>
          <div className="metric">
            <div className="metric-value">960</div>
            <div className="metric-label">Hours Invested</div>
          </div>
        </div>

        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">Weeks 1–2 · Infrastructure</div>
            <p>
              Scraped the GOV.UK Immigration Advisor Register, capturing roughly 1,500 advisors across Levels 1–3. Enriched
              each target with director and company data from Companies House, cross-referenced against ILB and UK law society
              records, and tapped into active communities of immigration advisors on Facebook and WhatsApp. Direct
              conversations with founders, operators, and intermediaries filled in the gaps.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Weeks 2–3 · Outreach at Scale</div>
            <p>
              Approximately 1,500 direct emails. 300 targeted campaigns aimed at advisors nearing retirement or seeking
              partial exits. 600 social outreaches across LinkedIn, Facebook, and WhatsApp. 200–250 direct cold calls.
            </p>
            <p>
              The channel ranking surprised no one who's worked in relationship-driven markets. Cold calls converted best,
              followed by email, then LinkedIn, then referrals. Live dialogue beats passive interest every time.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Weeks 3–4 · Qualification</div>
            <p>
              The funnel produced 43+ serious conversations with operators demonstrating genuine interest, and 8–10 with
              strong strategic alignment to Borderless's B2B sponsor-license focus. B2C-heavy firms were excluded for weaker
              LTV/CAC dynamics. Mixed-service operators filtered out for requiring a different go-to-market motion. Focus
              narrowed to pure B2B providers.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Weeks 5–6 · Structuring</div>
            <p>
              Designed referral agreement frameworks, clarified incentive alignment and payout mechanics, prepared contract
              templates, and negotiated valuations for client book transfers where applicable.
            </p>
          </div>
        </div>

        <h2>What Borderless Walked Away With</h2>
        <p>
          A strategic referral agreement was agreed in principle, with an estimated annual cashflow impact of £70K–£80K. But
          the real deliverable was broader than any single deal.
        </p>
        <p>
          Borderless emerged with a pipeline of 8–10 vetted, negotiation-ready opportunities. Pre-structured client book
          transfer arrangements. A repeatable partnership framework that could scale to £50K–£250K in total annualised
          cashflow. And critically, comprehensive competitive intelligence gathered organically through 1,000–1,500 operator
          conversations.
        </p>
        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">£70–80K</div>
            <div className="metric-label">Annualised Cashflow</div>
          </div>
          <div className="metric">
            <div className="metric-value">8–10</div>
            <div className="metric-label">Pipeline Opportunities</div>
          </div>
          <div className="metric">
            <div className="metric-value">£1–5M</div>
            <div className="metric-label">Potential Valuation Uplift</div>
          </div>
        </div>
        <p>
          The work required approximately 960 hours of effort across sourcing, outreach, structuring, and competitive
          research. To replicate this in-house at even UK minimum wage would have cost Borderless roughly £11,500–£12,000 in
          direct labour alone — and delivering comparable outcomes would realistically require more senior commercial talent,
          pushing the true cost materially higher.
        </p>
        <p>
          At a 20× multiple, the revenue pathway Kautilya built represents £1M–£5M in potential Series A valuation uplift. No
          new shares issued. No dilution. Just a faster, safer, more capital-efficient path to growth.
        </p>

        <h2>Why This Story Matters</h2>
        <p>
          Most M&amp;A advisors would have forced a slow, expensive acquisition process. Or blamed the market for being too
          difficult. Or walked away when traditional approaches failed.
        </p>
        <p>
          Kautilya did something different. We accepted the market's constraints and designed around them. We reframed the
          problem. We built structures that didn't exist before: client book transfers without full firm acquisitions,
          referral-based overflow partnerships with downstream revenue share, trust-first negotiation approaches for a market
          that runs on relationships.
        </p>
        <p>
          Borderless didn't just avoid a suboptimal acquisition. They emerged with a scalable, repeatable model for
          non-dilutive growth — and the market intelligence to deploy it with confidence.
        </p>
        <div className="story-coda">
          <div className="coda-text">
            When traditional M&amp;A breaks down, we build new ways to move value.
          </div>
        </div>
      </article>
    </>
  );
}
