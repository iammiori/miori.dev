import { Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate, getBlogPosts } from '@/(blog)/utils'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 transition-all hover:shadow-lg"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              {post.metadata.image ? (
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-neutral-400" />
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-2 p-4">
              <p className="text-neutral-900 dark:text-neutral-100 font-medium text-lg">
                {post.metadata.title}
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                {/* {post.metadata.category && (
                  <>
                    <span className="text-neutral-400">•</span>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {post.metadata.category}
                    </p>
                  </>
                )} */}
              </div>
              {/* {post.metadata.description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {post.metadata.description}
                </p>
              )} */}
            </div>
          </Link>
        ))}
    </div>
  )
}
