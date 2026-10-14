const WWW = 'https://www.kautilya-pe.com';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Mirrors the VideoObject structured data embedded on /stories — these are
// the only three videos on the site, all rendered in the "Watch" grid there.
const VIDEOS: Array<{
  pageUrl: string;
  thumbnailLoc: string;
  title: string;
  description: string;
  contentLoc: string;
  durationSeconds: number;
  publicationDate: string;
}> = [
  {
    pageUrl: `${WWW}/stories`,
    thumbnailLoc: `${WWW}/videos/thumbs/inside-the-office.jpg`,
    title: 'Inside the Kautilya Office',
    description: 'Inside the Room: what happens when acquisition entrepreneurs get together. Clips from the Kautilya office and events hosted by the team.',
    contentLoc: `${WWW}/videos/WebEventFinal.mp4`,
    durationSeconds: 54,
    publicationDate: '2026-03-17',
  },
  {
    pageUrl: `${WWW}/stories`,
    thumbnailLoc: `${WWW}/videos/thumbs/symbiosis-talk.jpg`,
    title: 'SymBiz 2025 - Symbiosis, Pune',
    description: "Symbiosis Talk: Kautilya's founder was invited to speak about micro acquisitions at SymBiz 2025 in Pune.",
    contentLoc: `${WWW}/videos/WebSymbiosisFinal.mp4`,
    durationSeconds: 48,
    publicationDate: '2026-03-28',
  },
  {
    pageUrl: `${WWW}/stories`,
    thumbnailLoc: `${WWW}/videos/thumbs/beyond-the-deal.jpg`,
    title: 'Team Kautilya at INSEAD Singapore',
    description: 'Beyond the Deal: the people behind the spreadsheets. Team Kautilya at the INSEAD ETA Conference in Singapore.',
    contentLoc: `${WWW}/videos/WebSingFinal.mp4`,
    durationSeconds: 56,
    publicationDate: '2026-03-17',
  },
];

export function GET() {
  // Group by page — Google's video sitemap format nests all <video:video>
  // entries for a page under a single <url>.
  const byPage = new Map<string, typeof VIDEOS>();
  for (const v of VIDEOS) {
    const list = byPage.get(v.pageUrl) ?? [];
    list.push(v);
    byPage.set(v.pageUrl, list);
  }

  const urlEntries = Array.from(byPage.entries()).map(([pageUrl, videos]) => {
    const videoBlocks = videos.map((v) => `
    <video:video>
      <video:thumbnail_loc>${escapeXml(v.thumbnailLoc)}</video:thumbnail_loc>
      <video:title>${escapeXml(v.title)}</video:title>
      <video:description>${escapeXml(v.description)}</video:description>
      <video:content_loc>${escapeXml(v.contentLoc)}</video:content_loc>
      <video:duration>${v.durationSeconds}</video:duration>
      <video:publication_date>${v.publicationDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>`).join('');

    return `
  <url>
    <loc>${escapeXml(pageUrl)}</loc>${videoBlocks}
  </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
