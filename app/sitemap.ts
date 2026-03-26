import type { MetadataRoute } from 'next';
import { STORY_SLUGS } from '@/lib/stories';

const WWW = 'https://www.kautilya-pe.com';
const NAKED = 'https://kautilya-pe.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: WWW, changeFrequency: 'weekly', priority: 1.0 },
    { url: NAKED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${WWW}/approach`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${NAKED}/approach`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${WWW}/portfolio`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${NAKED}/portfolio`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${WWW}/stories`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${NAKED}/stories`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${WWW}/team`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${NAKED}/team`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${WWW}/engage`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${NAKED}/engage`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${WWW}/careers`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${NAKED}/careers`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${WWW}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${NAKED}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${WWW}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${NAKED}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${WWW}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${NAKED}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const storyPages: MetadataRoute.Sitemap = STORY_SLUGS.flatMap((slug) => [
    { url: `${WWW}/stories/${slug}`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${NAKED}/stories/${slug}`, changeFrequency: 'monthly' as const, priority: 0.6 },
  ]);

  return [...staticPages, ...storyPages];
}
