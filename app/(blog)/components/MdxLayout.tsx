import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

interface Props extends PropsWithChildren {
  className?: string
}

export function MDXLayout({ children, className }: Props) {
  return (
    <div
      className={cn(
        'w-full',
        'max-w-3xl',
        'mx-4 md:mx-auto',
        'px-4 sm:px-6 md:px-8',
        'py-8 sm:py-10 md:py-12',
        className
      )}
    >
      {children}
    </div>
  )
}
