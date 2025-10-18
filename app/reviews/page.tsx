import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StarIcon } from "@/components/svg-icons"

export const metadata: Metadata = {
  title: "User Reviews - Twitt Twitter Video Downloader | 5-Star Rated",
  description:
    "See what thousands of users are saying about Twitt. Highly rated Twitter video downloader trusted by creators and marketers worldwide.",
  keywords: "twitt reviews, twitter downloader reviews, user testimonials, 5 star rating",
  openGraph: {
    title: "User Reviews - Twitt Twitter Video Downloader",
    description: "See what thousands of users are saying about Twitt.",
    url: "https://twitt-downloader.com/reviews",
    type: "website",
  },
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Content Creator",
      text: "Twitt is the fastest video downloader I have used. Highly recommended! I use it daily for my YouTube content.",
      rating: 5,
      avatar: "AJ",
    },
    {
      name: "Sarah Williams",
      role: "Social Media Manager",
      text: "Simple, fast, and reliable. This tool saves me hours every week managing social media content.",
      rating: 5,
      avatar: "SW",
    },
    {
      name: "Mike Chen",
      role: "Digital Marketer",
      text: "Best Twitter video downloader out there. No ads, no hassle. Perfect for my marketing campaigns.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      role: "Video Editor",
      text: "Perfect for my workflow. Downloads are always high quality and the process is seamless.",
      rating: 5,
      avatar: "ED",
    },
    {
      name: "James Wilson",
      role: "Journalist",
      text: "Reliable and fast. I use it daily for my research and fact-checking work.",
      rating: 5,
      avatar: "JW",
    },
    {
      name: "Lisa Anderson",
      role: "Educator",
      text: "Great tool for downloading educational content from Twitter. My students love it!",
      rating: 5,
      avatar: "LA",
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">User Reviews</h1>
            <p className="text-lg text-muted-foreground mb-12 text-balance">
              Trusted by thousands of users worldwide. Here's what they have to say.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-6 bg-card hover:border-primary transition-colors"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-balance">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
