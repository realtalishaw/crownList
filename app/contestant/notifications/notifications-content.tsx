"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, Calendar, Star } from "lucide-react"

const notifications = [
  {
    id: '1',
    type: 'message',
    title: 'New Message',
    content: 'Sarah Johnson sent you a message',
    time: '2 hours ago',
    icon: MessageSquare,
    read: false,
  },
  {
    id: '2',
    type: 'event',
    title: 'Event Reminder',
    content: 'Interview practice session tomorrow at 10 AM',
    time: '5 hours ago',
    icon: Calendar,
    read: true,
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Achievement Unlocked',
    content: 'Completed all profile sections!',
    time: '1 day ago',
    icon: Star,
    read: true,
  },
]

export function NotificationsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bell className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          </div>
          <Button variant="outline">Mark All as Read</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {notifications.map((notification) => {
                const Icon = notification.icon
                return (
                  <div
                    key={notification.id}
                    className={`py-4 flex items-start gap-4 ${
                      !notification.read ? 'bg-purple-50' : ''
                    }`}
                  >
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">
                          {notification.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-1">{notification.content}</p>
                    </div>
                    {!notification.read && (
                      <div className="h-2 w-2 bg-purple-600 rounded-full mt-2" />
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}