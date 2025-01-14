'use client'

import { useMemo } from 'react'

import { EmptyState } from './EmptySate'
import { sortByDate } from '../utils/date'

import { Card } from '@/components/card'
import { useFilterNavigation } from '@/hooks/useFilterNavigation'
import { getCategoryLabel } from '@/lib/blog'
import { BLOG_CATEGORIES, BlogPost } from '@/types/blog'

interface Props {
  posts: BlogPost[]
}

export function FilteredBlogPosts({ posts }: Props) {
  const { currentFilter } = useFilterNavigation()
  const currentCategory = getCategoryLabel(currentFilter)

  const filteredPosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      if (currentFilter === BLOG_CATEGORIES.ALL) {
        return true
      }
      return post.metadata.category === currentFilter.toLowerCase()
    })

    return filtered.sort(sortByDate)
  }, [posts, currentFilter])

  if (filteredPosts.length === 0) {
    return (
      <EmptyState
        title={`"#${currentCategory}"에 등록된 글이 없어요`}
        description="더 많은 내용이 곧 추가될 예정이에요! 다른 카테고리를 선택해주세요"
      />
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
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
