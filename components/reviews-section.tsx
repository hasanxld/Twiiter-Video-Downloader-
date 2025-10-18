"use client"

import { useState } from "react"
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "./svg-icons"

const reviews = [
  {
    name: "Alex Johnson",
    role: "Content Creator",
    text: "Twitt is the fastest video downloader I have used. Highly recommended!",
    rating: 5,
    avatar: "AJ",
  },
  {
    name: "Sarah Williams",
    role: "Social Media Manager",
    text: "Simple, fast, and reliable. This tool saves me hours every week.",
    rating: 5,
    avatar: "SW",
  },
  {
    name: "Mike Chen",
    role: "Digital Marketer",
    text: "Best Twitter video downloader out there. No ads, no hassle.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emma Davis",
    role: "Video Editor",
    text: "Perfect for my workflow. Downloads are always high quality.",
    rating: 5,
    avatar: "ED",
  },
  {
    name: "James Wilson",
    role: "Journalist",
    text: "Reliable and fast. I use it daily for my research.",
    rating: 5,
    avatar: "JW",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ]

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Users Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by thousands of users worldwide</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg animate-slide-in-up bg-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 text-balance text-sm">{review.text}</p>
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

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="p-2 border border-border rounded-lg hover:bg-muted hover:border-primary transition-all duration-200 hover:scale-110"
              aria-label="Previous reviews"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 border border-border rounded-lg hover:bg-muted hover:border-primary transition-all duration-200 hover:scale-110"
              aria-label="Next reviews"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
