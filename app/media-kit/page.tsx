import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media Kit'
}

export default function MediaKitPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Media Kit</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Access press resources, brand assets, and media information for The Crown List.
      </p>
    </div>
  )
}