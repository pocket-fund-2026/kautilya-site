"use client";
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface Phase {
  phaseNumber: string;
  title: string;
  brief: string;
  points: string[];
  accent: string;
}

interface PhaseExplorerProps {
  phases: Phase[];
}

export function PhaseExplorer({ phases }: PhaseExplorerProps) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const AUTOPLAY_MS = 9500;

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % phases.length);
    }, AUTOPLAY_MS);
  }, [phases.length]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const select = (i: number) => {
    setActive(i);
    startAutoplay();
  };

  const current = phases[active];

  return (
    <div className="phase-explorer">
      {/* Phase tabs */}
      <div className="phase-tabs">
        {phases.map((p, i) => (
          <button
            key={p.phaseNumber}
            className={`phase-tab${active === i ? ' phase-tab--active' : ''}`}
            onClick={() => select(i)}
          >
            <span className="phase-tab-num">{p.phaseNumber}</span>
            <span className="phase-tab-title">{p.title}</span>
            {active === i && (
              <motion.div
                className="phase-tab-underline"
                layoutId="phaseUnderline"
                style={{ background: current.accent }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="phase-detail"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          <div className="phase-detail-header">
            <span className="phase-detail-num" style={{ color: current.accent }}>
              Phase {current.phaseNumber}
            </span>
            <h3 className="phase-detail-title">{current.title}</h3>
            <p className="phase-detail-brief">{current.brief}</p>
          </div>

          <ul className="phase-detail-points">
            {current.points.map((pt, i) => (
              <motion.li
                key={pt}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.3 }}
              >
                <span className="phase-bullet" style={{ background: current.accent }} />
                {pt}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* Progress bar (below phase content) */}
      <div className="phase-progress-track" aria-hidden="true">
        <motion.div
          className="phase-progress-fill"
          key={active}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
          style={{ background: current.accent, transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
}
