"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 2400, bookings: 24 },
  { month: 'Feb', revenue: 1398, bookings: 18 },
  { month: 'Mar', revenue: 9800, bookings: 45 },
  { month: 'Apr', revenue: 3908, bookings: 32 },
  { month: 'May', revenue: 4800, bookings: 38 },
  { month: 'Jun', revenue: 3800, bookings: 30 },
]

const serviceData = [
  { name: 'Coaching', value: 45 },
  { name: 'Styling', value: 32 },
  { name: 'Interview Prep', value: 28 },
  { name: 'Photography', value: 15 },
]

export function PerformanceContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/business/analytics"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Analytics
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Performance Metrics</h1>
          <p className="text-gray-600">Detailed analysis of your business performance</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Export Report</Button>
          <Button variant="outline">Print</Button>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Revenue Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue & Bookings Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#7C3AED"
                    name="Revenue ($)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="bookings"
                    stroke="#2563EB"
                    name="Bookings"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Service Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={serviceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7C3AED" name="Bookings" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Client Retention Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600">78%</p>
                <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average Booking Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600">$245</p>
                <p className="text-sm text-gray-500 mt-2">+$12 from last month</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600">4.8/5</p>
                <p className="text-sm text-gray-500 mt-2">Based on 156 reviews</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}