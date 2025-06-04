'use client'

import React from 'react'
import { PricingCard } from './PricingCard'

export const PricingSection: React.FC = () => {
  const plans = [
    {
      plan: 'Starter',
      price: '$1.99',
      credits: '50 conversations',
      description: 'Perfect for trying Thinkers',
      isPopular: false,
      features: [
        'Create up to 3 custom Thinkers',
        '50 conversation credits',
        'Basic personality customization',
        'Mobile and web access',
        'Community support',
      ],
      ctaText: 'Start with Starter',
      href: 'https://apps.apple.com/us/app/thinkers-your-ai-team/id6743700517',
    },
    {
      plan: 'Active',
      price: '$7.99',
      credits: '250 conversations',
      description: 'For regular users',
      isPopular: true,
      features: [
        'Create unlimited Thinkers',
        '250 conversation credits',
        'Advanced personality settings',
        'Conversation history & export',
        'Priority support',
        'Early access to new features',
      ],
      ctaText: 'Choose Active',
      href: 'https://apps.apple.com/us/app/thinkers-your-ai-team/id6743700517',
    },
    {
      plan: 'Power',
      price: '$24.99',
      credits: '1000 conversations',
      description: 'For power users',
      isPopular: false,
      features: [
        'Everything in Active plan',
        '1000 conversation credits',
        'Custom AI training data',
        'API access',
        'Advanced analytics',
        'Dedicated support',
        'White-label options',
      ],
      ctaText: 'Go Power',
      href: 'https://apps.apple.com/us/app/thinkers-your-ai-team/id6743700517',
    },
  ]

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your conversation needs. All plans include our core features and privacy protection.
          </p>
          
          {/* Billing toggle - now just visual */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <div className="px-4 py-2 rounded-md bg-white text-gray-900 font-medium shadow-sm">
              Monthly
            </div>
            <div className="px-4 py-2 rounded-md text-gray-500 font-medium">
              Annual
              <span className="ml-1 text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              credits={plan.credits}
              description={plan.description}
              isPopular={plan.isPopular}
              features={plan.features}
              ctaText={plan.ctaText}
              href={plan.href}
            />
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  What happens when I run out of credits?
                </h4>
                <p className="text-gray-600">
                  You can purchase additional credits or upgrade your plan anytime. Your Thinkers and conversation history remain intact.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Can I change plans anytime?
                </h4>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Is my data secure?
                </h4>
                <p className="text-gray-600">
                  Absolutely. All conversations are encrypted end-to-end, and we never share your data with third parties.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Do you offer refunds?
                </h4>
                <p className="text-gray-600">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with Thinkers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 