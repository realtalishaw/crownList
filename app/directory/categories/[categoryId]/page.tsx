import { CategoryContent } from './category-content'

// This is required for static export
export function generateStaticParams() {
  return [
    { categoryId: 'pageants' },
    { categoryId: 'hair-makeup' },
    { categoryId: 'coaching' },
    { categoryId: 'retailers' },
    { categoryId: 'jewelry-accessories' },
    { categoryId: 'photography' },
    { categoryId: 'designers' },
    { categoryId: 'beauty-services' },
  ]
}

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string }
}) {
  return <CategoryContent categoryId={params.categoryId} />
}