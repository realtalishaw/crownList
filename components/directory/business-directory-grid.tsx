"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import BusinessCard from './business-card'
import { SAMPLE_BUSINESSES } from '@/data/sample-businesses'

export default function BusinessDirectoryGrid() {
  const [displayedBusinesses, setDisplayedBusinesses] = useState(SAMPLE_BUSINESSES.slice(0, 4))
  const [isLoading, setIsLoading] = useState(false)
  
  const hasMore = displayedBusinesses.length < SAMPLE_BUSINESSES.length

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      const nextBatch = SAMPLE_BUSINESSES.slice(
        displayedBusinesses.length,
        displayedBusinesses.length + 4
      )
      setDisplayedBusinesses([...displayedBusinesses, ...nextBatch])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-[1400px] mx-auto p-4 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {displayedBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
      
      {isLoading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
        </div>
      )}
      
      {!isLoading && hasMore && (
        <div className="flex justify-center">
          <Button 
            onClick={loadMore}
            variant="outline"
            className="hover:bg-purple-50"
          >
            Load More
          </Button>
        </div>
      )}
      
      {!hasMore && (
        <p className="text-center text-gray-500">No more businesses to load</p>
      )}
    </div>
  )
}