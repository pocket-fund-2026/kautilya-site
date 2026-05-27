import type { Metadata } from 'next';
import ApproachContent from './ApproachContent';

export const metadata: Metadata = {
  title: { absolute: 'Approach | Kautilya | M&A Methodology & Deal Sourcing' },
  description:
    'From mandate definition to close: five-phase acquisition process with 2,500+ founder conversations, 99.83% transaction match rate, and diligence delivered in under 15 days.',
  alternates: { canonical: 'https://www.kautilya-pe.com/approach' },
  openGraph: {
    title: 'Approach | Kautilya | M&A Methodology & Deal Sourcing',
    url: 'https://www.kautilya-pe.com/approach',
    description: 'Five-phase acquisition process: mandate definition, universe construction, targeted outreach, diligence, and close.',
  },
};

export default function Page() {
  return <ApproachContent />;
}
