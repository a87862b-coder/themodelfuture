'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const models = [
  { src: '/images/model-1.jpg', width: 1280, height: 960 },
  { src: '/images/model-2.jpg', width: 1300, height: 1951 },
  { src: '/images/model-3.jpg', width: 1300, height: 868 },
  { src: '/images/model-4.jpg', width: 1080, height: 721 },
  { src: '/images/model-5.jpg', width: 960, height: 959 },
]

export function ModelsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)

  function scrollByItem(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    const atStart = track.scrollLeft <= 4
    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: direction * track.clientWidth * 0.7, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Models scouted and signed by The Model Future"
      >
        {models.map((model, i) => (
          <li key={model.src} className="h-80 shrink-0 snap-start md:h-[600px]">
            <Image
              src={model.src}
              alt={`Model ${i + 1} represented by The Model Future`}
              width={model.width}
              height={model.height}
              className="h-full w-auto object-cover"
              sizes="(min-width: 768px) 800px, 90vw"
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scrollByItem(-1)}
        aria-label="Previous model"
        className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition-colors hover:bg-background"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={() => scrollByItem(1)}
        aria-label="Next model"
        className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow transition-colors hover:bg-background"
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  )
}
