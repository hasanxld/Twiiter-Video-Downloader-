import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - Twitt Twitter Video Downloader",
  description:
    "Read Twitt's terms of service. Understand the rules and guidelines for using our Twitter video downloader service.",
  keywords: "terms of service, terms and conditions, user agreement",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Twitt, you accept and agree to be bound by the terms and provision of this
                  agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p className="text-muted-foreground">
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  Twitt for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on Twitt</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on Twitt are provided on an 'as is' basis. Twitt makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                  intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall Twitt or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or
                  inability to use the materials on Twitt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
                <p className="text-muted-foreground">
                  The materials appearing on Twitt could include technical, typographical, or photographic errors. Twitt
                  does not warrant that any of the materials on Twitt are accurate, complete, or current. Twitt may make
                  changes to the materials contained on Twitt at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
                <p className="text-muted-foreground">
                  Twitt has not reviewed all of the sites linked to its website and is not responsible for the contents
                  of any such linked site. The inclusion of any link does not imply endorsement by Twitt of the site.
                  Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
                <p className="text-muted-foreground">
                  Twitt may revise these terms of service for Twitt at any time without notice. By using this website,
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws of the
                  jurisdiction in which Twitt operates, and you irrevocably submit to the exclusive jurisdiction of the
                  courts in that location.
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
