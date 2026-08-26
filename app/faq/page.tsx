import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'FAQ | Kautilya | Micro Private Equity & Buy-Side Advisory' },
  description:
    '26 answered questions on buy-side M&A advisory, off-market deal sourcing, due diligence, deal structures, and transparent pricing — from $6,500 standalone DD to full-service retainers.',
  keywords: [
    'M&A advisory FAQ', 'buy a business FAQ India', 'off-market deal sourcing questions',
    'lower middle market M&A FAQ', 'private equity deal sourcing FAQ',
    'due diligence cost India', 'acquisition advisory pricing', 'micro private equity FAQ',
    'search fund questions India', 'business acquisition process FAQ',
    'seller financing explained', 'how to buy a business India', 'first-time buyer acquisition',
    'what is buy-side advisory', 'M&A retainer pricing India',
    'what is buy-side M&A India', 'buy-side vs sell-side M&A',
    'M&A advisor vs broker India', 'what is off-market deal India',
    'off-market vs on-market deals India', 'proprietary vs broker deal India',
    'acquisition retainer cost India', 'M&A advisory cost India',
    'how long to close acquisition India', 'acquisition timeline FAQ India',
    'deal closing time India', 'what is search fund India',
    'search fund explained India', 'ETA explained India',
    'what is micro private equity India', 'micro PE explained India',
    'small PE India', 'what is forensic due diligence India',
    'forensic DD explained India', 'financial reconstruction explained India',
    'what is acquisition entrepreneurship India', 'ETA for beginners India',
    'acquisition financing options India', 'what is earnout India',
    'post-acquisition operations FAQ India', 'operator placement FAQ India',
    'running acquired business India', 'acquisition without experience India',
    'buying business no experience India', 'first time buyer guide India',
    'how many deals per month India', 'deal flow volume India',
    'acquisition pipeline volume India', 'acquisition success rate India',
    'deal closure rate India', 'acquisition match rate India',
    'due diligence workstreams explained India', 'financial workstream DD India',
    'commercial workstream DD India', 'M&A success fee India',
    'acquisition success fee structure India', 'advisory success fee India',
    'month to month retainer India', 'no lock-in advisory India',
    'flexible M&A retainer India', 'international acquisition FAQ India',
    'cross-border M&A India', 'India US M&A advisory',
    'UAE acquisition advisory FAQ', 'UK acquisition India advisor FAQ',
    'India UAE business acquisition', 'M&A for PE funds FAQ India',
    'M&A for family offices FAQ India', 'M&A for VCs FAQ India',
    'acquisition for HoldCo India FAQ', 'roll-up M&A FAQ India',
    'buy and build FAQ India', 'digital business acquisition FAQ India',
    'SaaS acquisition FAQ India', 'how does off-market sourcing work India',
    'proprietary deal sourcing process FAQ', 'acquisition mandate FAQ India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/faq', languages: { 'en': 'https://www.kautilya-pe.com/faq', 'x-default': 'https://www.kautilya-pe.com/faq' } },
  openGraph: {
    title: 'FAQ | Kautilya | Micro Private Equity & Buy-Side Advisory',
    url: 'https://www.kautilya-pe.com/faq',
    description: '26 answered questions on M&A advisory, off-market deal sourcing, due diligence, and transparent pricing.',
  },
  other: {
    'DC.title': 'FAQ | Kautilya | Micro Private Equity & Buy-Side Advisory',
    'DC.subject': 'M&A advisory FAQ, acquisition process questions, due diligence pricing, micro private equity guide',
    'DC.type': 'InteractiveResource',
    pagename: 'Kautilya — FAQ',
    abstract: '26 answered questions covering buy-side advisory, off-market deal sourcing, forensic due diligence, pricing, deal structures, and post-acquisition operations.',
    summary: 'Comprehensive FAQ for first-time buyers and experienced acquirers: what is Kautilya, how deals are sourced, what due diligence covers, and pricing from $3,500 to $10,000/month.',
    'og:see_also': 'https://www.kautilya-pe.com/engage',
  },
};

