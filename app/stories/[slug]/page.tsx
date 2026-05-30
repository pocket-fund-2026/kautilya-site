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
    alternates: { canonical: `${BASE_URL}/stories/${slug}`, languages: { 'en': `${BASE_URL}/stories/${slug}`, 'x-default': `${BASE_URL}/stories/${slug}` } },
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
    other: {
      'DC.title': meta.title,
      'DC.creator': meta.author,
      'DC.subject': 'Acquisition entrepreneurship, M&A case study, buy-side advisory India, micro private equity',
      'DC.type': 'Text',
      'DC.publisher': 'Kautilya',
      'DC.language': 'en',
      ...(meta.datePublished ? { 'DC.date': meta.datePublished, 'article:published_time': meta.datePublished } : {}),
      'article:author': meta.author,
      'article:section': 'Acquisitions',
      'article:tag': 'M&A, buy-side advisory, acquisition, India, micro private equity, deal sourcing',
      pagename: `Kautilya Stories — ${meta.title}`,
      abstract: meta.description,
      summary: meta.description,
    },
  };
}

function StoryJsonLd({ slug, meta }: { slug: string; meta: typeof STORY_META[StorySlug] }) {
  const articleLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: meta.title,
    alternativeHeadline: meta.description,
    description: meta.description,
    articleSection: 'Acquisitions & Market Intelligence',
    keywords: 'acquisition, buy-side advisory, off-market deals, micro private equity, India M&A, deal sourcing, forensic due diligence',
    inLanguage: 'en-US',
    copyrightYear: '2024',
    copyrightHolder: { '@type': 'Organization', name: 'Kautilya', url: BASE_URL },
    author: {
      '@type': 'Person',
      name: meta.author,
      url: `${BASE_URL}/team`,
      nationality: 'Indian',
      knowsAbout: ['Micro private equity', 'Acquisition entrepreneurship', 'M&A advisory India', 'Off-market deal sourcing'],
      worksFor: { '@type': 'Organization', name: 'Kautilya', url: BASE_URL },
      sameAs: ['https://x.com/microsearchfund'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kautilya',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.svg`,
        width: 512,
        height: 512,
      },
    },
    about: [
      { '@type': 'Thing', name: 'Acquisition entrepreneurship' },
      { '@type': 'Thing', name: 'Buy-side M&A advisory India' },
      { '@type': 'Thing', name: 'Off-market deal sourcing' },
      { '@type': 'Thing', name: 'Micro private equity' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'PE funds, VCs, family offices, search fund operators, acquisition entrepreneurs, first-time buyers',
    },
    teaches: 'How to source, evaluate, and close off-market business acquisitions in India and globally.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/stories/${slug}`,
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'Kautilya Stories',
      url: `${BASE_URL}/stories`,
    },
    isAccessibleForFree: true,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.story-byline'],
    },
  };

  if (meta.datePublished) {
    articleLd.datePublished = meta.datePublished;
    articleLd.dateModified = meta.datePublished;
  }
  if (meta.image) {
    articleLd.image = { '@type': 'ImageObject', url: `${BASE_URL}${meta.image}`, width: 1200, height: 630 };
    articleLd.thumbnailUrl = `${BASE_URL}${meta.image}`;
  }

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
