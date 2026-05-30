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
    'acquisition process steps India', 'how to acquire a business step by step',
    'deal sourcing process India', 'founder outreach methodology',
    'acquisition timeline India', 'time to close acquisition India',
    'LOI to close India', 'due diligence workstreams India',
    'DD checklist India', 'diligence process buy-side',
    'buy-side mandate execution', 'mandate definition acquisition',
    'acquisition criteria definition', 'target universe building India',
    'market mapping acquisition India', 'sector mapping M&A India',
    'cold outreach acquisition India', 'LinkedIn outreach deals India',
    'email outreach acquisition India', 'financial due diligence checklist India',
    'commercial due diligence checklist', 'operational due diligence India',
    'deal structure India', 'earnout structure India', 'seller note India',
    'acquisition close process', 'post-acquisition operations India',
    'operator placement India', 'acquisition framework India',
    'buy-side framework', 'acquisition playbook India',
    'first-time acquisition guide India', 'how to do due diligence India',
    'SaaS due diligence checklist India', 'tech due diligence India',
    'financial reconstruction India', 'acquisition negotiation India',
    'deal negotiation India', 'M&A negotiation India',
    'asset purchase India', 'share purchase India', 'business valuation India',
    'revenue quality analysis', 'customer concentration risk analysis',
    'churn analysis acquisition', 'acquisition integration India',
    '100 day plan acquisition', 'post-close playbook India',
    'deal kill criteria', 'acquisition red flags India',
    'buy-side process India', 'five phase acquisition', 'mandate to close process',
    'universe construction M&A', 'targeted outreach acquisition',
    'diligence and structuring India', 'execution and close M&A',
    'acquisition success rate India', 'response rate outreach acquisition',
    'off-market deal process India', 'proprietary sourcing process India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/approach' },
  openGraph: {
    title: 'Approach | Kautilya | M&A Methodology & Deal Sourcing',
    url: 'https://www.kautilya-pe.com/approach',
    description: 'Five-phase acquisition process: mandate definition, universe construction, targeted outreach, diligence, and close.',
  },
  other: {
    'DC.title': 'Approach | Kautilya | M&A Methodology & Deal Sourcing',
    'DC.subject': 'M&A methodology, acquisition process, due diligence, deal sourcing India',
    pagename: 'Kautilya — Approach',
    abstract: 'Five-phase buy-side acquisition methodology: mandate definition, universe construction, targeted outreach, forensic diligence, and close.',
    summary: 'Kautilya\'s proprietary 5-phase acquisition process — 2,500+ founder conversations, 99.83% match rate, diligence in under 15 days.',
    'og:see_also': 'https://www.kautilya-pe.com/portfolio',
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Execute a Buy-Side Business Acquisition in India',
  description: 'Kautilya\'s 5-phase methodology for building proprietary acquisition pipelines and closing off-market deals.',
  totalTime: 'P90D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Mandate Definition',
      text: 'Define the acquisition thesis: sector, geography, revenue range, business model, deal structure preferences, and exclusion criteria. Produces a written mandate document guiding all sourcing.',
      url: `${BASE}/approach`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Universe Construction',
      text: 'Build a proprietary target list from first principles — not broker databases. Typical universe: 500–2,500 companies per mandate using LinkedIn, industry directories, and direct research.',
      url: `${BASE}/approach`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Targeted Outreach',
      text: 'Personalised founder outreach via cold email, LinkedIn, and Loom video. 14.8% response rate vs industry average of ~5%. Typical volume: 2,500+ founder conversations per mandate.',
      url: `${BASE}/approach`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Diligence & Structuring',
      text: '8-workstream forensic due diligence: financial, commercial, email & CRM, traffic & conversion, tech & data, operational, strategic, and exit. Creative structures: seller financing, earnouts, revenue-based payments. Delivered in under 15 days.',
      url: `${BASE}/approach`,
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Execution & Close',
      text: 'Deal structuring, negotiation support, operator placement, and 30-60-90 day post-close plan. Typical timeline: 30–90 days from mandate start to close.',
      url: `${BASE}/approach`,
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ApproachContent />
    </>
  );
}
