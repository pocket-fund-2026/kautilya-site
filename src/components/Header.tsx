import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MOBILE_MENU_CLOSE_MS = 220;

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeMenu = () => {
    if (!menuOpen && !menuClosing) return;
    clearCloseTimer();
    setMenuOpen(false);
    setMenuClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
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

  // Close menu on route change
  useEffect(() => {
    clearCloseTimer();
    setMenuClosing(false);
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen || menuClosing ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, menuClosing]);

  const navMap: Record<string, string> = {
    '/approach': 'approach',
    '/portfolio': 'portfolio',
    '/stories': 'stories',
    '/story-borderless': 'stories',
    '/story-dino-games': 'stories',
    '/story-runify': 'stories',
    '/story-edition-zero': 'stories',
    '/team': 'team',
  };

  const activePage = navMap[path] || '';
  const menuVisible = menuOpen || menuClosing;
  const navClassName = menuOpen ? 'open' : menuClosing ? 'closing' : '';

  return (
    <header className={`header${menuVisible ? ' menu-open' : ''}`} id="mainHeader">
      <Link className="logo" to="/">Kautilya</Link>

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
        <Link to="/approach" data-page="approach" className={activePage === 'approach' ? 'active' : ''} onClick={closeMenu}>Approach</Link>
        <Link to="/portfolio" data-page="portfolio" className={activePage === 'portfolio' ? 'active' : ''} onClick={closeMenu}>Portfolio</Link>
        <Link to="/stories" data-page="stories" className={activePage === 'stories' ? 'active' : ''} onClick={closeMenu}>Stories</Link>
        <Link to="/team" data-page="team" className={activePage === 'team' ? 'active' : ''} onClick={closeMenu}>Team</Link>
        <Link className="cta-btn-mobile" to="/engage" onClick={closeMenu}>Engage</Link>
      </nav>

      <Link className="cta-btn" to="/engage">Engage</Link>
    </header>
  );
}
