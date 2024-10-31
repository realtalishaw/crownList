"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Users, Send } from "lucide-react"
import Link from "next/link"

export function BulkMessagingContent() {
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([])

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/communications"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Communications
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bulk Messaging</h1>
          <p className="text-gray-600">Send messages to multiple contestants</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Message Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Enter message subject"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message Content</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-[200px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Personalization</Label>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">Add Name</Button>
                  <Button variant="outline" size="sm">Add Event</Button>
                  <Button variant="outline" size="sm">Add Date</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recipients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span>All Contestants</span>
                </div>
                <span className="text-sm text-gray-500">156</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span>Miss Universe Contestants</span>
                </div>
                <span className="text-sm text-gray-500">45</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span>Miss World Contestants</span>
                </div>
                <span className="text-sm text-gray-500">32</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Schedule Send</Label>
                <Input type="datetime-local" />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full">
                Save as Draft
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}