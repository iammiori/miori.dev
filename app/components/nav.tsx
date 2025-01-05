'use client'

import { SunMedium, MoonStar } from 'lucide-react'
import Link from 'next/link'

import { Switch } from '@/components/ui/switch'
import useSetThemeMode from '@/hooks/useSetThemeMode'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
}

export function Navbar() {
  const { mode, toggleMode } = useSetThemeMode()
  return (
    <aside className="mb-2 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex justify-between items-center" id="nav">
          <div className="flex space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
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
        </nav>
      </div>
    </aside>
  )
}
