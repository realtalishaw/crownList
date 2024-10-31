"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

// This would typically come from an API or database
const getListing = (id: string) => {
  return {
    id,
    title: 'Pageant Coaching Services',
    category: 'coaching',
    description: 'Professional pageant coaching services...',
    price: 150,
    duration: '1 hour',
    priceDetails: 'Package discounts available',
  }
}

export function EditListingContent({ listingId }: { listingId: string }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const listing = getListing(listingId)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Handle form submission
      toast.success("Listing updated successfully")
      router.push("/business/listings")
    } catch (error) {
      toast.error("Failed to update listing")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/business/listings"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Listings
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Listing</h1>

        <form onSubmit={handleSubmit}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Listing Title</Label>
                <Input
                  id="title"
                  placeholder="Enter listing title"
                  defaultValue={listing.title}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="w-full rounded-md border border-gray-200 p-2"
                  defaultValue={listing.category}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="coaching">Coaching</option>
                  <option value="styling">Styling</option>
                  <option value="photography">Photography</option>
                  <option value="beauty">Beauty Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your service..."
                  defaultValue={listing.description}
                  className="min-h-[150px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Base Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    defaultValue={listing.price}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    placeholder="e.g., 1 hour"
                    defaultValue={listing.duration}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priceDetails">Pricing Details</Label>
                <Textarea
                  id="priceDetails"
                  placeholder="Additional pricing information..."
                  defaultValue={listing.priceDetails}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  Drag and drop images here, or click to select files
                </p>
                <p className="text-xs text-gray-500">
                  Maximum file size: 5MB | Supported formats: JPG, PNG
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4"
                >
                  Select Files
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/business/listings")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}