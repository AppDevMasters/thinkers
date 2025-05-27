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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button
              variant="secondary"
              size="lg"
              href="https://apps.apple.com/app/thinkers"
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
          
          {/* Trust indicator */}
          <div className="text-primary-200 text-sm sm:text-base animate-fade-in">
            ✨ Join 10,000+ users having meaningful AI conversations
          </div>
        </div>
        
        {/* App screenshot mockup */}
        <div className="mt-16 max-w-5xl mx-auto animate-slide-up">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <p className="text-lg font-medium">Thinkers App Preview</p>
                  <p className="text-sm">Create and chat with AI personalities</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements around the mockup */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
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