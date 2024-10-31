"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MessageSquare, User } from "lucide-react"
import Link from "next/link"

const conversations = [
  {
    id: '1',
    name: 'Sarah Johnson',
    lastMessage: 'Looking forward to the upcoming event!',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: '2',
    name: 'Emily Davis',
    lastMessage: 'Thanks for your help with the preparation.',
    time: '1 day ago',
    unread: false,
  },
]

export function MessagesContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <MessageSquare className="h-5 w-5 mr-2" />
            New Message
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search messages..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Conversations List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {conversations.map((conversation) => (
                <Link
                  key={conversation.id}
                  href={`/contestant/messages/${conversation.id}`}
                  className="block py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">
                          {conversation.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {conversation.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>
                    {conversation.unread && (
                      <div className="h-2 w-2 bg-purple-600 rounded-full" />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}