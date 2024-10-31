import { ArrowLeft, User, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from an API or database
const getPost = async (id: string) => {
  // Placeholder implementation
  return {
    id,
    title: 'Top 10 Tips for Pageant Interview Success',
    content: 'Article content will be displayed here...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1920',
  };
};

// Required for static export
export function generateStaticParams() {
  return [
    { postId: '1' },
    { postId: '2' },
  ]
}

export default async function BlogPostPage({
  params,
}: {
  params: { postId: string };
}) {
  const post = await getPost(params.postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold text-purple-800 mb-6">{post.title}</h1>

        <div className="flex items-center space-x-6 text-gray-600 mb-8">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="prose prose-purple max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}