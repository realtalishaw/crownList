import { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: {
    default: 'The Crown List',
    template: '%s | The Crown List'
  },
  description: 'The premier directory for pageants, contestants, and industry professionals. Find competitions, coaches, vendors, and everything you need in the pageant world.',
  keywords: ['pageant directory', 'beauty pageants', 'pageant professionals', 'pageant vendors', 'pageant coaches', 'crown list', 'pageant industry'],
  authors: [{ name: 'The Crown List' }],
  creator: 'The Crown List',
  publisher: 'The Crown List',
  robots: 'index, follow',
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thecrownlist.com',
    siteName: 'The Crown List',
    title: 'The Crown List - Pageant Industry Directory',
    description: 'The premier directory for pageants, contestants, and industry professionals. Find competitions, coaches, vendors, and everything you need in the pageant world.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Crown List - Pageant Industry Directory'
      }
    ]
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'The Crown List - Pageant Industry Directory',
    description: 'The premier directory for pageants, contestants, and industry professionals. Find competitions, coaches, vendors, and everything you need in the pageant world.',
    images: ['/og-image.png'],
    creator: '@thecrownlist'
  },
  
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default defaultMetadata 