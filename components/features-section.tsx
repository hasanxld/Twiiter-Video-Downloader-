"use client"

import { useState } from "react"
import { CheckIcon, DownloadIcon, LockIcon, ZapIcon } from "./svg-icons"

const features = [
  {
    icon: ZapIcon,
    title: "Lightning Fast",
    description: "Download videos in seconds with our optimized servers",
    details: "Our infrastructure is built for speed with CDN distribution across the globe.",
  },
  {
    icon: DownloadIcon,
    title: "Multiple Formats",
    description: "Choose from various video qualities and formats",
    details: "Support for 480p, 720p, 1080p, and more with MP4, WebM formats.",
  },
  {
    icon: LockIcon,
    title: "Secure & Private",
    description: "Your data is never stored or shared with third parties",
    details: "We use end-to-end encryption and never log your download history.",
  },
  {
    icon: CheckIcon,
    title: "No Registration",
    description: "Start downloading immediately without creating an account",
    details: "No sign-up required. Just paste a URL and download instantly.",
  },
]

export function FeaturesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Twitt?</h2>
          <p className="text-lg text-muted-foreground">The most reliable Twitter video downloader</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 group animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border animate-slide-in-down">
                    <p className="text-sm text-foreground">{feature.details}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
