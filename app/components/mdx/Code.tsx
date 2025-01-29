import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  children?: ReactNode
  className?: string
  'data-language'?: string
  'data-theme'?: string
}

export function Code({
  children,
  className,
  'data-language': language,
  ...props
}: Props) {
  return (
    <div className="group relative my-4">
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800">
          {language && (
            <div className="text-xs text-gray-600 dark:text-zinc-400">
              {language}
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-100 dark:bg-zinc-900">
          <code {...props} className={cn('grid', className)}>
            {children}
          </code>
        </div>
      </div>
    </div>
  )
}
