"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const reveal = (el: Element) => {
      el.classList.add('visible');
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    const revealElements = Array.from(document.querySelectorAll('.reveal'));

    // Immediately reveal anything already on screen at mount. Without this,
    // elements that are above the fold on page load (or after route nav)
    // sometimes get stuck mid-transition because the observer's first
    // callback races with React paint and the opacity transition gets
    // interrupted, leaving the element in a partial-alpha state.
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    // Safety net: anything that hasn't revealed within 2s gets shown.
    // Better to skip the animation than leave text invisible.
    const fallback = window.setTimeout(() => {
      revealElements.forEach((el) => el.classList.add('visible'));
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
