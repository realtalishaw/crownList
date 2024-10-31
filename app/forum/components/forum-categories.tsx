"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MessageSquare, Users, ArrowRight } from 'lucide-react'

export function ForumCategories() {
  const categories = [
    {
      title: "General Discussion",
      description: "Open discussions about pageantry and related topics",
      threads: 324,
      posts: 1205
    },
    {
      title: "Competition Prep",
      description: "Tips and advice for pageant preparation",
      threads: 156,
      posts: 892
    },
    {
      title: "Pageant News",
      description: "Latest updates from the pageant world",
      threads: 89,
      posts: 445
    }
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">{category.title}</CardTitle>
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {category.threads} threads
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {category.posts} posts
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}