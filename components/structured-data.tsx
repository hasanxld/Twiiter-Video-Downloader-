export function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Twitt - Twitter Video Downloader",
    description: "Fast, free, and easy-to-use Twitter/X video downloader. Download videos in HD quality instantly.",
    url: "https://twitt-downloader.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1250",
    },
    author: {
      "@type": "Organization",
      name: "Twitt",
      url: "https://twitt-downloader.com",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
