"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "./theme-provider"
import { MoonIcon, SunIcon, MenuIcon, CloseIcon } from "./svg-icons"

export function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsSidebarOpen(false)
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isSidebarOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`border-b border-border sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Visible on all screen sizes */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-primary rounded-lg animate-pulse-glow group-hover:animate-spin-slow transition-all" />
                <div className="absolute inset-1 border border-primary/50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-lg font-bold text-primary relative z-10">T</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Twitt
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 border border-border rounded-lg hover:bg-muted hover:border-primary transition-all duration-200 hover:scale-110"
                  aria-label="Toggle theme"
                >
                  {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 border border-border rounded-lg hover:bg-muted hover:border-primary transition-all duration-200"
                aria-label="Toggle menu"
                aria-expanded={isSidebarOpen}
              >
                {isSidebarOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-black/50 md:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-16 right-0 h-[calc(100vh-64px)] w-64 z-40 bg-background border-l border-border md:hidden transition-transform duration-300 ease-out overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary border border-border rounded-lg transition-all duration-200 hover:border-primary"
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
