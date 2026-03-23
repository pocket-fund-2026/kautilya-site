"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MOBILE_MENU_CLOSE_MS = 220;

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeMenu = () => {
    if (!menuOpen && !menuClosing) return;
    clearCloseTimer();
    setMenuOpen(false);
    setMenuClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setMenuClosing(false);
      closeTimerRef.current = null;
    }, MOBILE_MENU_CLOSE_MS);
  };

  const openMenu = () => {
    clearCloseTimer();
    setMenuClosing(false);
    setMenuOpen(true);
  };

  const toggleMenu = () => {
    if (menuOpen || menuClosing) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    clearCloseTimer();
    setMenuClosing(false);
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    return () => { clearCloseTimer(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || menuClosing ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, menuClosing]);

  const portfolioSlugs = ['borderless', 'dino-games', 'runify', 'smartprompt', 'inspire3'];
  const storySlug = path.startsWith('/stories/') ? path.split('/')[2] : '';
  const isPortfolioStory = portfolioSlugs.includes(storySlug);

  let activePage = '';
  if (path.startsWith('/approach')) activePage = 'approach';
  else if (path.startsWith('/portfolio') || isPortfolioStory) activePage = 'portfolio';
  else if (path.startsWith('/stories') || path.startsWith('/story-')) activePage = 'stories';
  else if (path.startsWith('/team')) activePage = 'team';

  const menuVisible = menuOpen || menuClosing;
  const navClassName = menuOpen ? 'open' : menuClosing ? 'closing' : '';

  return (
    <header className={`header${menuVisible ? ' menu-open' : ''}`} id="mainHeader">
      <Link className="logo" href="/">Kautilya</Link>

      <button
        className={`hamburger${menuVisible ? ' active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuVisible}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={navClassName}>
        <Link href="/approach" data-page="approach" className={activePage === 'approach' ? 'active' : ''} onClick={closeMenu}>Approach</Link>
        <Link href="/portfolio" data-page="portfolio" className={activePage === 'portfolio' ? 'active' : ''} onClick={closeMenu}>Portfolio</Link>
        <Link href="/stories" data-page="stories" className={activePage === 'stories' ? 'active' : ''} onClick={closeMenu}>Stories</Link>
        <Link href="/team" data-page="team" className={activePage === 'team' ? 'active' : ''} onClick={closeMenu}>Team</Link>
        <Link className="cta-btn-mobile" href="/engage" onClick={closeMenu}>Engage</Link>
      </nav>

      <Link className="cta-btn" href="/engage">Engage</Link>
    </header>
  );
}
