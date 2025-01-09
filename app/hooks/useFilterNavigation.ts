import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

interface UseFilterNavigationOptions {
  replace?: boolean
}

export const useFilterNavigation = (
  options: UseFilterNavigationOptions = {}
) => {
  const { replace = true } = options
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = useCallback(
    (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString())

      if (!value) {
        params.delete(key)
      } else {
        params.set(key, value)
      }

      const queryString = params.toString()
      const newPath = queryString ? `?${queryString}` : ''

      if (replace) {
        router.replace(newPath)
      } else {
        router.push(newPath)
      }
    },
    [router, searchParams, replace]
  )

  const resetFilters = useCallback(() => {
    router.replace('')
  }, [router])

  return {
    updateFilter,
    resetFilters,
    currentFilters: searchParams,
  }
}
