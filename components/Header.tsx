"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import KautilyaLogo from '@/components/KautilyaLogo';

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
  else if (path.startsWith('/blog')) activePage = 'blog';
  else if (path.startsWith('/team')) activePage = 'team';

  const menuVisible = menuOpen || menuClosing;
  const navClassName = menuOpen ? 'open' : menuClosing ? 'closing' : '';

  const navLinks: { href: string; page: string; label: string }[] = [
    { href: '/approach', page: 'approach', label: 'Approach' },
    { href: '/portfolio', page: 'portfolio', label: 'Portfolio' },
    { href: '/stories', page: 'stories', label: 'Stories' },
    { href: '/blog', page: 'blog', label: 'Blog' },
    { href: '/team', page: 'team', label: 'Team' },
  ];

  // id="mainHeader" + the `header--sky` class are driven by HomeContent (header turns translucent over the constellation sky).
  return (
    // className stays constant on purpose: HomeContent toggles `header--sky` on this element from outside React, and React
    // would wipe that class whenever the className prop changed (e.g. when the menu opens). Menu state lives in a data attribute.
    <header className="site-header" data-menu-open={menuVisible ? 'true' : undefined} id="mainHeader">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Kautilya — home" onClick={closeMenu}>
          <KautilyaLogo variant="horizontal" />
        </Link>

        <nav className={`site-nav ${navClassName}`} id="site-nav" aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map((l) => (
              <li key={l.page}>
                <Link
                  href={l.href}
                  data-page={l.page}
                  className={activePage === l.page ? 'active' : ''}
                  aria-current={activePage === l.page ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link className="btn btn-outline" href="/engage" onClick={closeMenu}>Engage</Link>
          <button
            className={`burger${menuVisible ? ' active' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuVisible}
            aria-controls="site-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
