import { Metadata } from 'next'
import FeaturedStory from './components/featured-story'
import CategoriesSection from './components/categories-section'
import TrendingStories from './components/trending-stories'
import SponsoredContent from './components/sponsored-content'
import LatestPosts from './components/latest-posts'
import SearchBar from './components/search-bar'
import { Crown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Pageant Portal',
  description: 'Latest news, tips, and insights from the pageant world',
}

// Sample data - replace with API calls
const featuredStory = {
  imageUrl: "/images/blog/featured-story.jpg",
  title: "The Evolution of Modern Pageantry: Breaking Stereotypes",
  excerpt: "Discover how modern pageants are transforming to celebrate diversity, intelligence, and social impact while maintaining their glamorous tradition.",
  category: "Industry Insights",
  date: "March 15, 2024",
  author: "Sarah Johnson",
  commentCount: 45,
  likeCount: 156
}

const trendingStories = [
  {
    image: "/images/blog/trending-1.jpg",
    title: "Sustainable Fashion in Pageantry: A New Era",
    excerpt: "How contestants are embracing eco-friendly fashion choices and making a statement on stage.",
    category: "Fashion",
    date: "March 14, 2024",
    author: "Emma Davis",
    commentCount: 28
  },
  {
    image: "/images/blog/trending-2.jpg",
    title: "Mental Health and Pageantry: Finding Balance",
    excerpt: "Expert advice on maintaining mental wellness while preparing for competitions.",
    category: "Wellness",
    date: "March 13, 2024",
    author: "Dr. Michelle Lee",
    commentCount: 32
  },
  {
    image: "/images/blog/trending-3.jpg",
    title: "Platform Development: Making Real Impact",
    excerpt: "How to create and execute a meaningful social impact platform.",
    category: "Social Impact",
    date: "March 12, 2024",
    author: "Jessica Martinez",
    commentCount: 19
  },
  {
    image: "/images/blog/trending-4.jpg",
    title: "Interview Preparation: Beyond the Basics",
    excerpt: "Advanced techniques for mastering the interview portion.",
    category: "Competition",
    date: "March 11, 2024",
    author: "Rachel Thompson",
    commentCount: 41
  }
]

const editorsPicks = [
  {
    title: "How to Perfect Your Pageant Walk: Expert Tips",
    date: "2 days ago"
  },
  {
    title: "Building Confidence: A Contestant's Guide",
    date: "3 days ago"
  },
  {
    title: "Interview Preparation: Common Questions and Answers",
    date: "4 days ago"
  },
  {
    title: "Evening Gown Selection: What Judges Look For",
    date: "5 days ago"
  }
]

const popularTags = [
  "Interview Tips",
  "Stage Presence",
  "Evening Gown",
  "Makeup",
  "Fitness",
  "Platform",
  "Confidence",
  "Preparation"
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pageant Portal Blog
            </h1>
            <p className="text-purple-200 text-lg mb-8">
              Discover insights, tips, and stories from the pageant community
            </p>
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <FeaturedStory {...featuredStory} />
            <TrendingStories stories={trendingStories} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Editor's Pick */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Crown className="text-purple-600 mr-2" />
                <h3 className="font-bold text-lg">Editor's Pick</h3>
              </div>
              <div className="space-y-4">
                {editorsPicks.map((pick, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-2xl font-bold text-purple-300 mr-3">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-medium hover:text-purple-600 cursor-pointer">
                        {pick.title}
                      </h4>
                      <p className="text-sm text-gray-500">{pick.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-md p-6 mb-6 text-white">
              <h3 className="font-bold text-xl mb-2">Stay Updated</h3>
              <p className="text-purple-100 mb-4">
                Get the latest pageant tips and news directly in your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-purple-600 font-medium py-2 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <SponsoredContent 
              imageUrl="/images/sponsored/ad-1.jpg"
              linkUrl="https://example.com/sponsor"
              altText="Sponsored Content"
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="my-12">
          <CategoriesSection />
        </div>

        {/* Latest Posts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8">
            <LatestPosts />
          </div>
          <div className="lg:col-span-4">
            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Feed */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              {/* Add social media feed/widgets here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}