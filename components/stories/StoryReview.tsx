"use client";
import { useCallback } from 'react';
import { useReadingProgressAndShareBar } from '@/components/useReadingProgressAndShareBar';
import Link from 'next/link';

export default function StoryReview() {
  useReadingProgressAndShareBar();

  const shareTwitter = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('2023 Review + 2024 Goals , via @kautilya');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }, []);

  const shareLinkedIn = useCallback(() => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }, []);

  const shareEmail = useCallback(() => {
    const subject = encodeURIComponent('2023 Review + 2024 Goals');
    const body = encodeURIComponent(`Check out this story: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }, []);

  const copyLink = useCallback((btn: HTMLButtonElement) => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      btn.classList.add('copied');
      const tooltip = btn.querySelector('.tooltip');
      if (tooltip) tooltip.textContent = 'Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        if (tooltip) tooltip.textContent = 'Copy link';
      }, 2000);
    });
  }, []);

  return (
    <>
      <div className="reading-progress" id="readingProgress" />

      <div className="share-bar" id="shareBar">
        <button className="share-btn" onClick={shareTwitter} aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="tooltip">Twitter / X</span>
        </button>
        <button className="share-btn" onClick={shareLinkedIn} aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="tooltip">LinkedIn</span>
        </button>
        <button className="share-btn" onClick={(e) => copyLink(e.currentTarget)} aria-label="Copy link">
          <svg viewBox="0 0 24 24">
            <path
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="tooltip">Copy link</span>
        </button>
        <button className="share-btn" onClick={shareEmail} aria-label="Share via email">
          <svg viewBox="0 0 24 24">
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="tooltip">Email</span>
        </button>
      </div>

      <div className="story-hero" id="storyStart">
        <Link href="/stories" className="back-link">&larr; Stories</Link>
        <div className="meta-row">
          <span className="meta-tag sector">Year in Review</span>
          <span className="meta-tag geo">Global</span>
          <span className="meta-tag stage">2023 Review &middot; Jan 2024</span>
        </div>
        <h1>2023 Review + 2024 Goals</h1>
        <div className="subtitle">
          Let me cook.
        </div>
        <div className="story-date">January 16, 2024</div>
        <div className="hero-line" />
      </div>

      <article className="story-body" id="storyBody">

        <p>
          Sorry for the long hiatus &mdash; we will be returning to regular schedule for 2024.
        </p>

        <h2>2023 in a Nutshell</h2>
        <ul className="constraint-list">
          <li>Acquired <span style={{ color: 'var(--gold)' }}>Sourcely</span> for <strong><span style={{ color: 'var(--gold)' }}>$4K</span></strong> and grew it to a <strong><span style={{ color: 'var(--gold)' }}>$150K+ valuation</span></strong> in 5 months</li>
          <li>Launched / acquired a couple other micro startups: <strong>Yomu, Student AI Tools, Galaxy Loot, This Is Bizness, Pocket Fund</strong></li>
          <li>Started building my personal brand in public from scratch and got to interact with some really cool people</li>
          <li>Got a <span style={{ color: 'var(--gold)' }}>VC internship in SF</span> despite having a <strong>2.4 GPA</strong></li>
          <li>Living in SF changed a lot for me. I met interesting people and gained some much needed perspective</li>
          <li>So I&rsquo;m not going back to college next semester</li>
        </ul>
        <p>
          Some rando convinced me to take a break to go all in on my ideas at this school he cooked up
          in SF. Let&rsquo;s see how it goes :)
        </p>

        <div className="pull-quote">
          <p>
            I fell in love with looking at these businesses and knew it was what I wanted to do for
            the rest of my life &mdash; or would lead to it.
          </p>
        </div>

        <h2>The Long Version</h2>
        <p>
          2023 has been interesting. I broke my ankle in the first week. I was in crutches for 3
          months and couldn&rsquo;t do anything. I was going through some personal stuff and was kinda
          sad too. I badly needed something to do sitting in my room the whole day.
        </p>
        <p>
          Then I came across <strong>Acquire.com</strong> and idk what to say but I fell in love
          instantly. I just got to look at cool businesses and I can also buy some of them? For as
          little as <span style={{ color: 'var(--gold)' }}>$5,000</span>? Very soon the favorite part
          of my day became looking at businesses on Acquire. I started posting on X in February.
        </p>
        <p>
          I tanked my GPA and college classes to go all in. I had no idea what I was doing. I got an
          internship at a biotech startup based out of Hawaii that summer. Living in Hawaii was pretty
          fire &mdash; our office was a bio lab on the beach and hours were 7am&ndash;2pm. All I
          really did was look at businesses and be in nature. I got to swim with turtles every week
          and saw lava IRL. I truly fell in love with what I was doing.
        </p>
        <p>
          I bought one of those fun little businesses I was posting about &mdash;{' '}
          <strong><span style={{ color: 'var(--gold)' }}>Sourcely</span></strong> &mdash; in about
          the middle of the summer. As a student AI tool it made sense in a lot of different ways.
          Long story short, I somehow convinced <strong>@elman</strong> (Ph.D. in AI) to acquire the
          business with me and be technical co-founder. After the summer I did a work-study program
          with my college in SF, doing an internship during the week and classes over the weekend. We
          grew Sourcely from{' '}
          <strong><span style={{ color: 'var(--gold)' }}>$500 MRR to $4.5K MRR in 5 months</span></strong>.
        </p>

        <div className="metrics-strip">
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$4K</div>
            <div className="metric-label">Sourcely Acquisition Price</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$150K+</div>
            <div className="metric-label">Valuation in 5 Months</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>$500 &rarr; $4.5K</div>
            <div className="metric-label">MRR Growth</div>
          </div>
          <div className="metric">
            <div className="metric-value" style={{ color: 'var(--gold)' }}>2.4</div>
            <div className="metric-label">GPA That Got a VC Internship</div>
          </div>
        </div>

        <h2>Things I Learnt</h2>

        <h3 style={{ color: 'var(--gold)' }}>1. Power of building in public</h3>
        <p>
          There&rsquo;s really nothing like it. I can&rsquo;t begin to describe the benefits &mdash;
          from idols messaging me to random people on the internet becoming business partners. Just
          put yourself out there please. It&rsquo;s not about the 100s or 1000s of views but those
          few chance meetings that can lead to a lot of luck in your life.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>2. Hustle culture is bs. Be a builder.</h3>
        <p>
          I&rsquo;m lazy af. I do concentrated work on things I love really well and do everything
          with other people &mdash; not greedy &mdash; so that I can do a lot of different things.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>3. Doing things differently is a life hack.</h3>
        <p>
          Uncommon markets and the less-travelled paths usually have more delta and opportunity
          associated with them. Society has well-defined measures for success and happiness. You need
          to find your own measures in order to truly realise them. That can be freedom, money, fame,
          family &mdash; don&rsquo;t let society tell you what will make you happy, go figure it out
          yourself.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>4. Having a preference for uncertainty</h3>
        <p>
          I like not knowing what I&rsquo;m doing or where I&rsquo;ll be in a year. It has helped me
          make a lot of decisions like taking gap semesters or buying a business. I just go where I
          have no idea what will happen.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>5. Think in decades, execute in weeks.</h3>
        <p>
          Most greatly overestimate what you can do in a year and underestimate what can be done in a
          decade.
        </p>

        <h3 style={{ color: 'var(--gold)' }}>6. Don&rsquo;t wait to chase your dreams.</h3>
        <p>Please.</p>

        <h3 style={{ color: 'var(--gold)' }}>7. Everything is a business.</h3>
        <p>You can make money doing anything.</p>

        <h3 style={{ color: 'var(--gold)' }}>8. ANYONE can do what I&rsquo;m doing.</h3>
        <p>
          I&rsquo;m not special or smarter in any way. Find what you love, sacrifice everything to
          do it every week. Build on weekly wins and keep iterating. DMs are open if you need any
          advice &mdash; I really just want to help people.
        </p>

        <h2>Mistakes I Made</h2>
        <p>
          This has been an amazing but pretty difficult year. I&rsquo;ve had to do a shit ton of work,
          make sacrifices in different areas of my life and deal with difficult conversations and
          pressure like nothing I&rsquo;ve experienced before. I enjoyed every second of it.
        </p>
        <ul className="constraint-list">
          <li>I like making mistakes and failing quickly</li>
          <li>Took on too many projects at once</li>
          <li>Messed with establishment unnecessarily &mdash; I could&rsquo;ve easily passed my classes, I just really didn&rsquo;t give a f***. It made my life harder than it needed to be.</li>
          <li>Didn&rsquo;t appreciate my friends enough. I have awesome friends. They help me a lot. I want to help them more.</li>
          <li>Couple of wrong partnerships and deals that led to nothing but wasted time</li>
          <li>I want to spend more time at home and travelling</li>
        </ul>
        <p>
          A year ago I never could&rsquo;ve imagined I&rsquo;d be here. The difference just a year
          can make is crazy. A lot of things have changed &mdash; especially my mindset, view of the
          world, and quite simply what I thought I could do. I&rsquo;m so thankful to everyone that
          loves and supports me every day. I really ain&rsquo;t shit without them.
        </p>

        <h2>2024 Goals</h2>
        <ul className="constraint-list">
          <li>Turn <strong><span style={{ color: 'var(--gold)' }}>$100K into $1 million</span></strong> through acquisitions</li>
          <li>Travel <span style={{ color: 'var(--gold)' }}>3 months</span> of the year &mdash; maybe do Asia solo?</li>
          <li>Spend more time with family and friends. Nothing else really matters.</li>
          <li>Life is about experiences.</li>
          <li>Genuinely help as many people as I can</li>
        </ul>
        <p>
          I&rsquo;m pretty happy if I can be a genuine value add to everyone I interact with. Fuck
          around to find out.
        </p>

        <div className="story-coda">
          <div className="coda-text">
            Honestly I&rsquo;m barely getting started. Time to cook.
          </div>
        </div>
      </article>
    </>
  );
}
