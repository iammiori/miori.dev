import { LucideIcon } from 'lucide-react'

import { CATEGORY_METADATA } from '@/constant/blog'
import { BlogCategory, BLOG_CATEGORIES } from '@/types/blog'

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
