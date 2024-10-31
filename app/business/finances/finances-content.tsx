"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  CreditCard,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 12450 },
  { month: 'Feb', revenue: 14250 },
  { month: 'Mar', revenue: 18900 },
  { month: 'Apr', revenue: 16780 },
  { month: 'May', revenue: 19500 },
  { month: 'Jun', revenue: 22400 },
]

export function FinancesContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Finances</h1>
          <p className="text-gray-600">Manage your business finances</p>
        </div>
        <div className="flex gap-4">
          <Link href="/business/finances/invoices">
            <Button variant="outline">
              <FileText className="h-5 w-5 mr-2" />
              Invoices
            </Button>
          </Link>
          <Link href="/business/finances/payments">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <CreditCard className="h-5 w-5 mr-2" />
              Payments
            </Button>
          </Link>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-5 w-5 text-gray-400" />
              <span className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +12%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$22,450</h3>
            <p className="text-sm text-gray-500">Monthly Revenue</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <FileText className="h-5 w-5 text-gray-400" />
              <span className="flex items-center text-sm text-red-600">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                -3%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$4,890</h3>
            <p className="text-sm text-gray-500">Outstanding Invoices</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-5 w-5 text-gray-400" />
              <span className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +8%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$245</h3>
            <p className="text-sm text-gray-500">Average Transaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#7C3AED"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                client: 'Sarah Johnson',
                service: 'Pageant Coaching',
                amount: 150,
                date: '2024-03-15',
                status: 'Completed',
              },
              {
                client: 'Emily Davis',
                service: 'Styling Session',
                amount: 200,
                date: '2024-03-14',
                status: 'Pending',
              },
              {
                client: 'Michelle Smith',
                service: 'Interview Prep',
                amount: 175,
                date: '2024-03-13',
                status: 'Completed',
              },
            ].map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{transaction.client}</p>
                  <p className="text-sm text-gray-500">{transaction.service}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    ${transaction.amount}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  transaction.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {transaction.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}