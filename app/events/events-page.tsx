"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Search, Filter, Crown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

const featuredEvents = [
  {
    id: "miss-universe-2024",
    title: "Miss Universe 2024",
    date: "2024-09-15",
    location: "Las Vegas, Nevada",
    category: "International",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920",
  },
  {
    id: "miss-world-2024",
    title: "Miss World 2024",
    date: "2024-10-20",
    location: "London, UK",
    category: "International",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1920",
  },
]

const categories = [
  {
    id: 'national',
    name: 'National Pageants',
    count: 45,
  },
  {
    id: 'international',
    name: 'International Pageants',
    count: 28,
  },
  {
    id: 'state',
    name: 'State Pageants',
    count: 156,
  },
]

export function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/events/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Crown className="h-12 w-12 text-purple-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Next Competition</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover and enter prestigious pageants across the globe
        </p>

        <form onSubmit={handleSearch} className="flex gap-4 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search events by name, location, or category..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            Search
          </Button>
        </form>
      </div>

      {/* Categories Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
          <Link href="/events/categories">
            <Button variant="ghost" className="gap-2">
              View All Categories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/events/categories/${category.id}`}
              className="group"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-500">{category.count} events</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Events */}
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
          <Link href="/events/calendar">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              View Calendar
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}