import { MemberProfileContent } from './member-profile-content'
import { SAMPLE_MEMBERS } from '@/data/sample-members'

export function generateStaticParams() {
  return SAMPLE_MEMBERS.map((member) => ({
    username: member.username,
  }))
}

export default function MemberProfilePage({
  params,
}: {
  params: { username: string }
}) {
  const member = SAMPLE_MEMBERS.find(m => m.username === params.username)
  
  if (!member) {
    // You might want to handle this case differently, perhaps with a 404 page
    return null
  }

  return <MemberProfileContent member={member} />
} 