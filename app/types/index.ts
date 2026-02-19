export interface Feed {
  id: number;
  summary: string; // 한국어 요약
  tags: string[];
  channel: string; // 수집 채널 (truth_social, news 등)
  link: string;
  published_at: string; // 원본 발행 시간 (ISO 8601 UTC)
  created_at: string; // 피드 생성 시간 (ISO 8601 UTC)
}
