import { BookOpen } from 'lucide-react';
import Link from 'next/link';

const featuredPosts = [
  {
    id: '1',
    title: 'Top 10 Tips for Pageant Interview Success',
    excerpt: 'Master your pageant interview with these expert tips...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1920',
  },
  {
    id: '2',
    title: 'The Evolution of Pageant Fashion',
    excerpt: 'Explore how pageant fashion has transformed over the decades...',
    author: 'Emily Davis',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?q=80&w=1920',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-8">
        <BookOpen className="h-12 w-12 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-purple-800">The Crown Blog</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}