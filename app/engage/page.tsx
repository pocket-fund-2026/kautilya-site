import type { Metadata } from 'next';
import EngageContent from './EngageContent';

export const metadata: Metadata = {
  title: { absolute: 'Engage | Kautilya | Start Your Acquisition Mandate' },
  description:
    'Tell Kautilya your acquisition thesis and we\'ll show you how we\'d find it. Submit your mandate criteria or book a call to get started.',
  alternates: { canonical: 'https://www.kautilya-pe.com/engage' },
  openGraph: {
    title: 'Engage | Kautilya | Start Your Acquisition Mandate',
    url: 'https://www.kautilya-pe.com/engage',
    description: 'Submit your acquisition thesis or book a call. Kautilya builds your proprietary deal pipeline from day one.',
  },
};

const BASE_URL = 'https://www.kautilya-pe.com';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Engage with Kautilya',
  url: `${BASE_URL}/engage`,
  description: 'Submit your acquisition mandate criteria or book a call. Kautilya builds proprietary deal pipelines for PE, VC, and family office buyers.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE_URL,
    email: 'contact@kautilya-pe.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@kautilya-pe.com',
      contactType: 'sales',
      areaServed: ['US', 'UAE', 'GB', 'EU', 'IN'],
      availableLanguage: 'English',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Engage', item: `${BASE_URL}/engage` },
  ],
};

export default function EngagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EngageContent />
    </>
  );
}
