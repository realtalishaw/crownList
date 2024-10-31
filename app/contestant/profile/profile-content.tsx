"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, MapPin, Calendar, Mail, Phone, Globe, Pencil, User } from "lucide-react"
import Link from "next/link"
import { useSession } from "@/hooks/use-session"

export function ProfileContent() {
  const { user } = useSession()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback>
                  <User className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {user?.user_metadata?.full_name || 'Contestant Name'}
                </h1>
                <p className="text-gray-600 mb-4">Pageant Contestant</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Badge icon={Trophy}>Miss Universe 2023 Finalist</Badge>
                  <Badge icon={MapPin}>New York, USA</Badge>
                  <Badge icon={Calendar}>Active since 2020</Badge>
                </div>
              </div>
              <Link href="/contestant/profile/edit">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ContactItem icon={Mail} label="Email" value={user?.email || 'email@example.com'} />
                <ContactItem icon={Phone} label="Phone" value="+1 (555) 123-4567" />
                <ContactItem icon={Globe} label="Website" value="www.example.com" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <Achievement
                    title="Miss Universe 2023"
                    description="Top 10 Finalist"
                    date="December 2023"
                  />
                  <Achievement
                    title="Miss New York 2023"
                    description="Winner"
                    date="June 2023"
                  />
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Passionate pageant contestant with a focus on women's empowerment and education.
                  Currently pursuing a degree in International Relations while actively participating
                  in community service initiatives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Platform & Causes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Cause
                    title="Education for All"
                    description="Working to provide educational opportunities for underprivileged children"
                  />
                  <Cause
                    title="Environmental Conservation"
                    description="Leading initiatives for sustainable practices and environmental awareness"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function Badge({ children, icon: Icon }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
      <Icon className="h-4 w-4 mr-1" />
      {children}
    </span>
  )
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center">
      <Icon className="h-5 w-5 text-gray-400 mr-2" />
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  )
}

function Achievement({ title, description, date }) {
  return (
    <li className="border-l-2 border-purple-200 pl-4">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-purple-600">{description}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </li>
  )
}

function Cause({ title, description }) {
  return (
    <div>
      <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}