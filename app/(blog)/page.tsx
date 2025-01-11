import BlogCategories from './components/Categories'

import { BlogPosts } from '@/(blog)/components/BlogPost'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

const categories = [
  'AI',
  'APP',
  'AWS',
  'Backend',
  'Culture',
  'Data',
  'Deep Learning',
  'Design',
  'Education',
  'GenAI',
]

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>

      <div className="space-y-8">
        <BlogCategories categories={categories} />
        <BlogPosts />
      </div>
    </section>
  )
}
