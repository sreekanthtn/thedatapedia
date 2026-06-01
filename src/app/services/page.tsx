import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — TheDatapedia',
  description: 'AI Readiness Assessment, Modern Data Architecture, and GenAI Accelerators. Fixed-fee, sprint-based engagements with clear deliverables.',
}

const SERVICES = [
  {
    id: 'assessment',
    tag: 'Engagement 01',
    icon: '◎',
    title: 'AI Readiness Assessment',
    tagline: 'Know exactly where you stand before you spend another dollar on AI.',
    duration: '2 Weeks',
    model: 'Fixed Fee',
    for: 'CDOs, VPs of Data, CTOs evaluating AI strategy',
    body: 'A structured diagnostic across 23 dimensions of your data infrastructure, governance posture, team capability, and AI feasibility. We interview stakeholders, audit your stack, and stress-test your data foundations against real AI use cases. Outputs a board-ready report with a prioritized roadmap and ROI estimates.',
    process: [
      { day: 'Day 1–3', step: 'Stakeholder Interviews', desc: 'CDO, Data Eng leads, Business owners — understand the AI vision vs ground truth' },
      { day: 'Day 4–7', step: 'Technical Audit', desc: 'Stack review, data quality sampling, governance posture, pipeline reliability' },
      { day: 'Day 8–10', step: 'Scoring & Analysis', desc: '23-dimension scoring, gap analysis, AI use case feasibility ranking' },
      { day: 'Day 11–14', step: 'Roadmap & Readout', desc: 'Prioritized roadmap, effort vs impact matrix, exec presentation' },
    ],
    deliverables: ['AI Readiness Score (23 dimensions)', 'Data Infrastructure Gap Report', 'AI Use Case Feasibility Matrix', 'Prioritized 90-day Roadmap', 'Exec-ready Presentation Deck'],
    color: 'border-brand/30',
    accent: 'text-brand',
  },
  {
    id: 'architecture',
    tag: 'Engagement 02',
    icon: '⬡',
    title: 'Modern Data Architecture',
    tagline: 'Design and build the data foundation that makes enterprise AI actually work.',
    duration: '8–16 Weeks',
    model: 'Sprint-based',
    for: 'Data Engineering teams, Platform leads, Architecture committees',
    body: 'From lakehouse design to data mesh implementation — we architect, prototype, and deliver production-grade data infrastructure optimized for AI workloads from day one. Technology-agnostic: Snowflake, Databricks, BigQuery, Delta Lake, Apache Iceberg — we pick what fits, not what we\'re partnered with.',
    process: [
      { day: 'Sprint 1', step: 'Current State & Target Architecture', desc: 'Document as-is, design to-be, validate with engineering team' },
      { day: 'Sprint 2–3', step: 'Core Infrastructure Build', desc: 'Lakehouse foundation, ingestion pipelines, medallion layers' },
      { day: 'Sprint 4–5', step: 'Semantic Layer & Data Products', desc: 'dbt models, metrics layer, first data products with SLAs' },
      { day: 'Sprint 6+', step: 'AI-Readiness Layer', desc: 'Feature store, embedding pipelines, RAG corpus preparation' },
    ],
    deliverables: ['Architecture Decision Records (ADRs)', 'Production Lakehouse / Data Platform', 'Semantic Layer (dbt)', 'Data Product Catalog', 'Runbooks & Tech Transfer'],
    color: 'border-gold/30',
    accent: 'text-gold',
  },
  {
    id: 'genai',
    tag: 'Engagement 03',
    icon: '◈',
    title: 'GenAI Accelerators',
    tagline: 'From governed data to working AI product in 4 weeks. No hallucinations, no excuses.',
    duration: '4–8 Weeks',
    model: 'Fixed Scope PoC',
    for: 'Product teams, Innovation leads, CEOs who want to see AI work',
    body: 'We build production-ready GenAI prototypes on your governed data — not on synthetic demos. RAG pipelines, enterprise copilots, AI agents, document intelligence, NL-to-SQL — each PoC is designed for handoff, not just a demo. Every accelerator includes full tech transfer so your team can own it post-engagement.',
    process: [
      { day: 'Week 1', step: 'Use Case Lock & Data Assessment', desc: 'Pick the highest-ROI use case, validate data readiness, define success metrics' },
      { day: 'Week 2', step: 'Architecture & Pipeline Build', desc: 'RAG pipeline / agent framework / fine-tuning setup on your infrastructure' },
      { day: 'Week 3', step: 'Prototype + Evaluation', desc: 'Working prototype, hallucination rate benchmarking, user testing' },
      { day: 'Week 4', step: 'Production Hardening + Handoff', desc: 'Guardrails, observability, cost optimization, full tech transfer' },
    ],
    deliverables: ['Working GenAI Prototype (production-grade)', 'Evaluation Framework & Benchmarks', 'Architecture Documentation', 'Full Source Code + Deployment Guide', 'Team Enablement Session'],
    color: 'border-purple-500/30',
    accent: 'text-purple-400',
  },
  {
    id: 'governance',
    tag: 'Engagement 04',
    icon: '◻',
    title: 'Data Governance for the AI Era',
    tagline: 'Governance that enables AI, not just checks compliance boxes.',
    duration: '6–10 Weeks',
    model: 'Modular Sprints',
    for: 'Chief Data Officers, Compliance, Risk, and Data Platform teams',
    body: 'Most governance programs are built to satisfy auditors, not power AI. We design governance frameworks that create trust in data — implementing data contracts, lineage tracking, access controls, and metadata management that make your AI outputs auditable and your data teams autonomous.',
    process: [
      { day: 'Sprint 1', step: 'Governance Audit & Policy Design', desc: 'Current state assessment, policy framework, RACI, data ownership model' },
      { day: 'Sprint 2', step: 'Data Contracts Implementation', desc: 'Schema contracts, SLA definitions, quality gates in pipelines' },
      { day: 'Sprint 3', step: 'Lineage & Metadata Layer', desc: 'End-to-end lineage, data catalog, business glossary' },
      { day: 'Sprint 4', step: 'Access Control & Compliance', desc: 'RBAC/ABAC implementation, audit trails, regulatory alignment' },
    ],
    deliverables: ['Data Governance Policy Framework', 'Implemented Data Contracts', 'Lineage Graph (column-level)', 'Data Catalog + Business Glossary', 'Compliance Readiness Report'],
    color: 'border-teal-500/30',
    accent: 'text-teal-400',
  },
]

