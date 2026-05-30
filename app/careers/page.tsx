import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: { absolute: 'Careers | Kautilya | Join the Team' },
  description:
    'Join Kautilya: open roles in deal sourcing, market intelligence, and brand. Small team, large impact.',
  alternates: { canonical: 'https://www.kautilya-pe.com/careers' },
  openGraph: {
    title: 'Careers | Kautilya | Join the Team',
    url: 'https://www.kautilya-pe.com/careers',
    description: 'Open roles at Kautilya in deal sourcing, market intelligence, and brand.',
  },
};

const BASE_URL = 'https://www.kautilya-pe.com';

const hiringOrganization = {
  '@type': 'Organization' as const,
  name: 'Kautilya',
  url: BASE_URL,
  sameAs: 'https://www.linkedin.com/company/pocket-fund/',
};

const jobPostings = [
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Analyst',
    description: 'Research and analyse acquisition targets. Screen sectors, verify financials, assess deal quality, and support mandate execution across the full buy-side process.',
    hiringOrganization,
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
    },
    employmentType: ['FULL_TIME', 'PART_TIME'],
    workHours: 'Remote / Hybrid',
    url: `${BASE_URL}/careers`,
    applicationContact: {
      '@type': 'ContactPoint',
      email: 'careers@kautilya-pe.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Marketing',
    description: 'Drive brand, content, and growth for Kautilya. Own the newsletter, social channels, and outbound presence in the micro PE and search fund space.',
    hiringOrganization,
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
    },
    employmentType: ['FULL_TIME', 'PART_TIME'],
    workHours: 'Remote / Hybrid',
    url: `${BASE_URL}/careers`,
    applicationContact: {
      '@type': 'ContactPoint',
      email: 'careers@kautilya-pe.com',
    },
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: `${BASE_URL}/careers` },
  ],
};

export default function CareersPage() {
  return (
    <>
      {jobPostings.map((job, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(job) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareersContent />
    </>
  );
}
