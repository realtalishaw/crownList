"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Shirt, Crown, Star } from "lucide-react"

const categories = [
  { name: 'Evening Gown', icon: Crown, count: 3 },
  { name: 'Interview Outfit', icon: Star, count: 2 },
  { name: 'Swimwear', icon: Shirt, count: 2 },
]

const outfits = [
  {
    id: '1',
    name: 'Royal Blue Evening Gown',
    designer: 'Sherri Hill',
    category: 'Evening Gown',
    status: 'Ready',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1920',
  },
  {
    id: '2',
    name: 'White Interview Suit',
    designer: 'Tahari',
    category: 'Interview Outfit',
    status: 'Alterations Needed',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1920',
  },
]

export function WardrobeContent() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Wardrobe</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Outfit
        </Button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.name}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count} items</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Outfits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outfits.map((outfit) => (
          <Card key={outfit.id} className="overflow-hidden">
            <div className="aspect-w-3 aspect-h-4">
              <img
                src={outfit.image}
                alt={outfit.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-medium text-lg mb-1">{outfit.name}</h3>
              <p className="text-sm text-gray-500 mb-2">By {outfit.designer}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-600">{outfit.category}</span>
                <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                  {outfit.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}