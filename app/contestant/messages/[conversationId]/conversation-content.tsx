"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Send, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const messages = [
  {
    id: '1',
    sender: 'Sarah Johnson',
    content: 'Hi! Looking forward to the upcoming event!',
    time: '2:30 PM',
    isSender: false,
  },
  {
    id: '2',
    sender: 'You',
    content: 'Thanks! Yes, it\'s going to be great.',
    time: '2:32 PM',
    isSender: true,
  },
]

export function ConversationContent({ conversationId }: { conversationId: string }) {
  const [newMessage, setNewMessage] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/contestant/messages"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Messages
        </Link>

        <Card className="h-[calc(100vh-12rem)]">
          <CardHeader className="border-b">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <User className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h2 className="font-medium">Sarah Johnson</h2>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.isSender
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.isSender ? 'text-purple-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSend} className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}