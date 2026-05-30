const WWW = 'https://www.kautilya-pe.com';

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>Kautilya</ShortName>
  <Description>Search Kautilya — Buy-Side M&amp;A Advisory, Deal Sourcing &amp; Acquisition Intelligence India</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <OutputEncoding>UTF-8</OutputEncoding>
  <Language>en-us</Language>
  <Image width="16" height="16" type="image/svg+xml">${WWW}/icon.svg</Image>
  <Url type="text/html" method="get" template="${WWW}/stories?q={searchTerms}" />
  <Url type="application/rss+xml" rel="results" template="${WWW}/rss.xml?q={searchTerms}" />
  <Contact>contact@kautilya-pe.com</Contact>
  <Tags>M&amp;A advisory India, buy a business India, acquisition entrepreneurship, micro private equity, search fund India, deal sourcing</Tags>
  <LongName>Kautilya — Buy-Side M&amp;A Advisory &amp; Deal Sourcing India</LongName>
  <moz:SearchForm>${WWW}/stories</moz:SearchForm>
</OpenSearchDescription>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/opensearchdescription+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
