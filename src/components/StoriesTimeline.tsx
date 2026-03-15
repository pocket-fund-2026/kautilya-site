import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { LaserFlow } from './LaserFlow';

const CARD_HEIGHT = 380;
const BRANCH_HEIGHT = 72;
const NODE_SIZE = 12;
const CARD_WIDTH = 320;
const YEAR_COL_WIDTH = 112;
const COLUMN_GAP = 84;
const TRACK_LEFT_PAD = 112;
const TRACK_RIGHT_PAD = 280;
const BEAM_GLOW_HEIGHT = 132;
const BEAM_Y = CARD_HEIGHT + BRANCH_HEIGHT + NODE_SIZE / 2;
const TOTAL_HEIGHT = CARD_HEIGHT + BRANCH_HEIGHT + NODE_SIZE + BRANCH_HEIGHT + CARD_HEIGHT;

type Phase = {
  id: number;
  year: string;
  month: string;
  tag: string;
  title: string;
  excerpt: string;
  position: 'top' | 'bottom';
  accent: string;
  surface: string;
  imgUrl: string;
};

const phases: Phase[] = [
  {
    id: 1,
    year: '01',
    month: 'Phase',
    tag: 'MANDATE DEFINITION',
    title: 'The mandate is the lens everything is evaluated through.',
    excerpt:
      'Most acquisitions fail before the first conversation. The problem was never the market — it was the process.',
    position: 'top',
    accent: '#c9a84c',
    surface: 'linear-gradient(172deg, #0C1829 0%, #050D1B 52%, #091727 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80&auto=format',
  },
  {
    id: 2,
    year: '02',
    month: 'Phase',
    tag: 'UNIVERSE CONSTRUCTION',
    title: 'The best deals are not listed anywhere.',
    excerpt:
      'The opportunities on open marketplaces have already been seen by everyone. The information asymmetry is gone before you arrive.',
    position: 'bottom',
    accent: '#9ec5ff',
    surface: 'linear-gradient(172deg, #070B1A 0%, #030611 52%, #060A1B 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format',
  },
  {
    id: 3,
    year: '03',
    month: 'Phase',
    tag: 'TARGETED OUTREACH',
    title: 'Trust is the only currency that opens doors in markets like these.',
    excerpt:
      'Response rates shifted from below 5% to 20–40% by moving toward social and context-rich outreach. Not a template — a real conversation.',
    position: 'top',
    accent: '#d2b574',
    surface: 'linear-gradient(172deg, #0F1118 0%, #070910 52%, #0C1020 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80&auto=format',
  },
  {
    id: 4,
    year: '04',
    month: 'Phase',
    tag: 'DILIGENCE & STRUCTURING',
    title: 'The version you are shown is rarely complete.',
    excerpt:
      'Source-level reconstruction surfaces what summary sheets never show. 30,134 transactions validated. 99.83% monetary match rate.',
    position: 'bottom',
    accent: '#c9a84c',
    surface: 'linear-gradient(172deg, #0C1018 0%, #060A10 52%, #0A0E18 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format',
  },
  {
    id: 5,
    year: '05',
    month: 'Phase',
    tag: 'EXECUTION & CLOSE',
    title: 'Getting to LOI is not the hard part.',
    excerpt:
      'Holding discipline from LOI to close while pressure builds is where most deals fail quietly. We have closed across five asset classes.',
    position: 'top',
    accent: '#9ec5ff',
    surface: 'linear-gradient(172deg, #08101E 0%, #040810 52%, #08101C 100%)',
    imgUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&auto=format',
  },
];

type TimelineItem = { type: 'divider'; year: string } | { type: 'post'; post: Phase };

