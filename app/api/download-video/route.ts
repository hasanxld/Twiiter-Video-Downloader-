import { type NextRequest, NextResponse } from "next/server"

const API_KEY = process.env.TWITTER_VIDEO_API_KEY
const API_URL = "https://zylalabs.com/api/4127/twitter+video+downloader+api/4984/video+download"

// Simple in-memory rate limiting (in production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 30) {
    // 30 requests per minute
    return false
  }

  limit.count++
  return true
}

function validateTwitterUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    const hostname = urlObj.hostname
    const pathname = urlObj.pathname

    // Check if it's a valid Twitter/X URL
    if (!["x.com", "twitter.com", "www.x.com", "www.twitter.com"].includes(hostname)) {
      return false
    }

    // Check if it contains /status/ path
    if (!pathname.includes("/status/")) {
      return false
    }

    return true
  } catch {
    return false
  }
}

function extractBestQualityVideo(media: any) {
  if (!media || !media.videos || media.videos.length === 0) {
    return null
  }

  const video = media.videos[0]
  if (!video.variants || video.variants.length === 0) {
    return video.url
  }

  // Sort by bitrate (highest first) to get best quality
  const sortedVariants = [...video.variants].sort((a, b) => {
    const bitrateA = a.bitrate || 0
    const bitrateB = b.bitrate || 0
    return bitrateB - bitrateA
  })

  // Return highest bitrate MP4 or fallback to first variant
  const bestMp4 = sortedVariants.find((v) => v.content_type === "video/mp4")
  return bestMp4?.url || sortedVariants[0]?.url || video.url
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!API_KEY) {
      console.error("[v0] TWITTER_VIDEO_API_KEY environment variable is not set")
      return NextResponse.json({ message: "API key not configured. Please contact support." }, { status: 500 })
    }

    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "60" } },
      )
    }

    const body = await request.json()
    const { url } = body

    // Validate URL presence
    if (!url || typeof url !== "string") {
      return NextResponse.json({ message: "Please provide a valid Twitter/X video URL" }, { status: 400 })
    }

    // Validate URL format
    if (!validateTwitterUrl(url)) {
      return NextResponse.json({ message: "Invalid Twitter/X URL. Please provide a valid video URL." }, { status: 400 })
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })

    if (!response.ok) {
      console.error("[v0] API Error:", response.status, response.statusText)
      return NextResponse.json(
        { message: "Failed to download video. Please check the URL and try again." },
        { status: response.status },
      )
    }

    const apiData = await response.json()

    // Check if API returned an error
    if (apiData.error || apiData.code !== 200) {
      console.error("[v0] API Error Response:", apiData)
      return NextResponse.json({ message: apiData.message || "Failed to process video" }, { status: 400 })
    }

    const tweet = apiData.tweet
    const bestVideoUrl = extractBestQualityVideo(tweet.media)

    const videoData = {
      url: bestVideoUrl,
      title: tweet.text || "Twitter Video",
      thumbnail: tweet.media?.videos?.[0]?.thumbnail_url || "/twitter-video-thumbnail.png",
      duration: tweet.media?.videos?.[0]?.duration || 0,
      quality: "Best Available",
      author: tweet.author?.name || "Unknown",
      authorHandle: tweet.author?.screen_name || "",
      authorAvatar: tweet.author?.avatar_url || "",
      views: tweet.views || 0,
      likes: tweet.likes || 0,
      createdAt: tweet.created_at || "",
    }

    return NextResponse.json(videoData, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "X-Content-Type-Options": "nosniff",
      },
    })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ message: "Failed to process video. Please try again." }, { status: 500 })
  }
}
