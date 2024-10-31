"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
      <p className="text-gray-600 mb-8">An error occurred while loading this page.</p>
      <Button 
        onClick={reset}
        className="bg-purple-600 hover:bg-purple-700"
      >
        Try again
      </Button>
    </div>
  )
}