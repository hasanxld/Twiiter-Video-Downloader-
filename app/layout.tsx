import type React from "react"
import type { Metadata } from "next"
import { Cardo as Cardó } from "next/font/google"
import "./globals.css"
import { StructuredData } from "@/components/structured-data"

const cardó = Cardó({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Twitt - Twitter Video Downloader | Download X Videos Instantly",
  description:
    "Download Twitter/X videos in HD quality instantly. Fast, free, and easy-to-use Twitter video downloader. No registration required.",
  keywords: "twitter video downloader, x video downloader, download twitter videos, twitter video saver",
  authors: [{ name: "Twitt" }],
  creator: "Twitt",
  publisher: "Twitt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://twitt-downloader.com",
    siteName: "Twitt - Twitter Video Downloader",
    title: "Twitt - Download Twitter Videos Instantly",
    description: "Fast and free Twitter video downloader. Download X videos in HD quality without registration.",
    images: [
      {
        url: "https://twitt-downloader.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Twitt - Twitter Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitt - Download Twitter Videos",
    description: "Fast and free Twitter video downloader",
    images: ["https://twitt-downloader.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://twitt-downloader.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body className={`${cardó.className} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col bg-background text-foreground">{children}</div>
      </body>
    </html>
  )
}
