import { MetadataRoute } from 'next'

import { getBlogPosts } from '@/(blog)/utils/mdx'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogPosts()

  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...routes, ...blogRoutes]
}
