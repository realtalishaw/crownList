"use client"

import { Card } from "@/components/ui/card"
import { Crown, Star, Globe, Users, Sparkles, Trophy } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 'national',
    name: 'National Pageants',
    description: 'Major national competitions and preliminaries',
    icon: Crown,
    count: 45,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'international',
    name: 'International Pageants',
    description: 'Worldwide pageant competitions',
    icon: Globe,
    count: 28,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'state',
    name: 'State Pageants',
    description: 'State-level competitions and preliminaries',
    icon: Star,
    count: 156,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 'teen',
    name: 'Teen Pageants',
    description: 'Competitions for teenage contestants',
    icon: Users,
    count: 89,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 'charity',
    name: 'Charity Pageants',
    description: 'Events supporting charitable causes',
    icon: Sparkles,
    count: 34,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'specialty',
    name: 'Specialty Pageants',
    description: 'Niche and themed competitions',
    icon: Trophy,
    count: 67,
    color: 'bg-orange-100 text-orange-600',
  },
]

export function EventCategories() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Categories</h1>
        <p className="text-lg text-gray-600">
          Discover pageant opportunities across different categories and levels of competition
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.id}
              href={`/events/categories/${category.id}`}
              className="block group"
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-sm text-gray-500">{category.count} events</span>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}