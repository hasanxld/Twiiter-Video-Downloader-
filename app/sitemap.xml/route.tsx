export async function GET() {
  const baseUrl = "https://twitt-downloader.com"

  const urls = [
    { url: "/", lastmod: new Date().toISOString(), changefreq: "daily", priority: "1.0" },
    { url: "/features", lastmod: new Date().toISOString(), changefreq: "weekly", priority: "0.8" },
    { url: "/reviews", lastmod: new Date().toISOString(), changefreq: "weekly", priority: "0.8" },
    { url: "/about", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.7" },
    { url: "/contact", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.7" },
    { url: "/privacy", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.5" },
    { url: "/terms", lastmod: new Date().toISOString(), changefreq: "monthly", priority: "0.5" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (item) => `
  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>
  `,
    )
    .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
