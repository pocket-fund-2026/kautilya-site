import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { LaserFlow } from './LaserFlow';
import editionZeroCover from '../assets/blogs/edition-zero.jpeg';
import editionAcquire from '../assets/blogs/edition-acquire.jpeg';
import editionThisIsBIz from '../assets/blogs/edition-thisisbiz.jpeg';
import edition200k from '../assets/blogs/edition-200k.jpeg';
import editionCollege from '../assets/blogs/edition-college.jpeg';

const CARD_HEIGHT = 340;
const BRANCH_HEIGHT = 52;
const NODE_SIZE = 12;
const CARD_WIDTH = 320;
const YEAR_COL_WIDTH = 100;
const COLUMN_GAP = 60;
const TRACK_LEFT_PAD = 80;
const TRACK_RIGHT_PAD = 200;
const BEAM_Y = CARD_HEIGHT + BRANCH_HEIGHT + NODE_SIZE / 2;
const TOTAL_HEIGHT = CARD_HEIGHT + BRANCH_HEIGHT + NODE_SIZE + BRANCH_HEIGHT + CARD_HEIGHT;

type Phase = {
  id: number;
  year?: string;
  month: string;
  tag: string;
  title: string;
  excerpt: string;
  position: 'top' | 'bottom';
  accent: string;
  surface: string;
  imgUrl: string;
  link?: string;
};

const phases: Phase[] = [
  {
    id: 1,
    year: '2023',
    month: 'May',
    tag: 'EDITION ZERO',
    title: 'Where it all started — a Sunday newsletter about buying small businesses.',
    excerpt:
      'This Is Bizness launched as a weekly breakdown of five small businesses.',
    position: 'top',
    accent: '#c9a84c',
    surface: 'linear-gradient(172deg, #0C1829 0%, #050D1B 52%, #091727 100%)',
    imgUrl: editionZeroCover,
    link: '/story-edition-zero',
  },
  {
    id: 2,
    month: 'Oct 2023',
    tag: 'THE POCKET FUND',
    title: 'A student-led fund buying businesses for under $5,000.',
    excerpt:
      'Pocket Fund launched as a student initiative focused on acquisition entrepreneurship — buying, operating, and selling small online businesses.',
    position: 'bottom',
    accent: '#9ec5ff',
    surface: 'linear-gradient(172deg, #070B1A 0%, #030611 52%, #060A1B 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80&auto=format',
    link: '/story-pocket-fund',
  },
  {
    id: 3,
    year: '2024',
    month: 'Feb',
    tag: 'COLLEGE STARTUPS',
    title: 'Why college is the best launchpad for your first business.',
    excerpt:
      'Reduced startup costs, AI tools, and a generation-wide shift toward entrepreneurship make college the best time to build.',
    position: 'top',
    accent: '#d2b574',
    surface: 'linear-gradient(172deg, #0F1118 0%, #070910 52%, #0C1020 100%)',
    imgUrl: editionCollege,
    link: '/story-college-startups',
  },
  {
    id: 4,
    month: 'May 2024',
    tag: 'POCKET DEALS',
    title: 'Breaking down a $15K micro-SaaS supporting children with autism.',
    excerpt:
      'A micro-SaaS offering visual schedules and step-by-step guidance for children with autism — at a $15K asking price.',
    position: 'bottom',
    accent: '#c9a84c',
    surface: 'linear-gradient(172deg, #0C1829 0%, #050D1B 52%, #091727 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format',
    link: '/story-pocket-deals',
  },
  {
    id: 5,
    month: 'Jun 2024',
    tag: 'DEAL SOURCING',
    title: 'Five filters for spotting real opportunities in a sea of listings.',
    excerpt:
      'After acquiring six micro-startups, five practical strategies emerged for filtering quality deals from marketplace noise.',
    position: 'top',
    accent: '#9ec5ff',
    surface: 'linear-gradient(172deg, #070B1A 0%, #030611 52%, #060A1B 100%)',
    imgUrl: editionAcquire,
    link: '/story-deal-sourcing',
  },
  {
    id: 6,
    year: '2025',
    month: 'Jan',
    tag: 'HIDDEN VALUE',
    title: 'The best acquisitions are the ones nobody else sees coming.',
    excerpt:
      'An under-monetized newsletter becomes a case study in how strategic improvements can dramatically increase business value.',
    position: 'bottom',
    accent: '#d2b574',
    surface: 'linear-gradient(172deg, #0F1118 0%, #070910 52%, #0C1020 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=700&q=80&auto=format',
    link: '/story-diamonds',
  },
  {
    id: 7,
    month: 'Nov 2024',
    tag: 'SEARCH FUNDS',
    title: 'How a Stanford model from the 1980s became a new asset class.',
    excerpt:
      'From Stanford MBA experiment to distinct asset class — the search fund model and its evolution across institutional and self-funded approaches.',
    position: 'top',
    accent: '#c9a84c',
    surface: 'linear-gradient(172deg, #0C1018 0%, #060A10 52%, #0A0E18 100%)',
    imgUrl: editionThisIsBIz,
    link: '/story-search-funds',
  },
  {
    id: 8,
    year: '2026',
    month: 'Feb',
    tag: 'DEAL CLOSING',
    title: 'Five deals. Six months. $200K closed — here is what we learned.',
    excerpt:
      'The team shifted from buying businesses to advising entrepreneurs on acquisitions, closing five deals totaling $200K.',
    position: 'bottom',
    accent: '#9ec5ff',
    surface: 'linear-gradient(172deg, #08101E 0%, #040810 52%, #08101C 100%)',
    imgUrl: edition200k,
    link: '/story-200k-deals',
  },
];

