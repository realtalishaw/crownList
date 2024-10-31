'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Redirect to search results page with the query
      router.push(`/blog/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700 transition-colors"
      >
        Search
      </button>
    </form>
  )
} 