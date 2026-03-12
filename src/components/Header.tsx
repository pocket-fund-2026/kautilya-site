import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navMap: Record<string, string> = {
    '/approach': 'approach',
    '/portfolio': 'portfolio',
    '/stories': 'stories',
    '/story-borderless': 'stories',
    '/story-dino-games': 'stories',
    '/story-runify': 'stories',
    '/team': 'team',
  };

  const activePage = navMap[path] || '';

  return (
    <header className={`header${menuOpen ? ' menu-open' : ''}`} id="mainHeader">
      <Link className="logo" to="/">Kautilya</Link>

      <button
        className={`hamburger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/approach" data-page="approach" className={activePage === 'approach' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Approach</Link>
        <Link to="/portfolio" data-page="portfolio" className={activePage === 'portfolio' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/stories" data-page="stories" className={activePage === 'stories' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Stories</Link>
        <Link to="/team" data-page="team" className={activePage === 'team' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Team</Link>
        <Link className="cta-btn-mobile" to="/engage" onClick={() => setMenuOpen(false)}>Engage</Link>
      </nav>

      <Link className="cta-btn" to="/engage">Engage</Link>
    </header>
  );
}
