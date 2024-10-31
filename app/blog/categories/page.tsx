import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Categories | Pageant Portal',
  description: 'Browse blog posts by category to find content that interests you most.',
}

interface BlogCategory {
  id: string
  name: string
  description: string
  postCount: number
  slug: string
}

// This would typically come from your API/database
const SAMPLE_CATEGORIES: BlogCategory[] = [
  {
    id: '1',
    name: 'Competition Tips',
    description: 'Expert advice and strategies for pageant competitions',
    postCount: 24,
    slug: 'competition-tips'
  },
  {
    id: '2',
    name: 'Interview Preparation',
    description: 'Guides and tips for acing your pageant interview',
    postCount: 18,
    slug: 'interview-prep'
  },
  {
    id: '3',
    name: 'Platform Development',
    description: 'Build and grow your social impact platform',
    postCount: 15,
    slug: 'platform'
  },
  // Add more categories as needed
]

export default function BlogCategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog Categories</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {SAMPLE_CATEGORIES.map((category) => (
            <div 
              key={category.id}
              className="p-6 border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">
                <a 
                  href={`/blog?category=${category.slug}`}
                  className="hover:text-primary"
                >
                  {category.name}
                </a>
              </h2>
              <p className="text-gray-600 mb-3">{category.description}</p>
              <span className="text-sm text-gray-500">
                {category.postCount} {category.postCount === 1 ? 'post' : 'posts'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 