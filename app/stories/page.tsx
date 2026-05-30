import type { Metadata } from 'next';
import StoriesContent from './StoriesContent';

export const metadata: Metadata = {
  title: { absolute: 'Stories | Kautilya | Acquisitions & Market Intelligence' },
  description:
    'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice — from a Sunday newsletter to $1M+ in closed acquisitions.',
  keywords: [
    'acquisition entrepreneurship India', 'buy a business India blog',
    'M&A deal journal', 'search fund stories India', 'micro private equity blog',
    'how to buy a business India', 'acquisition case studies', 'off-market deal sourcing guide',
    'ETA content India', 'business acquisition insights', 'due diligence guide India',
    'seller financing explained', 'buy and build strategy India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/stories' },
  openGraph: {
    title: 'Stories | Kautilya | Acquisitions & Market Intelligence',
    url: 'https://www.kautilya-pe.com/stories',
    description: 'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice.',
  },
};

const BASE = 'https://www.kautilya-pe.com';

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Kautilya Stories',
  url: `${BASE}/stories`,
  description: 'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice.',
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
    logo: { '@type': 'ImageObject', url: `${BASE}/icon.svg` },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Stories', item: `${BASE}/stories` },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <StoriesContent />
    </>
  );
}
