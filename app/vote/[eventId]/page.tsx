import { VotingEventContent } from './voting-event-content'

export function generateStaticParams() {
  return [
    { eventId: 'miss-universe-2024-peoples-choice' },
    { eventId: 'miss-world-2024-peoples-choice' },
  ]
}

export default function VotingEventPage({
  params,
}: {
  params: { eventId: string }
}) {
  return <VotingEventContent eventId={params.eventId} />
}