export const BLOG_SLUGS = [
  'pharma-business-valuation-india-jb-chemicals',
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

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
};

export const BLOG_META: Record<BlogSlug, BlogMeta> = {
  'pharma-business-valuation-india-jb-chemicals': {
    title: 'How to Value a Founder-Owned Pharma Business in India',
    subtitle: 'What the Torrent-JB Chemicals Deal Actually Tells You',
    description:
      'KKR turned a Rs. 3,100 Cr pharma acquisition into a Rs. 25,689 Cr exit in five years. Here is what the 24.8x EBITDA Torrent-JB Chemicals deal means for founder-owned pharma businesses in India — and how to close the valuation gap before you engage a bank.',
    author: 'Dev Shah',
    datePublished: '2025-06-29',
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
  },
};
