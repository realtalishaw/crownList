"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  ArrowLeft,
  User,
  Mail,
  Calendar,
  MapPin,
  Shield,
  Activity,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

// This would typically come from an API or database
const getUser = (id: string) => {
  return {
    id,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Contestant',
    status: 'Active',
    joinDate: '2024-03-01',
    lastActive: '2024-03-15',
    location: 'New York, USA',
    verifiedEmail: true,
    twoFactorEnabled: false,
    loginHistory: [
      {
        date: '2024-03-15T10:30:00',
        ip: '192.168.1.1',
        device: 'Chrome on MacOS',
      },
      {
        date: '2024-03-14T15:45:00',
        ip: '192.168.1.1',
        device: 'Safari on iPhone',
      },
    ],
  }
}

export function UserDetailContent({ userId }: { userId: string }) {
  const user = getUser(userId)
  const [isLoading, setIsLoading] = useState(false)

  const handleSuspend = async () => {
    setIsLoading(true)
    try {
      // Handle user suspension
      toast.success("User suspended successfully")
    } catch (error) {
      toast.error("Failed to suspend user")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/admin/users"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Users
      </Link>

      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Details</h1>
          <p className="text-gray-600">Manage user information and access</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="text-red-600 hover:text-red-700">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Flag Account
          </Button>
          <Button
            variant="destructive"
            onClick={handleSuspend}
            disabled={isLoading}
          >
            Suspend Account
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Information */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue={user.email} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Role</Label>
                  <select className="w-full rounded-md border border-gray-200 p-2">
                    <option>Contestant</option>
                    <option>Business Owner</option>
                    <option>Director</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input defaultValue={user.location} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Verification</Label>
                  <p className="text-sm text-gray-500">
                    User's email verification status
                  </p>
                </div>
                <Switch checked={user.verifiedEmail} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-500">
                    Require 2FA for account access
                  </p>
                </div>
                <Switch checked={user.twoFactorEnabled} />
              </div>

              <Button variant="outline" className="w-full">
                Reset Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Login History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.loginHistory.map((login, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{login.device}</p>
                      <p className="text-sm text-gray-500">IP: {login.ip}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(login.date).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Account Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Account Status</p>
                  <p className="font-medium">{user.status}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Join Date</p>
                  <p className="font-medium">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Last Active</p>
                  <p className="font-medium">
                    {new Date(user.lastActive).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                View Permissions
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                View Activity Log
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}