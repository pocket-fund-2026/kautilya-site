import { NextResponse, type NextRequest } from 'next/server';

// Markdown content negotiation: a request whose Accept header prefers text/markdown over
// text/html is rewritten to /md-render/<path>, which returns real Markdown. All other
// requests pass through untouched but are marked Vary: Accept so caches keep both variants apart.
function prefersMarkdown(accept: string): boolean {
  let md = -1;
  let html = -1;
  for (const part of accept.split(',')) {
    const [type, ...params] = part.trim().toLowerCase().split(';');
    const q = params.map((p) => p.trim()).find((p) => p.startsWith('q='));
    const weight = q ? parseFloat(q.slice(2)) : 1;
    if (type === 'text/markdown') md = Math.max(md, weight);
    else if (type === 'text/html' || type === 'application/xhtml+xml') html = Math.max(html, weight);
  }
  return md > 0 && md >= html;
}

export function proxy(request: NextRequest) {
  const accept = request.headers.get('accept') ?? '';
  if (prefersMarkdown(accept) && !request.nextUrl.pathname.startsWith('/md-render')) {
    const url = request.nextUrl.clone();
    url.pathname = '/md-render' + (request.nextUrl.pathname === '/' ? '' : request.nextUrl.pathname);
    const res = NextResponse.rewrite(url);
    res.headers.append('Vary', 'Accept');
    return res;
  }
  const res = NextResponse.next();
  res.headers.append('Vary', 'Accept');
  return res;
}

export const config = {
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
