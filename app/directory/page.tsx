import SearchBar from '@/components/directory/search-bar'
import CategorySlider from '@/components/directory/category-slider'
import BusinessDirectoryGrid from '@/components/directory/business-directory-grid'
import FiltersComponent from '@/components/directory/filters'

export default function DirectoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Directory</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Find the best pageant services and professionals
        </p>
        <SearchBar />
      </div>

      <div className="mb-12">
        <CategorySlider />
      </div>

      <FiltersComponent />

      <div className="mt-8">
        <BusinessDirectoryGrid />
      </div>
    </div>
  )
}