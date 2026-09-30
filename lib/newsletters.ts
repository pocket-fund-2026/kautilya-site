export const NEWSLETTER_SLUGS = [
  'torrent-jb-chemicals-pharma-valuation',
  'aurum-housing-com-acquisition',
  'lockheed-ultra-maritime-acquisition-teardown',
  'jsw-paints-akzo-nobel-dulux-acquisition-explained',
  'coforge-encora-acquisition-explained',
  'chryscapital-novartis-india-acquisition-explained',
  'sun-pharma-organon-acquisition-explained',
  'cvc-kkr-healthcare-global-acquisition-explained',
  'cvc-aavas-financiers-acquisition-explained',
  'everstone-wingify-bootstrapped-buyout-400-500m-platform',
] as const;

export type NewsletterSlug = (typeof NEWSLETTER_SLUGS)[number];

export type NewsletterFaq = { q: string; a: string };

export type NewsletterMeta = {
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  datePublished: string;
  dealDate: string;
  category: string;
  readTime: string;
  wordCount?: number;
  image?: string;
  keywords?: string[];
  faqs?: NewsletterFaq[];
  about?: string[];
  mentions?: { name: string; sameAs?: string }[];
};

export const NEWSLETTER_META: Record<NewsletterSlug, NewsletterMeta> = {
  'torrent-jb-chemicals-pharma-valuation': {
    title: 'How to Value a Founder-Owned Pharma Business in India',
    subtitle: 'What the Torrent-JB Chemicals Deal Actually Tells You',
    description:
      'KKR turned a Rs. 3,100 Cr pharma acquisition into a Rs. 25,689 Cr exit in five years. Here is what the 24.8x EBITDA Torrent-JB Chemicals deal means for founder-owned pharma businesses in India — and how to close the valuation gap before you engage a bank.',
    author: 'Dev Shah',
    datePublished: '2025-06-29',
    dealDate: '2025-06-29',
    category: 'Market Intelligence',
    readTime: '12 min',
    wordCount: 2600,
    keywords: [
      // Core topic
      'pharma business valuation India',
      'how to value a pharma business India',
      'EBITDA multiple pharma India',
      'EV EBITDA pharma India 2025',
      // Deal reference
      'JB Chemicals Torrent deal',
      'KKR JB Chemicals acquisition',
      'Torrent JB Chemicals 24x EBITDA',
      'JB Chemicals exit valuation',
      // Seller intent
      'sell pharma company India',
      'pharma exit planning India',
      'how to exit a pharma business India',
      'pharma business sale India',
      'founder-owned pharma valuation India',
      // M&A context
      'pharma M&A India 2025',
      'mid-market pharma M&A India',
      'Indian pharma acquisition deal',
      'PE pharma acquisition India',
      'private equity pharma India',
      // Compliance angle
      'Schedule M compliance India',
      'Schedule M pharma manufacturer India',
      // Preparation
      'pharma diligence readiness India',
      'pharma business preparation for sale',
      'pharma EBITDA margin improvement India',
      'pharma governance institutional India',
      // Advisory
      'pharma M&A advisor India',
      'sell pharma business advisory India',
      'buy-side pharma advisory India',
      'M&A advisory pharma India',
      // Long-tail
      'how to get 24x EBITDA pharma India',
      'founder pharma promoter exit India',
      'pharma succession planning India',
      'mid-market pharma business buyer India',
      'ChrysCapital Novartis India acquisition',
      'KKR pharma investment India',
      'pharma PE deal India 2025',
    ],
    faqs: [
      {
        q: 'What EBITDA multiple do pharma businesses sell for in India?',
        a: 'Founder-owned businesses in the Rs. 50–500 Cr range typically sell at 6–8× EBITDA. PE-backed assets with institutional governance trade at 18–24×. The Torrent-JB Chemicals deal at 24.8× is the current ceiling for institutionally prepared assets in Indian mid-market pharma.',
      },
      {
        q: 'How long does it take to prepare a pharma business for sale in India?',
        a: 'Meaningful preparation typically requires 18–36 months. Priority items: professional management layer, clean P&L, documented customer relationships, resolved governance gaps, and funding any dormant capability. Businesses that begin 24 months before an intended sale will have significantly more options at exit.',
      },
      {
        q: "What did KKR do to increase JB Chemicals' value before selling to Torrent?",
        a: 'Five moves over five years: appointed a professional CEO, ran a consistent bolt-on strategy across five targets, funded a dormant CDMO capability that grew to Rs. 446 Cr, improved EBITDA margins from 15–18% to 27–29%, and rebuilt governance to institutional diligence standards.',
      },
      {
        q: 'What is the difference between a motivated and a distressed seller in Indian pharma M&A?',
        a: 'A motivated seller approaches the market by choice, with time and options. A distressed seller approaches because an external pressure — a compliance deadline, a succession crisis — has removed optionality. Motivated sellers price at the top of the range; distressed sellers price at the bottom.',
      },
      {
        q: 'Do I need an investment bank to sell a pharma business in India?',
        a: "For businesses in the Rs. 50–300 Cr range, a boutique M&A advisory firm with Indian mid-market pharma experience will typically be more effective than a large investment bank. The advisor's most important work happens in the 18–24 months before any sale process — not during it.",
      },
    ],
    about: [
      'Pharma business valuation India',
      'EBITDA multiples India mid-market pharma',
      'Indian M&A advisory',
      'Founder-owned business exit India',
    ],
    mentions: [
      { name: 'KKR', sameAs: 'https://www.kkr.com' },
      { name: 'JB Chemicals & Pharmaceuticals', sameAs: 'https://en.wikipedia.org/wiki/JB_Chemicals_%26_Pharmaceuticals' },
      { name: 'Torrent Pharmaceuticals', sameAs: 'https://en.wikipedia.org/wiki/Torrent_Pharmaceuticals' },
      { name: 'ChrysCapital' },
      { name: 'Novartis India' },
    ],
  },
  'aurum-housing-com-acquisition': {
    title: "Aurum's Housing.com Acquisition, Explained",
    subtitle: 'How REA "Exited" by Becoming Aurum\'s Biggest Shareholder',
    description:
      "REA Group didn't sell Housing.com for cash — it swapped operating control for a 24.9% stake in Aurum PropTech. Kautilya's deal-structure teardown of India's biggest proptech consolidation move of 2026.",
    author: 'Dev Shah',
    datePublished: '2026-07-25',
    dealDate: '2026-07-16',
    category: 'Deal Teardowns',
    readTime: '11 min',
    wordCount: 2300,
    image: '/images/newsletter/aurum-housing-com-acquisition/aurum-housing-hero.webp',
    keywords: [
      // Deal-specific
      'Aurum PropTech Housing.com acquisition',
      'REA Group Housing.com exit',
      'Housing.com Aurum deal',
      'Locon Solutions acquisition',
      'Aurum PropTech Locon Solutions',
      'REA Group India exit',
      'Housing.com PropTiger Aurum',
      'Aurum PropTech acquisition analysis',
      'Aurum PropTech share swap Housing.com',
      // Structure angle
      'all-share preferential issue India M&A',
      'stock for asset acquisition India',
      'SEBI preferential allotment open offer threshold',
      'MNC exit India subsidiary equity swap',
      'listed company acquisition without cash India',
      // Sector
      'Indian proptech M&A 2026',
      'proptech consolidation India',
      'real estate marketplace acquisition India',
      'Magicbricks 99acres NoBroker competitors',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'M&A deal structure analysis India',
      'buy-side advisory deal analysis India',
      // Long-tail
      'why did REA Group sell Housing.com',
      'Aurum PropTech Housing.com deal structure',
      'Housing.com FY26 revenue decline',
      'Aurum PropTech promoter warrants',
    ],
    about: [
      'Aurum PropTech Housing.com acquisition',
      'All-share preferential issue structures India',
      'Indian proptech consolidation',
      'MNC exit structuring via equity swap',
    ],
    mentions: [
      { name: 'Aurum PropTech Ltd', sameAs: 'https://www.aurumproptech.in' },
      { name: 'REA Group', sameAs: 'https://www.rea-group.com' },
      { name: 'Housing.com' },
      { name: 'Locon Solutions Pvt Ltd' },
      { name: 'PropTiger' },
    ],
  },
  'lockheed-ultra-maritime-acquisition-teardown': {
    title: "Lockheed Martin's Ultra Maritime Acquisition: A Deal Teardown",
    subtitle: 'What a $3.45B, 22x-EBITDA, All-Cash Deal Actually Tells You',
    description:
      "Lockheed Martin paid $3.45B for Ultra Maritime, an undersea-warfare business Advent International bought in 2022 and grew from $494M to an estimated $784M in revenue. Here's the deal, the multiple, and what it means for buy-side value creation.",
    author: 'Dev Shah',
    datePublished: '2026-07-30',
    dealDate: '2026-07-06',
    category: 'Deal Teardowns',
    readTime: '5 min',
    wordCount: 850,
    image: '/images/newsletter/lockheed-ultra-maritime-acquisition-teardown/lockheed-ultra-maritime-teardown-hero.webp',
    keywords: [
      'Lockheed Martin Ultra Maritime acquisition',
      'Lockheed Martin Ultra Maritime deal',
      'Ultra Maritime Advent International',
      'Advent International Ultra Maritime exit',
      'Lockheed Martin $3.45 billion acquisition',
      'defense M&A deal teardown',
      'private equity value creation case study',
      'EBITDA multiple defense acquisition',
      'sonar systems acquisition',
      'undersea warfare systems M&A',
      'Rotary and Mission Systems Lockheed Martin',
      'all-cash M&A deal defense sector',
      'private equity exit strategic buyer',
      'buy-side advisory deal analysis',
      'M&A deal structure teardown',
    ],
    faqs: [
      {
        q: 'How much did Lockheed Martin pay for Ultra Maritime?',
        a: 'Lockheed Martin acquired Ultra Maritime from Advent International for $3.45 billion in an all-cash transaction, announced July 6, 2026.',
      },
      {
        q: 'What does Ultra Maritime do?',
        a: 'Ultra Maritime specializes in undersea warfare systems, including sonobuoys, sonar systems, torpedo-defence countermeasures, radar, and autonomous maritime sensing platforms.',
      },
      {
        q: 'How much did Advent International make on the deal?',
        a: "Advent's original 2022 purchase price for Ultra Maritime was never disclosed, so the actual return on investment cannot be calculated. What is known: Advent invested roughly $170 million over four years and grew revenue from $494 million (2023) to an estimated $784 million (2026), about 59% growth in three years.",
      },
      {
        q: 'Why did Lockheed Martin pay an above-market multiple?',
        a: "The deal carries an estimated 22x EBITDA multiple, well above the typical 10-15x range for defense transactions. The premium reflects Ultra Maritime's growth trajectory and sole-source navy contracts, and addresses a 19% profit decline in Lockheed's Rotary and Mission Systems division in Q1 2026.",
      },
      {
        q: 'Why is this deal considered risky for Lockheed Martin?',
        a: "Lockheed paid entirely in cash with no earnout protections, meaning the full purchase price was committed upfront with no structure tying payment to Ultra Maritime's future performance.",
      },
    ],
    about: [
      'Defense industry M&A',
      'Private equity value creation',
      'Deal structure and multiples',
      'Buy-side and sell-side deal analysis',
    ],
    mentions: [
      { name: 'Lockheed Martin', sameAs: 'https://www.lockheedmartin.com' },
      { name: 'Advent International', sameAs: 'https://www.adventinternational.com' },
      { name: 'Ultra Maritime' },
    ],
  },
  'jsw-paints-akzo-nobel-dulux-acquisition-explained': {
    title: 'JSW Paints–Akzo Nobel Deal, Explained',
    subtitle: "How ₹12,915 Crore Bought India's No. 4 Paints Position Overnight",
    description:
      "JSW Paints bought Akzo Nobel India (Dulux) for up to ₹12,915 Cr and became India's No. 4 paints player overnight. Full breakdown of the deal structure, valuation, and buy-vs-build lessons.",
    author: 'Dev Shah',
    datePublished: '2026-08-06',
    dealDate: '2025-06-27',
    category: 'Deal Teardowns',
    readTime: '13 min',
    wordCount: 2900,
    keywords: [
      // Deal-specific
      'JSW Paints Akzo Nobel acquisition',
      'JSW Paints Akzo Nobel deal',
      'JSW Dulux Ltd',
      'Akzo Nobel India acquisition',
      'JSW Paints Dulux deal explained',
      'JSW Paints 12915 crore deal',
      'Akzo Nobel India Dulux sale',
      'JSW Paints Akzo Nobel open offer',
      // Structure angle
      'SPA and open offer India takeover',
      'SEBI SAST open offer formula',
      'mandatory open offer India explained',
      'MNC exit India listed subsidiary',
      'how a foreign parent exits a listed Indian company',
      'control premium vs open offer price India',
      // Sector
      'India paints industry consolidation',
      'Asian Paints Birla Opus JSW Dulux',
      'Indian decorative paints market share',
      'paints industry M&A India 2026',
      // Strategy angle
      'buy versus build strategy M&A',
      'buy vs build case study India',
      'EBITDA multiple paints acquisition',
      'control premium India M&A',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'buy-side M&A advisory India',
      'M&A deal structure analysis India',
      // Long-tail
      'why did JSW Paints buy Akzo Nobel India',
      'how much did JSW pay for Dulux India',
      'JSW Paints market share after Akzo Nobel deal',
      'JSW Paints JSW Dulux merger',
    ],
    faqs: [
      {
        q: 'How much did JSW pay for Akzo Nobel India (Dulux)?',
        a: "Up to ₹12,915 crore (~$1.5 billion) in total — up to ₹8,986 crore for a controlling block bought directly from Akzo Nobel N.V.'s parent entities, plus up to ₹3,929 crore for a mandatory public open offer. The deal closed with JSW holding 61.2% of the company.",
      },
      {
        q: 'Why is JSW Paints now called JSW Dulux Ltd?',
        a: 'After the acquisition closed on December 10, 2025, JSW renamed the company to JSW Dulux Ltd, effective March 11, 2026, to reflect its ownership of the Dulux brand in India.',
      },
      {
        q: 'What market share did JSW gain from the Akzo Nobel deal?',
        a: 'The combined entity holds roughly 7% of the Indian decorative paints market and became the No. 4 player overall, and the No. 2 player in industrial coatings, immediately on closing.',
      },
      {
        q: 'Why did the public shareholders refuse the open offer?',
        a: 'JSW offered ₹3,417.77 per share, but the stock traded above that price throughout the entire offer window. Shareholders bet that a widely expected merger of unlisted JSW Paints into the listed entity would deliver more value than the fixed cash offer. Only 0.44% of the targeted 25.24% stake was tendered.',
      },
      {
        q: 'Is 25x EBITDA expensive for a paints company?',
        a: "It's rich relative to a pure trading multiple, but reasonable against two alternatives: Asian Paints and Berger have historically traded at 40–60x earnings, and Birla Opus spent massive capital to reach a similar ~6–7% share organically, with none of the existing profitability ANIL brought.",
      },
      {
        q: 'What happens next in the JSW Dulux story?',
        a: 'The next major event to watch is the expected merger of unlisted JSW Paints into the now-listed JSW Dulux, anticipated within 2–3 years. The ratio at which that merger happens will determine how much value remaining minority shareholders capture.',
      },
    ],
    about: [
      'JSW Paints Akzo Nobel Dulux acquisition',
      'SPA and open offer deal structure India',
      'MNC exit from an Indian listed subsidiary',
      'Buy-versus-build M&A strategy',
    ],
    mentions: [
      { name: 'JSW Paints Ltd' },
      { name: 'Akzo Nobel India Ltd' },
      { name: 'Akzo Nobel N.V.', sameAs: 'https://www.akzonobel.com' },
      { name: 'Asian Paints', sameAs: 'https://www.asianpaints.com' },
      { name: 'Birla Opus' },
      { name: 'Pidilite' },
    ],
  },
  'coforge-encora-acquisition-explained': {
    title: 'Coforge Bought Encora for $2.35B With Zero Cash',
    subtitle: 'How an All-Stock Preferential Allotment Handed the Sellers 21.8% of the Buyer',
    description:
      "Coforge acquired Silicon Valley's Encora at a $2.35B enterprise value and paid for it entirely in new shares, no cash. Advent International and Warburg Pincus walked away with 21.8% of Coforge and two board seats instead of a $1.89B check. Here's how the preferential allotment worked, why the sellers wanted stock, and what it signals about Indian IT M&A.",
    author: 'Dev Shah',
    datePublished: '2026-08-21',
    dealDate: '2025-12-26',
    category: 'Deal Teardowns',
    readTime: '10 min',
    wordCount: 2400,
    keywords: [
      // Deal-specific
      'Coforge Encora acquisition',
      'Coforge Encora deal explained',
      'Coforge Encora $2.35 billion',
      'Coforge all stock acquisition',
      'Coforge Encora share swap',
      'Advent Warburg Pincus Encora exit',
      'Advent International Encora sale',
      'Warburg Pincus Coforge stake',
      // Structure angle
      'all stock preferential allotment India',
      'preferential allotment M&A India explained',
      'stock for stock acquisition India IT',
      'private equity rollover into listed stock',
      'sponsor rollover acquisition structure',
      'board seats for equity M&A India',
      // Sector
      'Indian IT services M&A 2026',
      'ER&D acquisition India',
      'engineering R&D services M&A',
      'AI-native engineering acquisition',
      'Indian IT mid-cap consolidation',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'M&A deal structure analysis India',
      'buy-side advisory deal analysis India',
      // Long-tail
      'why did Coforge pay in shares for Encora',
      'largest ER&D acquisition Indian IT company',
      'Coforge Encora board seats',
      'Coforge Encora 21.8 percent stake',
    ],
    faqs: [
      {
        q: 'How much did Coforge pay for Encora?',
        a: 'Coforge acquired Encora at a $2.35B enterprise value, with equity consideration of $1.89B (₹17,032.60 Cr) settled entirely in new Coforge shares — no cash changed hands.',
      },
      {
        q: 'Why did Advent and Warburg Pincus take Coforge stock instead of cash?',
        a: "Listed Coforge stock is liquid and can be sold on any trading day, unlike a private Encora stake that would need another negotiated sale. Taking stock also let the sponsors keep exposure to the AI-led engineering shift Encora was built to capture, and the two board seats they received give them influence over the integration that determines what those shares end up being worth.",
      },
      {
        q: 'How much of Coforge do the Encora sellers now own?',
        a: "Advent, Warburg Pincus and minority holders received about 21.8% of Coforge's expanded share capital — 9,37,96,508 new shares issued at ₹1,815.91 each — plus two non-executive board seats held by Advent's Shweta Jalan and Atin Hirachand Jain.",
      },
      {
        q: 'What is a preferential allotment in an M&A deal?',
        a: 'A preferential allotment is when a company issues brand-new shares directly to a chosen party at an agreed price, rather than the buyer paying cash or the seller buying shares on the open market. Because the total consideration here was fixed in rupees, the issue price alone decided how much of Coforge the sellers ended up owning.',
      },
      {
        q: 'Why does this deal matter for Indian IT M&A?',
        a: "It's the largest ER&D (engineering R&D) takeover ever by an Indian IT company, done by a mid-cap rather than a top-tier player, and it shows sponsor rollovers into listed stock becoming a bridge between private and public valuations when cash buyers are hesitant to pay sponsor-level prices.",
      },
    ],
    about: [
      'Coforge Encora acquisition',
      'All-stock preferential allotment structures India',
      'Indian IT services and ER&D consolidation',
      'Private equity rollover exits into listed stock',
    ],
    mentions: [
      { name: 'Coforge Ltd' },
      { name: 'Encora Digital LLC' },
      { name: 'Advent International', sameAs: 'https://www.adventinternational.com' },
      { name: 'Warburg Pincus', sameAs: 'https://www.warburgpincus.com' },
    ],
  },
  'chryscapital-novartis-india-acquisition-explained': {
    title: "ChrysCapital's Novartis India Buyout, Explained",
    subtitle: 'Why the Public Was Offered ₹860.64 a Share — and Only 40 Took It',
    description:
      "ChrysCapital paid ₹1,445.89 Cr for 70.68% of Novartis India, its first pharma buyout in 27 years. The mandatory open offer was priced at ₹860.64 — only 40 shares were tendered. Kautilya's teardown of the deal structure, the two-tier pricing, and what it means for MNC exits in India.",
    author: 'Dev Shah',
    datePublished: '2026-08-28',
    dealDate: '2026-02-19',
    category: 'Deal Teardowns',
    readTime: '6 min',
    wordCount: 2100,
    keywords: [
      // Deal-specific
      'ChrysCapital Novartis India acquisition',
      'ChrysCapital Novartis India deal explained',
      'ChrysCapital Novartis India buyout',
      'Novartis India open offer',
      'Novartis India ChrysCapital 70.68%',
      'WaveRise Investments Novartis India',
      'Novartis AG India exit',
      'Novartis India acquisition 2026',
      // Structure angle
      'mandatory open offer India explained',
      'SEBI takeover code open offer formula',
      'persons acting in concert India takeover',
      'control premium vs open offer price India',
      'MNC exit India listed subsidiary',
      'onshore offshore pricing India M&A',
      'exchange control fair value cap India',
      // Sector
      'private equity pharma buyout India',
      'ChrysCapital Fund X pharma',
      'Indian pharma M&A 2026',
      'India pharma consolidation PE',
      'domestic PE control deal India',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'buy-side advisory deal analysis India',
      'M&A deal structure analysis India',
      // Long-tail
      'why did the Novartis India open offer fail',
      'how much did ChrysCapital pay for Novartis India',
      'ChrysCapital Novartis India shares tendered',
      'listed MNC subsidiary acquisition India',
      'JSW Akzo Nobel Novartis India comparison',
    ],
    faqs: [
      {
        q: 'How much did ChrysCapital pay for Novartis India?',
        a: "ChrysCapital's consortium paid ₹1,445.89 Cr (~$159M) at signing, ₹1,376.8 Cr after closing adjustments, for 70.68% of Novartis India — 1,74,50,680 equity shares. It was announced on February 19, 2026 and closed on July 29, 2026.",
      },
      {
        q: 'Why did the public open offer for Novartis India shares fail?',
        a: 'The mandatory open offer was priced at ₹860.64 a share, a 3.64% premium to the pre-announcement close. The stock hit its upper circuit the next day and traded more than 72% above the offer price during the tender window, so shareholders had no reason to tender. Only 40 of 64,19,608 shares were accepted.',
      },
      {
        q: 'Why did WaveRise pay ₹860.64 a share while ChrysCapital Fund X paid ₹701.25?',
        a: "WaveRise Investments is a Mauritius entity buying from Swiss seller Novartis AG, a non-resident-to-non-resident transfer that sits outside India's exchange-control fair-value cap. ChrysCapital Fund X and Two Infinity Partners are onshore Indian vehicles, subject to that cap. The filings disclose both prices but do not explain the split; this is Kautilya's inference from the structure, not a disclosed reason.",
      },
      {
        q: 'What is a mandatory open offer under Indian takeover rules?',
        a: "When an acquirer buys control of a listed Indian company, SEBI's takeover code requires it to offer public shareholders an exit for at least 26% of the company, at a price set by formula from trading data as of the announcement date. It is a regulatory floor, not a valuation of the business, and consortium members acting in concert are treated as one acquirer — the highest price any of them paid sets the offer price for everyone.",
      },
      {
        q: 'What did Novartis India keep after the sale?',
        a: 'Novartis AG retained Novartis Healthcare Private Ltd, an unlisted entity holding the Hyderabad R&D and clinical-trial operations and the innovative-medicines business, plus a royalty-free licence for Tegrital and a five-year distribution agreement with the newly sold listed entity.',
      },
    ],
    about: [
      'ChrysCapital Novartis India acquisition',
      'Mandatory open offer structure India',
      'Indian pharma private equity buyout',
      'MNC listed subsidiary exit India',
    ],
    mentions: [
      { name: 'ChrysCapital', sameAs: 'https://www.chryscapital.com' },
      { name: 'Novartis India Ltd' },
      { name: 'Novartis AG', sameAs: 'https://www.novartis.com' },
      { name: 'WaveRise Investments' },
      { name: 'Axis Capital', sameAs: 'https://www.axiscapital.co.in' },
    ],
  },
  'sun-pharma-organon-acquisition-explained': {
    title: "Sun Pharma's $11.75B Organon Acquisition, Explained",
    subtitle: "How a Debt-Funded Mega-Deal Became India's Largest Overseas Pharma Buyout",
    description:
      "Sun Pharma is paying $11.75B for Organon, a Merck spin-off, in India's largest-ever overseas pharma acquisition. Only $3.68B is equity; the rest is assumed debt, financed by an 11-bank syndicate that includes an Indian state bank for the first time. Kautilya's deal-structure teardown of the price, the premium, and the financing.",
    author: 'Dev Shah',
    datePublished: '2026-09-10',
    dealDate: '2026-04-26',
    category: 'Deal Teardowns',
    readTime: '6 min',
    wordCount: 2500,
    image: '/images/newsletter/sun-pharma-organon-acquisition/sun-pharma-organon-equity-debt-split.webp',
    keywords: [
      // Deal-specific
      'Sun Pharma Organon acquisition',
      'Sun Pharma Organon deal explained',
      'Sun Pharma $11.75 billion Organon',
      'Sun Pharma Organon acquisition analysis',
      'Organon Sun Pharma merger',
      'largest Indian outbound pharma acquisition',
      'Sun Pharma biosimilars acquisition',
      'Sun Pharma women\'s health acquisition',
      // Structure angle
      'leveraged cross-border acquisition India',
      'reverse triangular merger explained',
      'assumed debt acquisition structure',
      'enterprise value vs equity value M&A',
      'outbound takeover loan India',
      'SBI outbound acquisition financing',
      'RBI reform outbound M&A financing',
      'syndicated bank loan cross-border acquisition',
      // Sector
      'Indian pharma M&A 2026',
      'Indian pharma overseas acquisition',
      'pharma leveraged buyout India',
      'CRISIL rating pharma acquisition',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'buy-side advisory deal analysis India',
      'M&A deal structure analysis India',
      // Long-tail
      'why did Sun Pharma buy Organon',
      'how much debt did Sun Pharma take on for Organon',
      'Sun Pharma Organon premium 24% 60% 103%',
      'Sun Pharma Organon financing syndicate banks',
      'Sun Pharma Ranbaxy Organon deal comparison',
    ],
    faqs: [
      {
        q: 'How much is Sun Pharma paying for Organon?',
        a: 'Sun Pharma agreed to pay $11.75B in enterprise value for Organon, at $14.00 a share in an all-cash deal. Of that, only $3.68B is the equity paid to shareholders; the remaining ~$8.07B is Organon\'s net debt, which Sun assumes as part of the transaction.',
      },
      {
        q: 'Why do different reports quote the premium as 24%, 60%, or 103%?',
        a: 'All three are correct, measured from different reference dates. The 24% figure is against the Friday close before announcement, but that price was already inflated by a leak the day before signing, when Organon\'s stock jumped about 31% on an Economic Times report. The 103% figure is against the April 9 ‘unaffected’ close, before any speculation moved the stock, and is the one Sun and Organon\'s own filings use as the honest denominator.',
      },
      {
        q: 'What role did State Bank of India play in financing the deal?',
        a: 'SBI joined an eleven-bank global syndicate with a commitment of roughly $1B, marking the first time an Indian public-sector bank has helped finance an outbound takeover. This followed a February 2026 RBI reform permitting domestic public-sector banks to lend into overseas acquisitions by Indian companies, a route that was effectively closed to them before.',
      },
      {
        q: 'How much debt is Sun Pharma taking on, and can it carry it?',
        a: 'Sun inherits about $8.6B of Organon\'s debt against $1.9B of EBITDA, roughly 4x leverage standalone. Once combined with Sun Pharma\'s near-debt-free balance sheet, the ratio falls to about 2.3x net debt to EBITDA. CRISIL reaffirmed Sun\'s AAA/Stable rating on August 4, 2026 after modelling the acquisition, and Sun projects about $2.5B of annual free cash flow earmarked for paying the debt down.',
      },
      {
        q: 'When is the Sun Pharma-Organon deal expected to close?',
        a: 'As of this issue (status dated August 24, 2026), the deal is shareholder-approved, cleared by US antitrust regulators, and fully financed, but not yet closed. The remaining step is clearance from the European Commission and other non-US antitrust and FDI regulators, with close expected in early 2027 and an outside date of January 26, 2027.',
      },
    ],
    about: [
      'Sun Pharma Organon acquisition',
      'Leveraged cross-border acquisition structures',
      'Indian outbound pharma M&A',
      'Syndicated acquisition financing',
    ],
    mentions: [
      { name: 'Sun Pharmaceutical Industries Ltd', sameAs: 'https://www.sunpharma.com' },
      { name: 'Organon & Co.', sameAs: 'https://www.organon.com' },
      { name: 'State Bank of India', sameAs: 'https://www.sbi.co.in' },
      { name: 'Merck & Co.' },
      { name: 'CRISIL', sameAs: 'https://www.crisil.com' },
    ],
  },
  'cvc-kkr-healthcare-global-acquisition-explained': {
    title: "CVC's $400M Secondary Sale of HealthCare Global to KKR, Explained",
    subtitle: 'How ₹130 Became ₹445 in Five Years — and Why the Founder Never Sold',
    description:
      "CVC bought HealthCare Global at ₹130 a share in 2020 and handed it to KKR at ₹445 five years later — a $400M deal and a ~3.4x return. No founder cashed out, no business changed what it does. Only the owner did. Kautilya's teardown of India's largest PE-to-PE hospital sale.",
    author: 'Dev Shah',
    datePublished: '2026-09-18',
    dealDate: '2025-02-23',
    category: 'Deal Teardowns',
    readTime: '9 min',
    wordCount: 2250,
    keywords: [
      // Deal-specific
      'CVC KKR HealthCare Global acquisition',
      'CVC KKR HealthCare Global deal explained',
      'KKR HealthCare Global $400 million',
      'HealthCare Global Enterprises acquisition',
      'HCG KKR acquisition explained',
      'CVC Aceso HealthCare Global exit',
      'Aceso Company HCG stake sale',
      'HealthCare Global open offer KKR',
      // Structure angle
      'secondary sale private equity India',
      'PE to PE secondary transaction India',
      'private equity secondary sale healthcare India',
      'mandatory open offer India explained',
      'SEBI takeover code open offer formula',
      'control premium vs open offer price India',
      'sponsor to sponsor exit India M&A',
      // Sector
      'Indian hospital M&A 2025',
      'oncology hospital chain India acquisition',
      'private equity healthcare India',
      'Indian healthcare consolidation PE',
      'KKR Max Healthcare HCG',
      'KKR India healthcare platform',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'buy-side advisory deal analysis India',
      'M&A deal structure analysis India',
      'private equity value creation case study',
      // Long-tail
      'how much did KKR pay for HealthCare Global',
      'CVC HealthCare Global return multiple',
      'why didn\'t HCG founder sell shares',
      'HealthCare Global founder Ajaikumar chairman',
      'largest Indian hospital private equity deal',
    ],
    faqs: [
      {
        q: 'How much did KKR pay for HealthCare Global?',
        a: 'KKR agreed to acquire up to 54% of HealthCare Global Enterprises from CVC\'s Aceso vehicle at ₹445/share, a deal valued at approximately $400M, announced February 23, 2025 and targeted to close by Q3 2025.',
      },
      {
        q: 'What return did CVC make on HealthCare Global?',
        a: "CVC's Aceso vehicle originally invested in HCG in June 2020 at ₹130/share. Selling at ₹445/share roughly five years later implies a return of about 3.4x on the headline share price, or roughly 28% annualised — though this doesn't account for the separate warrant subscription CVC also took at entry, which likely changes its true blended cost basis.",
      },
      {
        q: "Did HealthCare Global's founder sell his shares in this deal?",
        a: "No. Dr B.S. Ajaikumar, HCG's founder, retained a non-executive chairman role focused on clinical and research work. The shares transacted belonged to CVC's Aceso vehicle, which had held majority control since 2020 — the founder's own remaining stake was not part of this sale.",
      },
      {
        q: 'What is a secondary sale in private equity?',
        a: "A secondary sale is when one private equity fund sells its stake in a company to another private equity fund, rather than to a strategic (operating) buyer or via an IPO. The underlying business and its operations typically continue unchanged; what changes is the identity — and the return expectations and hold-period clock — of the controlling shareholder.",
      },
      {
        q: 'Why was the open offer price higher than the price KKR paid CVC?',
        a: "The two prices are set by different mechanisms. KKR's ₹445/share was a bilaterally negotiated control price paid to CVC. The ₹504.41/share open-offer price to public shareholders was calculated under SEBI's takeover-code formula, anchored to historic trading data around the announcement date. There's no requirement that the two align, and in this deal the formula happened to land above the negotiated price.",
      },
      {
        q: "Does this deal connect to KKR's other Indian healthcare investments?",
        a: "Yes. KKR already holds a stake in Max Healthcare, a large multi-specialty Indian hospital network. HCG adds a specialist oncology platform alongside that generalist network, though public filings for this deal don't specify whether the two will be operationally integrated.",
      },
    ],
    about: [
      'Private equity secondary sales India',
      'Indian hospital and oncology M&A',
      'Mandatory open offer structures India',
      'Buy-side deal origination and value creation',
    ],
    mentions: [
      { name: 'KKR', sameAs: 'https://www.kkr.com' },
      { name: 'CVC Capital Partners', sameAs: 'https://www.cvc.com' },
      { name: 'HealthCare Global Enterprises Ltd', sameAs: 'https://www.hcgoncology.com' },
      { name: 'Aceso Company Pte Ltd' },
      { name: 'Max Healthcare' },
    ],
  },
  'cvc-aavas-financiers-acquisition-explained': {
    title: "CVC's Aavas Financiers Buyout, Explained",
    subtitle: 'How a ₹3,425 Cr Block Deal and an Undersubscribed Open Offer Left the Buyer at 48.96%',
    description:
      "CVC paid ₹3,425 Cr for a 26.47% block of Aavas Financiers, then offered the public the same exit — and almost nobody took it. The buyer landed at 48.96%, controlling one of India's largest affordable-housing lenders but short of a majority. Within a year it replaced the CEO and the stock fell about 25%. Kautilya's teardown of the deal structure and what came after.",
    author: 'Dev Shah',
    datePublished: '2026-09-28',
    dealDate: '2024-08-10',
    category: 'Deal Teardowns',
    readTime: '9 min',
    wordCount: 2300,
    keywords: [
      // Deal-specific
      'CVC Aavas Financiers acquisition',
      'CVC Aavas Financiers deal explained',
      'Aavas Financiers CVC stake',
      'Aquilo House Aavas Financiers',
      'CVC Kedaara Partners Group Aavas',
      'Aavas Financiers open offer',
      'Aavas Financiers 48.96% stake',
      'Aavas Financiers new promoter CVC',
      // Structure angle
      'undersubscribed open offer India',
      'mandatory open offer India explained',
      'SEBI takeover code open offer formula',
      'control premium vs open offer price India',
      'private equity control deal India NBFC',
      'promoter change listed NBFC India',
      // Sector
      'affordable housing finance India M&A',
      'Indian NBFC private equity buyout',
      'housing finance company acquisition India',
      'private equity NBFC control India',
      // CEO / governance angle
      'CEO change after private equity buyout India',
      'Aavas Financiers CEO resignation',
      'Sachinder Bhinder Aavas Financiers',
      'Manu Singh Aavas Financiers CEO',
      'RBI approval NBFC CEO change',
      // Advisory angle
      'Kautilya deal teardown',
      'Kautilya newsletter M&A India',
      'India deal sheet newsletter',
      'buy-side advisory deal analysis India',
      'M&A deal structure analysis India',
      // Long-tail
      'why did Aavas Financiers stock fall',
      'how much did CVC pay for Aavas Financiers',
      'largest housing finance buyout India',
      'PE buyout NBFC governance risk India',
    ],
    faqs: [
      {
        q: 'How much did CVC pay for its stake in Aavas Financiers?',
        a: "CVC, via its SPV Aquilo House Pte Ltd, paid ₹3,425 Cr for a 26.47% block from Kedaara Capital and an affiliate of Partners Group, announced August 10, 2024. A subsequent mandatory open offer at ₹1,767/share for a further 26% closed on March 21, 2025 with only about 22.5% tendered, taking CVC's total stake to 48.96%.",
      },
      {
        q: "Why didn't CVC end up with a majority of Aavas Financiers?",
        a: "CVC's mandatory open offer for an additional 26% was undersubscribed — only about 22.5% of shares were tendered, not the full 26% on offer. Combined with its 26.47% block purchase, that left CVC at 48.96%, just short of a clean 50%-plus-one majority, even though it became the company's controlling promoter.",
      },
      {
        q: 'Why did Aavas Financiers replace its CEO after the CVC deal?',
        a: "MD & CEO Sachinderpalsingh Bhinder resigned effective April 20, 2026, officially citing professional and personal commitments, though reports at the time pointed to performance concerns raised by CVC as the actual driver. Manu Yeshpal Singh, previously head of home loans at Kotak Mahindra Bank, was approved to succeed him effective April 21, 2026, subject to RBI and shareholder approval.",
      },
      {
        q: "Why did Aavas Financiers' stock fall after the CVC takeover?",
        a: "Shares fell roughly 25% in the months around the CEO transition, a common market reaction to leadership uncertainty at a lender. At least one analyst house, JM Financial, has pointed to an expected recovery in subsequent quarters, suggesting the fall reflects near-term disruption rather than a settled verdict on the underlying deal economics.",
      },
      {
        q: 'What is an undersubscribed open offer in an Indian takeover?',
        a: "It's when fewer shares are tendered into a mandatory open offer than the maximum the acquirer offered to buy — typically because public shareholders believe the stock is worth more than the formula-set offer price, or because they'd rather stay invested under the new owner. The acquirer simply ends up with a smaller stake than it structured for; there's no mechanism to force the remaining shares into the offer.",
      },
    ],
    about: [
      'Private equity control deals in Indian NBFCs',
      'Affordable housing finance M&A India',
      'Mandatory open offer structures India',
      'Post-buyout governance and leadership change',
    ],
    mentions: [
      { name: 'CVC Capital Partners', sameAs: 'https://www.cvc.com' },
      { name: 'Aavas Financiers Ltd', sameAs: 'https://www.aavas.in' },
      { name: 'Kedaara Capital', sameAs: 'https://www.kedaara.com' },
      { name: 'Partners Group', sameAs: 'https://www.partnersgroup.com' },
      { name: 'Aquilo House Pte Ltd' },
    ],
  },
  'everstone-wingify-bootstrapped-buyout-400-500m-platform': {
    title: 'Everstone and Wingify: $200M Bootstrapped Buyout to $400–500M Platform',
    description: 'Everstone paid about $200M for 80% of bootstrapped Wingify (VWO), then bought a startup, merged with AB Tasty and led a $150M rights issue within a year.',
    author: 'Kautilya PE',
    datePublished: '2026-09-30',
    dealDate: '2025-01-24',
    category: 'Deal Teardowns',
    readTime: '13 min',
    wordCount: 3665,
    keywords: [
      'Everstone Wingify',
      'Wingify acquisition',
      'VWO acquisition',
      'Everstone Capital',
      'Wingify AB Tasty merger',
      'Paras Chopra exit',
      'bootstrapped SaaS exit India',
      'buy-and-build strategy',
      'Indian SaaS private equity',
      'platform strategy M&A',
      'management buyout with sponsor',
      'rights issue primary capital',
      'SaaS valuation revenue multiple',
      'India deal teardown',
    ],
    faqs: [
      {
        q: 'How much did Everstone pay for Wingify?',
        a: 'Everstone paid roughly $200M, all cash, for 80% of Wingify, about four times the $50M of annual recurring revenue. The figure is press-reported and confirmed by the founder, not in official filings.',
      },
      {
        q: 'Who owns Wingify after the deal?',
        a: 'After dilution, per the March 2025 RoC filing, Everstone holds 76.84%, founder Paras Chopra 10.45%, Vyom Mankekar 5.07% and CEO Sparsh Gupta 4.86%. Chopra also kept a board seat but has no operating role.',
      },
      {
        q: 'What did Everstone do with Wingify after buying it?',
        a: 'In December 2025 Wingify acquired Blitzllama, an AI user-research startup and its first acquisition. In January 2026 it merged with AB Tasty of Paris to pass $100M of combined revenue. In April 2026 a ₹ 1,381 Cr ($150M) rights issue led by Everstone funded the build.',
      },
      {
        q: 'What is a buy-and-build or platform strategy?',
        a: 'It means buying a solid company not to run it unchanged, but to use it as the base for acquiring others and building scale. The first deal supplies the product, the customers and the team; the return is expected to come from what gets built on top of it.',
      },
      {
        q: 'Why does the $150M rights issue matter?',
        a: 'It put new money into the company rather than into selling shareholders\' pockets, and Everstone led it at ₹ 8,590 a share. Primary capital funds the build, so a sponsor leading a primary raise soon after buying is committing to the growth plan.',
      },
    ],
    about: [
      'Everstone Capital',
      'Wingify',
      'VWO',
      'AB Tasty',
      'Blitzllama',
    ],
    mentions: [
      { name: 'Everstone Capital' },
      { name: 'Wingify' },
      { name: 'AB Tasty' },
      { name: 'Blitzllama' },
    ],
  },
};
