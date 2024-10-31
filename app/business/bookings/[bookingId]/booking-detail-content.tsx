"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"

// This would typically come from an API or database
const getBooking = (id: string) => {
  return {
    id,
    clientName: 'Sarah Johnson',
    service: 'Pageant Coaching Session',
    date: '2024-03-20',
    time: '10:00 AM',
    duration: '1 hour',
    status: 'Confirmed',
    location: 'Studio A, 123 Main St',
    notes: 'First-time client, focusing on interview preparation',
    clientEmail: 'sarah@example.com',
    clientPhone: '+1 (555) 123-4567',
  }
}

export function BookingDetailContent({ bookingId }: { bookingId: string }) {
  const booking = getBooking(bookingId)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/business/bookings"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Bookings
        </Link>

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Booking Details
            </h1>
            <p className="text-gray-600">
              Reference ID: #{booking.id}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            booking.status === 'Confirmed'
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {booking.status}
          </span>
        </div>

        <div className="grid gap-6">
          {/* Client Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-purple-600" />
                Client Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{booking.clientName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{booking.clientEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{booking.clientPhone}</p>
              </div>
            </CardContent>
          </Card>

          {/* Appointment Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Appointment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="font-medium">{booking.service}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{booking.duration}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">
                    {new Date(booking.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{booking.time}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{booking.location}</p>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-purple-600" />
                Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{booking.notes}</p>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">
              Reschedule
            </Button>
            <Button variant="outline" className="text-red-600 hover:text-red-700">
              Cancel Booking
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Send Reminder
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}