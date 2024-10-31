"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Tag, Calendar, Users, Edit2, Trash2 } from "lucide-react"
import Link from "next/link"

const promotions = [
  {
    id: '1',
    title: 'Spring Pageant Package',
    description: 'Special coaching package for spring pageant season',
    discount: '20% OFF',
    startDate: '2024-04-01',
    endDate: '2024-05-31',
    status: 'Active',
    redemptions: 12,
  },
  {
    id: '2',
    title: 'First-Time Client Offer',
    description: 'Special discount for new clients',
    discount: '$50 OFF',
    startDate: '2024-03-01',
    endDate: '2024-12-31',
    status: 'Active',
    redemptions: 8,
  },
]

export function PromotionsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Promotions</h1>
          <p className="text-gray-600">Manage your promotional offers</p>
        </div>
        <Link href="/business/promotions/new">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5 mr-2" />
            Create Promotion
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Tag className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4</h3>
            <p className="text-sm text-gray-500">Active Promotions</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">This Month</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">45</h3>
            <p className="text-sm text-gray-500">Total Redemptions</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Upcoming</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">2</h3>
            <p className="text-sm text-gray-500">Scheduled Promotions</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search promotions..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Promotions List */}
      <div className="grid gap-6">
        {promotions.map((promo) => (
          <Card key={promo.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{promo.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-purple-600 font-medium">
                      {promo.discount}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(promo.startDate).toLocaleDateString()} - {new Date(promo.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    promo.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {promo.status}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  {promo.redemptions} redemptions
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}