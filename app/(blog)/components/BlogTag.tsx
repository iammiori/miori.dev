import { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface Props {
  label: string
  icon?: LucideIcon
  isSelected?: boolean
  onClick?: () => void
}

export function BlogTag({ label, icon: Icon, isSelected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors',
        isSelected
          ? 'bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900'
          : 'bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
      )}
    >
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </button>
  )
}
