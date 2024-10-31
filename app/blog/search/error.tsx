'use client'

import { AlertCircle } from 'lucide-react'

export default function BlogSearchError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-4">
          {error.message || 'Error loading search results'}
        </p>
        <button
          onClick={reset}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 