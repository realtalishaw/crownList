"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Plus, Clock, User } from "lucide-react"
import { useState } from "react"

const events = [
  {
    id: '1',
    title: 'Pageant Coaching Session',
    client: 'Sarah Johnson',
    time: '10:00 AM',
    duration: '1 hour',
  },
  {
    id: '2',
    title: 'Styling Consultation',
    client: 'Emily Davis',
    time: '2:00 PM',
    duration: '2 hours',
  },
]

export function CalendarContent() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-5 w-5 mr-2" />
          Block Time
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-lg bg-gray-50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <User className="h-4 w-4 mr-1" />
                        {event.client}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.time} • {event.duration}
                  </div>
                </div>
              ))}

              {events.length === 0 && (
                <p className="text-center text-gray-500">
                  No events scheduled for this day
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}