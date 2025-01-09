'use client'

import { CategoryChip } from '@/components/category'
import { useFilterNavigation } from '@/hooks/useFilterNavigation'

interface Props {
  categories: string[]
  className?: string
}

export default function BlogCategories({ categories, className }: Props) {
  const { updateFilter, currentFilters } = useFilterNavigation()
  const selectedCategory = currentFilters.get('category')

  const handleSelect = (category: string) => {
    if (category === selectedCategory) {
      updateFilter('category')
      return
    }

    updateFilter('category', category)
  }

  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {categories.map((category) => (
        <CategoryChip.Root
          key={category}
          category={category}
          isSelected={category === selectedCategory}
          onClick={handleSelect}
        >
          <CategoryChip.Icon />
          <CategoryChip.Text>{category}</CategoryChip.Text>
        </CategoryChip.Root>
      ))}
    </div>
  )
}
