"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Star, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

// This would typically come from an API or database
const getReview = (id: string) => {
  return {
    id,
    author: 'Sarah Johnson',
    rating: 5,
    comment: 'Excellent coaching service! Really helped me prepare for my pageant.',
    date: '2024-03-15',
    service: 'Pageant Coaching',
    response: 'Thank you for your kind words! It was a pleasure working with you.',
    responseDate: '2024-03-16',
  }
}

export function ReviewDetailContent({ reviewId }: { reviewId: string }) {
  const review = getReview(reviewId)
  const [response, setResponse] = useState(review.response || '')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Handle response submission
      toast.success("Response submitted successfully")
    } catch (error) {
      toast.error("Failed to submit response")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/business/reviews"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Reviews
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Review Details</h1>

        <div className="grid gap-6">
          {/* Review Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-600" />
                Review
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <span className="text-sm text-gray-500">
                    • {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="font-medium">{review.service}</p>
              </div>
            </CardContent>
          </Card>

          {/* Response Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-purple-600" />
                Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              {review.response ? (
                <div className="space-y-4">
                  <p className="text-gray-600">{review.response}</p>
                  <p className="text-sm text-gray-500">
                    Responded on {new Date(review.responseDate).toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea
                    placeholder="Write your response..."
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className="min-h-[150px]"
                  />
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit Response"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}