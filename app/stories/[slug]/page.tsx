import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { STORY_SLUGS, STORY_META, type StorySlug } from '@/lib/stories';
import StoryContent from './StoryContent';

const BASE_URL = 'https://www.kautilya-pe.com';

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
    authors: [{ name: meta.author, url: `${BASE_URL}/team` }],
    creator: meta.author,
    keywords: [
      'acquisition case study', 'buy a business India', 'M&A deal India',
      'off-market acquisition', 'micro private equity', 'search fund India',
      'business acquisition story', 'due diligence India', meta.title,
    ],
    alternates: { canonical: `${BASE_URL}/stories/${slug}` },
    openGraph: {
      title: `${meta.title} | Kautilya`,
      url: `${BASE_URL}/stories/${slug}`,
      description: meta.description,
      type: 'article',
      siteName: 'Kautilya',
      ...(meta.datePublished ? { publishedTime: meta.datePublished, modifiedTime: meta.datePublished } : {}),
      authors: [meta.author],
      ...(meta.image ? { images: [{ url: meta.image, width: 1200, height: 630, alt: meta.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meta.title} | Kautilya`,
      description: meta.description,
      creator: '@microsearchfund',
      ...(meta.image ? { images: [meta.image] } : {}),
    },
  };
}

function StoryJsonLd({ slug, meta }: { slug: string; meta: typeof STORY_META[StorySlug] }) {
  const articleLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    articleSection: 'Acquisitions',
    keywords: 'acquisition, buy-side advisory, off-market deals, micro private equity, India M&A',
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: meta.author,
      url: `${BASE_URL}/team`,
      worksFor: { '@type': 'Organization', name: 'Kautilya', url: BASE_URL },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kautilya',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/icon.svg` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/stories/${slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'Kautilya Stories',
      url: `${BASE_URL}/stories`,
    },
  };

  if (meta.datePublished) {
    articleLd.datePublished = meta.datePublished;
    articleLd.dateModified = meta.datePublished;
  }
  if (meta.image) articleLd.image = { '@type': 'ImageObject', url: `${BASE_URL}${meta.image}`, width: 1200, height: 630 };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Stories', item: `${BASE_URL}/stories` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: `${BASE_URL}/stories/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}

function StoryByline({ meta }: { meta: typeof STORY_META[StorySlug] }) {
  const hasDate = !!meta.datePublished;
  const formatted = hasDate
    ? new Date(meta.datePublished!).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .story-byline { display:flex; align-items:center; gap:8px; padding:0 24px; margin-bottom:32px; font-family:var(--font-lora),"Lora",serif; font-size:13px; letter-spacing:0.04em; color:var(--text-muted,#999); }
        .story-byline-author { color:var(--gold,#c9a84c); text-decoration:none; border-bottom:1px solid transparent; transition:border-color 0.2s; }
        .story-byline-author:hover { border-bottom-color:var(--gold,#c9a84c); }
      `}} />
      <div className="story-byline">
        <a href="/team" className="story-byline-author">{meta.author}</a>
        {hasDate && (
          <>
            <span style={{ opacity: 0.4 }}>·</span>
            <time dateTime={meta.datePublished}>{formatted}</time>
          </>
        )}
      </div>
    </>
  );
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  if (!STORY_SLUGS.includes(slug as StorySlug)) {
    notFound();
  }
  const meta = STORY_META[slug as StorySlug];
  return (
    <>
      <StoryJsonLd slug={slug} meta={meta} />
      <StoryByline meta={meta} />
      <StoryContent slug={slug} />
    </>
  );
}
