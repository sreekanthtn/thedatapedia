import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights — TheDatapedia',
  description: 'Practitioner POVs, frameworks, and case studies on AI-Ready Data. No vendor whitepapers — real patterns from real engagements.',
}

const FEATURED = {
  tag: 'Featured POV',
  title: 'Why Your Semantic Layer is the Most Important Investment Before Your First LLM',
  body: 'Every enterprise racing toward GPT-4 wrappers is missing the foundational point. The bottleneck is not the model — it is the absence of a shared business vocabulary that both humans and machines can trust. The semantic layer is not a BI tool feature. It is the nervous system of AI-Ready Data.',
  readTime: '8 min read',
  category: 'Data Architecture',
  date: 'May 2026',
  keyPoints: [
    'LLMs hallucinate proportionally to semantic ambiguity in your data',
    'A unified metrics layer reduces NL-to-SQL error rates by 60–80%',
    'dbt Semantic Layer + a vector store = the minimum viable RAG foundation',
    'Teams that skip this step rebuild it after their first production AI failure',
  ],
}

const POSTS = [
  {
    tag: 'Framework',
    title: 'The Data Contract Manifesto for the GenAI Era',
    body: 'Data contracts are not a technical nicety anymore. They are load-bearing walls for AI reliability. Here is how to implement them without a year-long governance program.',
    readTime: '6 min',
    category: 'Governance',
    date: 'May 2026',
  },
  {
    tag: 'Case Study',
    title: 'From Data Swamp to RAG-Ready in 12 Weeks',
    body: 'How a mid-market financial services firm cut AI hallucination rates by 80% by fixing their metadata layer before touching a single model.',
    readTime: '5 min',
    category: 'GenAI',
    date: 'Apr 2026',
  },
  {
    tag: 'POV',
    title: 'Stop Buying AI Tools. Start Buying Data Credibility.',
    body: 'The enterprise AI tool market hit $47B in 2025. Most of that spend will produce no lasting value. Here is the diagnostic question every CDO should ask before the next procurement.',
    readTime: '4 min',
    category: 'Strategy',
    date: 'Apr 2026',
  },
  {
    tag: 'Framework',
    title: 'The Modern Data Stack is Dead. Long Live the AI Data Stack.',
    body: 'Ingest → Transform → Serve was the MDS thesis. AI needs Govern → Semanticize → Productize on top of that. Here is the updated reference architecture.',
    readTime: '7 min',
    category: 'Architecture',
    date: 'Mar 2026',
  },
  {
    tag: 'POV',
    title: 'Your CDO Needs a New Job Description',
    body: 'The CDO role was designed for the BI era. In the AI era, the CDO is the de facto Chief AI Infrastructure Officer. Here is what that means for hiring, org design, and priorities.',
    readTime: '5 min',
    category: 'Leadership',
    date: 'Mar 2026',
  },
  {
    tag: 'Case Study',
    title: 'Data Mesh at Scale: What They Do Not Tell You',
    body: 'We have implemented data mesh at three enterprises. The technology is the easy part. Here are the five organizational anti-patterns that killed every failed data mesh project we have seen.',
    readTime: '9 min',
    category: 'Architecture',
    date: 'Feb 2026',
  },
]

const TAG_COLORS: Record<string, string> = {
  'Framework': 'text-brand bg-brand/5 border-brand/20',
  'Case Study': 'text-teal-600 bg-teal-500/5 border-teal-500/20',
  'POV': 'text-gold bg-gold/10 border-gold/20',
  'Featured POV': 'text-purple-600 bg-purple-500/5 border-purple-500/20',
}

