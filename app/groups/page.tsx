import { Metadata } from 'next'
import GroupsContent from './groups-content'

export const metadata: Metadata = {
  title: 'Community Groups | Pageant Platform',
  description: 'Discover and join community groups for pageant contestants, directors, and supporters'
}

export default function GroupsPage() {
  return <GroupsContent />
} 