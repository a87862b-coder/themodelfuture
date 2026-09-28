import Image from 'next/image'
import { ModelsCarousel } from '@/components/models-carousel'
import { LogoGrid } from '@/components/logo-grid'

const clientLogos = [
  { src: '/images/logos/client-1.png', width: 295, height: 200 },
  { src: '/images/logos/client-2.png', width: 170, height: 200 },
  { src: '/images/logos/client-3.png', width: 232, height: 200 },
  { src: '/images/logos/client-4.png', width: 201, height: 200 },
  { src: '/images/logos/client-5.png', width: 232, height: 200 },
  { src: '/images/logos/client-6.png', width: 269, height: 200 },
  { src: '/images/logos/client-7.png', width: 269, height: 200 },
  { src: '/images/logos/client-8.png', width: 246, height: 200 },
  { src: '/images/logos/client-9.png', width: 246, height: 200 },
]

const allianceLogos = [
  { src: '/images/logos/alliance-1.png', width: 431, height: 200 },
  { src: '/images/logos/alliance-2.png', width: 396, height: 200 },
  { src: '/images/logos/alliance-3.png', width: 295, height: 200 },
  { src: '/images/logos/alliance-4.png', width: 206, height: 200 },
  { src: '/images/logos/alliance-5.png', width: 224, height: 200 },
]

export default function HomePage() {
  return (
    <>
      <section className="w-full">
        <Image
          src="/images/hero.jpg"
          alt="The Model Future model on a staircase"
          width={1920}
          height={600}
          priority
          className="h-auto max-h-[520px] w-full object-cover"
          sizes="100vw"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-8 md:pt-10">
        <h1 className="text-balance text-center font-heading text-2xl text-primary md:text-[32px]">
          {'Models Scouted & Signed By The Model Future'}
        </h1>
        <div className="mt-10">
          <ModelsCarousel />
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-32">
        <Image
          src="/images/mission.jpg"
          alt="Collage of models represented by The Model Future"
          width={800}
          height={800}
          className="h-auto w-full"
        />
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          For us the personality matters. We are trying to provide our models care and support as well as
          professionalism to our clients. We believe in change in the beauty standards and therefore we are one of
          the first agencies in our country who represents curvy models. We are working on development of our models
          career at international level. We are a young and enthusiastic team and we believe in bright future of our
          models and our company.
        </p>
      </section>

      <LogoGrid title="Our Models Work For Major Clients" logos={clientLogos} uppercase />
      <LogoGrid title="Alliances With Business Leaders & Trade Associations" logos={allianceLogos} />
    </>
  )
}
