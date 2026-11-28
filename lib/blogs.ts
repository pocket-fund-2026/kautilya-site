export const BLOG_SLUGS = [
  'buying-family-owned-business-india',
  'what-is-a-search-fund',
  'analyst-diaries-direct-mail-deal-origination',
  'how-to-find-acquisition-capital',
  'what-is-sell-side-ma-advisory',
  'what-is-pocket-deals',
  'what-is-a-private-placement-memorandum',
  'buy-side-m-a-advisory-what-it-is-and-how-it-works',
  'analyst-diaries-kautilya-seo-from-zero',
  'ebitda-multiples-in-india-what-businesses-actually-sell-for',
  'timeline-of-a-search-fund-from-raise-to-acquisition',
  'how-to-buy-a-business-with-no-money-down',
  'search-fund-vs-self-funded-search-vs-independent-sponsor',
  'do-you-need-an-mba-for-a-search-fund-a-20-deal-buyer-vs-the-data',
  'should-you-start-a-search-fund',
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export type BlogFaq = { q: string; a: string };

export type BlogMeta = {
  title: string;
  seoTitle?: string; // exact <title> tag when it should differ from the H1/title
  subtitle?: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  readTime: string;
  wordCount?: number;
  image?: string;
  keywords?: string[];
  faqs?: BlogFaq[];
  about?: string[];
};

export const BLOG_META: Record<BlogSlug, BlogMeta> = {
  'buying-family-owned-business-india': {
    title: 'Buying a Family-Owned Business in India',
    subtitle: 'What First-Time Buyers Need to Know',
    description:
      "Family-owned businesses make up most SME listings in India. Here's what makes acquiring one different: succession dynamics, informal records, and diligence red flags.",
    author: 'Dev Shah',
    datePublished: '2026-07-25',
    category: 'Buyer Guides',
    readTime: '7 min',
    wordCount: 1250,
    image: '/images/blogs/family-business-acquisition/family-business-acquisition-hero.webp',
    keywords: [
      // Primary
      'buying a family owned business in India',
      'how to buy a family business in India',
      // Secondary (from brief)
      'family business succession sale India',
      'acquiring family business India due diligence',
      'buying business from retiring owner India',
      'family business transition acquisition',
      // Due diligence angle
      'due diligence family business India',
      'family business due diligence checklist',
      'informal financial records due diligence India',
      'verbal agreement due diligence business acquisition',
      'owner dependency risk business acquisition',
      // Seller/succession angle
      'succession planning business sale India',
      'retiring business owner sale India',
      'promoter family business sale India',
      'family business owner negotiation India',
      // Buyer intent
      'first-time business buyer India guide',
      'SME acquisition checklist India',
      'how to negotiate with family business owner',
      'buying SME from family owner India',
      'acquiring a business from retiring founder India',
      // Structuring
      'family business transition consulting',
      'seller financing family business acquisition',
      'earnout family business acquisition India',
      'employee retention business acquisition India',
      // Advisory
      'buy-side advisory family business India',
      'M&A advisory SME acquisition India',
      'acquisition entrepreneurship India family business',
      // Long-tail
      'red flags buying a family business',
      'family business valuation informal records India',
      'family owned SME acquisition India',
    ],
    faqs: [
      {
        q: 'Is buying a family-owned business riskier than buying a corporate-run one?',
        a: 'Not inherently riskier, but the risks are different in kind. Financial informality and owner/employee dependency need more attention; outright fraud or complex corporate liabilities are often less of a factor than in larger, professionally-run targets.',
      },
      {
        q: 'How do I value a family business with informal financial records?',
        a: 'Start by reconciling all available records, bank statements, tax filings, and GST returns, against what the seller states verbally. A CA experienced in SME valuations can normalize the numbers, but expect the process to take longer and require more documentation requests than a business with clean, audited books.',
      },
      {
        q: 'Will employees stay after a family business is sold to an unrelated buyer?',
        a: 'It depends heavily on how the transition is handled. Direct conversations with key staff before closing, retention agreements for critical roles, and a visible transition period with the outgoing owner all improve the odds significantly compared to a sudden, unexplained ownership change.',
      },
      {
        q: 'Should I be concerned if a family business seller wants to stay on after the sale?',
        a: "Not necessarily. A defined transition period, where the seller supports the handover of relationships and knowledge, is often valuable. The concern is a seller who wants to stay indefinitely involved in decisions, which usually signals they haven't actually committed to the exit.",
      },
    ],
    about: [
      'Family-owned business acquisition India',
      'SME succession planning India',
      'Buy-side due diligence India',
      'First-time business buyer guidance',
    ],
  },
  'what-is-a-search-fund': {
    title: 'What Is a Search Fund?',
    subtitle: "A Beginner's Guide to Buying a Business With Other People's Money",
    description:
      "A plain-English guide to search funds: how search and acquisition capital work, the 1.5x step-up, searcher equity vesting, target company criteria, and where the model fits — and doesn't — in India.",
    author: 'Dev Shah',
    datePublished: '2026-07-28',
    category: 'Fundamentals',
    readTime: '9 min',
    wordCount: 2150,
    image: '/images/blogs/what-is-a-search-fund/what-is-a-search-fund-hero.webp',
    keywords: [
      // Primary
      'what is a search fund',
      'search fund model',
      'search fund meaning',
      'how does a search fund work',
      'entrepreneurship through acquisition',
      // Explainer / beginner intent
      'search fund explained',
      'search fund for beginners',
      'what is entrepreneurship through acquisition',
      'ETA meaning business',
      'buying a business with other people\'s money',
      // Structure
      'search capital vs acquisition capital',
      'search fund step up ratio',
      'search fund right of first refusal',
      'traditional search fund vs self funded search',
      'self funded search fund',
      'how much money do you need to start a search fund',
      // Economics
      'search fund searcher equity',
      'how much equity does a searcher get',
      'search fund equity vesting',
      'search fund IRR hurdle',
      'search fund vesting tranches',
      // Target profile
      'search fund acquisition criteria',
      'search fund target company profile',
      'search fund EBITDA requirements',
      // Geography
      'search funds in India',
      'entrepreneurship through acquisition India',
      'ETA India',
      'search fund India example',
      'self funded search India',
      // Institutional
      'Stanford search fund model',
      'search fund investors',
      'search fund advisory India',
    ],
    faqs: [
      {
        q: 'What is a search fund?',
        a: "An investment vehicle, conceived in 1984 at Stanford Graduate School of Business, through which investors financially support an entrepreneur's efforts to locate, acquire, manage and grow a privately held company. The entrepreneur raises a small fund to finance a roughly two-year search, then raises a larger amount from the same investors to buy the company they find, and becomes its CEO.",
      },
      {
        q: 'How does a search fund work?',
        a: 'In four stages: raise search capital from six to ten investors; spend about 20 months finding a company; return to those investors to fund the acquisition, usually alongside debt; then run the business as CEO for five to seven years before selling.',
      },
      {
        q: 'How much money do you need to start a search fund?',
        a: 'Typically none of your own for a traditional search. Investors provide roughly $400,000 to $500,000 (~₹3.9 to ~₹4.8 crore) of search capital covering about 24 months of salary and expenses. A self-funded search reverses this: you cover your own costs and retain much more equity.',
      },
      {
        q: 'How much equity does a searcher get?',
        a: 'Median equity at acquisition is 25%, rising to 30-35% if performance targets are met. It vests in three tranches: one at closing, one over four to five years of operating, and one at exit tied to the IRR delivered. Below 20% IRR the final tranche pays nothing.',
      },
      {
        q: 'What kind of business does a search fund buy?',
        a: 'Profitable, unglamorous companies with EBITDA above $2M (~₹19.3 crore), margins above 15%, 60% or more recurring revenue, simple operations, low capital expenditure, and an industry growing at least twice as fast as GDP.',
      },
      {
        q: 'What is entrepreneurship through acquisition?',
        a: 'The broader idea of becoming an entrepreneur by buying an existing business rather than founding one. A search fund is the most formalised version of it, but self-funded acquisitions and holding companies pursue the same path.',
      },
      {
        q: 'Do search funds exist in India?',
        a: 'The formal model is concentrated in the US and Canada, which is where the defining Stanford dataset is drawn from. Acquisition activity in India is real but often happens at deal sizes below the classic search fund range, where self-funded structures fit better than a funded search.',
      },
    ],
    about: [
      'Search fund model',
      'Entrepreneurship through acquisition',
      'Search fund structure and economics',
      'Entrepreneurship through acquisition in India',
    ],
  },
  'analyst-diaries-direct-mail-deal-origination': {
    title: "Analyst Diaries: 2,000 Letters In, Here's the Actual Playbook",
    subtitle: "Inside Kautilya's Direct-Mail Deal Origination Process for a Buy-Side Client",
    description:
      "How Kautilya runs direct-mail deal origination for a buy-side client: 2,000 letters, person-verified decision-makers, sub-10% RTS, and a mandate that shifted mid-campaign.",
    author: 'Sidharth',
    datePublished: '2026-09-04',
    category: 'Deal Origination',
    readTime: '6 min',
    wordCount: 1650,
    keywords: [
      // Primary
      'direct mail deal origination',
      'buy-side deal origination',
      'cold outreach for search funds',
      'direct mail outreach for acquisition entrepreneurs',
      // Process / operations
      'off-market deal sourcing India',
      'M&A lead verification process',
      'decision maker outreach SME acquisition',
      'letter campaign for business acquisition',
      'physical mail outreach M&A',
      'Apollo lead sourcing M&A',
      // Metrics
      'RTS rate direct mail campaign',
      'response rate cold outreach M&A',
      'deal origination approval process',
      // Search fund / ETA angle
      'search fund deal sourcing letters',
      'entrepreneurship through acquisition deal sourcing',
      'search fund lead generation',
      // Advisory
      'buy-side advisory deal origination India',
      'Kautilya deal origination',
      'M&A sourcing case study India',
      // Long-tail
      'how to find acquisition targets in India',
      'how to source off-market businesses for acquisition',
      'finding real decision maker family business acquisition',
    ],
    faqs: [
      {
        q: 'What is direct-mail deal origination?',
        a: "Direct-mail deal origination is off-market outreach where a buy-side team mails physical letters — not cold emails — to verified decision-makers at businesses that fit an acquisition mandate, to open a conversation about a potential sale. It's one channel inside a broader buy-side deal sourcing process, usually paired with digital sourcing and direct relationship outreach.",
      },
      {
        q: 'Is direct mail effective for sourcing acquisition targets?',
        a: "It can be, when every lead is individually verified rather than mail-merged. The main advantage over cold email is that it forces person-by-person research — confirming the actual decision-maker, business fit, and address — before a letter ever ships, which cuts down on wasted outreach to the wrong person or a defunct listing.",
      },
      {
        q: 'What is a good RTS (return to sender) rate for an M&A outreach letter campaign?',
        a: "Under 10% is a reasonable benchmark for a well-verified list. Most RTS on a campaign like this comes from businesses that haven't updated their listed address online, not from bad list-building — which is why address verification is a distinct step before mailing, separate from confirming the business and decision-maker.",
      },
      {
        q: 'How do you find the real decision-maker at a small or family-owned business for cold outreach?',
        a: "Check in order: founder, then managing director, then co-founder, then CEO — because enrichment tools like Apollo frequently list a founder who has since stepped back from day-to-day operations. Verifying against the business's own website and recent activity, rather than trusting the enrichment tool's tag, catches cases where an adult child or a hired MD is now the actual decision-maker.",
      },
      {
        q: 'Why would a buy-side firm change its acquisition mandate mid-campaign?',
        a: 'Because sector-level opportunity only becomes clear once outreach is underway. Early results and client feedback can reveal that a sector assumed to be attractive (e.g. construction, solar) is too competitive or too cyclical, while an underweighted sector (e.g. metal fabrication, height-compliance and rope-access services) turns out to have more genuine acquisition opportunity than the original mandate assumed.',
      },
    ],
    about: [
      'Buy-side deal origination',
      'Direct mail M&A outreach',
      'Off-market deal sourcing India',
      'Search fund deal origination',
    ],
  },
  'how-to-find-acquisition-capital': {
    title: 'How to Find Acquisition Capital to Buy a Business',
    subtitle: 'Where Funding Actually Comes From, and the Work to Do Before Your First Investor Conversation',
    description:
      'Where acquisition capital actually comes from, what investors underwrite before they read your plan, and the work you must finish before your first investor conversation.',
    author: 'Dev Shah',
    datePublished: '2026-09-12',
    category: 'Buyer Guides',
    readTime: '10 min',
    wordCount: 2400,
    keywords: [
      // Primary
      'how to find acquisition capital',
      'how to fund a business acquisition',
      'raising capital to buy a business',
      // Secondary (from brief)
      'search fund investors',
      'ETA funding',
      'family office acquisition funding',
      // Structural / no-SBA angle
      'SBA equivalent outside US',
      'acquisition financing without SBA loan',
      'seller financing business acquisition',
      'asset-backed lending business acquisition',
      'promoter guaranteed loan business acquisition',
      // Investor underwriting angle
      'how investors evaluate searchers',
      'search fund investor underwriting criteria',
      'what investors look for in a searcher',
      // Sourcing / capital sequencing
      'seller conversations before raising capital',
      'deal origination before fundraising',
      'off-market deal sourcing for investors',
      'search fund dealflow pipeline',
      // Geography
      'business acquisition funding India',
      'acquisition capital outside United States',
      'cross border acquisition funding',
      'foreign investment business acquisition compliance',
      // Search fund / ETA
      'search fund capital raise',
      'entrepreneurship through acquisition funding',
      'self funded search capital',
      'traditional search fund capital raise',
      // Institutional
      'Stanford search fund returns',
      'IESE search fund study',
      'search fund IRR data',
      // Long-tail
      'how much equity to raise for business acquisition',
      'family office HNI capital for business acquisition',
      'how to pitch investors for business acquisition',
    ],
    faqs: [
      {
        q: 'How much capital do you need to buy a business?',
        a: "It depends entirely on deal size and structure, but outside markets with mature acquisition-lending infrastructure, assume you'll be funding most of the purchase price with equity rather than debt. Model conservatively and confirm lending appetite before committing to a structure.",
      },
      {
        q: 'Can foreign investors fund a business acquisition?',
        a: 'Often yes, subject to exchange control regulations, sector caps, valuation and pricing requirements, and reporting obligations that vary by country. This is genuinely complex and jurisdiction-specific. Engage counsel before accepting foreign capital into any acquisition vehicle.',
      },
      {
        q: 'Do search funds exist outside the US?',
        a: 'Yes. The model is well established internationally and tracked by institutions like IESE and Stanford. The maturity of the local ecosystem varies a lot by market. International funders who back searchers in other markets are often the most realistic institutional source, alongside local family offices and HNI capital that operate on a relationship basis rather than a standardised structure.',
      },
      {
        q: 'How many seller conversations should I have before approaching investors?',
        a: 'At least a dozen substantive ones, ideally twenty, concentrated in a single vertical. Quality matters more than count. A conversation where the owner disclosed their succession timeline and a revenue range is worth ten polite refusals.',
      },
      {
        q: 'Is there a government-backed lending programme for buying a business?',
        a: "In the US, yes: SBA lending. Almost everywhere else, no direct equivalent exists. Local small-business credit and guarantee schemes typically fund operations, equipment, and expansion for a business the promoter already owns, not the purchase of somebody else's equity. This absence is the main reason acquisition entrepreneurship remains comparatively rare outside the US, and why deals elsewhere tend to be structured equity-heavy.",
      },
      {
        q: "Will banks lend against a target's cash flows?",
        a: 'Generally no, not in the way US lenders do for small acquisitions. Many banking systems restrict lending against share acquisitions, so expect asset-backed facilities, promoter guarantees, seller financing, and private credit instead of cash-flow-based acquisition finance. Verify your specific situation with a banker early, before your structure depends on the answer.',
      },
      {
        q: 'Does my background matter more than my dealflow?',
        a: 'Background determines how quickly a conversation starts and on what terms. Dealflow determines whether it finishes. Neither substitutes for the other, but only one is within your control this week.',
      },
    ],
    about: [
      'Acquisition capital sourcing',
      'Search fund investor relations',
      'Business acquisition financing outside the US',
      'Entrepreneurship through acquisition funding',
    ],
  },
  'what-is-sell-side-ma-advisory': {
    title: 'Sell-Side M&A Advisory: How It Works, and How Buyers Should Deal With It',
    seoTitle: "Sell-Side Advisory: Process, Fees and a Buyer's Playbook",
    subtitle: 'How sell-side advisors run a company sale, what they charge, and what a buyer should do at each stage',
    description:
      'How a sell-side M&A advisor runs a company sale, what they charge, and how a buyer should handle the teaser, CIM, IOI, LOI and auction at each stage.',
    author: 'Dev Shah',
    datePublished: '2026-09-16',
    dateModified: '2026-11-23',
    category: 'Seller Guides',
    readTime: '11 min',
    wordCount: 3250,
    keywords: [
      // Primary
      'sell-side M&A advisory',
      'sell-side M&A process',
      'M&A advisor fees',
      'M&A advisor vs business broker',
      // Explainer / beginner intent
      'what is sell-side advisory',
      'sell-side advisory explained',
      'how does selling a business with an advisor work',
      'sell side vs buy side advisory',
      'buy-side advisor vs sell-side advisor',
      // Process
      'sell-side M&A process steps',
      'how to sell a business with an advisor',
      'confidential information memorandum CIM',
      'letter of intent business sale',
      // Cost / fees
      'M&A advisor retainer and success fee',
      'Lehman formula M&A fees',
      'investment banker fees business sale',
      'how much does it cost to sell a business',
      // Comparisons
      'business broker vs investment banker',
      'do I need an M&A advisor to sell my business',
      'sell-side advisor vs sell-side analyst',
      // Long-tail
      'when to hire an M&A advisor to sell',
      'selling a business with one buyer already',
      'how long does selling a business take with an advisor',
    ],
    faqs: [
      {
        q: 'Does the sell-side advisor work for the buyer?',
        a: "No. The sell-side advisor is hired and paid by the seller, and the success fee usually rises with the sale price. Treat their numbers as the seller's case, and check every important figure against the underlying statements yourself.",
      },
      {
        q: 'How should a buyer deal with a sell-side advisor?',
        a: 'Read the NDA closely before signing, rebuild earnings from the financial statements instead of relying on adjusted EBITDA, give indications of interest as a range with your assumptions written down, negotiate exclusivity and working capital terms in the LOI, and set a walk-away price before any best-and-final round.',
      },
      {
        q: 'What is sell side advisory?',
        a: 'Sell side advisory is a service in which an M&A advisor represents the owner of a company in selling it: valuing the business, preparing marketing materials, approaching buyers confidentially, negotiating, and managing the deal to closing. It is usually paid as a retainer plus a success fee.',
      },
      {
        q: 'What is the Lehman formula?',
        a: 'A sliding-scale fee formula that pays 5% of the first $1 million, 4% of the second, 3% of the third, 2% of the fourth, and 1% of everything above $4 million. It remains in use in limited situations, mainly with finders, and modern advisors usually negotiate their own scale.',
      },
      {
        q: 'Is a sell-side M&A advisor the same as a sell-side analyst?',
        a: 'No. A sell-side analyst is a job in equity research, working for a brokerage and covering publicly traded stocks. It has nothing to do with selling a private company. A sell-side M&A advisor is the role described in this article.',
      },
      {
        q: 'How much do sell-side M&A advisors charge?',
        a: 'Typically a retainer plus a success fee at closing, with the success fee often set on a sliding scale that decreases as the deal size increases. Exact percentages vary by advisor, deal size, and negotiating leverage.',
      },
      {
        q: "What's the difference between an M&A advisor and a business broker?",
        a: 'Mainly deal size and process. Business brokers usually handle smaller, simpler sales to individual buyers. M&A advisors run structured, competitive processes aimed at larger companies and institutional buyers, usually for bigger deals.',
      },
      {
        q: 'What is a CIM?',
        a: 'A Confidential Information Memorandum — a detailed document describing the business, its finances, and its opportunity, shared with serious buyers after an initial teaser and confidentiality agreement.',
      },
      {
        q: 'How long does a sell-side M&A process take?',
        a: 'Published guides put it at roughly 6 to 12 months from hiring an advisor to closing, with several months of preparation before any buyer hears about the sale. It depends heavily on the size of the company and how ready it is.',
      },
      {
        q: 'What is the difference between an IOI and an LOI?',
        a: 'An indication of interest (IOI) is an early, non-binding price range a buyer gives after reading the CIM. A letter of intent (LOI) comes later, names a buyer and price and terms, and usually binds the parties only on confidentiality and exclusivity.',
      },
      {
        q: 'What is a quality of earnings report?',
        a: 'An accountant-prepared review of a company\'s earnings that tests whether reported profit is real and repeatable. Sellers sometimes commission one before going to market so buyers find fewer surprises in diligence. Published cost estimates vary widely, roughly $15,000 to $75,000 depending on the source and company size.',
      },
      {
        q: 'What is exclusivity in an M&A deal?',
        a: 'A period after the LOI is signed, one source puts it at 30 to 90 days, during which the seller agrees not to negotiate with other buyers while the chosen buyer completes due diligence.',
      },
      {
        q: 'Do I need a sell-side advisor if I already have a buyer?',
        a: "Not necessarily a full sale process. With one buyer already lined up, a lawyer and an independent valuation are usually more useful than a full buyer search, since there's no group of buyers to create competition among.",
      },
    ],
    about: [
      'Sell-side M&A advisory',
      'Business sale process',
      'M&A advisor fee structures',
      'Business broker vs investment banker',
    ],
  },
  'what-is-pocket-deals': {
    title: 'What Is Pocket Deals?',
    subtitle: "The Deal Flow Behind Kautilya's Acquisition Newsletter",
    description:
      "Pocket Deals is Kautilya's newsletter for acquisition opportunities under $100K, sourced from public marketplaces and off-market inbound. Here's how it's structured, what buyers receive, and why it exists.",
    author: 'Dev Shah',
    datePublished: '2026-09-25',
    category: 'Deal Sourcing',
    readTime: '5 min',
    wordCount: 1150,
    keywords: [
      // Primary
      'Pocket Deals newsletter',
      'Kautilya Pocket Deals',
      'acquisition opportunities under $100K',
      // Explainer / beginner intent
      'what is Pocket Deals',
      'small business acquisition newsletter',
      'off-market deal newsletter',
      'micro acquisition deal flow',
      // Sourcing angle
      'off-market business deals India',
      'inbound deal flow M&A',
      'proprietary deal sourcing newsletter',
      'on-market vs off-market acquisition deals',
      // Buyer intent
      'small acquisition opportunities for buyers',
      'buy a small business under $100K',
      'verified small business listings',
      'CIM for small acquisitions',
      // Pricing / model
      'off-market deal subscription',
      'deal newsletter subscription fee',
      'no fee business marketplace',
      // Comparisons
      'Pocket Deals vs business marketplace',
      'search fund deal flow newsletter',
      // Long-tail
      'newsletter for buying small businesses',
      'weekly acquisition deal newsletter',
      'exclusive off-market business listings',
    ],
    faqs: [
      {
        q: 'What is Pocket Deals?',
        a: "Pocket Deals is a newsletter from Kautilya, a buy-side deal origination firm, featuring acquisition opportunities valued under $100K. It surfaces businesses from public marketplaces and off-market sources that don't fit Kautilya's current client mandates.",
      },
      {
        q: 'How much does Pocket Deals cost?',
        a: "On-market deals sourced from public listings are free, with Kautilya adding verification value. Off-market deals — exclusive opportunities sourced through inbound — cost $100 a month. There are no fees to buyers or sellers on either tier; the subscription is the only revenue.",
      },
      {
        q: 'Why did Kautilya start Pocket Deals?',
        a: "Kautilya's team found that more than five off-market businesses reach them through inbound alone every week, but not every one has a matching buyer client at that moment. Rather than let viable opportunities disappear, they built a newsletter to distribute them.",
      },
      {
        q: 'What do buyers actually receive with a Pocket Deals listing?',
        a: "Each opportunity comes with a full CIM (Confidential Information Memorandum) — the same depth of documentation Kautilya would build for a client mandate, not a one-line pitch.",
      },
      {
        q: 'Is Pocket Deals live yet?',
        a: "As of September 2026, the deal-sourcing infrastructure exists and documentation for opportunities is complete, but the newsletter format itself is still being refined ahead of its first issue.",
      },
    ],
    about: [
      'Off-market deal sourcing',
      'Small business acquisition newsletter',
      'Buy-side deal origination',
      'Confidential Information Memorandum (CIM)',
    ],
  },
  'what-is-a-private-placement-memorandum': {
    title: 'What Is a Private Placement Memorandum (PPM)? A Complete Guide',
    subtitle: 'What a PPM Is, Why It Exists, What Goes Inside One, and How It Differs From a Prospectus or a Pitch Deck',
    description:
      'A private placement memorandum (PPM) is the disclosure document for a private securities offering. What goes in one, SEC Rule 506(b) limits, and how it differs from a prospectus.',
    author: 'Dev Shah',
    datePublished: '2026-09-28',
    dateModified: '2026-11-04',
    category: 'Fundamentals',
    readTime: '10 min',
    wordCount: 2800,
    keywords: [
      // Primary
      'what is a private placement memorandum',
      'private placement memorandum guide',
      'PPM meaning',
      // Secondary
      'PPM vs prospectus',
      'private placement memorandum sections',
      'how to raise private capital',
      // Explainer / beginner intent
      'private placement memorandum explained',
      'what is a PPM in finance',
      'private placement memorandum for beginners',
      // Structure / contents
      'what is in a private placement memorandum',
      'PPM risk factors section',
      'use of proceeds PPM',
      'PPM offering summary',
      'PPM subscription agreement',
      // Comparisons
      'PPM vs business plan',
      'PPM vs pitch deck',
      'private placement memorandum vs prospectus',
      // Who uses it
      'who uses a private placement memorandum',
      'PPM hedge fund real estate syndication',
      'search fund PPM',
      'private equity fund PPM',
      // Process / cost
      'who writes a private placement memorandum',
      'how much does a PPM cost',
      'private placement memorandum lawyer',
      // Regulatory
      'accredited investor private placement',
      'securities exemption private offering',
      'private placement exemption by country',
      // Long-tail
      'is a PPM legally required',
      'how long is a private placement memorandum',
      'does a PPM guarantee investment is safe',
      'private placement memorandum for acquisition capital',
    ],
    faqs: [
      {
        q: 'How many investors can invest under Rule 506(b)?',
        a: 'Per the SEC, an unlimited number of accredited investors and up to 35 non-accredited investors in any 90-calendar day period, with no general solicitation. Non-accredited investors must receive disclosure documents and specified financial statement information.',
      },
      {
        q: 'Is a private placement memorandum legally required?',
        a: "It depends on the jurisdiction and the exemption being used. Some private-offering exemptions require formal written disclosure along the lines of a PPM; others don't mandate a specific document but still expect the issuer to avoid misleading investors, which in practice means preparing something functionally equivalent anyway.",
      },
      {
        q: 'Who can invest through a PPM?',
        a: 'Typically accredited, sophisticated, or qualified investors, depending on how the relevant jurisdiction defines eligibility for private offerings. These categories are usually based on income, net worth, professional experience, or institutional status.',
      },
      {
        q: 'How long is a typical PPM?',
        a: 'Anywhere from twenty to over a hundred pages, depending on the complexity of the offering and the depth of the risk factors and financial disclosures required.',
      },
      {
        q: 'Is a PPM the same as a prospectus?',
        a: "No. Both disclose an offering to investors, but a prospectus is for a public, registered offering and is typically reviewed by a regulator before use. A PPM is for a private, exempt offering and generally isn't filed for public review in the same way.",
      },
      {
        q: 'Does a PPM guarantee the investment is safe?',
        a: "No. A PPM discloses risk; it doesn't eliminate it. A long and thorough risk factors section is often a sign of a well-prepared document, not a red flag about the deal itself.",
      },
      {
        q: 'What is the difference between Rule 506(b) and Rule 506(c)?',
        a: 'Rule 506(b) bans general solicitation but allows up to 35 non-accredited investors. Rule 506(c) permits broad advertising, but every purchaser must be an accredited investor and the issuer must take reasonable steps to verify that status.',
      },
      {
        q: 'Who counts as an accredited investor?',
        a: 'Under 17 CFR 230.501(a), a person with net worth above $1 million (excluding the primary residence), or income above $200,000 individually or $300,000 jointly in each of the last two years, or a qualifying professional credential. Entities generally need more than $5 million in assets.',
      },
      {
        q: 'Do I have to file anything with the SEC for a Rule 506 offering?',
        a: 'Yes. The issuer files a Form D notice within 15 days after the first sale, meaning the date the first investor is irrevocably committed. The SEC charges no fee for it, and states may require their own notice filings and fees.',
      },
      {
        q: 'Who writes a PPM?',
        a: 'Usually a collaboration between the issuer, who supplies the business and financial details, and a securities attorney, who drafts or reviews the legal, regulatory, and risk disclosure language.',
      },
    ],
    about: [
      'Private placement memorandum',
      'Private securities offering disclosure',
      'Raising acquisition capital',
      'PPM vs prospectus vs pitch deck',
    ],
  },
  'buy-side-m-a-advisory-what-it-is-and-how-it-works': {
    title: 'Do You Need Buy-Side M&A Advisory? What It Does, the 7 Steps and the Fees',
    seoTitle: 'Do You Need Buy-Side M&A Advisory? Fees and the 7 Steps',
    subtitle: 'A Plain-Language Guide for Business Buyers',
    description: 'Do you need buy-side M&A advisory? A neutral guide to what advisors do, the 7-step process, how retainers and success fees work, and when to skip one.',
    author: 'Dev Shah',
    datePublished: '2026-10-12',
    dateModified: '2026-11-11',
    category: 'M&A Advisory',
    readTime: '10 min',
    wordCount: 2322,
    keywords: [
      'buy-side M&A advisory',
      'what is buy-side M&A advisory',
      'buy-side M&A process',
      'buy-side M&A advisor fees',
      'buy-side vs sell-side M&A',
      'buy-side advisory India',
      'do I need a buy-side advisor',
      'buy-side advisor vs business broker',
      'buy-side success fee and retainer',
    ],
    faqs: [
      {
        q: 'Is a buy-side M&A advisor the same as a buy-side analyst?',
        a: 'No. A buy-side analyst works for an investment fund and researches listed securities. A buy-side M&A advisor helps a buyer acquire a whole company. They are different jobs with a similar name.',
      },
      {
        q: 'How much do buy-side M&A advisors charge?',
        a: 'Usually a monthly retainer plus a success fee at closing, often with the retainer credited against the fee and a minimum fee for small deals. Published percentages vary widely by source and deal size and mostly reflect US practice, so ask for the schedule in writing.',
      },
      {
        q: 'What is the difference between a buy-side advisor and a business broker?',
        a: 'A business broker mainly represents sellers, listing a business and finding a buyer for a commission. A buy-side advisor represents the buyer and searches proactively for targets that may not be listed anywhere.',
      },
      {
        q: 'How long does a buy-side process take?',
        a: 'One published estimate is 6 to 24 months from mandate to closing. It depends mostly on how narrow your criteria are and how quickly owners respond.',
      },
      {
        q: 'Does a buy-side advisor negotiate the price?',
        a: 'Yes. They typically help set a valuation range, negotiate the price and structure in the LOI, and manage earnouts and risk terms. They do not replace your lawyer, who drafts and reviews the binding agreements.',
      },
      {
        q: 'Do I need a buy-side advisor to buy a small business in India?',
        a: 'Not necessarily. For a small deal, doing the sourcing yourself and hiring a lawyer and chartered accountant for structure and diligence is often better value, since advisor minimum fees can be large relative to the deal.',
      },
      {
        q: 'Can the same advisor act for both the buyer and the seller?',
        a: 'It can happen, but it is a conflict of interest and should be disclosed in writing before you sign. Ask directly whether the advisor is being paid by, or has any arrangement with, the seller.',
      },
    ],
    about: [
      'Mergers and acquisitions',
      'Buy-side M&A advisory',
      'M&A advisory fees',
      'Acquisitions in India',
    ],
  },
  'analyst-diaries-kautilya-seo-from-zero': {
    title: 'Analyst Diaries: How I Built Kautilya\'s SEO From Zero',
    subtitle: 'The research, the fixes and the results behind a three-site search strategy for a buy-side firm',
    description: 'How Kautilya built SEO from zero for a buy-side firm: 30 competitors studied, three sites with separate jobs, how to read Search Console data, and early results.',
    author: 'Sidharth',
    datePublished: '2026-10-15',
    category: 'Analyst Diaries',
    readTime: '10 min',
    wordCount: 3139,
    image: '/images/blogs/analyst-diaries-kautilya-seo-from-zero/analyst-diaries-kautilya-seo-from-zero-hero.webp',
    keywords: [
      'SEO for search fund firms',
      'SEO for M&A advisory firm',
      'buy-side advisory SEO India',
      'how to read Google Search Console',
      'Search Console impressions clicks CTR average position',
      'brand vs non-brand queries',
      'competitor content analysis SEO',
      'deal sourcing SEO India',
      'SEO strategy three sites',
      'AI search readiness llms.txt',
      'Kautilya SEO case study',
      'search fund marketing India',
    ],
    faqs: [
      {
        q: 'What does BIB stand for?',
        a: 'Buy a Business India. It is our site for first-time buyers and search fund candidates.',
      },
      {
        q: 'What does SIB stand for?',
        a: 'Sell Indian Business. It is our site for owners considering a sale.',
      },
      {
        q: 'Why does a search fund firm need SEO?',
        a: 'Searchers research alone for weeks. Clear answers to their questions put Kautilya in front of them before they start talking to advisors.',
      },
      {
        q: 'Why blogs and a newsletter?',
        a: 'A blog builds a lasting page for each question our clients ask. The newsletter covers live deals while people are searching for them and gives readers a reason to come back.',
      },
      {
        q: 'Why run three sites instead of one?',
        a: 'A single domain ranking for buyer and seller questions ends up with its own pages competing. Separate sites give each reader one clear destination.',
      },
      {
        q: 'How long until SEO shows results?',
        a: 'Expect 6 to 8 weeks before a page settles, and longer for a new site.',
      },
      {
        q: 'Is Kautilya getting leads from SEO yet?',
        a: 'We cannot say yet. Positions are improving, but we have not tied any enquiry to search.',
      },
    ],
    about: [
      'Search engine optimization',
      'Search funds',
      'Buy-side M&A advisory',
      'Generative engine optimization',
    ],
  },
  'ebitda-multiples-in-india-what-businesses-actually-sell-for': {
    title: 'EBITDA Multiples in India: What Businesses Actually Sell For',
    subtitle: 'A Plain-Language Guide for Business Buyers and Sellers',
    description: 'A plain-language guide to EBITDA multiples in India: listed sector medians, what small and mid-sized private businesses sell for, and how to use a multiple.',
    author: 'Dev Shah',
    datePublished: '2026-10-23',
    category: 'M&A Advisory',
    readTime: '10 min',
    wordCount: 2357,
    keywords: [
      'EBITDA multiples in India',
      'EBITDA multiple by industry India',
      'EV/EBITDA India',
      'business valuation multiples India',
      'how to value a small business in India',
      'SME valuation India',
      'what is an EBITDA multiple',
      'EBITDA multiple for small business India',
    ],
    faqs: [
      {
        q: 'What is a good EBITDA multiple in India?',
        a: 'It depends on size and sector. Listed Indian sector medians ran from about 6x to 27x on 30 June 2026. Small private companies are quoted anywhere from 2x to 8x across published guides. A good multiple is one that matches comparable businesses of your size and quality.',
      },
      {
        q: 'What EBITDA multiple do small businesses in India sell for?',
        a: 'Published guides give 2x to 5x, 3x to 6x and 3x to 8x, depending on the source. The low end is for owner-dependent businesses. The high end is for companies with contracted revenue and real management depth. None of these ranges comes from a published transaction database.',
      },
      {
        q: 'Is EV/EBITDA the same as the price I will pay?',
        a: 'No. Enterprise value is the value of the operating business. The price for the shares is roughly enterprise value minus debt plus cash, then adjusted for debt-like items and working capital.',
      },
      {
        q: 'Why are listed multiples so much higher than private ones?',
        a: 'Listed companies are larger, easier to sell and more transparent, and investors pay for that. One Indian valuation tool suggests a private-market discount of 20 to 30 percent, though I could not verify that against deal data.',
      },
      {
        q: 'Which sector has the highest EBITDA multiple in India?',
        a: 'Among the listed sectors in Kroll\'s June 2026 report, health care facilities and services had the highest median at 27.2x, followed by industrial machinery at 25.6x and pharmaceuticals and biotechnology at 22.4x. Energy was lowest at 5.8x. These are listed companies only.',
      },
      {
        q: 'Should I use EBITDA or SDE to value my business?',
        a: 'Use EBITDA when professional managers run the business. Use SDE when the owner works in it and the buyer will step into that role, because SDE adds back the owner\'s full pay.',
      },
      {
        q: 'Do EBITDA multiples change over time?',
        a: 'Yes. Listed Indian application software went from a 24.2x median in December 2025 to 18.2x in June 2026, while pharmaceuticals went from 19.0x to 22.4x. Check the date on any multiple you rely on.',
      },
      {
        q: 'Where can I find real Indian private deal multiples?',
        a: 'They are hard to find because most private deals are confidential. Ask an adviser for closed deals in your sector and size range, and treat any single figure as indicative.',
      },
    ],
    about: [
      'EBITDA multiples',
      'Business valuation',
      'Mergers and acquisitions in India',
    ],
  },
  'timeline-of-a-search-fund-from-raise-to-acquisition': {
    title: 'Timeline of a Search Fund: From Raise to Acquisition',
    subtitle: 'How Search Funds Raise Money and How Long It Takes to Close a Deal',
    description: 'How search funds raise search capital and acquisition capital, and a realistic timeline for closing a deal, from launch to acquisition.',
    author: 'Dev Shah',
    datePublished: '2026-10-30',
    category: 'Fundamentals',
    readTime: '4 min',
    wordCount: 722,
    keywords: [
      'search fund timeline',
      'how long does a search fund take',
      'how search funds raise money',
      'search capital vs acquisition capital',
      'search capital',
      'acquisition capital',
      'search fund investors',
      'search fund due diligence',
      'search fund financing',
      'entrepreneurship through acquisition timeline',
    ],
    faqs: [
      {
        q: 'How much money does a search fund need to raise?',
        a: 'Search capital is typically $300,000 to $500,000. Acquisition capital is far larger and depends on deal size, usually structured as 70–80% debt and 20–30% equity.',
      },
      {
        q: 'How long does it take to close a search fund acquisition?',
        a: 'From the start of the search to closing a deal, most searchers take 20–24 months. The search itself (sourcing and negotiating) is usually the longest single phase.',
      },
      {
        q: 'Do search capital investors automatically invest in the acquisition?',
        a: 'Not automatically, but they typically hold the first right of refusal on the acquisition round, so most do participate if the deal fits their mandate.',
      },
      {
        q: 'What is the difference between search capital and acquisition capital?',
        a: 'Search capital funds the searcher\'s time and expenses while hunting for a business. Acquisition capital funds the actual purchase price once a target is found, and is raised separately for each deal.',
      },
      {
        q: 'Why does a search fund rarely close faster than 20–24 months?',
        a: 'Sourcing takes time because most searchers review hundreds of businesses to find a handful worth pursuing. Due diligence can\'t be rushed without raising risk. Financing can\'t meaningfully start earlier, because lenders and equity investors need the diligence findings before committing capital.',
      },
      {
        q: 'What happens after a search fund acquires a company?',
        a: 'The searcher typically becomes CEO and operates the business directly, commonly for 4 to 7 years, before pursuing an exit.',
      },
    ],
    about: [
      'Search fund timeline',
      'Search capital and acquisition capital',
      'Search fund financing structure',
      'Entrepreneurship through acquisition',
    ],
  },
  'how-to-buy-a-business-with-no-money-down': {
    title: 'How to Buy a Business With No Money Down: What Works in 2026',
    description: 'True zero-down is gone under the 2026 SBA rules. See how much cash a $1M to $5M business needs, how a 5% seller note works, and where the rest can come from.',
    author: 'Dev Shah',
    datePublished: '2026-11-06',
    category: 'Buying a Business',
    readTime: '10 min',
    wordCount: 2551,
    keywords: [
      'how to buy a business with no money down',
      'how much money do you need to buy a business',
      'SBA loan to buy a business down payment',
      'how to buy a business with seller financing',
      'seller note full standby',
      'buy a business with little money',
      'ROBS business acquisition',
      'buy a business with 5% down',
      'SBA 7(a) acquisition loan 2026',
      'standby seller note',
      'business acquisition stress test',
    ],
    faqs: [
      {
        q: 'Can you buy a business with no money down?',
        a: 'Not with an SBA loan alone. Since 1 October 2026, a first acquisition needs 10% equity, and at least half must be real cash. You can put in none of your own money only if an investor or fund supplies it.',
      },
      {
        q: 'How much money do I need to buy a $1 million business?',
        a: 'About $55,000 of your own cash with an SBA loan and a standby seller note: 5% of a total project cost of roughly $1.1M once closing costs and working capital are added.',
      },
      {
        q: 'What is the minimum down payment for an SBA business acquisition loan?',
        a: '10% of total project cost. Up to half can be a seller note on full standby, so your own cash can be as low as 5%.',
      },
      {
        q: 'Can I use my 401(k) to buy a business?',
        a: 'Yes, through a ROBS structure, and the money can count toward the SBA down payment. It avoids the early-withdrawal penalty but puts retirement savings into one business.',
      },
      {
        q: 'What is a seller note on full standby?',
        a: 'A loan from the seller that receives no principal or interest payments until the SBA loan is repaid, usually 10 years. Only full-standby notes count toward the SBA equity requirement.',
      },
      {
        q: 'Why would a seller agree to a standby note?',
        a: 'They still get about 95% of the price at closing, and the note is paid from the business’s future success. Framed as a bonus, it also keeps them invested in a good handover.',
      },
      {
        q: 'How much down payment do you need with seller financing only?',
        a: 'Typically a third or more of the price, with the seller’s loan repaid over 5 to 7 years.',
      },
    ],
  },
  'search-fund-vs-self-funded-search-vs-independent-sponsor': {
    title: 'Types of Search Funds: Traditional vs Self-Funded vs Independent Sponsor (2026)',
    seoTitle: 'Types of Search Funds: Traditional vs Self-Funded vs Independent Sponsor (2026)',
    description: 'The three ways to search for and buy a business, compared: who pays, who owns what, and what each one costs the searcher. With 2026 numbers.',
    author: 'Kautilya',
    datePublished: '2026-11-16',
    category: 'Search Funds',
    readTime: '12 min',
    wordCount: 2915,
    keywords: [
      'search fund vs independent sponsor',
      'search fund vs self funded',
      'self funded search vs independent sponsor',
      'fundless sponsor vs search fund',
      'self funded search economics',
      'traditional search fund vs self-funded search',
      'searcher equity',
      'independent sponsor fees and carried interest',
      'search fund equity vesting',
      'how search funds are funded',
      'search fund returns Stanford study',
      'self funded search India',
    ],
    faqs: [
      {
        q: 'What is the difference between a search fund and an independent sponsor?',
        a: 'A searcher raises money to find and buy one company, then runs it as CEO. An independent sponsor raises money deal by deal, earns fees and carried interest, and usually installs a separate CEO. They\'re often confused because neither starts with a committed fund.',
      },
      {
        q: 'What is the difference between a traditional and a self-funded search?',
        a: 'In a traditional search, investors pay for the search and your salary, and you earn up to 25% of the common equity. In a self-funded search you pay for the search yourself, use more debt and usually keep a majority of the company.',
      },
      {
        q: 'How much equity does a searcher get?',
        a: 'Up to 25% of the common equity for a solo searcher and up to 30% for a pair, vesting in three tranches: at closing, over time and on performance. Investors\' preferred equity is paid first, so your share of the sale is lower than the headline, about 19% in a typical illustration.',
      },
      {
        q: 'What is a step-up in a search fund?',
        a: 'A step-up credits search investors\' money at more than face value when a company is bought. At 1.5x, $1 of search capital becomes $1.50 in the acquisition round. If the search fails, the search capital is simply lost.',
      },
      {
        q: 'What do independent sponsors earn?',
        a: 'Usually a closing fee of about 1% to 2% of enterprise value, an annual management fee (often 3% to 5% of EBITDA when set that way), and carried interest of 10% to 25% above a hurdle.',
      },
      {
        q: 'Is a search fund the same as private equity?',
        a: 'No. A private equity fund raises a pool of money and buys many companies, run by hired management. A search fund backs one person to buy and run one company. An independent sponsor sits in between: private equity style, but without the fund.',
      },
      {
        q: 'Which model has the best returns?',
        a: 'Traditional search has the strongest record: 33.9% aggregate IRR and 4.75x in Stanford\'s 2026 study. Self-funded and sponsor deals have no comparable long-run study, so compare them on structure and fit.',
      },
      {
        q: 'Do search funds work outside the US?',
        a: 'Yes. IESE\'s 2026 report shows 30% IRR and 2.8x for funds outside the US and Canada, and 73% of concluded international searches ended in an acquisition. Stanford\'s 58% US and Canada figure is measured differently, across all funds since 1996, so don\'t compare the two directly.',
      },
      {
        q: 'Can I do a self-funded search in India?',
        a: 'Yes, but there\'s no SBA-style loan and RBI\'s 2026 acquisition-finance rules only cover large, profitable companies. Expect to put in more equity and rely on seller financing.',
      },
    ],
    about: [
      'Search funds',
      'Self-funded search',
      'Independent sponsors',
      'Search fund equity and returns',
    ],
  },
  'do-you-need-an-mba-for-a-search-fund-a-20-deal-buyer-vs-the-data': {
    title: 'Do You Need an MBA for a Search Fund? A 20-Deal Buyer vs the Data',
    subtitle: 'Mark Fleming has closed more than 20 acquisitions and says skip the MBA. We tested his view against the latest data from IESE and Yale.',
    description: 'No MBA is needed to buy a business, but search fund investors still favour one. A 20-deal buyer\'s view, tested against IESE and Yale data.',
    author: 'Dev Shah',
    datePublished: '2026-11-21',
    category: 'Search Funds',
    readTime: '9 min',
    wordCount: 2436,
    keywords: [
      'do you need an MBA for a search fund',
      'MBA for search fund',
      'search fund without an MBA',
      'do you need an MBA to buy a business',
      'is an MBA worth it for ETA',
      'entrepreneurship through acquisition MBA',
      'search fund investors MBA',
      'MBA-led search fund returns',
      'buy a business without an MBA',
      'SBA loan experience requirements',
      'Mark Fleming Owner Actions',
      'IESE search fund study',
      'Yale search fund study',
    ],
    faqs: [
      {
        q: 'Do you need an MBA to start a search fund?',
        a: 'No, but it’s the norm in traditional, investor-funded search funds: 71% of searchers outside the US and Canada have one (IESE, 2026). Without one, expect more work to win investors’ trust before you have a deal.',
      },
      {
        q: 'Can you start a search fund without an MBA?',
        a: 'Yes. About 4 in 10 of the newest international searchers in IESE’s 2026 study don’t have one. Self-funded searches and SBA-backed purchases are the easiest routes, because lenders and sellers judge experience, not degrees.',
      },
      {
        q: 'Do search fund investors require an MBA?',
        a: 'Not formally, but many prefer one, and Mark Fleming says some funds only back Harvard and Stanford graduates. In Yale’s 2026 study, non-MBA-led search fund companies returned far less, from a sample of only 14.',
      },
      {
        q: 'Does an MBA improve search fund returns?',
        a: 'MBA-led search funds have done better: a median IRR of about 28% against 1% for non-MBA-led ones in Yale’s 2026 study. Its authors say that doesn’t prove the degree is the cause.',
      },
      {
        q: 'What experience do you need to buy a business with an SBA loan?',
        a: 'Lenders want direct industry or solid management experience, good credit and enough cash; no degree is required. Mark Fleming looks for 10 to 15 years of work, 5 managing or selling, and industry experience.',
      },
      {
        q: 'What percentage of searchers have an MBA?',
        a: '71% of searchers outside the US and Canada, and 60% of the newest cohort, according to IESE’s 2026 study, down from 89% in its 2016 study.',
      },
    ],
    about: [
      'Search funds',
      'Entrepreneurship through acquisition',
      'MBA degree',
      'SBA acquisition loans',
    ],
  },
  'should-you-start-a-search-fund': {
    title: 'Should You Start a Search Fund? 20-Question Scorecard (2026)',
    subtitle: 'Search fund series, Part 4: the Searcher Readiness Scorecard',
    description: 'Should you start a search fund? Recent searchers buy a company about half the time. See the 2026 odds and CEO pay, then take our 20-question test.',
    author: 'Dev Shah',
    datePublished: '2026-11-28',
    category: 'Search Funds',
    readTime: '8 min',
    wordCount: 1742,
    keywords: [
      'should I start a search fund',
      'should you start a search fund',
      'is a search fund right for me',
      'searcher readiness scorecard',
      'search fund success rate',
      'search fund acquisition rate',
      'how many search funds acquire a company',
      'what percentage of search funds fail',
      'search fund risks',
      'how much do search fund CEOs make',
      'search fund CEO salary',
      'how much money do you need to start a search fund',
      'solo vs partnered search fund',
      'entrepreneurship through acquisition',
      'Stanford search fund study 2026',
    ],
    faqs: [
      {
        q: 'Should I start a search fund?',
        a: 'Only if a two-year search that ends without a deal wouldn\'t sink you, you\'d be a believable CEO of the business you want to buy, and your family is on board. Recent searchers in the US and Canada buy a company about half the time, so score yourself on the 20 questions in this guide first.',
      },
      {
        q: 'What percentage of search funds acquire a company?',
        a: '58% of concluded US and Canadian search funds, according to Stanford\'s 2026 study, and 48% of those launched from 2021 to 2024. Yale researchers put the recent run rate nearer 40%. IESE found 73% of concluded international searches ended in a deal.',
      },
      {
        q: 'How much do search fund CEOs make?',
        a: 'In a 2026 Yale study of 181 CEOs whose companies were later sold, the median salary was $200,000 and the median payout at exit was $6.0 million before tax. About one in five got less than $1 million, and searchers who never bought a company aren\'t in the data.',
      },
      {
        q: 'How much money do you need to start a search fund?',
        a: 'In a traditional search fund, investors fund the search, not you. Stanford found searchers raised a median $550,000 per searcher in 2024 and 2025 to cover a salary and costs. In a self-funded search you pay those costs yourself.',
      },
      {
        q: 'Is it better to search alone or with a partner?',
        a: 'Partners buy more often: 58% against 43% for solo searchers among funds launched from 2021 to 2024, per Stanford. You also share the equity, since a pair typically splits up to 30% where a solo searcher can earn up to 25%.',
      },
    ],
    about: [
      'Search funds',
      'Entrepreneurship through acquisition',
    ],
  },
};
