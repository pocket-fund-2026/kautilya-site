export const BLOG_SLUGS = [
  'buying-family-owned-business-india',
  'what-is-a-search-fund',
  'what-is-buy-side-ma-advisory',
  'coforge-encora-acquisition-explained',
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
  'coforge-encora-acquisition-explained': {
    title: 'Coforge Bought Encora for $2.35B With Zero Cash',
    subtitle: 'How an All-Stock Preferential Allotment Handed the Sellers 21.8% of the Buyer',
    description:
      "Coforge acquired Silicon Valley's Encora at a $2.35B enterprise value and paid for it entirely in new shares, no cash. Advent International and Warburg Pincus walked away with 21.8% of Coforge and two board seats instead of a $1.89B check. Here's how the preferential allotment worked, why the sellers wanted stock, and what it signals about Indian IT M&A.",
    author: 'Dev Shah',
    datePublished: '2026-08-21',
    category: 'Deal Teardowns',
    readTime: '10 min',
    wordCount: 2400,
    keywords: [
      // Deal-specific
      'Coforge Encora acquisition',
      'Coforge Encora deal explained',
      'Coforge Encora $2.35 billion',
      'Coforge all stock acquisition',
      'Coforge Encora share swap',
      'Advent Warburg Pincus Encora exit',
      'Advent International Encora sale',
      'Warburg Pincus Coforge stake',
      // Structure angle
      'all stock preferential allotment India',
      'preferential allotment M&A India explained',
      'stock for stock acquisition India IT',
      'private equity rollover into listed stock',
      'sponsor rollover acquisition structure',
      'board seats for equity M&A India',
      // Sector
      'Indian IT services M&A 2026',
      'ER&D acquisition India',
      'engineering R&D services M&A',
      'AI-native engineering acquisition',
      'Indian IT mid-cap consolidation',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'M&A deal structure analysis India',
      'buy-side advisory deal analysis India',
      // Long-tail
      'why did Coforge pay in shares for Encora',
      'largest ER&D acquisition Indian IT company',
      'Coforge Encora board seats',
      'Coforge Encora 21.8 percent stake',
    ],
    faqs: [
      {
        q: 'How much did Coforge pay for Encora?',
        a: 'Coforge acquired Encora at a $2.35B enterprise value, with equity consideration of $1.89B (₹17,032.60 Cr) settled entirely in new Coforge shares — no cash changed hands.',
      },
      {
        q: 'Why did Advent and Warburg Pincus take Coforge stock instead of cash?',
        a: "Listed Coforge stock is liquid and can be sold on any trading day, unlike a private Encora stake that would need another negotiated sale. Taking stock also let the sponsors keep exposure to the AI-led engineering shift Encora was built to capture, and the two board seats they received give them influence over the integration that determines what those shares end up being worth.",
      },
      {
        q: 'How much of Coforge do the Encora sellers now own?',
        a: "Advent, Warburg Pincus and minority holders received about 21.8% of Coforge's expanded share capital — 9,37,96,508 new shares issued at ₹1,815.91 each — plus two non-executive board seats held by Advent's Shweta Jalan and Atin Hirachand Jain.",
      },
      {
        q: 'What is a preferential allotment in an M&A deal?',
        a: 'A preferential allotment is when a company issues brand-new shares directly to a chosen party at an agreed price, rather than the buyer paying cash or the seller buying shares on the open market. Because the total consideration here was fixed in rupees, the issue price alone decided how much of Coforge the sellers ended up owning.',
      },
      {
        q: 'Why does this deal matter for Indian IT M&A?',
        a: "It's the largest ER&D (engineering R&D) takeover ever by an Indian IT company, done by a mid-cap rather than a top-tier player, and it shows sponsor rollovers into listed stock becoming a bridge between private and public valuations when cash buyers are hesitant to pay sponsor-level prices.",
      },
    ],
    about: [
      'Coforge Encora acquisition',
      'All-stock preferential allotment structures India',
      'Indian IT services and ER&D consolidation',
      'Private equity rollover exits into listed stock',
    ],
  },
};
