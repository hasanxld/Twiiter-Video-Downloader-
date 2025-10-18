import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Twitt Twitter Video Downloader",
  description:
    "Read Twitt's privacy policy. We are committed to protecting your data and privacy. No tracking, no data sharing.",
  keywords: "privacy policy, data protection, privacy statement",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Twitt ("we" or "us" or "our") operates the Twitt website. This page informs you of our policies
                  regarding the collection, use, and disclosure of personal data when you use our service and the
                  choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
                <p className="text-muted-foreground">
                  We collect several different types of information for various purposes to provide and improve our
                  service to you.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Usage Data: Information about how you access and use the service</li>
                  <li>Device Information: Information about your device and browser</li>
                  <li>Cookies: Small data files stored on your device</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
                <p className="text-muted-foreground">Twitt uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features of our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so we can improve our service</li>
                  <li>To monitor the usage of our service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
                <p className="text-muted-foreground">
                  The security of your data is important to us but remember that no method of transmission over the
                  Internet or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at support@twitt.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
