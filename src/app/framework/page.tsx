import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Ready Data Ladder™ Framework — TheDatapedia',
  description: 'A practitioner-built framework that sequences your data investments for maximum AI leverage.',
}

const LADDER_STEPS = [
  {
    num: '01',
    phase: 'Diagnose',
    title: 'Data Inventory & AI Utility Mapping',
    what: 'Catalog every data asset. Classify by AI utility — training, RAG, inference, evaluation. Score current quality, accessibility, and lineage coverage.',
    why: 'You cannot roadmap what you have not mapped. Most organizations discover 40% of their data assets are either duplicated, ungoverned, or inaccessible to AI workloads.',
    output: 'AI Utility Heatmap · Data Asset Registry · Blocker Report',
    weeks: '2–3 weeks',
    color: 'border-brand/40 bg-brand/5',
    numColor: 'text-brand/30',
  },
  {
    num: '02',
    phase: 'Unify',
    title: 'Semantic Layer & Unified Data Model',
    what: 'Build a shared semantic layer — the business vocabulary that both humans and AI query against. Define canonical entities: Customer, Product, Transaction, Event.',
    why: 'LLMs hallucinate when your data has no coherent story. A semantic layer is the connective tissue that lets AI reason across your business, not just answer point queries.',
    output: 'Semantic Model · dbt Metrics Layer · Entity Definitions · Glossary',
    weeks: '4–6 weeks',
    color: 'border-gold/40 bg-gold/5',
    numColor: 'text-gold/40',
  },
  {
    num: '03',
    phase: 'Govern',
    title: 'Data Contracts, Lineage & Access Controls',
    what: 'Implement data contracts between producers and consumers. Deploy end-to-end lineage tracking. Enforce attribute-level access governance for AI outputs.',
    why: 'AI outputs are only as trustworthy as their inputs. Without lineage, you cannot audit why your model said what it said — a critical requirement under EU AI Act and FINRA.',
    output: 'Data Contracts · Lineage Graph · RBAC Policy · Audit Trail',
    weeks: '4–8 weeks',
    color: 'border-teal-500/40 bg-teal-500/5',
    numColor: 'text-teal-600/40',
  },
  {
    num: '04',
    phase: 'Productize',
    title: 'Data Products & AI Asset Layer',
    what: 'Package governed data as reusable data products with SLAs. Build feature stores for ML. Create embedding pipelines and RAG-ready corpora for GenAI.',
    why: 'Build once, power many AI applications. Teams that productize data report 2.8× faster AI deployment cycles. This is the compound interest of the data-first approach.',
    output: 'Data Product Catalog · Feature Store · Vector Embeddings · RAG Corpus',
    weeks: '6–12 weeks',
    color: 'border-purple-500/40 bg-purple-500/5',
    numColor: 'text-purple-500/40',
  },
]

const MATURITY_LEVELS = [
  { level: 'L1', name: 'Reactive', desc: 'Ad-hoc queries, no governance, data in silos. AI projects fail in POC.', score: '0–25' },
  { level: 'L2', name: 'Managed', desc: 'Basic pipelines, some documentation. AI demos work but dont scale.', score: '26–50' },
  { level: 'L3', name: 'Defined', desc: 'Unified model, semantic layer in place. First AI products reach production.', score: '51–70' },
  { level: 'L4', name: 'Optimized', desc: 'Data products, feature stores, full lineage. AI is a competitive advantage.', score: '71–100' },
]

const DIMENSIONS = [
  'Data Quality Index', 'Lineage Coverage', 'Governance Maturity',
  'Semantic Layer Depth', 'Access Control Granularity', 'Data Product Count',
  'ML Feature Store Readiness', 'RAG Corpus Quality', 'Metadata Completeness',
  'Pipeline Reliability (SLA)', 'Schema Evolution Management', 'Data Contract Adoption',
]

