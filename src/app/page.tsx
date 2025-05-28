import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { AIAgentsSection } from '@/components/AIAgentsSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { FinalCTASection } from '@/components/FinalCTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AIAgentsSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
} 