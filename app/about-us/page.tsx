import type { Metadata } from 'next'
import { SplitSection } from '@/components/split-section'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Our mission: giving young women a chance to develop their potential in the fashion industry.',
}

const points = [
  'We are happy about your interest in our agency. The Model Future is passionate about giving young women a chance to try themselves in the fashion industry and therefore to developed their personal potential, to see the world and to follow their dreams. We are scouting unique faces and strong characters, not just models but young people with the potential.',
  'Our staff has managed the careers of hundreds of fashion and commercial models, and we fully understand the various aspects of the modeling industry from contract negotiations, the relationships between international and mother agencies, travel arrangements, overseas accommodations, work visa’s in foreign countries, and more.',
  'Models discovered through The Future Model have worked for all the top clients including: Vogue, Glamour, Cosmopolitan, Elle, Amica, GQ, Esquire, Seventeen, Cosmo Girl, Elle Girl, Gear, Marie Claire, Harper’s Bazaar, and have worked for the most prestigious clients including: Giorgio Armani, Prada, Marc Jacobs, Givenchy, Versace, Abercrombie & Fitch, Dolce & Gabbana and more.',
]

export default function AboutPage() {
  return (
    <SplitSection
      title="Our Mission"
      points={points}
      image="/images/about.jpg"
      imageAlt="Model leaping above a lake surrounded by autumn leaves"
    />
  )
}
