'use client'

import { useState } from 'react'
import { MessageCircle, Instagram } from 'lucide-react'
import Link from 'next/link'

interface Post {
  image: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  commentCount: number
}

// Sample data - replace with API call
const dummyPosts: Post[] = [
  {
    image: "https://via.placeholder.com/300x200.png?text=Evening+Gown+Tips",
    title: "10 Tips for Choosing the Perfect Evening Gown",
    excerpt: "Discover how to select an evening gown that enhances your beauty and confidence on stage.",
    category: "Fashion",
    date: "May 15, 2023",
    author: "Emma Style",
    commentCount: 24
  },
  // Add more dummy posts as needed
]

const tags = ['Beauty', 'Fashion', 'Interview', 'Fitness', 'Talent', 'Crown', 'Pageant Life']
const filters = ['Most Recent', 'Most Popular', 'Featured']

function Sidebar() {
  return (
    <div className="w-full lg:w-1/3 pl-0 lg:pl-6">
      <div className="mb-6">
        <h4 className="font-bold mb-2">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm cursor-pointer hover:bg-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-bold mb-2">Filter By</h4>
        {filters.map(filter => (
          <button 
            key={filter} 
            className="block w-full text-left py-2 px-3 hover:bg-purple-100 rounded"
          >
            {filter}
          </button>
        ))}
      </div>

      <Link 
        href="https://www.instagram.com/pageantblog" 
        target="_blank"
        className="flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 rounded-lg mb-6"
      >
        <Instagram className="mr-2" /> Follow on Instagram
      </Link>

      <div className="bg-gray-100 p-3 rounded-lg">
        <img 
          src="https://via.placeholder.com/300x250.png?text=Advertisement"
          alt="Advertisement"
          className="w-full rounded"
        />
        <p className="text-xs text-gray-500 mt-1">Advertisement</p>
      </div>
    </div>
  )
}

export default function LatestPosts() {
  const [posts, setPosts] = useState(dummyPosts)
  const [loading, setLoading] = useState(false)

  const loadMore = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setPosts([...posts, ...dummyPosts])
      setLoading(false)
    }, 1000)
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="bg-purple-100 p-6 rounded-lg mb-6">
            <h4 className="font-bold mb-2 text-purple-800">Subscribe to Our Newsletter</h4>
            <p className="mb-4 text-purple-600">Stay updated with our latest pageant tips and news!</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow p-2 rounded-lg border-purple-300 border"
              />
              <button 
                type="submit" 
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="flex flex-col md:flex-row">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                />
                <div className="p-6 md:w-2/3">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                    {post.category}
                  </span>
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">by {post.author}</span>
                    </div>
                    <span className="flex items-center text-gray-500">
                      <MessageCircle size={18} className="mr-1" />
                      {post.commentCount}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <button 
            onClick={loadMore}
            disabled={loading}
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
        <Sidebar />
      </div>
    </section>
  )
} 