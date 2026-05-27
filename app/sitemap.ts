import type { MetadataRoute } from 'next';
import { STORY_SLUGS } from '@/lib/stories';

const WWW = 'https://www.kautilya-pe.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${WWW}/`,          changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${WWW}/approach`,  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${WWW}/portfolio`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${WWW}/engage`,    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${WWW}/stories`,   changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${WWW}/faq`,       changeFrequency: 'monthly', priority: 0.7 },
    { url: `${WWW}/team`,      changeFrequency: 'monthly', priority: 0.6 },
    { url: `${WWW}/careers`,   changeFrequency: 'monthly', priority: 0.5 },
    { url: `${WWW}/terms`,     changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${WWW}/privacy`,   changeFrequency: 'yearly',  priority: 0.2 },
  ];

  const storyPages: MetadataRoute.Sitemap = STORY_SLUGS.map((slug) => ({
    url: `${WWW}/stories/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...storyPages];
}
