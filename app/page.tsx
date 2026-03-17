import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Kautilya — Buy-Side Advisory',
};

export default function HomePage() {
  return <HomeContent />;
}
