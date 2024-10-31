"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const competitorData = [
  {
    subject: 'Pricing',
    you: 85,
    competitor1: 65,
    competitor2: 90,
  },
  {
    subject: 'Reviews',
    you: 90,
    competitor1: 85,
    competitor2: 75,
  },
  {
    subject: 'Services',
    you: 75,
    competitor1: 90,
    competitor2: 70,
  },
  {
    subject: 'Availability',
    you: 80,
    competitor1: 70,
    competitor2: 85,
  },
  {
    subject: 'Experience',
    you: 95,
    competitor1: 80,
    competitor2: 85,
  },
]

export function CompetitorContent() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Competitor Analysis</h1>
          <p className="text-gray-600">Compare your performance with competitors</p>
        </div>
        <Button variant="outline">Update Analysis</Button>
      </div>

      <div className="grid gap-8">
        {/* Competitive Analysis Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Competitive Analysis Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={competitorData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Your Business"
                    dataKey="you"
                    stroke="#7C3AED"
                    fill="#7C3AED"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Competitor 1"
                    dataKey="competitor1"
                    stroke="#2563EB"
                    fill="#2563EB"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Competitor 2"
                    dataKey="competitor2"
                    stroke="#059669"
                    fill="#059669"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Market Position */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Market Share</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600">28%</p>
                <div className="flex items-center justify-center text-sm text-green-600 mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +3% from last quarter
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Price Positioning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600">Premium</p>
                <p className="text-sm text-gray-500 mt-2">15% above market average</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Range</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600">8/10</p>
                <div className="flex items-center justify-center text-sm text-red-600 mt-2">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  2 competitors offer more services
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitive Advantages */}
        <Card>
          <CardHeader>
            <CardTitle>Competitive Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Your Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    Higher customer satisfaction ratings
                  </li>
                  <li className="flex items-center text-green-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    More experienced staff
                  </li>
                  <li className="flex items-center text-green-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                    Better location accessibility
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Areas for Improvement</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-red-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                    Limited service variety
                  </li>
                  <li className="flex items-center text-red-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                    Higher pricing than competitors
                  </li>
                  <li className="flex items-center text-red-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                    Fewer promotional offers
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}