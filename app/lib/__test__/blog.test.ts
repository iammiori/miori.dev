import {
  MOCK_CATEGORY_METADATA,
  MOCK_BLOG_CATEGORIES,
} from '__mocks__/blog-constants'

import {
  getCategoryLabel,
  getCategoryIcon,
  getAllCategories,
  slugify,
} from '../blog'

jest.mock('@/constant/blog', () => ({
  CATEGORY_METADATA: MOCK_CATEGORY_METADATA,
}))

jest.mock('@/types/blog', () => ({
  BLOG_CATEGORIES: MOCK_BLOG_CATEGORIES,
}))

describe('블로그 유틸리티 함수 테스트', () => {
  describe('getCategoryLabel 테스트', () => {
    it('각 카테고리에 대한 올바른 라벨을 반환해야 한다', () => {
      expect(getCategoryLabel('all')).toBe('전체')
      expect(getCategoryLabel('frontend')).toBe('프론트엔드')
      expect(getCategoryLabel('backend')).toBe('백엔드')
    })
  })

  describe('getCategoryIcon 테스트', () => {
    it('각 카테고리에 대한 올바른 아이콘 컴포넌트를 반환해야 한다', () => {
      const { frontend, backend, life } = MOCK_CATEGORY_METADATA

      expect(getCategoryIcon('frontend')).toBe(frontend.icon)
      expect(getCategoryIcon('backend')).toBe(backend.icon)
      expect(getCategoryIcon('life')).toBe(life.icon)
    })
  })

  describe('getAllCategories 테스트', () => {
    it('모든 카테고리 배열을 반환해야 한다', () => {
      const result = getAllCategories()
      const expected = Object.values(MOCK_BLOG_CATEGORIES)

      expect(result).toEqual(expected)
      expect(result).toHaveLength(expected.length)
    })
  })

  describe('slugify 테스트', () => {
    const testCases = [
      {
        설명: '일반적인 영문 문자열을 변환할 수 있어야 한다',
        입력: 'Next.js Tutorial',
        기대값: 'nextjs-tutorial',
      },
      {
        설명: '한글 문자열을 변환할 수 있어야 한다',
        입력: '프론트엔드 개발',
        기대값: '프론트엔드-개발',
      },
      {
        설명: '특수문자를 제거해야 한다',
        입력: 'TypeScript & React!!!',
        기대값: 'typescript-react',
      },
      {
        설명: '연속된 공백과 대시를 단일 대시로 변환해야 한다',
        입력: 'frontend   development--basic',
        기대값: 'frontend-development-basic',
      },
      {
        설명: '시작과 끝의 대시를 제거해야 한다',
        입력: '-frontend-backend-',
        기대값: 'frontend-backend',
      },
    ]

    test.each(testCases)('$설명', ({ 입력, 기대값 }) => {
      expect(decodeURIComponent(slugify(입력))).toBe(기대값)
    })

    it('빈 문자열을 처리할 수 있어야 한다', () => {
      expect(slugify('')).toBe('')
    })

    it('특수문자로만 이루어진 문자열을 처리할 수 있어야 한다', () => {
      expect(slugify('!@#$%^&*()')).toBe('')
    })
  })
})
