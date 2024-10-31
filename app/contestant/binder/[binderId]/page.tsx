import { BinderOverview } from '../components/binder-overview';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// This is required for static export
export function generateStaticParams() {
  return [
    { binderId: 'miss-universe-2024' },
    { binderId: 'miss-world-2024' },
  ];
}

export default function BinderPage({
  params,
}: {
  params: { binderId: string };
}) {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/contestant/binder"
          className="inline-flex items-center text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Binders
        </Link>
      </div>

      <BinderOverview binderId={params.binderId} />
    </div>
  );
}