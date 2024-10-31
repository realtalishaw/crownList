"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Clock, Phone, Mail, Globe, Instagram, Star, StarHalf } from 'lucide-react'
import { Business } from '@/types/business'

interface BusinessCardProps {
  business: Business
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  
  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
    </div>
  )
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <Card className="relative flex flex-col min-h-[420px] w-full">
      <div className="relative p-4">
        {business.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-purple-600">
            Featured
          </Badge>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`} 
          />
        </Button>
      </div>

      <div className="flex-1 px-4 pb-4">
        <div className="space-y-4">
          <div className="relative mx-auto w-20 h-20 rounded-full overflow-hidden bg-gray-100">
            <img 
              src={business.logoUrl} 
              alt={`${business.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center space-y-2">
            <h3 className="font-bold text-lg leading-tight">{business.name}</h3>
            <StarRating rating={business.rating} />
            <p className="text-sm text-gray-600">{business.tagline}</p>
            <div className="flex items-center justify-center gap-1 text-sm text-purple-600">
              <Clock className="w-4 h-4" />
              <span>Last active {business.lastActive}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {business.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t bg-white p-4 space-y-4">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          More Info
        </Button>
        <div className="flex justify-center gap-4">
          {business.contacts.phone && (
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
              <Phone className="w-5 h-5" />
            </Button>
          )}
          {business.contacts.email && (
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
              <Mail className="w-5 h-5" />
            </Button>
          )}
          {business.contacts.website && (
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
              <Globe className="w-5 h-5" />
            </Button>
          )}
          {business.contacts.instagram && (
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600">
              <Instagram className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}