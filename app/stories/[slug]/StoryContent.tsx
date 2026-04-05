"use client";
import dynamic from 'next/dynamic';

const storyComponents: Record<string, React.ComponentType> = {
  'borderless': dynamic(() => import('@/components/stories/StoryBorderless')),
  'dino-games': dynamic(() => import('@/components/stories/StoryDinoGames')),
  'runify': dynamic(() => import('@/components/stories/StoryRunify')),
  'edition-zero': dynamic(() => import('@/components/stories/StoryEditionZero')),
  'sourcely': dynamic(() => import('@/components/stories/StorySourcely')),
  'pocket-fund': dynamic(() => import('@/components/stories/StoryPocketFund')),
  'review': dynamic(() => import('@/components/stories/StoryReview')),
  'college-startups': dynamic(() => import('@/components/stories/StoryCollegeStartups')),
  'pocket-deals': dynamic(() => import('@/components/stories/StoryPocketDeals')),
  'deal-sourcing': dynamic(() => import('@/components/stories/StoryDealSourcing')),
  'diamonds': dynamic(() => import('@/components/stories/StoryDiamonds')),
  'search-funds': dynamic(() => import('@/components/stories/StorySearchFunds')),
  '200k-deals': dynamic(() => import('@/components/stories/Story200kDeals')),
  'smartprompt': dynamic(() => import('@/components/stories/StorySmartPrompt')),
  'inspire3': dynamic(() => import('@/components/stories/StoryInspire3')),
};

export default function StoryContent({ slug }: { slug: string }) {
  const Component = storyComponents[slug];
  if (!Component) return null;
  return <Component />;
}
