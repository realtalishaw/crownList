"use client"

import { Crown } from 'lucide-react'

const categoryNames = {
  'pageants': 'Pageants',
  'hair-makeup': 'Hair & Makeup',
  'coaching': 'Coaching',
  'retailers': 'Retailers',
  'jewelry-accessories': 'Jewelry & Accessories',
  'photography': 'Photography',
  'designers': 'Designers',
  'beauty-services': 'Beauty Services',
} as const

type CategoryId = keyof typeof categoryNames

export function CategoryContent({ categoryId }: { categoryId: string }) {
  const categoryName = categoryNames[categoryId as CategoryId] || 'Category'

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Crown className="h-8 w-8 text-purple-500 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">
          {categoryName}
        </h1>
      </div>
      <p className="text-center text-gray-600">
        Browse {categoryName} listings
      </p>
    </div>
  )
}