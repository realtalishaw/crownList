"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar as CalendarIcon,
  ArrowLeft,
  Trash2,
} from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import Link from "next/link"

export function EditEventContent({ eventId }: { eventId: string }) {
  const [date, setDate] = useState<Date>(new Date("2024-09-15"))

  // In a real app, fetch event data based on eventId
  const event = {
    title: "Miss Universe 2024",
    date: new Date("2024-09-15"),
    location: "Las Vegas, Nevada",
    capacity: 50,
    description: "The most prestigious beauty pageant in the world.",
    requirements: "Contestants must be between 18-28 years old.",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/events"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Events
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Event</h1>
          <p className="text-gray-600">Update event details and settings</p>
        </div>
        <Button variant="destructive" className="flex items-center">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  defaultValue={event.title}
                />
              </div>

              <div className="space-y-2">
                <Label>Event Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  defaultValue={event.location}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacity">Maximum Contestants</Label>
                <Input
                  id="capacity"
                  type="number"
                  defaultValue={event.capacity}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                defaultValue={event.description}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Entry Requirements</Label>
              <Textarea
                id="requirements"
                defaultValue={event.requirements}
                rows={4}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}