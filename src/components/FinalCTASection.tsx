'use client'

import React, { useState } from 'react'
import { Button } from './Button'

export const FinalCTASection: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsLoading(true)
    
    // Track email signup
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sign_up', {
        method: 'email'
      })
    }
    
    try {
      // Here you would typically send the email to your backend
      // For now, we'll simulate the request
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      setEmail('')
    } catch (error) {
      console.error('Email signup failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetStarted = () => {
    // Track button click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Final CTA Get Started',
      })
    }
    
    window.open('https://app.thinkers.team', '_blank')
  }

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

        {!isSubmitted ? (
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                disabled={isLoading}
                className="px-8"
              >
                {isLoading ? 'Signing up...' : 'Get 10 Free Chats'}
              </Button>
            </form>
            
            <p className="text-primary-200 text-sm mt-4">
              No credit card required • Get started in seconds
            </p>
          </div>
        ) : (
          <div className="max-w-md mx-auto mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Welcome to Thinkers!
            </h3>
            <p className="text-primary-200 mb-4">
              Check your email for your 10 free conversation credits and get started.
            </p>
            <Button
              variant="secondary"
              onClick={handleGetStarted}
              className="w-full"
            >
              Start Chatting Now
            </Button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleGetStarted}
            className="w-full sm:w-auto"
          >
            Get Started Free
          </Button>
          
          <span className="text-primary-200">or</span>
          
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white hover:text-secondary-200 font-medium underline underline-offset-4 transition-colors"
          >
            View Pricing Plans
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-primary-200">
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