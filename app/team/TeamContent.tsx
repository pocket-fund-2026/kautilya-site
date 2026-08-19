'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const devImage = '/images/Dev.jpeg';
const aumImage = '/images/aum.jpg';
const ganeshImage = '/images/ganesh.jpg';
const manasImage = '/images/manas.jpeg';
const pushkarImage = '/images/pushkar.jpeg';
const aryanImage = '/images/aryan.jpeg';
const kabirImage = '/images/kabir.jpg';
const adityaImage = '/images/aditya.jpeg';

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  initials: string;
  image?: string;
  linkedin?: string;
};

// ---- Team Data (9 Members for a 3x3 Grid) ----
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dev Shah',
    role: 'Founder',
    desc: 'A 24-year-old micro PE operator who has personally acquired and exited multiple businesses. Leads every Kautilya engagement, from mandate definition through sourcing, diligence, and post-acquisition growth.',
    initials: 'DS',
    image: devImage,
    linkedin: 'https://www.linkedin.com/in/devlikesbizness/',
  },
  {
    name: 'Aum Thakarkar',
    role: 'Chief Analyst',
    desc: 'Leads research and analysis across the firm, delivers high-conviction insights on markets and opportunities, and guides data-driven investment decisions.',
    initials: 'AT',
    image: aumImage,
    linkedin: 'https://www.linkedin.com/in/aumthakarkar/',
  },
  {
    name: 'Ganesh Jagtap',
    role: 'Tech Head',
    desc: 'Drives the technology vision, builds scalable systems, and ensures secure, efficient platforms that power our products and operations.',
    initials: 'GJ',
    image: ganeshImage,
  },
    {
    name: 'Manas Kogta',
    role: 'AI Consultant',
    desc: 'Brings AI expertise to the firm, designing intelligent workflows and applying AI to accelerate diligence, and unlock data-driven edges across mandates.',
    initials: 'M',
    image: manasImage,
    linkedin: 'https://www.linkedin.com/in/manaskogta/',
  },
  {
    name: 'Pushkar Rathod',
    role: 'Analyst',
    desc: 'Specializes in structuring complex cross-border buyouts and leading late-stage negotiations.',
    initials: 'PR',
    image: pushkarImage,
    linkedin: 'https://www.linkedin.com/in/pushkarrathod12/',
  },
  {
    name: 'Aryan Solanki',
    role: 'Marketing Head',
    desc: 'Drives brand, content, and growth strategy for Kautilya across social, newsletter, and outbound channels.',
    initials: 'AS',
    image: aryanImage,
    linkedin: 'https://www.linkedin.com/in/aryan-solanki-a15b4b246/',
  },
  {
    name: 'Kabir Dhumale',
    role: 'Business Associate',
    desc: 'Works closely with leadership on high-impact projects, strategic initiatives, partnerships, and day-to-day execution across the firm.',
    initials: 'KD',
    image: kabirImage,
    linkedin: 'https://www.linkedin.com/in/kabir-dhumale/',
  },
  {
    name: 'Aditya Negi',
    role: 'Full Stack Developer',
    desc: 'Provides timely technical assistance, resolves issues, and ensures smooth day-to-day use of our systems for clients and internal teams.',
    initials: 'AN',
    image: adityaImage,
    linkedin: 'https://www.linkedin.com/in/aditya-negi-9a12a2223/',
  },
];

