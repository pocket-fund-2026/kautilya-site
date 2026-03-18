import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Kautilya — Buy-Side Advisory | Proprietary Deal Sourcing & M&A Pipeline',
  description:
    'Kautilya is a buy-side advisory firm that constructs proprietary acquisition pipelines on demand. We source deals from first principles — in any sector, against any criteria, across geographies.',
  alternates: { canonical: 'https://www.kautilya-pe.com' },
  openGraph: {
    title: 'Kautilya — Buy-Side Advisory | Proprietary Deal Sourcing & M&A Pipeline',
    url: 'https://www.kautilya-pe.com',
    description:
      'Kautilya is a buy-side advisory firm that constructs proprietary acquisition pipelines on demand. We source deals from first principles — in any sector, against any criteria.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kautilya',
  url: 'https://www.kautilya-pe.com',
  logo: 'https://www.kautilya-pe.com/icon.svg',
  description:
    'Buy-side advisory firm that constructs proprietary acquisition pipelines on demand — in any sector, against any criteria, from first principles.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@pocket-fund.com',
    contactType: 'sales',
  },
  sameAs: [
    'https://x.com/microsearchfund',
    'https://www.instagram.com/microsearchfund/',
    'https://www.linkedin.com/company/pocket-fund/',
    'https://www.youtube.com/@devlikesbizness',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kautilya',
  url: 'https://www.kautilya-pe.com',
  description: 'Buy-side advisory and proprietary deal sourcing firm.',
  email: 'hello@pocket-fund.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressCountry: 'IN',
  },
  priceRange: '$$$$',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Kautilya do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kautilya is a buy-side advisory firm that constructs proprietary acquisition pipelines on demand. We source deals from first principles — in any sector, against any criteria, across geographies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Kautilya source deals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use systematic market mapping, proprietary outreach, and structured qualification to identify acquisition targets. We don\'t carry a pipeline — we build yours from scratch based on your specific criteria.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sectors does Kautilya cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kautilya is sector-agnostic. We build acquisition pipelines in any sector, against any criteria — from SaaS and technology to services, manufacturing, and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Kautilya based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kautilya is based in Mumbai, India, and works with clients globally across geographies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I engage Kautilya for a deal sourcing mandate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can submit your acquisition thesis through our Engage page at kautilya-pe.com/engage, or book a call directly through our Google Calendar integration.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
