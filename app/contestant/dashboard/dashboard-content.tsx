"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Trophy, Calendar, Star, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { useSession } from "@/hooks/use-session"

export function DashboardContent() {
  const { user } = useSession()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.user_metadata?.full_name || 'Contestant'}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your pageant journey
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard
          icon={Trophy}
          title="Upcoming Pageants"
          value="2"
          description="Registered competitions"
          color="text-purple-600"
          bgColor="bg-purple-100"
        />
        <StatsCard
          icon={Calendar}
          title="Practice Sessions"
          value="5"
          description="Scheduled this week"
          color="text-blue-600"
          bgColor="bg-blue-100"
        />
        <StatsCard
          icon={Star}
          title="Achievements"
          value="8"
          description="Total awards earned"
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
                href="/contestant/profile"
                icon={Users}
                label="Edit Profile"
              />
              <QuickActionButton
                href="/events"
                icon={Calendar}
                label="Browse Events"
              />
              <QuickActionButton
                href="/resources"
                icon={Star}
                label="Resources"
              />
              <QuickActionButton
                href="/forum"
                icon={TrendingUp}
                label="Community"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Progress Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ProgressItem label="Profile Completion" progress={85} />
              <ProgressItem label="Training Goals" progress={60} />
              <ProgressItem label="Competition Prep" progress={40} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatsCard({ icon: Icon, title, value, description, color, bgColor }) {
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
            <p className="text-sm text-gray-500">{description}</p>
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

function ProgressItem({ label, progress }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{progress}%</span>
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