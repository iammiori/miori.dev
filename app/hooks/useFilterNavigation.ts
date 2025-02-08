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

  const isValidCategory = (
    category: string | null
  ): category is BlogCategory => {
    if (!category) return false
    return Object.values(BLOG_CATEGORIES).includes(category as BlogCategory)
  }

  const urlCategory = searchParams.get('category')
  const currentFilter = isValidCategory(urlCategory)
    ? urlCategory
    : BLOG_CATEGORIES.ALL

  return {
    updateFilter,
    currentFilter,
  }
}
