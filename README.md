# Trump Scan With Cursor AI

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

| 변수                  | 설명                                               |
| --------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | API 베이스 URL (미설정 시 `http://localhost:3000`) |
