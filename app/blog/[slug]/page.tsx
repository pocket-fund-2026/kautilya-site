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

  const fullTitle = meta.subtitle
    ? `${meta.title}: ${meta.subtitle}`
    : meta.title;

  const pageTitle = `${meta.title} | Kautilya`;
  const kw = meta.keywords ?? [];

  return {
    title: { absolute: pageTitle },
    description: meta.description,
    category: 'Finance & M&A Advisory',
    authors: [{ name: meta.author, url: `${BASE}/team` }],
    creator: meta.author,
    publisher: 'Kautilya',
    keywords: kw,
    alternates: {
      canonical: `${BASE}/blog/${slug}`,
      languages: {
        en: `${BASE}/blog/${slug}`,
        'x-default': `${BASE}/blog/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `${BASE}/blog/${slug}`,
      title: `${fullTitle} | Kautilya`,
      description: meta.description,
      siteName: 'Kautilya',
      publishedTime: meta.datePublished,
      modifiedTime: meta.datePublished,
      authors: [meta.author],
      section: meta.category,
      tags: kw.slice(0, 6),
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
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    other: {
      // Dublin Core — full set matching root layout
      'DC.title': fullTitle,
      'DC.creator': meta.author,
      'DC.subject': kw.slice(0, 8).join(', '),
      'DC.description': meta.description,
      'DC.publisher': 'Kautilya',
      'DC.contributor': 'Kautilya Team',
      'DC.date': meta.datePublished,
      'DC.type': 'Text',
      'DC.format': 'text/html',
      'DC.language': 'en',
      'DC.rights': '© 2026 Kautilya. All rights reserved.',
      'DC.coverage': 'India',
      // Article-specific Open Graph / meta
      'article:published_time': meta.datePublished,
      'article:modified_time': meta.datePublished,
      'article:author': meta.author,
      'article:section': meta.category,
      'article:tag': kw.slice(0, 8).join(','),
      // Standard hidden meta
      pagename: `Kautilya Blog — ${meta.title}`,
      subject: meta.description,
      topic: `${meta.category}, M&A advisory India, pharma business valuation India`,
      classification: 'Finance / M&A Advisory / Market Intelligence',
      abstract: meta.description,
      summary: `${meta.title}. ${meta.subtitle ?? ''}. Published ${meta.datePublished} by ${meta.author} at Kautilya.`,
      language: 'English',
      distribution: 'Global',
      // OG extras
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_GB',
      'og:see_also': `${BASE}/blog`,
    },
  };
}

function BlogJsonLd({ slug, meta }: { slug: string; meta: (typeof BLOG_META)[BlogSlug] }) {
  const fullTitle = meta.subtitle
    ? `${meta.title}: ${meta.subtitle}`
    : meta.title;

  const org = {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
    logo: { '@type': 'ImageObject', url: `${BASE}/icon.svg`, width: 512, height: 512 },
    sameAs: [
      'https://www.linkedin.com/company/pocket-fund/',
      'https://x.com/microsearchfund',
    ],
  };

  const author = {
    '@type': 'Person',
    name: meta.author,
    url: `${BASE}/team`,
    worksFor: org,
    sameAs: ['https://x.com/microsearchfund'],
  };

  const faqItems = [
    {
      q: 'What EBITDA multiple do pharma businesses sell for in India?',
      a: 'Founder-owned pharma businesses in the Rs. 50–500 Cr revenue range typically sell at 6–8x EBITDA. PE-backed assets with institutional governance and professional management trade at 18–24x. The Torrent-JB Chemicals deal at 24.8x represents the current ceiling for institutionally prepared assets in Indian mid-market pharma.',
    },
    {
      q: 'How long does it take to prepare a pharma business for sale in India?',
      a: 'Meaningful preparation typically requires 18–36 months. The highest-priority work: installing a professional management layer, cleaning the P&L of personal expenses, documenting customer relationships, resolving governance gaps, and identifying and beginning to fund any dormant capability.',
    },
    {
      q: "What did KKR do to increase JB Chemicals' value before selling to Torrent?",
      a: 'KKR made five moves over five years: appointed a professional CEO, ran a consistent bolt-on acquisition strategy, funded a dormant CDMO capability in medicated lozenges that grew to Rs. 446 Cr in revenue, improved EBITDA margins from 15–18% to 27–29%, and rebuilt governance to institutional standards. The combined effect was a Rs. 22,000 Cr increase in exit value.',
    },
    {
      q: 'What is the difference between a motivated seller and a distressed seller in Indian pharma M&A?',
      a: 'A motivated seller approaches the market by choice, with time and options. A distressed seller approaches because an external pressure — such as a compliance deadline or succession crisis — has removed optionality. Motivated sellers price at the top of the range. Distressed sellers price at the bottom.',
    },
    {
      q: 'Do I need an investment bank to sell a pharma business in India?',
      a: 'For businesses in the Rs. 50–300 Cr range, a boutique M&A advisory firm with demonstrated experience in Indian mid-market pharma will typically be more effective than a large investment bank, which tends to focus on transactions above Rs. 500 Cr. The advisor\'s most important work happens in the 18–24 months before any sale process — not during it.',
    },
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE}/blog/${slug}`,
    headline: fullTitle,
    name: fullTitle,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.datePublished,
    articleSection: meta.category,
    keywords: (meta.keywords ?? []).join(', '),
    wordCount: meta.wordCount ?? 2600,
    inLanguage: 'en-US',
    timeRequired: `PT${parseInt(meta.readTime)}M`,
    isAccessibleForFree: true,
    author,
    publisher: org,
    image: {
      '@type': 'ImageObject',
      url: meta.image ? `${BASE}${meta.image}` : `${BASE}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE}/blog/${slug}`,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
          { '@type': 'ListItem', position: 3, name: meta.title, item: `${BASE}/blog/${slug}` },
        ],
      },
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'The Kautilya Blog',
      url: `${BASE}/blog`,
      publisher: org,
    },
    about: [
      { '@type': 'Thing', name: 'Pharma business valuation India' },
      { '@type': 'Thing', name: 'EBITDA multiples India mid-market pharma' },
      { '@type': 'Thing', name: 'Indian M&A advisory' },
      { '@type': 'Thing', name: 'Founder-owned business exit India' },
    ],
    mentions: [
      { '@type': 'Organization', name: 'KKR', sameAs: 'https://www.kkr.com' },
      { '@type': 'Organization', name: 'JB Chemicals & Pharmaceuticals', sameAs: 'https://en.wikipedia.org/wiki/JB_Chemicals_%26_Pharmaceuticals' },
      { '@type': 'Organization', name: 'Torrent Pharmaceuticals', sameAs: 'https://en.wikipedia.org/wiki/Torrent_Pharmaceuticals' },
      { '@type': 'Organization', name: 'ChrysCapital' },
      { '@type': 'Organization', name: 'Novartis India' },
    ],
    hasPart: {
      '@type': 'FAQPage',
      '@id': `${BASE}/blog/${slug}#faq`,
      mainEntity: faqLd.mainEntity,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.story-body > p:first-child'],
    },
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!BLOG_SLUGS.includes(slug as BlogSlug)) notFound();

  const meta = BLOG_META[slug as BlogSlug];

  return (
    <>
      <BlogJsonLd slug={slug} meta={meta} />
      <BlogPharmaValuation />
    </>
  );
}
