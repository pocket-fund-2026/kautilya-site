"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryBorderless() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('How to source off-market business deals without a broker , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('How to Source Off-Market Business Deals Without a Broker');
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
        <Link href="/portfolio" className="back-link">← Portfolio</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Immigration & Global Mobility</span>
          <span className="meta-tag geo">United Kingdom</span>
          <span className="meta-tag stage">Seed → Series A</span>
        </div>
        <h1>How to Source Off-Market Business Deals Without a Broker</h1>
        <div className="subtitle">
          How Kautilya built a client a pipeline worth £70&ndash;80K a year in a UK immigration market with no
          listings and no brokers.
        </div>
        <div className="hero-line" />
      </div>

      {/* STORY BODY */}
      <article className="story-body" id="storyBody">
        <div className="last-updated">Last updated: August 14, 2026</div>

        <div className="short-answer">
          <div className="short-answer-label">The Short Answer</div>
          <p>
            Build proprietary deal flow instead of waiting for listings. Map the entire universe of targets from
            public registers, rank outreach channels by live conversion (in relationship-driven markets, cold calls
            usually win), and when owners won&rsquo;t sell outright, test structures that transfer cash flow
            another way. Below is how that works, and how Kautilya built a client a pipeline worth £70&ndash;80K a
            year in a market with no listings.
          </p>
        </div>

        <p>
          Most sourcing advice assumes the target will eventually sell, and that the job is just finding them
          first. But some markets are regulated, relationship-driven and culturally resistant to selling at all,
          and there the standard broker-and-listing playbook returns nothing. The real skill is building deal flow
          from scratch and designing a transaction around how value can actually move.
        </p>
        <p>
          Here is that skill applied. A VC-backed immigration firm engaged Kautilya to add non-dilutive revenue
          ahead of a Series A, and initially assumed it would acquire smaller firms outright. The team&rsquo;s
          market work showed why that would fail, and built the alternative. Over six weeks it produced a pipeline
          of 8 to 10 vetted opportunities, led by a referral partnership worth an estimated £70K to £80K a year.
        </p>

        <h2>When a market has no listings and no brokers</h2>
        <p>
          First, recognise the kind of market you&rsquo;re in, because it changes everything downstream. In
          regulated, confidentiality-sensitive, relationship-driven sectors, owners don&rsquo;t list, don&rsquo;t
          respond to cold acquisition offers, and won&rsquo;t hand client trust to a stranger with a term sheet. A
          conventional advisor either forces the standard process and fails, or declares the market too difficult
          and walks.
        </p>
        <p>Kautilya did neither, it accepted the constraints and designed around them.</p>
        <div className="proof-block">
          <div className="proof-label">The Market Reality</div>
          <p>
            UK immigration operators don&rsquo;t sell partial client books, respond poorly to cold outreach, and
            treat client relationships as reputationally sensitive. A key early insight reframed the mandate: the
            client didn&rsquo;t need to own a business, it needed access to cash-flowing clients. That reframe is
            what unlocked structures the market would actually accept.
          </p>
        </div>

        <h2>Step 1, Map the entire universe, don&rsquo;t sample</h2>
        <p>
          The foundation is exhaustive coverage. Build the full list of counterparties from public and regulatory
          registers, then enrich it with ownership, tenure and contact data. Sampling a convenient slice means
          designing around a market you&rsquo;ve only partly seen, which is how good opportunities get missed.
        </p>
        <div className="proof-block">
          <div className="proof-label">The Market Map</div>
          <p>
            The team scraped the GOV.UK Immigration Advisor Register for roughly 1,500 advisors across Levels 1 to
            3, enriched them with director and company data from Companies House, and supplemented with
            law-society data and active advisor communities. The exhaustive approach took about 960 hours;
            replicating it in-house at UK minimum wage alone would have cost the client £11,500 to £12,000, and
            materially more with senior talent.
          </p>
        </div>

        <h2>Step 2, Rank outreach channels by trust, not convenience</h2>
        <p>
          In relationship-driven markets, live dialogue beats passive interest, and the ranking of channels is
          often the inverse of what a digital-first campaign assumes. Don&rsquo;t decide the order in advance, run
          all of them and let live conversion rank them.
        </p>
        <div className="proof-block">
          <div className="proof-label">The Channel Data</div>
          <p>
            Across roughly 1,500 direct emails, 600 social touches, and 200 to 250 cold calls over a month, the
            team found conversion to real conversations ranked cold calls first, then email, then LinkedIn, then
            referrals, the opposite of what a purely digital campaign would assume. That produced 43-plus serious
            conversations and 8 to 10 strongly aligned operators.
          </p>
        </div>
        <p>
          The lesson generalises: in a trust-driven market, the higher-effort, higher-intimacy channel usually
          converts best, precisely because it&rsquo;s the one competitors avoid.
        </p>

        <h2>Step 3, Test structures the market will actually accept</h2>
        <p>
          Once you&rsquo;ve reframed the goal as acquiring cash flow rather than ownership, structures the market
          finds acceptable come into view, even where an outright sale is culturally off the table. Owners who
          won&rsquo;t sell will often still route revenue, if the structure protects their relationships and feels
          reversible.
        </p>
        <div className="proof-block">
          <div className="proof-label">The Structure Pivot</div>
          <p>
            Operators were overloaded with demand, not short of it, selling clients felt final and risky, referring
            them felt safe and reversible. So the team pivoted from acquisitions to referral-based overflow
            partnerships and selective client-book transfers. The lead structure was a referral partnership worth
            an estimated £70K to £80K a year, inside a pipeline of 8 to 10 vetted opportunities and a path to £1M
            to £5M of valuation uplift at roughly 20x venture multiples, with no dilution.
          </p>
        </div>
        <p>
          There was a second dividend the client hadn&rsquo;t asked for. Every screening call that didn&rsquo;t
          convert still produced competitive intelligence, workflows, pricing, capacity constraints, across 1,000
          to 1,500 operator conversations. In a relationship-driven market, the sourcing process itself becomes
          market research, which is part of what{' '}
          <Link href="/engage">Kautilya delivers on a sourcing mandate</Link>.
        </p>

        <div className="story-faq">
          <h2 className="story-faq-title">Frequently asked</h2>
          <div className="story-faq-item">
            <h3 className="story-faq-q">How do you find businesses to buy that aren&rsquo;t listed?</h3>
            <p className="story-faq-a">
              Build the target universe from public and regulatory registers, enrich it, then run structured
              multi-channel outreach that prioritises live conversation. The best deals are rarely listed; they
              surface through direct, proprietary contact before an owner has decided to sell.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What is proprietary deal sourcing?</h3>
            <p className="story-faq-a">
              Identifying and building trust with owners directly, before a business is publicly marketed, rather
              than working from broker listings. It avoids auction dynamics and intermediary fees, and in niche or
              relationship-driven markets it is often the only way to find real opportunities at all.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">Which cold outreach channel converts best?</h3>
            <p className="story-faq-a">
              It depends on the market, which is why you test all of them. In this relationship-driven sector, cold
              calls converted best, ahead of email, LinkedIn and referrals, the inverse of a typical digital
              campaign. Run every channel and let live conversion rank them.
            </p>
          </div>
          <div className="story-faq-item">
            <h3 className="story-faq-q">What if owners in a market won&rsquo;t sell outright?</h3>
            <p className="story-faq-a">
              Test alternative structures. Client-book transfers and referral or overflow partnerships can move
              cash flow compliantly even when a full sale is off the table, which is frequently the only workable
              path in confidentiality-sensitive sectors. Owners who won&rsquo;t sell will often still route revenue
              if the structure feels safe and reversible.
            </p>
          </div>
        </div>

        <div className="story-coda">
          <div className="coda-text">
            When traditional M&amp;A breaks down, we build new ways to move value.
          </div>
        </div>
      </article>
    </>
  );
}
