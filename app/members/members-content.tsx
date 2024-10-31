"use client"

import { Crown, Search, Filter, MapPin, MessageCircle, UserPlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function MembersContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Crown className="h-8 w-8 text-purple-500 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Members Directory</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with pageant professionals, contestants, and enthusiasts from around the world
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search members..."
              className="pl-10 w-full"
            />
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <Link href={`/members/${index}`} className="block">
              <div className="relative h-48 bg-purple-100">
                <Image
                  src={`https://source.unsplash.com/random/400x300?portrait&${index}`}
                  alt={`Member ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">Miss California 2023</p>
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Contestant
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>Los Angeles, CA</span>
                </div>
              </CardContent>
            </Link>
            <Separator />
            <div className="p-4 flex justify-between items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((follower) => (
                  <div 
                    key={follower} 
                    className="h-6 w-6 rounded-full border-2 border-white overflow-hidden bg-purple-100"
                  >
                    <Image
                      src={`https://source.unsplash.com/random/100x100?face&${follower}`}
                      alt="Follower"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="h-6 px-2 flex items-center text-xs text-gray-500 bg-gray-50 rounded-full border-2 border-white">
                  +42
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-purple-600 hover:bg-purple-50"
                >
                  <UserPlus className="h-4 w-4 mr-1" />
                  Follow
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More Section */}
      <div className="text-center mt-12">
        <Button variant="outline" className="px-8">
          Load More Members
        </Button>
      </div>
    </div>
  )
}