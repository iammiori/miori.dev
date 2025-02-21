import { FilteredBlogPosts } from './FilteredBlogPosts'

import { getBlogPostsMetadata } from '@/(blog)/utils/mdx'

export async function BlogPosts() {
  const posts = await getBlogPostsMetadata()

  return <FilteredBlogPosts posts={posts} />
}
