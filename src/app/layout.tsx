import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://thinkers.team'),
  title: 'Thinkers - Create Your Perfect AI Conversation Partner',
  description: 'Design custom AI personalities, chat naturally, and explore endless conversations with Thinkers. Privacy-first AI conversation platform.',
  keywords: ['AI conversation', 'custom AI personalities', 'AI chat platform', 'personalized AI assistant', 'private AI conversations'],
  authors: [{ name: 'Thinkers Team' }],
  creator: 'Thinkers',
  publisher: 'Thinkers',
  openGraph: {
    title: 'Thinkers - Create Your Perfect AI Conversation Partner',
    description: 'Design custom AI personalities, chat naturally, and explore endless conversations with Thinkers.',
    url: 'https://thinkers.team',
    siteName: 'Thinkers',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Thinkers - AI Conversation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thinkers - Create Your Perfect AI Conversation Partner',
    description: 'Design custom AI personalities, chat naturally, and explore endless conversations with Thinkers.',
    images: ['/og-image.png'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 