const WHY_US = [
  { stat: 'Data-First', label: 'We fix the foundation before touching AI tooling. Every time.' },
  { stat: 'No Shelfware', label: 'Every engagement ships to production or we consider it incomplete.' },
  { stat: 'Tech-Agnostic', label: 'We are not partnered with any vendor. We pick what fits your context.' },
  { stat: 'Fixed Fees', label: 'Assessments and PoCs are fixed-fee. No billing surprises.' },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 pt-20 pb-16 border-b border-black/10">
          <div className="section-eyebrow">Engagement Models</div>
          <h1 className="font-serif text-5xl lg:text-6xl font-black tracking-tight leading-tight text-ink mb-6 max-w-3xl">
            No transformation theater.<br />Just outcomes.
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl leading-relaxed">
            Sprint-based engagements with fixed deliverables and measurable outcomes. We work in focused 2–16 week cycles — not 18-month programs that produce slide decks.
          </p>
        </section>

        {/* WHY US BAND */}
        <div className="border-b border-black/10 bg-paper-warm">
          <div className="max-w-7xl mx-auto px-8 lg:px-20 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {WHY_US.map((w) => (
              <div key={w.stat}>
                <div className="font-serif text-lg font-bold text-ink mb-1">{w.stat}</div>
                <div className="text-sm text-ink-muted leading-relaxed">{w.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20 space-y-24">
          {SERVICES.map((svc, i) => (
            <div key={svc.id} id={svc.id} className="scroll-mt-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                {/* Left — Description */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-3">{svc.tag}</div>
                  <div className={`text-3xl mb-3 ${svc.accent}`}>{svc.icon}</div>
                  <h2 className="font-serif text-3xl font-bold text-ink mb-3 leading-tight">{svc.title}</h2>
                  <p className={`font-serif text-lg italic mb-5 ${svc.accent}`}>{svc.tagline}</p>
                  <p className="text-base text-ink-muted leading-relaxed mb-6">{svc.body}</p>

                  <div className="flex gap-4 text-sm text-ink-faint font-mono mb-6">
                    <span className="border border-black/10 px-3 py-1.5 rounded-sm">{svc.duration}</span>
                    <span className="border border-black/10 px-3 py-1.5 rounded-sm">{svc.model}</span>
                  </div>

                  <div className="text-sm text-ink-faint mb-1 font-mono text-[10px] uppercase tracking-wider">Best for</div>
                  <p className="text-sm text-ink-muted mb-6">{svc.for}</p>

                  {/* Deliverables */}
                  <div className="bg-paper-warm border border-black/10 rounded-lg p-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">Deliverables</div>
                    <ul className="space-y-2">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-ink-muted">
                          <span className="text-brand mt-0.5 shrink-0">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a href="/contact" className="btn-primary">Start This Engagement →</a>
                  </div>
                </div>

                {/* Right — Process Timeline */}
                <div className={`bg-ink rounded-xl p-8 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-6">// Engagement Process</div>
                  <div className="relative">
                    <div className="absolute left-[72px] top-0 bottom-0 w-px bg-white/5" />
                    <div className="space-y-0">
                      {svc.process.map((p, pi) => (
                        <div key={p.step} className="flex gap-5 pb-8 last:pb-0">
                          <div className="shrink-0 text-right w-16">
                            <span className="font-mono text-[9px] text-white/25 tracking-wider whitespace-nowrap">{p.day}</span>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border border-brand/50 bg-ink flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand/60" />
                            </div>
                            <div className="font-sans text-sm font-medium text-white mb-1">{p.step}</div>
                            <div className="text-[12px] text-white/40 leading-relaxed">{p.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
              {i < SERVICES.length - 1 && <div className="border-b border-black/10 mt-24" />}
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-ink py-20 px-8 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="font-mono text-xs tracking-widest uppercase text-gold mb-4">Not Sure Where to Start?</div>
            <h2 className="font-serif text-4xl font-bold text-white mb-5 leading-tight">
              Start with the Assessment.<br />Everything else follows.
            </h2>
            <p className="text-white/50 text-base mb-10 leading-relaxed">
              90% of our architecture and GenAI engagements begin with a Readiness Assessment. It aligns stakeholders, surfaces real blockers, and makes the roadmap obvious.
            </p>
            <a href="/contact" className="btn-primary">Book a Free 30-min Discovery Call →</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
