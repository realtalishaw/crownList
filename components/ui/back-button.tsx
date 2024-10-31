import { ArrowLeft, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./button"

interface BackButtonProps {
  variant?: "arrow" | "close"
}

export function BackButton({ variant = "arrow" }: BackButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
      onClick={() => router.back()}
    >
      {variant === "arrow" ? (
        <ArrowLeft className="h-6 w-6" />
      ) : (
        <X className="h-6 w-6" />
      )}
    </Button>
  )
}