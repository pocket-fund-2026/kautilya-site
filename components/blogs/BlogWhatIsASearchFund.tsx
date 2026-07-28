'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';

const IMG_BASE = '/images/blogs/what-is-a-search-fund';

export default function BlogWhatIsASearchFund() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('You don\'t need to be rich to buy a business. You need to be credible enough that other people will fund your search. A plain-English guide to search funds, via @microsearchfund');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('What Is a Search Fund?');
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

        /* Deal-style data tables, reused for the capital / vesting / criteria tables */
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

        /* FAQ */
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

        /* Sources & method appendix */
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

        /* CTA button inside story-coda */
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
          <span className="meta-tag">Global</span>
          <span className="meta-tag">9 min read</span>
        </div>
        <h1>What Is a Search Fund?</h1>
        <div className="subtitle">
          A Beginner&apos;s Guide to Buying a Business With Other People&apos;s Money
        </div>
        <p className="blog-author-byline">By <a href="/team">Dev Shah</a>&nbsp;&nbsp;·&nbsp;&nbsp;28 July 2026</p>
        <p className="currency-note">
          Currency note: dollar figures carry an approximate rupee equivalent beside them, converted
          at ~₹96.6/$1 (July 2026 spot). Every converted figure is a Kautilya estimate, not an
          independently reported number.
        </p>
        <div className="hero-line" />
      </div>

      {/* ── Body: uses .story-body, .pull-quote, .constraint-list, .story-coda ── */}
      <article className="story-body">
        <div className="blog-hero-image">
          <Image
            src={`${IMG_BASE}/what-is-a-search-fund-hero.webp`}
            alt="What is a search fund? Buying a business with other people's money — investors fund a two-year search, then they fund the purchase, then you become the CEO. Conceived at Stanford GSB, 1984, median 20 months to acquisition."
            title="What Is a Search Fund?"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <p>
          A search fund is an investment vehicle through which investors pay an entrepreneur to
          spend about two years finding a private company to buy, then fund the purchase and hand
          that entrepreneur the CEO seat. The model was conceived at Stanford Graduate School of
          Business in 1984.
        </p>
        <p>
          In plain terms: you do not need to be rich to buy a business. You need to be credible
          enough that other people will fund your search, and then fund your acquisition. That is
          the entire idea.
        </p>
        <p>
          This guide covers how the model works, where the money comes from at each stage, what
          the entrepreneur actually earns, what kind of company gets bought, and where the model
          does not fit. No prior finance background assumed.
        </p>

        <h2>The Problem a Search Fund Solves</h2>
        <p>
          Most people who want to run a company can either start one or buy one, and both routes
          have an obvious blocker.
        </p>
        <ul className="constraint-list">
          <li><strong>Starting one</strong> means years of no revenue, no customers, and a high failure rate before you find out whether it works.</li>
          <li><strong>Buying one</strong> means writing a cheque for a profitable business, which usually costs several million dollars. Most capable operators in their late twenties or thirties do not have that.</li>
        </ul>
        <p>The search fund is the workaround. It splits the problem into two separate fundraises:</p>
        <ul className="constraint-list">
          <li><strong>First, raise a small amount to fund the search itself.</strong> Enough to pay yourself a modest salary while you look, full time, for a company worth buying.</li>
          <li><strong>Then, raise the much larger amount to actually buy the business,</strong> once you have found a specific target with real numbers attached.</li>
        </ul>
        <p>
          The insight is that investors will not hand an unproven operator millions of dollars up
          front. They will, however, fund a two-year search cheaply, then decide deal by deal
          whether to fund the purchase. The searcher is buying credibility in instalments.
        </p>
        <p>
          This is why the model sits inside the broader idea of entrepreneurship through
          acquisition (often shortened to ETA): becoming an entrepreneur by buying an existing
          business rather than founding one.
        </p>

        <h2>How a Search Fund Works, Stage by Stage</h2>
        <p>Four stages, running roughly four to seven years end to end.</p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/search-fund-lifecycle-four-stages.webp`}
            alt="The search fund lifecycle, four stages, four to seven years: 1. Raise search capital from 6-10 investors (~$450K / ~₹4.3 cr); 2. Search — full-time hunt for a company to buy (~20 months median); 3. Acquire — investors fund the purchase plus debt ($10-30M deal / ~₹97-290 cr); 4. Operate — run it as CEO, then sell (5-7 years)"
            title="The search fund lifecycle: four stages, four to seven years"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <ul className="constraint-list">
          <li><strong>Stage 1: Raise the search capital.</strong> The searcher raises a small fund from a group of investors, typically six to ten experienced search fund backers, to pay salary, travel and admin while they look for a company.</li>
          <li><strong>Stage 2: Search.</strong> The searcher spends roughly two years contacting owners, screening companies, and negotiating. Median time to acquisition is about 20 months, per Stanford data.</li>
          <li><strong>Stage 3: Acquire.</strong> Once a target is agreed, the searcher returns to the same investors to fund the purchase. They have first claim on the deal, but no obligation. Debt usually covers part of the price.</li>
          <li><strong>Stage 4: Operate, then exit.</strong> The searcher becomes CEO and runs the company, typically for five to seven years, growing profits before selling. The biggest payday comes at exit, not at acquisition.</li>
        </ul>

        <h2>Where the Money Comes From</h2>
        <p>
          Search funds raise capital twice, on very different terms. This two-step structure is
          the defining feature of the model.
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th></th><th>Search Capital</th><th>Acquisition Capital</th></tr>
            </thead>
            <tbody>
              <tr><td>When</td><td>Before any target is identified</td><td>Once a specific company is agreed</td></tr>
              <tr><td>Typical size</td><td>~$400,000&ndash;500,000 (~₹3.9&ndash;4.8 crore)</td><td>$6M&ndash;24M equity (~₹58&ndash;232 crore)</td></tr>
              <tr><td>What it buys</td><td>~24 months of salary, travel, admin</td><td>The company itself</td></tr>
              <tr><td>Who provides it</td><td>6&ndash;10 search fund investors</td><td>Usually the same investors, plus debt</td></tr>
              <tr><td>Risk</td><td>Very high &mdash; many searches never close a deal</td><td>Lower &mdash; a real business with real numbers</td></tr>
            </tbody>
          </table>
        </div>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/search-fund-capital-comparison.webp`}
            alt="Search funds raise capital twice, on very different terms. Stage 1, search capital: before any target exists, ~$400-500K, buys ~24 months of runway, very high risk. Stage 2, acquisition capital: once a target is agreed, $6-24M equity, buys the company itself, lower risk with real numbers. Search capital converts into acquisition equity at a 1.5x step-up."
            title="Search funds raise capital twice, on very different terms"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p>Two mechanics matter and are easy to miss:</p>
        <ul className="constraint-list">
          <li><strong>The step-up.</strong> Money put into the search converts into acquisition equity at a premium, industry-standard 1.5x. Invest $100,000 (~₹96.6 lakh) in the search, and it counts as $150,000 (~₹1.45 crore) of equity at the acquisition. This compensates investors for backing a person with no target yet.</li>
          <li><strong>Right of first refusal.</strong> Search investors get the pro-rata right of first refusal on the acquisition equity. They can fund the deal on the same terms as anyone else, before outside money is invited. It is a right, not an obligation, so a weak target can still fail to attract funding.</li>
        </ul>
        <p>
          Total deal sizes typically run $10M to $30M (~₹97 crore to ~₹290 crore), with bank or
          seller debt covering 20% to 40% of the purchase price.
        </p>

        <h2>What the Searcher Actually Earns</h2>
        <p>
          This is the question every beginner asks, and the answer is more conditional than most
          summaries admit.
        </p>
        <p>
          Median searcher equity at acquisition is 25%, rising to 30&ndash;35% if performance
          targets are met. But that equity is not handed over at closing. It vests in three
          roughly equal tranches:
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Tranche</th><th>Vests When</th><th>What It Rewards</th></tr>
            </thead>
            <tbody>
              <tr><td>First third</td><td>At closing of the acquisition</td><td>Finding and completing a deal</td></tr>
              <tr><td>Second third</td><td>Over the following 4&ndash;5 years</td><td>Staying and operating the business</td></tr>
              <tr><td>Final third</td><td>At exit, based on IRR achieved</td><td>Actually generating returns</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          The third tranche is where the real conditionality sits. It is tied to the internal rate
          of return delivered to investors at exit:
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/search-fund-irr-vesting-hurdle.webp`}
            alt="The searcher's final third is not guaranteed: below 20% IRR delivered to investors at exit, the searcher earns nothing from the final tranche; between 20% and 35% it vests on a sliding scale; at 35% or above the searcher receives the full tranche."
            title="The searcher's final equity tranche is tied to IRR delivered at exit"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p>
          Read that structure carefully, because it tells you what the model actually is. A
          searcher who buys a company, runs it competently for six years, and returns 15% a year
          to investors keeps roughly two thirds of their equity and forfeits the rest. The model
          does not pay for effort. It pays for outcome.
        </p>

        <h2>What a Search Fund Actually Buys</h2>
        <p>
          The target profile is narrow, and deliberately boring. Investors are funding a
          first-time CEO, so they want a business that will not punish inexperience.
        </p>
        <div className="deal-table-wrap">
          <table className="deal-table">
            <thead>
              <tr><th>Criterion</th><th>Typical Requirement</th></tr>
            </thead>
            <tbody>
              <tr><td>EBITDA (annual operating profit)</td><td>Above $2M (~₹19.3 crore), ideally $2&ndash;4M (~₹19&ndash;39 crore)</td></tr>
              <tr><td>EBITDA margin</td><td>Above 15%</td></tr>
              <tr><td>Recurring revenue</td><td>60%+ under contract</td></tr>
              <tr><td>Business model</td><td>Services, B2B or B2C, simple operations</td></tr>
              <tr><td>Capital expenditure</td><td>Low maintenance capex</td></tr>
              <tr><td>Industry growth</td><td>At least 2x GDP growth</td></tr>
              <tr><td>Track record</td><td>Consistent history of profit</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          The pattern behind the list: predictable cash flow, low capital intensity, and no
          technological cliff edge. A profitable, unglamorous, contract-heavy services business is
          close to the ideal. High-growth startups, capital-hungry manufacturers, and anything
          requiring deep technical specialisation are typically avoided.
        </p>

        <h2>Two Main Variants</h2>
        <ul className="constraint-list">
          <li><strong>Traditional (funded) search.</strong> The structure described above. Investors fund the search, get the step-up and the right of first refusal, and the searcher takes a salary while looking. Lower personal financial risk, less control, smaller equity share.</li>
          <li><strong>Self-funded search.</strong> The searcher funds their own search, usually while working, and finances the acquisition with debt and seller financing rather than a syndicate of institutional backers. Higher personal risk and no salary during the search, but a substantially larger equity stake and no investor group to answer to. Self-funded searchers typically buy smaller companies than the $10M&ndash;$30M (~₹97&ndash;290 crore) range above.</li>
        </ul>
        <p>
          Accelerator-backed and sponsor-backed variants also exist, where an institution provides
          infrastructure and support alongside capital. Their specific economics vary by programme
          and are not covered here.
        </p>

        <h2>Where the Model Does Not Fit</h2>
        <p>Honest limitations, because the failure mode is expensive and under-discussed.</p>
        <ul className="constraint-list">
          <li><strong>Many searches never close.</strong> The search capital is genuinely at risk, and a meaningful share of searchers finish two years without an acquisition. The salary was real; the outcome was not.</li>
          <li><strong>You are buying a job you cannot easily quit.</strong> The second vesting tranche runs four to five years. Leaving early forfeits equity.</li>
          <li><strong>The performance hurdle is demanding.</strong> A 20% IRR floor before the final tranche pays anything is a high bar for a small services business in a slow-growing sector.</li>
          <li><strong>The target profile excludes most businesses.</strong> EBITDA above $2M (~₹19.3 crore) with 60% recurring revenue rules out the overwhelming majority of small companies.</li>
          <li><strong>It is heavily concentrated in the US and Canada.</strong> The Stanford study that defines the model&apos;s track record covers funds formed in those two markets. Investor networks, norms and lender familiarity are all built there.</li>
        </ul>

        <h2>What This Looks Like Outside the US</h2>
        <p>
          The classic search fund targets deals of $10M to $30M (~₹97 to ~₹290 crore). A large
          share of real acquisition activity in India and other emerging markets happens well
          below that.
        </p>
        <p>
          Kautilya&apos;s own published engagements illustrate the spread. One confidential
          managed-services deal sits squarely inside the classic search fund range. Others sit far
          below it:
        </p>
        <div className="blog-figure">
          <Image
            src={`${IMG_BASE}/search-fund-deal-size-spread.webp`}
            alt="Most real acquisitions happen below the classic search fund range of $10M-30M: SmartPrompt $12K, Dino Games $39K, Runify $110K, Inspire3 $1.8M, and a confidential managed-services deal at $21M, plotted on a log scale."
            title="Most real acquisitions happen below the classic search fund range"
            width={1672}
            height={941}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p>
          Three practical consequences follow, and these are Kautilya&apos;s read rather than
          published data, since no equivalent India dataset exists:
        </p>
        <ul className="constraint-list">
          <li><strong>The search capital stage is often skipped.</strong> At a $100,000 (~₹96.6 lakh) purchase price, raising a $450,000 (~₹4.3 crore) search fund to find it makes no sense. The economics only work at scale.</li>
          <li><strong>Self-funded search is the more realistic template</strong> for most first-time acquirers in these markets, because deal sizes are within reach of personal capital plus seller financing.</li>
          <li><strong>The screening discipline still transfers even when the structure does not.</strong> Recurring revenue, low capex, boring and profitable, no technology cliff: those filters are what make an acquisition survivable for a first-time operator at any deal size.</li>
        </ul>
        <p>The structure is US-shaped. The diligence logic is universal.</p>

        {/* FAQ */}
        <div className="blog-faq">
          <div className="phase-label" style={{ marginBottom: 20 }}>Frequently Asked Questions</div>

          <div className="blog-faq-item">
            <div className="blog-faq-q">What is a search fund?</div>
            <p className="blog-faq-a">An investment vehicle, conceived in 1984 at Stanford Graduate School of Business, through which investors financially support an entrepreneur&apos;s efforts to locate, acquire, manage and grow a privately held company. The entrepreneur raises a small fund to finance a roughly two-year search, then raises a larger amount from the same investors to buy the company they find, and becomes its CEO.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How does a search fund work?</div>
            <p className="blog-faq-a">In four stages: raise search capital from six to ten investors; spend about 20 months finding a company; return to those investors to fund the acquisition, usually alongside debt; then run the business as CEO for five to seven years before selling.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How much money do you need to start a search fund?</div>
            <p className="blog-faq-a">Typically none of your own for a traditional search. Investors provide roughly $400,000 to $500,000 (~₹3.9 to ~₹4.8 crore) of search capital covering about 24 months of salary and expenses. A self-funded search reverses this: you cover your own costs and retain much more equity.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">How much equity does a searcher get?</div>
            <p className="blog-faq-a">Median equity at acquisition is 25%, rising to 30&ndash;35% if performance targets are met. It vests in three tranches: one at closing, one over four to five years of operating, and one at exit tied to the IRR delivered. Below 20% IRR the final tranche pays nothing.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What kind of business does a search fund buy?</div>
            <p className="blog-faq-a">Profitable, unglamorous companies with EBITDA above $2M (~₹19.3 crore), margins above 15%, 60% or more recurring revenue, simple operations, low capital expenditure, and an industry growing at least twice as fast as GDP.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">What is entrepreneurship through acquisition?</div>
            <p className="blog-faq-a">The broader idea of becoming an entrepreneur by buying an existing business rather than founding one. A search fund is the most formalised version of it, but self-funded acquisitions and holding companies pursue the same path.</p>
          </div>
          <div className="blog-faq-item">
            <div className="blog-faq-q">Do search funds exist in India?</div>
            <p className="blog-faq-a">The formal model is concentrated in the US and Canada, which is where the defining Stanford dataset is drawn from. Acquisition activity in India is real but often happens at deal sizes below the classic search fund range, where self-funded structures fit better than a funded search.</p>
          </div>
        </div>

        {/* Sources & Method */}
        <div className="sources-appendix">
          <div className="phase-label" style={{ marginBottom: 20 }}>Sources &amp; Method</div>
          <h3>High confidence, primary and institutional</h3>
          <ul>
            <li>Stanford Graduate School of Business, Center for Entrepreneurial Studies, Search Funds &mdash; source for the model&apos;s definition, its 1984 origin, and Irv Grousbeck&apos;s role. The 2026 Search Fund Study covers funds formed in the US and Canada since 1984.</li>
            <li>Pacific Lake Partners, Intro to Search Funds &mdash; source for search capital size and runway, median 20-month time to acquisition (citing 2024 Stanford data), investor count, deal and equity sizes, debt share, and the target company profile.</li>
          </ul>
          <h3>High confidence, specialist commentary, cross-checked across two independent sources</h3>
          <ul>
            <li>Acquisition Stars on search fund investor agreements, and Search Funds News on searcher economic rights and equity vesting &mdash; sources for the 1.5x step-up, the 25% median searcher equity rising to 30&ndash;35%, the three-tranche vesting structure, and the 20%/35% IRR hurdles.</li>
          </ul>
          <h3>Supporting academic context</h3>
          <p>IESE Business School, Re-Thinking Search Fund Incentive Structures; Yale SOM, Exploring Search Fund Entrepreneur Economics (2023).</p>
          <h3>Kautilya&apos;s own calculations, not disclosed figures</h3>
          <p>Every rupee conversion on this page, at ~₹96.6/$1 (July 2026). Engagement values in the outside-the-US section are from kautilya-pe.com&apos;s portfolio.</p>
          <h3>Labelled inference, not data</h3>
          <p>The three consequences listed in &ldquo;What This Looks Like Outside the US&rdquo; are Kautilya&apos;s structural reasoning. No India-specific search fund dataset exists, and none is claimed.</p>
          <h3>Open items</h3>
          <ul>
            <li>Headline return figures from the Stanford 2026 Search Fund Study were not retrieved in this pass and are therefore not quoted. Returns are discussed here only through the verified vesting hurdles.</li>
            <li>Whether the $400,000&ndash;$500,000 (~₹3.9&ndash;4.8 crore) search capital figure is the total raise or per investor. Stated here as the total raise, which is the standard reading and consistent with the same source&apos;s 24-month runway. Flagged for verification.</li>
            <li>Whether formal search fund vehicles have completed acquisitions in India. Not established either way, and not claimed.</li>
          </ul>
          <p>Not investment advice. This is an explainer for people evaluating acquisition paths, not a recommendation to pursue one.</p>
        </div>

        {/* CTA */}
        <div className="story-coda">
          <p className="coda-text">
            Evaluating whether to start a search, or already mid-search in India?
            We help searchers screen targets and run diligence before a term sheet.
          </p>
          <Link href="/engage" className="coda-link">Begin the Conversation</Link>
        </div>

      </article>
    </>
  );
}
