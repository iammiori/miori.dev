'use client'

import { SunMedium, MoonStar } from 'lucide-react'
import Link from 'next/link'

import { Switch } from '@/components/ui/switch'
import { useNavigation } from '@/hooks/useNavigation'
import useSetThemeMode from '@/hooks/useSetThemeMode'
import { cn } from '@/lib/utils'

const navItems = {
  '/': {
    name: 'blog',
  },
  '/about': {
    name: 'about',
  },
} as const

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { mode, toggleMode } = useSetThemeMode()
  const { isNavActive } = useNavigation()

  return (
    <nav
      className={cn(
        'h-14 md:h-16 flex items-center fixed top-0 left-0 right-0 z-50',
        'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800',
        className
      )}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-8">
        <div className="flex items-center justify-between tracking-tight">
          <div className="flex space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = isNavActive(path)

              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                    'flex align-middle relative py-2 px-3 m-1',
                    'font-medium',
                    isActive
                      ? 'text-neutral-800 dark:text-neutral-200 font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400',
                    isActive
                      ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neutral-800 dark:after:bg-neutral-200'
                      : ''
                  )}
                >
                  {name}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            {mode === 'dark' ? (
              <MoonStar className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <SunMedium className="h-[1.2rem] w-[1.2rem]" />
            )}
            <Switch
              checked={mode === 'dark'}
              onCheckedChange={toggleMode}
              className="ml-1"
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
