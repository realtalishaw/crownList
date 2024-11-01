export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 
  | 'contestant'
  | 'business_owner'
  | 'director'
  | 'coach'
  | 'parent'
  | 'supporter'
  | 'judge'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          role: UserRole
          username: string | null
          first_name: string | null
          last_name: string | null
          avatar_url: string | null
          website: string | null
          email: string | null
          onboarding_completed: boolean
          created_at: string
          updated_at: string
          bio: string | null
          contact_number: string | null
          location: string | null
          date_of_birth: string | null
          social_links: Json
        }
        Insert: {
          id: string
          role?: UserRole
          username?: string | null
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          website?: string | null
          email?: string | null
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
          bio?: string | null
          contact_number?: string | null
          location?: string | null
          date_of_birth?: string | null
          social_links?: Json
        }
        Update: {
          id?: string
          role?: UserRole
          username?: string | null
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          website?: string | null
          email?: string | null
          onboarding_completed?: boolean
          created_at?: string
          updated_at?: string
          bio?: string | null
          contact_number?: string | null
          location?: string | null
          date_of_birth?: string | null
          social_links?: Json
        }
      }
      businesses: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string | null
          category: string
          profile_id: string
          logo_url: string | null
          website: string | null
          phone: string | null
          email: string | null
          location: string | null
          status: 'pending' | 'active' | 'suspended'
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description?: string | null
          category: string
          profile_id: string
          logo_url?: string | null
          website?: string | null
          phone?: string | null
          email?: string | null
          location?: string | null
          status?: 'pending' | 'active' | 'suspended'
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string | null
          category?: string
          profile_id?: string
          logo_url?: string | null
          website?: string | null
          phone?: string | null
          email?: string | null
          location?: string | null
          status?: 'pending' | 'active' | 'suspended'
        }
      }
      events: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string | null
          start_date: string
          end_date: string
          location: string | null
          capacity: number | null
          director_id: string
          status: 'draft' | 'published' | 'completed' | 'cancelled'
          type: 'pageant' | 'competition' | 'workshop'
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description?: string | null
          start_date: string
          end_date: string
          location?: string | null
          capacity?: number | null
          director_id: string
          status?: 'draft' | 'published' | 'completed' | 'cancelled'
          type?: 'pageant' | 'competition' | 'workshop'
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string
          location?: string | null
          capacity?: number | null
          director_id?: string
          status?: 'draft' | 'published' | 'completed' | 'cancelled'
          type?: 'pageant' | 'competition' | 'workshop'
        }
      }
      reviews: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          business_id: string
          reviewer_id: string
          rating: number
          comment: string | null
          response: string | null
          response_date: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          business_id: string
          reviewer_id: string
          rating: number
          comment?: string | null
          response?: string | null
          response_date?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          business_id?: string
          reviewer_id?: string
          rating?: number
          comment?: string | null
          response?: string | null
          response_date?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: UserRole
    }
  }
}