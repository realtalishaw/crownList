import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy'
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Learn how we protect and manage your data at The Crown List.
      </p>
    </div>
  )
}