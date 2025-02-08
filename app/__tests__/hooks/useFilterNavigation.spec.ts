import { renderHook } from '@testing-library/react'
import { act } from '@testing-library/react'
import { useRouter, useSearchParams } from 'next/navigation'

import { useFilterNavigation } from '../../hooks/useFilterNavigation'

import { BLOG_CATEGORIES, BlogCategory } from '@/types/blog'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

describe('useFilterNavigation hook test', () => {
  const mockReplace = jest.fn()
  const mockGet = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()

    const mockRouter = useRouter as jest.Mock
    const mockSearchParams = useSearchParams as jest.Mock

    mockRouter.mockImplementation(() => ({
      replace: mockReplace,
    }))

    mockSearchParams.mockImplementation(() => ({
      get: mockGet,
    }))
  })

  it('URL에 카테고리 파라미터가 없을 경우 ALL 카테고리로 초기화되어야 한다', () => {
    mockGet.mockReturnValue(null)
    const { result } = renderHook(() => useFilterNavigation())
    expect(result.current.currentFilter).toBe(BLOG_CATEGORIES.ALL)
  })

  it('URL의 카테고리 파라미터 값을 정확히 반환해야 한다', () => {
    mockGet.mockReturnValue(BLOG_CATEGORIES.FRONTEND)
    const { result } = renderHook(() => useFilterNavigation())
    expect(result.current.currentFilter).toBe(BLOG_CATEGORIES.FRONTEND)
  })

  it('ALL이 아닌 카테고리로 업데이트할 경우 URL에 카테고리 파라미터가 추가되어야 한다', () => {
    const { result } = renderHook(() => useFilterNavigation())

    act(() => {
      result.current.updateFilter(BLOG_CATEGORIES.FRONTEND)
    })

    expect(mockReplace).toHaveBeenCalledWith(
      `?category=${BLOG_CATEGORIES.FRONTEND}`
    )
  })

  it('ALL 카테고리로 업데이트할 경우 URL에서 카테고리 파라미터가 제거되어야 한다', () => {
    const { result } = renderHook(() => useFilterNavigation())

    act(() => {
      result.current.updateFilter(BLOG_CATEGORIES.ALL)
    })

    expect(mockReplace).toHaveBeenCalledWith('/')
  })

  it('서로 다른 카테고리로 연속해서 변경할 경우 URL이 정확히 업데이트되어야 한다', () => {
    const { result } = renderHook(() => useFilterNavigation())

    act(() => {
      result.current.updateFilter(BLOG_CATEGORIES.FRONTEND)
    })
    expect(mockReplace).toHaveBeenCalledWith(
      `?category=${BLOG_CATEGORIES.FRONTEND}`
    )

    act(() => {
      result.current.updateFilter(BLOG_CATEGORIES.BACKEND)
    })
    expect(mockReplace).toHaveBeenCalledWith(
      `?category=${BLOG_CATEGORIES.BACKEND}`
    )
  })

  it('유효하지 않은 카테고리 값이 URL에 있을 경우 ALL을 반환해야 한다', () => {
    mockGet.mockReturnValue('invalid-category')
    const { result } = renderHook(() => useFilterNavigation())
    expect(result.current.currentFilter).toBe(BLOG_CATEGORIES.ALL)
  })

  it('각 카테고리로 변경이 가능해야 한다', () => {
    const { result } = renderHook(() => useFilterNavigation())

    const categoriesToTest: BlogCategory[] = [
      BLOG_CATEGORIES.FRONTEND,
      BLOG_CATEGORIES.BACKEND,
      BLOG_CATEGORIES.CS,
      BLOG_CATEGORIES.DEVOPS,
      BLOG_CATEGORIES.ALL,
    ]

    categoriesToTest.forEach((category) => {
      act(() => {
        result.current.updateFilter(category)
      })

      if (category === BLOG_CATEGORIES.ALL) {
        expect(mockReplace).toHaveBeenCalledWith('/')
      } else {
        expect(mockReplace).toHaveBeenCalledWith(`?category=${category}`)
      }
    })
  })
})
