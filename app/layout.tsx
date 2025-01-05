import '@/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { baseUrl } from '@/sitemap'

import { siteConfig } from './config/site'

import type { Metadata } from 'next'

import Footer from '@/components/footer'
import { Navbar } from '@/components/nav'
import { getThemeScript } from '@/lib/getThemeScript'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: siteConfig.title,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
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
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script
          key="theme-script"
          dangerouslySetInnerHTML={{
            __html: getThemeScript(),
          }}
        />
      </head>
      <body>
        <main className="max-w-2xl mx-auto min-h-screen flex flex-col pt-3 md:pt-6">
          <div className="flex flex-col flex-1 px-4 sm:px-6 md:px-4">
            <Navbar />
            <div className="mt-6 flex-1">{children}</div>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
