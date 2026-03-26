import type { Metadata } from 'next';
import ApproachContent from './ApproachContent';

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How Kautilya sources deals: systematic market mapping, proprietary outreach, and structured qualification across sectors and geographies.',
  alternates: { canonical: 'https://www.kautilya-pe.com/approach' },
  openGraph: {
    title: 'Approach | Kautilya',
    url: 'https://www.kautilya-pe.com/approach',
    description: 'Systematic deal sourcing methodology built from first principles.',
  },
};

export default function Page() {
  return <ApproachContent />;
}
