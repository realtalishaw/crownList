import { Hero } from "@/components/home/hero"
import { TitleholderOfWeek } from "@/components/home/titleholder-of-week"
import { FeaturedCategories } from "@/components/home/featured-categories"
import { HowItWorks } from "@/components/home/how-it-works"
import { LatestEvents } from "@/components/home/latest-events"
import { SuccessStories } from "@/components/home/success-stories"
import { CTA } from "@/components/home/cta"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home'
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TitleholderOfWeek />
      <FeaturedCategories />
      <HowItWorks />
      <LatestEvents />
      <SuccessStories />
      <CTA />
    </main>
  )
}