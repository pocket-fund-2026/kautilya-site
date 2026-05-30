import type { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: { absolute: 'Portfolio | Kautilya | Acquisitions & Case Studies' },
  description:
    'Kautilya\'s closed acquisition portfolio: $1.5M+ in deal value across SaaS, mobile apps, digital wellness, and immigration tech — with full mandate-to-close case studies.',
  alternates: { canonical: 'https://www.kautilya-pe.com/portfolio' },
  openGraph: {
    title: 'Portfolio | Kautilya | Acquisitions & Case Studies',
    url: 'https://www.kautilya-pe.com/portfolio',
    description: '$1.5M+ in deal value. Case studies across SaaS, mobile apps, digital wellness, and immigration tech.',
  },
};

const BASE_URL = 'https://www.kautilya-pe.com';

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Kautilya Deal Portfolio',
  url: `${BASE_URL}/portfolio`,
  description: 'Closed acquisition portfolio: $1.5M+ in deal value across SaaS, mobile apps, digital wellness, and immigration tech.',
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE_URL,
  },
  hasPart: [
    {
      '@type': 'Article',
      name: 'Inspire3: Full-Scope DD on a $1.8M Digital Wellness Portfolio',
      url: `${BASE_URL}/stories/inspire3`,
      description: '30,134 transactions audited across 19 websites in under 15 days.',
    },
    {
      '@type': 'Article',
      name: 'Borderless: Rewriting the M&A Playbook for UK Immigration',
      url: `${BASE_URL}/stories/borderless`,
      description: 'A buyer wanted to grow by acquisition in a sector where almost nobody sells. We mapped the market from scratch.',
    },
    {
      '@type': 'Article',
      name: 'Dino Games: Sourcing a Cash-Flow-Positive Mobile Game',
      url: `${BASE_URL}/stories/dino-games`,
      description: 'From off-market discovery to operator deployment in 8 weeks.',
    },
    {
      '@type': 'Article',
      name: 'Runify: Structuring a Mobile App Acquisition',
      url: `${BASE_URL}/stories/runify`,
      description: 'A $110K mobile app deal where the buyer only had to put $20K in cash at closing.',
    },
    {
      '@type': 'Article',
      name: 'SmartPrompt: Two Deals Killed, One Asset Acquired',
      url: `${BASE_URL}/stories/smartprompt`,
      description: 'Closed a GPT-native education platform at a 200x discount to market comparables.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${BASE_URL}/portfolio` },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PortfolioContent />
    </>
  );
}
