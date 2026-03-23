/**
 * public 아이콘 경로. API channel 문자열 표기 차이를 정규화해 매칭합니다.
 */
export function getChannelIconSrc(channel: string): string | null {
  const key = channel.trim().toLowerCase().replace(/[\s-]+/g, "_");

  if (key === "truth_social" || key === "truthsocial") {
    return "/icon-truthsocial.png";
  }
  if (key === "white_house" || key === "whitehouse") {
    return "/icon-white-house.png";
  }
  return null;
}
