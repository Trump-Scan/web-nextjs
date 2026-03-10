import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/app/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trump-scan.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "트럼프 발언 · 트럼프 기사 모음 | Trump Scan",
  description:
    "트럼프 발언과 트럼프 기사를 한곳에서 모아보세요. 트럼프 발언 모음, 트럼프 기사 모음으로 최신 소셜·뉴스 피드를 확인할 수 있습니다.",
  keywords: [
    "트럼프 발언",
    "트럼프 기사",
    "트럼프 기사 모음",
    "트럼프 발언 모음",
    "Trump Scan",
  ],
  openGraph: {
    title: "트럼프 발언 · 트럼프 기사 모음 | Trump Scan",
    description:
      "트럼프 발언과 트럼프 기사를 한곳에서 모아보세요. 트럼프 발언 모음, 트럼프 기사 모음으로 최신 소셜·뉴스 피드를 확인할 수 있습니다.",
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "트럼프 발언 · 트럼프 기사 모음 | Trump Scan",
    description:
      "트럼프 발언과 트럼프 기사를 한곳에서 모아보세요. 트럼프 발언 모음, 트럼프 기사 모음으로 최신 소셜·뉴스 피드를 확인할 수 있습니다.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trump Scan",
  url: siteUrl,
  description:
    "트럼프 발언과 트럼프 기사를 한곳에서 모아보세요. 트럼프 발언 모음, 트럼프 기사 모음으로 최신 소셜·뉴스 피드를 확인할 수 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
