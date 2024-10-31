"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, Filter } from "lucide-react"
import Link from "next/link"

const reports = [
  {
    id: '1',
    name: 'Monthly Revenue Report',
    period: 'March 2024',
    type: 'Revenue',
    generated: '2024-03-15',
  },
  {
    id: '2',
    name: 'Expense Breakdown',
    period: 'Q1 2024',
    type: 'Expenses',
    generated: '2024-03-14',
  },
  {
    id: '3',
    name: 'Application Fee Summary',
    period: 'March 2024',
    type: 'Fees',
    generated: '2024-03-13',
  },
]

export function FinancialReportsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/director/finances"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Finances
      </Link>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Reports</h1>
          <p className="text-gray-600">View and download financial reports</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{report.name}</h3>
                    <p className="text-sm text-gray-500">Period: {report.period}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    Generated: {new Date(report.generated).toLocaleDateString()}
                  </span>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}