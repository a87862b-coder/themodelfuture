import Image from 'next/image'

type Logo = { src: string; width: number; height: number }

export function LogoGrid({ title, logos, uppercase }: { title: string; logos: Logo[]; uppercase?: boolean }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2
        className={`text-balance text-center font-heading text-2xl text-primary md:text-[32px] ${uppercase ? 'uppercase' : ''}`}
      >
        {title}
      </h2>
      <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
        {logos.map((logo, i) => (
          <li key={logo.src}>
            <Image
              src={logo.src}
              alt={`${title} logo ${i + 1}`}
              width={logo.width}
              height={logo.height}
              className="h-20 w-auto md:h-24"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
