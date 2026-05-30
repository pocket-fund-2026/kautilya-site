import type { Metadata } from 'next';
import StoriesContent from './StoriesContent';

export const metadata: Metadata = {
  title: { absolute: 'Stories | Kautilya | Acquisitions & Market Intelligence' },
  description:
    'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice — from a Sunday newsletter to $1M+ in closed acquisitions.',
  keywords: [
    'acquisition entrepreneurship India', 'buy a business India blog',
    'M&A deal journal', 'search fund stories India', 'micro private equity blog',
    'how to buy a business India', 'acquisition case studies', 'off-market deal sourcing guide',
    'ETA content India', 'business acquisition insights', 'due diligence guide India',
    'seller financing explained', 'buy and build strategy India',
    'acquisition blog India', 'M&A blog India', 'deal sourcing blog India',
    'search fund blog India', 'micro PE blog India', 'ETA blog India',
    'acquisition newsletter India', 'M&A newsletter India', 'deal journal India',
    'business acquisition content India', 'acquisition education India',
    'deal breakdown India', 'acquisition analysis India',
    'DD checklist article India', 'acquisition framework guide India',
    'earnout guide India', 'deal structure guide India',
    'search fund explained India', 'micro PE explained India',
    'acquisition entrepreneurship explained', 'off-market deals explained India',
    'proprietary deal sourcing explained', 'cold outreach acquisition guide India',
    'SaaS valuation India', 'business valuation guide India',
    'how to value a business India', 'acquisition due diligence guide India',
    'financial due diligence guide India', 'commercial due diligence guide India',
    'business acquisition for beginners India', 'first acquisition guide India',
    'recurring revenue business India', 'bootstrapped business acquisition India',
    'deal sourcing strategies India', 'outreach strategies acquisition India',
    'finding businesses to buy India', 'acquisition market intelligence India',
    'M&A market India insights', 'acquisition trends India 2026',
    'SMB acquisition guide India', 'online business acquisition guide India',
    'SaaS acquisition guide India', 'mobile app acquisition guide India',
    'digital business acquisition guide', 'content site acquisition India',
    'newsletter acquisition India', 'e-commerce acquisition India',
    'acquisition financing guide India', 'seller financing guide India',
    'earnout structure guide India', 'asset vs share sale India',
    'LOI guide India', 'letter of intent acquisition India',
    'acquisition negotiation guide India', 'post-acquisition guide India',
    'operator placement guide India', '100 day plan post-acquisition India',
    'acquisition exit guide India', 'exit strategy India', 'sell business India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/stories' },
  openGraph: {
    title: 'Stories | Kautilya | Acquisitions & Market Intelligence',
    url: 'https://www.kautilya-pe.com/stories',
    description: 'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice.',
  },
  other: {
    'DC.title': 'Stories | Kautilya | Acquisitions & Market Intelligence',
    'DC.subject': 'Acquisition entrepreneurship, M&A case studies, deal sourcing guides, micro private equity India',
    'DC.type': 'Collection',
    pagename: 'Kautilya — Stories',
    abstract: '15 deal journals, case studies, and market intelligence articles from Kautilya\'s buy-side advisory practice.',
    summary: 'Acquisition case studies and market intelligence covering search funds, micro PE, off-market deal sourcing, and due diligence in India.',
    'og:see_also': 'https://www.kautilya-pe.com/portfolio',
  },
};

const BASE = 'https://www.kautilya-pe.com';

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Kautilya Stories',
  url: `${BASE}/stories`,
  description: 'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice.',
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
    logo: { '@type': 'ImageObject', url: `${BASE}/icon.svg` },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Stories', item: `${BASE}/stories` },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <StoriesContent />
    </>
  );
}
