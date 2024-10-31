import { Crown, Sparkles, Star, Calendar, Lightbulb, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { name: 'Pageant Preparation', icon: Crown, color: 'bg-purple-100 hover:bg-purple-200' },
  { name: 'Beauty & Fashion', icon: Sparkles, color: 'bg-pink-100 hover:bg-pink-200' },
  { name: 'Success Stories', icon: Star, color: 'bg-yellow-100 hover:bg-yellow-200' },
  { name: 'Events & News', icon: Calendar, color: 'bg-blue-100 hover:bg-blue-200' },
  { name: 'Tips & Tricks', icon: Lightbulb, color: 'bg-green-100 hover:bg-green-200' },
  { name: 'Personal Growth', icon: TrendingUp, color: 'bg-indigo-100 hover:bg-indigo-200' },
]

export default function CategoriesSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.name}
              href={`/blog/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${category.color} rounded-lg p-4 transition-all duration-200 hover:shadow-md`}
            >
              <div className="flex flex-col items-center text-center">
                <Icon className="mb-2 h-8 w-8" />
                <span className="font-medium text-sm">{category.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
} 