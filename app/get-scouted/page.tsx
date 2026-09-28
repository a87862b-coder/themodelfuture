import type { Metadata } from 'next'
import { SplitSection } from '@/components/split-section'

export const metadata: Metadata = {
  title: 'Get Scouted',
  description: 'Become a model with The Model Future. Unique faces, strong character and open minds welcome.',
}

const points = [
  'Our goal is to help you to develops your potential, to find new opportunities to follow your dreams. We want to be your partner, not your boss. We are looking for models with unique faces, strong character and open mind. Curvy models are welcome as well.',
  'We believed models could be managed as talent in the same vein as professional athletes, actors, and other entertainers, and that their popularity could be leveraged into strong personal brands beyond the magazine page or runway.',
  'The agency’s ability to manage and maximize a model’s career at every stage has been proven innumerable times, whether by nurturing newly discovered talent, or revitalizing the professional lives of established models. The Future Model believes in the potential of the entire individual and has taken an unyielding stance against segmenting talent by race, age, or size.',
]

export default function GetScoutedPage() {
  return (
    <SplitSection
      title="Become A Model"
      points={points}
      image="/images/scouted.jpg"
      imageAlt="Dancer posing between tree branches in a tropical forest"
    />
  )
}
