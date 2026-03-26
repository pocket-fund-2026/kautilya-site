'use client';

import { useState, useEffect, type FormEvent } from 'react';

const DISMISSED_KEY = 'kautilya_newsletter_dismissed';
const POPUP_DELAY = 60_000; // 60 seconds

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = sessionStorage.getItem(DISMISSED_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), POPUP_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, '1');
  };

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
