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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://trump-saith.example.com";

const metaTitle = "트럼프 가라사대 · 발언·기사 모음 | Trump Saith";
const metaDescription =
  "트럼프 가라사대 | 대통령이 말하길 | 트럼프 발언·기사 모음을 한곳에서.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "트럼프 가라사대",
    "트럼프 발언",
    "트럼프 기사",
    "트럼프 기사 모음",
    "트럼프 발언 모음",
    "Trump Saith",
  ],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "website",
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
      </body>
    </html>
  );
}
