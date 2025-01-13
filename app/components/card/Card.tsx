import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface CardRootProps extends PropsWithChildren {
  href: string
}

export default function CardRoot({ href, children }: CardRootProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-slate-600/40 transition-all hover:shadow-lg"
    >
      {children}
    </Link>
  )
}
