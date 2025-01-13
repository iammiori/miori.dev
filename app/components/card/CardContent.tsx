import { formatDate } from '@/(blog)/utils'

interface CardContentProps {
  title: string
  publishedAt: string
}

export default function CardContent({ title, publishedAt }: CardContentProps) {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <p className="text-neutral-900 dark:text-slate-200 font-medium text-lg">
        {title}
      </p>
      <div className="flex items-center space-x-2">
        <p className="text-sm text-neutral-600 dark:text-slate-400">
          {formatDate(publishedAt, false)}
        </p>
      </div>
    </div>
  )
}
