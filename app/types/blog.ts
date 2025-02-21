import { LucideIcon } from 'lucide-react'

export const BLOG_CATEGORIES = {
  ALL: 'all',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  CS: 'cs',
  DEVOPS: 'devops',
  CORE: 'core',
  GROWTH: 'growth',
  RETROSPECT: 'retrospect',
  LIFE: 'life',
} as const

export type BlogCategory =
  (typeof BLOG_CATEGORIES)[keyof typeof BLOG_CATEGORIES]

export interface CategoryMetadata {
  label: string
  icon?: LucideIcon
}

export interface BlogMetadata {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category: BlogCategory
}

export interface BlogPost {
  metadata: BlogMetadata
  slug: string
  content: string
}

export type BlogPostMetadata = Omit<BlogPost, 'content'>
