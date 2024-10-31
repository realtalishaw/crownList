import { ManageContestantsContent } from './manage-contestants-content'

export function generateStaticParams() {
  return [
    { eventId: 'miss-universe-2024-peoples-choice' },
    { eventId: 'miss-world-2024-peoples-choice' },
  ]
}

export default function ManageContestantsPage({
  params,
}: {
  params: { eventId: string }
}) {
  return <ManageContestantsContent eventId={params.eventId} />
}