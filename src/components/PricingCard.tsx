import React from 'react'
import { Button } from './Button'

interface PricingCardProps {
  plan: string
  price: string
  credits: string
  description: string
  isPopular?: boolean
  features: string[]
  ctaText: string
  href: string
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  credits,
  description,
  isPopular = false,
  features,
  ctaText,
  href,
}) => {
  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        </div>
      )}
      
      {/* Plan header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan}</h3>
        <div className="text-4xl font-bold text-primary-600 mb-1">{price}</div>
        <div className="text-gray-500 mb-2">{credits}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Features list */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-500 mr-3 mt-0.5">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* CTA button */}
      <Button
        variant={isPopular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
        href={href}
      >
        {ctaText}
      </Button>
      
      {/* Additional info */}
      <div className="text-center mt-4 text-sm text-gray-500">
        No hidden fees • Cancel anytime
      </div>
    </div>
  )
} 