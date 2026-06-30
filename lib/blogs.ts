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
  image?: string;
  keywords?: string[];
};

export const BLOG_META: Record<BlogSlug, BlogMeta> = {
  'pharma-business-valuation-india-jb-chemicals': {
    title: 'How to Value a Founder-Owned Pharma Business in India',
    subtitle: 'What the Torrent-JB Chemicals Deal Actually Tells You',
    description:
      'KKR turned a Rs. 3,100 Cr pharma acquisition into a Rs. 25,689 Cr exit in five years. Here is what that means for founder-owned pharma businesses in India and what the 24.8x EBITDA multiple actually tells you.',
    author: 'Dev Shah',
    datePublished: '2025-06-29',
    category: 'Market Intelligence',
    readTime: '12 min',
    keywords: [
      'pharma business valuation India',
      'EBITDA multiple pharma India',
      'sell pharma company India',
      'JB Chemicals acquisition',
      'pharma M&A India 2025',
      'pharma exit planning India',
      'Torrent JB Chemicals deal',
      'KKR JB Chemicals',
      'founder-owned pharma India',
      'mid-market pharma M&A India',
      'Schedule M compliance India',
      'pharma diligence readiness India',
    ],
  },
};
