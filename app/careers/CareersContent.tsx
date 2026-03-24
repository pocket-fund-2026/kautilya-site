'use client';

import { useState, useRef, type ChangeEvent, type FormEvent } from 'react';

const OPEN_ROLES = [
  'Analyst — Deal Sourcing',
  'Operations',
  'Full Stack Developer',
  'Marketing',
  "Founder's Office Intern",
] as const;

const WORK_MODES = ['Remote', 'On Site (Mumbai)'] as const;

const COUNTRY_CODES = [
  { code: '+91', label: 'IN +91', digits: 10 },
  { code: '+1', label: 'US +1' },
  { code: '+44', label: 'UK +44' },
  { code: '+971', label: 'AE +971' },
  { code: '+65', label: 'SG +65' },
  { code: '+852', label: 'HK +852' },
  { code: '+61', label: 'AU +61' },
  { code: '+49', label: 'DE +49' },
  { code: '+33', label: 'FR +33' },
  { code: '+81', label: 'JP +81' },
] as const;

type FormData = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  role: string;
  workMode: string;
};

type FormErrors = Partial<Record<keyof FormData | 'cv', string>>;

export default function CareersContent() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    role: '',
    workMode: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const applyRef = useRef<HTMLDivElement>(null);

  const validateForm = (data: FormData, cv: File | null): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    } else if (data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!data.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else {
      const digits = data.phone.replace(/\D/g, '');
      const countryEntry = COUNTRY_CODES.find((c) => c.code === data.countryCode);
      if (countryEntry && 'digits' in countryEntry && digits.length !== countryEntry.digits) {
        nextErrors.phone = `Phone number must be ${countryEntry.digits} digits for ${data.countryCode}.`;
      } else if (digits.length < 7) {
        nextErrors.phone = 'Please enter a valid phone number.';
      }
    }

    if (!data.role) {
      nextErrors.role = 'Please select a role.';
    }

    if (!data.workMode) {
      nextErrors.workMode = 'Please select a work preference.';
    }

    if (!cv) {
      nextErrors.cv = 'Please attach your CV.';
    } else if (cv.size > 5 * 1024 * 1024) {
      nextErrors.cv = 'File must be under 5 MB.';
    }

    return nextErrors;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitState !== 'idle') {
      setSubmitState('idle');
      setSubmitMessage('');
    }

    setErrors((prev) => {
      if (!prev[name as keyof FormErrors]) return prev;
      const updated = { ...formData, [name]: value };
      const fieldError = validateForm(updated, cvFile)[name as keyof FormData];
      return { ...prev, [name]: fieldError };
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCvFile(file);
    if (submitState !== 'idle') {
      setSubmitState('idle');
      setSubmitMessage('');
    }
    setErrors((prev) => {
      if (!prev.cv) return prev;
      const cvError = validateForm(formData, file).cv;
      return { ...prev, cv: cvError };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nextErrors = validateForm(formData, cvFile);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitState('idle');
    setSubmitMessage('');

    try {
      const body = new FormData();
      body.append('fullName', formData.fullName);
      body.append('email', formData.email);
      body.append('phone', `${formData.countryCode} ${formData.phone}`);
      body.append('role', formData.role);
      body.append('workMode', formData.workMode);
      if (cvFile) {
        body.append('cv', cvFile);
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Submission failed');
      }

      setSubmitState('success');
      setSubmitMessage('Thank you. Your application has been received.');
      setFormData({ fullName: '', email: '', countryCode: '+91', phone: '', role: '', workMode: '' });
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch {
      setSubmitState('error');
      setSubmitMessage('Could not send right now. Please try again or email careers@kautilya.co.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRoleClick = (role: string) => {
    setFormData((prev) => ({ ...prev, role }));
    setErrors((prev) => ({ ...prev, role: undefined }));
    applyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page">
      <div className="page-hero">
        <div className="section-eyebrow">Careers</div>
        <h1 className="section-title">Build With Us</h1>
        <p className="careers-statement">
          Kautilya is a small team that operates with disproportionate intensity. We think systematically about markets, value
          precision over volume, and believe that the best deal sourcing is an intellectual discipline — not a numbers game.
        </p>
      </div>
      <div className="content-section">
        <div className="roles-section">
          <div className="section-eyebrow">Open Roles</div>
          <div className="role-card reveal" onClick={() => handleRoleClick('Analyst — Deal Sourcing')}>
            <div>
              <div className="role-title">Analyst</div>
              <div className="role-detail">
                Research, outreach execution, and target qualification across active mandates.
              </div>
              <div className="role-tags">
                <span className="role-tag">Full-Time</span>
                <span className="role-tag">Remote / Hybrid</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card reveal" style={{ transitionDelay: '.1s' }} onClick={() => handleRoleClick('Operations')}>
            <div>
              <div className="role-title">Operations</div>
              <div className="role-detail">
                End-to-end coordination of mandates, client delivery, and internal workflows that keep the firm running at speed.
              </div>
              <div className="role-tags">
                <span className="role-tag">Full-Time</span>
                <span className="role-tag">Remote / Hybrid</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card reveal" style={{ transitionDelay: '.2s' }} onClick={() => handleRoleClick('Full Stack Developer')}>
            <div>
              <div className="role-title">Full Stack Developer</div>
              <div className="role-detail">
                Build and maintain Kautilya's web platform, internal tools, and data infrastructure from front to back.
              </div>
              <div className="role-tags">
                <span className="role-tag">Full-Time</span>
                <span className="role-tag">On Site / Hybrid</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card reveal" style={{ transitionDelay: '.3s' }} onClick={() => handleRoleClick('Marketing')}>
            <div>
              <div className="role-title">Marketing</div>
              <div className="role-detail">
                Own Kautilya's brand presence, content strategy, and distribution across social, email, and publishing channels.
              </div>
              <div className="role-tags">
                <span className="role-tag">Full-Time</span>
                <span className="role-tag">On Site / Hybrid</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
          <div className="role-card reveal" style={{ transitionDelay: '.4s' }} onClick={() => handleRoleClick("Founder's Office Intern")}>
            <div>
              <div className="role-title">Founder&apos;s Office Intern</div>
              <div className="role-detail">
                Work directly with the founder across deal sourcing, strategy, and operations — a crash course in building an advisory firm.
              </div>
              <div className="role-tags">
                <span className="role-tag">Internship</span>
                <span className="role-tag">Remote / On Site / Hybrid</span>
              </div>
            </div>
            <div className="role-arrow">→</div>
          </div>
        </div>

        {/* APPLICATION FORM */}
        <div ref={applyRef} className="careers-apply reveal">
          <div className="section-eyebrow">Apply</div>
          <h2 className="section-title">Submit Your Application</h2>
          <p className="section-body">Fill in the details below and attach your CV. We'll be in touch.</p>
          <form className="engage-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'careers-name-error' : undefined}
                  className={errors.fullName ? 'form-input-error' : undefined}
                />
                {errors.fullName && <p id="careers-name-error" className="form-error">{errors.fullName}</p>}
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
                  aria-describedby={errors.email ? 'careers-email-error' : undefined}
                  className={errors.email ? 'form-input-error' : undefined}
                />
                {errors.email && <p id="careers-email-error" className="form-error">{errors.email}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <div className="phone-input-row">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="phone-code-select"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'careers-phone-error' : undefined}
                    className={errors.phone ? 'form-input-error' : undefined}
                  />
                </div>
                {errors.phone && <p id="careers-phone-error" className="form-error">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Applying For</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.role)}
                  aria-describedby={errors.role ? 'careers-role-error' : undefined}
                  className={errors.role ? 'form-input-error' : undefined}
                >
                  <option value="" disabled>Select a role</option>
                  {OPEN_ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                {errors.role && <p id="careers-role-error" className="form-error">{errors.role}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Work Preference</label>
                <select
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.workMode)}
                  aria-describedby={errors.workMode ? 'careers-workmode-error' : undefined}
                  className={errors.workMode ? 'form-input-error' : undefined}
                >
                  <option value="" disabled>Remote or On Site (Mumbai)</option>
                  {WORK_MODES.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                {errors.workMode && <p id="careers-workmode-error" className="form-error">{errors.workMode}</p>}
              </div>
              <div className="form-group">
                <label className="form-label">Attach CV</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  aria-invalid={Boolean(errors.cv)}
                  aria-describedby={errors.cv ? 'careers-cv-error' : undefined}
                  className={errors.cv ? 'form-input-error' : undefined}
                />
                {errors.cv && <p id="careers-cv-error" className="form-error">{errors.cv}</p>}
              </div>
            </div>

            <button className="engage-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Application'}
            </button>
            {submitState === 'success' && <p className="form-success">{submitMessage}</p>}
            {submitState === 'error' && <p className="form-error form-error--submit">{submitMessage}</p>}
          </form>
        </div>

        {/* CULTURE */}
        <div className="culture-block reveal">
          <div className="section-eyebrow">What It's Like</div>
          <h2 className="section-title">Working at Kautilya</h2>
          <div className="culture-grid">
            <div className="culture-item">
              <div className="culture-title">Ownership from Day One</div>
              <div className="culture-desc">
                There are no junior tasks. Every person on the team touches live mandates, speaks with buyers, and shapes
                sourcing strategy. You'll have more responsibility here in month one than most people get in year two
                elsewhere.
              </div>
            </div>
            <div className="culture-item">
              <div className="culture-title">Intellectual Rigor</div>
              <div className="culture-desc">
                We treat deal sourcing as a discipline, not a grind. That means building frameworks, questioning assumptions,
                and continuously refining how we identify and evaluate opportunities.
              </div>
            </div>
            <div className="culture-item">
              <div className="culture-title">Small Team, Large Impact</div>
              <div className="culture-desc">
                We're intentionally small. That means every person matters, every contribution is visible, and the feedback
                loop between effort and outcome is tight.
              </div>
            </div>
            <div className="culture-item">
              <div className="culture-title">Builder's Mentality</div>
              <div className="culture-desc">
                Kautilya is being built. If you want to join a finished institution, this isn't it. If you want to help build
                one — with your fingerprints on the methodology, the brand, and the culture — this is the place.
              </div>
            </div>
          </div>
        </div>

        {/* OPEN INVITE */}
        <div className="open-invite reveal">
          <h2 className="section-title">Don't see your role?</h2>
          <p className="section-body">
            We're always interested in exceptional people who think systematically about markets and acquisitions.
          </p>
          <a href="mailto:dev@pocket-fund.com">dev@pocket-fund.com →</a>
        </div>
      </div>
    </div>
  );
}
