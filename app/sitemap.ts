import type { MetadataRoute } from 'next';
import { STORY_SLUGS, STORY_META, type StorySlug } from '@/lib/stories';

const WWW = 'https://www.kautilya-pe.com';

const STORY_IMAGES: Record<string, string[]> = {
  'borderless':      ['/images/portfolio-logos/borderless.png', '/images/stories/borderless/exhausting-market.png', '/images/stories/borderless/maket-no-deals.png', '/images/stories/borderless/money-annualised.png'],
  'dino-games':      ['/images/portfolio-logos/dino-games.jpeg'],
  'runify':          ['/images/portfolio-logos/runify.png'],
  'edition-zero':    ['/images/blogs/edition-zero.jpeg', '/images/stories/edition-zero/conviction.png', '/images/stories/edition-zero/zero.png'],
  'sourcely':        ['/images/stories/sourcely/logo_sourcely.png', '/images/stories/sourcely/essay.png', '/images/stories/sourcely/twitter.png'],
  'review':          [],
  'pocket-fund':     ['/images/stories/pocket-fund/100k.png', '/images/stories/pocket-fund/cycle.png', '/images/stories/pocket-fund/search.png'],
  'college-startups':['/images/blogs/edition-college.jpeg', '/images/stories/college-startups/best-time-build.png', '/images/stories/college-startups/start-now.png', '/images/stories/college-startups/ten-jobs.png'],
  'pocket-deals':    ['/images/stories/micro-saas/bigpurpose.png'],
  'deal-sourcing':   ['/images/blogs/edition-acquire.jpeg', '/images/stories/deal-sourcing/crm.png', '/images/stories/deal-sourcing/discipline.png', '/images/stories/deal-sourcing/morning.png', '/images/stories/deal-sourcing/thousand.png'],
  'diamonds':        ['/images/blogs/edition-thisisbiz.jpeg', '/images/stories/diamonds/uncut.png', '/images/stories/diamonds/zeroto.png'],
  'search-funds':    ['/images/stories/search-fund/evol_of_search_fund.png', '/images/stories/search-fund/explaining_gap.png', '/images/stories/search-fund/how_search_source_deal.png', '/images/stories/search-fund/when_2walk_away.png', '/images/stories/search-fund/solo_vs_partnered.png'],
  '200k-deals':      ['/images/blogs/edition-200k.jpeg', '/images/stories/200k/architecture.png', '/images/stories/200k/five-deals.png', '/images/stories/200k/hidden-channel.png'],
  'smartprompt':     ['/images/stories/smart-prompt/300.png', '/images/stories/smart-prompt/discount.png', '/images/stories/smart-prompt/kill.png'],
  'inspire3':        ['/images/portfolio-logos/inspire3.png'],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${WWW}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
      lastModified: '2026-05-27',
      images: [`${WWW}/opengraph-image`, `${WWW}/icon.svg`],
    },
    {
      url: `${WWW}/approach`,
      changeFrequency: 'monthly',
      priority: 0.9,
      lastModified: '2026-05-27',
      images: [`${WWW}/opengraph-image`],
    },
    {
      url: `${WWW}/portfolio`,
      changeFrequency: 'monthly',
      priority: 0.9,
      lastModified: '2026-05-27',
      images: [
        `${WWW}/images/portfolio-logos/inspire3.png`,
        `${WWW}/images/portfolio-logos/borderless.png`,
        `${WWW}/images/portfolio-logos/dino-games.jpeg`,
        `${WWW}/images/portfolio-logos/runify.png`,
      ],
    },
    {
      url: `${WWW}/stories`,
      changeFrequency: 'weekly',
      priority: 0.8,
      lastModified: '2026-05-27',
      images: [
        `${WWW}/images/blogs/edition-200k.jpeg`,
        `${WWW}/images/blogs/edition-acquire.jpeg`,
        `${WWW}/images/blogs/edition-college.jpeg`,
        `${WWW}/images/blogs/edition-thisisbiz.jpeg`,
        `${WWW}/images/blogs/edition-zero.jpeg`,
      ],
    },
    {
      url: `${WWW}/engage`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: '2026-05-01',
      images: [`${WWW}/opengraph-image`],
    },
    {
      url: `${WWW}/faq`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: '2026-04-01',
      images: [`${WWW}/opengraph-image`],
    },
    {
      url: `${WWW}/team`,
      changeFrequency: 'monthly',
      priority: 0.6,
      lastModified: '2026-04-01',
      images: [
        `${WWW}/images/aum.jpg`,
        `${WWW}/images/aditya.jpeg`,
        `${WWW}/images/darshana.jpg`,
      ],
    },
    {
      url: `${WWW}/careers`,
      changeFrequency: 'monthly',
      priority: 0.5,
      lastModified: '2026-04-01',
      images: [`${WWW}/opengraph-image`],
    },
    {
      url: `${WWW}/terms`,
      changeFrequency: 'yearly',
      priority: 0.2,
      lastModified: '2025-01-01',
    },
    {
      url: `${WWW}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.2,
      lastModified: '2025-01-01',
    },
  ];

  const storyPages: MetadataRoute.Sitemap = STORY_SLUGS.map((slug) => {
    const meta = STORY_META[slug as StorySlug];
    const imgs = (STORY_IMAGES[slug] ?? []).map((p) => `${WWW}${p}`);
    if (meta.image && !imgs.includes(`${WWW}${meta.image}`)) {
      imgs.unshift(`${WWW}${meta.image}`);
    }
    return {
      url: `${WWW}/stories/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: meta.datePublished ?? '2024-06-01',
      ...(imgs.length > 0 ? { images: imgs } : {}),
    };
  });

  return [...staticPages, ...storyPages];
}
