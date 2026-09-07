# Keyword Inventory — kautilya-pe.com

Every `keywords` array defined in the codebase, pulled out into one place so
SEO/content work doesn't require grepping through `app/**/page.tsx` and
`lib/*.ts`. Regenerate by re-running the extraction whenever a page's
`keywords:` metadata changes — this file is a snapshot, not a source of
truth (the source of truth is the code).

**Source locations:** `app/layout.tsx` (site-wide default), each
`app/**/page.tsx` (per-page `metadata.keywords`), and `lib/blogs.ts` /
`lib/newsletters.ts` (per-post `keywords`, also used as comma-joined
`article:tag` meta on `[slug]` pages).

---

## Site-wide default (`app/layout.tsx`)

Used as the fallback `<meta name="keywords">` for any page that doesn't
override it.

```
buy-side advisory, deal sourcing, M&A advisory India, acquisition pipeline,
Kautilya, Kautilya PE, Kautilya advisory, micro private equity,
off-market deal sourcing, search fund India, ETA India,
acquisition entrepreneurship, business acquisition India,
buy a business India, forensic due diligence, buy-side M&A,
proprietary deal flow, family office advisory, PE advisory India,
mandate to close, business broker India, acquisition advisory,
Kautilya M&A, Kautilya deal sourcing, Kautilya acquisition,
India M&A advisory, Indian M&A market, India acquisition market,
buy profitable business India, cash flowing business India,
recurring revenue business India, holdco India, HoldCo acquisition India,
roll-up acquisitions India, buy and build strategy India,
acquisition firm India, M&A firm India, deal flow India,
off-market business sale India, acquire a business India,
acquisition advisory firm, buy-side M&A firm, M&A consultant India,
small business acquisition India, SME acquisition India, online business acquisition India,
VC advisory India, private equity deal sourcing India,
family office acquisition India, business buyer India,
startup acquisition India, digital business acquisition India,
proprietary pipeline India, micro PE India, mandated buy-side search,
acquisition thesis India, India M&A market 2026, off-market M&A India
```

---

## Static pages

### Home (`app/page.tsx`)
```
buy-side advisory India, proprietary deal sourcing, off-market acquisitions,
M&A advisory India, buy a business India, acquisition pipeline,
micro private equity India, search fund India, ETA India,
forensic due diligence, family office deal sourcing, PE advisory India,
acquisition entrepreneurship India, buy and build strategy,
roll-up acquisitions, business acquisition advisory, acquisition mandate India,
deal sourcing firm India, proprietary deal flow India, M&A support India,
company acquisition India, acquisition financing India, seller financing India,
earnout India, acquisition due diligence India, financial due diligence India,
SaaS acquisition advisory, tech acquisition India, acquisition retainer India,
M&A retainer India, advisory retainer India, acquisition specialist Mumbai,
M&A specialist India, business broker alternative India,
cash flow business India, buy profitable business India,
SME acquisition advisory India, founder-led business acquisition India,
bootstrapped business acquisition India, digital asset acquisition India,
online business acquisition advisory, internet business M&A India,
acquisition for PE funds India, acquisition for family offices India,
acquisition for VCs India, search fund advisory India,
ETA advisory India, micro PE advisory India,
business purchase India, acquire company India, takeover advisory India,
corporate acquisition India, strategic acquisition India,
bolt-on acquisition India, platform acquisition India,
off-market deal flow India, proprietary sourcing India,
deal origination advisory India, investment mandate India,
acquisition opportunity India, buying a business guide India,
how to acquire a business India, steps to buy a business India
```

