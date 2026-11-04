"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SplashCursor = dynamic(() => import('@/components/SplashCursor'), { ssr: false });

// The fluid trail needs a mouse. Mount it (and download its chunk) only after the first
// real mouse move on a fine-pointer device, so phones and first paint never pay for WebGL.
export default function SplashCursorWrapper() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const start = () => setOn(true);
    window.addEventListener('mousemove', start, { once: true, passive: true });
    return () => window.removeEventListener('mousemove', start);
  }, []);
  return on ? <SplashCursor /> : null;
}
