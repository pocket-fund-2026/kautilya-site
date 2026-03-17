import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '../../components/useReadingProgressAndShareBar';
import { Link } from 'react-router-dom';

export default function StorySmartPromptPage() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('SmartPrompt: Two Deals Killed, One Asset Acquired — via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('SmartPrompt: Two Deals Killed, One Asset Acquired');
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
        <Link to="/portfolio" className="back-link">&larr; Portfolio</Link>
        <div className="meta-row">
          <span className="meta-tag sector">GPT &amp; AI Education</span>
          <span className="meta-tag geo">Global / ChatGPT Ecosystem</span>
          <span className="meta-tag stage">Full Mandate</span>
        </div>
        <h1>SmartPrompt: Two Deals Killed. One Asset Acquired.</h1>
        <div className="subtitle">
          How Kautilya converted an undefined acquisition mandate into a structured deployment strategy, walked away from two deals mid-process, and closed a GPT-native education platform at a 200x discount to market comparables.
        </div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">
        <p>
          The mandate started without a target. A first-time acquirer with $50K in deployable capital, a strong
          interest in AI-native assets, and no acquisition framework. Kautilya&rsquo;s task: define what to buy,
          find it, evaluate it, and close it &mdash; or walk away if the numbers did not work.
        </p>
        <p>
          Over twelve weeks, the team evaluated approximately 300 opportunities, entered serious negotiations on
          three, killed two mid-process, and closed one &mdash; a GPT-native education platform with 2.5 million
          cumulative conversations and roughly 100,000 monthly active users.
        </p>

        <div className="pull-quote">
          <p>
            The discipline to kill a deal is worth more than the deal itself. Two of the three
            opportunities looked attractive on paper. Neither survived diligence.
          </p>
        </div>

        <h2>The Asset</h2>
        <p>
          SmartPrompt is a portfolio of 30&ndash;35 custom GPTs within the ChatGPT ecosystem, with 2.5M+
          cumulative conversations and approximately 100K monthly active users. Revenue is derived from
          ChatGPT&rsquo;s revenue sharing programme. At $12K, the acquisition price works out to $0.0048
          per conversation &mdash; a 200x discount to comparable assets in the market.
        </p>

        <h2>The Five-Gate Evaluation Framework</h2>
        <p>
          Before reviewing a single listing, Kautilya built a structured evaluation framework for the buyer.
          Every opportunity had to pass five gates: market defensibility, revenue quality, operational
          transferability, valuation discipline, and post-close readiness. This prevented the analysis paralysis
          that kills most first-time acquisition mandates.
        </p>
        <ul className="constraint-list">
          <li>Acquisition Mandate Definition</li>
          <li>Five-Gate Evaluation Framework</li>
          <li>Off-Market Sourcing Pipeline</li>
          <li>Deal Termination Analysis (x2)</li>
          <li>GPT-Native Technical Diligence</li>
          <li>Transaction Structuring &amp; Execution</li>
        </ul>

        <h2>Deal #1: ResearchKick &mdash; Killed Pre-LOI</h2>
        <p>
          ResearchKick was an AI research tool with strong metrics and an attractive price. But the deal
          structure was fatally flawed. The seller retained financing leverage and competitive positioning
          post-close. Value erosion was structurally likely, with the buyer locked into an asset whose growth
          depended on a seller who had no incentive to cooperate.
        </p>
        <p>
          Kautilya recommended termination before the LOI stage. Walking away early preserved both capital
          and negotiating position for the deals that followed.
        </p>

        <h2>Deal #2: Keymate AI &mdash; Killed Post-LOI</h2>
        <p>
          Keymate AI passed initial screening and reached the LOI stage. But post-LOI diligence revealed
          deteriorating fundamentals masked by headline metrics. Early user churn was likely to continue or
          accelerate. Without this kill, the buyer would have closed on an asset with declining engagement
          and no structural moat.
        </p>
        <p>
          The post-LOI termination preserved approximately $27K in capital that would have been deployed
          into a declining asset.
        </p>

        <h2>Deal #3: SmartPrompt &mdash; Closed</h2>
        <p>
          SmartPrompt cleared all five gates. The GPT portfolio had genuine user engagement, minimal
          operational overhead, and a clear path to monetisation improvement. At $12K all-cash, the
          valuation provided asymmetric upside with minimal downside &mdash; a textbook micro-PE entry point.
        </p>
        <p>
          The transaction completed in twelve weeks from mandate definition to close. 100% equity transfer.
          Day-one operational readiness. The buyer deployed with a structured framework, not a guess.
        </p>

        <div className="phase-timeline">
          <div className="phase-block">
            <div className="phase-label">Weeks 1&ndash;2 &middot; Mandate &amp; Sourcing</div>
            <p>
              Defined the acquisition mandate, built the five-gate framework, and began sourcing across
              off-market channels. Approximately 300 opportunities evaluated at the top of the funnel.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Week 4 &middot; ResearchKick Killed</div>
            <p>
              Structural analysis revealed misaligned incentives in the proposed deal. Terminated pre-LOI
              to preserve capital and negotiating leverage.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Week 7 &middot; Keymate AI Killed</div>
            <p>
              Post-LOI diligence uncovered deteriorating user metrics masked by topline numbers. Terminated
              to preserve approximately $27K in deployable capital.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Weeks 9&ndash;11 &middot; SmartPrompt Due Diligence</div>
            <p>
              GPT-native technical diligence across the full portfolio. Validated conversation metrics,
              user retention, revenue sharing economics, and operational transfer requirements.
            </p>
          </div>
          <div className="phase-block">
            <div className="phase-label">Week 12 &middot; Close</div>
            <p>
              All-cash transaction at $12K. 100% equity transfer. Operator recruited and onboarded.
              Day-one operational readiness achieved.
            </p>
          </div>
        </div>

        <h2>What the Buyer Walked Away With</h2>
        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value">$12K</div>
            <div className="metric-label">Acquisition Price</div>
          </div>
          <div className="metric">
            <div className="metric-value">2.5M</div>
            <div className="metric-label">Conversations</div>
          </div>
          <div className="metric">
            <div className="metric-value">~100K</div>
            <div className="metric-label">Monthly Active Users</div>
          </div>
          <div className="metric">
            <div className="metric-value">200x</div>
            <div className="metric-label">Pricing Efficiency</div>
          </div>
        </div>

        <p>
          Beyond the closed asset, the buyer received a complete acquisition infrastructure: a defined
          mandate, a repeatable evaluation framework, an off-market sourcing pipeline, two documented deal
          termination analyses, and a post-close transition playbook. The $12K acquisition was the output.
          The process that produced it is the lasting value.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            Knowing when to walk away is not a failure of process. It is the process working exactly as designed.
          </div>
        </div>
      </article>
    </>
  );
}
