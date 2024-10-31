"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSession } from "@/hooks/use-session"
import {
  Crown,
  Users,
  Calendar,
  TrendingUp,
  Plus,
  ListChecks,
  Star,
} from "lucide-react"
import Link from "next/link"

export function DashboardContent() {
  const { user } = useSession()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.user_metadata?.organization_name || 'Director'}!
        </h1>
        <p className="text-gray-600">
          Manage your pageants and contestants from one place
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={Crown}
          title="Active Pageants"
          value="3"
          trend="+1 this month"
          color="text-purple-600"
          bgColor="bg-purple-100"
        />
        <StatsCard
          icon={Users}
          title="Total Contestants"
          value="156"
          trend="+12 this week"
          color="text-blue-600"
          bgColor="bg-blue-100"
        />
        <StatsCard
          icon={Calendar}
          title="Upcoming Events"
          value="8"
          trend="Next 30 days"
          color="text-green-600"
          bgColor="bg-green-100"
        />
        <StatsCard
          icon={Star}
          title="Applications"
          value="24"
          trend="Pending review"
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <QuickActionButton
                href="/director/events/new"
                icon={Plus}
                label="Create Pageant"
              />
              <QuickActionButton
                href="/director/events"
                icon={Calendar}
                label="View Events"
              />
              <QuickActionButton
                href="/director/contestants"
                icon={Users}
                label="Contestants"
              />
              <QuickActionButton
                href="/director/applications"
                icon={ListChecks}
                label="Applications"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ActivityItem
                title="New Application"
                description="Sarah Johnson applied for Miss Universe 2024"
                time="2 hours ago"
              />
              <ActivityItem
                title="Event Update"
                description="Schedule updated for Miss World 2024"
                time="5 hours ago"
              />
              <ActivityItem
                title="Document Submission"
                description="Emily Davis submitted required documents"
                time="1 day ago"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Upcoming Events</CardTitle>
            <Link href="/director/events">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <EventItem
              title="Miss Universe 2024"
              date="September 15, 2024"
              location="Las Vegas, Nevada"
              contestants={45}
              status="Active"
            />
            <EventItem
              title="Miss World 2024"
              date="October 20, 2024"
              location="London, UK"
              contestants={32}
              status="Applications Open"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatsCard({ icon: Icon, title, value, trend, color, bgColor }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg ${bgColor} mr-4`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-gray-500">{trend}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function QuickActionButton({ href, icon: Icon, label }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Icon className="h-6 w-6 text-gray-600 mb-2" />
      <span className="text-sm text-gray-700 text-center">{label}</span>
    </Link>
  )
}

function ActivityItem({ title, description, time }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 mt-2 rounded-full bg-purple-600" />
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  )
}

function EventItem({ title, date, location, contestants, status }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="text-sm text-gray-500">{location}</span>
        </div>
      </div>
      <div className="text-right">
        <span className={`px-3 py-1 rounded-full text-sm ${
          status === 'Active'
            ? 'bg-green-100 text-green-700'
            : 'bg-blue-100 text-blue-700'
        }`}>
          {status}
        </span>
        <p className="text-sm text-gray-500 mt-1">
          {contestants} contestants
        </p>
      </div>
    </div>
  )
}