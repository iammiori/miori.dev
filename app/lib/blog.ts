import { LucideIcon } from 'lucide-react'

import { CATEGORY_METADATA } from '@/constant/blog'
import { BLOG_CATEGORIES, BlogCategory } from '@/types/blog'

export const getCategoryLabel = (category: BlogCategory) => {
  return CATEGORY_METADATA[category].label
}

export const getCategoryIcon = (
  category: BlogCategory
): LucideIcon | undefined => {
  return CATEGORY_METADATA[category].icon
}
export const getAllCategories = (): BlogCategory[] => {
  return Object.values(BLOG_CATEGORIES)
}

export const slugify = (str: string) => {
  return encodeURIComponent(
    str
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w가-힣-]/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+|-+$/g, '')
  )
}
