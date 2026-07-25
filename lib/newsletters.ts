export const NEWSLETTER_SLUGS = [
  'aurum-housing-com-acquisition',
] as const;

export type NewsletterSlug = (typeof NEWSLETTER_SLUGS)[number];

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
  about?: string[];
  mentions?: { name: string; sameAs?: string }[];
};

export const NEWSLETTER_META: Record<NewsletterSlug, NewsletterMeta> = {
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
