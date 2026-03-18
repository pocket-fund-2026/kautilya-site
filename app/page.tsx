import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Kautilya — Buy-Side Advisory',
  description:
    'Proprietary deal sourcing and buy-side advisory. We build acquisition pipelines from first principles — in any sector, against any criteria.',
  alternates: { canonical: 'https://www.kautilya-pe.com' },
  openGraph: {
    title: 'Kautilya — Buy-Side Advisory',
    description:
      'Proprietary deal sourcing and buy-side advisory. We build acquisition pipelines from first principles.',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
