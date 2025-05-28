import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Copyright */}
          <p className="text-gray-400 mb-4">
            © 2025 App Dev Masters LTD
          </p>
          
          {/* Legal links */}
          <div className="flex justify-center space-x-8">
            <a 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-conditions" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 