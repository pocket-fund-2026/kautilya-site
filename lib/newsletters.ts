export const NEWSLETTER_SLUGS = [
  'torrent-jb-chemicals-pharma-valuation',
  'aurum-housing-com-acquisition',
  'lockheed-ultra-maritime-acquisition-teardown',
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
};
