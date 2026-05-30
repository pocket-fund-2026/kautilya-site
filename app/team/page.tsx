import type { Metadata } from 'next';
import TeamContent from './TeamContent';

export const metadata: Metadata = {
  title: { absolute: 'Team | Kautilya | M&A Advisory Specialists' },
  description:
    'Meet the Kautilya team: analysts, operators, and M&A specialists who have sourced and closed acquisitions across SaaS, digital media, mobile apps, and professional services.',
  keywords: [
    'Kautilya team', 'M&A advisory team India', 'buy-side advisory analysts',
    'acquisition specialist India', 'due diligence analysts India',
    'Dev Shah Kautilya', 'micro PE team India', 'search fund team India',
    'deal sourcing analysts', 'M&A operator India',
    'Dev Shah micro PE', 'Dev Shah acquisition entrepreneur India',
    'Dev Shah Mumbai', 'Dev Shah founder Kautilya',
    'Kautilya founders India', 'Kautilya analysts India',
    'acquisition team India', 'M&A team Mumbai', 'deal team India',
    'due diligence team India', 'research team acquisition India',
    'AI-powered acquisition team', 'technology-enabled M&A India',
    'data-driven deal sourcing India', 'buy-side advisory experts India',
    'acquisition specialists Mumbai', 'M&A professionals India',
    'deal sourcing experts India', 'acquisition operators India',
    'M&A practitioners India', 'Aum Thakarkar analyst Kautilya',
    'Ganesh Jagtap tech Kautilya', 'Manas Kogta AI Kautilya',
    'micro PE operator India', 'search fund operator India',
    'ETA operator India', 'acquisition entrepreneur India',
    'acquisition team ethos India', 'M&A team culture India',
    'small M&A team India', 'focused advisory team India',
    'rigor discretion conviction velocity', 'M&A advisory ethos India',
    'analyst team buy-side India', 'senior M&A practitioners India',
    'Kautilya advisory people', 'acquisition advisory counsel India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/team' },
  openGraph: {
    title: 'Team | Kautilya | M&A Advisory Specialists',
    url: 'https://www.kautilya-pe.com/team',
    description: 'Analysts, operators, and M&A specialists behind Kautilya\'s proprietary deal sourcing practice.',
  },
  other: {
    'DC.title': 'Team | Kautilya | M&A Advisory Specialists',
    'DC.subject': 'Kautilya team, M&A analysts India, acquisition specialists, Dev Shah',
    'DC.creator': 'Dev Shah',
    'DC.contributor': 'Aum Thakarkar, Ganesh Jagtap, Manas Kogta, Pushkar Rathod, Darshana Yadav, Aryan Solanki, Ritish Maheshwari, Aditya Negi',
    'DC.type': 'Text',
    pagename: 'Kautilya — Team',
    abstract: '9-person team of analysts, operators, and M&A specialists behind Kautilya\'s proprietary deal sourcing practice.',
    summary: 'Led by Dev Shah (Founder), the Kautilya team covers deal sourcing, forensic due diligence, tech, AI workflows, and marketing.',
    'og:see_also': 'https://www.kautilya-pe.com/careers',
  },
};

const BASE_URL = 'https://www.kautilya-pe.com';

const org = { '@type': 'Organization', name: 'Kautilya', url: BASE_URL };

const teamSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Team | Kautilya | M&A Advisory Specialists',
  url: `${BASE_URL}/team`,
  description: 'Meet the Kautilya team — analysts, operators, and M&A specialists who have sourced and closed acquisitions across SaaS, digital media, mobile apps, and professional services.',
  about: {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE_URL,
    description: 'Buy-side M&A advisory firm. 9-person team covering deal sourcing, forensic DD, tech, AI workflows, and marketing.',
    employee: [
      {
        '@type': 'Person',
        name: 'Dev Shah',
        jobTitle: 'Founder',
        description: 'Micro PE operator who has personally acquired and exited multiple businesses. Leads every engagement at Kautilya.',
        nationality: 'Indian',
        url: `${BASE_URL}/team`,
        image: `${BASE_URL}/images/aditya.jpeg`,
        worksFor: org,
        knowsAbout: ['Micro private equity', 'Off-market deal sourcing', 'Acquisition entrepreneurship', 'M&A advisory India', 'Search funds', 'Forensic due diligence'],
        hasOccupation: { '@type': 'Occupation', name: 'Founder & M&A Advisor', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        award: ['INSEAD ETA Conference Speaker 2025', 'SymBiz 2025 Speaker'],
        sameAs: ['https://x.com/microsearchfund', 'https://www.instagram.com/microsearchfund/'],
      },
      {
        '@type': 'Person',
        name: 'Aum Thakarkar',
        jobTitle: 'Chief Analyst',
        description: 'Leads research and analysis across the firm, delivers high-conviction insights on markets and opportunities.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Market research', 'Acquisition target analysis', 'Financial analysis', 'Deal sourcing', 'Sector mapping'],
        hasOccupation: { '@type': 'Occupation', name: 'Chief Analyst', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Ganesh Jagtap',
        jobTitle: 'Tech Head',
        description: 'Drives the technology vision, builds scalable systems, and ensures secure, efficient platforms.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Software development', 'System architecture', 'Data engineering', 'Platform development'],
        hasOccupation: { '@type': 'Occupation', name: 'Head of Technology', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Manas Kogta',
        jobTitle: 'AI Consultant',
        description: 'Designs intelligent workflows and applies AI to accelerate diligence and unlock data-driven edges across mandates.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Artificial intelligence', 'AI workflows', 'Machine learning', 'Data analysis', 'AI-assisted due diligence'],
        hasOccupation: { '@type': 'Occupation', name: 'AI Consultant', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Pushkar Rathod',
        jobTitle: 'Analyst',
        description: 'Specializes in structuring complex cross-border buyouts and leading late-stage negotiations.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Cross-border M&A', 'Deal structuring', 'Acquisition negotiations', 'Due diligence'],
        hasOccupation: { '@type': 'Occupation', name: 'M&A Analyst', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Darshana Yadav',
        jobTitle: 'Analyst',
        description: 'Supports deal origination with comprehensive sector screening and data aggregation.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Deal origination', 'Sector screening', 'Data aggregation', 'Market research'],
        hasOccupation: { '@type': 'Occupation', name: 'M&A Analyst', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Aryan Solanki',
        jobTitle: 'Marketing Head',
        description: 'Drives brand, content, and growth strategy for Kautilya across social, newsletter, and outbound channels.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Brand marketing', 'Content strategy', 'Social media', 'Newsletter marketing', 'Growth marketing'],
        hasOccupation: { '@type': 'Occupation', name: 'Head of Marketing', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Ritish Maheshwari',
        jobTitle: 'Founder\'s Office',
        description: 'Works closely with leadership on high-impact projects, strategic initiatives, partnerships, and day-to-day execution.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Strategic initiatives', 'Business operations', 'Partnerships', 'Project management'],
        hasOccupation: { '@type': 'Occupation', name: 'Founder\'s Office', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Aditya Negi',
        jobTitle: 'Tech Support',
        description: 'Provides technical assistance and ensures smooth operation of systems for clients and internal teams.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Technical support', 'System administration', 'Client support'],
        hasOccupation: { '@type': 'Occupation', name: 'Tech Support', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Team', item: `${BASE_URL}/team` },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TeamContent />
    </>
  );
}
