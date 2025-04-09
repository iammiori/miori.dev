'use client'

import { useState, useEffect, useCallback } from 'react'

import {
  ThemeMode,
  DARK_MODE_MEDIA_QUERY,
  STORAGE_KEY,
  updateDocumentClass,
  getInitialTheme,
} from '@/lib/theme'

export default function useTheme() {
  const [mode, setMode] = useState<ThemeMode>('light')
  const [isLoaded, setIsLoaded] = useState(false)

  const applyTheme = useCallback((newTheme: ThemeMode) => {
    setMode(newTheme)
    updateDocumentClass(newTheme)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const initialTheme = getInitialTheme()
    applyTheme(initialTheme)
    setIsLoaded(true)

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const newMode = e.matches ? 'dark' : 'light'
        applyTheme(newMode)
      }
    }

    const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY)
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [applyTheme])

  const toggleTheme = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    applyTheme(newMode)
    localStorage.setItem(STORAGE_KEY, newMode)
  }, [mode, applyTheme])

  const setTheme = useCallback(
    (newTheme: ThemeMode) => {
      applyTheme(newTheme)
      localStorage.setItem(STORAGE_KEY, newTheme)
    },
    [applyTheme]
  )

  return {
    mode,
    isLoaded,
    toggleTheme,
    setTheme,
  }
}
