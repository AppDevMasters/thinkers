import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { PricingSection } from '@/components/PricingSection'
import { FinalCTASection } from '@/components/FinalCTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <FinalCTASection />
    </main>
  )
} 