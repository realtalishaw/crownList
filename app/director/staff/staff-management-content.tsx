"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Users, Shield, UserPlus } from "lucide-react"
import Link from "next/link"

const staffMembers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Event Manager',
    status: 'Active',
    lastActive: '2024-03-15',
    permissions: ['events.edit', 'contestants.view'],
  },
  {
    id: '2',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    role: 'Judge Coordinator',
    status: 'Active',
    lastActive: '2024-03-14',
    permissions: ['judging.edit', 'contestants.view'],
  },
]

export function StaffManagementContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Staff Management</h1>
          <p className="text-gray-600">Manage staff members and their permissions</p>
        </div>
        <div className="flex gap-4">
          <Link href="/director/staff/roles">
            <Button variant="outline">
              <Shield className="h-5 w-5 mr-2" />
              Manage Roles
            </Button>
          </Link>
          <Link href="/director/staff/new">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <UserPlus className="h-5 w-5 mr-2" />
              Add Staff Member
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">8</h3>
            <p className="text-sm text-gray-500">Active Staff Members</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Total</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">5</h3>
            <p className="text-sm text-gray-500">Custom Roles</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <Plus className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">New</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-sm text-gray-500">Pending Invites</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search staff members..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Staff List */}
      <div className="grid gap-6">
        {staffMembers.map((staff) => (
          <Card key={staff.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{staff.name}</h3>
                    <p className="text-sm text-gray-500">{staff.email}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  staff.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {staff.status}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium">{staff.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Active</p>
                  <p className="font-medium">
                    {new Date(staff.lastActive).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Permissions</p>
                  <p className="font-medium">{staff.permissions.length} granted</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-4">
                <Link href={`/director/staff/${staff.id}/edit`}>
                  <Button variant="outline">Edit Permissions</Button>
                </Link>
                <Button variant="outline" className="text-red-600 hover:text-red-700">
                  Remove Access
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}