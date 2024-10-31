"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Trophy, ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"

const contestants = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Miss California',
    votes: 1234,
    rank: 1,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288',
  },
  {
    id: '2',
    name: 'Emily Davis',
    title: 'Miss Texas',
    votes: 1156,
    rank: 2,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1288',
  },
]

export function VotingEventContent({ eventId }: { eventId: string }) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/vote"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Voting Events
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {eventId.replace(/-/g, ' ').replace(/peoples choice/i, "People's Choice")}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Vote for your favorite contestant to help them win the people's choice award
        </p>
      </div>

      {/* Top 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contestants.slice(0, 3).map((contestant, index) => (
          <Card key={contestant.id} className="relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <Trophy className={`h-8 w-8 ${
                index === 0 ? 'text-yellow-500' :
                index === 1 ? 'text-gray-400' :
                'text-orange-500'
              }`} />
            </div>
            <div className="relative h-80">
              <img
                src={contestant.image}
                alt={contestant.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {contestant.name}
              </h3>
              <p className="text-gray-600 mb-4">{contestant.title}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Votes</p>
                  <p className="text-lg font-bold text-purple-600">
                    {contestant.votes.toLocaleString()}
                  </p>
                </div>
                <Link href={`/vote/${eventId}/contestant/${contestant.id}`}>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Vote
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search contestants..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* All Contestants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contestants.map((contestant) => (
          <Card key={contestant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <img
                src={contestant.image}
                alt={contestant.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {contestant.name}
              </h3>
              <p className="text-gray-600 mb-4">{contestant.title}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Votes</p>
                  <p className="text-lg font-bold text-purple-600">
                    {contestant.votes.toLocaleString()}
                  </p>
                </div>
                <Link href={`/vote/${eventId}/contestant/${contestant.id}`}>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Vote
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