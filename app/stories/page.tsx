import type { Metadata } from 'next';
import StoriesContent from './StoriesContent';

export const metadata: Metadata = {
  title: { absolute: 'Stories | Kautilya | Acquisitions & Market Intelligence' },
  description:
    'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice — from a Sunday newsletter to $1M+ in closed acquisitions.',
  alternates: { canonical: 'https://www.kautilya-pe.com/stories' },
  openGraph: {
    title: 'Stories | Kautilya | Acquisitions & Market Intelligence',
    url: 'https://www.kautilya-pe.com/stories',
    description: 'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice.',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Kautilya Stories',
  url: 'https://www.kautilya-pe.com/stories',
  description: 'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice.',
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: 'https://www.kautilya-pe.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.kautilya-pe.com/icon.svg',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kautilya-pe.com' },
    { '@type': 'ListItem', position: 2, name: 'Stories', item: 'https://www.kautilya-pe.com/stories' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StoriesContent />
    </>
  );
}
