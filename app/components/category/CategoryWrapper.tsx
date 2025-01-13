import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

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
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-sm border',
        isSelected
          ? 'bg-gray-100 dark:bg-gray-100 dark:text-gray-900 border-transparent'
          : 'border-neutral-200 hover:border-neutral-300 dark:border-slate-600 dark:hover:border-slate-500 bg-transparent dark:bg-slate-600/40 dark:text-neutral-200',
        className
      )}
    >
      {children}
    </button>
  )
}
