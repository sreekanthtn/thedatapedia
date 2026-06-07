import Navbar from '@/components/ui/Navbar'
import NewsFeedTerminal from '@/components/news/NewsFeedTerminal'
import { getNewsFeed } from '@/lib/news'

export const revalidate = 3600

export default async function HomePage() {
  const feed = await getNewsFeed()

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="min-h-[92vh] grid grid-cols-1 lg:grid-cols-2">
          <div className="px-10 lg:px-20 py-20 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-brand bg-brand/7 border border-brand/20 px-3.5 py-1.5 rounded-sm mb-8 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
              AI-Ready Data Practice
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-7">
              Your Data Is<br />
              <em className="italic text-brand not-italic" style={{ fontStyle: 'italic' }}>Not Ready</em><br />
              for AI. Yet.
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-md mb-12">
              Most organizations are buying AI tools before fixing their data foundation.
              We diagnose, architect, and accelerate the data infrastructure that makes
              enterprise AI actually work — not just demo.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#assessment" className="btn-primary">Get Free Data Readiness Audit</a>
              <a href="framework" className="btn-ghost">See Our Framework</a>
            </div>
            <div className="flex gap-10 mt-16 pt-10 border-t border-black/10">
              {[
                { num: '73%', label: 'AI projects fail due\nto data issues' },
                { num: '6–18mo', label: 'Avg time lost before\nengaging data experts' },
                { num: '3.4×', label: 'ROI when data-first\napproach is adopted' },
              ].map((s) => (
                <div key={s.num}>
                  <span className="font-serif text-3xl font-bold text-ink block">{s.num}</span>
                  <span className="font-mono text-2xs text-ink-faint uppercase tracking-wider whitespace-pre-line">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink relative hidden lg:flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(26,26,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,255,0.08) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative z-10 w-80 space-y-3 font-mono">
              <div className="text-[10px] tracking-widest uppercase text-white/30 mb-5">
                Data Readiness Scorecard
              </div>
              {[
                { label: 'Completeness', val: 82, color: '#5555ff' },
                { label: 'Lineage Coverage', val: 34, color: '#c8a84b' },
                { label: 'Governance Score', val: 51, color: '#5555ff' },
                { label: 'ML Feature Store', val: 18, color: '#e85555' },
              ].map((m) => (
                <div key={m.label} className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-[12px] text-white/50">{m.label}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1 bg-white/10 rounded-sm overflow-hidden">
                      <div className="h-full rounded-sm" style={{ width: `${m.val}%`, background: m.color }} />
                    </div>
                    <span className="text-[11px] text-white/70 w-8 text-right">{m.val}%</span>
                  </div>
                </div>
              ))}
              <div className="bg-brand/30 border border-brand/60 rounded-md p-4 mt-4">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2">AI Readiness Verdict</div>
                <div className="text-[13px] text-white font-sans font-medium">
                  Foundation gaps detected — 3 critical blockers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER ───────────────────────────────────────────── */}
        <div className="bg-brand overflow-hidden py-3">
          <div className="flex animate-[ticker_28s_linear_infinite] whitespace-nowrap">
            {Array(2).fill(null).map((_, ri) => (
              <div key={ri} className="flex shrink-0">
                {['Data Strategy', 'AI Readiness Assessment', 'Modern Data Stack', 'Data Governance', 'GenAI Architecture', 'Lakehouse Design', 'Data Products', 'ML Ops & Feature Stores'].map((item) => (
                  <span key={item} className="font-mono text-xs tracking-widest uppercase text-white/80 px-10">
                    {item} <span className="text-white/30">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── NEWS FEED ─────────────────────────────────────────── */}
        <section id="news" className="px-10 lg:px-20 py-24 bg-paper">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="section-eyebrow">Live Intelligence Feed</div>
                <h2 className="section-h2 mb-0">Trending Data & AI News</h2>
                <p className="text-ink-muted text-base mt-3 max-w-lg">
                  Curated daily by our AI agent — signal over noise, filtered for enterprise data practitioners.
                </p>
              </div>
              <a
                href="/news"
                className="hidden md:block font-mono text-xs tracking-widest uppercase text-ink-faint hover:text-brand transition-colors no-underline"
              >
                Full archive →
              </a>
            </div>
            <NewsFeedTerminal feed={feed} />
          </div>
        </section>

        {/* ── ASSESSMENT CTA ───────────────────────────────────── */}
        <section id="assessment" className="bg-ink py-24 px-10 lg:px-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Free Assessment</div>
            <h2 className="font-serif text-4xl font-bold text-white tracking-tight leading-tight mb-5">
              Find out your AI Readiness Score in 15 minutes
            </h2>
            <p className="text-white/50 text-base mb-12 leading-relaxed">
              A personalized diagnostic across our 23-dimension AI-Ready Data framework.
              No pitch. No strings. Just clarity on where you stand.
            </p>
            <div className="flex gap-3 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Work email address"
                className="flex-1 bg-white/7 border border-white/15 text-white font-sans text-sm px-5 py-3.5 rounded focus:outline-none focus:border-brand/60 placeholder:text-white/30"
              />
              <button className="bg-brand text-white font-sans text-sm font-semibold px-7 py-3.5 rounded hover:bg-[#0000cc] transition-colors whitespace-nowrap">
                Get My Score
              </button>
            </div>
            <p className="font-mono text-[10px] text-white/25 tracking-wider mt-5 uppercase">
              No spam · No vendor pitch · Sent in 24 hours
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-paper-warm border-t border-black/10 px-10 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-xl font-bold text-ink mb-3">The Datapedia</div>
            <p className="text-sm text-ink-faint leading-relaxed max-w-xs">
              The practitioner resource for AI-Ready Data strategy, architecture, and acceleration.
            </p>
          </div>
          {[
            { title: 'Services', links: ['AI Readiness Assessment', 'Data Architecture', 'GenAI Accelerators', 'Data Governance'] },
            { title: 'Insights', links: ['POVs & Frameworks', 'Case Studies', 'AI Readiness Benchmark', 'Newsletter'] },
            { title: 'Company', links: ['About', 'Book Advisory Call', 'LinkedIn', 'Contact'] },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-4">{col.title}</div>
              <ul className="space-y-2.5 list-none">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-muted no-underline hover:text-brand transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-black/10 flex justify-between">
          <span className="font-mono text-[10px] text-ink-faint tracking-wider">
            © 2026 The Datapedia · thedatapedia.com
          </span>
          <span className="font-mono text-[10px] text-ink-faint tracking-wider">Privacy · Terms</span>
        </div>
      </footer>
    </>
  )
}
