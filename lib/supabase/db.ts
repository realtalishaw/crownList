import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const db = createClient<Database>(supabaseUrl, supabaseKey)

export async function getProfile(userId: string) {
  const { data, error } = await db
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateProfile(userId: string, updates: any) {
  const { data, error } = await db
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getBusinesses(category?: string) {
  let query = db.from('businesses').select('*')
  
  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function getBusiness(businessId: string) {
  const { data, error } = await db
    .from('businesses')
    .select('*')
    .eq('id', businessId)
    .single()

  if (error) throw error
  return data
}

export async function createBusiness(business: any) {
  const { data, error } = await db
    .from('businesses')
    .insert(business)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateBusiness(businessId: string, updates: any) {
  const { data, error } = await db
    .from('businesses')
    .update(updates)
    .eq('id', businessId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getEvents(status?: string) {
  let query = db.from('events').select('*')
  
  if (status) {
    query = query.eq('status', status)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function getEvent(eventId: string) {
  const { data, error } = await db
    .from('events')
    .select('*')
    .eq('id', eventId)
    .single()

  if (error) throw error
  return data
}

export async function createEvent(event: any) {
  const { data, error } = await db
    .from('events')
    .insert(event)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateEvent(eventId: string, updates: any) {
  const { data, error } = await db
    .from('events')
    .update(updates)
    .eq('id', eventId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getReviews(businessId: string) {
  const { data, error } = await db
    .from('reviews')
    .select('*, profiles(full_name, avatar_url)')
    .eq('business_id', businessId)

  if (error) throw error
  return data
}

export async function createReview(review: any) {
  const { data, error } = await db
    .from('reviews')
    .insert(review)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateReview(reviewId: string, updates: any) {
  const { data, error } = await db
    .from('reviews')
    .update(updates)
    .eq('id', reviewId)
    .select()
    .single()

  if (error) throw error
  return data
}