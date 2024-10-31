"use client"

import { MessageSquare, Users, TrendingUp, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ForumCategories } from './forum-categories'
import { TrendingTopics } from './trending-topics'
import { RecentDiscussions } from './recent-discussions'

export function ForumContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join the conversation with pageant enthusiasts from around the world
        </p>
      </div>

      {/* Search and Create Post */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search discussions..."
              className="pl-10 w-full"
            />
          </div>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Start New Discussion
        </Button>
      </div>

      {/* Forum Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard icon={MessageSquare} title="Total Discussions" value="2,547" />
        <StatCard icon={Users} title="Active Members" value="1,283" />
        <StatCard icon={TrendingUp} title="Daily Posts" value="142" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ForumCategories />
          <RecentDiscussions />
        </div>
        <div className="space-y-8">
          <TrendingTopics />
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-4">
      <div className="bg-purple-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}