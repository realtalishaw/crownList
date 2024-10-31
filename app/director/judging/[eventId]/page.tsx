import { EventScoringContent } from './event-scoring-content'

export function generateStaticParams() {
  return [
    { eventId: 'miss-universe-2024' },
    { eventId: 'miss-world-2024' },
  ]
}

export default function EventScoringPage({
  params,
}: {
  params: { eventId: string }
}) {
  return <EventScoringContent eventId={params.eventId} />
}