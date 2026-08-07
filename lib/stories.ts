export const STORY_SLUGS = [
  'borderless',
  'dino-games',
  'runify',
  'edition-zero',
  'sourcely',
  'pocket-fund',
  'review',
  'college-startups',
  'pocket-deals',
  'deal-sourcing',
  'diamonds',
  'search-funds',
  '200k-deals',
  'smartprompt',
  'inspire3',
  'msp-buy-side-diligence',
] as const;

export type StorySlug = (typeof STORY_SLUGS)[number];

export type StoryMeta = {
  title: string;
  description: string;
  author: string;
  datePublished?: string;
  image?: string;
};

export const STORY_META: Record<StorySlug, StoryMeta> = {
  'borderless': {
    title: 'Rewriting the M&A Playbook for UK Immigration',
    description: 'How Kautilya built a proprietary off-market deal pipeline for a UK immigration platform, in a market that doesn\'t run on public listings or brokers.',
    author: 'Dev Shah',
  },
  'dino-games': {
    title: 'Dino Games: Sourcing a Cash-Flow-Positive Mobile Game',
    description: 'From off-market discovery to operator deployment in 8 weeks: Kautilya closed a cash-flow-positive mobile game with 8M installs at a 1.1x multiple.',
    author: 'Dev Shah',
  },
  'runify': {
    title: 'Runify: Structuring a Mobile App Acquisition',
    description: 'How Kautilya sourced, diligenced, and structured a mobile app acquisition with only $20K deployed at close, and the financing structure behind it.',
    author: 'Dev Shah',
  },
  'edition-zero': {
    title: 'Edition Zero: How This Is Bizness Began',
    description: 'The origin story of Kautilya\'s weekly newsletter, built around the practice of buying and operating small businesses off-market.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-zero.jpeg',
  },
  'sourcely': {
    title: 'My First Bizness Acquisition: An AI Student Tool with $500 MRR for $4K',
    description: 'How Kautilya found, bought, and grew Sourcely, an AI student tool, from $500 MRR to $4.5K MRR in five months, the firm\'s first acquisition.',
    author: 'Dev Shah',
    datePublished: '2023-06-09',
    image: '/images/stories/sourcely/logo_sourcely.png',
  },
  'review': {
    title: '2023 Review + 2024 Goals',
    description: 'A year in review: Sourcely grew to a $150K+ valuation in five months, a VC internship in San Francisco followed, and Kautilya went all in on acquisitions.',
    author: 'Dev Shah',
    datePublished: '2024-01-16',
  },
  'pocket-fund': {
    title: 'The Pocket Fund: A Student-Led Acquisition Fund',
    description: 'The Pocket Fund: how a $5,000 search fund became the model for buying, operating, and selling small, cash-flowing online businesses.',
    author: 'Dev Shah',
  },
  'college-startups': {
    title: '10 Reasons Why Now Is the Best Time to Start a Business in College',
    description: 'Ten reasons why lower startup costs, AI tooling, and a generation-wide shift toward entrepreneurship make now the best time to start a business in college.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-college.jpeg',
  },
  'pocket-deals': {
    title: 'Pocket Deals #1: A $15K Micro-SaaS for Autism Support',
    description: 'Breaking down a niche iOS app for autism support listed at $15,000, sourcing, deal quality, and what made it worth a closer look.',
    author: 'Dev Shah',
  },
  'deal-sourcing': {
    title: 'My Morning Routine Is Looking at Acquire.com for 30 Minutes',
    description: 'Five practical strategies Kautilya uses to filter quality off-market deals from marketplace noise, drawn from reviewing 30-50 deals every week.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-acquire.jpeg',
  },
  'diamonds': {
    title: 'How to Find Diamonds in the Rough',
    description: 'Why the best acquisitions are businesses previous owners failed to monetize, and how Kautilya finds these overlooked, undervalued targets off-market.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-thisisbiz.jpeg',
  },
  'search-funds': {
    title: 'The Rise of Search Funds',
    description: 'How the search fund, a financing model that originated at Stanford in the 1980s, became a distinct asset class for buying and operating small businesses.',
    author: 'Dev Shah',
  },
  '200k-deals': {
    title: 'How We Closed $200K Worth of Deals in 6 Months',
    description: 'How Kautilya closed $200K worth of advisory deals in six months with an eleven-person team, and the shift from buying businesses to advising other buyers.',
    author: 'Dev Shah',
    image: '/images/blogs/edition-200k.jpeg',
  },
  'smartprompt': {
    title: 'SmartPrompt: Two Deals Killed, One Asset Acquired',
    description: 'How Kautilya closed a GPT-native education platform at a 200x discount to market comparables, after two prior deals were killed during due diligence.',
    author: 'Dev Shah',
  },
  'inspire3': {
    title: 'Inspire3: Full-Scope DD on a $1.8M Digital Wellness Portfolio',
    description: 'Full-scope forensic due diligence on a $1.8M digital wellness portfolio: 30,134 transactions audited across 19 websites in under 15 days.',
    author: 'Dev Shah',
  },
  'msp-buy-side-diligence': {
    title: 'Confidential MSP: Buy-Side DD on a $21M Managed-Services Business',
    description: 'Kautilya rebuilt an MSP\'s economics from 303 agreements and 51,063 time entries — turning a distrusted 32% blend into a defensible 45% recurring margin.',
    author: 'Dev Shah',
    datePublished: '2026-07-04',
    image: '/images/Dev.jpeg',
  },
};
