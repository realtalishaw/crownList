import { BookingDetailContent } from './booking-detail-content'

export function generateStaticParams() {
  return [
    { bookingId: '1' },
    { bookingId: '2' },
  ]
}

export default function BookingDetailPage({
  params,
}: {
  params: { bookingId: string }
}) {
  return <BookingDetailContent bookingId={params.bookingId} />
}