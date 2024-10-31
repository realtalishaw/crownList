import { EventCategoryPage } from './event-category-page'

export function generateStaticParams() {
  return [
    { categoryId: 'national' },
    { categoryId: 'international' },
    { categoryId: 'state' },
    { categoryId: 'teen' },
    { categoryId: 'charity' },
    { categoryId: 'specialty' },
  ]
}

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string }
}) {
  return <EventCategoryPage categoryId={params.categoryId} />
}