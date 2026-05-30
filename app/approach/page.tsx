import type { Metadata } from 'next';
import ApproachContent from './ApproachContent';

export const metadata: Metadata = {
  title: { absolute: 'Approach | Kautilya | M&A Methodology & Deal Sourcing' },
  description:
    'From mandate definition to close: five-phase acquisition process with 2,500+ founder conversations, 99.83% transaction match rate, and diligence delivered in under 15 days.',
  keywords: [
    'M&A methodology India', 'acquisition process', 'buy-side deal sourcing process',
    'off-market sourcing methodology', 'forensic due diligence process',
    'acquisition mandate', 'deal origination India', 'proprietary deal flow',
    'M&A due diligence India', 'business acquisition process India',
    'search fund methodology', 'ETA acquisition process',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/approach' },
  openGraph: {
    title: 'Approach | Kautilya | M&A Methodology & Deal Sourcing',
    url: 'https://www.kautilya-pe.com/approach',
    description: 'Five-phase acquisition process: mandate definition, universe construction, targeted outreach, diligence, and close.',
  },
};

const BASE = 'https://www.kautilya-pe.com';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Buy-Side M&A Advisory',
  url: `${BASE}/approach`,
  description: 'Kautilya constructs proprietary acquisition pipelines for PE, VC, and family office buyers — sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  provider: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  serviceType: 'Buy-Side M&A Advisory',
  serviceOutput: 'Proprietary acquisition pipeline with vetted off-market deals, forensic due diligence reports, and post-acquisition operational support.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kautilya Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full-Service Retainer',
          description: 'End-to-end acquisition mandate: sourcing, diligence, deal structuring, and post-acquisition operations. $2,500–$10,000/month plus success fees.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Due Diligence',
          description: '8-workstream forensic due diligence: financial, commercial, traffic, tech, operational, and strategic analysis. Starting at $6,500 plus 0.3% success fee.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Research',
          description: '6–8 week deep-dive into a target sector or acquisition universe. $3,500–$5,000.',
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Approach', item: `${BASE}/approach` },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ApproachContent />
    </>
  );
}