### Approach (`app/approach/page.tsx`)
```
M&A methodology India, acquisition process, buy-side deal sourcing process,
off-market sourcing methodology, forensic due diligence process,
acquisition mandate, deal origination India, proprietary deal flow,
M&A due diligence India, business acquisition process India,
search fund methodology, ETA acquisition process,
acquisition process steps India, how to acquire a business step by step,
deal sourcing process India, founder outreach methodology,
acquisition timeline India, time to close acquisition India,
LOI to close India, due diligence workstreams India,
DD checklist India, diligence process buy-side,
buy-side mandate execution, mandate definition acquisition,
acquisition criteria definition, target universe building India,
market mapping acquisition India, sector mapping M&A India,
cold outreach acquisition India, LinkedIn outreach deals India,
email outreach acquisition India, financial due diligence checklist India,
commercial due diligence checklist, operational due diligence India,
deal structure India, earnout structure India, seller note India,
acquisition close process, post-acquisition operations India,
operator placement India, acquisition framework India,
buy-side framework, acquisition playbook India,
first-time acquisition guide India, how to do due diligence India,
SaaS due diligence checklist India, tech due diligence India,
financial reconstruction India, acquisition negotiation India,
deal negotiation India, M&A negotiation India,
asset purchase India, share purchase India, business valuation India,
revenue quality analysis, customer concentration risk analysis,
churn analysis acquisition, acquisition integration India,
100 day plan acquisition, post-close playbook India,
deal kill criteria, acquisition red flags India,
buy-side process India, five phase acquisition, mandate to close process,
universe construction M&A, targeted outreach acquisition, diligence and structuring India,
execution and close M&A, acquisition success rate India, response rate outreach acquisition,
off-market deal process India, proprietary sourcing process India
```

### Portfolio (`app/portfolio/page.tsx`)
```
MSP buy-side due diligence case study, managed service provider acquisition,
MSP due diligence India, $21M MSP due diligence case study,
managed services quality of earnings, MSP EBITDA normalization,
acquisition case studies India, M&A deal portfolio, closed acquisitions,
SaaS acquisition India, mobile app acquisition, digital wellness acquisition,
buy-side advisory results, off-market deal examples, micro PE portfolio,
acquisition deal flow India, business acquisition examples,
due diligence case study, search fund deals India,
SaaS acquisition case study India, mobile app acquisition case study,
UK immigration advisory acquisition, immigration tech M&A,
UK business acquisition India advisor, Inspire3 acquisition case study,
Borderless advisory case study, Dino Games acquisition,
Runify acquisition case study, SmartPrompt acquisition case study,
Sourcely acquisition case study, education SaaS acquisition India,
GPT tool acquisition, AI tool acquisition India,
fitness app acquisition India, mobile game acquisition India,
cash flow business acquisition India, $1.8M due diligence case study,
$110K acquisition India, $39K acquisition India,
buy-side advisory track record India, M&A advisory results India,
acquisition success stories India, off-market deal examples India,
proprietary deal examples India, seller financing case study India,
earnout case study India, creative deal structure examples India,
acquisition exit case study India, successful acquisition India,
digital asset acquisition India, online business bought India,
internet business acquisition case study, first acquisition India,
student acquisition fund India, micro PE case study India,
ETA case study India, buy and hold case study India,
acquire and operate India case study, acquisition operations India,
forensic due diligence case study India, 30134 transactions audited,
99.83 match rate due diligence, DD under 15 days India, off-market mobile app India,
off-market SaaS India, roll-up case study India, platform acquisition case study India,
bolt-on acquisition case study India, acqui-hire India case study, digital wellness M&A India,
professional services acquisition India
```

### Team (`app/team/page.tsx`)
```
Kautilya team, M&A advisory team India, buy-side advisory analysts,
acquisition specialist India, due diligence analysts India,
Dev Shah Kautilya, micro PE team India, search fund team India,
deal sourcing analysts, M&A operator India,
Dev Shah micro PE, Dev Shah acquisition entrepreneur India,
Dev Shah Mumbai, Dev Shah founder Kautilya,
Kautilya founders India, Kautilya analysts India,
acquisition team India, M&A team Mumbai, deal team India,
due diligence team India, research team acquisition India,
AI-powered acquisition team, technology-enabled M&A India,
data-driven deal sourcing India, buy-side advisory experts India,
acquisition specialists Mumbai, M&A professionals India,
deal sourcing experts India, acquisition operators India,
M&A practitioners India, Aum Thakarkar analyst Kautilya,
Ganesh Jagtap tech Kautilya,
micro PE operator India, search fund operator India,
ETA operator India, acquisition entrepreneur India,
acquisition team ethos India, M&A team culture India,
small M&A team India, focused advisory team India,
rigor discretion conviction velocity, M&A advisory ethos India,
analyst team buy-side India, senior M&A practitioners India,
Kautilya advisory people, acquisition advisory counsel India
```

