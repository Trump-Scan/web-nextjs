import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

const metaTitle = "트럼프 가라사대 · 발언·기사 모음 | Trump Saith";
const metaDescription =
  "트럼프 가라사대 - 트럼프 발언·기사 모음을 한곳에서. 이란 전쟁 등 국제 이슈 관련 발언·기사 | Trump Saith — curated Donald Trump statements, quotes, and news in one place, including major issues such as the Iran conflict.";
const ogImagePath = "/og-trump-saith.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "n2KZg93ELhQdUdpsK9wmI8WXa0HIBH2g8yzHbbLtx48",
  },
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "트럼프 가라사대",
    "트럼프 발언",
    "트럼프 기사",
    "트럼프 기사 모음",
    "트럼프 발언 모음",
    "Trump Saith",
    "Donald Trump",
    "Trump quotes",
    "Trump statements",
    "Trump news",
    "President Trump",
    "이란 전쟁",
    "이란",
    "미국 이란",
    "트럼프 이란",
    "Iran war",
    "Iran conflict",
    "US Iran",
    "Trump Iran",
  ],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "website",
    siteName: "Trump Saith",
    locale: "ko_KR",
    url: siteUrl,
    images: [
      {
        url: ogImagePath,
        width: 1792,
        height: 1024,
        alt: "트럼프 가라사대 오픈그래프 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [ogImagePath],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Trump Saith",
  url: siteUrl,
  description: metaDescription,
  slogan: "트럼프 가라사대 — 대통령이 말하길",
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
        {children}
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />
        <Analytics />
      </body>
    </html>
  );
}
