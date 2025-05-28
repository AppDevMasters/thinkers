import React from 'react'
import Link from 'next/link'

export default function TermsConditions() {
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
            Terms & Conditions
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
          
          <div className="text-white/90 leading-relaxed mb-8">
            <p>Welcome to Thinkers. By downloading or using this app, you agree to the following terms and conditions:</p>
          </div>

          <Section 
            title="1. Use of the App"
            content="This app is provided for personal, non-commercial use only. You may not copy, distribute, or reverse engineer any part of the app. You agree to use Thinkers responsibly and in accordance with all applicable laws and regulations."
          />

          <Section 
            title="2. Intellectual Property"
            content="All content, design, code, and AI models within the Thinkers app and website are the intellectual property of App Dev Masters LTD and may not be used without permission. This includes but is not limited to our AI conversation technology, user interface design, and proprietary algorithms."
          />

          <Section 
            title="3. User Content and AI Conversations"
            content="You retain ownership of your conversation content. However, by using our AI services, you grant us a limited license to process your conversations to provide the service. We do not claim ownership of your personal conversations or use them for training purposes without your explicit consent."
          />

          <Section 
            title="4. Account Responsibilities"
            content="You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. You agree not to share your account with others or use the service for any illegal or harmful purposes."
          />

          <Section 
            title="5. Service Availability"
            content="We strive to maintain continuous service availability but cannot guarantee uninterrupted access. The service may be temporarily unavailable for maintenance, updates, or due to factors beyond our control. We reserve the right to modify or discontinue features with reasonable notice."
          />

          <Section 
            title="6. Payment and Subscriptions"
            content="All payments are processed through Apple's App Store and are subject to their terms and conditions. Subscription fees are billed in advance and are non-refundable except as required by law or our refund policy. You may cancel your subscription at any time through your Apple ID account settings."
          />

          <Section 
            title="7. Prohibited Uses"
            content={
              <>
                <p className="mb-4">You agree not to use Thinkers for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any illegal, harmful, or fraudulent activities</li>
                  <li>Harassment, abuse, or harmful content generation</li>
                  <li>Attempting to circumvent usage limits or security measures</li>
                  <li>Sharing inappropriate content with AI personalities</li>
                  <li>Commercial use without proper licensing</li>
                </ul>
              </>
            }
          />

          <Section 
            title="8. Disclaimer"
            content="The app is provided 'as is' without any warranties, express or implied. We make no guarantees regarding the accuracy, performance, or outcomes of using this app. AI responses are generated automatically and may not always be accurate or appropriate. Users should exercise judgment when relying on AI-generated content."
          />

          <Section 
            title="9. Limitation of Liability"
            content="App Dev Masters LTD shall not be held liable for any direct, indirect, incidental, special, or consequential losses or damages arising from your use of the app, including but not limited to data loss, business interruption, or AI-generated content. Our total liability is limited to the amount you paid for the service in the 12 months preceding the claim."
          />

          <Section 
            title="10. Privacy and Data Protection"
            content="Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. Please review our Privacy Policy to understand how we handle your data."
          />

          <Section 
            title="11. Termination"
            content="We may terminate or suspend your account and access to the service at our discretion, with or without notice, for violation of these terms or for any other reason. Upon termination, your right to use the service ceases immediately, though certain provisions of these terms will survive termination."
          />

          <Section 
            title="12. Governing Law"
            content="These terms are governed by and construed in accordance with the laws of the jurisdiction where App Dev Masters LTD is incorporated, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration or in the courts of that jurisdiction."
          />

          <Section 
            title="13. Changes to Terms"
            content="We may update these terms from time to time to reflect changes in our services or applicable laws. We will notify you of material changes through the app or email. Continued use of the app after changes means you accept the updated terms."
          />

          <Section 
            title="14. Severability"
            content="If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law."
          />

          <Section 
            title="15. Contact Information"
            content={
              <>
                <p className="mb-4">If you have any questions about these Terms & Conditions, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@appdevmasters.com</p>
                  <p><strong>Company:</strong> App Dev Masters LTD</p>
                  <p><strong>Response Time:</strong> We respond to inquiries within 48 hours.</p>
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