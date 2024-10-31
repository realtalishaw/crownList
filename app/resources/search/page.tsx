import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function ResourceSearchResultsPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || '';

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-8">
        <Search className="h-12 w-12 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-purple-800">Search Resources</h1>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <Input
          type="search"
          placeholder="Search resources..."
          defaultValue={query}
          className="w-full"
        />
      </div>

      {query ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Search results for "{query}" will appear here...</p>
        </div>
      ) : (
        <p className="text-center text-gray-600">
          Enter a search term to find resources
        </p>
      )}
    </div>
  );
}