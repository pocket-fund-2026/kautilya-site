import type { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: { absolute: 'Portfolio | Kautilya | Acquisitions & Case Studies' },
  description:
    'Kautilya\'s closed acquisition portfolio: $1.5M+ in deal value across SaaS, mobile apps, digital wellness, and immigration tech — with full mandate-to-close case studies.',
  alternates: { canonical: 'https://www.kautilya-pe.com/portfolio' },
  openGraph: {
    title: 'Portfolio | Kautilya | Acquisitions & Case Studies',
    url: 'https://www.kautilya-pe.com/portfolio',
    description: '$1.5M+ in deal value. Case studies across SaaS, mobile apps, digital wellness, and immigration tech.',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
