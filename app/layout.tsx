import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sillygoosepottery.com'),
  title: {
    default: 'Silly Goose Pottery | Handthrown Ceramics · Denver, CO',
    template: '%s | Silly Goose Pottery',
  },
  description: 'Handthrown, one-of-a-kind pottery made in Denver, Colorado. Shop wheel-thrown bowls, mugs, plates, and cups — or order a custom ceramic set for your home, café, or restaurant. Every piece is glazed and fired by hand.',
  keywords: [
    'handthrown pottery', 'ceramics Denver', 'handmade pottery Colorado',
    'wheel thrown pottery', 'custom ceramics', 'pottery Denver CO',
    'handmade ceramic mugs', 'ceramic bowls Denver', 'pottery commissions',
    'café ceramics', 'restaurant tableware', 'custom tableware Colorado',
    'wholesale pottery', 'handmade gifts Denver', 'stoneware pottery',
  ],
  openGraph: {
    title: 'Silly Goose Pottery | Handthrown Ceramics · Denver, CO',
    description: 'Handthrown, one-of-a-kind pottery made in Denver, Colorado. Custom ceramic sets for homes, cafés, and restaurants.',
    url: 'https://sillygoosepottery.com',
    siteName: 'Silly Goose Pottery',
    images: [
      {
        url: '/p3_incense_holders_set.jpg',
        width: 900,
        height: 900,
        alt: 'Handthrown flower incense holders by Silly Goose Pottery, Denver CO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silly Goose Pottery | Handthrown Ceramics · Denver, CO',
    description: 'Handthrown, one-of-a-kind pottery made in Denver, Colorado. Custom ceramic sets for cafés, restaurants, and homes.',
    images: ['/p3_incense_holders_set.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://sillygoosepottery.com',
              name: 'Silly Goose Pottery',
              description: 'Handthrown, one-of-a-kind pottery made in Denver, Colorado. Wheel-thrown bowls, mugs, plates, and custom ceramic sets for homes, cafés, and restaurants. Every piece glazed and fired by hand.',
              url: 'https://sillygoosepottery.com',
              image: 'https://sillygoosepottery.com/p3_incense_holders_set.jpg',
              logo: 'https://sillygoosepottery.com/logo.jpg',
              founder: {
                '@type': 'Person',
                name: 'Silly Goose Pottery',
                jobTitle: 'Potter & Studio Owner',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Denver',
                addressRegion: 'CO',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 39.7392,
                longitude: -104.9903,
              },
              areaServed: [
                { '@type': 'City', name: 'Denver' },
                { '@type': 'State', name: 'Colorado' },
                { '@type': 'Country', name: 'United States' },
              ],
              sameAs: ['https://instagram.com/sillygoosepottery'],
              priceRange: '$23–$93',
              currenciesAccepted: 'USD',
              category: 'Pottery & Ceramics Studio',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Handthrown Pottery Collection',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Handthrown Ceramic Bowls', category: 'Bowls' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Handthrown Mugs & Cups', category: 'Drinkware' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Handthrown Plates & Dishes', category: 'Tableware' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Handthrown Pet Bowls', category: 'Pet Accessories' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Custom Ceramic Sets for Cafés & Restaurants', category: 'Custom Orders' } },
                ],
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
