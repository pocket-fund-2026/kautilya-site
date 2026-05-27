import type { Metadata } from 'next';
import StoriesContent from './StoriesContent';

export const metadata: Metadata = {
  title: { absolute: 'Stories | Kautilya | Acquisitions & Market Intelligence' },
  description:
    'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice — from a Sunday newsletter to $1M+ in closed acquisitions.',
  alternates: { canonical: 'https://www.kautilya-pe.com/stories' },
  openGraph: {
    title: 'Stories | Kautilya | Acquisitions & Market Intelligence',
    url: 'https://www.kautilya-pe.com/stories',
    description: 'Deal journals, case studies, and market intelligence from Kautilya\'s buy-side advisory practice.',
  },
};

export default function Page() {
  return <StoriesContent />;
}
