"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, CreditCard, ArrowDownLeft, ArrowUpRight } from "lucide-react"

const payments = [
  {
    id: 'PAY-001',
    client: 'Sarah Johnson',
    amount: 150,
    date: '2024-03-15',
    method: 'Credit Card',
    type: 'incoming',
  },
  {
    id: 'PAY-002',
    client: 'Emily Davis',
    amount: 200,
    date: '2024-03-14',
    method: 'Bank Transfer',
    type: 'incoming',
  },
  {
    id: 'PAY-003',
    description: 'Software Subscription',
    amount: 49.99,
    date: '2024-03-13',
    method: 'Automatic Payment',
    type: 'outgoing',
  },
]

export function PaymentsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payments</h1>
          <p className="text-gray-600">Track incoming and outgoing payments</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <CreditCard className="h-5 w-5 mr-2" />
            Payment Settings
          </Button>
        </div>
      </div>

      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <ArrowDownLeft className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-500">This Month</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$4,250</h3>
            <p className="text-sm text-gray-500">Total Received</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <ArrowUpRight className="h-5 w-5 text-red-600" />
              <span className="text-sm text-gray-500">This Month</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$890</h3>
            <p className="text-sm text-gray-500">Total Spent</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Processing</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$750</h3>
            <p className="text-sm text-gray-500">Pending Payments</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search payments..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Payments List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    payment.type === 'incoming'
                      ? 'bg-green-100'
                      : 'bg-red-100'
                  }`}>
                    {payment.type === 'incoming' ? (
                      <ArrowDownLeft className={`h-5 w-5 ${
                        payment.type === 'incoming'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`} />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {payment.client || payment.description}
                    </p>
                    <p className="text-sm text-gray-500">{payment.method}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className={`font-medium ${
                    payment.type === 'incoming'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}>
                    {payment.type === 'incoming' ? '+' : '-'}${payment.amount}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(payment.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}