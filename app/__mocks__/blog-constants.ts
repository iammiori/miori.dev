import { Code, FileText, Laptop, LucideIcon } from 'lucide-react'

import { BlogCategory } from '@/types/blog'

export const MOCK_BLOG_CATEGORIES: Record<BlogCategory, BlogCategory> = {
  all: 'all',
  frontend: 'frontend',
  backend: 'backend',
  cs: 'cs',
  devops: 'devops',
  core: 'core',
  growth: 'growth',
  retrospect: 'retrospect',
  life: 'life',
} as const

export const MOCK_CATEGORY_METADATA: Record<
  BlogCategory,
  { label: string; icon: LucideIcon }
> = {
  all: { label: '전체', icon: Code },
  frontend: { label: '프론트엔드', icon: Code },
  backend: { label: '백엔드', icon: FileText },
  cs: { label: 'CS', icon: Laptop },
  devops: { label: 'DevOps', icon: Code },
  core: { label: '코어', icon: FileText },
  growth: { label: '성장', icon: Laptop },
  retrospect: { label: '회고', icon: Code },
  life: { label: '라이프', icon: FileText },
} as const
