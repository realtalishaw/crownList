"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Users, Star, Crown, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contestants = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Miss Universe 2024 Contestant',
    age: 24,
    location: 'New York, USA',
    status: 'Active',
    completionRate: 85,
  },
  {
    id: '2',
    name: 'Emily Davis',
    title: 'Miss World 2024 Contestant',
    age: 22,
    location: 'Los Angeles, USA',
    status: 'Pending',
    completionRate: 60,
  },
]

export function ContestantManagementContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contestants</h1>
          <p className="text-gray-600">Manage and track contestant progress</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Export Data
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">156</h3>
            <p className="text-sm text-gray-500">Active Contestants</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Average</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">85%</h3>
            <p className="text-sm text-gray-500">Profile Completion</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Crown className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">New</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24</h3>
            <p className="text-sm text-gray-500">This Month</p>
          </CardContent>
        </Card>
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

      {/* Contestants List */}
      <div className="grid gap-6">
        {contestants.map((contestant) => (
          <Link
            key={contestant.id}
            href={`/director/contestants/${contestant.id}`}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{contestant.name}</h3>
                      <p className="text-sm text-gray-500">{contestant.title}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    contestant.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {contestant.status}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-medium">{contestant.age}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{contestant.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Profile Completion</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-purple-600 rounded-full"
                          style={{ width: `${contestant.completionRate}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {contestant.completionRate}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}