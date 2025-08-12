# Minimal Portfolio - Next.js + Supabase

## 1. 프로젝트 개요

### 1.1 목표

- **개인 작업물 전시**: 프론트엔드 과정 수료 후 제작한 프로젝트와 포트폴리오를 한 곳에 모아 소개
- **실서비스형 구현**: Next.js App Router와 Supabase를 활용한 인증, 데이터 관리, 파일 업로드 기능 포함
- **관리 효율성**: 관리자 로그인 후 포트폴리오 항목 CRUD가 가능하도록 구성
- **배포 경험**: Vercel을 통한 프로덕션 배포 및 CI/CD 경험

### 1.2 주요 기능

#### 👤 사용자/관리자 관리
- Supabase Auth를 이용한 이메일 기반 로그인
- 관리자 계정만 프로젝트 등록/수정/삭제 가능
- RLS(Row Level Security) 정책 적용

#### 📂 프로젝트 관리
- 프로젝트 등록(제목, 설명, 대표 이미지, 상세 이미지, URL, 리뷰 등)
- 이미지 업로드(Supabase Storage)
- 목록/상세 페이지 구현
- 썸네일과 상세 이미지 구분 저장

#### 🔍 부가 기능
- 검색/필터(기술스택, 카테고리 등)
- 페이지네이션 또는 무한 스크롤
- 반응형 레이아웃(모바일·태블릿·데스크톱 대응)
- SEO 및 OG 태그 자동 생성

---

## 2. 개발 환경 및 배포

### 2.1 개발 스택

#### Frontend
- **Framework**: Next.js 15.x (App Router)
- **Language**: JavaScript / TypeScript
- **Styling**: CSS Modules / Tailwind CSS
- **Routing**: Next.js 라우팅(App Router)
- **Image Handling**: next/image
- **State Management**: useState, useEffect, SWR 또는 React Query 선택 가능

#### Backend (BaaS)
- **Database**: Supabase(PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Edge Functions**: 이미지 처리, 폼 제출, 외부 API 프록시

#### Tools
- **Version Control**: Git & GitHub
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions (테스트 및 배포 자동화)
- **Design**: Figma

### 2.2 배포 URL
- **Production**: https://portfolio-nextjs-supabase-tau.vercel.app/

---

## 3. 라우팅 구조

| 경로                 | 설명                      | 접근 권한 |
|----------------------|---------------------------|-----------|
| `/`                  | 메인 홈(프로젝트 목록)     | 전체      |
| `/portfolio`         | 포트폴리오 전체 보기       | 전체      |
| `/portfolio/[id]`    | 프로젝트 상세 페이지       | 전체      |
| `/about`             | 자기소개 페이지           | 전체      |
| `/contact`           | 연락 페이지               | 전체      |
| `/admin/login`       | 관리자 로그인 페이지       | 비로그인  |
| `/admin/dashboard`   | 프로젝트 목록/관리 대시보드| 관리자    |
| `/admin/insert`      | 프로젝트 등록              | 관리자    |
| `/admin/edit/[id]`   | 프로젝트 수정              | 관리자    |

---

## 4. 데이터 흐름

```mermaid
sequenceDiagram
    actor Admin as 관리자
    participant FE as Next.js Frontend
    participant SB as Supabase

    Admin->>+FE: 로그인 정보 입력
    FE->>+SB: Auth 요청
    SB-->>FE: 토큰 + 사용자 정보
    FE->>FE: 쿠키/상태 저장
    Admin->>+FE: 새 프로젝트 등록 요청
    FE->>+SB: DB Insert + 이미지 업로드(Storage)
    SB-->>FE: 성공 응답
    FE->>Admin: 목록 페이지로 리다이렉트
```

## 5. 프로젝트 구조
```
portfolio-nextjs_supabase/
├─ public/
├─ src/
│  ├─ app/                    # Next.js App Router
│  │  ├─ layout.(js|tsx)
│  │  ├─ page.(js|tsx)
│  │  └─ ...                  # route segments
│  ├─ components/             # 재사용 컴포넌트
│  ├─ lib/                    # Supabase 클라이언트 등
│  │  └─ supabase/client.(js|ts)
│  ├─ styles/                 # 전역/모듈 스타일
│  └─ utils/                  # 유틸 함수
├─ .env.example               # 환경변수 예시
├─ next.config.mjs
├─ package.json
└─ README.md
```


## 6. 아키텍처
```mermaid
flowchart TD
    A[Next.js Frontend] -->|SQL API / Auth / Storage| B[Supabase]
    B -->|PostgreSQL| C[(Database)]
    B -->|File Bucket| D[(Storage)]
    A -->|Deploy| E[Vercel]
    F[GitHub Actions] -->|CI/CD| E
```

## 7. 향후 개선 사항
 -프로젝트 검색/필터링 UI
 -이미지 업로드 시 썸네일 자동 생성
 -Contact 폼 → Edge Function 메일 발송
 -E2E 테스트(Cypress) 및 배포 자동화
 -Lighthouse 성능/SEO 90점 이상 달성

## 8. 실행 방법
### 1. 클론
git clone https://github.com/alikerock/portfolio-nextjs_supabase.git
cd portfolio-nextjs_supabase

### 2. 패키지 설치
npm install

### 3. 환경변수 설정
cp .env.example .env.local
### Supabase URL, ANON KEY, Storage 버킷명 등 입력

### 4. 로컬 실행
npm run dev

### 5. 프로덕션 빌드
npm run build
npm start

## 9. 테스트 계정
Email: admin@example.com
Password: admin123

## 10. 제작 후기
이 프로젝트를 통해 Next.js App Router와 Supabase를 결합하여
전체 CRUD 흐름과 배포까지 경험하였으며,
실무에 가까운 BaaS 활용법, 권한 제어, 성능 최적화 과정을 학습하였습니다.