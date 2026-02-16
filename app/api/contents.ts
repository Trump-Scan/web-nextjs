import { Feed } from "@/app/types";

export interface FeedListResponse {
  feeds: Feed[];
  count: number;
  next_cursor: string | null;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function fetchFeeds(
  cursor?: string,
  limit: number = 20
): Promise<FeedListResponse> {
  const params = new URLSearchParams();
  if (cursor) params.append("cursor", cursor);
  params.append("limit", String(limit));

  const response = await fetch(
    `${API_URL}/api/v1/feeds/before?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("피드를 불러오는데 실패했습니다");
  }

  return response.json();
}

export async function fetchFeedsAfter(
  cursor: string,
  limit: number = 20
): Promise<FeedListResponse> {
  const params = new URLSearchParams();
  params.append("cursor", cursor);
  params.append("limit", String(limit));

  const response = await fetch(
    `${API_URL}/api/v1/feeds/after?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("피드를 불러오는데 실패했습니다");
  }

  return response.json();
}
