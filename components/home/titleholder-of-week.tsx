"use client"

import { Crown, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TitleholderOfWeek() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Crown className="h-6 w-6 text-purple-600" />
          <h2 className="text-3xl font-bold text-center">Titleholder of the Week</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1622396636133-ba43f812bc35?q=80&w=1000"
              alt="Sarah Johnson - Miss California 2024"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-xl text-purple-600 mb-4">Miss California 2024</p>
              <p className="text-gray-600 leading-relaxed">
                Sarah is making waves in her community through her platform "Education for All," 
                having impacted over 1,000 underprivileged students through her literacy programs. 
                A Stanford graduate in International Relations, she combines her academic excellence 
                with a passion for social change.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Recent Achievements</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span>Top 5 at Miss USA 2024</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span>Raised $50,000 for children's education</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span>Featured in Pageantry Magazine</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="gap-2">
                <Instagram className="h-4 w-4" />
                Follow
              </Button>
              <Button variant="outline" className="gap-2">
                <Globe className="h-4 w-4" />
                Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}