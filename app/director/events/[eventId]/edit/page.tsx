import { EditEventContent } from './edit-event-content'

export function generateStaticParams() {
  return [
    { eventId: 'miss-universe-2024' },
    { eventId: 'miss-world-2024' },
  ]
}

export default function EditEventPage({
  params,
}: {
  params: { eventId: string }
}) {
  return <EditEventContent eventId={params.eventId} />
}