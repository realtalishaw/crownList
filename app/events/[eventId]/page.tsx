import { Calendar, MapPin, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

// This would typically come from an API or database
const getEvent = async (id: string) => {
  // Placeholder implementation
  return {
    id,
    title: 'Miss Universe 2024',
    date: '2024-09-15',
    time: '8:00 PM EST',
    location: 'Las Vegas, Nevada',
    venue: 'MGM Grand Garden Arena',
    description: 'Join us for the most prestigious beauty pageant in the world.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920',
  };
};

// Required for static export
export function generateStaticParams() {
  return [
    { eventId: '1' },
    { eventId: '2' },
  ]
}

export default async function EventDetailPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await getEvent(params.eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold text-purple-800 mb-6">{event.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{event.venue}</span>
          </div>
        </div>

        <div className="prose prose-purple max-w-none">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}