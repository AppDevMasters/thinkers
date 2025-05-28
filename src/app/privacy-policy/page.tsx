import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-100 text-lg">
            Last updated: {today}
          </p>
          <Link 
            href="/"
            className="inline-block mt-6 text-secondary-300 hover:text-secondary-200 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-8">
          
          <Section 
            title="Our Commitment to Privacy"
            content="Thinkers is designed with privacy as a fundamental principle. We collect only the minimal data necessary to provide our AI conversation service, and we never collect any data without your explicit consent."
          />

          <Section 
            title="Information We Collect"
            content={
              <>
                <p className="mb-4"><strong>With Your Consent, We May Collect:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Account Information: Email address, display name, and authentication credentials when you create an account</li>
                  <li>Conversation Data: Your questions and AI responses to provide the conversation service</li>
                  <li>Usage Data: Number of questions asked and credits used for service management</li>
                  <li>Device Preferences: App settings and customizations stored locally on your device</li>
                  <li>Purchase Information: Transaction details for in-app purchases processed through Apple's App Store</li>
                </ul>
                
                <p className="mb-4"><strong>We Do NOT Collect:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device identifiers or advertising IDs</li>
                  <li>Location data</li>
                  <li>Contact lists or personal files</li>
                  <li>Biometric data</li>
                  <li>Third-party app usage data</li>
                </ul>
              </>
            }
          />

          <Section 
            title="How We Use Your Information"
            content={
              <>
                <p className="mb-4">We use your information solely to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Provide AI conversation services through our Thinkers</li>
                  <li>Maintain your conversation history and preferences</li>
                  <li>Process in-app purchases and manage credits</li>
                  <li>Provide customer support when requested</li>
                  <li>Improve our AI models and service quality (only with your explicit consent)</li>
                </ul>
                <p>We do not use your data for advertising, marketing to third parties, or any purpose beyond providing our core service.</p>
              </>
            }
          />

          <Section 
            title="Third-Party Services"
            content={
              <>
                <p className="mb-4">We use the following trusted services to operate our app:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Firebase (Google): For secure authentication and data storage</li>
                  <li>OpenAI: For AI conversation processing (your conversations are not used to train their models)</li>
                  <li>Apple App Store: For payment processing and app distribution</li>
                </ul>
                <p>All third-party services are bound by strict data processing agreements and privacy standards.</p>
              </>
            }
          />

          <Section 
            title="Data Storage and Security"
            content={
              <ul className="list-disc pl-6 space-y-2">
                <li>All data is encrypted in transit and at rest</li>
                <li>We use Firebase's secure cloud infrastructure with industry-standard security measures</li>
                <li>Your conversations are stored securely and are only accessible to you</li>
                <li>We implement multi-layered security including authentication, authorization, and access controls</li>
                <li>Regular security audits ensure ongoing protection of your data</li>
              </ul>
            }
          />

          <Section 
            title="Your Privacy Rights"
            content={
              <>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access all data we have about you</li>
                  <li>Export your conversation history and data</li>
                  <li>Delete your account and all associated data</li>
                  <li>Modify your privacy consent preferences at any time</li>
                  <li>Opt out of optional data collection (analytics, crash reporting)</li>
                  <li>Request correction of any inaccurate information</li>
                </ul>
                <p>To exercise these rights, contact us at info@appdevmasters.com.</p>
              </>
            }
          />

          <Section 
            title="Data Retention"
            content={
              <>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Conversation data: Retained until you delete it or close your account</li>
                  <li>Account information: Retained while your account is active</li>
                  <li>Purchase records: Retained as required by law and Apple's policies</li>
                  <li>Analytics data: Automatically deleted after 26 months (only if you've consented)</li>
                </ul>
                <p>When you delete your account, all personal data is permanently removed within 30 days, except where retention is required by law.</p>
              </>
            }
          />

          <Section 
            title="International Data Transfers"
            content={
              <>
                <p className="mb-4">Your data may be processed in the United States and other countries where our service providers operate. We ensure adequate protection through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard Contractual Clauses for EU data transfers</li>
                  <li>Adequacy decisions where applicable</li>
                  <li>Additional safeguards as required by applicable law</li>
                </ul>
              </>
            }
          />

          <Section 
            title="Children's Privacy"
            content="Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will delete it immediately."
          />

          <Section 
            title="California Privacy Rights (CCPA)"
            content={
              <>
                <p className="mb-4">California residents have additional rights:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale (we do not sell personal information)</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
                <p>To exercise these rights, contact us at info@appdevmasters.com.</p>
              </>
            }
          />

          <Section 
            title="European Privacy Rights (GDPR)"
            content={
              <>
                <p className="mb-4">If you are in the European Economic Area, you have additional rights under GDPR:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Right of access and data portability</li>
                  <li>Right to rectification and erasure</li>
                  <li>Right to restrict processing</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
                <p>Our lawful basis for processing is your consent and contract performance. Contact our Data Protection Officer at info@appdevmasters.com.</p>
              </>
            }
          />

          <Section 
            title="Changes to This Policy"
            content="We may update this privacy policy to reflect changes in our practices or applicable laws. We will notify you of material changes through the app or email. Continued use after changes constitutes acceptance of the updated policy."
          />

          <Section 
            title="Contact Information"
            content={
              <>
                <p className="mb-4">For privacy-related questions or requests:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@appdevmasters.com</p>
                  <p><strong>Company:</strong> AppDevMasters LTD</p>
                  <p><strong>Response Time:</strong> We respond to privacy requests within 30 days.</p>
                </div>
              </>
            }
          />

        </div>

        {/* Footer navigation */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors duration-200"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

interface SectionProps {
  title: string
  content: React.ReactNode
}

function Section({ title, content }: SectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>
      <div className="text-white/90 leading-relaxed">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  )
} 