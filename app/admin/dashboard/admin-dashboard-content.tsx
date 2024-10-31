"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Building2,
  AlertTriangle,
  Activity,
  TrendingUp,
  Flag,
  MessageSquare,
  Star,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const activityData = [
  { date: '2024-03-01', users: 120, businesses: 45 },
  { date: '2024-03-02', users: 132, businesses: 48 },
  { date: '2024-03-03', users: 145, businesses: 52 },
  { date: '2024-03-04', users: 155, businesses: 55 },
  { date: '2024-03-05', users: 165, businesses: 58 },
]

export function AdminDashboardContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">System overview and management</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <QuickStat
          icon={Users}
          title="Total Users"
          value="12,450"
          trend="+12%"
          trendUp={true}
        />
        <QuickStat
          icon={Building2}
          title="Active Businesses"
          value="450"
          trend="+8%"
          trendUp={true}
        />
        <QuickStat
          icon={AlertTriangle}
          title="Pending Reviews"
          value="24"
          trend="-5%"
          trendUp={false}
        />
        <QuickStat
          icon={Flag}
          title="Reports"
          value="15"
          trend="+3"
          trendUp={false}
          urgent={true}
        />
      </div>

      {/* Activity Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Platform Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#7C3AED"
                  name="Users"
                />
                <Line
                  type="monotone"
                  dataKey="businesses"
                  stroke="#2563EB"
                  name="Businesses"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <ActionCard
          title="User Management"
          description="Manage users and permissions"
          icon={Users}
          href="/admin/users"
          metric="24 new users today"
        />
        <ActionCard
          title="Business Verification"
          description="Review pending business applications"
          icon={Building2}
          href="/admin/businesses/pending"
          metric="8 pending reviews"
        />
        <ActionCard
          title="Content Moderation"
          description="Review flagged content"
          icon={AlertTriangle}
          href="/admin/content"
          metric="15 items need review"
        />
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ActivityItem
              icon={Users}
              title="New User Registration"
              description="Sarah Johnson joined the platform"
              time="2 minutes ago"
            />
            <ActivityItem
              icon={Building2}
              title="Business Verification"
              description="Elite Pageant Coaching approved"
              time="15 minutes ago"
            />
            <ActivityItem
              icon={MessageSquare}
              title="Forum Activity"
              description="New discussion in Pageant Tips"
              time="1 hour ago"
            />
            <ActivityItem
              icon={Star}
              title="Review Posted"
              description="New 5-star review for Glamour Studios"
              time="2 hours ago"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function QuickStat({ icon: Icon, title, value, trend, trendUp, urgent }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <Icon className={`h-5 w-5 ${urgent ? 'text-red-600' : 'text-purple-600'}`} />
          <span className={`flex items-center text-sm ${
            trendUp ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </CardContent>
    </Card>
  )
}

function ActionCard({ title, description, icon: Icon, href, metric }) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Icon className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-purple-600">{metric}</span>
            <Activity className="h-4 w-4 text-gray-400" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function ActivityItem({ icon: Icon, title, description, time }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
        <Icon className="h-4 w-4 text-purple-600" />
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  )
}