import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckIcon, ZapIcon, DownloadIcon, LockIcon } from "@/components/svg-icons"

export const metadata: Metadata = {
  title: "Features - Twitt Twitter Video Downloader | Fast & Secure",
  description:
    "Explore all the features that make Twitt the best Twitter video downloader. Lightning fast downloads, multiple formats, secure & private.",
  keywords: "twitter downloader features, video download features, fast download, secure download",
  openGraph: {
    title: "Features - Twitt Twitter Video Downloader",
    description: "Explore all the features that make Twitt the best Twitter video downloader.",
    url: "https://twitt-downloader.com/features",
    type: "website",
  },
}

export default function FeaturesPage() {
  const features = [
    {
      icon: ZapIcon,
      title: "Lightning Fast Downloads",
      description: "Download videos in seconds with our optimized servers and global CDN infrastructure.",
      details: [
        "Average download time under 5 seconds",
        "Optimized for all connection speeds",
        "Parallel processing for faster results",
      ],
    },
    {
      icon: DownloadIcon,
      title: "Multiple Quality Options",
      description: "Choose from various video qualities to suit your needs and bandwidth.",
      details: ["480p, 720p, 1080p, and higher", "MP4 and WebM formats", "Audio-only extraction"],
    },
    {
      icon: LockIcon,
      title: "Privacy & Security",
      description: "Your privacy is our priority. We never store or share your data.",
      details: ["End-to-end encryption", "No download history logging", "GDPR compliant"],
    },
    {
      icon: CheckIcon,
      title: "No Registration Required",
      description: "Start downloading immediately without creating an account.",
      details: ["Instant access", "No email verification", "No personal information needed"],
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Features</h1>
            <p className="text-lg text-muted-foreground mb-12 text-balance">
              Discover what makes Twitt the ultimate Twitter video downloader.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-8 bg-card hover:border-primary transition-colors"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
