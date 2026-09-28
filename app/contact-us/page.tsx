import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact The Model Future for booking inquiries via WhatsApp or email.',
}

export default function ContactPage() {
  return <ContactSection />
}
