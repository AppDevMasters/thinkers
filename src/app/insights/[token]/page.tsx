'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface SharedInsightData {
  content?: string
  generatedAt?: string
  thinker?: {
    name: string
    avatar?: string
    personality?: string
  }
  viewsRemaining?: number
  expiresAt?: string
  error?: string
}

export default function SharedInsightPage() {
  const params = useParams()
  const token = params.token as string
  const [data, setData] = useState<SharedInsightData | null>(null)
  const [loading, setLoading] = useState(true)
  const [attemptedAppOpen, setAttemptedAppOpen] = useState(false)

  useEffect(() => {
    // Try to open in app first (for iOS)
    if (!attemptedAppOpen && typeof window !== 'undefined') {
      setAttemptedAppOpen(true)
      
      // Try to open the app using a custom URL scheme
      const appUrl = `thinkers://insights/${token}`
      const appStoreUrl = 'https://apps.apple.com/app/thinkers-ai-companions/id6739299469'
      
      // Create a hidden iframe to attempt opening the app
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      iframe.src = appUrl
      document.body.appendChild(iframe)
      
      // Set a timeout to redirect to App Store if app doesn't open
      const timeout = setTimeout(() => {
        // Remove the iframe
        document.body.removeChild(iframe)
        
        // Check if we're still on this page (app didn't open)
        if (document.visibilityState === 'visible') {
          // On mobile devices, redirect to App Store
          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = appStoreUrl
          }
          // On desktop or if app isn't installed, continue loading the web view
          else {
            fetchInsight()
          }
        }
      }, 2500)
      
      // If the page becomes hidden, it means the app opened
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          clearTimeout(timeout)
          document.body.removeChild(iframe)
        }
      }
      
      document.addEventListener('visibilitychange', handleVisibilityChange)
      
      return () => {
        clearTimeout(timeout)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }
  }, [token, attemptedAppOpen])

  async function fetchInsight() {
    try {
      const response = await fetch(
        `https://us-central1-thinkers-283ce.cloudfunctions.net/getSharedInsight?token=${token}`
      )

      if (!response.ok) {
        const error = await response.json()
        setData({ error: error.error || 'Failed to load insight' })
      } else {
        const insightData = await response.json()
        setData(insightData)
      }
    } catch (error) {
      console.error('Error fetching shared insight:', error)
      setData({ error: 'Failed to load insight' })
    } finally {
      setLoading(false)
    }
  }

  // Show minimal loading state during app open attempt
  if (loading && !data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin mx-auto" />
          </div>
          <p className="text-white text-sm">Opening in Thinkers app...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  if (data.error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Insight Not Available</h1>
          <p className="text-gray-400 mb-8">{data.error}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Learn More About Thinkers
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    )
  }

  const { content, generatedAt, thinker, viewsRemaining, expiresAt } = data
  const formattedDate = generatedAt
    ? new Date(generatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Recent'

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l-7 7 7 7"
              />
            </svg>
            <span className="font-semibold">Thinkers</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* App Install Banner for Mobile */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 mb-8 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <p className="text-white font-semibold">View in Thinkers App</p>
                <p className="text-white/80 text-sm">Get the full experience</p>
              </div>
            </div>
            <a
              href="https://apps.apple.com/app/thinkers-ai-companions/id6739299469"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Open
            </a>
          </div>
        </div>

        {/* Thinker Info */}
        <div className="flex items-center gap-4 mb-8">
          {thinker?.avatar && (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <Image
                  src={`/avatars/${thinker.avatar}`}
                  alt={thinker.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-white">{thinker?.name || 'Thinker'}</h1>
            <p className="text-gray-400">{formattedDate}</p>
          </div>
        </div>

        {/* Insight Content */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Insight</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{content}</p>
          </div>
        </div>

        {/* Share Info */}
        {viewsRemaining !== undefined && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8">
            <p className="text-yellow-400 text-sm">
              This insight has {viewsRemaining} view{viewsRemaining !== 1 ? 's' : ''} remaining
              {expiresAt && ` and expires on ${new Date(expiresAt).toLocaleDateString()}`}.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want Your Own AI-Powered Insights?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Create your own AI companions that understand you, provide personalized insights, and help you think through life&apos;s challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/thinkers-ai-companions/id6739299469"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* App Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Personalized AI</h4>
            <p className="text-gray-400 text-sm">Create AI companions tailored to your unique needs and personality.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Daily Insights</h4>
            <p className="text-gray-400 text-sm">Receive thoughtful, AI-generated insights tailored to your schedule.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Privacy First</h4>
            <p className="text-gray-400 text-sm">Your data stays private. Use your own OpenAI API key for complete control.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Thinkers. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}