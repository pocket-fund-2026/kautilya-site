import type { Metadata } from 'next';
import StoriesContent from './StoriesContent';

export const metadata: Metadata = { title: 'Kautilya — Stories' };

export default function Page() {
  return <StoriesContent />;
}
