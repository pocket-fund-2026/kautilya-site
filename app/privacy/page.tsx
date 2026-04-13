import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Kautilya collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://www.kautilya-pe.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="section-eyebrow">Legal</div>
        <h1 className="section-title">Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>Last updated: March 2026</p>
      </div>
      <div className="content-section legal-content" style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2>1. Information We Collect</h2>
        <p>We collect information you voluntarily provide through our website forms:</p>
        <ul>
          <li><strong>Engage form:</strong> Name, firm, email, phone number, and acquisition criteria.</li>
          <li><strong>Careers form:</strong> Name, email, phone number, role preference, work mode, and CV attachment.</li>
        </ul>
        <p>
          We also collect standard analytics data (page views, device type, browser) through Vercel Analytics
          to understand website usage patterns.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>Your information is used solely for the following purposes:</p>
        <ul>
          <li>To respond to your engagement inquiries and evaluate acquisition theses.</li>
          <li>To process career applications.</li>
          <li>To improve our website and services.</li>
          <li>To communicate with you about your inquiry or application.</li>
        </ul>

        <h2>3. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information
          with service providers who assist in operating our website (e.g., email delivery, analytics), subject
          to confidentiality obligations.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information, including encrypted
          email transmission (TLS/SSL) and secure hosting infrastructure. However, no method of electronic
          transmission is 100% secure.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes for which
          it was collected, or as required by law. Career applications are retained for 12 months unless
          otherwise requested.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Withdraw consent for data processing at any time.</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>
          Our website uses essential cookies for functionality and analytics cookies (via Vercel Analytics)
          to understand usage patterns. These do not track you across other websites and do not collect
          personally identifiable information.
        </p>

        <h2>8. Third-Party Services</h2>
        <p>
          We use the following third-party services: Vercel (hosting and analytics), Google Calendar
          (appointment scheduling), and Gmail (email delivery). Each operates under its own privacy policy.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with
          an updated revision date.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related inquiries or to exercise your rights, contact us at{' '}
          <a href="mailto:contact@kautilya-pe.com" style={{ color: 'var(--gold)' }}>contact@kautilya-pe.com</a>.
        </p>
      </div>
    </div>
  );
}
