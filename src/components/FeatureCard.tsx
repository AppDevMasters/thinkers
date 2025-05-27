import React from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
  style?: React.CSSProperties
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
  style,
}) => {
  return (
    <div className={`feature-card ${className}`} style={style}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
} 