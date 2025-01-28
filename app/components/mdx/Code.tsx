'use client'
import { highlight } from 'sugar-high'

interface Props {
  children: string
  className?: string
}

export function Code({ children, ...props }: Props) {
  if (!children) return null

  try {
    const highlighted = highlight(children.trim())

    return <code {...props} dangerouslySetInnerHTML={{ __html: highlighted }} />
  } catch (e) {
    console.error('Highlighting error:', e)
    return <code {...props}>{children}</code>
  }
}
