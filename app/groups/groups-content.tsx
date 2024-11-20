'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import GroupCard from './components/group-card'
import CreateGroupDialog from './components/create-group-dialog'
import { useGroups } from '@/hooks/useGroups'

export default function GroupsContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [visibility, setVisibility] = useState('all')
  const [role, setRole] = useState('all')
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  
  const { groups, isLoading } = useGroups({ 
    q: searchQuery,
    visibility: visibility !== 'all' ? visibility : undefined,
    role: role !== 'all' ? role : undefined
  })

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Community Groups</h1>
        <Button onClick={() => setShowCreateDialog(true)}>
          Create Group
        </Button>
      </div>

      <div className="flex gap-4 mb-8">
        <Input
          placeholder="Search groups..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
        
        <Select
          value={visibility}
          onValueChange={setVisibility}
          options={[
            { label: 'All Groups', value: 'all' },
            { label: 'Public Groups', value: 'public' },
            { label: 'Private Groups', value: 'private' }
          ]}
        />

        <Select
          value={role}
          onValueChange={setRole}
          options={[
            { label: 'All Roles', value: 'all' },
            { label: 'Contestants', value: 'contestant' },
            { label: 'Directors', value: 'director' },
            { label: 'Businesses', value: 'business' },
            { label: 'Parents', value: 'parent' },
            { label: 'Supporters', value: 'supporter' }
          ]}
        />
      </div>

      {isLoading ? (
        <div>Loading groups...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups?.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      )}

      <CreateGroupDialog 
        open={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
      />
    </div>
  )
} 