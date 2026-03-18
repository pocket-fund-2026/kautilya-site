import type { MetadataRoute } from 'next';
import { STORY_SLUGS } from '@/lib/stories';

const BASE = 'https://www.kautilya-pe.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/approach`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/portfolio`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/stories`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/team`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/engage`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/careers`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const storyPages: MetadataRoute.Sitemap = STORY_SLUGS.map((slug) => ({
    url: `${BASE}/stories/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...storyPages];
}
