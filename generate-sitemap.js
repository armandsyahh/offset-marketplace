import fs from 'fs'
import { createSlug } from './src/utils/slug.js'
import { SitemapStream, streamToPromise } from 'sitemap'

// Import data produk
import { products } from './src/data/products.js'

const hostname = 'https://offsetmarket.vercel.app'

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname })

  sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 })

  sitemap.write({ url: '/product', changefreq: 'daily', priority: 0.9 })

  sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.7 })

  products.forEach(product => {
    sitemap.write({
        url: `/product/${createSlug(product)}`,
        changefreq: 'weekly',
        priority: 0.8
    })
    }) 

  sitemap.end()

  const xml = await streamToPromise(sitemap)

  fs.writeFileSync(
    './public/sitemap.xml',
    xml.toString()
  )

  console.log('✅ Sitemap generated')
}

generateSitemap()