"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Plus, Shield, Users, Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

const roles = [
  {
    id: '1',
    name: 'Event Manager',
    description: 'Can manage events and schedules',
    users: 3,
    permissions: [
      'events.view',
      'events.create',
      'events.edit',
      'contestants.view',
    ],
  },
  {
    id: '2',
    name: 'Judge Coordinator',
    description: 'Manages judging panels and scoring',
    users: 2,
    permissions: [
      'judging.view',
      'judging.edit',
      'contestants.view',
    ],
  },
]

const permissions = {
  events: [
    { id: 'events.view', label: 'View Events' },
    { id: 'events.create', label: 'Create Events' },
    { id: 'events.edit', label: 'Edit Events' },
    { id: 'events.delete', label: 'Delete Events' },
  ],
  contestants: [
    { id: 'contestants.view', label: 'View Contestants' },
    { id: 'contestants.manage', label: 'Manage Contestants' },
  ],
  judging: [
    { id: 'judging.view', label: 'View Scores' },
    { id: 'judging.edit', label: 'Edit Scores' },
  ],
  finances: [
    { id: 'finances.view', label: 'View Finances' },
    { id: 'finances.manage', label: 'Manage Finances' },
  ],
}

export function RoleManagementContent() {
  const [isCreating, setIsCreating] = useState(false)
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([])

  const handleCreateRole = () => {
    toast.success("Role created successfully")
    setIsCreating(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/staff"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Staff Management
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Role Management</h1>
          <p className="text-gray-600">Manage staff roles and permissions</p>
        </div>
        <Button
          className="bg-purple-600 hover:bg-purple-700"
          onClick={() => setIsCreating(true)}
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Role
        </Button>
      </div>

      {isCreating && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Create New Role</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="roleName">Role Name</Label>
                <Input
                  id="roleName"
                  placeholder="Enter role name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Enter role description"
                  required
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Permissions</h3>
                {Object.entries(permissions).map(([category, perms]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700 capitalize">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {perms.map((permission) => (
                        <div key={permission.id} className="flex items-center justify-between">
                          <Label htmlFor={permission.id}>{permission.label}</Label>
                          <Switch
                            id={permission.id}
                            checked={selectedPermissions.includes(permission.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPermissions([...selectedPermissions, permission.id])
                              } else {
                                setSelectedPermissions(
                                  selectedPermissions.filter((p) => p !== permission.id)
                                )
                              }
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={handleCreateRole}
                >
                  Create Role
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6">
        {roles.map((role) => (
          <Card key={role.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{role.name}</h3>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {role.users} users
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Permissions</h4>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission) => (
                    <span
                      key={permission}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-4">
                <Button variant="outline">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Role
                </Button>
                <Button
                  variant="outline"
                  className="text-red-600 hover:text-red-700"
                  disabled={role.users > 0}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Role
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}