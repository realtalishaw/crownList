import { ReviewDetailContent } from './review-detail-content'

export function generateStaticParams() {
  return [
    { reviewId: '1' },
    { reviewId: '2' },
  ]
}

export default function ReviewDetailPage({
  params,
}: {
  params: { reviewId: string }
}) {
  return <ReviewDetailContent reviewId={params.reviewId} />
}