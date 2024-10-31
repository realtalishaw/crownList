"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft, Filter } from "lucide-react"
import Link from "next/link"

const categories = {
  national: {
    name: 'National Pageants',
    description: 'Major national competitions and preliminaries',
  },
  international: {
    name: 'International Pageants',
    description: 'Worldwide pageant competitions',
  },
  state: {
    name: 'State Pageants',
    description: 'State-level competitions and preliminaries',
  },
  teen: {
    name: 'Teen Pageants',
    description: 'Competitions for teenage contestants',
  },
  charity: {
    name: 'Charity Pageants',
    description: 'Events supporting charitable causes',
  },
  specialty: {
    name: 'Specialty Pageants',
    description: 'Niche and themed competitions',
  },
}

const events = [
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

interface EventCategoryPageProps {
  categoryId: string
}

export function EventCategoryPage({ categoryId }: EventCategoryPageProps) {
  const category = categories[categoryId as keyof typeof categories]

  if (!category) {
    return null // Handle 404 in the page component
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/events/categories"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Categories
      </Link>

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{category.description}</p>
      </div>

      <div className="flex justify-end mb-8">
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter Events
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
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
  )
}