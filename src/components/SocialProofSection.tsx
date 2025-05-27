import React from 'react'

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Designer',
      avatar: '👩‍💼',
      rating: 5,
      text: "Thinkers has completely changed how I brainstorm ideas. My AI design mentor asks the right questions and helps me think through problems in ways I never considered.",
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Software Engineer',
      avatar: '👨‍💻',
      rating: 5,
      text: "Finally, an AI that actually understands context and remembers our conversations. It's like having a coding buddy who's available 24/7 and never gets tired.",
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Researcher',
      avatar: '👩‍🔬',
      rating: 5,
      text: "The privacy-first approach won won me over immediately. I can discuss sensitive research topics knowing my conversations are secure and private.",
    },
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '500K+', label: 'Conversations' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Availability' },
  ]

  const trustBadges = [
    { icon: '🔒', label: 'SOC 2 Certified' },
    { icon: '🛡️', label: 'GDPR Compliant' },
    { icon: '⭐', label: 'ISO 27001' },
    { icon: '🔐', label: 'End-to-End Encryption' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Trusted by thousands of thinkers
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Your privacy and security are our top priority
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 