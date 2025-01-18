import {
  Binary,
  BookOpen,
  Compass,
  Database,
  Layers,
  Quote,
  Settings,
  Shapes,
  Sprout,
} from 'lucide-react'

import { BLOG_CATEGORIES, BlogCategory, CategoryMetadata } from '@/types/blog'

export const CATEGORY_METADATA: Record<BlogCategory, CategoryMetadata> = {
  [BLOG_CATEGORIES.ALL]: {
    label: 'All',
    icon: Layers,
  },
  [BLOG_CATEGORIES.FRONTEND]: {
    label: 'Frontend',
    icon: Shapes,
  },
  [BLOG_CATEGORIES.BACKEND]: {
    label: 'Backend',
    icon: Database,
  },
  [BLOG_CATEGORIES.CS]: {
    label: 'Computer Science',
    icon: Binary,
  },
  [BLOG_CATEGORIES.DEVOPS]: {
    label: 'DevOps',
    icon: Settings,
  },
  [BLOG_CATEGORIES.CORE]: {
    label: 'Core',
    icon: Compass,
  },
  [BLOG_CATEGORIES.GROWTH]: {
    label: 'Growth',
    icon: Sprout,
  },
  [BLOG_CATEGORIES.RETROSPECT]: {
    label: 'Retrospect',
    icon: BookOpen,
  },
  [BLOG_CATEGORIES.LIFE]: {
    label: 'Life',
    icon: Quote,
  },
}
