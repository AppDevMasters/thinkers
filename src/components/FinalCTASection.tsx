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
          Start creating meaningful conversations with your personalized AI personalities today.
        </p>

        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            href="https://apps.apple.com/app/thinkers"
            className="text-lg px-12 py-4"
          >
            Download Thinkers
          </Button>
        </div>
      </div>
    </section>
  )
} 