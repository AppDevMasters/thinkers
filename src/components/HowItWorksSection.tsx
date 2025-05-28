import React from 'react'

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Thinker',
      description: 'Choose personality traits, expertise areas, and conversation style. Customize your AI companion to match your interests and needs.',
      icon: '🎨',
    },
    {
      number: '02',
      title: 'Start Chatting',
      description: 'Ask questions, share thoughts, or explore new ideas. Your Thinker adapts to your communication style and remembers your preferences.',
      icon: '💭',
    },
    {
      number: '03',
      title: 'Build Relationships',
      description: 'Watch your Thinkers evolve and learn from your conversations. Each interaction makes them more personalized and helpful.',
      icon: '🤝',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Thinkers in three simple steps. Create, chat, and build meaningful AI relationships.
          </p>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile timeline dot */}
                <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-400"></div>
                
                <div className="relative bg-white lg:bg-transparent p-6 lg:p-8 rounded-xl lg:rounded-none border lg:border-0 border-gray-100 lg:text-center">
                  {/* Step number circle */}
                  <div className="relative lg:mx-auto w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 z-10">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 lg:text-center">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 