import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useJoinGroup } from '@/hooks/useJoinGroup'
import type { CommunityGroup } from '@/types'

interface GroupCardProps {
  group: CommunityGroup
}

export default function GroupCard({ group }: GroupCardProps) {
  const { joinGroup, isLoading } = useJoinGroup(group.id)

  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <Image
          src={group.coverImage || '/images/default-cover.jpg'}
          alt={group.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Image
            src={group.profileImage || '/images/default-group.jpg'}
            alt={group.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{group.name}</h3>
            <p className="text-sm text-gray-500">
              {group.memberCount} members
            </p>
          </div>
        </div>

        <p className="text-sm mb-4 line-clamp-2">
          {group.description}
        </p>

        <div className="flex justify-between items-center">
          <Link href={`/groups/${group.id}`}>
            <Button variant="outline">View Group</Button>
          </Link>
          
          <Button 
            onClick={() => joinGroup()}
            disabled={isLoading}
          >
            Join Group
          </Button>
        </div>
      </div>
    </Card>
  )
} 