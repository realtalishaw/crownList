"use client"

import { Search, Calendar, Trophy } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Search & Compare",
    description: "Browse through our extensive directory of pageants, vendors, and services.",
  },
  {
    icon: Calendar,
    title: "Book & Prepare",
    description: "Schedule appointments with vendors and manage your competition timeline.",
  },
  {
    icon: Trophy,
    title: "Compete & Win",
    description: "Showcase your talents and achieve your pageant dreams.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Your path to pageant success made simple
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-purple-600" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-purple-100" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}