interface FaqItem {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: 'General',
    items: [
      {
        question: 'What is Kautilya?',
        answer:
          'Kautilya is a micro private equity firm that helps buyers acquire, operate, and grow small businesses in the $50K-$5M range. Founded in 2023 and based in Mumbai, Kautilya handles the entire acquisition lifecycle: off-market deal sourcing, forensic due diligence across 8 workstreams, deal structuring, operator placement, and post-acquisition growth. The firm has completed 7 acquisitions with 2 successful exits to date, and its 10-person team reviews 30-50 deals per week. Clients include first-time buyers, search fund entrepreneurs, software HoldCos, roll-up operators, and VC-backed companies. Engagement types range from standalone due diligence at $6,500 to full-service retainers at $2,500-$10,000 per month. In practice, Kautilya lets a buyer own a profitable, cash-flowing business without quitting a day job or building an acquisition team from scratch.',
      },
      {
        question: 'Who is Kautilya for?',
        answer:
          'Kautilya works with five types of buyers: individual first-time acquirers, search fund entrepreneurs, software HoldCo operators, roll-up acquirers building through bolt-on deals, and VC-backed companies pursuing growth through acquisition. The common requirement is clarity, not experience: a buyer who knows what kind of business they want, by industry, size, or geography, and needs the deal flow, diligence, and operational support to close it. A significant portion of Kautilya\'s clients are first-time buyers with no prior M&A experience. Kautilya provides the acquisition criteria refinement, off-market sourcing, forensic due diligence, and operator placement needed to take a buyer from mandate to close, then supports post-acquisition growth through a dedicated playbook covering revenue optimization, cost efficiency, and expansion.',
      },
      {
        question: 'What makes Kautilya different from a traditional M&A advisor or broker?',
        answer:
          'Traditional M&A advisors and business brokers typically deliver a report or a listing and step away once a deal is introduced. Kautilya stays through the entire acquisition lifecycle: sourcing, due diligence, deal structuring, operations setup, and growth, functioning as an operator first and a consultant second. The firm specializes in creative deal structures, including seller financing, earnouts, and revenue-based payments, that make acquisitions possible without large upfront capital. Kautilya\'s due diligence process runs 8 workstreams over roughly 6 weeks: Financial, Commercial/Product, Email & CRM, Affiliate & Partnerships, Traffic & Conversion, Tech & Data, Operational & Team, and Strategic & Exit. After close, Kautilya places vetted operators and builds a 30-60-90 day post-acquisition action plan, rather than exiting once the deal is signed.',
      },
      {
        question: 'What industries do you cover?',
        answer:
          'Kautilya is sector-flexible but concentrates on asset-light, founder-operated businesses: SaaS products, content sites, service businesses, IT staffing firms, e-commerce operations, and other digital-first companies. The underlying criterion is operational simplicity paired with real, verifiable cash flow rather than a specific vertical. Deal sizes typically range from $50K to $5M. Because these businesses tend to run on lean teams and standardized processes, they transfer more cleanly to a new operator during the 30-90 day post-acquisition transition, and their financials are easier to verify during the 8-workstream due diligence process. Kautilya\'s analyst team evaluates 30-50 potential deals per week against these criteria before presenting vetted opportunities to retainer clients.',
      },
      {
        question: 'What geographies do you operate in?',
        answer:
          'Kautilya sources acquisition targets across the United States, United Arab Emirates, Europe, Asia-Pacific, and MENA, in addition to its home market of India. The advisory team maintains localized playbooks for each region, so deal structuring, due diligence, and regulatory considerations adjust to the jurisdiction where the target business operates. This geographic range lets Kautilya serve buyers, including PE funds, VC firms, family offices, and individual acquirers, who are based in one country but want to acquire a business in another. Cross-border engagements follow the same core process as domestic ones: off-market sourcing, an 8-workstream forensic due diligence review, deal structuring, and post-acquisition operator placement.',
      },
    ],
  },
  {
    title: 'Deal Sourcing',
    items: [
      {
        question: 'How do you find deals?',
        answer:
          'Kautilya sources the large majority of its deal flow off-market, meaning the target businesses are not listed for sale on any public marketplace. Deal sourcing methods include direct founder outreach by cold email, LinkedIn messaging, and personalized Loom videos; a broker network built over multiple years; monitoring of community forums where founders discuss selling; and social-signal analysis used to detect early selling intent before a business is formally for sale. As a supplement, Kautilya also monitors more than 30 vetted online marketplaces. The firm\'s analyst team has run over 1,200 outreach campaigns with a 14.8% response rate, well above industry norms, and reviews 30-50 potential deals every week before presenting pre-screened options to clients.',
      },
      {
        question: 'How many deals will I see?',
        answer:
          'The number of deals a client sees depends on their retainer tier: Kautilya\'s plans deliver 8, 20, or 50+ vetted acquisition opportunities per month. Every deal that reaches a client has already been pre-screened, meaning Kautilya has verified the target\'s financials, assessed the seller\'s motivation to sell, and evaluated the potential for creative financing structures such as seller notes or earnouts. This pre-screening is designed to save buyers from spending time on deals that would fail basic diligence. Clients on higher-volume tiers typically pursue more aggressive acquisition timelines or are evaluating multiple acquisition theses simultaneously, such as roll-up operators building a platform through several bolt-on deals.',
      },
      {
        question: 'What does "off-market" actually mean?',
        answer:
          'An off-market deal is a business that is not listed on any brokerage site or marketplace, and whose owner has not publicly announced an intent to sell. Kautilya identifies these opportunities by reaching out directly to founders and owners who may be open to selling but have not taken any formal step toward a sale. Off-market deals typically face less competition from other buyers, allow for more flexible deal terms such as seller financing or earnouts, and often come with better pricing than businesses actively marketed for sale, since the seller has not run a competitive auction process. This is the core sourcing method behind Kautilya\'s proprietary deal pipeline, supplemented by monitoring of 30+ vetted marketplaces.',
      },
      {
        question: 'Can I define exactly what kind of business I want?',
        answer:
          'Yes, and specificity is the expectation, not an obstacle. Kautilya builds each client\'s acquisition plan around explicit criteria: industry, business size, geography, margin thresholds, and deal-breakers, and the more precisely a buyer defines these parameters, the more targeted and efficient the sourcing process becomes. This personalized approach applies to every client type Kautilya works with, from first-time individual buyers to search fund entrepreneurs, roll-up operators, and VC-backed companies pursuing a defined acquisition thesis. Once criteria are set, Kautilya\'s team uses them to filter off-market outreach, broker relationships, and marketplace monitoring, so that the 8-50+ deals delivered per month based on retainer tier are pre-matched to what the client is actually looking to buy.',
      },
    ],
  },
  {
    title: 'Due Diligence',
    items: [
      {
        question: 'What does your due diligence process look like?',
        answer:
          'Kautilya\'s due diligence process is a roughly 6-week deep dive across 8 defined workstreams: Financial, Commercial/Product, Email & CRM, Affiliate & Partnerships, Traffic & Conversion, Tech & Data, Operational & Team, and Strategic & Exit. At the end of the process, the client receives a full due diligence report, a normalized financial model, a risk map identifying deal-specific red flags, a transition plan for the ownership handover, and a 30-60-90 day post-close action plan. The process can be run as part of a full-service retainer or purchased as a standalone engagement starting at $6,500 plus a 0.3% success fee on close, regardless of how the underlying deal was sourced.',
      },
      {
        question: 'How big is the DD team?',
        answer:
          'A typical Kautilya due diligence engagement is staffed by 1 to 3 analysts and, when the target requires technical review, 1 developer, all led by a dedicated team lead who oversees the 8-workstream process. For clients on a full-service retainer, the size of the due diligence team scales with the client\'s plan tier and deal volume: buyers on higher-tier retainers, who see 20 or 50+ vetted deals per month, are supported by a proportionally larger analyst allocation. This staffing model is drawn from Kautilya\'s broader 10-person team, which includes analysts, a dedicated DD lead, engineers, and operations support led by founder Dev Shah.',
      },
      {
        question: 'Do you just check boxes, or do you actually tell me if a deal is bad?',
        answer:
          'No. Kautilya\'s due diligence approach is owner-minded: every business is evaluated as though the analyst team were buying it themselves, not simply completing a checklist for a fee. If the underlying numbers do not work, or if the 8-workstream review surfaces red flags such as unreliable revenue, customer concentration, or overstated margins, Kautilya will recommend killing the deal before the client commits further capital or time. Clients hear about these issues directly, as part of the full due diligence report and risk map delivered at the end of the roughly 6-week process. This is the same standard applied whether the due diligence engagement is bundled into a full-service retainer or purchased standalone at $6,500 plus a 0.3% success fee.',
      },
      {
        question: 'Can I hire you just for due diligence on a deal I found myself?',
        answer:
          'Yes. Kautilya offers standalone due diligence engagements starting at $6,500 plus a 0.3% success fee due only if the deal closes. A standalone DD engagement receives the identical 8-workstream analysis Kautilya runs for retainer clients: Financial, Commercial/Product, Email & CRM, Affiliate & Partnerships, Traffic & Conversion, Tech & Data, Operational & Team, and Strategic & Exit, regardless of whether the buyer found the deal independently or through Kautilya\'s own off-market sourcing. The engagement typically takes about 6 weeks and concludes with a full DD report, a normalized financial model, a risk map, a transition plan, and a 30-60-90 day post-close action plan.',
      },
    ],
  },
  {
    title: 'Pricing & Engagement',
    items: [
      {
        question: 'How much does it cost?',
        answer:
          'Kautilya offers three engagement types with transparent pricing. Due Diligence Only starts at $6,500 plus a 0.3% success fee on close. Market Research runs $3,500-$5,000 for a 6-8 week deep dive into a target acquisition sector. A Full-Service Retainer, covering sourcing, diligence, structuring, and post-acquisition support, costs $2,500-$10,000 per month depending on deal volume, plus a success fee of 3% on deals under $650,000 and 1.5% on deals above $650,000. Retainers are month-to-month with no long-term lock-in, and payment terms are typically 50% upfront and 50% at Phase 1 close. Success fees are only due once a deal actually closes, aligning Kautilya\'s incentives with the client\'s outcome.',
      },
      {
        question: 'What are the payment terms?',
        answer:
          'Kautilya\'s standard payment structure is 50% due upfront and 50% due at Phase 1 close, though exact terms can be adjusted per engagement. Success fees, 3% on deals closing under $650,000 and 1.5% on deals above that threshold for full-service retainer clients, or a flat 0.3% for standalone due diligence engagements, are only charged once a transaction actually closes, not for deals that are sourced or diligenced but not completed. Retainer fees themselves range from $2,500 to $10,000 per month depending on plan tier, and are billed on a month-to-month basis with no long-term lock-in, so clients are not committed beyond the value they are actively receiving.',
      },
      {
        question: 'Is there a minimum commitment?',
        answer:
          'No. Kautilya\'s full-service retainers are structured month-to-month, with no long-term lock-in and no penalty for a client who chooses to stop. Due diligence and market research engagements are scoped and priced per project rather than as ongoing commitments: a standalone DD engagement starts at $6,500 plus a 0.3% success fee, and market research runs $3,500-$5,000 for a defined 6-8 week deep dive. If a retainer client is unhappy with the deal flow they are receiving, Kautilya recalibrates the sourcing criteria first; if the fit still is not right, the client can walk away without penalty, keeping the engagement structure aligned with ongoing value rather than a fixed contract term.',
      },
    ],
  },
  {
    title: 'The Acquisition Process',
    items: [
      {
        question: 'How long does it take to close a deal?',
        answer:
          'The typical timeline from engaging with a specific target to closing is 30-90 days, though this depends heavily on deal complexity, financing structure, and how quickly both parties move through negotiation. Before that stage, sourcing the right deal in the first place can take anywhere from a few weeks to a few months, depending on how narrow the client\'s acquisition criteria are: a highly specific mandate covering industry, size, geography, and margin thresholds takes longer to match than a broad one. Clients on higher-volume retainer tiers, who see 20 or 50+ vetted deals per month rather than 8, generally reach a matching target faster since more pre-screened opportunities are in the pipeline at any given time.',
      },
      {
        question: "I've never bought a business before. Can I still work with you?",
        answer:
          'Yes. A significant portion of Kautilya\'s clients are first-time acquirers with no prior M&A experience. Kautilya walks first-time buyers through every stage of the process: defining acquisition criteria, evaluating specific deals, structuring the offer including creative options like seller financing or earnouts, running the 8-workstream due diligence process, setting up post-acquisition operations, and planning for growth. No M&A background is required; what matters is clarity about the kind of business the buyer wants to own. This is the same end-to-end support model Kautilya applies to more experienced clients such as search fund entrepreneurs and roll-up operators, just with more guidance at the criteria-definition and deal-evaluation stages.',
      },
      {
        question: 'Do you help with financing the acquisition?',
        answer:
          'Kautilya does not provide acquisition capital directly, but the firm specializes in structuring deals to reduce the cash a buyer needs upfront. Common structures include seller financing, where the seller carries part of the purchase price as a note; earnouts, where part of the price is paid based on future performance; revenue-based payments; and hybrid combinations of these. Kautilya\'s team structures the deal terms around the buyer\'s actual financial situation during the negotiation phase, which typically falls within the 30-90 day window between engaging with a target and closing. This creative-structuring approach is one of the ways Kautilya differs from a traditional business broker, who typically presents a listing without helping negotiate non-cash payment terms.',
      },
      {
        question: 'What happens after I buy the business?',
        answer:
          'Kautilya does not exit the relationship at close. The engagement moves into Phase 3, operations setup, where Kautilya places experienced operators, implements automation, and builds management dashboards so the business can run without the new owner spending 40 hours a week on it. Phase 4 is growth strategy: revenue optimization, cost efficiency improvements, market expansion, and exit preparation for when the owner eventually wants to sell. Kautilya stays on as a partner for 30-90 days post-close as standard, and longer for clients on a full-service retainer. The goal of operator placement specifically is for the new owner to spend roughly 3-5 hours per week on the business rather than running it full-time.',
      },
    ],
  },
  {
    title: 'Operations & Post-Acquisition',
    items: [
      {
        question: 'What is operator placement?',
        answer:
          'Operator placement is the process by which Kautilya sources and vets operational talent, including managers, functional specialists, and integrators, who step in to run the day-to-day operations of a newly acquired business on the owner\'s behalf. The target outcome is for the buyer to spend roughly 3-5 hours per week overseeing the business rather than 40 hours running it directly. Operator placement is part of Phase 3 of Kautilya\'s post-acquisition process, alongside automation implementation and the construction of management dashboards that let an owner monitor performance without being involved in daily operations. This service is included for full-service retainer clients and is one of the primary ways Kautilya differs from advisors who stop working once a deal closes.',
      },
      {
        question: 'Do I need to run the business myself?',
        answer:
          'No. Operator placement exists specifically so that a Kautilya client does not need to run the acquired business day-to-day. After close, Kautilya sources and vets a manager or operator to handle daily operations, implements automation where possible, and builds management dashboards so the owner can track performance remotely. The target is for the new owner to spend roughly 3-5 hours per week on oversight rather than the 40 hours a full-time operator would spend. This structure is designed for buyers who want to own a cash-flowing business, including PE funds, family offices, and individual acquirers who are not looking to become full-time operators themselves, without giving up strategic control of decisions like growth strategy or eventual exit timing.',
      },
      {
        question: 'How do you help me grow the business after acquisition?',
        answer:
          'After close, Kautilya builds a growth playbook specific to the acquired business, covering revenue levers, cost optimization opportunities, expansion paths, and a clear long-term exit strategy. This work falls under Phase 4 of Kautilya\'s post-acquisition process, following Phase 3\'s operations setup, which includes operator placement, automation, and management dashboards. Kautilya stays on as a partner for 30-90 days post-close as standard practice, and for longer periods with clients on a full-service retainer. The growth playbook is built from the same forensic due diligence findings, including financial, commercial, traffic, and operational data, gathered during the original 8-workstream diligence process, so growth recommendations are grounded in verified data about the business rather than generic advice.',
      },
    ],
  },
  {
    title: 'Trust & Track Record',
    items: [
      {
        question: 'How many deals has your team completed?',
        answer:
          'Kautilya has completed 7 acquisitions with 2 successful exits to date. The firm\'s analyst team reviews 30-50 potential deals every week as part of its off-market sourcing process, and has run more than 1,200 outreach campaigns to founders and business owners, achieving a 14.8% response rate, well above typical industry benchmarks for cold outreach. These figures reflect both Kautilya\'s own acquisitions, made through its micro PE practice, and the deal flow delivered to advisory and retainer clients across sectors including SaaS, content sites, service businesses, IT staffing, and e-commerce. The 10-person team behind this track record is led by founder Dev Shah, a 24-year-old operator who has personally acquired and exited multiple businesses.',
      },
      {
        question: "Who's on the team?",
        answer:
          'Kautilya\'s team consists of 10 people: analysts who source and screen deals, a dedicated due diligence lead, engineers who support technical diligence workstreams, and operations support staff. The team is led by Dev Shah, a 24-year-old micro private equity operator who has personally acquired and exited multiple businesses and personally leads every Kautilya engagement. On a typical due diligence engagement, 1 to 3 analysts and, when required, 1 developer are staffed under a team lead, with staffing scaling up for higher-tier retainer clients who receive 20 or 50+ vetted deals per month rather than 8. This structure keeps Kautilya\'s 8-workstream diligence process consistent across both retainer clients and standalone engagements.',
      },
      {
        question: "What if I'm not happy with the deal flow?",
        answer:
          'Kautilya\'s retainers are structured month-to-month specifically so that fit can be reassessed continuously. If the deals a client is receiving are not matching their defined criteria, such as industry, size, geography, or margin thresholds, Kautilya first recalibrates the sourcing approach using that feedback. If the mismatch persists after recalibration, the client can walk away with no penalties, no cancellation fees, and no hard feelings, since there is no long-term lock-in on the retainer structure. This flexibility applies across all three engagement types Kautilya offers: full-service retainers, standalone due diligence, and market research, all of which are scoped and priced without requiring a multi-month or multi-year commitment from the client.',
      },
    ],
  },
];

