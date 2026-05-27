import type { Metadata } from 'next';
import EngageContent from './EngageContent';

export const metadata: Metadata = {
  title: 'Start Your Acquisition Mandate',
  description:
    'Tell Kautilya your acquisition thesis and we\'ll show you how we\'d find it. Submit your mandate criteria or book a call to get started.',
  alternates: { canonical: 'https://www.kautilya-pe.com/engage' },
  openGraph: {
    title: 'Kautilya | Start Your Acquisition Mandate',
    url: 'https://www.kautilya-pe.com/engage',
    description: 'Submit your acquisition thesis or book a call. Kautilya builds your proprietary deal pipeline from day one.',
  },
};

export default function EngagePage() {
  return <EngageContent />;
}
