"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus, Download, FileText } from "lucide-react"

const invoices = [
  {
    id: 'INV-001',
    client: 'Sarah Johnson',
    amount: 150,
    date: '2024-03-15',
    dueDate: '2024-03-30',
    status: 'Paid',
  },
  {
    id: 'INV-002',
    client: 'Emily Davis',
    amount: 200,
    date: '2024-03-14',
    dueDate: '2024-03-29',
    status: 'Pending',
  },
  {
    id: 'INV-003',
    client: 'Michelle Smith',
    amount: 175,
    date: '2024-03-13',
    dueDate: '2024-03-28',
    status: 'Overdue',
  },
]

export function InvoicesContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Invoices</h1>
          <p className="text-gray-600">Manage your invoices and payments</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-5 w-5 mr-2" />
            Create Invoice
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search invoices..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Invoices List */}
      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{invoice.client}</p>
                    <p className="text-sm text-gray-500">Invoice {invoice.id}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    ${invoice.amount}
                  </p>
                  <p className="text-sm text-gray-500">
                    Due {new Date(invoice.dueDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    invoice.status === 'Paid'
                      ? 'bg-green-100 text-green-700'
                      : invoice.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {invoice.status}
                  </span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}