import { Metadata } from 'next'
import GroupContent from './group-content'
import { getGroup } from '@/lib/api/groups'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const group = await getGroup(params.id)
  
  return {
    title: `${group.name} | Community Groups`,
    description: group.description
  }
}

export default function GroupPage({ params }: Props) {
  return <GroupContent groupId={params.id} />
} 