"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSession } from "@/hooks/use-session"
import {
  Building,
  Users,
  DollarSign,
  Star,
  TrendingUp,
  Calendar,
  Plus,
  ListChecks,
} from "lucide-react"
import Link from "next/link"

export function DashboardContent() {
  const { user } = useSession()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.user_metadata?.business_name || 'Business Owner'}!
        </h1>
        <p className="text-gray-600">
          Here's an overview of your business performance
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={Users}
          title="Total Clients"
          value="124"
          trend="+12% this month"
          color="text-blue-600"
          bgColor="bg-blue-100"
        />
        <StatsCard
          icon={DollarSign}
          title="Revenue"
          value="$12,450"
          trend="+8% this month"
          color="text-green-600"
          bgColor="bg-green-100"
        />
        <StatsCard
          icon={Star}
          title="Average Rating"
          value="4.8"
          trend="95 reviews"
          color="text-yellow-600"
          bgColor="bg-yellow-100"
        />
        <StatsCard
          icon={Calendar}
          title="Bookings"
          value="28"
          trend="This month"
          color="text-purple-600"
          bgColor="bg-purple-100"
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
                href="/business/listings/new"
                icon={Plus}
                label="Create Listing"
              />
              <QuickActionButton
                href="/business/bookings"
                icon={Calendar}
                label="View Bookings"
              />
              <QuickActionButton
                href="/business/analytics"
                icon={TrendingUp}
                label="Analytics"
              />
              <QuickActionButton
                href="/business/reviews"
                icon={Star}
                label="Reviews"
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
                title="New Booking"
                description="Sarah Johnson booked a consultation"
                time="2 hours ago"
              />
              <ActivityItem
                title="New Review"
                description="5-star review from Emily Davis"
                time="5 hours ago"
              />
              <ActivityItem
                title="Listing Update"
                description="Updated service pricing"
                time="1 day ago"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks and Goals */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Tasks & Goals</CardTitle>
            <Button variant="outline" size="sm">
              <ListChecks className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <TaskItem
              title="Complete Business Profile"
              progress={85}
              status="In Progress"
            />
            <TaskItem
              title="Respond to Reviews"
              progress={100}
              status="Completed"
            />
            <TaskItem
              title="Update Service Listings"
              progress={60}
              status="In Progress"
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

function TaskItem({ title, progress, status }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <p className="font-medium text-gray-900">{title}</p>
        <span className={`text-sm ${
          status === 'Completed' ? 'text-green-600' : 'text-purple-600'
        }`}>
          {status}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}