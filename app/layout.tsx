import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SplashCursorWrapper from '@/components/SplashCursorWrapper';
import NewsletterPopup from '@/components/NewsletterPopup';
import SmoothScroll from '@/components/SmoothScroll';
import { LogoDefs } from '@/components/KautilyaLogo';
import './globals.css';
import './brand-theme.css';

// Brand typography (guidelines 2.1–2.5): Gotham (display) and Arboria (secondary) are licensed Adobe fonts and are not bundled;
// Poppins is the guideline-approved fallback. --font-fraunces / --font-lora are kept as the display / body font variables so
// the existing styles pick up the new stacks (see :root in globals.css, where Gotham / Arboria are tried first).
const poppins = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kautilya-pe.com'),
  title: {
    default: 'Kautilya | Buy-Side M&A Advisory & Off-Market Deal Sourcing',
    template: 'Kautilya | %s',
  },
  description:
    'Kautilya builds proprietary acquisition pipelines for private equity funds, search funds, family offices and holding companies. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  authors: [{ name: 'Kautilya', url: 'https://www.kautilya-pe.com' }],
  creator: 'Kautilya',
  publisher: 'Kautilya',
  category: 'Finance & M&A Advisory',
  alternates: {
    canonical: 'https://www.kautilya-pe.com',
    languages: {
      'en': 'https://www.kautilya-pe.com',
      'x-default': 'https://www.kautilya-pe.com',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '400x400' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: 'Kautilya',
    statusBarStyle: 'black-translucent',
  },
  verification: {
    google: 'google70b4b94502d91da5',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kautilya-pe.com',
    siteName: 'Kautilya',
    title: 'Kautilya | Buy-Side M&A Advisory & Off-Market Deal Sourcing',
    description:
      'Kautilya builds proprietary acquisition pipelines for private equity funds, search funds, family offices and holding companies. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Kautilya | Buy-Side Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kautilya | Buy-Side M&A Advisory & Off-Market Deal Sourcing',
    description:
      'Kautilya builds proprietary acquisition pipelines for private equity funds, search funds, family offices and holding companies. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    /* Dublin Core */
    'DC.title': 'Kautilya | Buy-Side M&A Advisory & Off-Market Deal Sourcing',
    'DC.creator': 'Dev Shah',
    'DC.subject': 'Buy-Side M&A Advisory, Deal Sourcing, Private Equity, Business Acquisition, India',
    'DC.description': 'Kautilya builds proprietary acquisition pipelines for private equity funds, search funds, family offices and holding companies. Off-market sourcing, forensic due diligence, mandate to close.',
    'DC.publisher': 'Kautilya',
    'DC.contributor': 'Kautilya Team',
    'DC.date': '2026',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.language': 'en',
    'DC.rights': '© 2026 Kautilya. All rights reserved.',
    'DC.coverage': 'India, United States, United Arab Emirates, United Kingdom, Europe, Asia-Pacific',
    /* Standard hidden SEO meta */
    subject: 'Buy-side M&A advisory and proprietary deal sourcing for private equity funds, search funds, family offices and holding companies',
    topic: 'M&A Advisory, Private Equity, Business Acquisition, Deal Sourcing',
    classification: 'Finance / M&A Advisory / Private Equity',
    abstract: 'Kautilya is a Mumbai-based buy-side M&A advisory. It finds, diligences and closes off-market acquisitions from $500K to $10M for private equity funds, search funds, family offices and holding companies.',
    target: 'Private equity funds, search funds, family offices and holding companies',
    'reply-to': 'DealDesk@kautilya.pe',
    owner: 'Kautilya',
    'revisit-after': '7 days',
    language: 'English',
    coverage: 'India, US, UAE, UK, Europe, Asia-Pacific',
    distribution: 'Global',
    rating: 'General',
    /* Mobile */
    HandheldFriendly: 'True',
    MobileOptimized: '320',
    /* Geo */
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbai',
    'geo.position': '19.0760;72.8777',
    ICBM: '19.0760, 72.8777',
    /* Business */
    'business:contact_data:email': 'DealDesk@kautilya.pe',
    'business:contact_data:locality': 'Mumbai',
    'business:contact_data:country_name': 'India',
    /* OG extras */
    'og:locale:alternate': 'en_GB',
    'og:email': 'DealDesk@kautilya.pe',
    'og:country-name': 'India',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="search" type="application/opensearchdescription+xml" title="Kautilya" href="/opensearch.xml" />
        <link rel="alternate" type="application/rss+xml" title="Kautilya Stories" href="/rss.xml" />
        <meta name="theme-color" content="#ffffff" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KGENMTGL7K" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KGENMTGL7K');
          `}
        </Script>
      </head>
      <body>
        <LogoDefs />
        <SmoothScroll />
        <SplashCursorWrapper />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <NewsletterPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
