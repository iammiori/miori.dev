import { Tag } from 'lucide-react'

interface IconProps {
  className?: string
}

interface TextProps {
  className?: string
  children: React.ReactNode
}

export function CategoryIcon({ className = '' }: IconProps) {
  return <Tag className={`w-3.5 h-3.5 ${className}`} />
}

export function CategoryText({ children, className = '' }: TextProps) {
  return <span className={className}>{children}</span>
}
