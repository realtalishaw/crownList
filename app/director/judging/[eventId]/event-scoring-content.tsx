"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

const contestants = [
  {
    id: '1',
    name: 'Sarah Johnson',
    number: '101',
    state: 'California',
    scores: {
      interview: 8.5,
      talent: 9.0,
      evening_gown: 8.8,
    }
  },
  {
    id: '2',
    name: 'Emily Davis',
    number: '102',
    state: 'New York',
    scores: {
      interview: 9.0,
      talent: 8.7,
      evening_gown: 9.2,
    }
  },
]

export function EventScoringContent({ eventId }: { eventId: string }) {
  const [activeCategory, setActiveCategory] = useState('interview')

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/judging"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Judging Management
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Scoring</h1>
          <p className="text-gray-600">Manage scores for {eventId.replace(/-/g, ' ')}</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Finalize Scores
        </Button>
      </div>

      {/* Category Selection */}
      <div className="flex gap-4 mb-8">
        {['interview', 'talent', 'evening_gown'].map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            {category.replace(/_/g, ' ').charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search contestants..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Scoring Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Number</th>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">State</th>
                  <th className="text-left p-4">Score</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contestants.map((contestant) => (
                  <tr key={contestant.id} className="border-b last:border-0">
                    <td className="p-4">{contestant.number}</td>
                    <td className="p-4">{contestant.name}</td>
                    <td className="p-4">{contestant.state}</td>
                    <td className="p-4">
                      {contestant.scores[activeCategory].toFixed(1)}
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="outline" size="sm">
                        Edit Score
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}