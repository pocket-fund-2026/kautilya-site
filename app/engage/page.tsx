import type { Metadata } from 'next';
import EngageContent from './EngageContent';

export const metadata: Metadata = {
  title: 'Kautilya — Engage',
};

export default function EngagePage() {
  return <EngageContent />;
}
