export const NEWSLETTER_SLUGS = [
  'torrent-jb-chemicals-pharma-valuation',
  'aurum-housing-com-acquisition',
  'lockheed-ultra-maritime-acquisition-teardown',
  'jsw-paints-akzo-nobel-dulux-acquisition-explained',
  'coforge-encora-acquisition-explained',
  'chryscapital-novartis-india-acquisition-explained',
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
};
