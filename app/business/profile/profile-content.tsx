"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, MapPin, Globe, Mail, Phone, Pencil, Star } from "lucide-react"
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
                <AvatarImage src={user?.user_metadata?.business_logo} />
                <AvatarFallback>
                  <Building className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {user?.user_metadata?.business_name || 'Business Name'}
                </h1>
                <p className="text-gray-600 mb-4">Premium Service Provider</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Badge icon={Star}>4.9 Rating</Badge>
                  <Badge icon={MapPin}>New York, USA</Badge>
                  <Badge icon={Building}>Since 2020</Badge>
                </div>
              </div>
              <Link href="/business/profile/edit">
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
                <CardTitle className="text-xl">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <BusinessHour day="Monday" hours="9:00 AM - 6:00 PM" />
                  <BusinessHour day="Tuesday" hours="9:00 AM - 6:00 PM" />
                  <BusinessHour day="Wednesday" hours="9:00 AM - 6:00 PM" />
                  <BusinessHour day="Thursday" hours="9:00 AM - 6:00 PM" />
                  <BusinessHour day="Friday" hours="9:00 AM - 6:00 PM" />
                  <BusinessHour day="Saturday" hours="10:00 AM - 4:00 PM" />
                  <BusinessHour day="Sunday" hours="Closed" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional pageant services provider with over 10 years of experience.
                  Specializing in coaching, styling, and comprehensive pageant preparation.
                  Our team of experts is dedicated to helping contestants achieve their goals
                  and shine on stage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Service
                    title="Pageant Coaching"
                    description="One-on-one coaching sessions for interview preparation and stage presence"
                    price="From $150/hour"
                  />
                  <Service
                    title="Styling Services"
                    description="Professional styling and wardrobe consultation"
                    price="From $200/session"
                  />
                  <Service
                    title="Competition Prep Package"
                    description="Comprehensive preparation package including coaching, styling, and more"
                    price="Custom pricing"
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

function BusinessHour({ day, hours }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{day}</span>
      <span className="text-gray-900 font-medium">{hours}</span>
    </div>
  )
}

function Service({ title, description, price }) {
  return (
    <div className="border-b last:border-0 pb-4 last:pb-0">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <span className="text-purple-600 font-medium">{price}</span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}