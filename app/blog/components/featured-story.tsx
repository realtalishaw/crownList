import { MessageCircle, Heart } from 'lucide-react'
import Link from 'next/link'

interface FeaturedStoryProps {
  imageUrl: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  commentCount: number
  likeCount: number
}

export default function FeaturedStory({
  imageUrl,
  title,
  excerpt,
  category,
  date,
  author,
  commentCount,
  likeCount
}: FeaturedStoryProps) {
  return (
    <div className="relative mb-12 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            {category}
          </span>
          <Link href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-purple-600 transition-colors">
              {title}
            </h2>
          </Link>
          <p className="text-gray-600 mb-6 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{date}</span>
              <span className="text-sm text-gray-500">by {author}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500">
                <MessageCircle size={18} className="mr-1" />
                {commentCount}
              </span>
              <span className="flex items-center text-gray-500">
                <Heart size={18} className="mr-1" />
                {likeCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 