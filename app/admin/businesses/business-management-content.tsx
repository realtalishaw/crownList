"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Building2,
  Filter,
  Star,
  MapPin,
  MoreVertical,
  CheckCircle,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const businesses = [
  {
    id: '1',
    name: 'Elite Pageant Coaching',
    category: 'Coaching',
    location: 'New York, USA',
    status: 'Active',
    rating: 4.8,
    reviews: 156,
    joinDate: '2024-03-01',
  },
  {
    id: '2',
    name: 'Glamour Studios',
    category: 'Photography',
    location: 'Los Angeles, USA',
    status: 'Under Review',
    rating: 4.5,
    reviews: 89,
    joinDate: '2024-03-10',
  },
]

export function BusinessManagementContent() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Management</h1>
          <p className="text-gray-600">Manage and monitor business listings</p>
        </div>
        <div className="flex gap-4">
          <Link href="/admin/businesses/pending">
            <Button variant="outline">
              Pending Reviews (8)
            </Button>
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Export Data
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Building2 className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">450</h3>
            <p className="text-sm text-gray-500">Active Businesses</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-500">Verified</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">392</h3>
            <p className="text-sm text-gray-500">Verified Businesses</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <XCircle className="h-5 w-5 text-red-600" />
              <span className="text-sm text-gray-500">Suspended</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">12</h3>
            <p className="text-sm text-gray-500">Suspended Businesses</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-gray-500">Average</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.7</h3>
            <p className="text-sm text-gray-500">Average Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search businesses..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Businesses Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Business</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Rating</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((business) => (
                  <tr key={business.id} className="border-b last:border-0">
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-gray-900">{business.name}</p>
                        <p className="text-sm text-gray-500">
                          Joined {new Date(business.joinDate).toLocaleDateString()}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-600">{business.category}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-gray-600">{business.location}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        business.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {business.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{business.rating}</span>
                        <span className="text-gray-500 ml-1">
                          ({business.reviews})
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Business</DropdownMenuItem>
                          <DropdownMenuItem>View Reviews</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Suspend Business
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
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