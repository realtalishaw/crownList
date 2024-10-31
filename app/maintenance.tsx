export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Under Maintenance
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We're currently updating our systems to serve you better. Please check back soon.
        </p>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
      </div>
    </div>
  )
}