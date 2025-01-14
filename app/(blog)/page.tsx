import BlogCategories from './components/Categories'

import { BlogPosts } from '@/(blog)/components/BlogPosts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>

      <div className="space-y-8">
        <BlogCategories />
        <BlogPosts />
      </div>
    </section>
  )
}
