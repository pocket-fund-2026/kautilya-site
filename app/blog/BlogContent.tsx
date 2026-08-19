'use client';

import Link from 'next/link';
import { BLOG_META, BLOG_SLUGS, type BlogSlug } from '@/lib/blogs';
import { NEWSLETTER_META, NEWSLETTER_SLUGS, type NewsletterSlug } from '@/lib/newsletters';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogContent() {
  const slugs = [...BLOG_SLUGS].sort(
    (a, b) => new Date(BLOG_META[b as BlogSlug].datePublished).getTime() - new Date(BLOG_META[a as BlogSlug].datePublished).getTime()
  ) as BlogSlug[];

  const newsletterSlugs = [...NEWSLETTER_SLUGS].sort(
    (a, b) => new Date(NEWSLETTER_META[b as NewsletterSlug].datePublished).getTime() - new Date(NEWSLETTER_META[a as NewsletterSlug].datePublished).getTime()
  ) as NewsletterSlug[];

  return (
    <div className="page blog-index-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-index-page { overflow-x: hidden; }

        /* Blog post card — extends .pathway-card pattern from globals */
        .blog-post-card {
          display: block;
          text-decoration: none;
          border: 1px solid var(--border);
          border-radius: 3px;
          padding: 52px 60px;
          background: rgba(255,255,255,0.015);
          transition: background 0.4s, border-color 0.4s, transform 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .blog-post-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .blog-post-card:hover {
          background: rgba(255,255,255,0.03);
          border-color: rgba(201,185,154,0.28);
          transform: translateY(-3px);
        }
        .blog-post-card:hover::before { transform: scaleX(1); }

        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .blog-card-tag {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(201,185,154,0.28);
          padding: 4px 11px;
          border-radius: 999px;
        }
        .blog-card-sep {
          width: 1px; height: 10px;
          background: var(--border);
        }
        .blog-card-date, .blog-card-readtime {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: var(--text-muted);
        }
        .blog-card-title {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 42px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }
        .blog-card-subtitle {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 400;
          color: var(--gold);
          line-height: 1.4;
          margin-bottom: 24px;
        }
        .blog-card-excerpt {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.85;
          max-width: 640px;
          margin-bottom: 36px;
        }
        .blog-card-arrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          transition: transform 0.3s;
          display: inline-block;
        }
        .blog-post-card:hover .blog-card-arrow { transform: translateX(6px); }

        @media (max-width: 768px) {
          .blog-post-card { padding: 36px 28px; }
          .blog-card-title { font-size: 28px; }
          .blog-card-subtitle { font-size: 17px; }
        }
        @media (max-width: 480px) {
          .blog-post-card { padding: 28px 20px; }
          .blog-card-title { font-size: 24px; }
        }

        /* Side-by-side Blog / Newsletter columns */
        .blog-newsletter-grid {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 48px;
          align-items: start;
        }
        .grid-divider {
          align-self: stretch;
          background: var(--border);
          min-height: 100%;
        }
        .grid-column-head { margin-bottom: 28px; }
        .grid-column-title {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 30px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 0.5px;
          margin: 8px 0 12px;
        }
        .grid-column-desc {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
        }
        .newsletter-linkedin-link {
          display: inline-block;
          margin-top: 14px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid var(--gold-dim);
          padding-bottom: 3px;
          white-space: nowrap;
          transition: border-color 0.2s;
        }
        .newsletter-linkedin-link:hover { border-color: var(--gold); }

        /* Compact card variant used inside the side-by-side columns */
        .side-post-card {
          display: block;
          text-decoration: none;
          border: 1px solid var(--border);
          border-radius: 3px;
          padding: 32px 28px;
          background: rgba(255,255,255,0.015);
          transition: background 0.4s, border-color 0.4s, transform 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .side-post-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .side-post-card:hover {
          background: rgba(255,255,255,0.03);
          border-color: rgba(201,185,154,0.28);
          transform: translateY(-3px);
        }
        .side-post-card:hover::before { transform: scaleX(1); }
        .side-post-card + .side-post-card { margin-top: 20px; }
        .side-card-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .side-card-title {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 27px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 8px;
        }
        .side-card-subtitle {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 16px;
          font-style: italic;
          font-weight: 400;
          color: var(--gold);
          line-height: 1.4;
          margin-bottom: 14px;
        }
        .side-card-excerpt {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .side-card-arrow {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          transition: transform 0.3s;
          display: inline-block;
        }
        .side-post-card:hover .side-card-arrow { transform: translateX(6px); }
        .newsletter-card {
          border-color: rgba(201,185,154,0.22);
          background: rgba(201,185,154,0.025);
        }

        @media (max-width: 900px) {
          .blog-newsletter-grid { grid-template-columns: 1fr; gap: 56px; }
          .grid-divider { display: none; }
        }
      `}} />

      {/* Header — uses .page-hero, .section-title, .section-body, .gold-line from globals */}
      <div className="page-hero">
        <div className="phase-label">Insight & Intelligence</div>
        <h1 className="section-title" style={{ fontSize: 52, marginTop: 12 }}>The Kautilya Blog &amp; Newsletter</h1>
        <div className="gold-line" style={{ margin: '20px 0 20px', marginLeft: 0 }} />
        <p className="section-body">
          Advisory guides and deal-structure teardowns from the Kautilya team — market
          intelligence and acquisition frameworks on the left, deal-by-deal newsletter issues on
          the right.
        </p>
      </div>

      {/* Blog + Newsletter, side by side — uses .content-section from globals */}
      <div className="content-section" style={{ paddingTop: 40 }}>
        <div className="blog-newsletter-grid">
          <div className="grid-column">
            <div className="grid-column-head">
              <div className="phase-label">Insight &amp; Intelligence</div>
              <h2 className="grid-column-title">The Kautilya Blog</h2>
              <p className="grid-column-desc">
                Market intelligence, deal breakdowns, and acquisition frameworks from the
                Kautilya advisory team.
              </p>
            </div>
            <div>
              {slugs.map((slug) => {
                const meta = BLOG_META[slug];
                return (
                  <Link key={slug} href={`/blog/${slug}`} className="side-post-card">
                    <div className="side-card-meta">
                      <span className="blog-card-tag">{meta.category}</span>
                      <div className="blog-card-sep" />
                      <span className="blog-card-date">{formatDate(meta.datePublished)}</span>
                      <div className="blog-card-sep" />
                      <span className="blog-card-readtime">{meta.readTime} read</span>
                    </div>
                    <div className="side-card-title">{meta.title}</div>
                    {meta.subtitle && <div className="side-card-subtitle">{meta.subtitle}</div>}
                    <p className="side-card-excerpt">{meta.description}</p>
                    <span className="side-card-arrow">Read Article →</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid-divider" />

          <div className="grid-column">
            <div className="grid-column-head">
              <div className="phase-label">Deal Table Teardowns</div>
              <h2 className="grid-column-title">The Kautilya Newsletter</h2>
              <p className="grid-column-desc">
                Deal-structure teardowns from Kautilya&apos;s advisory desk: buyer, target,
                structure, and a scorecard for every Indian M&amp;A deal worth studying.
              </p>
              <a
                href="https://kautilya-pe.beehiiv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="newsletter-linkedin-link"
              >
                Subscribe on Beehiiv →
              </a>
            </div>
            <div>
              {newsletterSlugs.map((slug) => {
                const meta = NEWSLETTER_META[slug];
                return (
                  <Link key={slug} href={`/newsletter/${slug}`} className="side-post-card newsletter-card">
                    <div className="side-card-meta">
                      <span className="blog-card-tag">{meta.category}</span>
                      <div className="blog-card-sep" />
                      <span className="blog-card-date">{formatDate(meta.datePublished)}</span>
                      <div className="blog-card-sep" />
                      <span className="blog-card-readtime">{meta.readTime} read</span>
                    </div>
                    <div className="side-card-title">{meta.title}</div>
                    {meta.subtitle && <div className="side-card-subtitle">{meta.subtitle}</div>}
                    <p className="side-card-excerpt">{meta.description}</p>
                    <span className="side-card-arrow">Read Teardown →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
