import Link from 'next/link';
import KautilyaLogo from '@/components/KautilyaLogo';

// Footer: white, brown type, teal logo (guidelines 1.9 primary blue-on-white). `data-fluid-light` tells the cursor-trail
// shader that everything from here down is a light background (it draws teal ink instead of light-blue).
export default function Footer() {
  return (
    <footer className="site-footer" data-fluid-light>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand-lock" href="/" aria-label="Kautilya — home">
              <KautilyaLogo variant="horizontal" />
            </Link>
            <p className="tagline">The Architect of the Acquisition</p>
            <span className="deva" lang="sa">कौटिल्य</span>
            <div className="contact">
              <a href="mailto:DealDesk@kautilya.pe">DealDesk@kautilya.pe</a>
              <span>Mumbai, Maharashtra, India</span>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/company/kautilya-pe" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="footer-cols">
            <div>
              <h3>Navigation</h3>
              <ul>
                <li><Link href="/approach">Approach</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/stories">Stories</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/newsletter">Newsletter</Link></li>
                <li><Link href="/team">Team</Link></li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/engage">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li><Link href="/terms">Terms and Conditions</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
              <p className="copyright">
                © 2026 Kautilya<br />
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        <p className="disclaimer">
          Disclaimer: Kautilya provides advisory and consulting services to buyers of middle-market and growth-stage businesses. We are not a registered broker-dealer, investment adviser, or law firm, and nothing on this website constitutes an offer to sell securities or an investment in any fund. All content is for informational purposes only and may not be complete or up-to-date. Engagements are governed solely by executed agreements. Use of this website is at your own risk; Kautilya is not liable for any losses arising from reliance on the information provided.
        </p>
      </div>
    </footer>
  );
}
