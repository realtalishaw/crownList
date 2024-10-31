"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Flame } from 'lucide-react'

export function TrendingTopics() {
  const topics = [
    {
      title: "Tips for First-Time Contestants",
      replies: 45,
      views: 1200
    },
    {
      title: "Interview Preparation Guide",
      replies: 32,
      views: 890
    },
    {
      title: "Stage Presence Techniques",
      replies: 28,
      views: 756
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
              <h3 className="font-medium hover:text-purple-600 cursor-pointer">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-500">
                {topic.replies} replies · {topic.views} views
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}