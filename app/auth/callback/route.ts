import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function GET(request: Request) {
  try {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      await supabase.auth.exchangeCodeForSession(code)
      
      // Check if user needs to complete onboarding
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .single()

      if (!profile?.onboarding_completed) {
        return NextResponse.redirect(new URL('/auth/register', requestUrl.origin))
      }
    }

    return NextResponse.redirect(new URL('/', requestUrl.origin))
  } catch (error) {
    console.error('Auth callback error:', error)
    return NextResponse.redirect(
      new URL('/auth/auth-error', request.url)
    )
  }
}