import { MembersContent } from './members-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Members Directory'
}

export default function MembersPage() {
  return <MembersContent />
}