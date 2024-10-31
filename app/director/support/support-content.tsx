"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { HelpCircle, MessageSquare, FileText, ExternalLink } from "lucide-react"

export function SupportContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Support</h1>
        </div>

        {/* Quick Help */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold">Live Chat</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Chat with our support team in real-time
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold">Documentation</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Browse our comprehensive guides
              </p>
              <Button variant="outline" className="w-full">
                View Docs
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold">FAQs</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Find answers to common questions
              </p>
              <Button variant="outline" className="w-full">
                Browse FAQs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter subject" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your issue..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachments">Attachments</Label>
                <Input id="attachments" type="file" multiple />
                <p className="text-sm text-gray-500">
                  Max file size: 10MB. Supported formats: JPG, PNG, PDF
                </p>
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}