import '@/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { baseUrl } from '@/sitemap'

import { WebsiteJsonLd } from './components/website-jsonld'
import { siteConfig } from './config/site'

import type { Metadata } from 'next'

import Footer from '@/components/footer'
import { Navbar } from '@/components/nav'
import { getThemeScript } from '@/lib/theme'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: siteConfig.title,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: baseUrl }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  alternates: {
    canonical: baseUrl,
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/custom-icon.png',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: baseUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
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
}
const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-gray-900',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <WebsiteJsonLd />
        <script
          key="theme-script"
          dangerouslySetInnerHTML={{
            __html: getThemeScript(),
          }}
        />
        <meta
          name="google-site-verification"
          content="4fQqzOmSxlzOHj1YK4dyxM851woj4dr5wYumsZE3Wqs"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1 w-full">
            <div className="max-w-7xl mx-auto min-h-screen flex flex-col pt-16 md:pt-20">
              <div className="flex flex-col flex-1 px-4 sm:px-8 md:px-12 lg:px-8">
                <div className="flex-1">{children}</div>
                <div className="mt-12 md:mt-16 lg:mt-20">
                  <Footer />
                </div>
              </div>
            </div>
          </main>

          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
