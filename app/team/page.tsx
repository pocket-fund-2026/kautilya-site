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
    'data-driven deal sourcing', 'buy-side advisory experts India',
    'acquisition specialists Mumbai', 'M&A professionals India',
    'deal sourcing experts', 'acquisition operators India',
    'M&A practitioners India', 'Aum Thakarkar analyst Kautilya',
    'Ganesh Jagtap CTO Kautilya',
    'micro PE operator India', 'search fund operator India',
    'ETA operator India', 'acquisition entrepreneur India',
    'acquisition team ethos India', 'M&A team culture India',
    'small M&A team India', 'focused advisory team India',
    'rigor discretion conviction velocity', 'M&A advisory ethos India',
    'analyst team buy-side India',
    'Kautilya advisory people', 'acquisition advisory counsel India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/team', languages: { 'en': 'https://www.kautilya-pe.com/team', 'x-default': 'https://www.kautilya-pe.com/team' } },
  openGraph: {
    title: 'Team | Kautilya | M&A Advisory Specialists',
    url: 'https://www.kautilya-pe.com/team',
    description: 'Analysts, operators, and M&A specialists behind Kautilya\'s proprietary deal sourcing practice.',
  },
  other: {
    'DC.title': 'Team | Kautilya | M&A Advisory Specialists',
    'DC.subject': 'Kautilya team, M&A analysts India, acquisition specialists, Dev Shah',
    'DC.creator': 'Dev Shah',
    'DC.contributor': 'Aum Thakarkar, Ganesh Jagtap, Pushkar Rathod, Sidharth Zambre, Deep Keswani, Aditya Gada, Siddhant Mehta, Gaurav Banerjee, Aditya Negi, Aryan Solanki, Kabir Dhumale',
    'DC.type': 'Text',
    pagename: 'Kautilya — Team',
    abstract: 'The analysts, operators, and M&A specialists behind Kautilya\'s proprietary deal sourcing practice. Every mandate is led by Dev Shah and run by a dedicated analyst.',
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
    description: 'Buy-side M&A advisory firm. The team covers deal sourcing, forensic DD, business development, tech, and marketing.',
    employee: [
      {
        '@type': 'Person',
        name: 'Dev Shah',
        jobTitle: 'Founder',
        description: 'Has bought 7 businesses and sold 2, starting with Sourcely in 2023. Leads every Kautilya mandate, from defining the search to closing the deal.',
        nationality: 'Indian',
        url: `${BASE_URL}/team/dev-shah`,
        image: `${BASE_URL}/images/Dev.webp`,
        worksFor: org,
        knowsAbout: ['Micro private equity', 'Off-market deal sourcing', 'Acquisition entrepreneurship', 'M&A advisory India', 'Search funds', 'Forensic due diligence'],
        hasOccupation: { '@type': 'Occupation', name: 'Founder & M&A Advisor', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        award: ['INSEAD ETA Conference Speaker 2025', 'SymBiz 2025 Speaker'],
        sameAs: ['https://www.linkedin.com/in/devlikesbizness/'],
      },
      {
        '@type': 'Person',
        name: 'Aum Thakarkar',
        jobTitle: 'Co-founder & COO',
        description: 'Runs client mandates and the sales pipeline, and coordinates due diligence across engagements.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Market research', 'Acquisition target analysis', 'Financial analysis', 'Deal sourcing', 'Sector mapping'],
        hasOccupation: { '@type': 'Occupation', name: 'Co-founder & COO', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        sameAs: ['https://www.linkedin.com/in/aumthakarkar/'],
      },
      {
        '@type': 'Person',
        name: 'Ganesh Jagtap',
        jobTitle: 'CTO',
        description: 'Drives the technology vision, builds scalable systems, and ensures secure, efficient platforms.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Software development', 'System architecture', 'Data engineering', 'Platform development'],
        hasOccupation: { '@type': 'Occupation', name: 'CTO', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
      },
      {
        '@type': 'Person',
        name: 'Pushkar Rathod',
        jobTitle: 'Lead Analyst',
        description: 'Leads the analyst team on client mandates: market maps, target write-ups and seller outreach. Runs hiring.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Market mapping', 'Target analysis', 'Seller outreach', 'Due diligence'],
        hasOccupation: { '@type': 'Occupation', name: 'Lead Analyst', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        sameAs: ['https://www.linkedin.com/in/pushkarrathod12/'],
      },
      {
        '@type': 'Person',
        name: 'Sidharth Zambre',
        jobTitle: 'Analyst',
        description: 'Sources and screens targets on client mandates and runs founder outreach.',
        worksFor: org,
        image: `${BASE_URL}/images/sidharth-zambre.webp`,
        knowsAbout: ['Target sourcing', 'Target screening', 'Founder outreach'],
        hasOccupation: { '@type': 'Occupation', name: 'Analyst', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        sameAs: ['https://www.linkedin.com/in/sidharthzambre/'],
      },
      {
        '@type': 'Person',
        name: 'Deep Keswani',
        jobTitle: 'Analyst',
        description: 'Cold calls and seller outreach; tracks who bought whom in each sector.',
        worksFor: org,
        image: `${BASE_URL}/images/deep.webp`,
        knowsAbout: ['Seller outreach', 'Sector research', 'Deal sourcing'],
        hasOccupation: { '@type': 'Occupation', name: 'Analyst', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        sameAs: ['https://www.linkedin.com/in/deep-keswani-314990225'],
      },
      {
        '@type': 'Person',
        name: 'Aditya Gada',
        jobTitle: 'Analyst',
        description: 'Builds outreach sequences and investment theses for live mandates, and supports market research.',
        worksFor: org,
        image: `${BASE_URL}/images/aditya-gada.webp`,
        knowsAbout: ['Market research', 'Outreach sequences', 'Investment theses'],
        hasOccupation: { '@type': 'Occupation', name: 'Analyst', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        sameAs: ['https://www.linkedin.com/in/aditya-gada-b1b155261'],
      },
      { '@type': 'Person', name: 'Siddhant Mehta', jobTitle: 'Business Development', description: 'Runs outbound to funds and buyers.', worksFor: org, image: `${BASE_URL}/images/siddhant-mehta.webp`, sameAs: ['https://www.linkedin.com/in/siddhant-mehta-b41a50228'] },
      { '@type': 'Person', name: 'Gaurav Banerjee', jobTitle: "Founder's Office", description: 'Works across sales and content with Dev.', worksFor: org, image: `${BASE_URL}/images/gaurav-banerjee.webp`, sameAs: ['https://www.linkedin.com/in/gsbanerjee/'] },
      {
        '@type': 'Person',
        name: 'Aditya Negi',
        jobTitle: 'Full Stack Developer',
        description: 'Provides timely technical assistance, resolves issues, and ensures smooth day-to-day use of our systems for clients and internal teams.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Full stack development', 'Technical support', 'System administration', 'Client support'],
        hasOccupation: { '@type': 'Occupation', name: 'Full Stack Developer', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        sameAs: ['https://www.linkedin.com/in/aditya-negi-9a12a2223/'],
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
        sameAs: ['https://www.linkedin.com/in/aryan-solanki-a15b4b246/'],
      },
      {
        '@type': 'Person',
        name: 'Kabir Dhumale',
        jobTitle: 'Systems & Growth',
        description: 'Builds the firm\'s systems: the website, search visibility and the outreach tooling.',
        nationality: 'Indian',
        worksFor: org,
        knowsAbout: ['Website development', 'Search engine optimisation', 'Outreach tooling'],
        hasOccupation: { '@type': 'Occupation', name: 'Systems & Growth', occupationLocation: { '@type': 'City', name: 'Mumbai' } },
        sameAs: ['https://www.linkedin.com/in/kabir-dhumale/'],
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
