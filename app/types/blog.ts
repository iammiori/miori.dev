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
  ALL: 'ALL',
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  CS: 'CS',
  DEVOPS: 'DEVOPS',
  CORE: 'CORE',
  GROWTH: 'GROWTH',
  RETROSPECT: 'RETROSPECT',
  LIFE: 'LIFE',
} as const

export type BlogCategory =
  (typeof BLOG_CATEGORIES)[keyof typeof BLOG_CATEGORIES]

export interface CategoryMetadata {
  label: string
  description: string
  icon?: string
}
