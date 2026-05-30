import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: { absolute: 'Careers | Kautilya | Join the Team' },
  description:
    'Join Kautilya: open roles in deal sourcing, market intelligence, and brand. Small team, large impact.',
  keywords: [
    'Kautilya careers', 'M&A analyst jobs India', 'buy-side advisory jobs India',
    'deal sourcing analyst Mumbai', 'acquisition analyst job India',
    'micro PE jobs India', 'search fund jobs India', 'startup jobs Mumbai',
    'M&A marketing jobs India', 'finance jobs Mumbai', 'investment analyst India',
    'M&A jobs India 2026', 'acquisition jobs India', 'deal sourcing jobs India',
    'analyst jobs Mumbai', 'finance analyst jobs India', 'private equity jobs India',
    'search fund jobs India 2026', 'ETA jobs India', 'micro PE jobs India 2026',
    'acquisition analyst intern India', 'M&A internship India',
    'deal sourcing internship India', 'remote M&A jobs India',
    'work from home finance jobs India', 'remote acquisition jobs India',
    'marketing jobs fintech India', 'content marketing M&A India',
    'brand jobs Mumbai', 'fast-paced finance job India',
    'small team big impact jobs India', 'startup finance jobs India',
    'Kautilya job openings', 'Kautilya analyst role', 'Kautilya marketing role',
    'apply Kautilya India', 'join M&A firm India', 'work at acquisition firm India',
    'careers at Kautilya', 'jobs at Kautilya', 'Kautilya hiring India',
    'deal analyst India', 'sourcing analyst India', 'M&A researcher India',
    'acquisition researcher India', 'deal intelligence India',
    'market intelligence jobs India', 'acquisition outreach jobs India',
    'brand and marketing M&A India', 'growth marketing acquisition India',
    'content strategy M&A India', 'newsletter marketing India jobs',
    'social media finance India jobs', 'acquisition community India',
    'join micro PE team India', 'work with search fund India',
    'ETA community jobs India', 'acquisition ecosystem India jobs',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/careers', languages: { 'en': 'https://www.kautilya-pe.com/careers', 'x-default': 'https://www.kautilya-pe.com/careers' } },
  openGraph: {
    title: 'Careers | Kautilya | Join the Team',
    url: 'https://www.kautilya-pe.com/careers',
    description: 'Open roles at Kautilya in deal sourcing, market intelligence, and brand.',
  },
  other: {
    'DC.title': 'Careers | Kautilya | Join the Team',
    'DC.subject': 'M&A analyst jobs India, buy-side advisory careers, deal sourcing jobs Mumbai',
    'DC.type': 'Text',
    pagename: 'Kautilya — Careers',
    abstract: 'Open roles at Kautilya in deal sourcing (Analyst) and brand/content (Marketing). Remote-friendly, India-based.',
    summary: 'Join a small, high-intensity M&A advisory team. Open roles: Analyst and Marketing. Apply at careers@kautilya-pe.com.',
    'og:see_also': 'https://www.kautilya-pe.com/team',
  },
};

const BASE = 'https://www.kautilya-pe.com';

const hiringOrganization = {
  '@type': 'Organization' as const,
  name: 'Kautilya',
  url: BASE,
  sameAs: 'https://www.linkedin.com/company/pocket-fund/',
};

const jobPostings = [
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Analyst — Buy-Side M&A',
    description: 'Research and analyse acquisition targets. Screen sectors, verify financials, assess deal quality, and support mandate execution across the full buy-side process. You will be embedded in live mandates from day one — no bench time.',
    hiringOrganization,
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
    },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: 'India' },
    employmentType: ['FULL_TIME', 'PART_TIME'],
    datePosted: '2026-04-01',
    validThrough: '2026-12-31',
    industry: 'Financial Services / Mergers & Acquisitions',
    occupationalCategory: '13-2051.00',
    workHours: 'Flexible, remote-first',
    responsibilities: 'Sector research and target identification. Financial statement analysis. Off-market outreach campaigns. Deal screening and shortlisting. Diligence support across 8 workstreams. Mandate documentation and reporting.',
    skills: 'Financial analysis, market research, Excel/Google Sheets, outreach, attention to detail, business writing',
    qualifications: 'Strong analytical thinking. Interest in M&A, private equity, or acquisition entrepreneurship. Ability to work independently in a fast-paced environment.',
    educationRequirements: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Bachelor\'s degree or equivalent experience' },
    experienceRequirements: { '@type': 'OccupationalExperienceRequirements', monthsOfExperience: 0 },
    incentiveCompensation: 'Performance bonuses on closed mandates',
    url: `${BASE}/careers`,
    applicationContact: {
      '@type': 'ContactPoint',
      email: 'careers@kautilya-pe.com',
      contactType: 'Human Resources',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Marketing — Brand & Growth',
    description: 'Drive brand, content, and growth for Kautilya. Own the newsletter, social channels, and outbound presence in the micro PE and search fund space. You will shape how the firm is perceived by buyers, sellers, and the acquisition entrepreneurship community.',
    hiringOrganization,
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
    },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: 'India' },
    employmentType: ['FULL_TIME', 'PART_TIME'],
    datePosted: '2026-04-01',
    validThrough: '2026-12-31',
    industry: 'Financial Services / Marketing',
    occupationalCategory: '11-2021.00',
    workHours: 'Flexible, remote-first',
    responsibilities: 'Weekly newsletter writing and distribution. LinkedIn content strategy and posting. Social media management (X, Instagram). Community engagement in ETA and search fund spaces. SEO content creation. Brand partnerships and outreach.',
    skills: 'Content writing, social media management, newsletter marketing, SEO basics, community building, storytelling, financial literacy',
    qualifications: 'Strong writer with genuine interest in M&A, entrepreneurship, or finance. Comfortable working autonomously. Creative with data-driven instincts.',
    educationRequirements: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Bachelor\'s degree or equivalent experience' },
    experienceRequirements: { '@type': 'OccupationalExperienceRequirements', monthsOfExperience: 0 },
    incentiveCompensation: 'Performance bonuses tied to growth metrics',
    url: `${BASE}/careers`,
    applicationContact: {
      '@type': 'ContactPoint',
      email: 'careers@kautilya-pe.com',
      contactType: 'Human Resources',
    },
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: `${BASE}/careers` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CareersContent />
    </>
  );
}
