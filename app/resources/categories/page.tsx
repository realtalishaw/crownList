import { Grid } from 'lucide-react';
import Link from 'next/link';

const categories = [
  "Competition Preparation",
  "Stage Presence",
  "Public Speaking",
  "Personal Development",
  "Mental Health & Wellness",
  "Platform Development",
  "Social Media Management",
  "Fundraising",
  "Community Service",
  "Leadership Skills",
  "Time Management",
  "Talent Preparation"
];

export default function ResourcesCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center mb-8">
        <Grid className="h-12 w-12 text-purple-600 mr-4" />
        <h1 className="text-4xl font-bold text-purple-800">Resource Categories</h1>
      </div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Browse our comprehensive collection of pageant resources by category.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/resources/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 hover:text-purple-600 transition-colors">
              {category}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}