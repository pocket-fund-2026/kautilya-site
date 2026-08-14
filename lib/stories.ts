export const STORY_SLUGS = [
  'borderless',
  'dino-games',
  'runify',
  'edition-zero',
  'sourcely',
  'pocket-fund',
  'review',
  'college-startups',
  'pocket-deals',
  'deal-sourcing',
  'diamonds',
  'search-funds',
  '200k-deals',
  'smartprompt',
  'inspire3',
  'msp-buy-side-diligence',
] as const;

export type StorySlug = (typeof STORY_SLUGS)[number];

export type StoryMeta = {
  title: string;
  description: string;
  author: string;
  datePublished?: string;
  image?: string;
};

export const STORY_META: Record<StorySlug, StoryMeta> = {
  'borderless': {
    title: 'How to Source Off-Market Deals Without a Broker | Case Study',
    description: 'How to build proprietary deal flow with no listings or brokers, shown through a real six-week campaign: map the full market, rank channels by conversion, test structures owners accept.',
    author: 'Dev Shah',
    datePublished: '2026-08-14',
  },
  'dino-games': {
    title: 'How to Value and De-Risk a Mobile Game Acquisition | Case Study',
    description: 'How to value a cash-flowing mobile game, shown through a real ~1.1x carve-out: verify revenue at the console, treat mediated ad revenue as one stream, price risk through structure.',
    author: 'Dev Shah',
    datePublished: '2026-08-14',
  },
  'runify': {
    title: 'How to Buy a Business With Seller Financing | Case Study',
    description: 'How seller financing works when revenue isn\'t proven, shown through a real $110K deal closed with $20K down: underwrite on verified cash, defer the rest into an earn-out.',
    author: 'Dev Shah',
    datePublished: '2026-08-14',
  },
  'edition-zero': {
    title: 'Edition Zero: How This Is Bizness Began',
    description: 'The origin story of Kautilya\'s weekly newsletter, built around the practice of buying and operating small businesses off-market.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-zero.jpeg',
  },
  'sourcely': {
    title: 'My First Bizness Acquisition: An AI Student Tool with $500 MRR for $4K',
    description: 'How Kautilya found, bought, and grew Sourcely, an AI student tool, from $500 MRR to $4.5K MRR in five months, the firm\'s first acquisition.',
    author: 'Dev Shah',
    datePublished: '2023-06-09',
    image: '/images/stories/sourcely/logo_sourcely.png',
  },
  'review': {
    title: '2023 Review + 2024 Goals',
    description: 'A year in review: Sourcely grew to a $150K+ valuation in five months, a VC internship in San Francisco followed, and Kautilya went all in on acquisitions.',
    author: 'Dev Shah',
    datePublished: '2024-01-16',
  },
  'pocket-fund': {
    title: 'The Pocket Fund: A Student-Led Acquisition Fund',
    description: 'The Pocket Fund: how a $5,000 search fund became the model for buying, operating, and selling small, cash-flowing online businesses.',
    author: 'Dev Shah',
  },
  'college-startups': {
    title: '10 Reasons Why Now Is the Best Time to Start a Business in College',
    description: 'Ten reasons why lower startup costs, AI tooling, and a generation-wide shift toward entrepreneurship make now the best time to start a business in college.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-college.jpeg',
  },
  'pocket-deals': {
    title: 'Pocket Deals #1: A $15K Micro-SaaS for Autism Support',
    description: 'Breaking down a niche iOS app for autism support listed at $15,000, sourcing, deal quality, and what made it worth a closer look.',
    author: 'Dev Shah',
  },
  'deal-sourcing': {
    title: 'My Morning Routine Is Looking at Acquire.com for 30 Minutes',
    description: 'Five practical strategies Kautilya uses to filter quality off-market deals from marketplace noise, drawn from reviewing 30-50 deals every week.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-acquire.jpeg',
  },
  'diamonds': {
    title: 'How to Find Diamonds in the Rough',
    description: 'Why the best acquisitions are businesses previous owners failed to monetize, and how Kautilya finds these overlooked, undervalued targets off-market.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-thisisbiz.jpeg',
  },
  'search-funds': {
    title: 'The Rise of Search Funds',
    description: 'How the search fund, a financing model that originated at Stanford in the 1980s, became a distinct asset class for buying and operating small businesses.',
    author: 'Dev Shah',
  },
  '200k-deals': {
    title: 'How We Closed $200K Worth of Deals in 6 Months',
    description: 'How Kautilya closed $200K worth of advisory deals in six months with an eleven-person team, and the shift from buying businesses to advising other buyers.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-200k.jpeg',
  },
  'smartprompt': {
    title: 'When to Walk Away From an Acquisition | Case Study',
    description: 'How to build go/no-go gates that kill bad deals early, shown through a real mandate where two deals died, one pre-LOI, one post-LOI, so one could close at a 200x discount.',
    author: 'Dev Shah',
    datePublished: '2026-08-14',
  },
  'inspire3': {
    title: 'How to Verify Revenue Buying an Online Business | Case Study',
    description: 'How to verify revenue buying an online business, shown on a real 19-site portfolio: validate every transaction, deconstruct affiliate lines, reconcile every system, then run the finances.',
    author: 'Dev Shah',
    datePublished: '2026-08-14',
  },
  'msp-buy-side-diligence': {
    title: 'How to Do Buy-Side Due Diligence on an MSP | Case Study',
    description: 'How to run buy-side diligence on an MSP, shown through a real $21M rebuild: separate blended margins, re-cost labour, reconcile PSA, billing and GL into an EBITDA bridge.',
    author: 'Dev Shah',
    datePublished: '2026-08-14',
    image: '/images/Dev.jpeg',
  },
};

