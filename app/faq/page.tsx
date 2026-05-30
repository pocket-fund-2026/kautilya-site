import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'FAQ | Kautilya | Micro Private Equity & Buy-Side Advisory' },
  description:
    '23 answered questions on buy-side M&A advisory, off-market deal sourcing, due diligence, deal structures, and transparent pricing — from $6,500 standalone DD to full-service retainers.',
  keywords: [
    'M&A advisory FAQ', 'buy a business FAQ India', 'off-market deal sourcing questions',
    'due diligence cost India', 'acquisition advisory pricing', 'micro private equity FAQ',
    'search fund questions India', 'business acquisition process FAQ',
    'seller financing explained', 'how to buy a business India', 'first-time buyer acquisition',
    'what is buy-side advisory', 'M&A retainer pricing India',
  ],
  alternates: { canonical: 'https://www.kautilya-pe.com/faq' },
  openGraph: {
    title: 'FAQ | Kautilya | Micro Private Equity & Buy-Side Advisory',
    url: 'https://www.kautilya-pe.com/faq',
    description: '23 answered questions on M&A advisory, off-market deal sourcing, due diligence, and transparent pricing.',
  },
};

interface FaqItem {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: 'General',
    items: [
      {
        question: 'What is Kautilya?',
        answer:
          'Kautilya is a micro private equity firm that helps buyers acquire, operate, and grow small businesses in the $50K-$5M range. We handle everything from deal sourcing and due diligence to operator placement and post-acquisition growth - so you can own a profitable, cash-flowing business without quitting your day job or starting from scratch.',
      },
      {
        question: 'Who is Kautilya for?',
        answer:
          "We work with individual first-time buyers, search fund entrepreneurs, software HoldCos, roll-up operators, and VC-backed companies looking to grow through acquisition. If you know what kind of business you want and need the deal flow, diligence, and operational support to get it done - that's us.",
      },
      {
        question: 'What makes Kautilya different from a traditional M&A advisor or broker?',
        answer:
          "Most advisors hand you a report and disappear. We stay through the entire lifecycle - sourcing, diligence, structuring, operations setup, and growth. We're operators first, not just consultants. We also specialize in creative deal structures (seller financing, earnouts, revenue-based payments) that make acquisitions possible without massive upfront capital.",
      },
      {
        question: 'What industries do you cover?',
        answer:
          "We're sector-flexible but focus on asset-light, founder-operated businesses - SaaS, content sites, service businesses, IT staffing, e-commerce, and digital-first companies. If it's operationally simple and has real cash flow, we'll look at it.",
      },
      {
        question: 'What geographies do you operate in?',
        answer:
          'We source deals across the US, UAE, Europe, Asia-Pacific, and MENA. Our team has localized playbooks for different markets, so structuring and diligence adjust to the jurisdiction.',
      },
    ],
  },
  {
    title: 'Deal Sourcing',
    items: [
      {
        question: 'How do you find deals?',
        answer:
          'Primarily off-market. We run direct founder outreach (cold email, LinkedIn, Loom videos), tap into a deep broker network, mine community forums, and use social signal analysis to detect selling intent before businesses hit the open market. We also monitor 30+ vetted online marketplaces as a supplement.',
      },
      {
        question: 'How many deals will I see?',
        answer:
          'Depends on your plan. Our retainer tiers deliver 8, 20, or 50+ vetted deals per month. Every deal is pre-screened - verified financials, seller motivation assessed, creative financing potential evaluated.',
      },
      {
        question: 'What does "off-market" actually mean?',
        answer:
          "The business isn't listed on any marketplace. We're reaching out directly to founders and owners who may be open to selling but haven't publicly announced it. These deals tend to have less competition, more flexible terms, and better pricing.",
      },
      {
        question: 'Can I define exactly what kind of business I want?',
        answer:
          "That's the expectation. The more specific your criteria - industry, size, geography, margin thresholds, deal-breakers - the better we perform. We build a personalized acquisition plan based on your exact parameters.",
      },
    ],
  },
  {
    title: 'Due Diligence',
    items: [
      {
        question: 'What does your due diligence process look like?',
        answer:
          'A 6-week deep dive across 8 workstreams: Financial, Commercial/Product, Email & CRM, Affiliate & Partnerships, Traffic & Conversion, Tech & Data, Operational & Team, and Strategic & Exit. You get a full DD report, normalized financial model, risk map, transition plan, and a 30-60-90 day post-close action plan.',
      },
      {
        question: 'How big is the DD team?',
        answer:
          'Typically 1-3 analysts and, if required, 1 developer per engagement, led by a dedicated team lead. For retainer clients, the team scales with your plan tier.',
      },
      {
        question: 'Do you just check boxes, or do you actually tell me if a deal is bad?',
        answer:
          "We'll kill a deal if the numbers don't work. Our approach is owner-minded - we evaluate every business as if we were buying it ourselves. If we see red flags, you'll hear about them before you waste another dollar.",
      },
      {
        question: 'Can I hire you just for due diligence on a deal I found myself?',
        answer:
          'Yes. Standalone DD engagements start at $6,500 plus a 0.3% success fee on close. You get the full 8-workstream analysis regardless of how you sourced the deal.',
      },
    ],
  },
  {
    title: 'Pricing & Engagement',
    items: [
      {
        question: 'How much does it cost?',
        answer:
          'We offer three engagement types: Due Diligence Only ($6,500 + 0.3% success fee on close), Market Research ($3,500-$5,000 for a 6-8 week deep dive), and Full-Service Retainer ($2,500-$10,000/month depending on deal volume, plus success fees - 3% under $650K, 1.5% above $650K).',
      },
      {
        question: 'What are the payment terms?',
        answer:
          '50% upfront, 50% at Phase 1 close (or as agreed per engagement). Success fees are due only when a deal closes.',
      },
      {
        question: 'Is there a minimum commitment?',
        answer:
          'Retainers are month-to-month. DD and research engagements are scoped per project. No long-term lock-ins.',
      },
    ],
  },
  {
    title: 'The Acquisition Process',
    items: [
      {
        question: 'How long does it take to close a deal?',
        answer:
          'Typical timeline is 30-90 days from the time you engage with a target. Sourcing the right deal can take a few weeks to a few months depending on how specific your criteria are.',
      },
      {
        question: "I've never bought a business before. Can I still work with you?",
        answer:
          "Absolutely - a significant portion of our clients are first-time acquirers. We walk you through every step: defining your criteria, evaluating deals, structuring the offer, running diligence, setting up operations, and planning for growth. You don't need M&A experience. You need clarity on what you want.",
      },
      {
        question: 'Do you help with financing the acquisition?',
        answer:
          "We don't provide capital directly, but we specialize in creative deal structures - seller financing, earnouts, revenue-based payments, and hybrid structures that reduce the cash you need upfront. We'll help you structure the deal so it works for your situation.",
      },
      {
        question: 'What happens after I buy the business?',
        answer:
          "We don't disappear at close. Phase 3 is operations setup - we place experienced operators, implement automation, and build your management dashboards. Phase 4 is growth strategy: revenue optimization, cost efficiency, market expansion, and exit preparation.",
      },
    ],
  },
  {
    title: 'Operations & Post-Acquisition',
    items: [
      {
        question: 'What is operator placement?',
        answer:
          'We source and vet operational talent - managers, specialists, and integrators - who step in to run the day-to-day of your newly acquired business. The goal is for you to spend 3-5 hours per week on the business, not 40.',
      },
      {
        question: 'Do I need to run the business myself?',
        answer:
          "No. That's the point of operator placement. We help you build a team so the business runs without you being in the weeds daily.",
      },
      {
        question: 'How do you help me grow the business after acquisition?',
        answer:
          'We build a growth playbook specific to your business - revenue levers, cost optimization, expansion opportunities, and a clear exit strategy. We stay on as a partner for 30-90 days post-close (and beyond, for retainer clients).',
      },
    ],
  },
  {
    title: 'Trust & Track Record',
    items: [
      {
        question: 'How many deals has your team completed?',
        answer:
          '7 acquisitions with 2 successful exits to date. Our analyst team reviews 30-50 deals per week and has completed 1,200+ outreach campaigns with a 14.8% response rate - well above industry average.',
      },
      {
        question: "Who's on the team?",
        answer:
          "A 10-person team including analysts, a DD lead, engineers, and operations support - led by Dev Shah, a 24-year-old micro PE operator who's personally acquired and exited multiple businesses.",
      },
      {
        question: "What if I'm not happy with the deal flow?",
        answer:
          "Retainers are month-to-month. If the deals aren't matching your criteria, we recalibrate. If it's still not a fit, you walk - no penalties, no hard feelings.",
      },
    ],
  },
];

