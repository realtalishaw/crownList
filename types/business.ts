export interface Business {
  id: number
  name: string
  tagline: string
  rating: number
  logoUrl: string
  lastActive: string
  tags: string[]
  isFeatured: boolean
  contacts: {
    phone: boolean
    email: boolean
    website: boolean
    instagram: boolean
  }
}