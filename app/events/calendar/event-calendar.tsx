"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: "miss-universe-2024",
    title: "Miss Universe 2024",
    date: new Date("2024-09-15"),
    location: "Las Vegas, Nevada",
    category: "International",
  },
  {
    id: "miss-world-2024",
    title: "Miss World 2024",
    date: new Date("2024-10-20"),
    location: "London, UK",
    category: "International",
  },
]

export function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<'month' | 'day'>('month')

  const selectedDateEvents = events.filter(event => 
    date && event.date.toDateString() === date.toDateString()
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Event Calendar</h1>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setView(view === 'month' ? 'day' : 'month')}
            >
              {view === 'month' ? 'Day View' : 'Month View'}
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Today
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="md:col-span-2">
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-lg font-semibold">
                  {date?.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </Card>
          </div>

          {/* Events for selected date */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Events for {date?.toLocaleDateString()}
            </h3>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <span className="text-sm text-purple-600 font-medium">
                        {event.category}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                No events scheduled for this date
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}