'use client'
import { BlogTag } from './BlogTag'

import { useFilterNavigation } from '@/hooks/useFilterNavigation'
import { getAllCategories, getCategoryLabel, getCategoryIcon } from '@/lib/blog'

interface Props {
  className?: string
}

export default function BlogCategories({ className }: Props) {
  const { updateFilter, currentFilter } = useFilterNavigation()
  const categories = getAllCategories()

  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {categories.map((category) => (
        <BlogTag
          key={category}
          label={getCategoryLabel(category)}
          icon={getCategoryIcon(category)}
          isSelected={category === currentFilter}
          onClick={() => updateFilter(category)}
        />
      ))}
    </div>
  )
}
