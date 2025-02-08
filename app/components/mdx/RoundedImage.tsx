import Image from 'next/image'

export function RoundedImage({ caption, center = false, ...props }) {
  return (
    <figure className={`my-6 ${center ? 'flex flex-col items-center' : ''}`}>
      <Image src={''} alt={props.alt} className="rounded-lg" {...props} />
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
