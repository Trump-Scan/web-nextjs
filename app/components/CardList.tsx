"use client";

import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Feed } from "@/app/types";
import Card from "@/app/components/Card";
import { fetchFeeds } from "@/app/api/contents";

export default function CardList() {
  const observerRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["feeds"],
    queryFn: ({ pageParam }) => fetchFeeds(pageParam),
    getNextPageParam: (lastPage) => lastPage.next_cursor ?? undefined,
    initialPageParam: undefined as string | undefined,
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [handleObserver]);

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
      {allFeeds.map((feed: Feed) => (
        <Card key={feed.id} feed={feed} />
      ))}

      {/* Intersection Observer 타겟 요소 */}
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
