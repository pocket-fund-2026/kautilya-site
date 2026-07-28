import type { Metadata } from 'next';
import BlogContent from './BlogContent';

const BASE = 'https://www.kautilya-pe.com';

export const metadata: Metadata = {
  title: { absolute: 'The Kautilya Blog | Market Intelligence & M&A Advisory Notes' },
  description:
    'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team. Covering Indian pharma M&A, founder-owned business valuations, off-market deal sourcing, and SME acquisitions.',
  category: 'Finance & M&A Advisory',
  keywords: [
    // Brand
    'kautilya blog', 'kautilya M&A advisory blog', 'kautilya market intelligence',
    // Core topics
    'pharma business valuation India', 'pharma M&A India', 'EBITDA multiple pharma India',
    'founder-owned business valuation India', 'how to value a business India',
    'buying a family owned business in India', 'family business succession sale India',
    'acquiring family business India due diligence', 'family business transition acquisition',
    // Advisory
    'M&A advisory India blog', 'buy-side advisory India insights',
    'acquisition advisory India notes', 'M&A advisory notes India',
    // Deal sourcing
    'off-market deal sourcing India', 'proprietary deal flow India',
    'how to source deals India', 'deal sourcing strategy India',
    // Market types
    'micro private equity India', 'search fund India blog',
    'acquisition entrepreneurship blog India', 'ETA blog India',
    'SME acquisition India', 'SMB acquisition India insights',
    // India M&A
    'India M&A market intelligence', 'Indian M&A market insights 2025',
    'Indian pharma M&A deal analysis', 'JB Chemicals Torrent deal analysis',
    'KKR pharma India exit', 'PE deal India blog',
    // Buyer types
    'family office acquisition India', 'PE deal sourcing India',
    'search fund buyer India', 'first-time buyer business India',
    // Education
    'how to buy a business India', 'acquisition framework India',
    'due diligence guide India', 'business acquisition guide India',
    'acquisition thesis India', 'deal structure guide India',
    'EBITDA valuation guide India', 'business broker alternative India',
    // Long-tail
    'Schedule M pharma compliance India', 'pharma succession India',
    'founder pharma exit India', 'promoter-owned business sale India',
    'mid-market acquisition India blog', 'off-market M&A India notes',
    // Search fund explainer
    'what is a search fund', 'search fund model', 'search fund meaning',
    'how does a search fund work', 'entrepreneurship through acquisition',
    'search fund explained', 'self funded search fund', 'search fund India',
  ],
  alternates: {
    canonical: `${BASE}/blog`,
    languages: { en: `${BASE}/blog`, 'x-default': `${BASE}/blog` },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${BASE}/blog`,
    title: 'The Kautilya Blog | Market Intelligence & M&A Advisory Notes',
    description:
      'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team. Indian pharma M&A, off-market deal sourcing, founder-owned business valuations.',
    siteName: 'Kautilya',
    images: [{ url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: 'The Kautilya Blog — Market Intelligence & Advisory Notes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Kautilya Blog | Market Intelligence & M&A Advisory Notes',
    description:
      'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team.',
    site: '@microsearchfund',
    creator: '@microsearchfund',
    images: [`${BASE}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    // Dublin Core
    'DC.title': 'The Kautilya Blog | Market Intelligence & M&A Advisory Notes',
    'DC.creator': 'Dev Shah',
    'DC.subject': 'Buy-side M&A advisory, Indian pharma M&A, founder-owned business valuation, off-market deal sourcing, acquisition entrepreneurship India',
    'DC.description': 'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team covering Indian M&A.',
    'DC.publisher': 'Kautilya',
    'DC.contributor': 'Kautilya Team',
    'DC.date': '2026-07-28',
    'DC.type': 'Collection',
    'DC.format': 'text/html',
    'DC.language': 'en',
    'DC.rights': '© 2026 Kautilya. All rights reserved.',
    'DC.coverage': 'India',
    // Standard hidden meta
    pagename: 'Kautilya — Blog',
    subject: 'Market intelligence and advisory notes on Indian M&A, pharma business valuations, and acquisition entrepreneurship',
    topic: 'M&A Advisory, Indian Pharma M&A, Business Valuation, Deal Sourcing',
    classification: 'Finance / M&A Advisory / Market Intelligence',
    abstract: 'The Kautilya Blog publishes market intelligence, deal breakdowns, and acquisition frameworks for buyers and sellers in Indian mid-market M&A.',
    summary: 'Advisory notes covering founder-owned pharma valuations, PE deal analysis, off-market sourcing, and the Indian M&A market from Kautilya.',
    language: 'English',
    revisit: '7 days',
    distribution: 'Global',
    // OG extras
    'og:locale': 'en_US',
    'og:locale:alternate': 'en_GB',
    'og:see_also': `${BASE}/stories`,
  },
};

