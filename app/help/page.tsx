import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center'
}

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Help Center</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Get support and learn how to make the most of The Crown List platform.
      </p>
    </div>
  )
}