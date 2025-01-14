import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-56 w-56 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
          <Image
            src="/notion-404-transparent.png"
            alt="Empty State"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <h3 className="mt-8 text-xl font-medium text-slate-900 dark:text-slate-100">
          Ooooops!
        </h3>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          페이지를 찾을 수 없습니다.
        </p>

        <Link
          href="/"
          className="mt-6 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-200 rounded-md hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
        >
          홈으로 가기
        </Link>
      </div>
    </section>
  )
}
