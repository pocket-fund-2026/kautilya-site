const WWW = 'https://www.kautilya-pe.com';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const IMAGE_MAP: Array<{
  pageUrl: string;
  images: Array<{ src: string; title: string; caption: string }>;
}> = [
  {
    pageUrl: `${WWW}/`,
    images: [
      { src: '/opengraph-image', title: 'Kautilya | Buy-Side M&A Advisory', caption: 'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers.' },
      { src: '/icon.svg', title: 'Kautilya Logo', caption: 'Official logo of Kautilya, buy-side M&A advisory firm based in Mumbai, India.' },
    ],
  },
  {
    pageUrl: `${WWW}/portfolio`,
    images: [
      { src: '/images/portfolio-logos/inspire3.png', title: 'Inspire3 — $1.8M Digital Wellness Portfolio', caption: 'Full forensic due diligence on a $1.8M digital wellness portfolio — 30,134 transactions audited across 19 websites in under 15 days.' },
      { src: '/images/portfolio-logos/borderless.png', title: 'Borderless — UK Immigration Advisory', caption: 'Kautilya built a proprietary deal pipeline in the UK immigration advisory market where almost no businesses are formally listed for sale.' },
      { src: '/images/portfolio-logos/dino-games.jpeg', title: 'Dino Games — $39K Mobile Game Acquisition', caption: 'Off-market acquisition of a cash-flow-positive mobile game with 8 million installs. Closed in 8 weeks.' },
      { src: '/images/portfolio-logos/runify.png', title: 'Runify — $110K Mobile App Acquisition', caption: 'Mobile app acquisition structured with only $20K deployed at close. Remaining $90K tied to verified performance milestones.' },
    ],
  },
  {
    pageUrl: `${WWW}/team`,
    images: [
      { src: '/images/aum.jpg', title: 'Aum Thakarkar — Chief Analyst, Kautilya', caption: 'Aum Thakarkar leads research and analysis across the firm, delivering high-conviction insights on markets and acquisition opportunities.' },
      { src: '/images/aditya.jpeg', title: 'Aditya Negi — Tech Support, Kautilya', caption: 'Aditya Negi provides technical assistance and ensures smooth operation of systems for clients and internal teams at Kautilya.' },
      { src: '/images/darshana.jpg', title: 'Darshana Yadav — Analyst, Kautilya', caption: 'Darshana Yadav supports deal origination with comprehensive sector screening and data aggregation.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories`,
    images: [
      { src: '/images/blogs/edition-200k.jpeg', title: 'How We Closed $200K Worth of Deals in 6 Months', caption: 'Five advisory deals, an eleven-person team, and the shift from buying to advising.' },
      { src: '/images/blogs/edition-acquire.jpeg', title: 'My Morning Routine Is Looking at Acquire.com for 30 Minutes', caption: 'Five practical strategies for filtering quality deals from marketplace noise.' },
      { src: '/images/blogs/edition-college.jpeg', title: '10 Reasons Why Now Is the Best Time to Start a Business in College', caption: 'Reduced startup costs, AI tools, and a generation-wide shift toward entrepreneurship.' },
      { src: '/images/blogs/edition-thisisbiz.jpeg', title: 'How to Find Diamonds in the Rough', caption: 'The best acquisitions are businesses that previous owners failed to monetize.' },
      { src: '/images/blogs/edition-zero.jpeg', title: 'Edition Zero: How This Is Bizness Began', caption: 'The origin story of a weekly newsletter built around buying small businesses.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/borderless`,
    images: [
      { src: '/images/portfolio-logos/borderless.png', title: 'Borderless — UK Immigration M&A', caption: 'Deal advisory in UK immigration advisory sector.' },
      { src: '/images/stories/borderless/exhausting-market.png', title: 'UK Immigration Advisory Market Analysis', caption: 'Market mapping showing the exhausting search for acquisition targets in UK immigration advisory.' },
      { src: '/images/stories/borderless/maket-no-deals.png', title: 'UK Immigration Market — No Deals Available', caption: 'Analysis showing the lack of formally listed businesses in UK immigration advisory.' },
      { src: '/images/stories/borderless/money-annualised.png', title: 'Annualised Revenue Pipeline — Borderless', caption: 'Annualised revenue pipeline generated through Kautilya\'s proprietary outreach in UK immigration advisory.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/200k-deals`,
    images: [
      { src: '/images/blogs/edition-200k.jpeg', title: 'Closing $200K in Deals', caption: 'How Kautilya closed $200K worth of advisory deals in 6 months.' },
      { src: '/images/stories/200k/architecture.png', title: 'Deal Architecture — $200K Portfolio', caption: 'Architecture of five advisory deals closed in six months.' },
      { src: '/images/stories/200k/five-deals.png', title: 'Five Advisory Deals — Kautilya', caption: 'Summary of five deals closed by Kautilya\'s advisory practice.' },
      { src: '/images/stories/200k/hidden-channel.png', title: 'Hidden Deal Sourcing Channels', caption: 'Off-market channels used to source advisory deals.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/deal-sourcing`,
    images: [
      { src: '/images/blogs/edition-acquire.jpeg', title: 'Deal Sourcing on Acquire.com', caption: 'Five practical strategies for filtering quality deals from marketplace noise.' },
      { src: '/images/stories/deal-sourcing/crm.png', title: 'Deal Sourcing CRM', caption: 'CRM setup for tracking acquisition targets and outreach.' },
      { src: '/images/stories/deal-sourcing/discipline.png', title: 'Deal Sourcing Discipline', caption: 'The systematic approach to daily deal review and outreach.' },
      { src: '/images/stories/deal-sourcing/morning.png', title: 'Morning Deal Review Routine', caption: 'Daily routine for reviewing deals on Acquire.com.' },
      { src: '/images/stories/deal-sourcing/thousand.png', title: 'Reviewing 1000 Deals', caption: 'What reviewing 1,000+ deals teaches you about quality filtering.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/diamonds`,
    images: [
      { src: '/images/blogs/edition-thisisbiz.jpeg', title: 'Finding Diamonds in the Rough', caption: 'The best acquisitions are businesses previous owners failed to monetize.' },
      { src: '/images/stories/diamonds/uncut.png', title: 'Uncut Diamond — Hidden Business Value', caption: 'Identifying undermonetized businesses with acquisition potential.' },
      { src: '/images/stories/diamonds/zeroto.png', title: 'Zero to Value — Monetization Gap', caption: 'How to spot and close the monetization gap in acquisition targets.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/search-funds`,
    images: [
      { src: '/images/stories/search-fund/evol_of_search_fund.png', title: 'Evolution of the Search Fund Model', caption: 'How the Stanford search fund model evolved into a distinct asset class.' },
      { src: '/images/stories/search-fund/explaining_gap.png', title: 'The Search Fund Gap', caption: 'Understanding the valuation gap in search fund acquisitions.' },
      { src: '/images/stories/search-fund/how_search_source_deal.png', title: 'How Search Funds Source Deals', caption: 'Proprietary deal sourcing methodology used by search fund operators.' },
      { src: '/images/stories/search-fund/when_2walk_away.png', title: 'When to Walk Away from a Deal', caption: 'Red flags and criteria for walking away from an acquisition.' },
      { src: '/images/stories/search-fund/solo_vs_partnered.png', title: 'Solo vs Partnered Search Fund', caption: 'Comparing solo and partnered search fund structures.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/smartprompt`,
    images: [
      { src: '/images/stories/smart-prompt/300.png', title: 'SmartPrompt — 300 Deals Evaluated', caption: '300 opportunities evaluated before closing SmartPrompt.' },
      { src: '/images/stories/smart-prompt/discount.png', title: 'SmartPrompt — 200x Discount to Market', caption: 'GPT-native education platform acquired at a 200x discount to market comparables.' },
      { src: '/images/stories/smart-prompt/kill.png', title: 'SmartPrompt — Two Deals Killed', caption: 'Two deals were killed mid-diligence before the right asset was found.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/sourcely`,
    images: [
      { src: '/images/stories/sourcely/logo_sourcely.png', title: 'Sourcely — AI Student Tool', caption: 'Sourcely: AI student tool acquired for $4K with $500 MRR, grown to $4.5K MRR in five months.' },
      { src: '/images/stories/sourcely/essay.png', title: 'Sourcely Essay Feature', caption: 'Essay writing feature of Sourcely AI student tool.' },
      { src: '/images/stories/sourcely/twitter.png', title: 'Sourcely Twitter Growth', caption: 'Social media growth of Sourcely after acquisition.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/edition-zero`,
    images: [
      { src: '/images/blogs/edition-zero.jpeg', title: 'Edition Zero — This Is Bizness Origin', caption: 'The origin story of This Is Bizness newsletter and Kautilya.' },
      { src: '/images/stories/edition-zero/conviction.png', title: 'Conviction in Acquisition Entrepreneurship', caption: 'The conviction required to pursue acquisition entrepreneurship full-time.' },
      { src: '/images/stories/edition-zero/zero.png', title: 'Starting from Zero', caption: 'Starting an acquisition fund from zero capital and building from first principles.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/pocket-fund`,
    images: [
      { src: '/images/stories/pocket-fund/100k.png', title: 'Pocket Fund — $100K Target', caption: 'The $100K acquisition target for the student-led Pocket Fund.' },
      { src: '/images/stories/pocket-fund/cycle.png', title: 'Acquisition Cycle — Pocket Fund', caption: 'The buy-operate-sell cycle that powers the Pocket Fund model.' },
      { src: '/images/stories/pocket-fund/search.png', title: 'Search Process — Pocket Fund', caption: 'How Pocket Fund searches for and evaluates acquisition targets.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/college-startups`,
    images: [
      { src: '/images/blogs/edition-college.jpeg', title: 'College Startups — Best Time to Build', caption: 'Ten reasons why now is the best time to start a business in college.' },
      { src: '/images/stories/college-startups/best-time-build.png', title: 'Why Now Is the Best Time', caption: 'Data showing why college is the optimal time to start a business.' },
      { src: '/images/stories/college-startups/start-now.png', title: 'Start Now — College Entrepreneur', caption: 'The case for starting immediately rather than waiting for the right moment.' },
      { src: '/images/stories/college-startups/ten-jobs.png', title: 'Ten Jobs AI Will Replace', caption: 'How AI is changing the job market and why entrepreneurship is the answer.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/pocket-deals`,
    images: [
      { src: '/images/stories/micro-saas/bigpurpose.png', title: 'Pocket Deals — Micro-SaaS for Autism Support', caption: 'Breaking down a niche iOS app listed at $15,000 targeting the autism support market.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/inspire3`,
    images: [
      { src: '/images/portfolio-logos/inspire3.png', title: 'Inspire3 — Digital Wellness Portfolio', caption: 'Full forensic due diligence on a $1.8M digital wellness portfolio — 19 websites, 30,134 transactions audited.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/dino-games`,
    images: [
      { src: '/images/portfolio-logos/dino-games.jpeg', title: 'Dino Games — Mobile Game Acquisition', caption: 'Off-market acquisition of a cash-flow-positive mobile game with 8 million installs.' },
    ],
  },
  {
    pageUrl: `${WWW}/stories/runify`,
    images: [
      { src: '/images/portfolio-logos/runify.png', title: 'Runify — Mobile App Acquisition', caption: 'A $110K mobile app deal where the buyer only had to put $20K in cash at closing.' },
    ],
  },
];

export function GET() {
  const urlEntries = IMAGE_MAP.map(({ pageUrl, images }) => {
    const imageBlocks = images.map(({ src, title, caption }) => `
    <image:image>
      <image:loc>${WWW}${escapeXml(src)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(caption)}</image:caption>
    </image:image>`).join('');

    return `
  <url>
    <loc>${escapeXml(pageUrl)}</loc>${imageBlocks}
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
