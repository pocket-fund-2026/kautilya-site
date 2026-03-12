import { useEffect, type FormEvent } from 'react';

export default function EngagePage() {
  useEffect(() => {
    document.title = 'Kautilya — Engage';
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    alert('Thank you for your interest. We will be in touch.');
  };

  return (
    <div className="page">
      <div className="engage-page">
        <div className="engage-container">
          <div className="section-eyebrow">Engage</div>
          <h1 className="section-title">Have an acquisition thesis?</h1>
          <p className="section-body">Tell us what you're looking for. We'll tell you how we'd find it.</p>
          <form className="engage-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label className="form-label">Firm</label>
                <input type="text" placeholder="Your firm" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Acquisition Criteria</label>
              <textarea placeholder="Describe your thesis, target profile, sector focus, deal size, geography, or any other parameters..." />
            </div>
            <button className="engage-submit" type="submit">Submit</button>
          </form>
          <div className="engage-alt">
            <p>Prefer to reach out directly?</p>
            <a href="mailto:engage@kautilya.co">engage@kautilya.co →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
