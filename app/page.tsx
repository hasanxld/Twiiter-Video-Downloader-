import { Header } from "@/components/header"
import { ToolSection } from "@/components/tool-section"
import { FeaturesSection } from "@/components/features-section"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Twitt - Download Twitter Videos Instantly | Free & Fast",
  description:
    "Download Twitter/X videos in HD quality instantly. Fast, free, and easy-to-use Twitter video downloader. No registration required.",
  keywords: "twitter video downloader, x video downloader, download twitter videos, twitter video saver",
  openGraph: {
    title: "Twitt - Download Twitter Videos Instantly",
    description: "Fast and free Twitter video downloader. Download X videos in HD quality without registration.",
    url: "https://twitt-downloader.com",
    type: "website",
  },
}

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main className="flex-1">
        <ToolSection />
        <FeaturesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