const BASE_URL = BASE;

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'The Kautilya Blog',
  description: 'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team covering Indian M&A, pharma business valuations, and off-market deal sourcing.',
  url: `${BASE_URL}/blog`,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/icon.svg`,
      width: 512,
      height: 512,
    },
    sameAs: [
      'https://www.linkedin.com/company/pocket-fund/',
      'https://x.com/microsearchfund',
    ],
  },
  blogPost: [
    {
      '@type': 'BlogPosting',
      headline: 'Buying a Family-Owned Business in India: What First-Time Buyers Need to Know',
      url: `${BASE_URL}/blog/buying-family-owned-business-india`,
      datePublished: '2026-07-25',
      author: { '@type': 'Person', name: 'Dev Shah', url: `${BASE_URL}/team` },
      description: "Family-owned businesses make up most SME listings in India. Here's what makes acquiring one different: succession dynamics, informal records, and diligence red flags.",
      keywords: 'buying a family owned business in India, family business succession sale India, acquiring family business India due diligence, buying business from retiring owner India, family business transition acquisition',
    },
    {
      '@type': 'BlogPosting',
      headline: 'How to Value a Founder-Owned Pharma Business in India: What the Torrent-JB Chemicals Deal Actually Tells You',
      url: `${BASE_URL}/blog/pharma-business-valuation-india-jb-chemicals`,
      datePublished: '2025-06-29',
      author: { '@type': 'Person', name: 'Dev Shah', url: `${BASE_URL}/team` },
      description: 'KKR turned a Rs. 3,100 Cr pharma acquisition into a Rs. 25,689 Cr exit in five years. Here is what the 24.8x EBITDA Torrent-JB Chemicals deal means for founder-owned pharma businesses in India.',
      keywords: 'pharma business valuation India, EBITDA multiple pharma India, JB Chemicals Torrent deal, KKR pharma exit India, sell pharma company India',
    },
    {
      '@type': 'BlogPosting',
      headline: "What Is a Search Fund? A Beginner's Guide to Buying a Business With Other People's Money",
      url: `${BASE_URL}/blog/what-is-a-search-fund`,
      datePublished: '2026-07-28',
      author: { '@type': 'Person', name: 'Dev Shah', url: `${BASE_URL}/team` },
      description: "A plain-English guide to search funds: how search and acquisition capital work, the 1.5x step-up, searcher equity vesting, target company criteria, and where the model fits — and doesn't — in India.",
      keywords: 'what is a search fund, search fund model, search fund meaning, how does a search fund work, entrepreneurship through acquisition',
    },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'The Kautilya Blog — Market Intelligence & Advisory Notes',
  url: `${BASE_URL}/blog`,
  numberOfItems: 3,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      url: `${BASE_URL}/blog/what-is-a-search-fund`,
      name: 'What Is a Search Fund?',
    },
    {
      '@type': 'ListItem',
      position: 2,
      url: `${BASE_URL}/blog/buying-family-owned-business-india`,
      name: 'Buying a Family-Owned Business in India',
    },
    {
      '@type': 'ListItem',
      position: 3,
      url: `${BASE_URL}/blog/pharma-business-valuation-india-jb-chemicals`,
      name: 'How to Value a Founder-Owned Pharma Business in India',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogContent />
    </>
  );
}
