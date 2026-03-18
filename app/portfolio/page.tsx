import type { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected engagements and acquisition mandates delivered by Kautilya across sectors and geographies.',
  openGraph: {
    title: 'Portfolio — Kautilya',
    description: 'Selected engagements and acquisition mandates delivered by Kautilya.',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