export type FaqItem = { question: string; answer: string };
export type HowToStep = { name: string; text: string };

export const STORY_FAQ: Partial<Record<StorySlug, FaqItem[]>> = {
  'runify': [
    {
      question: 'Can you buy a business with little or no money down?',
      answer: 'Yes, by shifting risk into structure. A small cash payment at close plus a seller note or earn-out lets you pay for the business over time from its own cash flow, and pay for unproven performance only if it materialises. In this deal, $20K of cash at close carried a $110K total acquisition.',
    },
    {
      question: 'What is an earn-out, and how is it different from a seller note?',
      answer: 'A seller note is a fixed loan, you owe a set amount on a schedule no matter what. An earn-out is contingent, part of the price is paid only if the business hits agreed performance. When the future is uncertain, an earn-out is safer for the buyer because you never pay full price for performance that doesn\'t arrive.',
    },
    {
      question: 'What are the risks of seller financing for the buyer?',
      answer: 'Overpaying for performance you can\'t yet verify, and being locked into payments if the business declines. You mitigate that by underwriting the base only on collected, recurring cash, keeping cash at close small, and making the deferred portion contingent on performance rather than fixed, exactly the structure used here.',
    },
    {
      question: 'How do you price a business whose revenue isn\'t proven yet?',
      answer: 'Underwrite the base only on cash that has actually been collected and reliably recurs. Check for the three common distortions, currency, trials counted before conversion, and annual prices dressed up as monthly, then put every unproven variable into a performance-linked earn-out rather than the upfront price.',
    },
  ],
  'smartprompt': [
    {
      question: 'When should you walk away from an acquisition?',
      answer: 'When a target fails a predefined gate, financial reality, risk, market, price or structure, even after weeks of diligence. Sunk cost is not a reason to close a bad deal; the gates exist so the decision is made on fundamentals, not momentum.',
    },
    {
      question: 'What are the red flags that should kill a deal?',
      answer: 'A structure that leaves the seller with leverage or a competing interest, fundamentals deteriorating beneath healthy headline metrics, no defensible moat, and total founder dependency. A single flag may be manageable; a concentration of them rarely is. How a seller responds when you raise a problem is itself a signal.',
    },
    {
      question: 'Is it normal to walk away after signing an LOI?',
      answer: 'Yes. An LOI is not a binding commitment to close; post-LOI diligence exists to catch problems screening missed. Terminating there is uncommon only because momentum makes it feel costly, which is why the discipline matters. In this mandate, one of the two kills happened after the LOI.',
    },
    {
      question: 'What is a five-gate deal evaluation framework?',
      answer: 'A fixed sequence of go/no-go checks, financial reality, risk, market, price discipline and deal structure, that every opportunity must clear before progressing. Failing any gate is automatic disqualification. Defined before sourcing, it converts evaluation from enthusiasm into consistent, risk-adjusted analysis.',
    },
  ],
  'inspire3': [
    {
      question: 'How do you verify revenue when buying an online business?',
      answer: 'Match every transaction to the payment processor\'s own records rather than the seller\'s dashboard, then reconcile against the accounting system across multiple years. Discrepancies from refunds, chargebacks, trials or currency are common and only surface at transaction level, which is how this engagement found seven the seller had missed.',
    },
    {
      question: 'How can you tell if a seller\'s revenue screenshots are real?',
      answer: 'You can\'t, which is the point. Screenshots can be edited in minutes, so a live screen-share is a starting sniff test, not verification. Real proof comes from tying every transaction back to processor and bank records; if a seller resists that access, treat it as a red flag.',
    },
    {
      question: 'What\'s the most common way a digital business overstates its numbers?',
      answer: 'Affiliate and promotional tracking presented as real commission liability or realised revenue, and revenue concentrated in a single affiliate program. Deconstructing the affiliate lines individually is often the single biggest valuation correction in the deal, as the $3.1M line on this portfolio showed.',
    },
    {
      question: 'Can a diligence firm also manage the finances after the deal?',
      answer: 'Yes. Because full-scope diligence rebuilds a business\'s finances from source records, the same team can run the bookkeeping, affiliate payouts, receivables and tax timing afterward, typically an embedded controller plus hands-on oversight, which is especially useful when a buyer is stepping into an unfamiliar portfolio.',
    },
  ],
  'borderless': [
    {
      question: 'How do you find businesses to buy that aren\'t listed?',
      answer: 'Build the target universe from public and regulatory registers, enrich it, then run structured multi-channel outreach that prioritises live conversation. The best deals are rarely listed; they surface through direct, proprietary contact before an owner has decided to sell.',
    },
    {
      question: 'What is proprietary deal sourcing?',
      answer: 'Identifying and building trust with owners directly, before a business is publicly marketed, rather than working from broker listings. It avoids auction dynamics and intermediary fees, and in niche or relationship-driven markets it is often the only way to find real opportunities at all.',
    },
    {
      question: 'Which cold outreach channel converts best?',
      answer: 'It depends on the market, which is why you test all of them. In this relationship-driven sector, cold calls converted best, ahead of email, LinkedIn and referrals, the inverse of a typical digital campaign. Run every channel and let live conversion rank them.',
    },
    {
      question: 'What if owners in a market won\'t sell outright?',
      answer: 'Test alternative structures. Client-book transfers and referral or overflow partnerships can move cash flow compliantly even when a full sale is off the table, which is frequently the only workable path in confidentiality-sensitive sectors. Owners who won\'t sell will often still route revenue if the structure feels safe and reversible.',
    },
  ],
  'msp-buy-side-diligence': [
    {
      question: 'What is a good gross margin for an MSP?',
      answer: 'A fully-loaded recurring managed-services book typically runs in the mid-40s percent once labour carries benefits and overhead; resale and project work run far lower. A single blended figure usually overstates resale and understates recurring, so separate them by service line before benchmarking, which is exactly what surfaced the real picture on this engagement.',
    },
    {
      question: 'How long does buy-side diligence on an MSP take?',
      answer: 'A full source-level rebuild, reconciling the PSA, billing and ledger and re-costing labour to the agreement level, is a matter of weeks with a dedicated team. This one ran roughly a month, about 300 analyst-hours across two analysts.',
    },
    {
      question: 'What are the biggest red flags in an MSP\'s numbers?',
      answer: 'A single blended margin with no service-line breakdown, labour that doesn\'t reconcile to payroll once fully loaded, and revenue that doesn\'t tie between the PSA and the accounting system. On this deal all three pointed the same way, the numbers hadn\'t been stress-tested at source, and the real story only appeared once they were.',
    },
  ],
  'dino-games': [
    {
      question: 'How do you value a mobile game acquisition?',
      answer: 'On verified, durable cash flow, not installs or dashboard revenue. Confirm revenue at the console level, understand what it depends on (platform, ad mediation, geography), and recognise the monetisation model, an ad-led, front-loaded-LTV game can be sound even with weak retention. Cash-flowing games sourced off-market often trade near 1x revenue.',
    },
    {
      question: 'How do you verify a mobile game\'s revenue before buying?',
      answer: 'Work from console and platform payout data, Google Ads, AdMob, Play Console, not the seller\'s dashboard. Reconcile ad spend, ad revenue and in-app-purchase receipts against each other, and if ad revenue is mediated through one network, treat it as a single dependent stream rather than diversified income.',
    },
    {
      question: 'What multiple do cash-flowing mobile games sell for?',
      answer: 'It varies with revenue durability and platform risk, but cash-flowing games sourced off-market can change hands close to 1x revenue, as this one did at about 1.1x. Platform and operator dependency are the biggest discount factors, which is why they belong in the structure as well as the price.',
    },
    {
      question: 'How do you protect yourself buying a mobile app?',
      answer: 'Price the risk through structure: defer part of the payment against transition stability, insist on escrow with an inspection period and milestone releases, sequence technical diligence as a hard gate before any asset release, and remove embedded liabilities like discounted lifetime purchases before close.',
    },
  ],
};

