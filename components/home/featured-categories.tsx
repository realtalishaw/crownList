"use client"

import { Crown, Camera, Users, Shirt, Sparkles, Dumbbell } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    icon: Crown,
    name: "Pageants",
    description: "Find and enter prestigious pageants",
    href: "/directory/categories/pageants",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Users,
    name: "Coaching",
    description: "Connect with expert pageant coaches",
    href: "/directory/categories/coaching",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Camera,
    name: "Photography",
    description: "Book top pageant photographers",
    href: "/directory/categories/photography",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Shirt,
    name: "Wardrobe",
    description: "Find designers and stylists",
    href: "/directory/categories/wardrobe",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Sparkles,
    name: "Beauty",
    description: "Discover makeup artists and hair stylists",
    href: "/directory/categories/beauty",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Dumbbell,
    name: "Fitness",
    description: "Connect with fitness trainers",
    href: "/directory/categories/fitness",
    color: "bg-red-100 text-red-600",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Explore Categories</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover everything you need for your pageant journey, from coaching to photography
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}