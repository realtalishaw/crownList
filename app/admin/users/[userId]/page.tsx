import { UserDetailContent } from './user-detail-content'

export function generateStaticParams() {
  return [
    { userId: '1' },
    { userId: '2' },
  ]
}

export default function UserDetailPage({
  params,
}: {
  params: { userId: string }
}) {
  return <UserDetailContent userId={params.userId} />
}