export const NEWSLETTER_SLUGS = [
  'torrent-jb-chemicals-pharma-valuation',
  'aurum-housing-com-acquisition',
] as const;

export type NewsletterSlug = (typeof NEWSLETTER_SLUGS)[number];

export type NewsletterFaq = { q: string; a: string };

export type NewsletterMeta = {
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  datePublished: string;
  dealDate: string;
  category: string;
  readTime: string;
  wordCount?: number;
  image?: string;
  keywords?: string[];
  faqs?: NewsletterFaq[];
  about?: string[];
  mentions?: { name: string; sameAs?: string }[];
};

export const NEWSLETTER_META: Record<NewsletterSlug, NewsletterMeta> = {
  'torrent-jb-chemicals-pharma-valuation': {
    title: 'How to Value a Founder-Owned Pharma Business in India',
    subtitle: 'What the Torrent-JB Chemicals Deal Actually Tells You',
    description:
      'KKR turned a Rs. 3,100 Cr pharma acquisition into a Rs. 25,689 Cr exit in five years. Here is what the 24.8x EBITDA Torrent-JB Chemicals deal means for founder-owned pharma businesses in India — and how to close the valuation gap before you engage a bank.',
    author: 'Dev Shah',
    datePublished: '2025-06-29',
    dealDate: '2025-06-29',
    category: 'Market Intelligence',
    readTime: '12 min',
    wordCount: 2600,
    keywords: [
      // Core topic
      'pharma business valuation India',
      'how to value a pharma business India',
      'EBITDA multiple pharma India',
      'EV EBITDA pharma India 2025',
      // Deal reference
      'JB Chemicals Torrent deal',
      'KKR JB Chemicals acquisition',
      'Torrent JB Chemicals 24x EBITDA',
      'JB Chemicals exit valuation',
      // Seller intent
      'sell pharma company India',
      'pharma exit planning India',
      'how to exit a pharma business India',
      'pharma business sale India',
      'founder-owned pharma valuation India',
      // M&A context
      'pharma M&A India 2025',
      'mid-market pharma M&A India',
      'Indian pharma acquisition deal',
      'PE pharma acquisition India',
      'private equity pharma India',
      // Compliance angle
      'Schedule M compliance India',
      'Schedule M pharma manufacturer India',
      // Preparation
      'pharma diligence readiness India',
      'pharma business preparation for sale',
      'pharma EBITDA margin improvement India',
      'pharma governance institutional India',
      // Advisory
      'pharma M&A advisor India',
      'sell pharma business advisory India',
      'buy-side pharma advisory India',
      'M&A advisory pharma India',
      // Long-tail
      'how to get 24x EBITDA pharma India',
      'founder pharma promoter exit India',
      'pharma succession planning India',
      'mid-market pharma business buyer India',
      'ChrysCapital Novartis India acquisition',
      'KKR pharma investment India',
      'pharma PE deal India 2025',
    ],
    faqs: [
      {
        q: 'What EBITDA multiple do pharma businesses sell for in India?',
        a: 'Founder-owned businesses in the Rs. 50–500 Cr range typically sell at 6–8× EBITDA. PE-backed assets with institutional governance trade at 18–24×. The Torrent-JB Chemicals deal at 24.8× is the current ceiling for institutionally prepared assets in Indian mid-market pharma.',
      },
      {
        q: 'How long does it take to prepare a pharma business for sale in India?',
        a: 'Meaningful preparation typically requires 18–36 months. Priority items: professional management layer, clean P&L, documented customer relationships, resolved governance gaps, and funding any dormant capability. Businesses that begin 24 months before an intended sale will have significantly more options at exit.',
      },
      {
        q: "What did KKR do to increase JB Chemicals' value before selling to Torrent?",
        a: 'Five moves over five years: appointed a professional CEO, ran a consistent bolt-on strategy across five targets, funded a dormant CDMO capability that grew to Rs. 446 Cr, improved EBITDA margins from 15–18% to 27–29%, and rebuilt governance to institutional diligence standards.',
      },
      {
        q: 'What is the difference between a motivated and a distressed seller in Indian pharma M&A?',
        a: 'A motivated seller approaches the market by choice, with time and options. A distressed seller approaches because an external pressure — a compliance deadline, a succession crisis — has removed optionality. Motivated sellers price at the top of the range; distressed sellers price at the bottom.',
      },
      {
        q: 'Do I need an investment bank to sell a pharma business in India?',
        a: "For businesses in the Rs. 50–300 Cr range, a boutique M&A advisory firm with Indian mid-market pharma experience will typically be more effective than a large investment bank. The advisor's most important work happens in the 18–24 months before any sale process — not during it.",
      },
    ],
    about: [
      'Pharma business valuation India',
      'EBITDA multiples India mid-market pharma',
      'Indian M&A advisory',
      'Founder-owned business exit India',
    ],
    mentions: [
      { name: 'KKR', sameAs: 'https://www.kkr.com' },
      { name: 'JB Chemicals & Pharmaceuticals', sameAs: 'https://en.wikipedia.org/wiki/JB_Chemicals_%26_Pharmaceuticals' },
      { name: 'Torrent Pharmaceuticals', sameAs: 'https://en.wikipedia.org/wiki/Torrent_Pharmaceuticals' },
      { name: 'ChrysCapital' },
      { name: 'Novartis India' },
    ],
  },
  'aurum-housing-com-acquisition': {
    title: "Aurum's Housing.com Acquisition, Explained",
    subtitle: 'How REA "Exited" by Becoming Aurum\'s Biggest Shareholder',
    description:
      "REA Group didn't sell Housing.com for cash — it swapped operating control for a 24.9% stake in Aurum PropTech. Kautilya's deal-structure teardown of India's biggest proptech consolidation move of 2026.",
    author: 'Dev Shah',
    datePublished: '2026-07-25',
    dealDate: '2026-07-16',
    category: 'Deal Teardowns',
    readTime: '11 min',
    wordCount: 2300,
    image: '/images/newsletter/aurum-housing-com-acquisition/aurum-housing-hero.webp',
    keywords: [
      // Deal-specific
      'Aurum PropTech Housing.com acquisition',
      'REA Group Housing.com exit',
      'Housing.com Aurum deal',
      'Locon Solutions acquisition',
      'Aurum PropTech Locon Solutions',
      'REA Group India exit',
      'Housing.com PropTiger Aurum',
      'Aurum PropTech acquisition analysis',
      'Aurum PropTech share swap Housing.com',
      // Structure angle
      'all-share preferential issue India M&A',
      'stock for asset acquisition India',
      'SEBI preferential allotment open offer threshold',
      'MNC exit India subsidiary equity swap',
      'listed company acquisition without cash India',
      // Sector
      'Indian proptech M&A 2026',
      'proptech consolidation India',
      'real estate marketplace acquisition India',
      'Magicbricks 99acres NoBroker competitors',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'M&A deal structure analysis India',
      'buy-side advisory deal analysis India',
      // Long-tail
      'why did REA Group sell Housing.com',
      'Aurum PropTech Housing.com deal structure',
      'Housing.com FY26 revenue decline',
      'Aurum PropTech promoter warrants',
    ],
    about: [
      'Aurum PropTech Housing.com acquisition',
      'All-share preferential issue structures India',
      'Indian proptech consolidation',
      'MNC exit structuring via equity swap',
    ],
    mentions: [
      { name: 'Aurum PropTech Ltd', sameAs: 'https://www.aurumproptech.in' },
      { name: 'REA Group', sameAs: 'https://www.rea-group.com' },
      { name: 'Housing.com' },
      { name: 'Locon Solutions Pvt Ltd' },
      { name: 'PropTiger' },
    ],
  },
};
