import { BusinessContent } from './business-content'

export function generateStaticParams() {
  // In a real application, this would be populated with actual business IDs
  return [
    { businessId: 'example-business' }
  ]
}

export default function BusinessProfilePage({
  params,
}: {
  params: { businessId: string }
}) {
  return <BusinessContent businessId={params.businessId} />
}