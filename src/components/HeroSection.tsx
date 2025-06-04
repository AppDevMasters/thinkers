'use client'

import React from 'react'
import { Button } from './Button'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in">
            Create Your Perfect{' '}
            <span className="bg-gradient-to-r from-secondary-300 to-secondary-100 bg-clip-text text-transparent">
              AI Conversation Partner
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Design custom AI personalities, chat naturally, and explore endless conversations with Thinkers
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              variant="secondary"
              size="lg"
              href="https://apps.apple.com/app/6743700517"
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              Download on App Store
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#features"
              className="w-full sm:w-auto text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
} 