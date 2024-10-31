"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock } from 'lucide-react'

export function RecentDiscussions() {
  const discussions = [
    {
      title: "How to Choose the Perfect Evening Gown",
      author: "Sarah Johnson",
      time: "2 hours ago",
      replies: 12
    },
    {
      title: "Public Speaking Tips for Pageants",
      author: "Emily Davis",
      time: "4 hours ago",
      replies: 8
    },
    {
      title: "Fitness Routines for Pageant Prep",
      author: "Michelle Smith",
      time: "6 hours ago",
      replies: 15
    }
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
      <div className="space-y-4">
        {discussions.map((discussion, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg mb-2 hover:text-purple-600">
                {discussion.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>by {discussion.author}</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {discussion.time}
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {discussion.replies} replies
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}