import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckIcon } from "@/components/svg-icons"

export const metadata: Metadata = {
  title: "About Twitt - The Fastest Twitter Video Downloader",
  description:
    "Learn about Twitt, the fastest and most reliable Twitter/X video downloader. Built for creators, marketers, and everyday users.",
  keywords: "about twitt, twitter video downloader, x video downloader, video download tool",
  openGraph: {
    title: "About Twitt - Twitter Video Downloader",
    description: "Learn about Twitt, the fastest and most reliable Twitter/X video downloader.",
    url: "https://twitt-downloader.com/about",
    type: "website",
  },
}

export default function AboutPage() {
  const values = [
    { title: "Speed", description: "Lightning-fast downloads with optimized infrastructure" },
    { title: "Privacy", description: "Your data is never stored or shared with anyone" },
    { title: "Simplicity", description: "No registration, no complications, just download" },
    { title: "Reliability", description: "99.9% uptime with redundant servers" },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Twitt</h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Twitt is a free, fast, and reliable Twitter/X video downloader built for content creators, marketers, and
              everyday users who need to save videos quickly.
            </p>

            <div className="prose prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We believe downloading Twitter videos should be simple, fast, and private. That's why we built Twitt
                with a focus on user experience and data privacy. No registration, no ads, no tracking—just a tool that
                works.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckIcon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Twitt?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Fastest download speeds in the industry</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Support for multiple video qualities</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>100% free with no hidden costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Works on all devices and browsers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