const allItems = FAQ_SECTIONS.flatMap((s) => s.items);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allItems.map((item) => ({
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

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-sections {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-section {
          margin-bottom: 56px;
        }

        .faq-section-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--gold);
          letter-spacing: 1px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 32px;
        }

        .faq-item {
          margin-bottom: 36px;
          padding-bottom: 36px;
          border-bottom: 1px solid var(--border);
        }

        .faq-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .faq-question {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .faq-answer {
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-secondary);
        }

        .faq-cta {
          text-align: center;
          padding: 48px 0 0;
          border-top: 1px solid var(--border);
          margin-top: 20px;
        }

        .faq-cta-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 28px;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .faq-section-title { font-size: 24px; }
          .faq-question { font-size: 18px; }
          .faq-item { margin-bottom: 28px; padding-bottom: 28px; }
          .faq-section { margin-bottom: 40px; }
        }
      `}} />

      <div className="page">
        <div className="page-hero">
          <div className="section-eyebrow">Company</div>
          <h1 className="section-title">Kautilya FAQs</h1>
          <p style={{ maxWidth: 520, color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
            Everything you need to know about Kautilya, our micro PE practice, deal sourcing, due diligence, and how we work.
          </p>
        </div>

        <div className="content-section faq-sections">
          {FAQ_SECTIONS.map((section, si) => (
            <div key={si} className="faq-section reveal">
              <h2 className="faq-section-title">{section.title}</h2>
              {section.items.map((item, ii) => (
                <div key={ii} className="faq-item">
                  <h3 className="faq-question">{item.question}</h3>
                  <p className="faq-answer">{item.answer}</p>
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
          ))}

          <div className="faq-cta reveal">
            <h2 className="faq-cta-title">Still have questions?</h2>
            <Link
              href="/engage"
              className="engage-submit"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
