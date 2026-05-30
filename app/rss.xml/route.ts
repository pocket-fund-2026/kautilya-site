import { STORY_SLUGS, STORY_META, type StorySlug } from '@/lib/stories';

const WWW = 'https://www.kautilya-pe.com';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const items = STORY_SLUGS.map((slug) => {
    const meta = STORY_META[slug as StorySlug];
    const pubDate = meta.datePublished
      ? new Date(meta.datePublished).toUTCString()
      : 'Thu, 01 Jun 2024 00:00:00 GMT';

    return `
    <item>
      <title>${escapeXml(meta.title)}</title>
      <description>${escapeXml(meta.description)}</description>
      <link>${WWW}/stories/${slug}</link>
      <guid isPermaLink="true">${WWW}/stories/${slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>contact@kautilya-pe.com (${escapeXml(meta.author)})</author>
      <category>Acquisitions</category>
      <category>M&amp;A Advisory India</category>
      <category>Micro Private Equity</category>
      ${meta.image ? `<enclosure url="${WWW}${meta.image}" type="image/jpeg" length="0" />` : ''}
      <source url="${WWW}/rss.xml">Kautilya Stories</source>
    </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Kautilya Stories</title>
    <description>Deal journals, case studies, and market intelligence from Kautilya&apos;s buy-side M&amp;A advisory practice — from off-market acquisitions to forensic due diligence.</description>
    <link>${WWW}/stories</link>
    <atom:link href="${WWW}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>Fri, 30 May 2026 00:00:00 GMT</lastBuildDate>
    <managingEditor>contact@kautilya-pe.com (Kautilya)</managingEditor>
    <webMaster>contact@kautilya-pe.com (Kautilya)</webMaster>
    <copyright>© 2026 Kautilya. All rights reserved.</copyright>
    <ttl>60</ttl>
    <category>M&amp;A Advisory</category>
    <category>Acquisition Entrepreneurship</category>
    <category>Micro Private Equity</category>
    <category>Search Funds India</category>
    <category>Off-Market Deal Sourcing</category>
    <image>
      <url>${WWW}/icon.svg</url>
      <title>Kautilya Stories</title>
      <link>${WWW}/stories</link>
      <description>Kautilya — Buy-Side M&amp;A Advisory &amp; Deal Sourcing India</description>
    </image>
    <dc:creator>Dev Shah</dc:creator>
    <dc:publisher>Kautilya</dc:publisher>
    <dc:language>en</dc:language>
    <dc:rights>© 2026 Kautilya. All rights reserved.</dc:rights>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
