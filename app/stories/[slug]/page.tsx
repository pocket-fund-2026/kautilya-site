import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { STORY_SLUGS, STORY_META, type StorySlug } from '@/lib/stories';
import StoryContent from './StoryContent';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return STORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = STORY_META[slug as StorySlug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://www.kautilya-pe.com/stories/${slug}` },
    openGraph: {
      title: `${meta.title} — Kautilya`,
      url: `https://www.kautilya-pe.com/stories/${slug}`,
      description: meta.description,
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  if (!STORY_SLUGS.includes(slug as StorySlug)) {
    notFound();
  }
  return <StoryContent slug={slug} />;
}
