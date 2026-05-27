import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Kautilya | Buy-Side M&A Advisory | Proprietary Deal Sourcing',
  description:
    'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  alternates: { canonical: 'https://www.kautilya-pe.com' },
  openGraph: {
    title: 'Kautilya | Buy-Side M&A Advisory | Proprietary Deal Sourcing',
    url: 'https://www.kautilya-pe.com',
    description:
      'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kautilya',
  url: 'https://www.kautilya-pe.com',
  logo: 'https://www.kautilya-pe.com/icon.svg',
  description:
    'Buy-side advisory firm that constructs proprietary acquisition pipelines on demand: in any sector, against any criteria, from first principles.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@kautilya-pe.com',
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
  '@type': 'ProfessionalService',
  name: 'Kautilya',
  url: 'https://www.kautilya-pe.com',
  description: 'Buy-side M&A advisory and proprietary deal sourcing firm serving PE, VC, and family office buyers.',
  email: 'contact@kautilya-pe.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressCountry: 'IN',
  },
  priceRange: '$$$$',
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
      <HomeContent />
    </>
  );
}
