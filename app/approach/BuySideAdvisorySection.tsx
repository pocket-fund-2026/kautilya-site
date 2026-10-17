import Link from 'next/link';
import { BUY_SIDE_FAQS } from './buySideFaqs';

const css = `
.approach-page-methodology .bsa-section { background: var(--bg); border-bottom: 1px solid var(--border-dim); padding: 80px 0; }
.approach-page-methodology .bsa-inner { max-width: 1000px; margin: 0 auto; padding: 0 80px; }
.approach-page-methodology .bsa-h2 { font-family: var(--font-fraunces), 'Fraunces', serif; font-size: clamp(30px, 3.6vw, 46px); font-weight: 400; color: var(--text); line-height: 1.15; margin-bottom: 20px; }
.approach-page-methodology .bsa-h3 { font-family: var(--font-fraunces), 'Fraunces', serif; font-size: 24px; font-weight: 400; color: var(--text); margin: 44px 0 14px; }
.approach-page-methodology .bsa-inner p, .approach-page-methodology .bsa-inner li { font-size: 16px; color: var(--text-dim); line-height: 1.85; }
.approach-page-methodology .bsa-inner p { margin-bottom: 16px; }
.approach-page-methodology .bsa-inner ul, .approach-page-methodology .bsa-inner ol { padding-left: 22px; margin-bottom: 16px; }
.approach-page-methodology .bsa-inner li { margin-bottom: 10px; }
.approach-page-methodology .bsa-inner strong { color: var(--text); font-weight: 600; }
.approach-page-methodology .bsa-inner a { color: var(--text); text-decoration: underline; text-underline-offset: 3px; }
.approach-page-methodology .bsa-q { border-top: 1px solid var(--border-dim); padding: 18px 0 2px; }
.approach-page-methodology .bsa-q h4 { font-size: 17px; font-weight: 600; color: var(--text); margin-bottom: 8px; }
@media (max-width: 1024px) { .approach-page-methodology .bsa-inner { padding: 0 40px; } }
@media (max-width: 640px) { .approach-page-methodology .bsa-inner { padding: 0 20px; } .approach-page-methodology .bsa-section { padding: 56px 0; } }
`;

export default function BuySideAdvisorySection() {
  return (
    <section className="bsa-section" id="buy-side-advisory-india" aria-labelledby="bsa-heading">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="bsa-inner">
        <div className="section-eyebrow">Buy-Side Advisory in India</div>
        <h2 className="bsa-h2" id="bsa-heading">Buy-side M&amp;A advisory firms in India: what to look for, and what Kautilya does</h2>
        <p className="section-body">
          A buy-side advisor works for the acquirer, not the seller. If you are comparing buy-side advisory
          firms in India, the useful test is not a ranking but evidence: which deals the firm has closed for
          buyers, how it finds targets, and whether it will tell you to walk away. This section sets out how
          Kautilya answers each of those, so you can hold any firm, including us, to the same standard.
        </p>

        <h3 className="bsa-h3">What Kautilya does for buyers</h3>
        <p className="section-body">
          Kautilya builds proprietary, off-market acquisition pipelines and runs the mandate from definition
          to close: mandate formation, universe construction, founder outreach, deal screening, forensic
          diligence across 8 workstreams, deal structuring, negotiation support and closing assistance. It is
          sector-agnostic. To date it has closed 8 deals for buyers, diligenced $53.2M of businesses,
          contacted 10,000+ founders and achieved a 14.8% outreach response rate.
        </p>

        <h3 className="bsa-h3">Who it suits</h3>
        <ul>
          <li>Private equity funds, search funds, family offices and holding companies with a defined acquisition thesis.</li>
          <li>First-time acquirers. A significant portion of clients have no prior M&amp;A experience.</li>
          <li>Buyers who already found a deal and only need independent diligence, offered as a standalone engagement.</li>
        </ul>
        <p className="section-body">
          Closed and diligenced deals on our <Link href="/portfolio">portfolio</Link> range from $8K to roughly $500K, and
          diligence engagements go up to a ~$21M business. If your mandate sits well outside that, say so on
          the scoping call.
        </p>

        <h3 className="bsa-h3">How a buy-side mandate runs</h3>
        <ol>
          <li><strong>Mandate definition.</strong> A written thesis: sector, geography, size, structure preferences and exclusions.</li>
          <li><strong>Universe construction.</strong> A proprietary list of typically 500 to 2,500 companies, built from first principles rather than broker databases.</li>
          <li><strong>Targeted outreach.</strong> Personalised founder outreach by email, LinkedIn and Loom video.</li>
          <li><strong>Diligence and structuring.</strong> Eight-workstream forensic diligence plus creative structures such as seller financing and earnouts.</li>
          <li><strong>Execution and close.</strong> Negotiation, operator placement and a 30-60-90 day post-close plan. Typical timeline from engaging a target to close is 30 to 90 days.</li>
        </ol>

        <h3 className="bsa-h3">Questions to ask any buy-side advisory firm</h3>
        <ol>
          <li>
            <strong>Which three recent comparable buy-side deals have you closed?</strong> Ours are public:
            Dino Games ($39K, ~8 weeks), Runify ($110K, ~45 days, $20K upfront) and SmartPrompt ($12K, 12 weeks)
            on the <Link href="/portfolio">portfolio page</Link>.
          </li>
          <li>
            <strong>How do you source targets?</strong> Direct founder outreach to a proprietary universe,
            supplemented by monitoring of 30+ vetted marketplaces, rather than recirculating broker listings.
          </li>
          <li>
            <strong>How do you coordinate diligence?</strong> One team lead runs eight defined workstreams
            (financial, commercial, email and CRM, partnerships, traffic, tech and data, operations, strategy
            and exit) and delivers a report, normalised financial model and risk map.
          </li>
          <li>
            <strong>How are your fees structured?</strong> A monthly retainer plus a success fee that is due
            only if a deal closes, quoted after a scoping call, month-to-month with no lock-in.
          </li>
          <li>
            <strong>When have you renegotiated or abandoned a deal?</strong> 2 of 8+ LOIs were killed to
            protect the buyer; on SmartPrompt, 2 of 3 deals were killed before the right one closed; on
            Runify the portfolio records a 33% MRR correction.
          </li>
        </ol>

        <h3 className="bsa-h3">Frequently asked questions</h3>
        {BUY_SIDE_FAQS.map((f) => (
          <div className="bsa-q" key={f.question}>
            <h4>{f.question}</h4>
            <p className="section-body">{f.answer}</p>
          </div>
        ))}

        <p className="section-body" style={{ marginTop: 28 }}>
          Ready to talk? <Link href="/engage">Hire a buy-side advisor: start your acquisition mandate</Link>.
          Background reading: <Link href="/blog/what-is-buy-side-ma-advisory">what buy-side M&amp;A advisory is</Link>.
        </p>
      </div>
    </section>
  );
}
