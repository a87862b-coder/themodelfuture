'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/get-scouted', label: 'Get Scouted' },
  { href: '/contact-us', label: 'Contact Us' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 md:px-16 md:py-6">
        <Link href="/" aria-label="The Model Future home" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="your future is in your hand"
            width={400}
            height={284}
            priority
            className="h-12 w-auto md:h-16"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'border-b pb-1 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:text-primary lg:text-base',
                      active ? 'border-foreground' : 'border-transparent',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-border bg-background md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={cn(
                    'block py-3 text-base font-bold uppercase tracking-wider text-foreground',
                    pathname === item.href && 'underline underline-offset-4',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