function PhaseCard({ post }: { post: Phase }) {
  return (
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
}

function TimelinePhase({ post }: { post: Phase }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px -60px 0px -60px' });
  const isTop = post.position === 'top';

  return (
    <div ref={ref} className="stories-timeline-item" style={{ width: CARD_WIDTH, height: TOTAL_HEIGHT }}>
      <motion.div
        initial={{ opacity: 0, y: isTop ? -26 : 26 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="stories-timeline-card-shell"
        style={{ top: isTop ? 0 : BEAM_Y + NODE_SIZE / 2 + BRANCH_HEIGHT, width: CARD_WIDTH }}
      >
        <PhaseCard post={post} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="stories-timeline-branch"
        style={{
          top: isTop ? CARD_HEIGHT : BEAM_Y + NODE_SIZE / 2,
          height: BRANCH_HEIGHT,
          background: isTop
            ? 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.35) 40%, rgba(201,168,76,0.72) 100%)'
            : 'linear-gradient(180deg, rgba(201,168,76,0.72) 0%, rgba(201,168,76,0.35) 60%, transparent 100%)',
        }}
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.35, type: 'spring', stiffness: 320 }}
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
      <div className="stories-timeline-year-line stories-timeline-year-line--top" style={{ top: BEAM_Y - 54 }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="stories-timeline-year-pill"
        style={{ top: BEAM_Y - NODE_SIZE / 2 - 5 }}
      >
        <span>{year}</span>
      </motion.div>
      <div className="stories-timeline-year-line stories-timeline-year-line--bottom" style={{ top: BEAM_Y + 18 }} />
    </div>
  );
}

export default function StoriesTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const isHorizontalGesture = Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 5;
      const isShiftScroll = event.shiftKey && Math.abs(event.deltaY) > 0;
      if (!isHorizontalGesture && !isShiftScroll) return;

      const delta = isShiftScroll ? event.deltaY : event.deltaX;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const atStart = container.scrollLeft <= 0 && delta < 0;
      const atEnd = container.scrollLeft >= maxScroll - 1 && delta > 0;

      if (atStart || atEnd) return;

      event.preventDefault();
      container.scrollLeft += delta * 1.5;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const timelineItems: TimelineItem[] = phases.flatMap((p) => [
    { type: 'divider', year: p.year },
    { type: 'post', post: p },
  ]);

  const itemsWidth = timelineItems.reduce((acc, item) => acc + (item.type === 'divider' ? YEAR_COL_WIDTH : CARD_WIDTH), 0);
  const totalWidth = TRACK_LEFT_PAD + itemsWidth + (timelineItems.length - 1) * COLUMN_GAP + TRACK_RIGHT_PAD;

  return (
    <div className="page approach-page-methodology">
      <section className="stories-timeline-section">
        <div className="stories-timeline-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow">The Methodology</p>
            <h1 className="stories-timeline-heading">
              The right acquisition does not find you. You find it.
            </h1>
            <div className="stories-timeline-header-row">
              <p className="stories-timeline-intro section-body">
                Most buyers come to us after the same experience: months of deal flow that went
                nowhere, a term sheet that fell apart in diligence, or capital deployed into
                something that made sense on paper and did not in practice. The problem was never
                the market. The problem was the process.
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
          </motion.div>
        </div>

        <div className="stories-timeline-rail-wrap" style={{ background: '#0b172b', height: TOTAL_HEIGHT }}>

          <div
            ref={scrollContainerRef}
            className="stories-timeline-scroll"
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              position: 'relative',
              zIndex: 2,
              background: 'transparent',
            }}
            onMouseDown={(e) => {
              const container = scrollContainerRef.current;
              if (!container) return;
              setIsDragging(true);
              dragStartRef.current = { x: e.pageX, scrollLeft: container.scrollLeft };
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              const container = scrollContainerRef.current;
              if (!container) return;
              e.preventDefault();
              const walk = (e.pageX - dragStartRef.current.x) * 1.2;
              container.scrollLeft = dragStartRef.current.scrollLeft - walk;
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            <div
              className="stories-timeline-track"
              style={{ width: totalWidth, height: TOTAL_HEIGHT, background: 'transparent' }}
            >
              {/* z-0: WebGL beam layer */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: BEAM_Y - BEAM_GLOW_HEIGHT / 2,
                  width: totalWidth,
                  height: BEAM_GLOW_HEIGHT,
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
                  wispDensity={0.45}
                  wispIntensity={2.2}
                  wispSpeed={11}
                  flowSpeed={0.38}
                  flowStrength={0.34}
                  fogIntensity={0.16}
                  fogScale={0.22}
                  fogFallSpeed={0.52}
                  decay={1.06}
                  falloffStart={1.12}
                  mouseTiltStrength={0.007}
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
    </div>
  );
}
