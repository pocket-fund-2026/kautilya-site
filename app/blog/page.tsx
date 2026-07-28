import type { Metadata } from 'next';
import BlogContent from './BlogContent';

const BASE = 'https://www.kautilya-pe.com';

export const metadata: Metadata = {
  title: { absolute: 'The Kautilya Blog | Buyer Guides & M&A Advisory Notes' },
  description:
    'Buyer guides and acquisition frameworks from the Kautilya advisory team. Covering the search fund model, family-owned business acquisitions, and SME acquisitions in India.',
  category: 'Finance & M&A Advisory',
  keywords: [
    // Brand
    'kautilya blog', 'kautilya M&A advisory blog', 'kautilya market intelligence',
    // Core topics
    'buying a family owned business in India', 'family business succession sale India',
    'acquiring family business India due diligence', 'family business transition acquisition',
    'how to value a business India',
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
    // Buyer types
    'family office acquisition India', 'PE deal sourcing India',
    'search fund buyer India', 'first-time buyer business India',
    // Education
    'how to buy a business India', 'acquisition framework India',
    'due diligence guide India', 'business acquisition guide India',
    'acquisition thesis India', 'deal structure guide India',
    'business broker alternative India',
    // Long-tail
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
    title: 'The Kautilya Blog | Buyer Guides & M&A Advisory Notes',
    description:
      'Buyer guides and acquisition frameworks from the Kautilya advisory team. The search fund model, family-owned business acquisitions, off-market deal sourcing.',
    siteName: 'Kautilya',
    images: [{ url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: 'The Kautilya Blog — Buyer Guides & Advisory Notes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Kautilya Blog | Buyer Guides & M&A Advisory Notes',
    description:
      'Buyer guides and acquisition frameworks from the Kautilya advisory team.',
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
    'DC.title': 'The Kautilya Blog | Buyer Guides & M&A Advisory Notes',
    'DC.creator': 'Dev Shah',
    'DC.subject': 'Buy-side M&A advisory, search fund model, family-owned business acquisition, off-market deal sourcing, acquisition entrepreneurship India',
    'DC.description': 'Buyer guides and acquisition frameworks from the Kautilya advisory team covering the search fund model and Indian SME M&A.',
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
    subject: 'Buyer guides on the search fund model, family-owned business acquisitions, and acquisition entrepreneurship',
    topic: 'M&A Advisory, Search Funds, Family Business Acquisition, Deal Sourcing',
    classification: 'Finance / M&A Advisory / Buyer Guides',
    abstract: 'The Kautilya Blog publishes buyer guides and acquisition frameworks for buyers and sellers in Indian mid-market M&A.',
    summary: 'Buyer guides covering the search fund model, family-owned business acquisitions, off-market sourcing, and SME M&A in India.',
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
  description: 'Buyer guides and acquisition frameworks from the Kautilya advisory team covering the search fund model, family-owned business acquisitions, and off-market deal sourcing.',
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
  name: 'The Kautilya Blog — Buyer Guides & Advisory Notes',
  url: `${BASE_URL}/blog`,
  numberOfItems: 2,
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
