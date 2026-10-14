import TurndownService from 'turndown';

// Serves Markdown for pages when a client sends Accept: text/markdown (see /proxy.ts).
// "/" returns the site's curated llms.txt; other paths render the real HTML page and convert it.
export const dynamic = 'force-dynamic';

const MD_HEADERS = {
  'Content-Type': 'text/markdown; charset=utf-8',
  Vary: 'Accept',
  'Cache-Control': 'public, max-age=0, s-maxage=3600',
};

function notFoundMarkdown(path: string) {
  const body = `# 404: Page not found

The page \`${path}\` does not exist on Kautilya (https://www.kautilya.pe).

Where to look instead:

- [llms.txt](https://www.kautilya.pe/llms.txt): site overview, services, and a list of every key page
- [Sitemap](https://www.kautilya.pe/sitemap.xml): all published URLs
- [Homepage](https://www.kautilya.pe/)
- [Blog](https://www.kautilya.pe/blog)
- [Contact](https://www.kautilya.pe/engage)
`;
  return new Response(body, { status: 404, headers: MD_HEADERS });
}

export async function GET(request: Request, ctx: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await ctx.params;
  const pathname = '/' + path.map(encodeURIComponent).join('/');
  const origin = new URL(request.url).origin;

  if (pathname === '/') {
    const r = await fetch(`${origin}/llms.txt`, { cache: 'no-store' });
    if (r.ok) return new Response(await r.text(), { status: 200, headers: MD_HEADERS });
  }

  const r = await fetch(origin + pathname, {
    headers: { Accept: 'text/html' },
    redirect: 'manual',
    cache: 'no-store',
  });
  if (r.status >= 300 && r.status < 400) {
    const loc = r.headers.get('location');
    if (loc) return new Response(null, { status: r.status, headers: { Location: loc, Vary: 'Accept' } });
  }
  if (r.status === 404) return notFoundMarkdown(decodeURIComponent(pathname));
  if (!r.ok) {
    return new Response(`# Error ${r.status}\n\nThis page could not be rendered. See [llms.txt](https://www.kautilya.pe/llms.txt).\n`, {
      status: r.status,
      headers: MD_HEADERS,
    });
  }

  let html = await r.text();
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? html;
  html = main.replace(/<(script|style|noscript|svg|canvas|video)\b[\s\S]*?<\/\1>/gi, '');
  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
  td.remove(['form', 'button', 'iframe']);
  const md = td.turndown(html).replace(/\n{3,}/g, '\n\n').trim();
  const canonical = `https://www.kautilya.pe${pathname === '/' ? '' : decodeURI(pathname)}`;
  const body = `${title ? `<!-- ${title.replace(/-->/g, '')} -->\n` : ''}Source: ${canonical}\n\n${md}\n`;
  return new Response(body, { status: 200, headers: MD_HEADERS });
}