export const STORY_HOWTO: Partial<Record<StorySlug, { name: string; steps: HowToStep[] }>> = {
  'runify': {
    name: 'How to Buy a Business With Seller Financing (When the Revenue Isn\'t Proven Yet)',
    steps: [
      { name: 'Underwrite only on verified, collected cash', text: 'Strip reported revenue down to what has actually been collected and reliably recurs, checking for currency mismatches, trials counted before conversion, and annual prices anchored to look monthly. Underwrite the base valuation only on that verified figure.' },
      { name: 'Keep the cash at close small', text: 'Size the upfront payment to your real risk tolerance rather than the seller\'s opening ask, reframing it as a capital-deployment decision rather than a statement about price.' },
      { name: 'Move everything unproven into an earn-out', text: 'Put every unverifiable variable, unconverted trials, unrenewed contracts, projected growth, into contingent, performance-linked consideration rather than paying for it at close.' },
      { name: 'Keep the founder aligned to real performance', text: 'Structure the deal so the founder is paid mostly on what happens after close, converting unproven durability from the buyer\'s risk into a shared incentive.' },
    ],
  },
  'inspire3': {
    name: 'How to Verify Revenue When Buying an Online Business (and Run Its Finances After)',
    steps: [
      { name: 'Verify every transaction at the payment processor', text: 'Match every sale, refund and chargeback against the payment processor\'s own records rather than the seller\'s dashboard, holding yourself to a monetary match rate rather than a spot-check.' },
      { name: 'Deconstruct affiliate economics line by line', text: 'Take the affiliate and commission lines apart entry by entry to separate internal promotional tracking from real commission liability, and to find where revenue concentration creates fragility.' },
      { name: 'Reconcile every system, and flag what you can\'t verify', text: 'Reconcile the payment processor, the accounting system and the internal records against each other across multiple years, documenting any period without a clean trail as a formal diligence limitation.' },
    ],
  },
  'borderless': {
    name: 'How to Source Off-Market Business Deals Without a Broker',
    steps: [
      { name: 'Map the entire universe, don\'t sample', text: 'Build the full list of counterparties from public and regulatory registers, then enrich it with ownership, tenure and contact data before designing any outreach.' },
      { name: 'Rank outreach channels by trust, not convenience', text: 'Run every outreach channel, cold calls, email, social, referrals, in parallel and let live conversion to real conversations rank them rather than assuming a digital-first order.' },
      { name: 'Test structures the market will actually accept', text: 'Where owners won\'t sell outright, test client-book transfers and referral or overflow partnerships that move cash flow compliantly and feel reversible to the owner.' },
    ],
  },
  'msp-buy-side-diligence': {
    name: 'How to Do Buy-Side Due Diligence on an MSP',
    steps: [
      { name: 'Separate the blend into real service lines', text: 'Split the P&L into its true components, recurring, resale, contracted services, coaching, project work, and model each on its own margin rather than buying on a single blended figure.' },
      { name: 'Re-cost labour at fully-loaded rates', text: 'Load billable hours with the non-billable time, benefits, PTO and payroll taxes the seller\'s time-tracking export leaves out before trusting any service-line margin.' },
      { name: 'Reconcile the PSA, billing and accounting systems', text: 'Tie the PSA, billing/query layer and accounting ledger together at the transaction level so no number in the model rests on an unchecked source.' },
      { name: 'Build an EBITDA bridge a lender will accept', text: 'Produce a normalized EBITDA bridge where every adjustment is independently toggleable and traces to a source record, so a buyer and their lender can re-run it scenario by scenario.' },
    ],
  },
  'dino-games': {
    name: 'How to Value and De-Risk a Mobile Game Acquisition',
    steps: [
      { name: 'Verify revenue at the console, not the dashboard', text: 'Insist on console-level access to every revenue and user-acquisition surface, Google Ads, AdMob, Play Console, and walk each number back to its source before treating any of it as bankable.' },
      { name: 'Treat mediated ad revenue as one dependent stream', text: 'Where one ad network mediates the others, disallow blended averages and price it as a single point of failure rather than diversified income.' },
      { name: 'Price platform and transition risk through structure', text: 'Defer part of the consideration against stability, use escrow with an inspection period and milestone releases, and remove embedded liabilities before close instead of cutting the headline price.' },
    ],
  },
};
