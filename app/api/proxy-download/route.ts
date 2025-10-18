import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { videoUrl } = await request.json()

    if (!videoUrl) {
      return NextResponse.json({ message: "Video URL is required" }, { status: 400 })
    }

    // Validate URL is from Twitter/X CDN
    if (!videoUrl.includes("video.twimg.com") && !videoUrl.includes("pbs.twimg.com")) {
      return NextResponse.json({ message: "Invalid video URL" }, { status: 400 })
    }

    // Fetch the video from the source
    const videoResponse = await fetch(videoUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!videoResponse.ok) {
      return NextResponse.json({ message: "Failed to fetch video" }, { status: 500 })
    }

    const buffer = await videoResponse.arrayBuffer()

    // Return the video with proper headers for download
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": 'attachment; filename="video.mp4"',
        "Content-Length": buffer.byteLength.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json({ message: "Download failed" }, { status: 500 })
  }
}
