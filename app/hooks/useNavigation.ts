import { usePathname } from 'next/navigation'

export const useNavigation = () => {
  const pathname = usePathname()

  const isNavActive = (path: string) => {
    if (path === '/about') {
      return pathname === '/about'
    }

    if (path === '/') {
      return pathname === '/' || pathname !== '/about'
    }

    return pathname === path
  }

  return { isNavActive }
}
