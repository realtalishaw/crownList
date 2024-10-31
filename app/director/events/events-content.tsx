"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Calendar, MapPin, Users, Edit2, Settings } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 'miss-universe-2024',
    title: 'Miss Universe 2024',
    date: '2024-09-15',
    location: 'Las Vegas, Nevada',
    contestants: 45,
    status: 'Active',
    applications: 12,
  },
  {
    id: 'miss-world-2024',
    title: 'Miss World 2024',
    date: '2024-10-20',
    location: 'London, UK',
    contestants: 32,
    status: 'Applications Open',
    applications: 28,
  },
]

export function EventsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events</h1>
          <p className="text-gray-600">Manage your pageants and competitions</p>
        </div>
        <Link href="/director/events/new">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5 mr-2" />
            Create Event
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search events..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Events List */}
      <div className="grid gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {event.contestants} contestants
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    event.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {event.status}
                  </span>
                  <div className="flex gap-2">
                    <Link href={`/director/events/${event.id}/schedule`}>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                    </Link>
                    <Link href={`/director/events/${event.id}/edit`}>
                      <Button variant="outline" size="sm">
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Applications</h4>
                    <p className="text-2xl font-bold text-purple-600">{event.applications}</p>
                    <p className="text-sm text-gray-500">Pending review</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Next Event</h4>
                    <p className="text-lg font-medium text-gray-900">Preliminary Interview</p>
                    <p className="text-sm text-gray-500">March 20, 2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Tasks</h4>
                    <p className="text-lg font-medium text-gray-900">8 pending</p>
                    <p className="text-sm text-gray-500">2 due today</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}