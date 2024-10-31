import Link from 'next/link';
import { BookOpen, Users, Dumbbell, Shirt } from 'lucide-react';

const resourceCategories = [
  {
    title: "Pageant Tips",
    description: "Essential tips and tricks for pageant success",
    icon: BookOpen,
    href: "/resources/pageant-tips",
  },
  {
    title: "Interview Prep",
    description: "Master your pageant interview skills",
    icon: Users,
    href: "/resources/interview-prep",
  },
  {
    title: "Fitness & Nutrition",
    description: "Stay fit and healthy for competition",
    icon: Dumbbell,
    href: "/resources/fitness-nutrition",
  },
  {
    title: "Wardrobe & Styling",
    description: "Perfect your stage presence",
    icon: Shirt,
    href: "/resources/wardrobe-styling",
  },
];

export default function ResourcesHomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">Resources</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Explore our comprehensive collection of pageant resources to help you succeed in your journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resourceCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.title}
              href={category.href}
              className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <Icon className="h-12 w-12 text-purple-600 mb-4 group-hover:text-purple-700 transition-colors" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/resources/categories"
          className="text-purple-600 hover:text-purple-700 font-semibold"
        >
          View All Categories →
        </Link>
      </div>
    </div>
  );
}