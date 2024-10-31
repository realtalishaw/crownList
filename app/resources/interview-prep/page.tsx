import { MessageSquare } from 'lucide-react';

export default function InterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-8">
        <MessageSquare className="h-12 w-12 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-purple-800">Interview Preparation</h1>
      </div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Master the art of pageant interviews with our comprehensive preparation guides.
      </p>
      
      {/* Placeholder for content - to be expanded */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Content coming soon...</p>
      </div>
    </div>
  );
}