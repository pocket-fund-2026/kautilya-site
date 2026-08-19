import type { Metadata } from 'next';
import NewsletterContent from './NewsletterContent';
import { NEWSLETTER_SLUGS, NEWSLETTER_META, type NewsletterSlug } from '@/lib/newsletters';

const BASE = 'https://www.kautilya-pe.com';

export const metadata: Metadata = {
  title: { absolute: 'The Kautilya Newsletter | Deal-Structure Teardowns' },
  description:
    'Deal-structure teardowns from Kautilya\'s advisory desk — buyer, target, structure, and a scorecard for every Indian M&A deal worth studying. Read the archive or subscribe to The India Deal Sheet.',
  category: 'Finance & M&A Advisory',
  keywords: [
    'Kautilya newsletter', 'Kautilya deal teardown', 'India deal sheet newsletter',
    'M&A deal structure analysis India', 'Indian M&A deal breakdown', 'deal teardown newsletter India',
    'buy-side advisory newsletter India', 'India M&A newsletter', 'Aurum PropTech Housing.com acquisition',
    'REA Group Housing.com exit', 'Indian proptech M&A 2026', 'all-share preferential issue India M&A',
    'M&A structure analysis newsletter', 'Kautilya market intelligence newsletter',
    'pharma business valuation India', 'pharma M&A India', 'EBITDA multiple pharma India',
    'JB Chemicals Torrent deal', 'KKR JB Chemicals acquisition', 'founder-owned pharma valuation India',
  ],
  alternates: {
    canonical: `${BASE}/newsletter`,
    languages: { en: `${BASE}/newsletter`, 'x-default': `${BASE}/newsletter` },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${BASE}/newsletter`,
    title: 'The Kautilya Newsletter | Deal-Structure Teardowns',
    description:
      'Deal-structure teardowns from Kautilya\'s advisory desk — buyer, target, structure, and a scorecard for every Indian M&A deal worth studying.',
    siteName: 'Kautilya',
    images: [{ url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: 'The Kautilya Newsletter — Deal Table Teardowns' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Kautilya Newsletter | Deal-Structure Teardowns',
    description: 'Deal-structure teardowns from Kautilya\'s advisory desk — buyer, target, structure, and a scorecard, every time.',
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
    'DC.title': 'The Kautilya Newsletter | Deal-Structure Teardowns',
    'DC.creator': 'Dev Shah',
    'DC.subject': 'India M&A deal teardowns, deal structure analysis, proptech consolidation, buy-side advisory',
    'DC.description': 'Deal-structure teardowns from Kautilya\'s advisory desk covering Indian M&A.',
    'DC.publisher': 'Kautilya',
    'DC.contributor': 'Kautilya Team',
    'DC.date': '2026-07-25',
    'DC.type': 'Collection',
    'DC.format': 'text/html',
    'DC.language': 'en',
    'DC.rights': '© 2026 Kautilya. All rights reserved.',
    'DC.coverage': 'India',
    pagename: 'Kautilya — Newsletter',
    subject: 'Deal-structure teardowns and market intelligence on Indian M&A',
    topic: 'M&A Deal Teardowns, Indian M&A, Deal Structure Analysis',
    classification: 'Finance / M&A Advisory / Market Intelligence',
    abstract: 'The Kautilya Newsletter publishes deal-structure teardowns for buyers and advisors in Indian mid-market M&A.',
    summary: 'Deal-structure teardowns covering Indian M&A — buyer, target, structure, and a scorecard for every deal.',
    language: 'English',
    revisit: '7 days',
    distribution: 'Global',
    'og:locale': 'en_US',
    'og:locale:alternate': 'en_GB',
    'og:see_also': `${BASE}/blog`,
  },
};

const BASE_URL = BASE;

const newsletterListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'The Kautilya Newsletter',
  description: 'Deal-structure teardowns from Kautilya\'s advisory desk covering Indian M&A — buyer, target, structure, and a scorecard for every deal.',
  url: `${BASE_URL}/newsletter`,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE_URL,
    logo: { '@type': 'ImageObject', url: `${BASE_URL}/icon.svg`, width: 512, height: 512 },
    sameAs: ['https://www.linkedin.com/company/pocket-fund/', 'https://x.com/microsearchfund'],
  },
  blogPost: NEWSLETTER_SLUGS.map((slug) => {
    const meta = NEWSLETTER_META[slug as NewsletterSlug];
    return {
      '@type': 'NewsArticle',
      headline: meta.subtitle ? `${meta.title}: ${meta.subtitle}` : meta.title,
      url: `${BASE_URL}/newsletter/${slug}`,
      datePublished: meta.datePublished,
      author: { '@type': 'Person', name: meta.author, url: `${BASE_URL}/team` },
      description: meta.description,
      keywords: (meta.keywords ?? []).slice(0, 6).join(', '),
    };
  }),
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'The Kautilya Newsletter — Deal Table Teardowns',
  url: `${BASE_URL}/newsletter`,
  numberOfItems: NEWSLETTER_SLUGS.length,
  itemListElement: NEWSLETTER_SLUGS.map((slug, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${BASE_URL}/newsletter/${slug}`,
    name: NEWSLETTER_META[slug as NewsletterSlug].title,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Newsletter', item: `${BASE_URL}/newsletter` },
  ],
};

export default function NewsletterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NewsletterContent />
    </>
  );
}
