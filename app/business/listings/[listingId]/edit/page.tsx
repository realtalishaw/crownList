import { EditListingContent } from './edit-listing-content'

export function generateStaticParams() {
  return [
    { listingId: '1' },
    { listingId: '2' },
  ]
}

export default function EditListingPage({
  params,
}: {
  params: { listingId: string }
}) {
  return <EditListingContent listingId={params.listingId} />
}