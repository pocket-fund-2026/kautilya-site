'use client';

import Link from 'next/link';
import { BLOG_META, BLOG_SLUGS, type BlogSlug } from '@/lib/blogs';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogContent() {
  const slug = BLOG_SLUGS[0] as BlogSlug;
  const meta = BLOG_META[slug];

  return (
    <div className="blog-index-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-index-page {
          min-height: 100vh;
          padding-top: 80px;
        }

        /* Hero */
        .blog-hero {
          text-align: center;
          padding: 100px 48px 72px;
          max-width: 820px;
          margin: 0 auto;
        }
        .blog-hero-eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 7px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
        }
        .blog-hero-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 58px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 2px;
          line-height: 1.1;
          margin-bottom: 28px;
        }
        .blog-gold-rule {
          width: 40px;
          height: 1px;
          background: var(--gold);
          margin: 0 auto 28px;
        }
        .blog-hero-desc {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.85;
          max-width: 580px;
          margin: 0 auto;
        }

        /* Post card */
        .blog-posts-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px 140px;
        }
        .blog-posts-label {
          display: block;
          font-size: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 28px;
        }
        .blog-post-card {
          display: block;
          text-decoration: none;
          border: 1px solid rgba(201,185,154,0.15);
          border-radius: 4px;
          padding: 56px 64px;
          background: rgba(255,255,255,0.016);
          transition: border-color 0.35s ease, background 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .blog-post-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 100%;
          background: linear-gradient(to bottom, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .blog-post-card:hover {
          border-color: rgba(201,185,154,0.38);
          background: rgba(255,255,255,0.026);
        }
        .blog-post-card:hover::before { opacity: 1; }

        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .blog-card-tag {
          display: inline-block;
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(201,185,154,0.3);
          padding: 4px 11px;
          border-radius: 999px;
        }
        .blog-card-sep {
          width: 1px; height: 12px;
          background: rgba(201,185,154,0.22);
        }
        .blog-card-date {
          font-size: 12px;
          letter-spacing: 1.5px;
          color: var(--text-muted);
        }
        .blog-card-readtime {
          font-size: 12px;
          color: var(--text-muted);
        }

        .blog-card-title {
          font-family: var(--font-cormorant), 'Cormorant', serif;
          font-size: 44px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.22;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
        }
        .blog-card-subtitle {
          font-size: 17px;
          font-style: italic;
          color: var(--gold);
          line-height: 1.55;
          margin-bottom: 28px;
        }
        .blog-card-excerpt {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.9;
          max-width: 720px;
          margin-bottom: 40px;
        }
        .blog-card-cta {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .blog-hero { padding: 80px 24px 56px; }
          .blog-hero-title { font-size: 38px; }
          .blog-posts-wrap { padding: 0 24px 80px; }
          .blog-post-card { padding: 36px 28px; }
          .blog-card-title { font-size: 30px; }
          .blog-card-subtitle { font-size: 15px; }
        }
        @media (max-width: 480px) {
          .blog-hero-title { font-size: 30px; }
          .blog-card-title { font-size: 24px; }
          .blog-post-card { padding: 28px 20px; }
        }
      `}} />

      {/* Hero */}
      <div className="blog-hero">
        <span className="blog-hero-eyebrow">Insight & Intelligence</span>
        <h1 className="blog-hero-title">The Kautilya Blog</h1>
        <div className="blog-gold-rule" />
        <p className="blog-hero-desc">
          Market intelligence, deal breakdowns, and acquisition frameworks from the Kautilya advisory team.
        </p>
      </div>

      {/* Post */}
      <div className="blog-posts-wrap">
        <span className="blog-posts-label">Latest</span>
        <Link href={`/blog/${slug}`} className="blog-post-card">
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
          <span className="blog-card-cta">Read Article →</span>
        </Link>
      </div>
    </div>
  );
}
