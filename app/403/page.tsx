import { ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <ShieldAlert className="h-24 w-24 text-purple-600 mx-auto mb-8" />
        <h1 className="text-6xl font-bold text-gray-900 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Access Forbidden</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          You do not have permission to access this page. Please contact support if you believe this is an error.
        </p>
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}