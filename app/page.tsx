import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: { absolute: 'Kautilya | Buy-Side Advisory & Deal Sourcing India' },
  description:
    'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  keywords: [
    'buy-side advisory India', 'proprietary deal sourcing', 'off-market acquisitions',
    'M&A advisory India', 'buy a business India', 'acquisition pipeline',
    'micro private equity India', 'search fund India', 'ETA India',
    'forensic due diligence', 'family office deal sourcing', 'PE advisory India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com' },
  openGraph: {
    title: 'Kautilya | Buy-Side Advisory & Deal Sourcing India',
    url: 'https://www.kautilya-pe.com',
    description:
      'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  },
};

const BASE = 'https://www.kautilya-pe.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kautilya',
  alternateName: 'Kautilya PE',
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE}/icon.svg`,
    width: 512,
    height: 512,
  },
  description:
    'Buy-side advisory firm that constructs proprietary acquisition pipelines on demand: in any sector, against any criteria, from first principles.',
  foundingDate: '2023',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
  areaServed: ['IN', 'US', 'GB', 'AE', 'SG', 'AU'],
  knowsAbout: [
    'Buy-side M&A advisory',
    'Off-market deal sourcing',
    'Forensic due diligence',
    'Acquisition entrepreneurship',
    'Search funds',
    'Micro private equity',
    'Business acquisition India',
    'Seller financing',
    'Post-acquisition operations',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@kautilya-pe.com',
    contactType: 'sales',
    areaServed: ['IN', 'US', 'GB', 'AE'],
    availableLanguage: 'English',
  },
  sameAs: [
    'https://x.com/microsearchfund',
    'https://www.instagram.com/microsearchfund/',
    'https://www.linkedin.com/company/pocket-fund/',
    'https://www.youtube.com/@devlikesbizness',
  ],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kautilya',
  url: BASE,
  description: 'Buy-side M&A advisory firm that constructs proprietary acquisition pipelines for PE, VC, and family office buyers.',
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE}/stories?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE}/icon.svg`,
    },
  },
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kautilya',
  url: BASE,
  description: 'Buy-side M&A advisory and proprietary deal sourcing firm serving PE, VC, and family office buyers.',
  email: 'contact@kautilya-pe.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  priceRange: '$$$$',
  currenciesAccepted: 'USD, INR, AED, GBP',
  paymentAccepted: 'Bank Transfer, Wire Transfer',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kautilya Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Full-Service Retainer', description: 'End-to-end acquisition mandate: sourcing, diligence, structuring, and post-acquisition operations.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Due Diligence', description: '8-workstream forensic due diligence starting at $6,500.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Market Research', description: '6–8 week deep-dive into a target acquisition sector. $3,500–$5,000.' },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <HomeContent />
    </>
  );
}
