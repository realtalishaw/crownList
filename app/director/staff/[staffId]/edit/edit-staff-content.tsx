"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

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

// This would typically come from an API or database
const getStaffMember = (id: string) => {
  return {
    id,
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@example.com',
    role: 'event_manager',
    permissions: ['events.view', 'events.edit', 'contestants.view'],
  }
}

export function EditStaffContent({ staffId }: { staffId: string }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const staffMember = getStaffMember(staffId)
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    staffMember.permissions
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Handle form submission
      toast.success("Staff member updated successfully")
      router.push("/director/staff")
    } catch (error) {
      toast.error("Failed to update staff member")
    } finally {
      setIsLoading(false)
    }
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

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Staff Member</h1>
        <p className="text-gray-600">Update staff member details and permissions</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Staff Member Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  defaultValue={staffMember.firstName}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  defaultValue={staffMember.lastName}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue={staffMember.email}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                className="w-full rounded-md border border-gray-200 p-2"
                defaultValue={staffMember.role}
                required
              >
                <option value="event_manager">Event Manager</option>
                <option value="judge_coordinator">Judge Coordinator</option>
                <option value="contestant_manager">Contestant Manager</option>
                <option value="finance_manager">Finance Manager</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {Object.entries(permissions).map(([category, perms]) => (
                <div key={category}>
                  <h3 className="font-medium text-gray-900 mb-4 capitalize">
                    {category} Permissions
                  </h3>
                  <div className="space-y-4">
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
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            className="text-red-600 hover:text-red-700"
          >
            Deactivate Account
          </Button>
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/director/staff")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}