"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Heart, Trophy, DollarSign } from "lucide-react"
import Link from "next/link"

// This would typically come from an API or database
const getContestant = (id: string) => {
  return {
    id,
    name: 'Sarah Johnson',
    title: 'Miss California',
    votes: 1234,
    rank: 1,
    bio: 'Passionate about women empowerment and education...',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288',
  }
}

export function ContestantVotingContent({
  eventId,
  contestantId,
}: {
  eventId: string
  contestantId: string
}) {
  const [voteCount, setVoteCount] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const contestant = getContestant(contestantId)

  const handleVote = async () => {
    setIsLoading(true)
    // Handle voting logic
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href={`/vote/${eventId}`}
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Contestants
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contestant Image */}
        <div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src={contestant.image}
              alt={contestant.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Voting Section */}
        <div>
          <div className="sticky top-8">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{contestant.name}</h1>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                <Trophy className="h-4 w-4" />
                Rank #{contestant.rank}
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-2">{contestant.title}</p>
            <p className="text-gray-600 mb-8">{contestant.bio}</p>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Current Votes</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {contestant.votes.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Price per Vote</p>
                    <p className="text-2xl font-bold text-gray-900">$1.00</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label>Number of Votes</Label>
                    <div className="flex items-center gap-4 mt-2">
                      <Button
                        variant="outline"
                        onClick={() => setVoteCount(Math.max(1, voteCount - 1))}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        min="1"
                        value={voteCount}
                        onChange={(e) => setVoteCount(parseInt(e.target.value) || 1)}
                        className="text-center"
                      />
                      <Button
                        variant="outline"
                        onClick={() => setVoteCount(voteCount + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-4 border-t border-b">
                    <span className="font-medium">Total Amount:</span>
                    <span className="text-2xl font-bold">${(voteCount * 1).toFixed(2)}</span>
                  </div>

                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg"
                    onClick={handleVote}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Processing..."
                    ) : (
                      <>
                        <Heart className="h-5 w-5 mr-2" />
                        Cast {voteCount} Vote{voteCount > 1 ? 's' : ''}
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-center text-gray-500">
                    Secure payment powered by Stripe
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-gray-500">
              <p>Voting closes on April 20, 2024</p>
              <p>Maximum 10 votes per person per day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  )
}