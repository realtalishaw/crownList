import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

interface Story {
  image: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  commentCount: number
}

interface TrendingStoriesProps {
  stories: Story[]
}

export default function TrendingStories({ stories }: TrendingStoriesProps) {
  const featuredStory = stories[0]
  const otherStories = stories.slice(1, 4)

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                {featuredStory.category}
              </span>
              <Link href={`/blog/${featuredStory.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3 className="text-xl font-bold mb-3 hover:text-purple-600 transition-colors">
                  {featuredStory.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-2">{featuredStory.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{featuredStory.date}</span>
                  <span className="text-sm text-gray-500">by {featuredStory.author}</span>
                </div>
                <span className="flex items-center text-gray-500">
                  <MessageCircle size={18} className="mr-1" />
                  {featuredStory.commentCount}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {otherStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <img
                src={story.image}
                alt={story.title}
                className="w-24 h-24 object-cover"
              />
              <div className="p-4 flex-1">
                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-2">
                  {story.category}
                </span>
                <Link href={`/blog/${story.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <h3 className="font-bold mb-2 hover:text-purple-600 transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                </Link>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{story.date}</span>
                  <span className="flex items-center">
                    <MessageCircle size={16} className="mr-1" />
                    {story.commentCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 