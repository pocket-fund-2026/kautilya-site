'use client';

import Link from 'next/link';
import { BLOG_META, BLOG_SLUGS, type BlogSlug } from '@/lib/blogs';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogContent() {
  const slugs = [...BLOG_SLUGS].sort(
    (a, b) => new Date(BLOG_META[b as BlogSlug].datePublished).getTime() - new Date(BLOG_META[a as BlogSlug].datePublished).getTime()
  ) as BlogSlug[];

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
          font-size: 9px;
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
          font-size: 12px;
          letter-spacing: 0.5px;
          color: var(--text-muted);
        }
        .blog-card-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 42px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }
        .blog-card-subtitle {
          font-family: var(--font-cormorant), 'Cormorant', serif;
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
      `}} />

      {/* Header — uses .page-hero, .section-title, .section-body, .gold-line from globals */}
      <div className="page-hero">
        <div className="phase-label">Insight & Intelligence</div>
        <h1 className="section-title" style={{ fontSize: 52, marginTop: 12 }}>The Kautilya Blog</h1>
        <div className="gold-line" style={{ margin: '20px 0 20px', marginLeft: 0 }} />
        <p className="section-body">
          Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team.
        </p>
      </div>

      {/* Post listing — uses .content-section from globals */}
      <div className="content-section" style={{ paddingTop: 40 }}>
        <div className="phase-label" style={{ marginBottom: 24 }}>Latest</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {slugs.map((slug) => {
            const meta = BLOG_META[slug];
            return (
              <Link key={slug} href={`/blog/${slug}`} className="blog-post-card">
                <div className="blog-card-meta">
                  <span className="blog-card-tag">{meta.category}</span>
                  <div className="blog-card-sep" />
                  <span className="blog-card-date">{formatDate(meta.datePublished)}</span>
                  <div className="blog-card-sep" />
                  <span className="blog-card-readtime">{meta.readTime} read</span>
                </div>
                <div className="blog-card-title">{meta.title}</div>
                {meta.subtitle && <div className="blog-card-subtitle">{meta.subtitle}</div>}
                <p className="blog-card-excerpt">{meta.description}</p>
                <span className="blog-card-arrow">Read Article →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
