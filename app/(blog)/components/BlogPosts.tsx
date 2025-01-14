import { FilteredBlogPosts } from './FilteredBlogPosts'

import { getBlogPosts } from '@/(blog)/utils/mdx'

export async function BlogPosts() {
  const posts = await getBlogPosts()

  return <FilteredBlogPosts posts={posts} />
}
