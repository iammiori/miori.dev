import BlogCategories from './components/Categories'

import { BlogPosts } from '@/(blog)/components/BlogPosts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="space-y-8 pt-6">
        <BlogCategories />
        <BlogPosts />
      </div>
    </section>
  )
}
