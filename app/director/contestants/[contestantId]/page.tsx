import { ContestantDetailContent } from './contestant-detail-content'

export function generateStaticParams() {
  return [
    { contestantId: '1' },
    { contestantId: '2' },
  ]
}

export default function ContestantDetailPage({
  params,
}: {
  params: { contestantId: string }
}) {
  return <ContestantDetailContent contestantId={params.contestantId} />
}