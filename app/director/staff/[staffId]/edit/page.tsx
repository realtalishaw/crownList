import { EditStaffContent } from './edit-staff-content'

export function generateStaticParams() {
  return [
    { staffId: '1' },
    { staffId: '2' },
  ]
}

export default function EditStaffMemberPage({
  params,
}: {
  params: { staffId: string }
}) {
  return <EditStaffContent staffId={params.staffId} />
}