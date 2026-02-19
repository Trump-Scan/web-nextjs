"use client";

import dayjs from "dayjs";

export default function FeedTime({ publishedAt }: { publishedAt: string }) {
  const now = dayjs();
  const diff = now.diff(dayjs(publishedAt), "hour");

  if (diff < 24) {
    return <div>{diff}시간 전</div>;
  }

  if (diff < 24 * 7) {
    return <div>{Math.floor(diff / 24)}일 전</div>;
  }

  return <div>{Math.floor(diff / 24 / 7)}주 전</div>;
}
