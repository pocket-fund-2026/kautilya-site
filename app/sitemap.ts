import type { MetadataRoute } from 'next';
import { STORY_SLUGS, STORY_META, type StorySlug } from '@/lib/stories';

const WWW = 'https://www.kautilya-pe.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${WWW}/`,          changeFrequency: 'weekly',  priority: 1.0, lastModified: '2026-05-27' },
    { url: `${WWW}/approach`,  changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-05-01' },
    { url: `${WWW}/portfolio`, changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-05-01' },
    { url: `${WWW}/engage`,    changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-05-01' },
    { url: `${WWW}/stories`,   changeFrequency: 'weekly',  priority: 0.8, lastModified: '2026-05-27' },
    { url: `${WWW}/faq`,       changeFrequency: 'monthly', priority: 0.7, lastModified: '2026-04-01' },
    { url: `${WWW}/team`,      changeFrequency: 'monthly', priority: 0.6, lastModified: '2026-04-01' },
    { url: `${WWW}/careers`,   changeFrequency: 'monthly', priority: 0.5, lastModified: '2026-04-01' },
    { url: `${WWW}/terms`,     changeFrequency: 'yearly',  priority: 0.2, lastModified: '2025-01-01' },
    { url: `${WWW}/privacy`,   changeFrequency: 'yearly',  priority: 0.2, lastModified: '2025-01-01' },
  ];

  const storyPages: MetadataRoute.Sitemap = STORY_SLUGS.map((slug) => {
    const meta = STORY_META[slug as StorySlug];
    return {
      url: `${WWW}/stories/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      lastModified: meta.datePublished ?? '2024-06-01',
    };
  });

  return [...staticPages, ...storyPages];
}
