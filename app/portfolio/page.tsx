import type { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected engagements and acquisition mandates delivered by Kautilya across sectors and geographies.',
  alternates: { canonical: 'https://www.kautilya-pe.com/portfolio' },
  openGraph: {
    title: 'Portfolio — Kautilya',
    url: 'https://www.kautilya-pe.com/portfolio',
    description: 'Selected engagements and acquisition mandates delivered by Kautilya.',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
