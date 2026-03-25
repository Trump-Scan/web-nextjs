"use client";

import dayjs from "dayjs";

export default function FeedTime({ publishedAt }: { publishedAt: string }) {
  const now = dayjs();
  const published = dayjs(publishedAt);
  const elapsedMs = now.diff(published);

  if (elapsedMs < 0) {
    return <div>{published.format("YYYY.MM.DD HH:mm")}</div>;
  }

  // 1분 이내
  if (elapsedMs < 60 * 1000) {
    return <div>방금 전</div>;
  }

  // 1시간 이내
  if (elapsedMs < 60 * 60 * 1000) {
    const minutes = Math.floor(elapsedMs / (60 * 1000));
    return <div>{minutes}분 전</div>;
  }

  // 6시간 이내
  if (elapsedMs <= 6 * 60 * 60 * 1000) {
    const hours = Math.floor(elapsedMs / (60 * 60 * 1000));
    return <div>{hours}시간 전</div>;
  }

  return <div>{published.format("YYYY.MM.DD HH:mm")}</div>;
}
