import { ImageResponse } from "next/og";

export const alt = "Trump Saith — 트럼프 가라사대";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #334155 100%)",
        color: "#f8fafc",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: "0.08em", opacity: 0.85 }}>
        TRUMP SAITH
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.15,
          maxWidth: 900,
        }}
      >
        트럼프 가라사대
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 30,
          lineHeight: 1.4,
          opacity: 0.88,
          maxWidth: 880,
        }}
      >
        발언 · 기사를 한곳에서
      </div>
    </div>,
    { ...size },
  );
}
