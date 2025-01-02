'use client'

import { useState, useEffect } from 'react'

type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'themeMode'
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)'

function updateDocumentClass(mode: ThemeMode) {
  document.documentElement.classList.toggle('dark', mode === 'dark')
}

export default function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const initializeTheme = () => {
      const savedMode = localStorage.getItem(STORAGE_KEY) as ThemeMode
      const prefersDark = window.matchMedia(DARK_MODE_MEDIA_QUERY).matches
      const initialMode = savedMode || (prefersDark ? 'dark' : 'light')

      setMode(initialMode)
      updateDocumentClass(initialMode)
    }

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const newMode = e.matches ? 'dark' : 'light'
        setMode(newMode)
        updateDocumentClass(newMode)
      }
    }

    initializeTheme()

    const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY)
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem(STORAGE_KEY, newMode)
    updateDocumentClass(newMode)
  }

  return { mode, toggleMode }
}
