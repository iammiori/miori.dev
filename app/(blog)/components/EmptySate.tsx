import Image from 'next/image'

interface Props {
  title: string
  description?: string
}

export function EmptyState({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="flex h-56 w-56 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
        <Image
          src="/notion-empty-transparent.png"
          alt="Empty State"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>

      <h3 className="mt-8 text-xl font-medium text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      {description && (
        <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
