"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Star,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

// This would typically come from an API or database
const getContestant = (id: string) => {
  return {
    id,
    name: 'Sarah Johnson',
    title: 'Miss Universe 2024 Contestant',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    age: 24,
    location: 'New York, USA',
    status: 'Active',
    bio: 'Passionate about women empowerment and education...',
    completionRate: 85,
    events: [
      {
        title: 'Preliminary Interview',
        date: '2024-03-20',
        score: 85,
      },
      {
        title: 'Evening Gown',
        date: '2024-03-21',
        score: 92,
      },
    ],
    documents: [
      {
        name: 'Application Form',
        status: 'Approved',
      },
      {
        name: 'Photo Release',
        status: 'Pending',
      },
    ],
  }
}

export function ContestantDetailContent({ contestantId }: { contestantId: string }) {
  const contestant = getContestant(contestantId)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/contestants"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Contestants
      </Link>

      {/* Profile Header */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={contestant.avatar} />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {contestant.name}
                </h1>
                <p className="text-gray-600">{contestant.title}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    contestant.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {contestant.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    Profile Completion: {contestant.completionRate}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{contestant.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{contestant.phone}</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{contestant.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Event Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contestant.events.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{event.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Required Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contestant.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="font-medium">{doc.name}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    doc.status === 'Approved'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}