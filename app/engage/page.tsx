import type { Metadata } from 'next';
import EngageContent from './EngageContent';

export const metadata: Metadata = {
  title: { absolute: 'Engage | Kautilya | Start Your Acquisition Mandate' },
  description:
    'Tell Kautilya your acquisition thesis and we\'ll show you how we\'d find it. Submit your mandate criteria or book a call to get started.',
  keywords: [
    'start acquisition mandate India', 'hire buy-side advisor India',
    'M&A advisory contact India', 'book acquisition call India',
    'business acquisition mandate', 'off-market deal sourcing retainer',
    'buy a business India contact', 'PE advisory India enquiry',
    'micro private equity advisor contact', 'search fund advisor India',
    'acquisition deal flow contact', 'due diligence India hire',
    'contact M&A advisor India', 'hire acquisition advisor India',
    'M&A advisory enquiry India', 'start M&A mandate India',
    'submit acquisition mandate India', 'acquisition mandate submission India',
    'book M&A call India', 'schedule acquisition call India',
    'talk to acquisition advisor India', 'acquisition retainer enquiry India',
    'M&A retainer enquiry India', 'buy-side retainer India',
    'acquisition consultation India', 'M&A consultation India',
    'deal sourcing enquiry India', 'proprietary deal flow enquiry India',
    'off-market deal enquiry India', 'VC advisory India enquiry',
    'family office advisory contact India', 'search fund advisor enquiry India',
    'ETA advisor contact India', 'acquisition entrepreneur advisor India',
    'due diligence enquiry India', 'standalone DD enquiry India',
    'DD advisory contact India', 'first acquisition support India',
    'acquisition mentorship India', 'acquisition coaching India',
    'business acquisition help India', 'finding businesses to buy help India',
    'acquisition mandate criteria India', 'define acquisition thesis India',
    'acquisition brief India', 'deal brief India',
    'M&A brief India', 'buy-side brief India',
    'PE fund acquisition enquiry India', 'HoldCo acquisition enquiry India',
    'roll-up acquisition enquiry India', 'bolt-on acquisition enquiry India',
    'platform acquisition enquiry India', 'strategic acquisition enquiry India',
    'SaaS acquisition enquiry India', 'tech acquisition enquiry India',
    'digital asset acquisition enquiry India', 'online business acquisition enquiry India',
    'acquisition advisory India contact', 'M&A advisor Mumbai contact',
    'buy-side M&A contact India', 'acquisition pipeline enquiry India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/engage' },
  openGraph: {
    title: 'Engage | Kautilya | Start Your Acquisition Mandate',
    url: 'https://www.kautilya-pe.com/engage',
    description: 'Submit your acquisition thesis or book a call. Kautilya builds your proprietary deal pipeline from day one.',
  },
  other: {
    'DC.title': 'Engage | Kautilya | Start Your Acquisition Mandate',
    'DC.subject': 'Start M&A mandate, hire buy-side advisor India, acquisition retainer enquiry',
    'DC.type': 'InteractiveResource',
    pagename: 'Kautilya — Engage',
    abstract: 'Submit your acquisition thesis or book a call. Kautilya builds your proprietary deal pipeline from day one.',
    summary: 'Contact Kautilya to start a buy-side acquisition mandate — retainers from $2,500/month, standalone DD from $6,500.',
    'og:see_also': 'https://www.kautilya-pe.com/approach',
  },
};

const BASE = 'https://www.kautilya-pe.com';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Engage with Kautilya',
  url: `${BASE}/engage`,
  description: 'Submit your acquisition mandate criteria or book a call. Kautilya builds proprietary deal pipelines for PE, VC, and family office buyers.',
  inLanguage: 'en-US',
  mainEntity: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
    email: 'contact@kautilya-pe.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@kautilya-pe.com',
      contactType: 'sales',
      areaServed: ['IN', 'US', 'AE', 'GB'],
      availableLanguage: 'English',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Engage', item: `${BASE}/engage` },
  ],
};

export default function EngagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EngageContent />
    </>
  );
}
