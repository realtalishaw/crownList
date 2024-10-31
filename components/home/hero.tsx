"use client"

import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Search, Crown, Star, Users, Camera } from "lucide-react"
import { useState } from 'react'

const features = [
  { icon: Crown, label: "500+ Pageants" },
  { icon: Star, label: "Top Vendors" },
  { icon: Users, label: "Expert Coaches" },
  { icon: Camera, label: "Pro Services" },
]

export function Hero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/directory/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 bg-gradient-to-b from-purple-50 via-white to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Crown icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-purple-100 rounded-full">
            <Crown className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          Your Journey to the <span className="text-purple-600">Crown</span> Starts Here
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with the perfect pageant, find expert coaches, and discover top-tier services to help you shine on stage.
        </p>

        {/* Search box */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search pageants, coaches, vendors, and more..."
              className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-purple-100 focus:border-purple-500 focus:ring-purple-500 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </form>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.label}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="h-6 w-6 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">{feature.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}