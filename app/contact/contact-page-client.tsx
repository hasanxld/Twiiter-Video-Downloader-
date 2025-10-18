"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckIcon, AlertIcon } from "@/components/svg-icons"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields")
      return
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-12 text-balance">
              Have a question or feedback? We'd love to hear from you. Get in touch with our team.
            </p>

            <form onSubmit={handleSubmit} className="border border-border rounded-lg p-8 bg-card space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-input w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-input w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-input w-full min-h-32 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {error && (
                <div className="flex items-center gap-3 p-4 border border-destructive rounded-lg bg-background">
                  <AlertIcon className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              {submitted && (
                <div className="flex items-center gap-3 p-4 border border-primary rounded-lg bg-background">
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-primary">Thank you! We'll get back to you soon.</p>
                </div>
              )}

              <button type="submit" className="border-button-primary w-full">
                Send Message
              </button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">support@twitt.com</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