### Careers (`app/careers/page.tsx`)
```
Kautilya careers, M&A analyst jobs India, buy-side advisory jobs India,
deal sourcing analyst Mumbai, acquisition analyst job India,
micro PE jobs India, search fund jobs India, startup jobs Mumbai,
M&A marketing jobs India, finance jobs Mumbai, investment analyst India,
M&A jobs India 2026, acquisition jobs India, deal sourcing jobs India,
analyst jobs Mumbai, finance analyst jobs India, private equity jobs India,
search fund jobs India 2026, ETA jobs India, micro PE jobs India 2026,
acquisition analyst intern India, M&A internship India,
deal sourcing internship India, remote M&A jobs India,
work from home finance jobs India, remote acquisition jobs India,
marketing jobs fintech India, content marketing M&A India,
brand jobs Mumbai, fast-paced finance job India,
small team big impact jobs India, startup finance jobs India,
Kautilya job openings, Kautilya analyst role, Kautilya marketing role,
apply Kautilya India, join M&A firm India, work at acquisition firm India,
careers at Kautilya, jobs at Kautilya, Kautilya hiring India,
deal analyst India, sourcing analyst India, M&A researcher India,
acquisition researcher India, deal intelligence India,
market intelligence jobs India, acquisition outreach jobs India,
brand and marketing M&A India, growth marketing acquisition India,
content strategy M&A India, newsletter marketing India jobs,
social media finance India jobs, acquisition community India,
join micro PE team India, work with search fund India,
ETA community jobs India, acquisition ecosystem India jobs
```

### FAQ (`app/faq/page.tsx`)
```
M&A advisory FAQ, buy a business FAQ India, off-market deal sourcing questions,
due diligence cost India, acquisition advisory pricing, micro private equity FAQ,
search fund questions India, business acquisition process FAQ,
seller financing explained, how to buy a business India, first-time buyer acquisition,
what is buy-side advisory, M&A retainer pricing India,
what is buy-side M&A India, buy-side vs sell-side M&A,
M&A advisor vs broker India, what is off-market deal India,
off-market vs on-market deals India, proprietary vs broker deal India,
acquisition retainer cost India, M&A advisory cost India,
how long to close acquisition India, acquisition timeline FAQ India,
deal closing time India, what is search fund India,
search fund explained India, ETA explained India,
what is micro private equity India, micro PE explained India,
small PE India, what is forensic due diligence India,
forensic DD explained India, financial reconstruction explained India,
what is acquisition entrepreneurship India, ETA for beginners India,
acquisition financing options India, what is earnout India,
post-acquisition operations FAQ India, operator placement FAQ India,
running acquired business India, acquisition without experience India,
buying business no experience India, first time buyer guide India,
how many deals per month India, deal flow volume India,
acquisition pipeline volume India, acquisition success rate India,
deal closure rate India, acquisition match rate India,
due diligence workstreams explained India, financial workstream DD India,
commercial workstream DD India, M&A success fee India,
acquisition success fee structure India, advisory success fee India,
month to month retainer India, no lock-in advisory India,
flexible M&A retainer India, international acquisition FAQ India,
cross-border M&A India, India US M&A advisory, UAE acquisition advisory FAQ,
UK acquisition India advisor FAQ, India UAE business acquisition,
M&A for PE funds FAQ India, M&A for family offices FAQ India, M&A for VCs FAQ India,
acquisition for HoldCo India FAQ, roll-up M&A FAQ India, buy and build FAQ India,
digital business acquisition FAQ India, SaaS acquisition FAQ India,
how does off-market sourcing work India, proprietary deal sourcing process FAQ,
acquisition mandate FAQ India
```

### Engage / Contact (`app/engage/page.tsx`)
```
start acquisition mandate India, hire buy-side advisor India,
M&A advisory contact India, book acquisition call India,
business acquisition mandate, off-market deal sourcing retainer,
buy a business India contact, PE advisory India enquiry,
micro private equity advisor contact, search fund advisor India,
acquisition deal flow contact, due diligence India hire,
contact M&A advisor India, hire acquisition advisor India,
M&A advisory enquiry India, start M&A mandate India,
submit acquisition mandate India, acquisition mandate submission India,
book M&A call India, schedule acquisition call India,
talk to acquisition advisor India, acquisition retainer enquiry India,
M&A retainer enquiry India, buy-side retainer India,
acquisition consultation India, M&A consultation India,
deal sourcing enquiry India, proprietary deal flow enquiry India,
off-market deal enquiry India, VC advisory India enquiry,
family office advisory contact India, search fund advisor enquiry India,
ETA advisor contact India, acquisition entrepreneur advisor India,
due diligence enquiry India, standalone DD enquiry India,
DD advisory contact India, first acquisition support India,
acquisition mentorship India, acquisition coaching India,
business acquisition help India, finding businesses to buy help India,
acquisition mandate criteria India, define acquisition thesis India,
acquisition brief India, deal brief India,
M&A brief India, buy-side brief India,
PE fund acquisition enquiry India, HoldCo acquisition enquiry India,
roll-up acquisition enquiry India, bolt-on acquisition enquiry India,
platform acquisition enquiry India, strategic acquisition enquiry India,
SaaS acquisition enquiry India, tech acquisition enquiry India,
digital asset acquisition enquiry India, online business acquisition enquiry India,
acquisition advisory India contact, M&A advisor Mumbai contact, buy-side M&A contact India,
acquisition pipeline enquiry India
```

