"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Bell, ChevronDown, Crown, Mail, Menu, User } from "lucide-react"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react'
import type { Database } from '@/lib/database.types'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useProfile } from '@/hooks/use-profile'

const navLinks = [
  { 
    name: "Directory", 
    href: "/directory",
    subItems: [
      { name: "View All Listings", href: "/directory" },
      { name: "Pageants", href: "/directory/categories/pageants" },
      { name: "Hair & Makeup", href: "/directory/categories/hair-makeup" },
      { name: "Coaching", href: "/directory/categories/coaching" },
      { name: "Retailers", href: "/directory/categories/retailers" },
      { name: "Jewelry & Accessories", href: "/directory/categories/jewelry-accessories" },
      { name: "Photography", href: "/directory/categories/photography" },
      { name: "Designers", href: "/directory/categories/designers" },
      { name: "Beauty Services", href: "/directory/categories/beauty-services" },
    ]
  },
  { name: "Events", href: "/events" },
  { name: "Members", href: "/members" },
  { name: "Shop", href: "/shop" },
  { name: "Forum", href: "/forum" },
  { name: "Blog", href: "/blog" },
]

interface NavProps {
  pathname: string
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

const DesktopNav = ({ pathname, isLoggedIn, setIsLoggedIn }: NavProps) => {
  const router = useRouter()
  
  return (
    <div className="hidden md:flex space-x-6">
      {navLinks.map((link) => (
        link.subItems ? (
          <DropdownMenu key={link.name}>
            <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              {link.name} <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.subItems.map((subItem, index) => (
                <React.Fragment key={subItem.href}>
                  {index === 1 && <DropdownMenuSeparator />}
                  <DropdownMenuItem>
                    <Link href={subItem.href} className="w-full">
                      {subItem.name}
                    </Link>
                  </DropdownMenuItem>
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={link.name}
            href={link.href}
            className={`text-gray-600 hover:text-purple-600 transition-colors ${
              pathname === link.href ? "text-purple-600 border-b-2 border-purple-600" : ""
            }`}
          >
            {link.name}
          </Link>
        )
      ))}
    </div>
  )
}

const MobileNav = ({ pathname, isLoggedIn, setIsLoggedIn }: NavProps) => {
  const router = useRouter()
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col space-y-4 mt-4">
          {navLinks.map((link) => (
            link.subItems ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left">
                  {link.name} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subItems.map((subItem, index) => (
                    <React.Fragment key={subItem.href}>
                      {index === 1 && <DropdownMenuSeparator />}
                      <DropdownMenuItem>
                        <Link href={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    </React.Fragment>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-600 hover:text-purple-600 transition-colors ${
                  pathname === link.href ? "text-purple-600 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          {!isLoggedIn && (
            <>
              <Button onClick={() => {/* Handle submit listing */}} className="justify-start bg-purple-600 hover:bg-purple-700 text-white">
                Submit Listing
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => router.push('/auth/login')}
                className="justify-start bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                Login
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface UserMenuProps {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

const UserMenu = ({ isLoggedIn, setIsLoggedIn }: UserMenuProps) => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const { profile } = useProfile()
  
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      
      setIsLoggedIn(false)
      router.push('/auth/login')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const getMenuItems = () => {
    const items = [
      { label: 'Profile', href: '/profile' },
      { label: 'Settings', href: '/settings' },
    ]

    if (profile?.role === 'business') {
      items.push(
        { label: 'My Listings', href: '/business/listings' },
        { label: 'Analytics', href: '/business/analytics' }
      )
    } else if (profile?.role === 'contestant') {
      items.push(
        { label: 'My Applications', href: '/contestant/applications' },
        { label: 'Saved Items', href: '/contestant/saved' }
      )
    } else if (profile?.role === 'admin') {
      items.push(
        { label: 'Admin Dashboard', href: '/admin' },
        { label: 'Manage Users', href: '/admin/users' }
      )
    }

    return items
  }

  return (
    <div className="flex items-center space-x-4">
      {isLoggedIn ? (
        <>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Mail className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {getMenuItems().map((item) => (
                <DropdownMenuItem key={item.href} onClick={() => router.push(item.href)}>
                  {item.label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Button onClick={() => {/* Handle submit listing */}} className="bg-purple-600 hover:bg-purple-700 text-white">
            Submit Listing
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => router.push('/auth/login')} 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Login
          </Button>
        </>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const pathname = usePathname()
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session)
    })

    checkUser()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  return (
    <nav className="sticky top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Crown className="h-10 w-10 text-purple-500" />
          <span className="ml-2 text-xl font-serif text-gray-800 hidden lg:inline">The Crown List</span>
        </Link>

        <DesktopNav pathname={pathname} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
        <div className="flex items-center space-x-4">
          <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <MobileNav pathname={pathname} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
      </div>
    </nav>
  )
}