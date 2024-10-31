"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Trophy, Calendar, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const votingEvents = [
  {
    id: 'miss-universe-2024-peoples-choice',
    title: "Miss Universe 2024 People's Choice",
    startDate: '2024-03-20',
    endDate: '2024-04-20',
    contestants: 45,
    totalVotes: 12567,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920',
    status: 'Active',
  },
  {
    id: 'miss-world-2024-peoples-choice',
    title: "Miss World 2024 People's Choice",
    startDate: '2024-04-01',
    endDate: '2024-05-01',
    contestants: 32,
    totalVotes: 0,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1920',
    status: 'Upcoming',
  },
]

export function VotingHomeContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">People's Choice Awards</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Support your favorite contestants by casting your vote in our official people's choice awards
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search voting events..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid gap-8">
        {votingEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 md:h-auto">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                      </div>
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

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Contestants</p>
                    <p className="text-xl font-bold text-gray-900">
                      {event.contestants}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Votes</p>
                    <p className="text-xl font-bold text-gray-900">
                      {event.totalVotes.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link href={`/vote/${event.id}`}>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Vote Now
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trophy Icon */}
      <div className="flex justify-center mt-12">
        <Trophy className="h-16 w-16 text-purple-200" />
      </div>
    </div>
  )
}