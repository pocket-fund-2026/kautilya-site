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
