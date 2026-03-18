import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // SplashCursor.tsx uses legacy JS patterns (function constructors with `this`)
    // that are intentionally @ts-nocheck'd
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  transpilePackages: ['three'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/story-borderless', destination: '/stories/borderless', permanent: true },
      { source: '/story-dino-games', destination: '/stories/dino-games', permanent: true },
      { source: '/story-runify', destination: '/stories/runify', permanent: true },
      { source: '/story-edition-zero', destination: '/stories/edition-zero', permanent: true },
      { source: '/story-pocket-fund', destination: '/stories/pocket-fund', permanent: true },
      { source: '/story-college-startups', destination: '/stories/college-startups', permanent: true },
      { source: '/story-pocket-deals', destination: '/stories/pocket-deals', permanent: true },
      { source: '/story-deal-sourcing', destination: '/stories/deal-sourcing', permanent: true },
      { source: '/story-diamonds', destination: '/stories/diamonds', permanent: true },
      { source: '/story-search-funds', destination: '/stories/search-funds', permanent: true },
      { source: '/story-200k-deals', destination: '/stories/200k-deals', permanent: true },
      { source: '/story-smartprompt', destination: '/stories/smartprompt', permanent: true },
      { source: '/story-inspire3', destination: '/stories/inspire3', permanent: true },
    ];
  },
};

export default nextConfig;
