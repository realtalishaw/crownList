"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Contestant {
  id: string
  name: string
  title: string
  votes: number
  rank: number
}

const contestants: Contestant[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Miss California',
    votes: 1234,
    rank: 1,
  },
  {
    id: '2',
    name: 'Emily Davis',
    title: 'Miss Texas',
    votes: 1156,
    rank: 2,
  },
]

export function ManageContestantsContent({ eventId }: { eventId: string }) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/peoples-choice"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to People's Choice
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Contestants</h1>
          <p className="text-gray-600">Add and manage contestants for this voting event</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Contestant
        </Button>
      </div>

      <div className="mb-6">
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

      <div className="grid gap-4">
        {contestants.map((contestant) => (
          <Card key={contestant.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{contestant.name}</h3>
                  <p className="text-gray-600">{contestant.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Current Rank</p>
                  <p className="text-2xl font-bold text-purple-600">#{contestant.rank}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Votes</p>
                  <p className="font-medium">{contestant.votes.toLocaleString()}</p>
                </div>
                <div className="space-x-2">
                  <Button variant="outline">Edit</Button>
                  <Button variant="outline" className="text-red-600 hover:text-red-700">Remove</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}