"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  ArrowLeft,
  Trash2,
  GripVertical,
} from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import Link from "next/link"

export function EventScheduleContent({ eventId }: { eventId: string }) {
  const [selectedDate, setSelectedDate] = useState<Date>()

  // Example schedule items
  const scheduleItems = [
    {
      id: 1,
      title: "Registration & Check-in",
      date: "2024-09-15",
      time: "9:00 AM",
      duration: "2 hours",
      location: "Main Hall",
    },
    {
      id: 2,
      title: "Preliminary Interviews",
      date: "2024-09-15",
      time: "2:00 PM",
      duration: "4 hours",
      location: "Interview Rooms",
    },
    {
      id: 3,
      title: "Evening Gown Competition",
      date: "2024-09-15",
      time: "7:00 PM",
      duration: "3 hours",
      location: "Grand Ballroom",
    },
  ]

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Schedule</h1>
          <p className="text-gray-600">Manage event timeline and activities</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Schedule Item
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="mr-4 cursor-move">
                          <GripVertical className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {item.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {item.time} ({item.duration})
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Export Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Send to Contestants
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Print Schedule
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}