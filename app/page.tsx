import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: { absolute: 'Kautilya | Buy-Side M&A Advisory & Off-Market Deal Sourcing' },
  description:
    'Buy-side M&A advisory. We find, diligence and close off-market acquisitions from $500K to $10M for PE funds, search funds, family offices and holdcos.',
  alternates: { canonical: 'https://www.kautilya.pe', languages: { 'en': 'https://www.kautilya.pe', 'x-default': 'https://www.kautilya.pe' } },
  openGraph: {
    title: 'Kautilya | Buy-Side M&A Advisory & Off-Market Deal Sourcing',
    url: 'https://www.kautilya.pe',
    description:
      'Buy-side M&A advisory. We find, diligence and close off-market acquisitions from $500K to $10M for PE funds, search funds, family offices and holdcos.',
  },
  other: {
    'DC.title': 'Kautilya | Buy-Side M&A Advisory & Off-Market Deal Sourcing',
    'DC.subject': 'Buy-side M&A advisory, proprietary deal sourcing, micro private equity India',
    pagename: 'Kautilya — Home',
    abstract: 'Kautilya builds proprietary acquisition pipelines for private equity funds, search funds, family offices and holding companies — sector-agnostic, off-market, mandate to close.',
    summary: 'Buy-side M&A advisory firm building proprietary acquisition pipelines for private equity funds, search funds, family offices and holding companies across India, US, UAE, and UK.',
    'og:see_also': 'https://www.kautilya.pe/approach',
  },
};

const BASE = 'https://www.kautilya.pe';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kautilya',
  alternateName: ['Kautilya PE', 'Kautilya Advisory'],
  legalName: 'Kautilya',
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE}/icon.png`,
    width: 512,
    height: 512,
    caption: 'Kautilya — Buy-Side M&A Advisory',
  },
  image: `${BASE}/opengraph-image`,
  description: 'Mumbai-based buy-side M&A advisory. Finds, diligences and closes off-market acquisitions from $500K to $10M for private equity funds, search funds, family offices and holding companies.',
  slogan: 'Proprietary deal flow. From mandate to close.',
  foundingDate: '2023',
  foundingLocation: { '@type': 'Place', name: 'Mumbai, India' },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 9, maxValue: 15 },
  naics: '523130',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'Australia' },
  ],
  knowsAbout: [
    'Buy-side M&A advisory', 'Off-market deal sourcing', 'Forensic due diligence',
    'Lower middle market M&A', 'Private equity', 'Acquisition entrepreneurship',
    'Search funds', 'Micro private equity',
    'Business acquisition India', 'Seller financing', 'Post-acquisition operations',
    'Earnout structuring', 'Asset acquisition', 'Share purchase agreements',
    'LOI negotiation', 'Acquisition due diligence', 'Commercial due diligence',
    'Financial reconstruction', 'Revenue quality analysis', 'SaaS acquisitions',
    'Mobile app acquisitions', 'Digital business acquisitions', 'ETA India',
    'HoldCo strategy', 'Buy and build acquisitions', 'Roll-up acquisitions',
    'Operator placement', 'Post-acquisition integration', 'Business valuation India',
  ],
  brand: {
    '@type': 'Brand',
    name: 'Kautilya',
    logo: `${BASE}/icon.png`,
    slogan: 'Proprietary deal flow. From mandate to close.',
  },
  award: [
    'INSEAD ETA Conference Speaker 2025',
    'SymBiz 2025 Speaker',
  ],
  founder: {
    '@type': 'Person',
    name: 'Dev Shah',
    jobTitle: 'Founder & Lead Advisor',
    description: 'Has bought 7 businesses and sold 2, starting with Sourcely in 2023. Leads every Kautilya mandate, from defining the search to closing the deal.',
    url: `${BASE}/team/dev-shah`,
    nationality: 'Indian',
    knowsAbout: ['Micro private equity', 'Acquisition entrepreneurship', 'Off-market deal sourcing', 'Search funds', 'M&A advisory India'],
    sameAs: [
      'https://www.linkedin.com/in/devlikesbizness',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'M&A Advisor',
      occupationLocation: { '@type': 'City', name: 'Mumbai' },
      description: 'Buy-side M&A advisory and proprietary deal sourcing for private equity funds, search funds, family offices and holding companies.',
    },
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'DealDesk@kautilya.pe',
      contactType: 'sales',
      areaServed: ['IN', 'US', 'GB', 'AE'],
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      email: 'careers@kautilya-pe.com',
      contactType: 'Human Resources',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kautilya Advisory Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full-Service Retainer',
          description: 'End-to-end acquisition mandate: off-market sourcing, forensic diligence, deal structuring, operator placement, and post-acquisition growth.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Forensic Due Diligence',
          description: '8-workstream forensic DD: financial reconstruction, commercial, traffic, tech, operational, strategic, and exit analysis. Delivered in under 15 days.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Research',
          description: '6–8 week deep-dive into a target acquisition sector or universe.',
        },
      },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/kautilya-pe',
    'https://www.youtube.com/@devlikesbizness',
  ],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kautilya',
  url: BASE,
  description: 'Buy-side M&A advisory firm that constructs proprietary acquisition pipelines for private equity funds, search funds, family offices and holding companies.',
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
      url: `${BASE}/icon.png`,
    },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.hero-description', '.section-body'],
  },
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kautilya',
  url: BASE,
  description: 'Buy-side M&A advisory and proprietary deal sourcing firm serving private equity funds, search funds, family offices and holding companies.',
  email: 'DealDesk@kautilya.pe',
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
        itemOffered: { '@type': 'Service', name: 'Due Diligence', description: '8-workstream forensic due diligence. Quoted after the scoping call.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Market Research', description: '6–8 week deep-dive into a target acquisition sector. Quoted after the scoping call.' },
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
