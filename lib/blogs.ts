export const BLOG_SLUGS = [
  'buying-family-owned-business-india',
  'what-is-a-search-fund',
  'what-is-buy-side-ma-advisory',
  'analyst-diaries-direct-mail-deal-origination',
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
  'what-is-buy-side-ma-advisory': {
    title: 'What Is Buy-Side M&A Advisory?',
    subtitle: "A Beginner's Guide to Buying a Business in India",
    description:
      'New to acquiring a business? Learn what a buy-side M&A advisor does, why buyers in India use one, and how the process works — explained simply.',
    author: 'Dev Shah',
    datePublished: '2026-08-03',
    category: 'Buyer Guides',
    readTime: '8 min',
    wordCount: 1550,
    image: '/images/blogs/what-is-buy-side-ma-advisory/what-is-buy-side-ma-advisory-hero.webp',
    keywords: [
      // Primary
      'buy-side M&A advisory',
      'buy-side advisor India',
      'what is buy-side M&A advisory',
      'buy-side advisory meaning',
      // Explainer / beginner intent
      'buy-side advisory explained',
      'buy-side M&A advisory for beginners',
      'how does a buy-side advisor work',
      'buy side vs sell side advisory',
      'sell-side advisor vs buy-side advisor',
      // Process
      'buy-side M&A process',
      'business acquisition process India',
      'due diligence business acquisition India',
      'M&A sourcing screening valuation diligence',
      'off-market deal sourcing India',
      // Buyer intent
      'first-time business buyer India guide',
      'how to buy a business in India',
      'buying a business in India guide',
      'business acquisition advisor India',
      // Deal size
      'buy-side advisory small deals India',
      'SME acquisition advisory India',
      'mid-market M&A advisory India',
      'search fund buy-side advisory',
      // Risk / mistakes
      'business acquisition mistakes first-time buyers',
      'due diligence red flags business acquisition',
      'overpaying for a business acquisition',
      'EBITDA add-back inflation due diligence',
      // Regulatory
      'FEMA compliance business acquisition India',
      'NRI buying business in India',
      'foreign buyer acquisition India compliance',
      // Advisory / fees
      'buy-side advisor fees structure',
      'M&A advisor retainer success fee',
      'buy-side advisory firm India',
      // Long-tail
      'do I need a buy-side advisor',
      'buy-side advisor vs M&A lawyer',
      'how long does M&A due diligence take',
    ],
    faqs: [
      {
        q: 'How much does a buy-side advisor cost?',
        a: 'Fee structures vary by firm and deal size, but most follow a retainer plus success fee model — a fixed monthly or upfront fee during sourcing and diligence, plus a percentage tied to the deal actually closing. This aligns the advisor\'s incentive with finding you a genuinely good acquisition, rather than billing hours regardless of outcome. Ask any advisor to walk through their fee structure and what triggers the success fee before engaging them.',
      },
      {
        q: 'How long does the process take?',
        a: 'Sourcing to close typically runs three to nine months, depending on target availability, how well-documented the business is, and diligence complexity. Smaller, well-documented businesses with clean financials can close faster; family-owned businesses with informal record-keeping often take longer because diligence has more to untangle.',
      },
      {
        q: 'Do I need an advisor if I already found a business to buy?',
        a: 'Yes, if you haven\'t done independent valuation and diligence yet. Advisors add the most value at exactly this stage — verifying whether the deal you\'ve already found is actually priced fairly and structured safely, not just helping you find deals in the first place.',
      },
      {
        q: "What's the difference between a buy-side advisor and an M&A lawyer?",
        a: 'An advisor manages the overall deal — sourcing, valuation, negotiation strategy, and coordinating the diligence process — while a lawyer drafts and reviews the legal documentation and handles regulatory filings. Most serious acquisitions use both, with the advisor coordinating the process end-to-end and looping in legal counsel at the right stages.',
      },
      {
        q: 'Can NRIs or foreign buyers use a buy-side advisor for Indian acquisitions?',
        a: "Yes, and it's often more important in that case. Cross-border acquisitions add FEMA compliance, repatriation rules, and sector-specific foreign investment restrictions on top of the usual diligence — a locally experienced advisor helps navigate all of this alongside your legal counsel.",
      },
      {
        q: 'What size of business is a buy-side advisor worth it for?',
        a: "There's no fixed cutoff, but as a rough guide: once a deal is large enough that a bad valuation or a missed liability would meaningfully hurt you financially, an advisor's fee is cheap insurance. In practice, this covers most deals from a few tens of lakhs upward, not just large-cap acquisitions.",
      },
    ],
    about: [
      'Buy-side M&A advisory',
      'Business acquisition process India',
      'Buy-side due diligence India',
      'First-time business buyer guidance',
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
};
