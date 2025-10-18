import type { Metadata } from "next"

import ContactPageClient from "./contact-page-client"

export const metadata: Metadata = {
  title: "Contact Twitt - Get Support for Twitter Video Downloader",
  description:
    "Contact Twitt support team. We respond within 24 hours. Have questions about our Twitter video downloader?",
  keywords: "contact twitt, twitter downloader support, customer service",
}

export default function ContactPage() {
  return <ContactPageClient />
}