// ---- LinkedIn Icon ----
const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ---- Glare Hover Card Component ----
const GlareAvatar = ({ name, initials, desc, image }: { name: string; initials: string; desc: string; image?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});
  const [tapped, setTapped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      '--glare-x': `${x}px`,
      '--glare-y': `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  const handleClick = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setTapped((prev) => !prev);
    }
  };

  return (
    <div
      className={`glare-card${tapped ? ' tapped' : ''}`}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={style as React.CSSProperties}
    >
      <div className="glare-card-inner">
        {image ? (
          <img src={image} alt={name} className="avatar-image" loading="lazy" />
        ) : (
          <span className="avatar-placeholder">{initials}</span>
        )}

        {/* Description overlay revealed on hover */}
        <div className="glare-card-desc">
          <p>{desc}</p>
        </div>
      </div>

      {/* The Glare Gradient Layer */}
      <div className="glare-card-shine" />
    </div>
  );
};

export default function TeamContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMembers, setShowAllMembers] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const syncMobileState = () => {
      const mobile = mediaQuery.matches;
      setIsMobile(mobile);
      if (!mobile) {
        setShowAllMembers(true);
      }
    };

    syncMobileState();
    mediaQuery.addEventListener('change', syncMobileState);

    return () => {
      mediaQuery.removeEventListener('change', syncMobileState);
    };
  }, []);

  const firstThreeMembers = TEAM_MEMBERS.slice(0, 3);
  const visibleMembers = isMobile && !showAllMembers ? firstThreeMembers : TEAM_MEMBERS;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Adjusting page hero for Ethos section */
        .page-hero {
          text-align: center;
          padding: 80px 48px 80px;
        }

        .page-hero .section-body {
          margin: 0 auto 60px;
          max-width: 700px;
        }

        .values-row {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .value-item {
          text-align: center;
          flex: 1;
          min-width: 140px;
        }

        .value-word {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 24px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .value-desc {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 8px;
          font-style: italic;
        }

        /* Counsel Grid Setup */
        .counsel-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .team-grid-3x3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .team-member-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* --- Glare Card CSS --- */
        .glare-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 24px;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--canvas-light), var(--canvas-lighter));
          border: 1px solid var(--border);
          overflow: hidden;
          cursor: crosshair;
          transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
          will-change: transform;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          contain: layout size;
        }

        .glare-card-inner {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .avatar-placeholder {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 48px;
          font-weight: 300;
          color: var(--text-faint);
          transition: opacity 0.3s ease;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: opacity 0.3s ease, transform 0.35s ease;
          transform: scale(1.01);
        }

        .glare-card:hover .avatar-placeholder {
          opacity: 0.1; /* Dim initials when description shows */
        }

        .glare-card:hover .avatar-image {
          opacity: 0.15;
          transform: scale(1.04);
        }

        .glare-card-desc {
          position: absolute;
          inset: 0;
          background: rgba(59, 54, 64, 0.92); /* Matches canvas */
          padding: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .glare-card-desc p {
          font-family: var(--font-lora), 'Lora', serif;
          font-size: 14px;
          color: var(--text-primary);
          line-height: 1.7;
          margin: 0;
          transform: translateY(10px);
          transition: transform 0.35s ease;
        }

        .glare-card:hover .glare-card-desc {
          opacity: 1;
        }

        .glare-card:hover .glare-card-desc p {
          transform: translateY(0);
        }

        /* Interactive Shine Layer */
        .glare-card-shine {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          mix-blend-mode: soft-light;
          background: radial-gradient(
            circle at var(--glare-x, 50%) var(--glare-y, 50%),
            rgba(255, 255, 255, 0.5) 0%,
            transparent 60%
          );
        }

        .glare-card:hover .glare-card-shine {
          opacity: 1;
        }

        /* Mobile: use tap toggle instead of hover, disable 3D tilt */
        @media (hover: none) {
          .glare-card {
            cursor: pointer;
            transform: none !important;
          }

          .glare-card .glare-card-desc {
            transition: opacity 0.25s ease;
          }

          .glare-card.tapped .glare-card-desc {
            opacity: 1;
          }

          .glare-card.tapped .glare-card-desc p {
            transform: translateY(0);
          }

          .glare-card.tapped .avatar-image {
            opacity: 0.15;
            transform: scale(1.04);
          }

          .glare-card.tapped .avatar-placeholder {
            opacity: 0.1;
          }

          .glare-card-shine {
            display: none;
          }
        }

        /* Typography below the card */
        .member-name {
          font-family: var(--font-fraunces), 'Fraunces', serif;
          font-size: 24px;
          font-weight: 500;
          color: var(--text-primary);
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .member-role {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
        }

        .member-linkedin {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .member-linkedin:hover {
          color: var(--gold);
        }

        .member-linkedin svg {
          display: block;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .team-grid-3x3 { grid-template-columns: 1fr 1fr; gap: 32px; }

          .team-view-all-wrap {
            display: flex;
            justify-content: center;
            margin-top: 50px;
            margin-bottom: 8px;
          }

          .team-view-all-btn {
            font-family: var(--font-lora), 'Lora', serif;
            font-size: 10px;
            letter-spacing: 2.8px;
            text-transform: uppercase;
            background: transparent;
            color: var(--header-footer-accent);
            border: 1px solid var(--header-footer-accent-dim);
            padding: 12px 24px;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .team-view-all-btn:hover {
            background: var(--header-footer-accent);
            color: var(--canvas);
          }

        }
        @media (max-width: 480px) {
          .team-grid-3x3 { grid-template-columns: 1fr; gap: 40px; }
          .glare-card { width: 80%; margin: 0 auto 20px; }

          .team-view-all-wrap {
            margin-top: 18px;
          }

          .team-view-all-btn {
            width: 80%;
            max-width: 320px;
            padding: 12px 18px;
          }
        }
      `}} />

      <div className="page">
        {/* TOP SECTION: ETHOS / HOW WE OPERATE */}
        <div className="page-hero">
          <div className="section-eyebrow">Ethos</div>
          <h1 className="section-title">How We Operate</h1>
          <p className="section-body">
            Kautilya runs on precision, not volume. Every search is conducted with the rigor of a research mandate and the
            urgency of a live transaction. We are small by design.
          </p>

          <div className="values-row reveal">
            <div className="value-item">
              <div className="value-word">Rigor</div>
              <div className="value-desc">Systematic, never haphazard</div>
            </div>
            <div className="value-item">
              <div className="value-word">Discretion</div>
              <div className="value-desc">Confidential by default</div>
            </div>
            <div className="value-item">
              <div className="value-word">Conviction</div>
              <div className="value-desc">Thesis-driven, always</div>
            </div>
            <div className="value-item">
              <div className="value-word">Velocity</div>
              <div className="value-desc">Speed without compromise</div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: THE COUNSEL / TEAM GRID */}
        <div className="content-section" style={{ paddingTop: '40px' }}>
          <div className="counsel-header reveal">
            <div className="section-eyebrow">The Counsel</div>
            <h2 className="section-title">The People Behind the Mandate</h2>
            <p className="section-body" style={{ margin: '0 auto' }}>
              A focused team, not a headcount. Every engagement is led by senior practitioners who've built pipelines across
              sectors and deal types.
            </p>
          </div>

          <div className="team-grid-3x3">
            {visibleMembers.map((member, index) => (
              <div
                className="team-member-block"
                key={member.name}
                style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
              >
                <GlareAvatar name={member.name} initials={member.initials} desc={member.desc} image={member.image} />
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
                {member.linkedin && (
                  <a
                    className="member-linkedin"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {isMobile && !showAllMembers && (
            <div className="team-view-all-wrap">
              <button
                className="team-view-all-btn"
                onClick={() => setShowAllMembers(true)}
                type="button"
              >
                View all members
              </button>
            </div>
          )}

          {/* OPEN INVITE SECTION */}
          <div className="open-invite reveal" style={{ marginTop: '100px' }}>
            <h2 className="section-title" style={{ fontSize: '28px' }}>Careers with Kautilya</h2>
            <p className="section-body" style={{ marginBottom: '30px' }}>
              Interested in joining us? We're always looking for exceptional talent who think systematically about markets.
            </p>
            <Link href="/careers">View Open Roles →</Link>
          </div>

        </div>
      </div>
    </>
  );
}