const allItems = FAQ_SECTIONS.flatMap((s) => s.items);

const BASE = 'https://www.kautilya-pe.com';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Kautilya FAQs — Micro Private Equity & Buy-Side Advisory',
  description: '26 answered questions on buy-side M&A advisory, off-market deal sourcing, forensic due diligence, deal structures, and transparent pricing.',
  url: `${BASE}/faq`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.faq-question', '.faq-answer'],
  },
  mainEntity: allItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE}/faq` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'FAQ | Kautilya | Micro Private Equity & Buy-Side Advisory',
  url: `${BASE}/faq`,
  description: '26 answered questions on buy-side M&A advisory, off-market deal sourcing, due diligence, deal structures, and transparent pricing.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', url: BASE, name: 'Kautilya' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE}/faq` },
  ]},
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-sections {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-section {
          margin-bottom: 56px;
        }

        .faq-section-title {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--gold);
          letter-spacing: 1px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 32px;
        }

        .faq-item {
          margin-bottom: 36px;
          padding-bottom: 36px;
          border-bottom: 1px solid var(--border);
        }

        .faq-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .faq-question {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .faq-answer {
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-secondary);
        }

        .faq-cta {
          text-align: center;
          padding: 48px 0 0;
          border-top: 1px solid var(--border);
          margin-top: 20px;
        }

        .faq-cta-title {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .faq-section-title { font-size: 24px; }
          .faq-question { font-size: 18px; }
          .faq-item { margin-bottom: 28px; padding-bottom: 28px; }
          .faq-section { margin-bottom: 40px; }
        }
      `}} />

      <div className="page">
        <div className="page-hero">
          <div className="section-eyebrow">Company</div>
          <h1 className="section-title">Kautilya FAQs</h1>
          <p style={{ maxWidth: 520, color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
            Everything you need to know about Kautilya, our micro PE practice, deal sourcing, due diligence, and how we work.
          </p>
        </div>

        <div className="content-section faq-sections">
          {FAQ_SECTIONS.map((section, si) => (
            <div key={si} className="faq-section reveal">
              <h2 className="faq-section-title">{section.title}</h2>
              {section.items.map((item, ii) => (
                <div key={ii} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p className="faq-answer">{item.answer}</p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      style={{ display: 'inline-block', marginTop: 12, fontSize: 13, letterSpacing: 2, color: 'var(--gold)', textDecoration: 'none' }}
                    >
                      {item.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="faq-cta reveal">
            <h2 className="faq-cta-title">Still have questions?</h2>
            <Link
              href="/engage"
              className="engage-submit"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
