'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { usePathname } from 'next/navigation';

const DISMISSED_KEY = 'kautilya_newsletter_dismissed_at';
const POPUP_DELAY = 90_000; // 90 seconds — long enough that the user has chosen to be here
const DISMISS_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export default function NewsletterPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Don't pop on the landing page — the user just arrived; the page is busy
  // with a video/star field/whoosh and asking for an email is the worst
  // possible greeting.
  const suppressOnRoute = pathname === '/' || pathname === '';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (suppressOnRoute) return;

    // Persistent dismissal with TTL — sessionStorage was too short and
    // produced the "no, no, no" experience. localStorage with 30-day TTL
    // means a dismissed user is genuinely left alone.
    try {
      const raw = localStorage.getItem(DISMISSED_KEY);
      if (raw) {
        const dismissedAt = Number(raw);
        if (Number.isFinite(dismissedAt) && Date.now() - dismissedAt < DISMISS_TTL_MS) {
          return;
        }
      }
    } catch {
      // localStorage may be blocked; fall through and just show on delay.
    }

    const timer = setTimeout(() => setVisible(true), POPUP_DELAY);
    return () => clearTimeout(timer);
  }, [suppressOnRoute]);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    } catch {
      // Ignore storage failures — the popup will still close for this session.
    }
  };

  // Escape-to-dismiss. Required because the popup interrupts the page and
  // refusing to honor Escape is a common dark-pattern complaint.
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setState('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setState('success');
      setTimeout(dismiss, 2500);
    } catch {
      setState('error');
    }
  };

  if (!visible) return null;

  return (
    <div className="newsletter-backdrop" onClick={dismiss}>
      <div className="newsletter-popup" onClick={(e) => e.stopPropagation()}>
        <button className="newsletter-close" onClick={dismiss} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        <div className="newsletter-eyebrow">This Is Bizness</div>
        <h3 className="newsletter-title">Stay in the deal flow.</h3>
        <p className="newsletter-desc">
          Market intelligence, sourcing frameworks, and acquisition case studies, delivered weekly.
        </p>

        {state === 'success' ? (
          <p className="newsletter-success">You're in. Welcome to the flow.</p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={state === 'submitting'}>
              {state === 'submitting' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}
        {state === 'error' && <p className="newsletter-error">Something went wrong. Try again.</p>}
      </div>
    </div>
  );
}
