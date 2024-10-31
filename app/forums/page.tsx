import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

const forumCategories = [
  {
    id: '1',
    name: 'General Discussion',
    description: 'General pageant-related discussions',
    threads: 156,
    posts: 1243,
  },
  {
    id: '2',
    name: 'Competition Prep',
    description: 'Tips and advice for pageant preparation',
    threads: 89,
    posts: 567,
  },
];

export default function ForumHomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-8">
        <MessageSquare className="h-12 w-12 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-purple-800">Community Forums</h1>
      </div>

      <div className="space-y-6">
        {forumCategories.map((category) => (
          <Link
            key={category.id}
            href={`/forums/categories/${category.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-purple-600 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-600 mt-1">{category.description}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>{category.threads} threads</p>
                <p>{category.posts} posts</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}