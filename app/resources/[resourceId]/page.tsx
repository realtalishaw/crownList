import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// This would typically come from an API or database
const getResource = async (id: string) => {
  // Placeholder implementation
  return {
    id,
    title: 'Resource Title',
    content: 'Resource content will be displayed here.',
    category: 'Category',
    author: 'Author Name',
    publishedAt: new Date().toISOString(),
  };
};

export default async function ResourceDetailPage({
  params,
}: {
  params: { resourceId: string };
}) {
  const resource = await getResource(params.resourceId);

  if (!resource) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/resources"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Resources
      </Link>

      <article className="prose prose-purple lg:prose-xl mx-auto">
        <h1>{resource.title}</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <span>{resource.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={resource.publishedAt}>
            {new Date(resource.publishedAt).toLocaleDateString()}
          </time>
          <span className="mx-2">•</span>
          <span>{resource.category}</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          {resource.content}
        </div>
      </article>
    </div>
  );
}