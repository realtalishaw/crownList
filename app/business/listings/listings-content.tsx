"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react"
import Link from "next/link"

const listings = [
  {
    id: '1',
    title: 'Pageant Coaching Services',
    category: 'Coaching',
    status: 'Active',
    views: 245,
    inquiries: 12,
    lastUpdated: '2024-03-15',
  },
  {
    id: '2',
    title: 'Professional Styling Package',
    category: 'Styling',
    status: 'Draft',
    views: 0,
    inquiries: 0,
    lastUpdated: '2024-03-14',
  },
]

export function ListingsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Listings</h1>
        <Link href="/business/listings/new">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5 mr-2" />
            Create New Listing
          </Button>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search listings..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid gap-6">
        {listings.map((listing) => (
          <Card key={listing.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {listing.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-500">
                      {listing.category}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      listing.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Link href={`/business/listings/${listing.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit2 className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-500">Views</p>
                  <p className="text-lg font-semibold">{listing.views}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Inquiries</p>
                  <p className="text-lg font-semibold">{listing.inquiries}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p className="text-lg font-semibold">
                    {new Date(listing.lastUpdated).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}