type TimelineItem = { type: 'divider'; year: string } | { type: 'post'; post: Phase };

function PhaseCard({ post }: { post: Phase }) {
  const content = (
    <article className="stories-timeline-card">
      <div className="stories-timeline-visual">
        <img
          src={post.imgUrl}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.style.background = post.surface;
            }
          }}
        />
        <div className="stories-timeline-visual-vignette" />
        <div className="stories-timeline-pill">{post.tag}</div>
      </div>
      <div className="stories-timeline-card-body">
        <div className="stories-timeline-date">{post.month} {post.year}</div>
        <h3 className="stories-timeline-title">{post.title}</h3>
        <p className="stories-timeline-excerpt">{post.excerpt}</p>
        <div className="stories-timeline-cta">
          <span>Read Story</span>
          <svg width="14" height="7" viewBox="0 0 16 8" fill="none" aria-hidden="true">
            <path d="M15.354 4.354a.5.5 0 000-.708L12.172.464a.5.5 0 10-.707.708L14.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h15v-1H0v1z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </article>
  );

  if (post.link) {
    if (post.link.startsWith('http')) {
      return (
        <a className="stories-timeline-card-link" href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          {content}
        </a>
      );
    }
    return (
      <Link className="stories-timeline-card-link" to={post.link} style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </Link>
    );
  }

  return content;
}

function TimelinePhase({ post }: { post: Phase }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px -60px 0px -60px' });
  const isTop = post.position === 'top';

  return (
    <div ref={ref} className="stories-timeline-item" style={{ width: CARD_WIDTH, height: TOTAL_HEIGHT }}>
      <motion.div
        initial={{ opacity: 0, y: isTop ? -30 : 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="stories-timeline-card-shell"
        style={{
          top: isTop ? 0 : BEAM_Y + NODE_SIZE / 2 + BRANCH_HEIGHT,
          width: CARD_WIDTH,
        }}
      >
        <PhaseCard post={post} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0, x: '-50%' }}
        animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="stories-timeline-branch"
        style={{
          top: isTop ? CARD_HEIGHT : BEAM_Y + NODE_SIZE / 2,
          height: BRANCH_HEIGHT,
          transformOrigin: 'top center',
          background: isTop
            ? 'linear-gradient(180deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.4) 40%, rgba(201,168,76,0.7) 100%)'
            : 'linear-gradient(180deg, rgba(201,168,76,0.7) 0%, rgba(201,168,76,0.4) 60%, rgba(201,168,76,0.18) 100%)',
        }}
      />

      <motion.div
        initial={{ scale: 0, x: '-50%', y: '-50%' }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.35, type: 'spring', stiffness: 350 }}
        className="stories-timeline-node"
        style={{ top: BEAM_Y }}
      >
        <div className="stories-timeline-node-core" style={{ boxShadow: `0 0 16px ${post.accent}66` }} />
      </motion.div>
    </div>
  );
}

