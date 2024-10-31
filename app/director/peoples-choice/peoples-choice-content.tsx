"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Users, Trophy, DollarSign } from "lucide-react"
import Link from "next/link"

const votingEvents = [
  {
    id: 'miss-universe-2024-peoples-choice',
    title: "Miss Universe 2024 People's Choice",
    startDate: '2024-03-20',
    endDate: '2024-04-20',
    contestants: 45,
    totalVotes: 12567,
    revenue: 6283.50,
    status: 'Active',
  },
  {
    id: 'miss-world-2024-peoples-choice',
    title: "Miss World 2024 People's Choice",
    startDate: '2024-04-01',
    endDate: '2024-05-01',
    contestants: 32,
    totalVotes: 0,
    revenue: 0,
    status: 'Upcoming',
  },
]

export function PeoplesChoiceContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">People's Choice</h1>
          <p className="text-gray-600">Manage voting events and track results</p>
        </div>
        <Link href="/director/peoples-choice/new">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5 mr-2" />
            Create Voting Event
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Trophy className="h-5 w-5 text-purple-600" />
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
            <h3 className="text-2xl font-bold text-gray-900">12,567</h3>
            <p className="text-sm text-gray-500">Total Votes</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Revenue</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$6,283.50</h3>
            <p className="text-sm text-gray-500">Total Revenue</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search voting events..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Events List */}
      <div className="grid gap-6">
        {votingEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500">
                    <span>
                      {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  event.status === 'Active'
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
                  <p className="text-sm text-gray-500">Total Votes</p>
                  <p className="font-medium">{event.totalVotes.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="font-medium">${event.revenue.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-4">
                <Link href={`/vote/${event.id}`}>
                  <Button variant="outline">View Voting Page</Button>
                </Link>
                <Link href={`/director/peoples-choice/${event.id}/contestants`}>
                  <Button variant="outline">Manage Contestants</Button>
                </Link>
                <Link href={`/director/peoples-choice/${event.id}/edit`}>
                  <Button variant="outline">Edit Event</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}