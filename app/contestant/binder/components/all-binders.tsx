"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

const pageantBinders = [
  {
    id: 'miss-universe-2024',
    name: 'Miss Universe 2024',
    date: '2024-09-15',
    progress: 65,
    status: 'In Progress',
    location: 'Las Vegas, Nevada',
  },
  {
    id: 'miss-world-2024',
    name: 'Miss World 2024',
    date: '2024-10-20',
    progress: 30,
    status: 'Planning',
    location: 'London, UK',
  },
]

export function AllBinders() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Pageant Binders</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-5 w-5 mr-2" />
          Create New Binder
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageantBinders.map((binder) => (
          <Card key={binder.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{binder.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Competition Date</p>
                  <p className="font-medium">{new Date(binder.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{binder.location}</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm text-gray-500">Preparation Progress</p>
                    <p className="text-sm font-medium">{binder.progress}%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${binder.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="px-2 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
                    {binder.status}
                  </span>
                  <Button variant="outline" asChild>
                    <Link href={`/contestant/binder/${binder.id}`}>
                      Open Binder
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}