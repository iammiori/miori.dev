import { baseUrl } from '@/sitemap'

export const siteConfig = {
  title: 'miori tech blog',
  description:
    'frontend engineer miori(미오리)의 기술 블로그 - React, Next.js, JavaScript, TypeScript 등 웹 프론트엔드를 중심으로 개발 경험과 지식을 공유합니다. 프론트엔드 개발자를 위한 실용적인 팁과 최신 트렌드를 다룹니다.',
  shortDescription: 'frontend engineer miori(미오리)의 기술 블로그',
  url: baseUrl || 'http://localhost:3000',
  author: {
    name: 'miori(미오리)',
    role: 'Frontend Engineer',
    bio: '프론트엔드 개발자 miori(미오리)입니다. React와 TypeScript를 주로 다루며 웹 개발 경험을 공유합니다.',
  },
  keywords: [
    '프론트엔드',
    'frontend',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    '웹개발',
    '프론트엔드 개발자',
    '리액트',
    '넥스트js',
    '타입스크립트',
    '자바스크립트',
    '미오리',
    'miori',
    '이미연',
    'blog',
  ],
  socials: {
    github: 'https://github.com/your-github-username',
    twitter: 'https://twitter.com/your-twitter-handle',
  },
}

export type SiteConfig = typeof siteConfig
