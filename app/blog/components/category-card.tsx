interface CategoryCardProps {
  name: string
  description: string
  postCount: number
  slug: string
}

export function CategoryCard({ name, description, postCount, slug }: CategoryCardProps) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">
        <a 
          href={`/blog?category=${slug}`}
          className="hover:text-primary"
        >
          {name}
        </a>
      </h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <span className="text-sm text-gray-500">
        {postCount} {postCount === 1 ? 'post' : 'posts'}
      </span>
    </div>
  )
} 