import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Kautilya</div>
          <div className="footer-tagline">The Architect of the Acquisition</div>
          <div className="footer-tagline-script">कौटिल्य</div>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter/X">X</a>
            <a href="#" aria-label="Website">Web</a>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-column-title">Navigation</div>
            <Link to="/approach">Approach</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/team">Team</Link>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">Company</div>
            <Link to="/story-borderless">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/engage">Contact Us</Link>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">Legal</div>
            <a href="https://www.termsfeed.com/live/7e06e006-4620-4566-8122-173ddd5db374" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
            <a href="https://www.termsfeed.com/live/7290f953-1228-4f5a-a862-467780ae8759" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <div className="footer-copyright">
              Copyright © 2026<br />
              All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      <div className="footer-disclaimer">
        Disclaimer: Kautilya provides advisory and consulting services to buyers of middle-market and growth-stage businesses. We are not a registered broker-dealer, investment adviser, or law firm, and nothing on this website constitutes an offer to sell securities or an investment in any fund. All content is for informational purposes only and may not be complete or up-to-date. Engagements are governed solely by executed agreements. Use of this website is at your own risk; Kautilya is not liable for any losses arising from reliance on the information provided.
      </div>
    </footer>
  );
}
