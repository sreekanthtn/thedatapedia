'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Framework', href: '/framework' },
  { label: 'Services', href: '/services' },
  { label: 'News', href: '/news' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="w-2 h-2 rounded-full bg-brand inline-block" />
          <span className="font-serif text-xl font-bold tracking-tight text-ink">TheDatapedia</span>
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-xs tracking-widest uppercase text-ink-muted no-underline hover:text-brand transition-colors duration-150"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#assessment"
          className="hidden md:block bg-ink text-paper font-sans text-xs font-medium px-5 py-2.5 rounded border-2 border-ink hover:bg-brand hover:border-brand transition-all duration-200 no-underline"
        >
          Book Advisory Call →
        </Link>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="font-mono text-xs">{open ? '[ close ]' : '[ menu ]'}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-black/10 px-8 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-ink-muted no-underline"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
