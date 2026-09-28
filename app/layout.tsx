import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Lato, Mulish } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mulish',
})

export const metadata: Metadata = {
  title: {
    default: 'Modeling Opportunities at The Model Future',
    template: '%s | The Model Future',
  },
  description:
    'The Model Future scouts and signs unique faces and strong characters, including curvy models, and develops their careers at an international level.',
  metadataBase: new URL('https://www.themodelfuture.com'),
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${mulish.variable} bg-background`}>
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
