import { Feed } from "@/app/types";
import { feeds } from "@/app/mock";

export interface FeedListResponse {
  feeds: Feed[];
  count: number;
  next_cursor: string | null;
}

const PAGE_SIZE = 5;

export async function fetchFeeds(
  cursor?: string,
  pageSize: number = PAGE_SIZE
): Promise<FeedListResponse> {
  // 네트워크 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 500));

  // cursor 기반 페이지네이션: cursor는 마지막 피드의 id
  const startIndex = cursor
    ? feeds.findIndex((feed) => feed.id === Number(cursor)) + 1
    : 0;

  const paginatedData = feeds.slice(startIndex, startIndex + pageSize);
  const lastFeed = paginatedData[paginatedData.length - 1];
  const hasNextPage = startIndex + pageSize < feeds.length;

  return {
    feeds: paginatedData,
    count: feeds.length,
    next_cursor: hasNextPage ? String(lastFeed.id) : null,
  };
}
