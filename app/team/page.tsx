import type { Metadata } from 'next';
import TeamContent from './TeamContent';

export const metadata: Metadata = {
  title: 'Our M&A Advisory Team',
  description:
    'Meet the Kautilya team: analysts, operators, and M&A specialists who have sourced and closed acquisitions across SaaS, digital media, mobile apps, and professional services.',
  alternates: { canonical: 'https://www.kautilya-pe.com/team' },
  openGraph: {
    title: 'Kautilya | Our M&A Advisory Team',
    url: 'https://www.kautilya-pe.com/team',
    description: 'Analysts, operators, and M&A specialists behind Kautilya\'s proprietary deal sourcing practice.',
  },
};

export default function TeamPage() {
  return <TeamContent />;
}
