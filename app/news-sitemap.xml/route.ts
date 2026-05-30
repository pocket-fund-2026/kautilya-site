import { STORY_SLUGS, STORY_META, type StorySlug } from '@/lib/stories';

const WWW = 'https://www.kautilya-pe.com';

const STORY_IMAGES: Record<string, string[]> = {
  'borderless':      ['/images/portfolio-logos/borderless.png', '/images/stories/borderless/exhausting-market.png', '/images/stories/borderless/maket-no-deals.png', '/images/stories/borderless/money-annualised.png'],
  'dino-games':      ['/images/portfolio-logos/dino-games.jpeg'],
  'runify':          ['/images/portfolio-logos/runify.png'],
  'edition-zero':    ['/images/blogs/edition-zero.jpeg', '/images/stories/edition-zero/conviction.png', '/images/stories/edition-zero/zero.png'],
  'sourcely':        ['/images/stories/sourcely/logo_sourcely.png', '/images/stories/sourcely/essay.png', '/images/stories/sourcely/twitter.png'],
  'review':          [],
  'pocket-fund':     ['/images/stories/pocket-fund/100k.png', '/images/stories/pocket-fund/cycle.png', '/images/stories/pocket-fund/search.png'],
  'college-startups':['/images/blogs/edition-college.jpeg', '/images/stories/college-startups/best-time-build.png', '/images/stories/college-startups/start-now.png', '/images/stories/college-startups/ten-jobs.png'],
  'pocket-deals':    ['/images/stories/micro-saas/bigpurpose.png'],
  'deal-sourcing':   ['/images/blogs/edition-acquire.jpeg', '/images/stories/deal-sourcing/crm.png', '/images/stories/deal-sourcing/discipline.png', '/images/stories/deal-sourcing/morning.png', '/images/stories/deal-sourcing/thousand.png'],
  'diamonds':        ['/images/blogs/edition-thisisbiz.jpeg', '/images/stories/diamonds/uncut.png', '/images/stories/diamonds/zeroto.png'],
  'search-funds':    ['/images/stories/search-fund/evol_of_search_fund.png', '/images/stories/search-fund/explaining_gap.png', '/images/stories/search-fund/how_search_source_deal.png', '/images/stories/search-fund/when_2walk_away.png', '/images/stories/search-fund/solo_vs_partnered.png'],
  '200k-deals':      ['/images/blogs/edition-200k.jpeg', '/images/stories/200k/architecture.png', '/images/stories/200k/five-deals.png', '/images/stories/200k/hidden-channel.png'],
  'smartprompt':     ['/images/stories/smart-prompt/300.png', '/images/stories/smart-prompt/discount.png', '/images/stories/smart-prompt/kill.png'],
  'inspire3':        ['/images/portfolio-logos/inspire3.png'],
};

const STORY_SUMMARIES: Record<string, string> = {
  'borderless':       'How Kautilya built a proprietary acquisition pipeline in the UK immigration advisory market — a sector where almost no businesses are formally listed for sale.',
  'dino-games':       'Off-market discovery and acquisition of a cash-flow-positive mobile game with 8 million installs. Sourced to close in 8 weeks at a 1.1x revenue multiple.',
  'runify':           'A $110K mobile app acquisition structured with only $20K deployed at close. Remaining consideration tied to 24-month performance milestones.',
  'edition-zero':     'The origin story of This Is Bizness — a weekly newsletter built around buying small businesses that eventually became Kautilya.',
  'sourcely':         'First acquisition: an AI student tool with $500 MRR purchased for $4K and grown to $4.5K MRR in five months.',
  'review':           '2023 annual review — Sourcely grew to $150K+ valuation in 5 months, a VC internship in SF, and the decision to go all in on micro PE.',
  'pocket-fund':      'The origin of Pocket Fund — a $5,000 student-led acquisition fund built to buy, operate, and sell small online businesses.',
  'college-startups': 'Ten reasons why now is the best time to start a business in college — reduced costs, AI tools, and a generation-wide shift toward entrepreneurship.',
  'pocket-deals':     'Breaking down a niche iOS app listed at $15,000 targeting the autism support market.',
  'deal-sourcing':    'Five practical strategies for filtering quality deals from marketplace noise, based on daily review of Acquire.com listings.',
  'diamonds':         'The best acquisitions are businesses that previous owners failed to monetize — how to find them before anyone else.',
  'search-funds':     'How a Stanford model from the 1980s became a distinct asset class — the rise of search funds and ETA in India.',
  '200k-deals':       'Five advisory deals, an eleven-person team, and the shift from buying to advising — how Kautilya closed $200K in deal value in 6 months.',
  'smartprompt':      'Two deals killed mid-diligence before closing a GPT-native education platform at a 200x discount to market comparables.',
  'inspire3':         '30,134 transactions audited across 19 websites in under 15 days — full forensic due diligence on a $1.8M digital wellness portfolio.',
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const urlEntries = STORY_SLUGS.map((slug) => {
    const meta = STORY_META[slug as StorySlug];
    const pubDate = meta.datePublished ?? '2024-06-01';
    const imgs = [...(STORY_IMAGES[slug] ?? [])];
    if (meta.image && !imgs.includes(meta.image)) imgs.unshift(meta.image);
    const summary = STORY_SUMMARIES[slug] ?? meta.description;

    const imageBlocks = imgs.map((src) => `
      <image:image>
        <image:loc>${WWW}${escapeXml(src)}</image:loc>
        <image:title>${escapeXml(meta.title)}</image:title>
        <image:caption>${escapeXml(summary)}</image:caption>
      </image:image>`).join('');

    return `
  <url>
    <loc>${WWW}/stories/${slug}</loc>
    <lastmod>${pubDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <news:news>
      <news:publication>
        <news:name>Kautilya Stories</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escapeXml(meta.title)}</news:title>
      <news:keywords>acquisition, M&amp;A, buy-side advisory, micro private equity, India, deal sourcing</news:keywords>
    </news:news>${imageBlocks}
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
