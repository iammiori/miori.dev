import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

import { BLOG_CATEGORIES, BlogCategory } from '@/types/blog'

export const useFilterNavigation = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = useCallback(
    (value: BlogCategory) => {
      if (value === BLOG_CATEGORIES.ALL) {
        router.replace('/')
        return
      }

      router.replace(`?category=${value}`)
    },
    [router]
  )

  const currentFilter =
    (searchParams.get('category') as BlogCategory) || BLOG_CATEGORIES.ALL

  return {
    updateFilter,
    currentFilter,
  }
}
