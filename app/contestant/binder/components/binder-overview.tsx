"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileText, Shirt, Calendar, CheckSquare, Users, Plane } from "lucide-react"

const pageantBinders = {
  'miss-universe-2024': {
    name: 'Miss Universe 2024',
    date: '2024-09-15',
    location: 'Las Vegas, Nevada',
    progress: {
      documents: 80,
      wardrobe: 60,
      schedule: 90,
      tasks: 70,
      appearances: 50,
      travel: 40,
    },
  },
  'miss-world-2024': {
    name: 'Miss World 2024',
    date: '2024-10-20',
    location: 'London, UK',
    progress: {
      documents: 30,
      wardrobe: 20,
      schedule: 40,
      tasks: 25,
      appearances: 10,
      travel: 15,
    },
  },
}

const sections = [
  { name: 'Documents', icon: FileText, key: 'documents' },
  { name: 'Wardrobe', icon: Shirt, key: 'wardrobe' },
  { name: 'Schedule', icon: Calendar, key: 'schedule' },
  { name: 'Tasks', icon: CheckSquare, key: 'tasks' },
  { name: 'Appearances', icon: Users, key: 'appearances' },
  { name: 'Travel', icon: Plane, key: 'travel' },
]

export function BinderOverview({ binderId }: { binderId: string }) {
  const binder = pageantBinders[binderId]

  if (!binder) {
    return <div>Binder not found</div>
  }

  const overallProgress = Math.round(
    Object.values(binder.progress).reduce((a, b) => a + b, 0) / Object.keys(binder.progress).length
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{binder.name}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <p>📅 {new Date(binder.date).toLocaleDateString()}</p>
          <p>📍 {binder.location}</p>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Preparation Status</span>
              <span className="text-sm font-medium">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Section Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          const progress = binder.progress[section.key]
          
          return (
            <Card key={section.key}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="font-medium">{section.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}