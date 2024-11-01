import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import type { Database } from '@/lib/database.types'

type Profile = Database['public']['Tables']['profiles']['Row']

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session?.user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()

          if (error) throw error
          setProfile(data)
        }
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Error fetching profile'))
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        fetchProfile()
      } else if (event === 'SIGNED_OUT') {
        setProfile(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  return { profile, loading, error }
} 