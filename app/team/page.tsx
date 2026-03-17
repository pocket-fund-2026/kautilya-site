import type { Metadata } from 'next';
import TeamContent from './TeamContent';

export const metadata: Metadata = {
  title: 'Kautilya — Team',
};

export default function TeamPage() {
  return <TeamContent />;
}
