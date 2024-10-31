import { Wrench } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Maintenance'
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center">
        <Wrench className="h-24 w-24 text-purple-600 mx-auto mb-8 animate-spin-slow" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Under Maintenance</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're currently performing scheduled maintenance to improve our services. Please check back soon.
        </p>
        <p className="text-sm text-gray-500">
          Expected completion: 2 hours
        </p>
      </div>
    </div>
  )
}