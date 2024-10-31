"use client"

import React, { useState } from 'react'
import { ChevronDown, X, Check, SlidersHorizontal } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Best Rating' },
  { value: 'newest', label: 'Newest' },
]

const mainFilters = [
  {
    name: 'category',
    label: 'Category',
    options: ['Makeup Artists', 'Hair Stylists', 'Dress Designers', 'Coaches'],
  },
  {
    name: 'priceRange',
    label: 'Price Range',
    options: ['$', '$$', '$$$', '$$$$'],
  },
]

const advancedFilters = [
  {
    name: 'experience',
    label: 'Experience Level',
    type: 'checkbox',
    options: ['Beginner-friendly', 'Experienced', 'Celebrity'],
  },
  {
    name: 'specialization',
    label: 'Specialization',
    type: 'checkbox',
    options: ['Teen Pageants', 'Miss USA', 'International Pageants'],
  },
  {
    name: 'rating',
    label: 'Rating',
    type: 'radio',
    options: ['5 stars only', '4+ stars', '3+ stars'],
  },
  {
    name: 'location',
    label: 'Location',
    type: 'location',
    options: ['Within 5 miles', 'Within 10 miles', 'Within 25 miles', 'Within 50 miles'],
  },
]

export default function FiltersComponent() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
  const [tempFilters, setTempFilters] = useState<Record<string, string[]>>({})
  const [activeSort, setActiveSort] = useState('popular')
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const handleSortChange = (value: string) => {
    setActiveSort(value)
    setOpenDropdown(null)
  }

  const toggleFilter = (category: string, option: string) => {
    setActiveFilters(prev => {
      const categoryFilters = prev[category] || []
      const updated = { ...prev }
      
      if (categoryFilters.includes(option)) {
        updated[category] = categoryFilters.filter(item => item !== option)
        if (updated[category].length === 0) {
          delete updated[category]
        }
      } else {
        updated[category] = [...categoryFilters, option]
      }
      
      return updated
    })
  }

  const toggleAdvancedFilter = (category: string, option: string) => {
    setTempFilters(prev => {
      const categoryFilters = prev[category] || []
      const updated = { ...prev }
      
      if (categoryFilters.includes(option)) {
        updated[category] = categoryFilters.filter(item => item !== option)
        if (updated[category].length === 0) {
          delete updated[category]
        }
      } else {
        if (advancedFilters.find(f => f.name === category)?.type === 'radio') {
          updated[category] = [option]
        } else {
          updated[category] = [...categoryFilters, option]
        }
      }
      
      return updated
    })
  }

  const removeFilter = (category: string, option: string) => {
    setActiveFilters(prev => {
      const updated = { ...prev }
      updated[category] = updated[category].filter(item => item !== option)
      if (updated[category].length === 0) {
        delete updated[category]
      }
      return updated
    })
  }

  const handleSheetOpen = (open: boolean) => {
    setIsSheetOpen(open)
    if (open) {
      setTempFilters(activeFilters)
    }
  }

  const handleApplyFilters = () => {
    setActiveFilters(prev => ({
      ...prev,
      ...tempFilters
    }))
    setIsSheetOpen(false)
  }

  const handleClearAdvancedFilters = () => {
    const mainFilterKeys = mainFilters.map(f => f.name)
    setTempFilters({})
    setActiveFilters(prev => {
      const updated = { ...prev }
      Object.keys(updated).forEach(key => {
        if (!mainFilterKeys.includes(key)) {
          delete updated[key]
        }
      })
      return updated
    })
  }

  const allSelectedFilters = Object.entries(activeFilters).flatMap(([category, options]) =>
    options.map(option => ({ category, option }))
  )

  return (
    <div className="bg-white border-b border-gray-200 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('sort')}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {sortOptions.find(opt => opt.value === activeSort)?.label || 'Sort'}
              <ChevronDown className="ml-2 inline-block" size={16} />
            </button>
            {openDropdown === 'sort' && (
              <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleSortChange(option.value)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {option.label}
                      {activeSort === option.value && (
                        <Check className="ml-2 inline-block text-purple-600" size={16} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Filters */}
          <div className="flex items-center space-x-4">
            {mainFilters.map(category => (
              <div key={category.name} className="relative">
                <button
                  onClick={() => toggleDropdown(category.name)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  {category.label}
                  <ChevronDown className="ml-2 inline-block" size={16} />
                </button>
                {openDropdown === category.name && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      {category.options.map(option => (
                        <label
                          key={option}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={activeFilters[category.name]?.includes(option) || false}
                            onChange={() => toggleFilter(category.name, option)}
                            className="mr-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Advanced Filters Button */}
            <Sheet open={isSheetOpen} onOpenChange={handleSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal size={16} />
                  More Filters
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="w-[400px] sm:w-[540px] flex flex-col"
              >
                <SheetHeader className="pb-6">
                  <SheetTitle>Advanced Filters</SheetTitle>
                </SheetHeader>
                
                <div className="flex-1 overflow-y-auto">
                  {advancedFilters.map(filter => (
                    <div key={filter.name} className="space-y-4">
                      <h3 className="font-medium text-sm">{filter.label}</h3>
                      <div className="space-y-4">
                        {filter.type === 'location' ? (
                          <div className="space-y-4">
                            <Input 
                              type="text" 
                              placeholder="Enter location..."
                              className="w-full"
                            />
                            <div className="space-y-2">
                              {filter.options.map(option => (
                                <label
                                  key={option}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="radio"
                                    checked={tempFilters[filter.name]?.includes(option) || false}
                                    onChange={() => toggleAdvancedFilter(filter.name, option)}
                                    className="text-purple-600 focus:ring-purple-500"
                                  />
                                  <span className="text-sm text-gray-600">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {filter.options.map(option => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type={filter.type}
                                  checked={tempFilters[filter.name]?.includes(option) || false}
                                  onChange={() => toggleAdvancedFilter(filter.name, option)}
                                  className="text-purple-600 focus:ring-purple-500"
                                />
                                <span className="text-sm text-gray-600">{option}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                      <Separator className="my-4" />
                    </div>
                  ))}
                </div>
                
                <SheetFooter className="mt-auto border-t p-4">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <Button 
                      variant="outline" 
                      onClick={handleClearAdvancedFilters}
                    >
                      Clear
                    </Button>
                    <Button 
                      onClick={handleApplyFilters}
                      className="bg-purple-600 text-white hover:bg-purple-700"
                    >
                      Apply
                    </Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters */}
        {allSelectedFilters.length > 0 && (
          <div className="bg-gray-100 py-3 px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">Filters</span>
              <div className="flex flex-wrap gap-2">
                {allSelectedFilters.map(({ category, option }) => (
                  <span
                    key={`${category}-${option}`}
                    className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center"
                  >
                    {option}
                    <button
                      onClick={() => removeFilter(category, option)}
                      className="ml-1 focus:outline-none"
                    >
                      <X className="h-3 w-3 text-purple-500" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}