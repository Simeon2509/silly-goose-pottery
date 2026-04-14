import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://sillygoosepottery.com/sitemap.xml',
    host: 'https://sillygoosepottery.com',
  }
}
