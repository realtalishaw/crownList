import { Shirt } from 'lucide-react';

export default function WardrobeStylingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-8">
        <Shirt className="h-12 w-12 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-purple-800">Wardrobe & Styling</h1>
      </div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Perfect your stage presence with expert wardrobe and styling advice.
      </p>
      
      {/* Placeholder for content - to be expanded */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Content coming soon...</p>
      </div>
    </div>
  );
}