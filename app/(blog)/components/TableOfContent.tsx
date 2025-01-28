'use client'

import { ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { slugify } from '@/lib/blog'
import { cn } from '@/lib/utils'

interface Props {
  content: string
}

const isVisible = (element: HTMLElement | null, offset = 0) => {
  if (!element) {
    return false
  }
  const { top, bottom } = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  return top < viewportHeight && bottom > offset
}

const findVisibleHeading = (headings: { id: string }[], offset = 0) => {
  return headings.find(({ id }) =>
    isVisible(document.getElementById(id), offset)
  )
}

export function TableOfContents({ content }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [ignoreScrollEvent, setIgnoreScrollEvent] = useState(false)

  const headings = useMemo(() => {
    return content
      .split('\n')
      .filter((line) => line.match(/^#{1,4}\s/))
      .map((line) => {
        const match = line.match(/^(#{1,4})\s+(.+)$/)
        if (!match) {
          return null
        }
        const level = match[1].length
        const text = match[2].replace(/`/g, '').trim()
        const id = slugify(text)
        return match ? { level, text, id } : null
      })
      .filter(
        (heading): heading is { level: number; text: string; id: string } =>
          heading !== null
      )
  }, [content])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const initialHash = window.location.hash

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      const heading = document.getElementById(hash)

      if (heading) {
        setIgnoreScrollEvent(true)
        const offset = 80 // handleClick과 동일한 offset 사용
        const elementTop = heading.getBoundingClientRect().top
        const offsetPosition = window.scrollY + elementTop - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })

        setTimeout(() => {
          setActiveId(hash)
          setIgnoreScrollEvent(false)
        }, 200)
      } else {
        setActiveId(null)
      }
    }

    const handleScroll = () => {
      if (ignoreScrollEvent) {
        return
      }

      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const offset = 80

      const isBottom = scrollY + viewportHeight >= pageHeight - 10
      if (isBottom) {
        const visibleHeadings = headings.filter(({ id }) =>
          isVisible(document.getElementById(id), offset)
        )
        setActiveId(visibleHeadings[visibleHeadings.length - 1]?.id || null)
        return
      }

      setActiveId(findVisibleHeading(headings, offset)?.id || null)
    }

    if (initialHash) {
      handleHashChange()
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings, ignoreScrollEvent])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementTop = element.getBoundingClientRect().top
      const offsetPosition = window.scrollY + elementTop - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      setActiveId(id)
      history.pushState(null, '', `#${id}`)
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="hidden xl:block w-[280px] ml-10">
      <div className="sticky top-24">
        <p className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-4">
          목차
        </p>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={cn(
                'block py-1 text-sm transition-colors break-words whitespace-normal',
                heading.level === 1
                  ? 'ml-0 font-medium'
                  : heading.level === 2
                    ? 'ml-2'
                    : heading.level === 3
                      ? 'ml-4'
                      : 'ml-8',
                activeId === heading.id
                  ? 'text-blue-500 dark:text-blue-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-200'
              )}
            >
              <div className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 shrink-0" />
                <span>{heading.text}</span>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
