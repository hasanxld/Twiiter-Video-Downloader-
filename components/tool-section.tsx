"use client"

import type React from "react"
import { useState } from "react"
import { DownloadIcon, LoadingSpinner, AlertIcon, CheckIcon } from "./svg-icons"
import { AnimatedHero } from "./animated-hero"

interface VideoData {
  url: string
  title: string
  thumbnail: string
  duration: number
  quality: string
  author?: string
  authorHandle?: string
  authorAvatar?: string
  views?: number
  likes?: number
  createdAt?: string
}

export function ToolSection() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setVideoData(null)

    if (!url.trim()) {
      setError("Please enter a Twitter/X video URL")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/download-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to download video")
      }

      setVideoData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleDirectDownload = async () => {
    if (!videoData?.url) return

    setDownloading(true)
    try {
      const response = await fetch("/api/proxy-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoUrl: videoData.url }),
      })

      if (!response.ok) throw new Error("Download failed")

      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = downloadUrl
      a.download = `${videoData.title || "video"}.mp4`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(downloadUrl)
      document.body.removeChild(a)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed")
    } finally {
      setDownloading(false)
    }
  }

  const handleReset = () => {
    setUrl("")
    setVideoData(null)
    setError("")
  }

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* CHANGE: Enhanced heading with better sizing */}
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance leading-tight">
            Download Twitter Videos Instantly
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Fast, free, and easy-to-use Twitter/X video downloader. No registration required.
          </p>
        </div>

        <AnimatedHero />

        {/* CHANGE: Enhanced tool form with better spacing and sizing */}
        <form
          onSubmit={handleDownload}
          className="border-2 border-border rounded-xl p-6 md:p-10 lg:p-12 bg-card animate-slide-in-up mt-12 md:mt-16"
        >
          <div className="space-y-6">
            {/* URL Input */}
            <div>
              <label htmlFor="url" className="block text-base md:text-lg font-semibold text-foreground mb-3">
                Twitter/X Video URL
              </label>
              <input
                id="url"
                type="url"
                placeholder="https://x.com/username/status/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border-input w-full text-base md:text-lg py-3 md:py-4 px-4"
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-start gap-3 p-4 md:p-5 border border-destructive rounded-lg bg-background animate-slide-in-down">
                <AlertIcon className="w-5 h-5 md:w-6 md:h-6 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-destructive">{error}</p>
              </div>
            )}

            {/* Download Button - CHANGE: Larger and more prominent */}
            <button
              type="submit"
              disabled={loading}
              className="border-button-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform py-4 md:py-5 text-base md:text-lg font-semibold"
            >
              {loading ? (
                <>
                  <LoadingSpinner className="w-6 h-6 md:w-7 md:h-7" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <DownloadIcon className="w-6 h-6 md:w-7 md:h-7" />
                  <span>Download Video</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* CHANGE: Enhanced results section with better mobile layout */}
        {videoData && (
          <div className="mt-8 md:mt-12 border-2 border-border rounded-xl p-6 md:p-10 lg:p-12 bg-card animate-slide-in-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-2 md:gap-3">
                <CheckIcon className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                  Video Ready to Download
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                Download Another
              </button>
            </div>

            <div className="space-y-6 md:space-y-8">
              {/* Thumbnail */}
              {videoData.thumbnail && (
                <div className="relative w-full aspect-video border-2 border-border rounded-lg overflow-hidden bg-muted">
                  <img
                    src={videoData.thumbnail || "/placeholder.svg"}
                    alt={videoData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Author Info */}
              {videoData.author && (
                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 border-2 border-border rounded-lg bg-muted">
                  {videoData.authorAvatar && (
                    <img
                      src={videoData.authorAvatar || "/placeholder.svg"}
                      alt={videoData.author}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-border flex-shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="text-base md:text-lg font-semibold text-foreground truncate">{videoData.author}</p>
                    <p className="text-sm md:text-base text-muted-foreground truncate">@{videoData.authorHandle}</p>
                  </div>
                </div>
              )}

              {/* Video Info */}
              <div>
                <p className="text-sm md:text-base text-muted-foreground mb-2">Title</p>
                <p className="text-lg md:text-xl font-semibold text-foreground text-balance">{videoData.title}</p>
              </div>

              {/* Stats Grid - CHANGE: Better mobile layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="p-3 md:p-4 border border-border rounded-lg">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-base md:text-lg font-semibold text-foreground">
                    {Math.round(videoData.duration)}s
                  </p>
                </div>
                <div className="p-3 md:p-4 border border-border rounded-lg">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">Quality</p>
                  <p className="text-base md:text-lg font-semibold text-foreground">{videoData.quality}</p>
                </div>
                {videoData.views !== undefined && (
                  <div className="p-3 md:p-4 border border-border rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Views</p>
                    <p className="text-base md:text-lg font-semibold text-foreground">
                      {videoData.views.toLocaleString()}
                    </p>
                  </div>
                )}
                {videoData.likes !== undefined && (
                  <div className="p-3 md:p-4 border border-border rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Likes</p>
                    <p className="text-base md:text-lg font-semibold text-foreground">
                      {videoData.likes.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>

              {/* Download Button - CHANGE: Direct download with proxy */}
              <div className="pt-6 md:pt-8 border-t-2 border-border">
                <p className="text-sm md:text-base text-muted-foreground mb-4">Download Options</p>
                <button
                  onClick={handleDirectDownload}
                  disabled={downloading}
                  className="border-button-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform py-4 md:py-5 text-base md:text-lg font-semibold"
                >
                  {downloading ? (
                    <>
                      <LoadingSpinner className="w-6 h-6 md:w-7 md:h-7" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <DownloadIcon className="w-6 h-6 md:w-7 md:h-7" />
                      <span>Download MP4</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
