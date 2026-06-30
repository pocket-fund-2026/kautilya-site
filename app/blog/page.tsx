import type { Metadata } from 'next';
import BlogContent from './BlogContent';

const BASE = 'https://www.kautilya-pe.com';

export const metadata: Metadata = {
  title: 'Blog | Market Intelligence & Advisory Notes',
  description:
    'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team. Covering Indian M&A, pharma valuations, off-market sourcing, and SME acquisitions.',
  keywords: [
    'kautilya blog', 'M&A advisory India blog', 'pharma valuation India',
    'how to buy a business India', 'India M&A market intelligence',
    'off-market deal sourcing India', 'micro private equity India',
    'acquisition entrepreneurship blog', 'search fund India blog',
    'Indian pharma M&A', 'JB Chemicals Torrent deal',
    'EBITDA multiple pharma India', 'founder-owned business valuation India',
  ],
  alternates: {
    canonical: `${BASE}/blog`,
    languages: { en: `${BASE}/blog`, 'x-default': `${BASE}/blog` },
  },
  openGraph: {
    type: 'website',
    url: `${BASE}/blog`,
    title: 'The Kautilya Blog | Market Intelligence & Advisory Notes',
    description:
      'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team.',
    siteName: 'Kautilya',
    images: [{ url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: 'Kautilya Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Kautilya Blog | Market Intelligence & Advisory Notes',
    description: 'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team.',
    site: '@microsearchfund',
    creator: '@microsearchfund',
    images: [`${BASE}/opengraph-image`],
  },
  other: {
    'DC.title': 'The Kautilya Blog',
    'DC.subject': 'Buy-side M&A advisory, India M&A market intelligence, acquisition entrepreneurship',
    'DC.publisher': 'Kautilya',
    pagename: 'Kautilya — Blog',
  },
};

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'The Kautilya Blog',
  description: 'Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team.',
  url: `${BASE}/blog`,
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
    logo: { '@type': 'ImageObject', url: `${BASE}/icon.svg` },
  },
  inLanguage: 'en-US',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogContent />
    </>
  );
}
