import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  const navMap: Record<string, string> = {
    '/': 'approach',
    '/portfolio': 'portfolio',
    '/media': 'stories',
    '/story-borderless': 'stories',
    '/team': 'team',
    '/careers': 'approach',
    '/engage': 'approach',
  };

  const activePage = navMap[path] || '';

  return (
    <header className="header" id="mainHeader">
      <Link className="logo" to="/">Kautilya</Link>
      <nav>
        <a href="#" data-page="approach" className={activePage === 'approach' ? 'active' : ''}>Approach</a>
        <Link to="/portfolio" data-page="portfolio" className={activePage === 'portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/media" data-page="stories" className={activePage === 'stories' ? 'active' : ''}>Stories</Link>
        <Link to="/team" data-page="team" className={activePage === 'team' ? 'active' : ''}>Team</Link>
      </nav>
      <Link className="cta-btn" to="/engage">Engage</Link>
    </header>
  );
}
