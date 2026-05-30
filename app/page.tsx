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
    'acquisition entrepreneurship India', 'buy and build strategy',
    'roll-up acquisitions', 'business acquisition advisory', 'acquisition mandate India',
    'deal sourcing firm India', 'proprietary deal flow India', 'M&A support India',
    'company acquisition India', 'acquisition financing India', 'seller financing India',
    'earnout India', 'acquisition due diligence India', 'financial due diligence India',
    'SaaS acquisition advisory', 'tech acquisition India', 'acquisition retainer India',
    'M&A retainer India', 'advisory retainer India', 'acquisition specialist Mumbai',
    'M&A specialist India', 'business broker alternative India',
    'cash flow business India', 'buy profitable business India',
    'SME acquisition advisory India', 'founder-led business acquisition India',
    'bootstrapped business acquisition India', 'digital asset acquisition India',
    'online business acquisition advisory', 'internet business M&A India',
    'acquisition for PE funds India', 'acquisition for family offices India',
    'acquisition for VCs India', 'search fund advisory India',
    'ETA advisory India', 'micro PE advisory India',
    'business purchase India', 'acquire company India', 'takeover advisory India',
    'corporate acquisition India', 'strategic acquisition India',
    'bolt-on acquisition India', 'platform acquisition India',
    'off-market deal flow India', 'proprietary sourcing India',
    'deal origination advisory India', 'investment mandate India',
    'acquisition opportunity India', 'buying a business guide India',
    'how to acquire a business India', 'steps to buy a business India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com', languages: { 'en': 'https://www.kautilya-pe.com', 'x-default': 'https://www.kautilya-pe.com' } },
  openGraph: {
    title: 'Kautilya | Buy-Side Advisory & Deal Sourcing India',
    url: 'https://www.kautilya-pe.com',
    description:
      'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  },
  other: {
    'DC.title': 'Kautilya | Buy-Side Advisory & Deal Sourcing India',
    'DC.subject': 'Buy-side M&A advisory, proprietary deal sourcing, micro private equity India',
    pagename: 'Kautilya — Home',
    abstract: 'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers — sector-agnostic, off-market, mandate to close.',
    summary: 'Buy-side M&A advisory firm building proprietary acquisition pipelines for PE, VC, and family office buyers across India, US, UAE, and UK.',
    'og:see_also': 'https://www.kautilya-pe.com/approach',
  },
};

const BASE = 'https://www.kautilya-pe.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kautilya',
  alternateName: ['Kautilya PE', 'Kautilya Advisory', 'Pocket Fund'],
  legalName: 'Kautilya',
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE}/icon.svg`,
    width: 512,
    height: 512,
    caption: 'Kautilya — Buy-Side M&A Advisory',
  },
  image: `${BASE}/opengraph-image`,
  description: 'Buy-side advisory firm that constructs proprietary acquisition pipelines on demand: in any sector, against any criteria, from first principles.',
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
    'Acquisition entrepreneurship', 'Search funds', 'Micro private equity',
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
    logo: `${BASE}/icon.svg`,
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
    description: '24-year-old micro PE operator. Personally acquired and exited multiple businesses. Leads every Kautilya engagement.',
    url: `${BASE}/team`,
    nationality: 'Indian',
    knowsAbout: ['Micro private equity', 'Acquisition entrepreneurship', 'Off-market deal sourcing', 'Search funds', 'M&A advisory India'],
    sameAs: ['https://x.com/microsearchfund', 'https://www.instagram.com/microsearchfund/'],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'M&A Advisor',
      occupationLocation: { '@type': 'City', name: 'Mumbai' },
      description: 'Buy-side M&A advisory and proprietary deal sourcing for PE, VC, and family office buyers.',
    },
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'contact@kautilya-pe.com',
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
          offers: { '@type': 'Offer', price: '2500', priceCurrency: 'USD', priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitText: 'month' } } },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Forensic Due Diligence',
          description: '8-workstream forensic DD: financial reconstruction, commercial, traffic, tech, operational, strategic, and exit analysis. Delivered in under 15 days.',
          offers: { '@type': 'Offer', price: '6500', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Research',
          description: '6–8 week deep-dive into a target acquisition sector or universe.',
          offers: { '@type': 'Offer', price: '3500', priceCurrency: 'USD' },
        },
      },
    ],
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

const eventSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'INSEAD ETA Conference 2025',
    description: 'Dev Shah, Founder of Kautilya, speaks on micro private equity, acquisition entrepreneurship, and off-market deal sourcing in India.',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'INSEAD',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fontainebleau',
        addressCountry: 'FR',
      },
    },
    performer: { '@type': 'Person', name: 'Dev Shah', url: `${BASE}/team` },
    organizer: { '@type': 'Organization', name: 'INSEAD', url: 'https://www.insead.edu' },
    about: [
      { '@type': 'Thing', name: 'Acquisition entrepreneurship' },
      { '@type': 'Thing', name: 'Micro private equity India' },
      { '@type': 'Thing', name: 'Search fund advisory' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'SymBiz 2025',
    description: 'Dev Shah speaks on buy-side M&A advisory, proprietary deal sourcing, and building acquisition pipelines for PE and family office buyers.',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'SymBiz Conference',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressCountry: 'IN',
      },
    },
    performer: { '@type': 'Person', name: 'Dev Shah', url: `${BASE}/team` },
    organizer: { '@type': 'Organization', name: 'SymBiz' },
    about: [
      { '@type': 'Thing', name: 'Buy-side M&A advisory' },
      { '@type': 'Thing', name: 'Proprietary deal sourcing' },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {eventSchemas.map((event, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }} />
      ))}
      <HomeContent />
    </>
  );
}
