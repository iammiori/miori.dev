import { Tag } from 'lucide-react'
import { notFound } from 'next/navigation'

import { baseUrl } from '@/sitemap'

import Comments from '../components/GiscusSection'
import { MDXLayout } from '../components/MdxLayout'
import { TableOfContents } from '../components/TableOfContent'
import { formatDate } from '../utils/date'

import { getBlogPosts } from '@/(blog)/utils/mdx'
import { CustomMDX } from '@/components/mdx'

export async function generateStaticParams() {
  const posts = await getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const posts = await getBlogPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const posts = await getBlogPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'miori',
            },
          }),
        }}
      />
      <div className="flex">
        <MDXLayout>
          <header className="mb-12">
            <h1 className="font-bold text-3xl md:text-4xl tracking-tighter text-gray-800 dark:text-gray-100">
              {post.metadata.title}
            </h1>
            <div className="flex mt-4 text-sm">
              <p className="text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </header>
          <article className="prose prose-gray dark:prose-invert">
            <CustomMDX source={post.content} />
          </article>

          {post.metadata.category && (
            <div className="pt-8 mt-8 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                <span className="text-neutral-700 dark:text-neutral-200 text-sm">
                  {post.metadata.category}
                </span>
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <Comments />
          </div>
        </MDXLayout>
        <TableOfContents content={post.content} />
      </div>
    </section>
  )
}
