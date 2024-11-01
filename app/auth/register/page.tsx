"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Crown } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Database } from '@/lib/database.types'

type UserRole = Database['public']['Enums']['user_role']

const ROLE_LABELS = {
  contestant: 'Contestant',
  business_owner: 'Business Owner',
  director: 'Director',
  coach: 'Coach',
  parent: 'Parent',
  supporter: 'Supporter',
  judge: 'Judge'
} as const

export default function RegisterPage() {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    role: '' as UserRole,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) throw new Error('No user found')

      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          username: formData.username,
          full_name: `${formData.firstName} ${formData.lastName}`.trim(),
          role: formData.role,
          onboarding_completed: true,
        })
        .eq('id', user.id)

      if (updateError) throw updateError

      router.push('/')
    } catch (error) {
      setError('Failed to update profile. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-purple-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-center text-purple-900">
            Complete Your Profile
          </CardTitle>
          <CardDescription className="text-center text-base">
            Tell us a little about yourself to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  className="transition-shadow duration-200 focus:shadow-lg"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  This will be your unique identifier on The Crown List
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="transition-shadow duration-200 focus:shadow-lg"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="transition-shadow duration-200 focus:shadow-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Type
                </label>
                <Select
                  value={formData.role}
                  onValueChange={(value: UserRole) => setFormData(prev => ({ ...prev, role: value }))}
                  required
                >
                  <SelectTrigger className="w-full transition-shadow duration-200 focus:shadow-lg">
                    <SelectValue placeholder="Select your account type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(ROLE_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500 mt-1">
                  Choose the type of account that best fits your needs
                </p>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Complete Registration'}
            </Button>

            <p className="text-sm text-center text-gray-500 mt-4">
              By completing registration, you agree to our{" "}
              <a href="/terms-conditions" className="text-purple-600 hover:underline">Terms & Conditions</a>
              {" "}and{" "}
              <a href="/privacy-policy" className="text-purple-600 hover:underline">Privacy Policy</a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}