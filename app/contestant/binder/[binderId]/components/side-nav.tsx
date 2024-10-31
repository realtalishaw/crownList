"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Book,
  Calendar,
  CheckSquare,
  FileText,
  MapPin,
  Shirt,
  Users,
  Megaphone,
  DollarSign,
} from 'lucide-react';

const navItems = [
  {
    title: 'Overview',
    icon: Book,
    href: (id: string) => `/contestant/binder/${id}`,
  },
  {
    title: 'Documents',
    icon: FileText,
    href: (id: string) => `/contestant/binder/${id}/documents`,
  },
  {
    title: 'Wardrobe',
    icon: Shirt,
    href: (id: string) => `/contestant/binder/${id}/wardrobe`,
  },
  {
    title: 'Schedule',
    icon: Calendar,
    href: (id: string) => `/contestant/binder/${id}/schedule`,
  },
  {
    title: 'Tasks',
    icon: CheckSquare,
    href: (id: string) => `/contestant/binder/${id}/tasks`,
  },
  {
    title: 'Appearances',
    icon: Users,
    href: (id: string) => `/contestant/binder/${id}/appearances`,
  },
  {
    title: 'Travel',
    icon: MapPin,
    href: (id: string) => `/contestant/binder/${id}/travel`,
  },
  {
    title: 'Platform',
    icon: Megaphone,
    href: (id: string) => `/contestant/binder/${id}/platform`,
    subItems: [
      {
        title: 'Social Media',
        href: (id: string) => `/contestant/binder/${id}/platform/social`,
      },
      {
        title: 'Media Kit',
        href: (id: string) => `/contestant/binder/${id}/platform/media-kit`,
      },
      {
        title: 'Community Service',
        href: (id: string) => `/contestant/binder/${id}/platform/community`,
      },
    ],
  },
  {
    title: 'Finances',
    icon: DollarSign,
    href: (id: string) => `/contestant/binder/${id}/finances`,
    subItems: [
      {
        title: 'Expenses',
        href: (id: string) => `/contestant/binder/${id}/finances/expenses`,
      },
      {
        title: 'Sponsorships',
        href: (id: string) => `/contestant/binder/${id}/finances/sponsorships`,
      },
      {
        title: 'Fundraising',
        href: (id: string) => `/contestant/binder/${id}/finances/fundraising`,
      },
    ],
  },
];

export function SideNav({ binderId }: { binderId: string }) {
  const pathname = usePathname();

  return (
    <nav className="w-64 bg-gray-50 border-r border-gray-200 p-6">
      <div className="space-y-4">
        {navItems.map((item) => {
          const href = item.href(binderId);
          const isActive = pathname === href || 
            (item.subItems?.some(sub => pathname === sub.href(binderId)));
          const Icon = item.icon;

          return (
            <div key={href}>
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                  isActive && "bg-purple-50 text-purple-900"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
              
              {item.subItems && isActive && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.subItems.map((subItem) => {
                    const subHref = subItem.href(binderId);
                    const isSubActive = pathname === subHref;
                    
                    return (
                      <Link
                        key={subHref}
                        href={subHref}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm text-gray-500 transition-all hover:text-gray-900",
                          isSubActive && "bg-purple-50 text-purple-900"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}