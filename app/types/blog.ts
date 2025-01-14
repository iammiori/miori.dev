export interface BlogMetadata {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category?: string
}

export interface BlogPost {
  metadata: BlogMetadata
  slug: string
  content: string
}

export interface BlogFrontmatter {
  metadata: Partial<BlogMetadata>
  content: string
}

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
  description: string
  icon?: string
}
