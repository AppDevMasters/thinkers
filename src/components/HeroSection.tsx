'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './Button'

export const HeroSection: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: "Alex",
      role: "Creative Mentor",
      avatar: "/avatars/alex.png",
      fallbackEmoji: "🎨",
    },
    {
      id: 2,
      name: "Maya",
      role: "Life Coach",
      avatar: "/avatars/maya.png",
      fallbackEmoji: "🌟",
    },
    {
      id: 3,
      name: "Dr. Chen",
      role: "Science Advisor",
      avatar: "/avatars/dr-chen.png",
      fallbackEmoji: "🔬",
    },
    {
      id: 4,
      name: "Sofia",
      role: "Language Partner",
      avatar: "/avatars/sofia.png",
      fallbackEmoji: "🗣️",
    },
    {
      id: 5,
      name: "Marcus",
      role: "Tech Expert",
      avatar: "/avatars/marcus.png",
      fallbackEmoji: "💻",
    },
    {
      id: 6,
      name: "Luna",
      role: "Wellness Guide",
      avatar: "/avatars/luna.png",
      fallbackEmoji: "🧘",
    },
    {
      id: 7,
      name: "Oliver",
      role: "Business Mentor",
      avatar: "/avatars/oliver.png",
      fallbackEmoji: "💼",
    },
    {
      id: 8,
      name: "Zara",
      role: "Study Buddy",
      avatar: "/avatars/zara.png",
      fallbackEmoji: "📚",
    },
    {
      id: 9,
      name: "Phoenix",
      role: "Adventure Companion",
      avatar: "/avatars/phoenix.png",
      fallbackEmoji: "🌍",
    },
    {
      id: 10,
      name: "Sage",
      role: "Philosophy Friend",
      avatar: "/avatars/sage.png",
      fallbackEmoji: "🤔",
    }
  ]

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-12">
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

          {/* Avatar showcase */}
          <div className="animate-slide-up">
            <p className="text-primary-100 mb-6">Choose from diverse AI personalities:</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {agents.map((agent, index) => (
                <div 
                  key={agent.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Image
                      src={agent.avatar}
                      alt={`${agent.name} - ${agent.role}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-2xl">${agent.fallbackEmoji}</span>`;
                        }
                      }}
                    />
                  </div>
                  {/* Tooltip on hover */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {agent.name} - {agent.role}
                  </div>
                </div>
              ))}
            </div>
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