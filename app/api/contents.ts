import { Feed } from "@/app/types";

export interface FeedListResponse {
  feeds: Feed[];
  count: number;
  next_cursor: string | null;
}

export { fetchFeeds, fetchFeedsAfter } from "@/app/actions";
