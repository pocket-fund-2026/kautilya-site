import type { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Kautilya — Portfolio',
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
