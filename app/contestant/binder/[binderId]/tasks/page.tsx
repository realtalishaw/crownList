import { CheckSquare } from 'lucide-react';

export function generateStaticParams() {
  return [
    { binderId: 'miss-universe-2024' },
    { binderId: 'miss-world-2024' },
  ];
}

export default function TasksPage({
  params,
}: {
  params: { binderId: string };
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <CheckSquare className="h-8 w-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Track your pageant preparation tasks.</p>
      </div>
    </div>
  );
}