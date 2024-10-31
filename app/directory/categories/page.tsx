import Link from 'next/link'
import { Crown } from 'lucide-react'

const categories = [
  { id: 'pageants', name: 'Pageants' },
  { id: 'hair-makeup', name: 'Hair & Makeup' },
  { id: 'coaching', name: 'Coaching' },
  { id: 'retailers', name: 'Retailers' },
  { id: 'jewelry-accessories', name: 'Jewelry & Accessories' },
  { id: 'photography', name: 'Photography' },
  { id: 'designers', name: 'Designers' },
  { id: 'beauty-services', name: 'Beauty Services' },
]

export default function CategoriesListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Crown className="h-8 w-8 text-purple-500 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">Directory Categories</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/directory/categories/${category.id}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h2>
            <p className="text-gray-600">Browse {category.name.toLowerCase()} listings</p>
          </Link>
        ))}
      </div>
    </div>
  )
}