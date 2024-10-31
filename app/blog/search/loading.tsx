import { Loader2 } from 'lucide-react'

export default function BlogSearchLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Searching posts...</p>
      </div>
    </div>
  )
} 