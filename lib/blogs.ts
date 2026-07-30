export const BLOG_SLUGS = [
  'buying-family-owned-business-india',
  'what-is-a-search-fund',
  'lockheed-ultra-maritime-acquisition-teardown',
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export type BlogFaq = { q: string; a: string };

export type BlogMeta = {
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  datePublished: string;
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
  'lockheed-ultra-maritime-acquisition-teardown': {
    title: "Lockheed Martin's Ultra Maritime Acquisition: A Deal Teardown",
    subtitle: 'What a $3.45B, 22x-EBITDA, All-Cash Deal Actually Tells You',
    description:
      "Lockheed Martin paid $3.45B for Ultra Maritime, an undersea-warfare business Advent International bought in 2022 and grew from $494M to an estimated $784M in revenue. Here's the deal, the multiple, and what it means for buy-side value creation.",
    author: 'Dev Shah',
    datePublished: '2026-07-30',
    category: 'Deal Teardowns',
    readTime: '5 min',
    wordCount: 850,
    image: '/images/blogs/lockheed-ultra-maritime-teardown/lockheed-ultra-maritime-teardown-hero.webp',
    keywords: [
      'Lockheed Martin Ultra Maritime acquisition',
      'Lockheed Martin Ultra Maritime deal',
      'Ultra Maritime Advent International',
      'Advent International Ultra Maritime exit',
      'Lockheed Martin $3.45 billion acquisition',
      'defense M&A deal teardown',
      'private equity value creation case study',
      'EBITDA multiple defense acquisition',
      'sonar systems acquisition',
      'undersea warfare systems M&A',
      'Rotary and Mission Systems Lockheed Martin',
      'all-cash M&A deal defense sector',
      'private equity exit strategic buyer',
      'buy-side advisory deal analysis',
      'M&A deal structure teardown',
    ],
    faqs: [
      {
        q: 'How much did Lockheed Martin pay for Ultra Maritime?',
        a: 'Lockheed Martin acquired Ultra Maritime from Advent International for $3.45 billion in an all-cash transaction, announced July 6, 2026.',
      },
      {
        q: 'What does Ultra Maritime do?',
        a: 'Ultra Maritime specializes in undersea warfare systems, including sonobuoys, sonar systems, torpedo-defence countermeasures, radar, and autonomous maritime sensing platforms.',
      },
      {
        q: 'How much did Advent International make on the deal?',
        a: "Advent's original 2022 purchase price for Ultra Maritime was never disclosed, so the actual return on investment cannot be calculated. What is known: Advent invested roughly $170 million over four years and grew revenue from $494 million (2023) to an estimated $784 million (2026), about 59% growth in three years.",
      },
      {
        q: 'Why did Lockheed Martin pay an above-market multiple?',
        a: "The deal carries an estimated 22x EBITDA multiple, well above the typical 10-15x range for defense transactions. The premium reflects Ultra Maritime's growth trajectory and sole-source navy contracts, and addresses a 19% profit decline in Lockheed's Rotary and Mission Systems division in Q1 2026.",
      },
      {
        q: 'Why is this deal considered risky for Lockheed Martin?',
        a: "Lockheed paid entirely in cash with no earnout protections, meaning the full purchase price was committed upfront with no structure tying payment to Ultra Maritime's future performance.",
      },
    ],
    about: [
      'Defense industry M&A',
      'Private equity value creation',
      'Deal structure and multiples',
      'Buy-side and sell-side deal analysis',
    ],
  },
};
