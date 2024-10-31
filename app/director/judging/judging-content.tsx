"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, Crown, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 'miss-universe-2024',
    title: 'Miss Universe 2024',
    date: '2024-09-15',
    location: 'Las Vegas, Nevada',
    contestants: 45,
    judges: 7,
    status: 'In Progress',
  },
  {
    id: 'miss-world-2024',
    title: 'Miss World 2024',
    date: '2024-10-20',
    location: 'London, UK',
    contestants: 32,
    judges: 5,
    status: 'Upcoming',
  },
]

export function JudgingContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Judging Management</h1>
          <p className="text-gray-600">Manage scoring and judging for all events</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Manage Judges
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Crown className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">2</h3>
            <p className="text-sm text-gray-500">Active Events</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">12</h3>
            <p className="text-sm text-gray-500">Active Judges</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Complete</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">85%</h3>
            <p className="text-sm text-gray-500">Scoring Progress</p>
          </CardContent>
        </Card>
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
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  event.status === 'In Progress'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {event.status}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Contestants</p>
                  <p className="font-medium">{event.contestants}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Judges</p>
                  <p className="font-medium">{event.judges}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Scoring Progress</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{ width: '75%' }}
                      />
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-4">
                <Link href={`/director/judging/${event.id}/results`}>
                  <Button variant="outline">View Results</Button>
                </Link>
                <Link href={`/director/judging/${event.id}`}>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Manage Scoring
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}