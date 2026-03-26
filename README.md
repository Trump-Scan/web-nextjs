# Trump Saith With Cursor AI

트럼프 관련 뉴스·피드 요약을 한곳에서 보는 뷰어입니다.

이 프로젝트에는 Cursor AI를 적극 활용했습니다.

## 주요 기능

- 피드 카드 목록: 채널, 요약, 태그, 원문 링크
- 위/아래 무한 스크롤: Intersection Observer 기반
- 상단 고정 시 5분 간격 새 글 폴링

## 기술 스택

- Next.js 16 (App Router), React 19, TypeScript
- TanStack React Query (무한 쿼리)
- Tailwind CSS 4, dayjs

## 프로젝트 구조

- `app/page.tsx` — 메인 페이지 (Header + CardList)
- `app/components/` — Header, CardList, Card, FeedTime
- `app/api/contents.ts` — 피드 API 클라이언트 (`fetchFeeds`, `fetchFeedsAfter`)
- `app/types/index.ts` — `Feed` 타입
- `app/providers/QueryProvider.tsx` — React Query Provider

## 시작하기

### 요구 사항

- Node.js, pnpm

### 설치 및 실행

```bash
pnpm install
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 됩니다.

### 환경 변수

로컬 온보딩은 루트의 `.env.example`을 복사해 `.env.local`로 두고 값을 채우면 됩니다.

| 변수                            | 사용 위치                           | 설명                                                                                                                                                               |
| ------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `API_URL`                       | 서버 폴백                           | Backend API URL.                                                                                                                                                   |
| `NEXT_PUBLIC_SITE_URL`          | 메타·사이트맵·robots·JSON-LD        | 공개 사이트의 절대 URL(권장: `https://your-domain.com`). 비어 있으면 Vercel에서는 `VERCEL_URL` 기반 `https://…`, 그 외에는 `http://localhost:3000`으로 대체됩니다. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `app/layout.tsx` (Google Analytics) | GA4 측정 ID(`G-XXXXXXXXXX`). 비어 있으면 태그는 주입되지 않습니다.                                                                                                 |

`VERCEL_URL`은 Vercel이 자동으로 넣으며, `NEXT_PUBLIC_SITE_URL`이 없을 때 사이트 URL 추론에만 사용됩니다.
