import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Kautilya</div>
          <div className="footer-tagline">The Architect of the Acquisition</div>
          <div className="footer-tagline-script">कौटिल्य</div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/pocket-fund/?originalSubdomain=in" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://x.com/microsearchfund" aria-label="Twitter/X">X</a>
            <a href="https://www.instagram.com/microsearchfund/" aria-label="Website">Instagram</a>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-column-title">Navigation</div>
            <Link href="/approach">Approach</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/team">Team</Link>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">Company</div>
            <Link href="/faq">FAQ</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/engage">Contact Us</Link>
          </div>
          <div className="footer-column">
            <div className="footer-column-title">Legal</div>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <div className="footer-copyright">
              © 2026 Kautilya<br />
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
