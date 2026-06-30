import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_SLUGS, BLOG_META, type BlogSlug } from '@/lib/blogs';
import BlogPharmaValuation from '@/components/blogs/BlogPharmaValuation';

const BASE = 'https://www.kautilya-pe.com';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = BLOG_META[slug as BlogSlug];
  if (!meta) return {};

  const fullTitle = meta.subtitle ? `${meta.title}: ${meta.subtitle}` : meta.title;

  return {
    title: meta.title,
    description: meta.description,
    authors: [{ name: meta.author, url: `${BASE}/team` }],
    creator: meta.author,
    keywords: meta.keywords ?? [
      meta.category, 'kautilya blog', 'M&A advisory India',
      'buy-side advisory India', 'acquisition India',
    ],
    alternates: {
      canonical: `${BASE}/blog/${slug}`,
      languages: { en: `${BASE}/blog/${slug}`, 'x-default': `${BASE}/blog/${slug}` },
    },
    openGraph: {
      type: 'article',
      url: `${BASE}/blog/${slug}`,
      title: `${fullTitle} | Kautilya`,
      description: meta.description,
      siteName: 'Kautilya',
      publishedTime: meta.datePublished,
      modifiedTime: meta.datePublished,
      authors: [meta.author],
      section: meta.category,
      images: [
        meta.image
          ? { url: `${BASE}${meta.image}`, width: 1200, height: 630, alt: meta.title }
          : { url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: meta.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fullTitle} | Kautilya`,
      description: meta.description,
      creator: '@microsearchfund',
      site: '@microsearchfund',
      images: [meta.image ? `${BASE}${meta.image}` : `${BASE}/opengraph-image`],
    },
    other: {
      'DC.title': fullTitle,
      'DC.creator': meta.author,
      'DC.subject': `${meta.category}, M&A advisory India, pharma business valuation India`,
      'DC.date': meta.datePublished,
      'DC.type': 'Text',
      'DC.publisher': 'Kautilya',
      'DC.language': 'en',
      'article:published_time': meta.datePublished,
      'article:author': meta.author,
      'article:section': meta.category,
      'article:tag': 'pharma valuation India, M&A advisory, EBITDA multiple India, JB Chemicals Torrent deal',
      pagename: `Kautilya Blog — ${meta.title}`,
      abstract: meta.description,
    },
  };
}

function BlogJsonLd({ slug, meta }: { slug: string; meta: (typeof BLOG_META)[BlogSlug] }) {
  const fullTitle = meta.subtitle ? `${meta.title}: ${meta.subtitle}` : meta.title;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: fullTitle,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.datePublished,
    articleSection: meta.category,
    keywords: (meta.keywords ?? []).join(', '),
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: meta.author,
      url: `${BASE}/team`,
      worksFor: { '@type': 'Organization', name: 'Kautilya', url: BASE },
      sameAs: ['https://x.com/microsearchfund'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kautilya',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/icon.svg`, width: 512, height: 512 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${slug}` },
    isPartOf: { '@type': 'Blog', name: 'The Kautilya Blog', url: `${BASE}/blog` },
    isAccessibleForFree: true,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.blog-post-lede'] },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What EBITDA multiple do pharma businesses sell for in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Founder-owned pharma businesses in the Rs. 50 to 500 Cr revenue range typically sell at 6 to 8x EBITDA. PE-backed assets with institutional governance and professional management trade at 18 to 24x. The Torrent-JB Chemicals deal at 24.8x represents the current ceiling for institutionally prepared assets in Indian mid-market pharma.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to prepare a pharma business for sale in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meaningful preparation typically requires 18 to 36 months. The highest-priority work: installing a professional management layer, cleaning the P&L of personal expenses, documenting customer relationships, resolving governance gaps, and identifying and beginning to fund any dormant capability.',
        },
      },
      {
        '@type': 'Question',
        name: 'What did KKR do to increase JB Chemicals\' value before selling to Torrent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KKR made five moves over five years: appointed a professional CEO, ran a consistent bolt-on acquisition strategy, funded a dormant CDMO capability in medicated lozenges that grew to Rs. 446 Cr in revenue, improved EBITDA margins from 15-18% to 27-29%, and rebuilt governance to institutional standards. The combined effect was a Rs. 22,000 Cr increase in exit value.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a motivated seller and a distressed seller in Indian pharma M&A?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A motivated seller approaches the market by choice, with time and options. A distressed seller approaches because an external pressure — such as a compliance deadline or succession crisis — has removed optionality. Motivated sellers price at the top of the range. Distressed sellers price at the bottom.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need an investment bank to sell a pharma business in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For businesses in the Rs. 50 to 300 Cr range, a boutique M&A advisory firm with demonstrated experience in Indian mid-market pharma will typically be more effective than a large investment bank, which tends to focus on transactions above Rs. 500 Cr.',
        },
      },
    ],
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: `${BASE}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}

function BlogByline({ meta }: { meta: (typeof BLOG_META)[BlogSlug] }) {
  const formatted = new Date(meta.datePublished).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-byline-bar {
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
          padding: 0 24px; margin-bottom: 32px;
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 12px; letter-spacing: 0.04em; color: var(--text-muted);
        }
        .blog-byline-tag {
          display: inline-block; font-size: 9px; letter-spacing: 4px;
          text-transform: uppercase; color: var(--gold);
          border: 1px solid rgba(201,185,154,0.28); padding: 3px 10px; border-radius: 999px;
        }
        .blog-byline-sep { width: 1px; height: 10px; background: rgba(201,185,154,0.22); }
        .blog-byline-author {
          color: var(--gold); text-decoration: none;
          border-bottom: 1px solid transparent; transition: border-color 0.2s;
        }
        .blog-byline-author:hover { border-bottom-color: var(--gold); }
      `}} />
      <div className="blog-byline-bar">
        <span className="blog-byline-tag">{meta.category}</span>
        <div className="blog-byline-sep" />
        <a href="/team" className="blog-byline-author">{meta.author}</a>
        <div className="blog-byline-sep" />
        <time dateTime={meta.datePublished}>{formatted}</time>
        <div className="blog-byline-sep" />
        <span>{meta.readTime} read</span>
      </div>
    </>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!BLOG_SLUGS.includes(slug as BlogSlug)) notFound();

  const meta = BLOG_META[slug as BlogSlug];

  return (
    <>
      <BlogJsonLd slug={slug} meta={meta} />
      <BlogByline meta={meta} />
      <BlogPharmaValuation />
    </>
  );
}