export default function FrameworkPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 pt-20 pb-16">
          <div className="section-eyebrow">Proprietary Methodology</div>
          <h1 className="font-serif text-5xl lg:text-6xl font-black tracking-tight leading-tight text-ink mb-6 max-w-3xl">
            The AI-Ready<br />Data Ladder™
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed max-w-2xl mb-10">
            A practitioner-built framework that sequences your data investments so every dollar spent on AI infrastructure compounds — instead of evaporating into shelfware.
          </p>
          <div className="flex gap-4">
            <a href="/contact" className="btn-primary">Get Your Readiness Score</a>
            <a href="/services" className="btn-ghost">See Engagement Models</a>
          </div>
        </section>

        {/* LADDER DIAGRAM */}
        <section className="bg-ink py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div className="font-mono text-xs tracking-widest uppercase text-brand mb-12 text-center">
              // The Four-Phase Sequence
            </div>

            {/* Visual ladder */}
            <div className="relative">
              {/* Spine */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/60 via-gold/40 to-purple-500/40 hidden lg:block" />

              <div className="space-y-6">
                {LADDER_STEPS.map((step, i) => (
                  <div key={step.num} className={`flex gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                    {/* Card */}
                    <div className={`lg:w-[46%] border ${step.color} rounded-lg p-8`}>
                      <div className="flex items-start gap-4 mb-5">
                        <span className={`font-serif text-5xl font-black ${step.numColor} leading-none`}>{step.num}</span>
                        <div>
                          <div className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-1">{step.phase}</div>
                          <h3 className="font-serif text-xl font-bold text-white leading-tight">{step.title}</h3>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="font-mono text-[9px] tracking-widest uppercase text-white/25 mb-1.5">What we do</div>
                          <p className="text-sm text-white/60 leading-relaxed">{step.what}</p>
                        </div>
                        <div>
                          <div className="font-mono text-[9px] tracking-widest uppercase text-white/25 mb-1.5">Why it matters</div>
                          <p className="text-sm text-white/50 leading-relaxed">{step.why}</p>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                          <div className="font-mono text-[9px] tracking-widest uppercase text-white/25 mb-2">Deliverables</div>
                          <div className="flex flex-wrap gap-1.5">
                            {step.output.split(' · ').map((o) => (
                              <span key={o} className="font-mono text-[9px] tracking-wider uppercase text-white/40 border border-white/10 px-2 py-1 rounded-sm">{o}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center node */}
                    <div className="lg:w-[8%] flex items-center justify-center py-4 lg:py-0">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full border-2 border-brand/60 bg-ink flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                        </div>
                        <span className="font-mono text-[9px] text-white/20 tracking-widest uppercase">{step.weeks}</span>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="lg:w-[46%]" />
                  </div>
                ))}
              </div>

              {/* Bottom — AI Ready */}
              <div className="mt-10 flex justify-center">
                <div className="bg-brand/20 border border-brand/50 rounded-lg px-10 py-5 text-center">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-brand mb-2">End State</div>
                  <div className="font-serif text-2xl font-bold text-white">AI-Ready Enterprise</div>
                  <div className="font-mono text-xs text-white/40 mt-1">Production AI · Governed · Scalable · Auditable</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MATURITY MODEL */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <div className="section-eyebrow">Maturity Model</div>
          <h2 className="section-h2">Where does your organization sit?</h2>
          <p className="section-lead">Most enterprises we engage are between L1 and L2. The jump to L3 is where AI stops being a demo and starts being a product.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-16">
            {MATURITY_LEVELS.map((m, i) => (
              <div key={m.level} className={`border border-black/10 rounded-lg p-6 ${i === 1 ? 'bg-paper-warm' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs tracking-wider uppercase text-ink-faint">{m.level}</span>
                  <span className="font-mono text-xs text-ink-faint">{m.score}</span>
                </div>
                <div className="font-serif text-xl font-bold text-ink mb-2">{m.name}</div>
                <p className="text-sm text-ink-muted leading-relaxed">{m.desc}</p>
                <div className="mt-4 h-1 bg-black/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand"
                    style={{ width: `${(i + 1) * 25}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 23 Dimensions */}
          <div className="bg-ink rounded-xl p-10">
            <div className="font-mono text-[10px] tracking-widest uppercase text-brand mb-2">Assessment Scope</div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">23 Dimensions We Evaluate</h3>
            <p className="text-white/40 text-sm mb-8">Every readiness score is computed across these dimensions. No vanity metrics — each maps directly to an AI deployment risk.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[...DIMENSIONS, 'Data Observability Coverage', 'Real-time vs Batch Balance', 'Cross-domain Data Sharing', 'AI Model Registry Integration', 'Cost Attribution per Data Product', 'Incident Response & SLA Tracking'].map((d, i) => (
                <div key={d} className="flex items-center gap-3 py-2 border-b border-white/5">
                  <span className="font-mono text-[9px] text-white/20 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[12px] text-white/55 font-sans">{d}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="/contact" className="btn-primary">Get Your 23-Dimension Score →</a>
            </div>
          </div>
        </section>

        {/* DATA FLOW DIAGRAM */}
        <section className="bg-paper-warm border-t border-b border-black/10 py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div className="section-eyebrow">Architecture Pattern</div>
            <h2 className="section-h2">What AI-Ready Data looks like in production</h2>
            <p className="section-lead">The target-state architecture our clients operate after a full ladder engagement.</p>

            {/* Architecture flow */}
            <div className="bg-ink rounded-xl p-10 font-mono overflow-x-auto">
              <div className="min-w-[700px]">
                {/* Row 1 — Sources */}
                <div className="mb-2">
                  <div className="text-[9px] tracking-widest uppercase text-white/20 mb-3">Data Sources</div>
                  <div className="flex gap-3">
                    {['CRM', 'ERP', 'Events', 'Logs', 'Docs', 'APIs'].map((s) => (
                      <div key={s} className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-center text-[11px] text-white/50">{s}</div>
                    ))}
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center my-3 text-white/20 text-lg">↓</div>

                {/* Row 2 — Ingestion */}
                <div className="bg-brand/10 border border-brand/30 rounded-lg p-4 mb-3 text-center">
                  <div className="text-[9px] tracking-widest uppercase text-brand/60 mb-1">Ingestion & Integration Layer</div>
                  <div className="text-[12px] text-white/70">Airbyte · Kafka · Fivetran · Custom Connectors</div>
                </div>

                <div className="flex justify-center my-3 text-white/20 text-lg">↓</div>

                {/* Row 3 — Lakehouse */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 text-center">
                    <div className="text-[9px] uppercase tracking-widest text-gold/60 mb-1">Bronze Layer</div>
                    <div className="text-[11px] text-white/60">Raw · Immutable</div>
                  </div>
                  <div className="bg-gold/15 border border-gold/40 rounded-lg p-4 text-center">
                    <div className="text-[9px] uppercase tracking-widest text-gold/70 mb-1">Silver Layer</div>
                    <div className="text-[11px] text-white/60">Cleansed · Conformed</div>
                  </div>
                  <div className="bg-gold/20 border border-gold/50 rounded-lg p-4 text-center">
                    <div className="text-[9px] uppercase tracking-widest text-gold mb-1">Gold Layer</div>
                    <div className="text-[11px] text-white/70">Business-Ready · Governed</div>
                  </div>
                </div>

                <div className="flex justify-center my-3 text-white/20 text-lg">↓</div>

                {/* Row 4 — Semantic */}
                <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4 mb-3 text-center">
                  <div className="text-[9px] tracking-widest uppercase text-teal-400/60 mb-1">Semantic Layer — Single Source of Truth</div>
                  <div className="text-[12px] text-white/70">dbt Metrics · Unified Entities · Business Glossary · Data Contracts</div>
                </div>

                <div className="flex justify-center my-3 text-white/20 text-lg">↓</div>

                {/* Row 5 — AI Consumers */}
                <div className="mb-2">
                  <div className="text-[9px] tracking-widest uppercase text-white/20 mb-3">AI Consumers</div>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: 'RAG Pipeline', sub: 'Vector DB + Retrieval' },
                      { label: 'ML Models', sub: 'Feature Store + Training' },
                      { label: 'AI Agents', sub: 'Tool Calling + Memory' },
                      { label: 'BI & Analytics', sub: 'Natural Language Query' },
                    ].map((c) => (
                      <div key={c.label} className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-3 text-center">
                        <div className="text-[11px] text-purple-300/80 font-medium mb-1">{c.label}</div>
                        <div className="text-[10px] text-white/30">{c.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Governance overlay label */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-3 h-3 rounded-sm bg-red-500/40 border border-red-500/60" />
                  <span className="text-[10px] text-white/30">Governance · Lineage · Access Control · Observability — runs across all layers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20 text-center">
          <h2 className="font-serif text-4xl font-bold text-ink mb-4">Ready to climb the ladder?</h2>
          <p className="text-ink-muted text-lg mb-8 max-w-lg mx-auto">Start with a free 15-minute readiness assessment. No pitch, no vendor agenda — just a diagnostic.</p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="btn-primary">Book Free Assessment</a>
            <a href="/services" className="btn-ghost">View Engagement Models</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
