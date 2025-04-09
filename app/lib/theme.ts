export type ThemeMode = 'light' | 'dark'

export const STORAGE_KEY = 'themeMode'
export const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)'

export function updateDocumentClass(mode: ThemeMode): void {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }
}

export function getSystemTheme(): ThemeMode {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia(DARK_MODE_MEDIA_QUERY).matches ? 'dark' : 'light'
  }
  return 'light'
}

export function getSavedTheme(): ThemeMode | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeMode
    return saved || null
  }
  return null
}

export function getInitialTheme(): ThemeMode {
  const savedTheme = getSavedTheme()
  return savedTheme || getSystemTheme()
}

export const getThemeScript = () => ` 
 (function() { 
   const savedMode = localStorage.getItem('${STORAGE_KEY}') 
   const prefersDark = window.matchMedia('${DARK_MODE_MEDIA_QUERY}').matches 
   
   if (savedMode === 'dark' || (!savedMode && prefersDark)) { 
     document.documentElement.classList.add('dark') 
   } 
 })() 
`
