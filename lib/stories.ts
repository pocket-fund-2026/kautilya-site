export const STORY_SLUGS = [
  'borderless',
  'dino-games',
  'runify',
  'edition-zero',
  'pocket-fund',
  'college-startups',
  'pocket-deals',
  'deal-sourcing',
  'diamonds',
  'search-funds',
  '200k-deals',
  'smartprompt',
  'inspire3',
] as const;

export type StorySlug = (typeof STORY_SLUGS)[number];

export const STORY_META: Record<StorySlug, { title: string; description: string }> = {
  'borderless': {
    title: 'Borderless: Rewriting the M&A Playbook for UK Immigration',
    description: 'How Kautilya built a proprietary deal pipeline in a market that doesn\'t do deals.',
  },
  'dino-games': {
    title: 'Dino Games: Sourcing a Cash-Flow-Positive Mobile Game',
    description: 'From off-market discovery to operator deployment in 8 weeks.',
  },
  'runify': {
    title: 'Runify: Structuring a Mobile App Acquisition',
    description: 'Sourced, diligenced, and structured a mobile app acquisition with only $20K deployed at close.',
  },
  'edition-zero': {
    title: 'Edition Zero: How This Is Bizness Began',
    description: 'The origin story of a weekly newsletter built around buying small businesses.',
  },
  'pocket-fund': {
    title: 'The Pocket Fund: A Student-Led Acquisition Fund',
    description: 'A $5,000 search fund buying, operating, and selling small online businesses.',
  },
  'college-startups': {
    title: '10 Reasons Why Now Is the Best Time to Start a Business in College',
    description: 'Reduced startup costs, AI tools, and a generation-wide shift toward entrepreneurship.',
  },
  'pocket-deals': {
    title: 'Pocket Deals #1: A $15K Micro-SaaS for Autism Support',
    description: 'Breaking down a niche iOS app listed at $15,000.',
  },
  'deal-sourcing': {
    title: 'My Morning Routine Is Looking at Acquire.com for 30 Minutes',
    description: 'Five practical strategies for filtering quality deals from marketplace noise.',
  },
  'diamonds': {
    title: 'How to Find Diamonds in the Rough',
    description: 'The best acquisitions are businesses that previous owners failed to monetise.',
  },
  'search-funds': {
    title: 'The Rise of Search Funds',
    description: 'How a Stanford model from the 1980s became a distinct asset class.',
  },
  '200k-deals': {
    title: 'How We Closed $200K Worth of Deals in 6 Months',
    description: 'Five advisory deals, an eleven-person team, and the shift from buying to advising.',
  },
  'smartprompt': {
    title: 'SmartPrompt: Two Deals Killed, One Asset Acquired',
    description: 'Closed a GPT-native education platform at a 200x discount to market comparables.',
  },
  'inspire3': {
    title: 'Inspire3: Full-Scope DD on a $1.8M Digital Wellness Portfolio',
    description: '30,134 transactions audited across 19 websites in under 15 days.',
  },
};
