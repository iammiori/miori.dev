import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  isSelected?: boolean
  onClick?: (category: string) => void
  category: string
  className?: string
}

export default function CategoryWrapper(props: Props) {
  const { isSelected, onClick, category, className, children } = props

  return (
    <button
      onClick={() => onClick?.(category)}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg
    transition-all text-sm border
    ${
      isSelected
        ? 'bg-gray-100 dark:bg-gray-100 dark:text-gray-900 border-transparent'
        : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 bg-transparent dark:text-gray-300'
    }
    ${className}`}
    >
      {children}
    </button>
  )
}
