import type { Metadata } from 'next';
import StoriesContent from './StoriesContent';

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Case studies, deal breakdowns, and insights from Kautilya\'s buy-side advisory practice.',
  alternates: { canonical: 'https://www.kautilya-pe.com/stories' },
  openGraph: {
    title: 'Stories | Kautilya',
    url: 'https://www.kautilya-pe.com/stories',
    description: 'Case studies, deal breakdowns, and insights from Kautilya.',
  },
};

export default function Page() {
  return <StoriesContent />;
}
