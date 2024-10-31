"use client"

import { Star } from "lucide-react"

const stories = [
  {
    quote: "The Crown List helped me find the perfect coach who transformed my stage presence. I couldn't have won without their help!",
    author: "Emily Davis",
    title: "Miss Texas 2023",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288",
  },
  {
    quote: "From finding my gown designer to booking my photoshoot, everything was seamless. This platform is a game-changer!",
    author: "Sarah Johnson",
    title: "Miss Florida 2023",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1288",
  },
]

export function SuccessStories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from titleholders who found success through The Crown List
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 text-lg mb-6">
                "{story.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{story.author}</div>
                  <div className="text-purple-600">{story.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}