import React from 'react'

export const AIAgentsSection: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: "Alex",
      role: "Creative Mentor",
      avatar: "🎨",
      description: "Helps with creative projects, brainstorming, and artistic inspiration",
      personality: "Imaginative • Encouraging • Insightful"
    },
    {
      id: 2,
      name: "Maya",
      role: "Life Coach",
      avatar: "🌟",
      description: "Guides personal growth, goal setting, and mindfulness practices",
      personality: "Supportive • Wise • Motivational"
    },
    {
      id: 3,
      name: "Dr. Chen",
      role: "Science Advisor",
      avatar: "🔬",
      description: "Explains complex topics in physics, chemistry, and biology",
      personality: "Analytical • Patient • Curious"
    },
    {
      id: 4,
      name: "Sofia",
      role: "Language Partner",
      avatar: "🗣️",
      description: "Practices conversations and helps learn new languages",
      personality: "Friendly • Cultural • Adaptive"
    },
    {
      id: 5,
      name: "Marcus",
      role: "Tech Expert",
      avatar: "💻",
      description: "Discusses programming, gadgets, and emerging technologies",
      personality: "Logical • Innovative • Practical"
    },
    {
      id: 6,
      name: "Luna",
      role: "Wellness Guide",
      avatar: "🧘",
      description: "Focuses on mental health, meditation, and self-care",
      personality: "Calm • Empathetic • Healing"
    },
    {
      id: 7,
      name: "Oliver",
      role: "Business Mentor",
      avatar: "💼",
      description: "Advises on entrepreneurship, strategy, and career growth",
      personality: "Strategic • Ambitious • Insightful"
    },
    {
      id: 8,
      name: "Zara",
      role: "Study Buddy",
      avatar: "📚",
      description: "Helps with learning, research, and academic challenges",
      personality: "Patient • Organized • Encouraging"
    },
    {
      id: 9,
      name: "Phoenix",
      role: "Adventure Companion",
      avatar: "🌍",
      description: "Shares travel stories and outdoor activity recommendations",
      personality: "Adventurous • Worldly • Energetic"
    },
    {
      id: 10,
      name: "Sage",
      role: "Philosophy Friend",
      avatar: "🤔",
      description: "Explores deep questions about life, meaning, and existence",
      personality: "Thoughtful • Profound • Questioning"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Your AI Companions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from diverse AI personalities, each with unique expertise and conversation styles. Create deeper connections with AI that truly understands you.
          </p>
        </div>

        {/* Agents grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {agents.map((agent, index) => (
            <div 
              key={agent.id} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                {agent.avatar}
              </div>
              
              {/* Name and role */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {agent.name}
              </h3>
              <p className="text-primary-600 font-medium text-sm mb-3">
                {agent.role}
              </p>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {agent.description}
              </p>
              
              {/* Personality traits */}
              <div className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                {agent.personality}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ...and create unlimited custom personalities that match your unique interests
          </p>
          <div className="inline-flex items-center space-x-2 text-primary-600">
            <span className="text-sm font-medium">Start chatting with your perfect AI companion</span>
            <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </section>
  )
} 