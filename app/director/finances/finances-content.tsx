"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, DollarSign, ArrowUpRight, ArrowDownRight, FileText } from "lucide-react"
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

const transactions = [
  {
    id: '1',
    description: 'Application Fee - Sarah Johnson',
    amount: 150,
    type: 'income',
    date: '2024-03-15',
  },
  {
    id: '2',
    description: 'Venue Deposit',
    amount: 2500,
    type: 'expense',
    date: '2024-03-14',
  },
]

export function FinancesContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Finances</h1>
          <p className="text-gray-600">Track revenue and expenses</p>
        </div>
        <div className="flex gap-4">
          <Link href="/director/finances/reports">
            <Button variant="outline">
              <FileText className="h-5 w-5 mr-2" />
              Reports
            </Button>
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-5 w-5 text-green-600" />
              <span className="flex items-center text-sm text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +12%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$22,450</h3>
            <p className="text-sm text-gray-500">Total Revenue</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-5 w-5 text-red-600" />
              <span className="flex items-center text-sm text-red-600">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                +8%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$12,890</h3>
            <p className="text-sm text-gray-500">Total Expenses</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-500">Net</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$9,560</h3>
            <p className="text-sm text-gray-500">Net Income</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
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
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`text-lg font-medium ${
                  transaction.type === 'income'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}