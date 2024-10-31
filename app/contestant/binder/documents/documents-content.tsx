"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Upload, Download, Search, Plus } from "lucide-react"

const documents = [
  {
    id: '1',
    name: 'Application Form.pdf',
    category: 'Forms',
    uploadedAt: '2024-03-15',
    size: '2.4 MB',
  },
  {
    id: '2',
    name: 'Platform Statement.docx',
    category: 'Statements',
    uploadedAt: '2024-03-14',
    size: '1.1 MB',
  },
  {
    id: '3',
    name: 'Resume.pdf',
    category: 'Personal',
    uploadedAt: '2024-03-13',
    size: '890 KB',
  },
]

export function DocumentsContent() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Upload className="h-5 w-5 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search documents..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Document Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {['Forms', 'Statements', 'Personal'].map((category) => (
          <Card key={category}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="font-medium">{category}</h3>
                </div>
                <Button variant="ghost" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="py-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {doc.category} • {doc.size} • Uploaded {doc.uploadedAt}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}