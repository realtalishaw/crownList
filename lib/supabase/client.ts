import { createBrowserClient } from '@supabase/ssr'

const storageKey = 'sb-auth-token'

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          if (typeof document === 'undefined') return ''
          const cookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith(`${name}=`))
          return cookie ? cookie.split('=')[1] : ''
        },
        set(name: string, value: string, options: any) {
          if (typeof document === 'undefined') return
          document.cookie = `${name}=${value}; ${Object.entries(options)
            .map(([key, val]) => `${key}=${val}`)
            .join('; ')}`
        },
        remove(name: string, options: any) {
          if (typeof document === 'undefined') return
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ${Object.entries(
            options
          )
            .map(([key, val]) => `${key}=${val}`)
            .join('; ')}`
        },
      },
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        storage: {
          getItem: (key) => {
            if (typeof window === 'undefined') return null
            return window.localStorage.getItem(key)
          },
          setItem: (key, value) => {
            if (typeof window === 'undefined') return
            window.localStorage.setItem(key, value)
          },
          removeItem: (key) => {
            if (typeof window === 'undefined') return
            window.localStorage.removeItem(key)
          },
        },
        storageKey,
        autoRefreshToken: true,
        debug: process.env.NODE_ENV === 'development',
      },
    }
  )