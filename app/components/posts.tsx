import { Card } from './card'

import { getBlogPosts, sortByDate } from '@/(blog)/utils'

export const BlogPosts = () => {
  const allBlogs = getBlogPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allBlogs.sort(sortByDate).map((post) => (
        <Card.Root key={post.slug} href={`/${post.slug}`}>
          <Card.Image src={post.metadata.image} alt={post.metadata.title} />
          <Card.Content
            title={post.metadata.title}
            publishedAt={post.metadata.publishedAt}
          />
        </Card.Root>
      ))}
    </div>
  )
}
