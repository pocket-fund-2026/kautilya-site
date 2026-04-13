import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions governing the use of Kautilya\'s website and advisory services.',
  alternates: { canonical: 'https://www.kautilya-pe.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="section-eyebrow">Legal</div>
        <h1 className="section-title">Terms and Conditions</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Last updated: March 2026</p>
      </div>
      <div className="content-section legal-content" style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Kautilya website (kautilya-pe.com), you accept and agree to be bound by these
          Terms and Conditions. If you do not agree to these terms, please do not use our website.
        </p>

        <h2>2. Services</h2>
        <p>
          Kautilya provides buy-side advisory and deal sourcing services. All content on this website is for
          informational purposes only and does not constitute an offer to sell securities, an investment recommendation,
          or legal advice. Engagements are governed solely by executed agreements between Kautilya and the client.
        </p>

        <h2>3. No Broker-Dealer or Investment Adviser</h2>
        <p>
          Kautilya is not a registered broker-dealer, investment adviser, or law firm. Nothing on this website should
          be construed as financial, legal, or investment advice. Users should consult qualified professionals before
          making investment decisions.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, including text, graphics, logos, images, case studies, and software on this website, is the
          property of Kautilya and is protected by applicable intellectual property laws. You may not reproduce,
          distribute, or create derivative works without written permission.
        </p>

        <h2>5. User Submissions</h2>
        <p>
          When you submit information through our forms (Engage, Careers), you grant Kautilya the right to use that
          information for the purpose of evaluating your inquiry or application. We will handle your data in accordance
          with our Privacy Policy.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          This website is provided "as is" without warranties of any kind, express or implied. Kautilya does not
          warrant that the website will be uninterrupted, error-free, or free of harmful components. All content may
          not be complete or up-to-date.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Kautilya shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
          arising from your use of this website or reliance on information provided herein.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites. Kautilya is not responsible for the content,
          privacy practices, or availability of these external sites.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes arising from these terms shall be subject
          to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          Kautilya reserves the right to modify these terms at any time. Continued use of the website after changes
          constitutes acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:contact@kautilya-pe.com" style={{ color: 'var(--gold)' }}>contact@kautilya-pe.com</a>.
        </p>
      </div>
    </div>
  );
}
