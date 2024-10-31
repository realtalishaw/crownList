"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Mail, MessageSquare, Users, Send } from "lucide-react"
import Link from "next/link"

const messages = [
  {
    id: '1',
    subject: 'Important Event Update',
    recipients: 'All Contestants',
    sent: '2024-03-15',
    status: 'Sent',
    opens: 45,
    clicks: 32,
  },
  {
    id: '2',
    subject: 'Schedule Change Notice',
    recipients: 'Miss Universe Contestants',
    sent: '2024-03-14',
    status: 'Draft',
    opens: 0,
    clicks: 0,
  },
]

export function CommunicationsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Communications</h1>
          <p className="text-gray-600">Manage contestant communications</p>
        </div>
        <div className="flex gap-4">
          <Link href="/director/communications/bulk">
            <Button variant="outline">
              <Users className="h-5 w-5 mr-2" />
              Bulk Message
            </Button>
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Mail className="h-5 w-5 mr-2" />
            New Message
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Mail className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">156</h3>
            <p className="text-sm text-gray-500">Messages Sent</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Average</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">92%</h3>
            <p className="text-sm text-gray-500">Open Rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Send className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-sm text-gray-500">Draft Messages</p>
          </CardContent>
        </Card>
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

      {/* Messages List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{message.subject}</h3>
                  <p className="text-sm text-gray-500">To: {message.recipients}</p>
                  <p className="text-sm text-gray-500">
                    {message.status === 'Sent'
                      ? `Sent on ${new Date(message.sent).toLocaleDateString()}`
                      : 'Draft'}
                  </p>
                </div>
                {message.status === 'Sent' ? (
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {message.opens} opens • {message.clicks} clicks
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      View Details
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
                      Send
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}