export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
        <p className="text-gray-600 mb-4">Sorry, there was a problem with the authentication process.</p>
        <a 
          href="/auth/login" 
          className="text-purple-600 hover:text-purple-800 underline"
        >
          Return to login
        </a>
      </div>
    </div>
  )
} 