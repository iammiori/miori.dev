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
│   ├── (blog)                     # 블로그 라우트 그룹
│   │   ├── [slug]                 # 동적 라우트
│   │   │   └── page.tsx           # 블로그 포스트 페이지
│   │   └── page.tsx               # 블로그 메인 페이지
│   ├── components                 # 공통 컴포넌트
│   │   ├── ui                     # UI 컴포넌트 (shadcn/ui)
│   │   └── nav.tsx                # 네비게이션 컴포넌트
│   ├── hooks                      # custom hooks
│   ├── lib                        # 유틸리티 함수
│   ├── types                      # TypeScript 타입 정의
│   ├── layout.tsx                 # 루트 레이아웃
│   └── page.tsx                   # 홈페이지
├── public                         # 정적 파일
├── next.config.js                 # Next.js 설정
├── tailwind.config.js             # Tailwind CSS 설정
└── tsconfig.json                  # TypeScript 설정
```

### ✨ Features
- 🌓 다크모드 (OS 테마 연동)
- 📝 MDX 블로그 포스팅 
- 💅 shadcn/ui 기반 컴포넌트
- ✨ Framer Motion 스크롤 애니메이션
- 
### 🛠️ Installation & Run
```bash
# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build
```
