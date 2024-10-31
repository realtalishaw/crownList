"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Building2,
  ArrowLeft,
  MapPin,
  Globe,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
} from "lucide-react"
import Link from "next/link"

const pendingBusinesses = [
  {
    id: '1',
    name: 'Royal Pageant Academy',
    category: 'Coaching',
    location: 'Miami, USA',
    website: 'www.royalpageant.com',
    email: 'contact@royalpageant.com',
    phone: '+1 (555) 123-4567',
    submittedAt: '2024-03-15',
    documents: ['Business License', 'Insurance', 'Portfolio'],
  },
  {
    id: '2',
    name: 'Crown & Glory Photography',
    category: 'Photography',
    location: 'Dallas, USA',
    website: 'www.crownglory.com',
    email: 'info@crownglory.com',
    phone: '+1 (555) 987-6543',
    submittedAt: '2024-03-14',
    documents: ['Business License', 'Portfolio'],
  },
]

export function PendingBusinessesContent() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/admin/businesses"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Businesses
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pending Reviews</h1>
          <p className="text-gray-600">Review and approve business applications</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Building2 className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">8</h3>
            <p className="text-sm text-gray-500">Pending Applications</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-sm text-gray-500">Approved Today</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <XCircle className="h-5 w-5 text-red-600" />
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1</h3>
            <p className="text-sm text-gray-500">Rejected Today</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search applications..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-6">
        {pendingBusinesses.map((business) => (
          <Card key={business.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {business.name}
                    </h3>
                    <p className="text-gray-500">{business.category}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{business.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{business.website}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{business.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{business.phone}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Required Documents:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {business.documents.map((doc) => (
                        <span
                          key={doc}
                          className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <p className="text-sm text-gray-500">
                    Submitted {new Date(business.submittedAt).toLocaleDateString()}
                  </p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <Button variant="outline" className="text-red-600 hover:text-red-700">
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}