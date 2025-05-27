import React from 'react'
import { FeatureCard } from './FeatureCard'

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Custom AI Personalities',
      description: 'Create unique Thinkers with distinct personalities, expertise, and conversation styles. Each AI adapts to your preferences and learns from your interactions.',
    },
    {
      icon: '💬',
      title: 'Natural Conversations',
      description: 'Chat naturally with AI that remembers context and adapts to your communication style. Experience conversations that feel genuine and engaging.',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your conversations are private and secure. You have full control over your data and privacy settings. We believe your thoughts should remain yours.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Thinkers?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of AI conversation with features designed for meaningful, secure, and personalized interactions.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Additional trust signals */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>End-to-end encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>GDPR compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>No data selling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 