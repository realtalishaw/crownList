"use client"

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const signInWithMagicLink = async (email: string, returnUrl?: string | null) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?returnUrl=${returnUrl || ''}`,
          shouldCreateUser: true,
        },
      })

      if (error) {
        console.error('Auth error:', error)
        toast.error(error.message || 'Failed to send magic link')
        return false
      }

      toast.success('Magic link sent! Check your email')
      return true
    } catch (error) {
      console.error('Unexpected error:', error)
      toast.error('An unexpected error occurred')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        throw error
      }
      
      router.refresh()
      router.push('/')
      toast.success('Signed out successfully')
    } catch (error) {
      console.error('Sign out error:', error)
      toast.error('Error signing out')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    signInWithMagicLink,
    signOut,
    isLoading,
  }
}