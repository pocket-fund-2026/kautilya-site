import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';

const MIN_NAME_LENGTH = 2;
const MIN_CRITERIA_LENGTH = 15;

type FormData = {
  name: string;
  firm: string;
  email: string;
  criteria: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function EngagePage() {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    email: '',
    criteria: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    document.title = 'Kautilya — Engage';
  }, []);

  const validateForm = (data: FormData): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = data.name.trim();
    const trimmedEmail = data.email.trim();
    const trimmedCriteria = data.criteria.trim();

    if (!trimmedName) {
      nextErrors.name = 'Please enter your name.';
    } else if (trimmedName.length < MIN_NAME_LENGTH) {
      nextErrors.name = `Name must be at least ${MIN_NAME_LENGTH} characters.`;
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!trimmedCriteria) {
      nextErrors.criteria = 'Please describe your acquisition criteria.';
    } else if (trimmedCriteria.length < MIN_CRITERIA_LENGTH) {
      nextErrors.criteria = `Acquisition criteria must be at least ${MIN_CRITERIA_LENGTH} characters.`;
    }

    return nextErrors;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitState !== 'idle') {
      setSubmitState('idle');
      setSubmitMessage('');
    }

    setErrors((prev) => {
      if (!prev[name as keyof FormErrors]) return prev;
      const updatedData = { ...formData, [name]: value };
      const fieldError = validateForm(updatedData as FormData)[name as keyof FormData];
      return { ...prev, [name]: fieldError };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitState('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@pocket-fund.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Acquisition Thesis Inquiry - ${formData.name}`,
          name: formData.name,
          firm: formData.firm || 'N/A',
          email: formData.email,
          acquisition_criteria: formData.criteria,
          source: 'Kautilya Engage Page',
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitState('success');
      setSubmitMessage('Thank you. Your inquiry has been sent successfully.');
      setFormData({ name: '', firm: '', email: '', criteria: '' });
    } catch {
      setSubmitState('error');
      setSubmitMessage('Could not send right now. Please try again or email hello@pocket-fund.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <div className="engage-page">
        <div className="engage-container engage-container--wide">
          <div className="engage-intake">
            <div className="section-eyebrow">Engage</div>
            <h1 className="section-title">Have an acquisition thesis?</h1>
            <p className="section-body">Tell us what you're looking for. We'll tell you how we'd find it.</p>
            <form className="engage-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'engage-name-error' : undefined}
                    className={errors.name ? 'form-input-error' : undefined}
                  />
                  {errors.name && <p id="engage-name-error" className="form-error">{errors.name}</p>}
                </div>
                <div className="form-group">
                  <label className="form-label">Firm</label>
                  <input
                    type="text"
                    name="firm"
                    placeholder="Your firm"
                    value={formData.firm}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'engage-email-error' : undefined}
                  className={errors.email ? 'form-input-error' : undefined}
                />
                {errors.email && <p id="engage-email-error" className="form-error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Acquisition Criteria</label>
                <textarea
                  name="criteria"
                  placeholder="Describe your thesis, target profile, sector focus, deal size, geography, or any other parameters..."
                  value={formData.criteria}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.criteria)}
                  aria-describedby={errors.criteria ? 'engage-criteria-error' : undefined}
                  className={errors.criteria ? 'form-input-error' : undefined}
                />
                {errors.criteria && <p id="engage-criteria-error" className="form-error">{errors.criteria}</p>}
              </div>
              <button className="engage-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
              {submitState === 'success' && <p className="form-success">{submitMessage}</p>}
              {submitState === 'error' && <p className="form-error form-error--submit">{submitMessage}</p>}
            </form>
            <div className="engage-alt">
              <p>Prefer to reach out directly?</p>
              <a href="mailto:hello@pocket-fund.com">hello@pocket-fund.com →</a>
            </div>
          </div>

          <div className="engage-booking" aria-labelledby="engage-booking-title">
            <div className="engage-booking-head">
              <div className="section-eyebrow">Alternative</div>
              <h2 id="engage-booking-title" className="section-title">Book a Google Calendar Slot</h2>
              <p className="section-body">
                If you prefer, schedule directly. Choose any available slot and we will connect at that time.
              </p>
            </div>
            <div className="engage-booking-frame-wrap">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3zhT2l7xI252zj_DStrOKOoUqL8k6E3tir5TP6FT0USdQ6Eir4eXaGapArbOPli859MkPy9uUy?gv=true"
                title="Book a call with Kautilya"
                style={{ border: 0 }}
                width="100%"
                height="880"
                frameBorder="0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
