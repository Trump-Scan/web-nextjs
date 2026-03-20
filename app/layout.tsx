import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import QueryProvider from "@/app/providers/QueryProvider";

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
  "트럼프 가라사대 - 트럼프 발언·기사 모음을 한곳에서 | Trump Saith — curated Donald Trump statements, quotes, and news in one place.";

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
  ],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "website",
    siteName: "Trump Saith",
    locale: "ko_KR",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
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
        <QueryProvider>{children}</QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
