import { Suspense } from 'react'
import SearchBar from '@/components/directory/search-bar'
import FiltersComponent from '@/components/directory/filters'
import BusinessDirectoryGrid from '@/components/directory/business-directory-grid'

export default function SearchResultsPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ''

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Results</h1>
        {query && (
          <p className="text-lg text-gray-600">
            Showing results for "{query}"
          </p>
        )}
      </div>

      <div className="mb-8">
        <SearchBar placeholder="Refine your search..." />
      </div>

      <FiltersComponent />

      <div className="mt-8">
        <BusinessDirectoryGrid />
      </div>
    </div>
  )
}