const BENCHMARKS = [
  { metric: 'Orgs where AI is blocked by data, not model capability', value: '73%', source: 'Gartner 2026' },
  { metric: 'Faster AI deployment with mature data product teams', value: '2.8×', source: 'McKinsey 2025' },
  { metric: 'Reduction in hallucinations with proper semantic layer', value: '60–80%', source: 'TheDatapedia Engagements' },
  { metric: 'Average time from AI kickoff to discovering data blockers', value: '6 weeks', source: 'Forrester 2025' },
  { metric: 'CDOs planning data governance overhaul before next AI sprint', value: '68%', source: 'Gartner 2026' },
  { metric: 'RAG accuracy improvement with column-level lineage', value: '3.2×', source: 'TheDatapedia Engagements' },
]

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 pt-20 pb-12 border-b border-black/10">
          <div className="section-eyebrow">Practitioner Intelligence</div>
          <h1 className="font-serif text-5xl font-black tracking-tight text-ink mb-5 max-w-2xl leading-tight">
            No vendor whitepapers.<br />Real patterns from real engagements.
          </h1>
          <p className="text-xl text-ink-muted max-w-xl leading-relaxed">
            POVs, frameworks, and case studies written by practitioners who have shipped Data & AI in production — not consultants who have only sold it.
          </p>
        </section>

        {/* FEATURED */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-16 border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className={`tag-pill mb-4 inline-block ${TAG_COLORS[FEATURED.tag]}`}>{FEATURED.tag}</span>
              <h2 className="font-serif text-3xl font-bold text-ink leading-tight mb-5">{FEATURED.title}</h2>
              <p className="text-base text-ink-muted leading-relaxed mb-8">{FEATURED.body}</p>
              <div className="space-y-3 mb-8">
                {FEATURED.keyPoints.map((kp) => (
                  <div key={kp} className="flex items-start gap-3">
                    <span className="text-brand shrink-0 mt-1 font-mono">→</span>
                    <span className="text-sm text-ink-muted">{kp}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-5">
                <button className="btn-primary">Read Full Article →</button>
                <span className="font-mono text-xs text-ink-faint">{FEATURED.readTime} · {FEATURED.date}</span>
              </div>
            </div>

            {/* Featured visual */}
            <div className="bg-ink rounded-xl p-8 font-mono">
              <div className="text-[9px] tracking-widest uppercase text-white/25 mb-6">// Key Thesis</div>
              <div className="space-y-4">
                {[
                  { label: 'Model Quality', val: 92, note: 'Not the bottleneck' },
                  { label: 'Prompt Engineering', val: 78, note: 'Marginal gains only' },
                  { label: 'Semantic Clarity', val: 18, note: '← The actual gap' },
                  { label: 'Data Lineage', val: 24, note: '← Second biggest gap' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-[11px] mb-1.5">
                      <span className="text-white/50">{item.label}</span>
                      <span className={`text-[10px] ${item.note.includes('gap') ? 'text-red-400' : 'text-white/25'}`}>{item.note}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.val}%`,
                          background: item.note.includes('gap') ? '#e85555' : '#5555ff',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="text-[10px] text-white/20 mb-2 uppercase tracking-widest">Bottom line</div>
                <p className="text-[12px] text-white/55 leading-relaxed font-sans">
                  The model is 92% capable. Your semantic layer is 18% mature. Invest accordingly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* POSTS GRID */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-16">
          <div className="section-eyebrow mb-8">All Insights</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10 rounded-xl overflow-hidden">
            {POSTS.map((post) => (
              <div key={post.title} className="bg-paper p-8 hover:bg-paper-warm transition-colors duration-150 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`tag-pill ${TAG_COLORS[post.tag] || 'text-ink-faint border-black/10'}`}>{post.tag}</span>
                  <span className="font-mono text-[10px] text-ink-faint">{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-ink leading-snug mb-3 group-hover:text-brand transition-colors duration-150">{post.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">{post.body}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">{post.category}</span>
                  <span className="font-mono text-[10px] text-ink-faint">{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENCHMARK SECTION */}
        <section className="bg-ink py-20 px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs tracking-widest uppercase text-brand mb-3">Industry Benchmarks</div>
            <h2 className="font-serif text-3xl font-bold text-white mb-12 max-w-xl leading-tight">
              The numbers that every CDO should have on hand
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
              {BENCHMARKS.map((b) => (
                <div key={b.metric} className="bg-ink p-8 hover:bg-white/3 transition-colors">
                  <div className="font-serif text-4xl font-black text-brand mb-3">{b.value}</div>
                  <div className="text-sm text-white/60 leading-relaxed mb-4">{b.metric}</div>
                  <div className="font-mono text-[10px] text-white/20 uppercase tracking-wider">{b.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section id="newsletter" className="max-w-7xl mx-auto px-8 lg:px-20 py-20 text-center">
          <div className="section-eyebrow">Weekly Intelligence</div>
          <h2 className="font-serif text-4xl font-bold text-ink mb-4">The AI-Ready Data Brief</h2>
          <p className="text-ink-muted text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            One email, every Friday. The 3 most important developments in Data & AI that week — with practitioner commentary, not press release summaries.
          </p>
          <div className="flex gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Work email"
              className="flex-1 bg-paper-warm border border-black/15 text-ink font-sans text-sm px-5 py-3.5 rounded focus:outline-none focus:border-brand/40 placeholder:text-ink-faint"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe →</button>
          </div>
          <p className="font-mono text-[10px] text-ink-faint mt-4 uppercase tracking-wider">No spam · Unsubscribe anytime · 1,200+ practitioners subscribed</p>
        </section>

      </main>
      <Footer />
    </>
  )
}
