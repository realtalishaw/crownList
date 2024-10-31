"use client"

import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    id: "miss-universe-2024",
    title: "Miss Universe 2024",
    date: "2024-09-15",
    location: "Las Vegas, Nevada",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920",
  },
  {
    id: "miss-world-2024",
    title: "Miss World 2024",
    date: "2024-10-20",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1920",
  },
  {
    id: "miss-earth-2024",
    title: "Miss Earth 2024",
    date: "2024-11-15",
    location: "Manila, Philippines",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1920",
  },
]

export function LatestEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-gray-600">Don't miss these exciting pageant opportunities</p>
          </div>
          <Link href="/events">
            <Button variant="outline">View All Events</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}