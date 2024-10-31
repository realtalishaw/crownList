"use client"

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Award, Scissors, Users, ShoppingBag, Crown, Camera, Footprints, Gift, Palette, Paintbrush, Sparkles, Shirt, Dumbbell, Calendar, Flower2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const categories = [
  { id: 'pageants', name: 'Pageants', icon: Award },
  { id: 'hair-makeup', name: 'Hair & Makeup', icon: Scissors },
  { id: 'coaching', name: 'Coaching', icon: Users },
  { id: 'retailers', name: 'Retailers', icon: ShoppingBag },
  { id: 'jewelry-accessories', name: 'Jewelry', icon: Crown },
  { id: 'photography', name: 'Photography', icon: Camera },
  { id: 'designers', name: 'Designers', icon: Palette },
  { id: 'beauty-services', name: 'Beauty Services', icon: Sparkles },
  { id: 'wardrobe', name: 'Wardrobe', icon: Shirt },
  { id: 'fitness', name: 'Fitness', icon: Dumbbell },
  { id: 'event-planning', name: 'Event Planning', icon: Calendar },
]

export default function CategorySlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {showLeftArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-4 w-4 text-purple-600" />
        </Button>
      )}
      
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 py-4 px-2 scroll-smooth hide-scrollbar"
        onScroll={handleScroll}
      >
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.id}
              href={`/directory/categories/${category.id}`}
              className="flex-shrink-0 transform transition-all duration-300 hover:scale-105"
            >
              <Card className="w-32 transition-colors duration-300 hover:bg-purple-100 cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-4 h-32">
                  <Icon className="h-8 w-8 mb-2 text-purple-500 transition-colors duration-300" />
                  <span className="text-sm font-medium text-center text-gray-700 transition-colors duration-300">
                    {category.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {showRightArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-100"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-4 w-4 text-purple-600" />
        </Button>
      )}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}