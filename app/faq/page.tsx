import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Kautilya, buy-side advisory, deal sourcing methodology, sectors, and how to engage.',
  alternates: { canonical: 'https://www.kautilya-pe.com/faq' },
  openGraph: {
    title: 'FAQ | Kautilya',
    url: 'https://www.kautilya-pe.com/faq',
    description: 'Frequently asked questions about Kautilya, buy-side advisory and deal sourcing.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'What does Kautilya do?',
    answer:
      'Kautilya is a buy-side advisory firm that constructs proprietary acquisition pipelines on demand. We source deals from first principles: in any sector, against any criteria, across geographies.',
  },
  {
    question: 'How does Kautilya source deals?',
    answer:
      'We use systematic market mapping, proprietary outreach, and structured qualification to identify acquisition targets. We don\'t carry a pipeline. We build yours from scratch based on your specific criteria.',
  },
  {
    question: 'What sectors does Kautilya cover?',
    answer:
      'Kautilya is sector-agnostic. We build acquisition pipelines in any sector, against any criteria: from SaaS and technology to services, manufacturing, healthcare, and consumer.',
  },
  {
    question: 'Where is Kautilya based?',
    answer:
      'Kautilya is based in Mumbai, India, and works with clients globally across geographies.',
  },
  {
    question: 'How can I engage Kautilya for a deal sourcing mandate?',
    answer:
      'You can submit your acquisition thesis through our Engage page, or book a call directly through our Google Calendar integration.',
    link: { href: '/engage', label: 'Submit your thesis →' },
  },
  {
    question: 'Who does Kautilya work with?',
    answer:
      'We work with private equity funds seeking platform acquisitions, family offices pursuing first-time buys, search fund entrepreneurs building deal pipelines, and strategic acquirers looking for off-market targets.',
  },
  {
    question: 'What makes Kautilya different from traditional M&A intermediaries?',
    answer:
      'Unlike traditional intermediaries who carry a static pipeline of deals, we build bespoke acquisition pipelines from first principles, mapped to your specific thesis, sector focus, and investment criteria. Every engagement starts fresh with your criteria.',
  },
  {
    question: 'Is Kautilya hiring?',
    answer:
      'We\'re always looking for exceptional people who think systematically about markets and acquisitions. Check our Careers page for open roles.',
    link: { href: '/careers', label: 'View open roles →' },
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page">
        <div className="page-hero">
          <div className="section-eyebrow">Company</div>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p style={{ maxWidth: 520, color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
            Everything you need to know about Kautilya, our buy-side advisory practice, and how we source deals.
          </p>
        </div>
        <div className="content-section" style={{ maxWidth: 800, margin: '0 auto' }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="faq-item reveal" style={{ marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: 20, fontFamily: 'var(--font-cormorant), Cormorant, serif', color: 'var(--text-primary)', marginBottom: 12, fontWeight: 400 }}>
                {item.question}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)' }}>
                {item.answer}
              </p>
              {item.link && (
                <Link
                  href={item.link.href}
                  style={{ display: 'inline-block', marginTop: 12, fontSize: 13, letterSpacing: 2, color: 'var(--gold)', textDecoration: 'none' }}
                >
                  {item.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
