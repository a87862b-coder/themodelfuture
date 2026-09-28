'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  { src: '/images/hero.jpg', alt: 'The Model Future campaign image' },
  { src: '/images/model-1.jpg', alt: 'Model represented by The Model Future' },
  { src: '/images/model-2.jpg', alt: 'Model represented by The Model Future' },
  { src: '/images/model-3.jpg', alt: 'Model represented by The Model Future' },
  { src: '/images/model-4.jpg', alt: 'Model represented by The Model Future' },
  { src: '/images/model-5.jpg', alt: 'Model represented by The Model Future' },
  { src: '/images/about.jpg', alt: 'The Model Future agency' },
  { src: '/images/scouted.jpg', alt: 'New talent scouted by The Model Future' },
]

export function HomeSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setActiveSlide(index)

  return (
    <section aria-label="The Model Future image slideshow" className="relative overflow-hidden bg-black">
      <div className="relative aspect-[16/9] min-h-[360px] w-full md:aspect-[2.2/1] md:min-h-[520px]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={index !== activeSlide}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/60 to-transparent px-5 pb-5 pt-12 md:px-10 md:pb-8">
        <p className="text-xs tracking-[0.28em] text-white/90 uppercase">
          {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </p>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slideshow image">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-label={`Show image ${index + 1}`}
              aria-selected={index === activeSlide}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeSlide ? 'w-8 bg-white' : 'w-1.5 bg-white/55 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { slides as homeSlides }
