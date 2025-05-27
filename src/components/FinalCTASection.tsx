'use client'

import React from 'react'
import { Button } from './Button'

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to meet your perfect{' '}
          <span className="bg-gradient-to-r from-secondary-300 to-secondary-100 bg-clip-text text-transparent">
            AI conversation partner?
          </span>
        </h2>
        
        <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
          Join thousands of users already having meaningful conversations with their custom AI personalities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            variant="secondary"
            size="lg"
            href="https://apps.apple.com/app/thinkers"
            className="w-full sm:w-auto"
          >
            Download Thinkers
          </Button>
          
          <span className="text-primary-200">or</span>
          
          <a
            href="#pricing"
            className="text-white hover:text-secondary-200 font-medium underline underline-offset-4 transition-colors"
          >
            View Pricing Plans
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-primary-200">
          <div className="flex items-center space-x-2">
            <span>🔒</span>
            <span className="text-sm">Your data is secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>⚡</span>
            <span className="text-sm">Start in under 60 seconds</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>💯</span>
            <span className="text-sm">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
} 