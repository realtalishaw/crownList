import { ContestantVotingContent } from './contestant-voting-content'

export function generateStaticParams() {
  return [
    { eventId: 'miss-universe-2024-peoples-choice', contestantId: '1' },
    { eventId: 'miss-universe-2024-peoples-choice', contestantId: '2' },
  ]
}

export default function ContestantVotingPage({
  params,
}: {
  params: { eventId: string; contestantId: string }
}) {
  return <ContestantVotingContent eventId={params.eventId} contestantId={params.contestantId} />
}