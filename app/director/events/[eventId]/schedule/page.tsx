import { EventScheduleContent } from './schedule-content'

export function generateStaticParams() {
  return [
    { eventId: 'miss-universe-2024' },
    { eventId: 'miss-world-2024' },
  ]
}

export default function EventSchedulePage({
  params,
}: {
  params: { eventId: string }
}) {
  return <EventScheduleContent eventId={params.eventId} />
}