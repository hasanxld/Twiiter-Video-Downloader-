"use client"

import { AnimatedSparkleIcon, AnimatedRocketIcon, AnimatedBoltIcon } from "./svg-icons"

export function AnimatedHero() {
  return (
    <div className="relative overflow-hidden py-8 md:py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <AnimatedSparkleIcon className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground text-center">Premium Quality</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <AnimatedRocketIcon className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground text-center">Lightning Fast</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <AnimatedBoltIcon className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground text-center">Instant Access</p>
        </div>
      </div>
    </div>
  )
}
