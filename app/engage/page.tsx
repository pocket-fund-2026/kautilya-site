import type { Metadata } from 'next';
import EngageContent from './EngageContent';

export const metadata: Metadata = {
  title: 'Engage',
  description:
    'Have an acquisition thesis? Tell Kautilya what you\'re looking for and we\'ll tell you how we\'d find it.',
  alternates: { canonical: 'https://www.kautilya-pe.com/engage' },
  openGraph: {
    title: 'Engage — Kautilya',
    description: 'Submit your acquisition thesis or book a call with Kautilya.',
  },
};

export default function EngagePage() {
  return <EngageContent />;
}
