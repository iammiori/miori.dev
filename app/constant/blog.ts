import { LucideIcon, Quote, Shapes } from 'lucide-react'
import {
  Database,
  Binary,
  Settings,
  Compass,
  Sprout,
  BookOpen,
  Layers,
} from 'lucide-react'

import { BlogCategory, BLOG_CATEGORIES } from '@/types/blog'

interface CategoryMetadata {
  label: string
  icon?: LucideIcon
}

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
