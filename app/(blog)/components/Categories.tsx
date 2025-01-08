'use client'

import { useSearchParams, useRouter } from 'next/navigation'

import { CategoryChip } from '@/components/category'

interface Props {
  categories: string[]
  className?: string
}

export default function BlogCategories({ categories, className }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('category')

  const handleSelect = (category: string) => {
    if (category === selectedCategory) {
      router.push('/')
      return
    }

    router.push(`?category=${encodeURIComponent(category)}`)
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
