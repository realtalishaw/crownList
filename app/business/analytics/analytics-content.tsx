"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Users,
  DollarSign,
  Star,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
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

const data = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
        <p className="text-sm text-gray-600">{`${label}: $${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

export function AnalyticsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
          <p className="text-gray-600">Track your business performance</p>
        </div>
        <div className="flex gap-4">
          <Link href="/business/analytics/performance">
            <Button variant="outline">View Details</Button>
          </Link>
          <Link href="/business/analytics/competitors">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Competitor Analysis
            </Button>
          </Link>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Revenue"
          value="$12,450"
          trend="+12%"
          trendUp={true}
          icon={DollarSign}
        />
        <MetricCard
          title="Total Bookings"
          value="156"
          trend="+8%"
          trendUp={true}
          icon={Calendar}
        />
        <MetricCard
          title="New Clients"
          value="45"
          trend="-3%"
          trendUp={false}
          icon={Users}
        />
        <MetricCard
          title="Average Rating"
          value="4.8"
          trend="+0.2"
          trendUp={true}
          icon={Star}
        />
      </div>

      {/* Revenue Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name"
                  tick={{ fill: '#6B7280' }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis
                  tick={{ fill: '#6B7280' }}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#7C3AED"
                  strokeWidth={2}
                  dot={{ fill: '#7C3AED', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#7C3AED' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Popular Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ServiceMetric
                name="Pageant Coaching"
                bookings={45}
                revenue={4500}
                growth={12}
              />
              <ServiceMetric
                name="Styling Consultation"
                bookings={32}
                revenue={3200}
                growth={8}
              />
              <ServiceMetric
                name="Interview Prep"
                bookings={28}
                revenue={2800}
                growth={-2}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <DemographicMetric
                label="Age 18-24"
                percentage={35}
                count={54}
              />
              <DemographicMetric
                label="Age 25-34"
                percentage={45}
                count={70}
              />
              <DemographicMetric
                label="Age 35+"
                percentage={20}
                count={32}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({ title, value, trend, trendUp, icon: Icon }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <Icon className="h-5 w-5 text-gray-400" />
          <span className={`flex items-center text-sm ${
            trendUp ? 'text-green-600' : 'text-red-600'
          }`}>
            {trendUp ? (
              <ArrowUpRight className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDownRight className="h-4 w-4 mr-1" />
            )}
            {trend}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ServiceMetric({ name, bookings, revenue, growth }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">
          {bookings} bookings • ${revenue}
        </p>
      </div>
      <span className={`flex items-center text-sm ${
        growth >= 0 ? 'text-green-600' : 'text-red-600'
      }`}>
        {growth >= 0 ? (
          <ArrowUpRight className="h-4 w-4 mr-1" />
        ) : (
          <ArrowDownRight className="h-4 w-4 mr-1" />
        )}
        {Math.abs(growth)}%
      </span>
    </div>
  )
}

function DemographicMetric({ label, percentage, count }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm text-gray-900">{count} clients</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}