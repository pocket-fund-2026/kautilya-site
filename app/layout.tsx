import type { Metadata, Viewport } from 'next';
import { Cormorant, Lora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SplashCursorWrapper from '@/components/SplashCursorWrapper';
import NewsletterPopup from '@/components/NewsletterPopup';
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
    default: 'Kautilya — Buy-Side Advisory',
    template: '%s — Kautilya',
  },
  description:
    'Buy-side advisory that constructs proprietary acquisition pipelines on demand — in any sector, against any criteria, from first principles.',
  keywords: ['buy-side advisory', 'deal sourcing', 'M&A', 'acquisition pipeline', 'Kautilya', 'private equity', 'search fund'],
  authors: [{ name: 'Kautilya' }],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kautilya-pe.com',
    siteName: 'Kautilya',
    title: 'Kautilya — Buy-Side Advisory',
    description:
      'Buy-side advisory that constructs proprietary acquisition pipelines on demand — in any sector, against any criteria, from first principles.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Kautilya — Buy-Side Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kautilya — Buy-Side Advisory',
    description:
      'Buy-side advisory that constructs proprietary acquisition pipelines on demand — in any sector, against any criteria, from first principles.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
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
