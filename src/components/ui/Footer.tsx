import Link from 'next/link'

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'AI Readiness Assessment', href: '/services#assessment' },
      { label: 'Data Architecture', href: '/services#architecture' },
      { label: 'GenAI Accelerators', href: '/services#genai' },
      { label: 'Data Governance', href: '/services#governance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Framework', href: '/framework' },
      { label: 'Insights', href: '/insights' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Book Advisory Call', href: '/contact' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Newsletter', href: '/contact#newsletter' },
      { label: 'News Feed', href: '/news' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-paper-warm border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-20 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 no-underline mb-4">
            <span className="w-2 h-2 rounded-full bg-brand inline-block" />
            <span className="font-serif text-xl font-bold text-ink">TheDatapedia</span>
          </Link>
          <p className="text-sm text-ink-faint leading-relaxed max-w-xs">
            The practitioner resource for AI-Ready Data. Strategy, architecture, and acceleration for enterprise Data & AI.
          </p>
          <div className="mt-6 font-mono text-2xs text-ink-faint uppercase tracking-wider">
            thedatapedia.com
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.title}>
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-5">{col.title}</div>
            <ul className="space-y-3 list-none">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-ink-muted no-underline hover:text-brand transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black/10 px-8 lg:px-20 py-5 max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-mono text-[10px] text-ink-faint tracking-wider">© 2026 TheDatapedia · All rights reserved</span>
        <span className="font-mono text-[10px] text-ink-faint tracking-wider">Privacy · Terms</span>
      </div>
    </footer>
  )
}
