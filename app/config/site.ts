import { baseUrl } from '@/sitemap'

export const siteConfig = {
  title: "miori's tech blog",
  description:
    'frontend engineer miori의 기술 블로그 - React, Next.js, JavaScript, TypeScript 등 웹 프론트엔드를 중심으로 개발 경험과 지식을 공유합니다.',
  url: baseUrl || 'http://localhost:3000',
  author: {
    name: 'miori',
    role: 'Frontend Engineer',
  },
}

export type SiteConfig = typeof siteConfig