### Stories / blog index (`app/stories/page.tsx`)
```
acquisition entrepreneurship India, buy a business India blog,
M&A deal journal, search fund stories India, micro private equity blog,
how to buy a business India, acquisition case studies, off-market deal sourcing guide,
ETA content India, business acquisition insights, due diligence guide India,
seller financing explained, buy and build strategy India,
acquisition blog India, M&A blog India, deal sourcing blog India,
search fund blog India, micro PE blog India, ETA blog India,
acquisition newsletter India, M&A newsletter India, deal journal India,
business acquisition content India, acquisition education India,
deal breakdown India, acquisition analysis India,
DD checklist article India, acquisition framework guide India,
earnout guide India, deal structure guide India,
search fund explained India, micro PE explained India,
acquisition entrepreneurship explained, off-market deals explained India,
proprietary deal sourcing explained, cold outreach acquisition guide India,
SaaS valuation India, business valuation guide India,
how to value a business India, acquisition due diligence guide India,
financial due diligence guide India, commercial due diligence guide India,
business acquisition for beginners India, first acquisition guide India,
recurring revenue business India, bootstrapped business acquisition India,
deal sourcing strategies India, outreach strategies acquisition India,
finding businesses to buy India, acquisition market intelligence India,
M&A market India insights, acquisition trends India 2026,
SMB acquisition guide India, online business acquisition guide India,
SaaS acquisition guide India, mobile app acquisition guide India,
digital business acquisition guide, content site acquisition India,
newsletter acquisition India, e-commerce acquisition India,
acquisition financing guide India, seller financing guide India,
earnout structure guide India, asset vs share sale India, LOI guide India,
letter of intent acquisition India, acquisition negotiation guide India,
post-acquisition guide India, operator placement guide India,
100 day plan post-acquisition India, acquisition exit guide India, exit strategy India,
sell business India, MSP due diligence, managed service provider acquisition,
MSP buy-side due diligence, quality of earnings MSP, EBITDA normalization case study,
MSP margin analysis
```

### Stories — dynamic post pages (`app/stories/[slug]/page.tsx`)
Base set applied to every story, plus the story's own `meta.title`:
```
acquisition case study, buy a business India, M&A deal India,
off-market acquisition, micro private equity, search fund India,
business acquisition story, due diligence India, {meta.title}
```
Also emits a flat `<meta name="keywords">` string:
```
acquisition, buy-side advisory, off-market deals, micro private equity,
India M&A, deal sourcing, forensic due diligence
```

### Blog index (`app/blog/page.tsx`)
```
kautilya blog, kautilya M&A advisory blog, kautilya market intelligence,
buying a family owned business in India, family business succession sale India,
acquiring family business India due diligence, family business transition acquisition,
how to value a business India,
M&A advisory India blog, buy-side advisory India insights,
acquisition advisory India notes, M&A advisory notes India,
off-market deal sourcing India, proprietary deal flow India,
how to source deals India, deal sourcing strategy India,
micro private equity India, search fund India blog,
acquisition entrepreneurship blog India, ETA blog India,
SME acquisition India, SMB acquisition India insights,
family office acquisition India, PE deal sourcing India,
search fund buyer India, first-time buyer business India,
how to buy a business India, acquisition framework India,
due diligence guide India, business acquisition guide India,
acquisition thesis India, deal structure guide India,
business broker alternative India,
mid-market acquisition India blog, off-market M&A India notes,
what is a search fund, search fund model, search fund meaning,
how does a search fund work, entrepreneurship through acquisition
```
Also carries two per-post flat keyword strings used for structured data:
- **Buying a family-owned business in India**: `buying a family owned business in India, family business succession sale India, acquiring family business India due diligence, buying business from retiring owner India, family business transition acquisition`
- **What is a search fund**: `what is a search fund, search fund model, search fund meaning, how does a search fund work, entrepreneurship through acquisition`

