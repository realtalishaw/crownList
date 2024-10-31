"use client"

import { useState } from 'react'
import { 
  Crown, 
  MapPin, 
  Link as LinkIcon, 
  Instagram, 
  Twitter, 
  Facebook,
  Calendar,
  Trophy,
  Users,
  MessageCircle,
  UserPlus,
  Share2
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { SAMPLE_MEMBERS } from '@/data/sample-members'

export function MemberProfileContent({ member }: { member: (typeof SAMPLE_MEMBERS)[0] }) {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="relative mb-8">
        {/* Cover Photo */}
        <div className="h-64 bg-purple-100 rounded-lg overflow-hidden">
          <Image
            src="https://source.unsplash.com/random/1200x400?pageant"
            alt="Cover"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col md:flex-row gap-6 -mt-20 px-6">
          {/* Profile Picture */}
          <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-purple-100 flex-shrink-0">
            <Image
              src="https://source.unsplash.com/random/400x400?portrait"
              alt="Profile"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Details */}
          <div className="flex-1 pt-20 md:pt-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    {member.type}
                  </Badge>
                </div>
                <p className="text-lg text-gray-600 mb-2">{member.title}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {member.joinDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-purple-600"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button 
                  variant={isFollowing ? "secondary" : "default"}
                  size="sm"
                  className={isFollowing ? "bg-purple-100 text-purple-700 hover:bg-purple-200" : ""}
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="space-y-6">
          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{member.about}</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Trophy className="h-4 w-4" />
                  <span>{member.title}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{member.followers} Followers</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link 
                  href="#" 
                  className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
                >
                  <Instagram className="h-4 w-4" />
                  <span>{member.social.instagram}</span>
                </Link>
                <Link 
                  href="#" 
                  className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
                >
                  <Twitter className="h-4 w-4" />
                  <span>{member.social.twitter}</span>
                </Link>
                <Link 
                  href="#" 
                  className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
                >
                  <LinkIcon className="h-4 w-4" />
                  <span>{member.social.website}</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">No posts yet</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="photos">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden bg-purple-100">
                        <Image
                          src={`https://source.unsplash.com/random/400x400?pageant&${index}`}
                          alt={`Photo ${index}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="achievements">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-purple-600" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 