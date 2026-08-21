import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_SLUGS, BLOG_META, type BlogSlug } from '@/lib/blogs';
import BlogFamilyBusinessAcquisition from '@/components/blogs/BlogFamilyBusinessAcquisition';
import BlogWhatIsASearchFund from '@/components/blogs/BlogWhatIsASearchFund';
import BlogWhatIsBuySideMAAdvisory from '@/components/blogs/BlogWhatIsBuySideMAAdvisory';

const BASE = 'https://www.kautilya-pe.com';

const BLOG_COMPONENTS: Record<BlogSlug, React.ComponentType> = {
  'buying-family-owned-business-india': BlogFamilyBusinessAcquisition,
  'what-is-a-search-fund': BlogWhatIsASearchFund,
  'what-is-buy-side-ma-advisory': BlogWhatIsBuySideMAAdvisory,
};

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

  const faqItems = meta.faqs ?? [];

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
    about: (meta.about ?? []).map((name) => ({ '@type': 'Thing', name })),
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
  const BlogComponent = BLOG_COMPONENTS[slug as BlogSlug];

  return (
    <>
      <BlogJsonLd slug={slug} meta={meta} />
      <BlogComponent />
    </>
  );
}
