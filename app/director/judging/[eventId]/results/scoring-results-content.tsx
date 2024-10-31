"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Trophy } from "lucide-react"
import Link from "next/link"

const results = [
  {
    rank: 1,
    name: 'Sarah Johnson',
    number: '101',
    state: 'California',
    totalScore: 26.3,
    breakdown: {
      interview: 8.5,
      talent: 9.0,
      evening_gown: 8.8,
    }
  },
  {
    rank: 2,
    name: 'Emily Davis',
    number: '102',
    state: 'New York',
    totalScore: 26.1,
    breakdown: {
      interview: 9.0,
      talent: 8.7,
      evening_gown: 9.2,
    }
  },
]

export function ScoringResultsContent({ eventId }: { eventId: string }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/judging"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Judging Management
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Scoring Results</h1>
          <p className="text-gray-600">Final results for {eventId.replace(/-/g, ' ')}</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Download className="h-4 w-4 mr-2" />
          Export Results
        </Button>
      </div>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {results.slice(0, 3).map((result) => (
          <Card key={result.rank}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Trophy className={`h-6 w-6 ${
                  result.rank === 1 ? 'text-yellow-500' :
                  result.rank === 2 ? 'text-gray-400' :
                  'text-orange-500'
                }`} />
                <span className="text-2xl font-bold">{result.rank}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{result.name}</h3>
              <p className="text-gray-600 mb-2">{result.state}</p>
              <p className="text-xl font-bold text-purple-600">
                {result.totalScore.toFixed(1)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Results Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Rank</th>
                  <th className="text-left p-4">Number</th>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">State</th>
                  <th className="text-center p-4">Interview</th>
                  <th className="text-center p-4">Talent</th>
                  <th className="text-center p-4">Evening Gown</th>
                  <th className="text-right p-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.rank} className="border-b last:border-0">
                    <td className="p-4 font-bold">{result.rank}</td>
                    <td className="p-4">{result.number}</td>
                    <td className="p-4">{result.name}</td>
                    <td className="p-4">{result.state}</td>
                    <td className="p-4 text-center">{result.breakdown.interview.toFixed(1)}</td>
                    <td className="p-4 text-center">{result.breakdown.talent.toFixed(1)}</td>
                    <td className="p-4 text-center">{result.breakdown.evening_gown.toFixed(1)}</td>
                    <td className="p-4 text-right font-bold">{result.totalScore.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}