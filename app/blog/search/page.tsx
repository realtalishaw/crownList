import { Metadata } from 'next'
import { Filter } from 'lucide-react'
import SearchBar from '../components/search-bar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Search Blog Posts | Pageant Portal',
  description: 'Search through our collection of pageant-related articles and posts',
}

interface SearchResult {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  imageUrl: string
  readTime: string
}

// Sample data - replace with API call
const searchResults: SearchResult[] = [
  {
    id: '1',
    title: 'How to Prepare for Your First Pageant Interview',
    excerpt: 'Master the art of pageant interviews with these expert tips and strategies...',
    category: 'Interview Prep',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
    imageUrl: '/images/blog/interview-prep.jpg',
    readTime: '5 min read'
  },
  // Add more sample results
]

const categories = [
  'All Categories',
  'Interview Prep',
  'Platform Development',
  'Fitness & Nutrition',
  'Stage Presence',
  'Wardrobe & Styling'
]

const timeFilters = [
  'Any Time',
  'Last 24 Hours',
  'Last Week',
  'Last Month',
  'Last Year'
]

const sortOptions = [
  'Most Relevant',
  'Most Recent',
  'Most Popular',
  'Oldest First'
]

export default function BlogSearchPage({
  searchParams
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ''

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Search Results</h1>
          <SearchBar />
          {query && (
            <p className="mt-4 text-gray-600">
              Showing results for "<span className="font-medium">{query}</span>"
            </p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 text-purple-600 mr-2" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-purple-600 rounded"
                      />
                      <span className="ml-2 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Time Period</h3>
                <select className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                  {timeFilters.map((filter) => (
                    <option key={filter}>{filter}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <select className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:w-3/4">
            {searchResults.length > 0 ? (
              <div className="space-y-6">
                {searchResults.map((result) => (
                  <article 
                    key={result.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <Link href={`/blog/${result.id}`}>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4">
                          <img
                            src={result.imageUrl}
                            alt={result.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-3/4">
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-2">
                            {result.category}
                          </span>
                          <h2 className="text-xl font-bold mb-2 hover:text-purple-600 transition-colors">
                            {result.title}
                          </h2>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {result.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>{result.date}</span>
                            <span className="mx-2">•</span>
                            <span>by {result.author}</span>
                            <span className="mx-2">•</span>
                            <span>{result.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  No results found
                </h2>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find what you're looking for
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 