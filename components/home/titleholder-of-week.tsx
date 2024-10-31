"use client"

import { Crown, Instagram, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TitleholderOfWeek() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <Crown className="h-7 w-7 text-purple-600" />
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Titleholder of the Week
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1622396636133-ba43f812bc35?q=80&w=1000"
              alt="Sarah Johnson - Miss California 2024"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white/90 text-sm font-medium">Photo by: John Smith</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-xl text-purple-600 font-semibold mb-6">Miss California 2024</p>
              <div className="relative">
                <p className="text-gray-600 leading-relaxed line-clamp-4">
                  Sarah is making waves in her community through her platform "Education for All," 
                  having impacted over 1,000 underprivileged students through her literacy programs. 
                  A Stanford graduate in International Relations, she combines her academic excellence 
                  with a passion for social change.
                </p>
                <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-purple-50 to-transparent" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-lg">Recent Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                  <span className="text-gray-700">Top 5 at Miss USA 2024</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                  <span className="text-gray-700">Raised $50,000 for children's education</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
                  <span className="text-gray-700">Featured in Pageantry Magazine</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2 hover:bg-purple-50">
                <Instagram className="h-4 w-4" />
                Follow
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-purple-50">
                <Globe className="h-4 w-4" />
                Website
              </Button>
              <Button className="gap-2 bg-purple-600 hover:bg-purple-700 text-white ml-auto">
                Read Full Story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}