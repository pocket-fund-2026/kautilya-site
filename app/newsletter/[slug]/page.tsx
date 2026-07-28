import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { NEWSLETTER_SLUGS, NEWSLETTER_META, type NewsletterSlug } from '@/lib/newsletters';
import NewsletterAurumHousing from '@/components/newsletters/NewsletterAurumHousing';
import NewsletterPharmaValuation from '@/components/newsletters/NewsletterPharmaValuation';

const BASE = 'https://www.kautilya-pe.com';

const NEWSLETTER_COMPONENTS: Record<NewsletterSlug, React.ComponentType> = {
  'aurum-housing-com-acquisition': NewsletterAurumHousing,
  'torrent-jb-chemicals-pharma-valuation': NewsletterPharmaValuation,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return NEWSLETTER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = NEWSLETTER_META[slug as NewsletterSlug];
  if (!meta) return {};

  const fullTitle = meta.subtitle ? `${meta.title}: ${meta.subtitle}` : meta.title;
  const pageTitle = `${meta.title} | Kautilya Newsletter`;
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
      canonical: `${BASE}/newsletter/${slug}`,
      languages: { en: `${BASE}/newsletter/${slug}`, 'x-default': `${BASE}/newsletter/${slug}` },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `${BASE}/newsletter/${slug}`,
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
          ? { url: meta.image.startsWith('/') ? `${BASE}${meta.image}` : meta.image, width: 1200, height: 630, alt: meta.title }
          : { url: `${BASE}/opengraph-image`, width: 1200, height: 630, alt: meta.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fullTitle} | Kautilya`,
      description: meta.description,
      creator: '@microsearchfund',
      site: '@microsearchfund',
      images: [meta.image ? (meta.image.startsWith('/') ? `${BASE}${meta.image}` : meta.image) : `${BASE}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    other: {
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
      'article:published_time': meta.datePublished,
      'article:modified_time': meta.datePublished,
      'article:author': meta.author,
      'article:section': meta.category,
      'article:tag': kw.slice(0, 8).join(','),
      pagename: `Kautilya Newsletter — ${meta.title}`,
      subject: meta.description,
      topic: `${meta.category}, M&A advisory India, deal structure analysis`,
      classification: 'Finance / M&A Advisory / Market Intelligence',
      abstract: meta.description,
      summary: `${meta.title}. ${meta.subtitle ?? ''}. Published ${meta.datePublished} by ${meta.author} at Kautilya.`,
      language: 'English',
      distribution: 'Global',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_GB',
      'og:see_also': `${BASE}/newsletter`,
    },
  };
}

function NewsletterJsonLd({ slug, meta }: { slug: string; meta: (typeof NEWSLETTER_META)[NewsletterSlug] }) {
  const fullTitle = meta.subtitle ? `${meta.title}: ${meta.subtitle}` : meta.title;

  const org = {
    '@type': 'Organization',
    name: 'Kautilya',
    url: BASE,
    logo: { '@type': 'ImageObject', url: `${BASE}/icon.svg`, width: 512, height: 512 },
    sameAs: ['https://www.linkedin.com/company/pocket-fund/', 'https://x.com/microsearchfund'],
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
    '@type': 'NewsArticle',
    '@id': `${BASE}/newsletter/${slug}`,
    headline: fullTitle,
    name: fullTitle,
    description: meta.description,
    datePublished: meta.datePublished,
    dateModified: meta.datePublished,
    articleSection: meta.category,
    keywords: (meta.keywords ?? []).join(', '),
    wordCount: meta.wordCount ?? 2200,
    inLanguage: 'en-US',
    timeRequired: `PT${parseInt(meta.readTime)}M`,
    isAccessibleForFree: true,
    author,
    publisher: org,
    image: {
      '@type': 'ImageObject',
      url: meta.image ? (meta.image.startsWith('/') ? `${BASE}${meta.image}` : meta.image) : `${BASE}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE}/newsletter/${slug}`,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Newsletter', item: `${BASE}/newsletter` },
          { '@type': 'ListItem', position: 3, name: meta.title, item: `${BASE}/newsletter/${slug}` },
        ],
      },
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'The Kautilya Newsletter',
      url: `${BASE}/newsletter`,
      publisher: org,
    },
    about: (meta.about ?? []).map((name) => ({ '@type': 'Thing', name })),
    mentions: (meta.mentions ?? []).map((m) => ({
      '@type': 'Organization',
      name: m.name,
      ...(m.sameAs ? { sameAs: m.sameAs } : {}),
    })),
    ...(faqItems.length
      ? {
          hasPart: {
            '@type': 'FAQPage',
            '@id': `${BASE}/newsletter/${slug}#faq`,
            mainEntity: faqLd.mainEntity,
          },
        }
      : {}),
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
      { '@type': 'ListItem', position: 2, name: 'Newsletter', item: `${BASE}/newsletter` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: `${BASE}/newsletter/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqItems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}

export default async function NewsletterIssuePage({ params }: Props) {
  const { slug } = await params;
  if (!NEWSLETTER_SLUGS.includes(slug as NewsletterSlug)) notFound();

  const meta = NEWSLETTER_META[slug as NewsletterSlug];
  const NewsletterComponent = NEWSLETTER_COMPONENTS[slug as NewsletterSlug];

  return (
    <>
      <NewsletterJsonLd slug={slug} meta={meta} />
      <NewsletterComponent />
    </>
  );
}
