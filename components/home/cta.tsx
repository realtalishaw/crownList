"use client"

import { Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-16 bg-purple-600">
      <div className="container mx-auto px-4 text-center">
        <Crown className="h-12 w-12 text-white/90 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Begin Your Pageant Journey?
        </h2>
        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of contestants who have found success through The Crown List
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              Get Started
            </Button>
          </Link>
          <Link href="/directory">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-500">
              Browse Directory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}