### Newsletter index (`app/newsletter/page.tsx`)
```
Kautilya newsletter, Kautilya deal teardown, India deal sheet newsletter,
M&A deal structure analysis India, Indian M&A deal breakdown, deal teardown newsletter India,
buy-side advisory newsletter India, India M&A newsletter, Aurum PropTech Housing.com acquisition,
REA Group Housing.com exit, Indian proptech M&A 2026, all-share preferential issue India M&A,
M&A structure analysis newsletter, Kautilya market intelligence newsletter,
pharma business valuation India, pharma M&A India, EBITDA multiple pharma India,
JB Chemicals Torrent deal, KKR JB Chemicals acquisition, founder-owned pharma valuation India
```
Per-post: first 6 keywords of each post are joined for article schema (see per-post lists below).

---

## Blog posts (`lib/blogs.ts`)

### Buying a Family-Owned Business in India
```
buying a family owned business in India, how to buy a family business in India,
family business succession sale India, acquiring family business India due diligence,
buying business from retiring owner India, family business transition acquisition,
due diligence family business India, family business due diligence checklist,
informal financial records due diligence India, verbal agreement due diligence business acquisition,
owner dependency risk business acquisition, succession planning business sale India,
retiring business owner sale India, promoter family business sale India,
family business owner negotiation India, first-time business buyer India guide,
SME acquisition checklist India, how to negotiate with family business owner,
buying SME from family owner India, acquiring a business from retiring founder India,
family business transition consulting, seller financing family business acquisition,
earnout family business acquisition India, employee retention business acquisition India,
buy-side advisory family business India, M&A advisory SME acquisition India,
acquisition entrepreneurship India family business, red flags buying a family business,
family business valuation informal records India, family owned SME acquisition India
```

### What Is a Search Fund?
```
what is a search fund, search fund model, search fund meaning,
how does a search fund work, entrepreneurship through acquisition,
search fund explained, search fund for beginners, what is entrepreneurship through acquisition,
ETA meaning business, buying a business with other people's money,
search capital vs acquisition capital, search fund step up ratio,
search fund right of first refusal, traditional search fund vs self funded search,
self funded search fund, how much money do you need to start a search fund,
search fund searcher equity, how much equity does a searcher get,
search fund equity vesting, search fund IRR hurdle, search fund vesting tranches,
search fund acquisition criteria, search fund target company profile,
search fund EBITDA requirements, search funds in India,
entrepreneurship through acquisition India, ETA India, search fund India example,
self funded search India, Stanford search fund model, search fund investors,
search fund advisory India
```

### What Is Buy-Side M&A Advisory?
```
buy-side M&A advisory, buy-side advisor India, what is buy-side M&A advisory,
buy-side advisory meaning, buy-side advisory explained, buy-side M&A advisory for beginners,
how does a buy-side advisor work, buy side vs sell side advisory,
sell-side advisor vs buy-side advisor, buy-side M&A process,
business acquisition process India, due diligence business acquisition India,
M&A sourcing screening valuation diligence, off-market deal sourcing India,
first-time business buyer India guide, how to buy a business in India,
buying a business in India guide, business acquisition advisor India,
buy-side advisory small deals India, SME acquisition advisory India,
mid-market M&A advisory India, search fund buy-side advisory,
business acquisition mistakes first-time buyers, due diligence red flags business acquisition,
overpaying for a business acquisition, EBITDA add-back inflation due diligence,
FEMA compliance business acquisition India, NRI buying business in India,
foreign buyer acquisition India compliance, buy-side advisor fees structure,
M&A advisor retainer success fee, buy-side advisory firm India,
do I need a buy-side advisor, buy-side advisor vs M&A lawyer,
how long does M&A due diligence take
```

---

## Newsletter posts (`lib/newsletters.ts`)

