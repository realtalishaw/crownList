interface SponsoredContentProps {
  imageUrl: string
  linkUrl: string
  altText: string
}

export default function SponsoredContent({ imageUrl, linkUrl, altText }: SponsoredContentProps) {
  return (
    <div className="w-full container mx-auto bg-gray-100 p-3 mb-12 rounded-lg">
      <a 
        href={linkUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block relative group"
      >
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full h-60 object-cover rounded transition-opacity group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded" />
      </a>
      <p className="text-xs text-gray-500 mt-1 text-left pl-2">Advertisement</p>
    </div>
  )
} 