import { Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

interface CardImageProps {
  src?: string
  alt?: string
}

export default function CardImage({ src, alt = '' }: CardImageProps) {
  return (
    <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      {src ? (
        <Image
          src={src}
          alt={alt}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-neutral-400" />
        </div>
      )}
    </div>
  )
}
