# miori.dev

개발 경험과 기술적 인사이트를 공유하는 개인 기술 블로그예요.

### 🚀 Tech Stack
```
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Components: shadcn/ui
- Content: MDX
- Deploy: Vercel
```

### 📂 File Structure
```
├── app
│   ├── __tests__                  # 테스트 파일들
│   ├── __mocks__                  # 테스트용 모의 데이터
│   ├── (blog)                     # 블로그 라우트 그룹
│   │   ├── [slug]                 # 동적 라우트
│   │   │   └── page.tsx           # 블로그 포스트 페이지
│   │   └── page.tsx               # 블로그 메인 페이지
│   ├── about                      # 소개 페이지
│   ├── components                 # 공통 컴포넌트
│   │   ├── ui                     # UI 컴포넌트 (shadcn/ui)
│   ├── hooks                      # custom hooks
│   ├── lib                        # 유틸리티 함수
│   ├── types                      # TypeScript 타입 정의
│   ├── layout.tsx                 # 루트 레이아웃
│   └── page.tsx                   # 홈페이지
├── public                         # 정적 파일
├── jest.config.js                 # Jest 설정
├── jest.setup.js                  # Jest 셋업 파일
├── next.config.js                 # Next.js 설정
├── tailwind.config.js             # Tailwind CSS 설정
└── tsconfig.json                  # TypeScript 설정
```

### ✨ Features
- 🌓 다크모드 (OS 테마 연동)
- 📝 MDX 블로그 포스팅 
- 💅 shadcn/ui 기반 컴포넌트
- ✨ Framer Motion 스크롤 애니메이션
- 💎 giscus (반응, 댓글 by GitHub)


### 🚀 Deployment
GitHub Actions를 통해 자동으로 Vercel에 배포
- main 브랜치 푸시: Production 환경 배포
- 기타 브랜치 푸시: Preview 환경 배포

### 🧪 Test Code
`Jest + React Testing Library`
- 블로그의 핵심 기능을 안정적으로 유지
- 새로운 기능 추가나 리팩토링 시 빠른 피드백


### 🛠️ Installation & Run
```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build
```
