import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
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
  title: 'TheDatapedia — AI-Ready Data Strategy & Architecture',
  description:
    'The practitioner resource for AI-Ready Data. Strategy, architecture, and acceleration for enterprise data & AI initiatives.',
  metadataBase: new URL('https://thedatapedia.com'),
  openGraph: {
    title: 'TheDatapedia — AI-Ready Data Strategy & Architecture',
    description: 'Is your data ready for AI? Find out with our free 23-dimension assessment.',
    url: 'https://thedatapedia.com',
    siteName: 'TheDatapedia',
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
      <body className="bg-paper text-ink font-sans antialiased">{children}</body>
    </html>
  )
}