function PhaseDivider({ year }: { year: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px -40px 0px -40px' });

  return (
    <div ref={ref} className="stories-timeline-year" style={{ width: YEAR_COL_WIDTH, height: TOTAL_HEIGHT }}>
      <div
        className="stories-timeline-year-line stories-timeline-year-line--top"
        style={{ top: BEAM_Y - 60 }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="stories-timeline-year-pill"
        style={{ top: BEAM_Y - NODE_SIZE / 2 - 4 }}
      >
        <span>{year}</span>
      </motion.div>
      <div
        className="stories-timeline-year-line stories-timeline-year-line--bottom"
        style={{ top: BEAM_Y + 20 }}
      />
    </div>
  );
}

export default function StoriesTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const dragPointerIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const isHorizontalGesture = Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 8;
      const isShiftScroll = event.shiftKey && Math.abs(event.deltaY) > 0;
      if (!isHorizontalGesture && !isShiftScroll) return;

      const delta = isShiftScroll ? event.deltaY : event.deltaX;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const atStart = container.scrollLeft <= 0 && delta < 0;
      const atEnd = container.scrollLeft >= maxScroll - 1 && delta > 0;

      if (atStart || atEnd) return;

      event.preventDefault();
      container.scrollLeft += delta * 1.25;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const timelineItems: TimelineItem[] = phases.flatMap((p) =>
    p.year
      ? [{ type: 'divider' as const, year: p.year }, { type: 'post' as const, post: p }]
      : [{ type: 'post' as const, post: p }],
  );

  const itemsWidth = timelineItems.reduce((acc, item) => acc + (item.type === 'divider' ? YEAR_COL_WIDTH : CARD_WIDTH), 0);
  const totalWidth = TRACK_LEFT_PAD + itemsWidth + (timelineItems.length - 1) * COLUMN_GAP + TRACK_RIGHT_PAD;

  return (
    <section className="stories-timeline-section">
        <div className="stories-timeline-header">
          <p className="section-eyebrow">The Journey</p>
          <h1 className="section-title">
            From a Sunday newsletter to closing $1M+ in deals.
          </h1>
          <div className="stories-timeline-header-row">
            <p className="stories-timeline-intro section-body">
              What started as a weekly breakdown of five small businesses became a community,
              then a fund, then a firm. Every edition, every deal sourced, every lesson learned
              in public &mdash; documented from day one.
            </p>
            <div className="stories-timeline-hint" aria-hidden="true">
              <span>Drag or swipe to explore</span>
              <motion.svg
                width="32" height="8" viewBox="0 0 32 8" fill="none"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M31.354 4.354a.5.5 0 000-.708L28.172.464a.5.5 0 10-.707.708L30.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h31v-1H0v1z"
                  fill="rgba(201,168,76,0.45)"
                />
              </motion.svg>
            </div>
          </div>
        </div>

        <div className="stories-timeline-rail-wrap" style={{ height: TOTAL_HEIGHT + 40 }}>

          <div
            ref={scrollContainerRef}
            className="stories-timeline-scroll"
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              position: 'relative',
              zIndex: 2,
              background: 'transparent',
              touchAction: 'pan-x pan-y pinch-zoom',
              overscrollBehaviorX: 'contain',
            }}
            onPointerDown={(e) => {
              if (e.pointerType !== 'mouse') return;
              const interactiveTarget = (e.target as HTMLElement).closest('a, button, input, textarea, select, label');
              if (interactiveTarget) return;
              const container = scrollContainerRef.current;
              if (!container) return;
              dragPointerIdRef.current = e.pointerId;
              container.setPointerCapture(e.pointerId);
              setIsDragging(true);
              dragStartRef.current = { x: e.pageX, scrollLeft: container.scrollLeft };
            }}
            onPointerMove={(e) => {
              if (!isDragging || e.pointerType !== 'mouse') return;
              const container = scrollContainerRef.current;
              if (!container) return;
              e.preventDefault();
              const walk = (e.pageX - dragStartRef.current.x) * 1.2;
              container.scrollLeft = dragStartRef.current.scrollLeft - walk;
            }}
            onPointerUp={(e) => {
              const container = scrollContainerRef.current;
              if (container && dragPointerIdRef.current === e.pointerId) {
                container.releasePointerCapture(e.pointerId);
              }
              dragPointerIdRef.current = null;
              setIsDragging(false);
            }}
            onPointerCancel={() => {
              dragPointerIdRef.current = null;
              setIsDragging(false);
            }}
            onPointerLeave={() => {
              if (!isDragging) return;
              dragPointerIdRef.current = null;
              setIsDragging(false);
            }}
            onDragStart={(e) => e.preventDefault()}
          >
            <div
              className="stories-timeline-track"
              style={{ width: totalWidth, height: TOTAL_HEIGHT + 40, background: 'transparent' }}
            >
              {/* z-0: CSS fallback glow (instant) + WebGL beam layer */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: BEAM_Y,
                  width: totalWidth,
                  height: 1,
                  pointerEvents: 'none',
                  zIndex: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.2) 8%, rgba(201,168,76,0.42) 50%, rgba(201,168,76,0.2) 92%, transparent 100%)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: BEAM_Y - 40,
                  width: totalWidth,
                  height: 84,
                  pointerEvents: 'none',
                  zIndex: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.04) 15%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0.04) 85%, transparent 100%)',
                  filter: 'blur(14px)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: BEAM_Y - 60,
                  width: totalWidth,
                  height: 120,
                  pointerEvents: 'none',
                  zIndex: 0,
                  overflow: 'hidden',
                  background: 'transparent',
                  mixBlendMode: 'screen',
                }}
              >
                <LaserFlow
                  style={{ width: '100%', height: '100%', background: 'transparent' }}
                  color="#c9a84c"
                  verticalBeamOffset={0}
                  horizontalBeamOffset={0}
                  verticalSizing={0.12}
                  horizontalSizing={4.0}
                  wispDensity={0.5}
                  wispIntensity={2.5}
                  wispSpeed={10}
                  flowSpeed={0.25}
                  flowStrength={0.3}
                  fogIntensity={0.2}
                  fogScale={0.15}
                  fogFallSpeed={0.3}
                  decay={1.4}
                  falloffStart={1.0}
                  mouseTiltStrength={0.003}
                  mouseSmoothTime={0.12}
                />
              </div>

              {/* z-1: structural 1px center line */}
              <div
                className="stories-timeline-center-line"
                style={{ top: BEAM_Y, width: totalWidth, zIndex: 1 }}
              />

              {/* z-2: timeline content */}
              <div className="stories-timeline-items" style={{ paddingLeft: TRACK_LEFT_PAD, gap: COLUMN_GAP, zIndex: 2 }}>
                {timelineItems.map((item) =>
                  item.type === 'divider' ? (
                    <PhaseDivider key={`div-${item.year}`} year={item.year} />
                  ) : (
                    <TimelinePhase key={`phase-${item.post.id}`} post={item.post} />
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="stories-timeline-edge stories-timeline-edge--left" />
          <div className="stories-timeline-edge stories-timeline-edge--right" />
        </div>
    </section>
  );
}
