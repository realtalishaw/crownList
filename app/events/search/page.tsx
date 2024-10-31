import { EventSearchResults } from './event-search-results'

export default function EventSearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  return <EventSearchResults searchQuery={searchParams.q} />
}