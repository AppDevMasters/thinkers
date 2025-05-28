import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Thinkers - AI Conversation Platform'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #7916ff 0%, #2c0a74 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Inter, system-ui, sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Thinkers
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Create Your Perfect AI Conversation Partner
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
} 