### How to Value a Founder-Owned Pharma Business in India
```
pharma business valuation India, how to value a pharma business India,
EBITDA multiple pharma India, EV EBITDA pharma India 2025, JB Chemicals Torrent deal,
KKR JB Chemicals acquisition, Torrent JB Chemicals 24x EBITDA, JB Chemicals exit valuation,
sell pharma company India, pharma exit planning India, how to exit a pharma business India,
pharma business sale India, founder-owned pharma valuation India, pharma M&A India 2025,
mid-market pharma M&A India, Indian pharma acquisition deal, PE pharma acquisition India,
private equity pharma India, Schedule M compliance India, Schedule M pharma manufacturer India,
pharma diligence readiness India, pharma business preparation for sale,
pharma EBITDA margin improvement India, pharma governance institutional India,
pharma M&A advisor India, sell pharma business advisory India, buy-side pharma advisory India,
M&A advisory pharma India, how to get 24x EBITDA pharma India, founder pharma promoter exit India,
pharma succession planning India, mid-market pharma business buyer India,
ChrysCapital Novartis India acquisition, KKR pharma investment India, pharma PE deal India 2025
```

### Aurum's Housing.com Acquisition, Explained
```
Aurum PropTech Housing.com acquisition, REA Group Housing.com exit, Housing.com Aurum deal,
Locon Solutions acquisition, Aurum PropTech Locon Solutions, REA Group India exit,
Housing.com PropTiger Aurum, Aurum PropTech acquisition analysis,
Aurum PropTech share swap Housing.com, all-share preferential issue India M&A,
stock for asset acquisition India, SEBI preferential allotment open offer threshold,
MNC exit India subsidiary equity swap, listed company acquisition without cash India,
Indian proptech M&A 2026, proptech consolidation India, real estate marketplace acquisition India,
Magicbricks 99acres NoBroker competitors, Kautilya deal teardown, Kautilya newsletter M&A India,
India deal sheet newsletter, M&A deal structure analysis India,
buy-side advisory deal analysis India, why did REA Group sell Housing.com,
Aurum PropTech Housing.com deal structure, Housing.com FY26 revenue decline,
Aurum PropTech promoter warrants
```

### Lockheed Martin's Ultra Maritime Acquisition: A Deal Teardown
```
Lockheed Martin Ultra Maritime acquisition, Lockheed Martin Ultra Maritime deal,
Ultra Maritime Advent International, Advent International Ultra Maritime exit,
Lockheed Martin $3.45 billion acquisition, defense M&A deal teardown,
private equity value creation case study, EBITDA multiple defense acquisition,
sonar systems acquisition, undersea warfare systems M&A,
Rotary and Mission Systems Lockheed Martin, all-cash M&A deal defense sector,
private equity exit strategic buyer, buy-side advisory deal analysis,
M&A deal structure teardown
```

### JSW Paints–Akzo Nobel Deal, Explained
```
JSW Paints Akzo Nobel acquisition, JSW Paints Akzo Nobel deal, JSW Dulux Ltd,
Akzo Nobel India acquisition, JSW Paints Dulux deal explained, JSW Paints 12915 crore deal,
Akzo Nobel India Dulux sale, JSW Paints Akzo Nobel open offer, SPA and open offer India takeover,
SEBI SAST open offer formula, mandatory open offer India explained,
MNC exit India listed subsidiary, how a foreign parent exits a listed Indian company,
control premium vs open offer price India, India paints industry consolidation,
Asian Paints Birla Opus JSW Dulux, Indian decorative paints market share,
paints industry M&A India 2026, buy versus build strategy M&A, buy vs build case study India,
EBITDA multiple paints acquisition, control premium India M&A, Kautilya deal teardown,
Kautilya newsletter M&A India, India deal sheet newsletter, buy-side M&A advisory India,
M&A deal structure analysis India, why did JSW Paints buy Akzo Nobel India,
how much did JSW pay for Dulux India, JSW Paints market share after Akzo Nobel deal,
JSW Paints JSW Dulux merger
```

---

## Notes for maintenance

- Every list above is a full, verbatim copy of the corresponding
  `keywords:` array in the code as of the date this file was generated.
- `app/news-sitemap.xml/route.ts` emits a separate `<news:keywords>` tag
  (Google News format) independent of the page-level SEO keywords:
  `acquisition, M&A, buy-side advisory, micro private equity, India, deal sourcing`.
- Adding a new blog/newsletter post: add its `keywords` array in
  `lib/blogs.ts` / `lib/newsletters.ts`, then append a matching section here.
- See also [`GEO-ANALYSIS.md`](./GEO-ANALYSIS.md) for the broader
  Generative Engine Optimization analysis (AI Overviews / ChatGPT /
  Perplexity citability) that this keyword inventory feeds into.
