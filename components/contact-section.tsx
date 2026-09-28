'use client'

import Image from 'next/image'
import { ChevronDown, MessageCircle } from 'lucide-react'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const channels = [
  { label: 'Instagram', href: 'https://www.instagram.com/themodelfuture_' },
  { label: 'Microsoft Teams', href: 'https://teams.live.com/l/invite/FAAXYmueid-T7ZTWQg?v=g1' },
  { label: 'WhatsApp', href: 'https://wa.me/19299395180' },
  { label: 'Email', href: 'mailto:info@themodelfuture.com' },
  { label: 'Telegram', href: 'https://t.me/themodelfuture' },
]

export function ContactSection() {

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="text-center font-heading text-4xl text-primary md:text-5xl">Contact Us</h1>

      <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <p className="text-base uppercase text-foreground">{'We are open & conducting business as usual'}</p>
          <p className="text-base leading-relaxed text-muted-foreground">
            We love our customers, so feel free to visit during normal business hours.
          </p>

          <a
            href="https://wa.me/19299395180"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-6" aria-hidden="true" />
            Message us on WhatsApp
          </a>

          <p className="text-base uppercase text-foreground">
            {'For booking inquiries : '}
            <a href="mailto:info@themodelfuture.com" className="hover:underline">
              info@themodelfuture.com
            </a>
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="text-base text-foreground">Hours</h2>
            <details className="group text-base">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-muted-foreground [&::-webkit-details-marker]:hidden">
                Open today
                <span className="text-foreground">{'07:00 am – 02:00 pm'}</span>
                <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <dl className="mt-3 grid grid-cols-[auto_auto] gap-x-6 gap-y-1 text-sm text-muted-foreground">
                {days.map((day) => (
                  <div key={day} className="contents">
                    <dt>{day}</dt>
                    <dd className="text-foreground">{day === 'Sunday' ? 'Closed' : '07:00 am – 02:00 pm'}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>

        </div>

        <Image
          src="/images/contact-logo.jpg"
          alt="The Model Future logo"
          width={797}
          height={542}
          className="mx-auto h-auto w-full max-w-md"
        />
      </div>

      <div className="mt-16 bg-muted px-6 py-12 text-center md:px-12">
        <h2 className="font-heading text-4xl text-primary md:text-5xl">Reach Out Anytime</h2>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="block rounded-full border border-primary px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {channel.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
