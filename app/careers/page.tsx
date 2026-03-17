import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'Kautilya — Careers',
};

export default function CareersPage() {
  return <CareersContent />;
}
