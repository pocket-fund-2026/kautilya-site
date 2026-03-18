import type { Metadata } from 'next';
import TeamContent from './TeamContent';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the Kautilya team — a small group operating with disproportionate intensity across deal sourcing and market intelligence.',
  openGraph: {
    title: 'Team — Kautilya',
    description: 'Meet the Kautilya team.',
  },
};

export default function TeamPage() {
  return <TeamContent />;
}
