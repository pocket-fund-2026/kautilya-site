import type { MetadataRoute } from 'next';
import { STORY_SLUGS, STORY_META, type StorySlug } from '@/lib/stories';
import { BLOG_SLUGS, BLOG_META, type BlogSlug } from '@/lib/blogs';
import { NEWSLETTER_SLUGS, NEWSLETTER_META, type NewsletterSlug } from '@/lib/newsletters';

const WWW = 'https://www.kautilya-pe.com';

// Only images actually embedded on each story's own page are listed here —
// Google's image-sitemap guidance expects <image:image> entries to match what's
// rendered at that <url>, not just an asset that exists somewhere on the site.
const STORY_IMAGES: Record<string, string[]> = {
  'borderless':      [],
  'dino-games':      [],
  'runify':          [],
  'edition-zero':    [],
  'sourcely':        ['/images/stories/sourcely/logo_sourcely.webp', '/images/stories/sourcely/essay.webp', '/images/stories/sourcely/twitter.webp'],
  'review':          [],
  'pocket-fund':     ['/images/stories/pocket-fund/100k.webp', '/images/stories/pocket-fund/cycle.webp', '/images/stories/pocket-fund/search.webp'],
  'college-startups':['/images/stories/college-startups/best-time-build.webp', '/images/stories/college-startups/start-now.webp', '/images/stories/college-startups/ten-jobs.webp'],
  'pocket-deals':    ['/images/stories/micro-saas/bigpurpose.webp'],
  'deal-sourcing':   ['/images/stories/deal-sourcing/crm.webp', '/images/stories/deal-sourcing/morning.webp', '/images/stories/deal-sourcing/thousand.webp'],
  'diamonds':        ['/images/stories/diamonds/uncut.webp', '/images/stories/diamonds/zeroto.webp'],
  'search-funds':    ['/images/stories/search-fund/evol_of_search_fund.webp', '/images/stories/search-fund/how_search_source_deal.webp', '/images/stories/search-fund/when_2walk_away.webp', '/images/stories/search-fund/solo_vs_partnered.webp'],
  '200k-deals':      ['/images/stories/200k/architecture.webp', '/images/stories/200k/five-deals.webp', '/images/stories/200k/hidden-channel.webp'],
  'smartprompt':     [],
  'inspire3':        [],
  'msp-buy-side-diligence': ['/images/Dev.webp', '/images/aum.webp', '/images/pushkar.webp'],
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
        `${WWW}/images/portfolio-logos/inspire3.webp`,
        `${WWW}/images/portfolio-logos/borderless.webp`,
        `${WWW}/images/portfolio-logos/dino-games.webp`,
        `${WWW}/images/portfolio-logos/runify.webp`,
      ],
    },
    {
      url: `${WWW}/stories`,
      changeFrequency: 'weekly',
      priority: 0.8,
      lastModified: '2026-05-27',
      images: [
        `${WWW}/images/blogs/edition-200k.webp`,
        `${WWW}/images/blogs/edition-acquire.webp`,
        `${WWW}/images/blogs/edition-college.webp`,
        `${WWW}/images/blogs/edition-thisisbiz.webp`,
        `${WWW}/images/blogs/edition-zero.webp`,
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
        `${WWW}/images/aum.webp`,
        `${WWW}/images/aditya.webp`,
      ],
    },
    // /careers now 307s to hirepeanalyst.com — a redirecting URL in the sitemap
    // is a Search Console warning, so it is withheld rather than removed.
    // Restore this entry if the redirect is ever reverted.
    // {
    //   url: `${WWW}/careers`,
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    //   lastModified: '2026-04-01',
    //   images: [`${WWW}/opengraph-image`],
    // },
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

  const blogIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${WWW}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
      lastModified: '2026-06-29',
      images: [`${WWW}/opengraph-image`],
    },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => {
    const meta = BLOG_META[slug as BlogSlug];
    return {
      url: `${WWW}/blog/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: meta.datePublished,
    };
  });

  const newsletterIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${WWW}/newsletter`,
      changeFrequency: 'weekly',
      priority: 0.8,
      lastModified: '2026-07-25',
      images: [`${WWW}/opengraph-image`],
    },
  ];

  const newsletterPages: MetadataRoute.Sitemap = NEWSLETTER_SLUGS.map((slug) => {
    const meta = NEWSLETTER_META[slug as NewsletterSlug];
    return {
      url: `${WWW}/newsletter/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: meta.datePublished,
    };
  });

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

  return [...staticPages, ...blogIndexPage, ...blogPages, ...newsletterIndexPage, ...newsletterPages, ...storyPages];
}
