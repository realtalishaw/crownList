"use client"

import { Crown, Search, Filter, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function MembersContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Crown className="h-8 w-8 text-purple-500 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Members Directory</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with pageant professionals, contestants, and enthusiasts from around the world
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search members..."
              className="pl-10 w-full"
            />
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <CardTitle className="text-lg">Member Name {index}</CardTitle>
                <CardDescription>Title / Role</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">View Profile</Button>
                <Button variant="secondary" size="sm">Connect</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Section */}
      <div className="text-center mt-12">
        <Button variant="outline" className="px-8">
          Load More Members
        </Button>
      </div>
    </div>
  )
}