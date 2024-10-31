import { ScoringResultsContent } from './scoring-results-content'

export function generateStaticParams() {
  return [
    { eventId: 'miss-universe-2024' },
    { eventId: 'miss-world-2024' },
  ]
}

export default function ScoringResultsPage({
  params,
}: {
  params: { eventId: string }
}) {
  return <ScoringResultsContent eventId={params.eventId} />
}