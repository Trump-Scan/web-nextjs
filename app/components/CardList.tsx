"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Feed } from "@/app/types";
import Card from "@/app/components/Card";
import { fetchFeeds, fetchFeedsAfter } from "@/app/api/contents";

type PageParam =
  | undefined
  | { direction: "next"; cursor: string }
  | { direction: "prev"; cursor: string };

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void;

export default function CardList() {
  const observerRef = useRef<HTMLDivElement>(null);
  const topObserverRef = useRef<HTMLDivElement>(null);
  const handleTopObserverRef = useRef<ObserverCallback>(() => {});
  const handleBottomObserverRef = useRef<ObserverCallback>(() => {});
  const isFirstTopIntersection = useRef(true);

  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["feeds"],
    queryFn: async ({ pageParam }: { pageParam: PageParam }) => {
      // 초기 로드 시에는 undefined
      if (pageParam === undefined) {
        return fetchFeeds();
      }
      if (pageParam.direction === "prev") {
        const res = await fetchFeedsAfter(pageParam.cursor);
        return { ...res, feeds: res.feeds.slice().reverse() };
      } else {
        return fetchFeeds(pageParam.cursor);
      }
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.next_cursor == null) {
        return undefined;
      } else {
        return { direction: "next" as const, cursor: lastPage.next_cursor };
      }
    },
    getPreviousPageParam: (firstPage, allPages) => {
      // 첫 페이지가 비어 있으면(after 응답이 빈 경우) 비어 있지 않은 첫 페이지의 최신 피드 cursor 사용
      const pageWithFeeds = allPages?.find((p) => p.feeds?.length > 0);
      const newestFeed = pageWithFeeds?.feeds?.[0];
      if (!newestFeed) {
        return undefined;
      } else {
        return { direction: "prev" as const, cursor: newestFeed.created_at };
      }
    },
    initialPageParam: undefined as PageParam,
  });

  const handleBottomObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  const handleTopObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (!target.isIntersecting) return;
      if (isFirstTopIntersection.current) {
        isFirstTopIntersection.current = false;
        return;
      }
      if (hasPreviousPage && !isFetchingPreviousPage) {
        fetchPreviousPage();
      }
    },
    [fetchPreviousPage, hasPreviousPage, isFetchingPreviousPage]
  );

  useEffect(() => {
    handleTopObserverRef.current = handleTopObserver;
    handleBottomObserverRef.current = handleBottomObserver;
  }, [handleTopObserver, handleBottomObserver]);

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => handleBottomObserverRef.current?.(entries),
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isLoading]);

  useEffect(() => {
    const element = topObserverRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => handleTopObserverRef.current?.(entries),
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 items-center p-4">
        <div className="animate-pulse text-gray-500">로딩 중...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-4 items-center p-4">
        <div className="text-red-500">에러가 발생했습니다: {error.message}</div>
      </div>
    );
  }

  const allFeeds = data?.pages.flatMap((page) => page.feeds) ?? [];

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      {/* 상단 옵저버: 목록 맨 위 도달 시 최신 데이터 로드 */}
      <div
        ref={topObserverRef}
        className="w-full py-4 flex justify-center min-h-8"
      ></div>

      {allFeeds.map((feed: Feed) => (
        <Card key={feed.id} feed={feed} />
      ))}

      {/* 하단 옵저버 타겟 요소 */}
      <div ref={observerRef} className="w-full py-4 flex justify-center">
        {isFetchingNextPage && (
          <div className="animate-pulse text-gray-500">더 불러오는 중...</div>
        )}
        {!hasNextPage && allFeeds.length > 0 && (
          <div className="text-gray-400">모든 피드를 불러왔습니다</div>
        )}
      </div>
    </div>
  );
}
