import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'The Datapedia — AI-Ready Data Strategy & Architecture',
  description:
    'The practitioner resource for AI-Ready Data. Strategy, architecture, and acceleration for enterprise data & AI initiatives.',
  metadataBase: new URL('https://thedatapedia.com'),
  openGraph: {
    title: 'The Datapedia — AI-Ready Data Strategy & Architecture',
    description: 'Is your data ready for AI? Find out with our free 23-dimension assessment.',
    url: 'https://thedatapedia.com',
    siteName: 'The Datapedia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheDatapedia',
    description: 'AI-Ready Data Strategy, Architecture & Acceleration.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${ibmMono.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TEGTL6EC3B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TEGTL6EC3B');
          `}
        </Script>
      </head>
      <body className="bg-paper text-ink font-sans antialiased">{children}</body>
    </html>
  )
}
