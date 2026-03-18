import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Kautilya — open roles in deal sourcing, market intelligence, and brand. Small team, large impact.',
  alternates: { canonical: 'https://www.kautilya-pe.com/careers' },
  openGraph: {
    title: 'Careers — Kautilya',
    url: 'https://www.kautilya-pe.com/careers',
    description: 'Open roles at Kautilya in deal sourcing, market intelligence, and brand.',
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
