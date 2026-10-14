import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = 'https://www.kautilya-pe.com';
const PAGE_URL = `${BASE_URL}/team/dev-shah`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/devlikesbizness';
const DESCRIPTION =
  'Dev Shah founded Kautilya and leads every mandate. He has bought 7 businesses and sold 2, starting with Sourcely in 2023.';

export const metadata: Metadata = {
  title: { absolute: 'Dev Shah | Founder | Kautilya' },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL, languages: { 'en': PAGE_URL, 'x-default': PAGE_URL } },
  openGraph: {
    type: 'profile',
    title: 'Dev Shah | Founder | Kautilya',
    url: PAGE_URL,
    description: DESCRIPTION,
    images: [{ url: '/images/Dev.webp', alt: 'Dev Shah, Founder, Kautilya' }],
  },
  other: {
    'DC.title': 'Dev Shah | Founder | Kautilya',
    'DC.creator': 'Dev Shah',
    pagename: 'Kautilya: Dev Shah',
    'og:see_also': `${BASE_URL}/team`,
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: PAGE_URL,
  mainEntity: {
    '@type': 'Person',
    name: 'Dev Shah',
    jobTitle: 'Founder',
    description: DESCRIPTION,
    url: PAGE_URL,
    image: `${BASE_URL}/images/Dev.webp`,
    worksFor: { '@type': 'Organization', name: 'Kautilya', url: BASE_URL },
    sameAs: [LINKEDIN_URL],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Team', item: `${BASE_URL}/team` },
    { '@type': 'ListItem', position: 3, name: 'Dev Shah', item: PAGE_URL },
  ],
};

export default function DevShahPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="page">
        <div className="page-hero" style={{ maxWidth: 760 }}>
          <div className="section-eyebrow">The Counsel</div>
          <h1 className="section-title">Dev Shah</h1>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 32,
            }}
          >
            Founder
          </div>
          <img
            src="/images/Dev.webp"
            alt="Dev Shah, Founder, Kautilya"
            width={240}
            height={240}
            style={{ borderRadius: 24, objectFit: 'cover', marginBottom: 32, border: '1px solid var(--border)' }}
          />
          <p className="section-body">
            Dev Shah founded Kautilya and leads every mandate. He has bought 7 businesses and sold 2, starting with
            Sourcely, a $4,000 student tool, in 2023. Kautilya has closed 8 deals and contacted more than 10,000
            founders off-market.
          </p>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', marginTop: 36 }}>
            <Link href="/engage" className="cta-btn">
              Contact Dev
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="service-cta"
            >
              LinkedIn →
            </a>
          </div>
          <div style={{ marginTop: 48 }}>
            <Link href="/team" className="service-cta">
              ← Back to the team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
