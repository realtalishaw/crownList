import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          403 - Access Forbidden
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          You don't have permission to access this page.
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