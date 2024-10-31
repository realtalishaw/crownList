"use client"

import { Crown } from 'lucide-react'

export function BusinessContent({ businessId }: { businessId: string }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Crown className="h-8 w-8 text-purple-500 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Business Profile</h1>
      </div>
      <p className="text-center text-gray-600">
        Viewing business profile: {businessId}
      </p>
    </div>
  )
}