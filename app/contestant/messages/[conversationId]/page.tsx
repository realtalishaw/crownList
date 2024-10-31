import { ConversationContent } from './conversation-content'

export function generateStaticParams() {
  return [
    { conversationId: '1' },
    { conversationId: '2' },
  ]
}

export default function ConversationPage({
  params,
}: {
  params: { conversationId: string }
}) {
  return <ConversationContent conversationId={params.conversationId} />
}