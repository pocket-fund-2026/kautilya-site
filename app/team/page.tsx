import type { Metadata } from 'next';
import TeamContent from './TeamContent';

export const metadata: Metadata = {
  title: { absolute: 'Team | Kautilya | M&A Advisory Specialists' },
  description:
    'Meet the Kautilya team: analysts, operators, and M&A specialists who have sourced and closed acquisitions across SaaS, digital media, mobile apps, and professional services.',
  alternates: { canonical: 'https://www.kautilya-pe.com/team' },
  openGraph: {
    title: 'Team | Kautilya | M&A Advisory Specialists',
    url: 'https://www.kautilya-pe.com/team',
    description: 'Analysts, operators, and M&A specialists behind Kautilya\'s proprietary deal sourcing practice.',
  },
};

export default function TeamPage() {
  return <TeamContent />;
}
