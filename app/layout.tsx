import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Cormorant, Lora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SplashCursorWrapper from '@/components/SplashCursorWrapper';
import NewsletterPopup from '@/components/NewsletterPopup';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-lora',
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
    default: 'Kautilya | Buy-Side M&A Advisory | Proprietary Deal Sourcing',
    template: 'Kautilya | %s',
  },
  description:
    'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
  keywords: [
    'buy-side advisory', 'deal sourcing', 'M&A advisory India', 'acquisition pipeline',
    'Kautilya', 'Kautilya PE', 'Kautilya advisory', 'micro private equity',
    'off-market deal sourcing', 'search fund India', 'ETA India',
    'acquisition entrepreneurship', 'business acquisition India',
    'buy a business India', 'forensic due diligence', 'buy-side M&A',
    'proprietary deal flow', 'family office advisory', 'PE advisory India',
    'mandate to close', 'business broker India', 'acquisition advisory',
    'Kautilya M&A', 'Kautilya deal sourcing', 'Kautilya acquisition',
    'India M&A advisory', 'Indian M&A market', 'India acquisition market',
    'buy profitable business India', 'cash flowing business India',
    'recurring revenue business India', 'holdco India', 'HoldCo acquisition India',
    'roll-up acquisitions India', 'buy and build strategy India',
    'acquisition firm India', 'M&A firm India', 'deal flow India',
    'off-market business sale India', 'acquire a business India',
    'acquisition advisory firm', 'buy-side M&A firm', 'M&A consultant India',
    'small business acquisition India', 'SME acquisition India', 'online business acquisition India',
    'VC advisory India', 'private equity deal sourcing India',
    'family office acquisition India', 'business buyer India',
    'startup acquisition India', 'digital business acquisition India',
    'proprietary pipeline India', 'micro PE India', 'mandated buy-side search',
    'acquisition thesis India', 'India M&A market 2026', 'off-market M&A India',
  ],
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
    icon: '/icon.svg',
    apple: '/icon.svg',
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
    title: 'Kautilya | Buy-Side M&A Advisory | Proprietary Deal Sourcing',
    description:
      'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
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
    site: '@microsearchfund',
    creator: '@microsearchfund',
    title: 'Kautilya | Buy-Side M&A Advisory | Proprietary Deal Sourcing',
    description:
      'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Sector-agnostic off-market sourcing, forensic due diligence, mandate to close.',
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
    'DC.title': 'Kautilya | Buy-Side M&A Advisory | Proprietary Deal Sourcing',
    'DC.creator': 'Dev Shah',
    'DC.subject': 'Buy-Side M&A Advisory, Deal Sourcing, Private Equity, Business Acquisition, India',
    'DC.description': 'Kautilya builds proprietary acquisition pipelines for PE, VC, and family office buyers. Off-market sourcing, forensic due diligence, mandate to close.',
    'DC.publisher': 'Kautilya',
    'DC.contributor': 'Kautilya Team',
    'DC.date': '2026',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.language': 'en',
    'DC.rights': '© 2026 Kautilya. All rights reserved.',
    'DC.coverage': 'India, United States, United Arab Emirates, United Kingdom, Europe, Asia-Pacific',
    /* Standard hidden SEO meta */
    subject: 'Buy-side M&A advisory and proprietary deal sourcing for PE, VC, and family office buyers in India',
    topic: 'M&A Advisory, Private Equity, Business Acquisition, Deal Sourcing',
    classification: 'Finance / M&A Advisory / Private Equity',
    abstract: 'Kautilya is a buy-side M&A advisory firm that constructs proprietary acquisition pipelines on demand — sector-agnostic, off-market, from first principles.',
    target: 'PE funds, VC firms, family offices, search fund operators, acquisition entrepreneurs, first-time buyers',
    'reply-to': 'contact@kautilya-pe.com',
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
    'business:contact_data:email': 'contact@kautilya-pe.com',
    'business:contact_data:locality': 'Mumbai',
    'business:contact_data:country_name': 'India',
    /* OG extras */
    'og:locale:alternate': 'en_GB',
    'og:email': 'contact@kautilya-pe.com',
    'og:country-name': 'India',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable}`}>
      <head>
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
        <SmoothScroll />
        <SplashCursorWrapper />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <NewsletterPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
