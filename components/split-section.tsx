import Image from 'next/image'

export function SplitSection({
  title,
  points,
  image,
  imageAlt,
}: {
  title: string
  points: string[]
  image: string
  imageAlt: string
}) {
  return (
    <section className="grid md:mt-9 md:grid-cols-2">
      <div className="flex justify-center px-6 py-12 md:justify-end md:px-16 md:py-16">
        <div className="max-w-md">
          <h1 className="font-heading text-4xl text-primary md:text-5xl">{title}</h1>
          <ul className="mt-12 flex list-disc flex-col gap-12 pl-9 text-base leading-relaxed text-muted-foreground md:text-lg">
            {points.map((point) => (
              <li key={point.slice(0, 24)} className="text-pretty">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative min-h-96 md:min-h-full">
        <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
    </section>
  )
}
