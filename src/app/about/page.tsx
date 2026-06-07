import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — TheDatapedia',
  description: 'TheDatapedia is a Data & AI consulting practice founded by a practitioner — not a management consulting firm. Real architecture, real code, real outcomes.',
}

const PRINCIPLES = [
  {
    num: '01',
    title: 'Data before AI. Always.',
    body: 'No engagement starts with model selection. Every engagement starts with data quality, governance, and architecture. The model is the last 10% of the problem.',
  },
  {
    num: '02',
    title: 'Ship, don\'t deck.',
    body: 'Our measure of success is working software in production — not a PowerPoint roadmap on a shelf. Every engagement has code, architecture, or a functioning system as its primary output.',
  },
  {
    num: '03',
    title: 'Technology-agnostic, outcome-obsessed.',
    body: 'We have no vendor partnerships that influence our recommendations. Snowflake, Databricks, BigQuery, Redshift — we pick what solves the problem, not what earns a referral fee.',
  },
  {
    num: '04',
    title: 'Transfer knowledge, not dependency.',
    body: 'Every engagement includes full tech transfer. The goal is a client team that owns their architecture independently — not a client that needs us for every change request.',
  },
]

const EXPERTISE = [
  { area: 'Data Architecture', items: ['Lakehouse design', 'Data mesh implementation', 'Medallion architecture', 'Apache Iceberg', 'Delta Lake'] },
  { area: 'Modern Data Stack', items: ['dbt (Core & Cloud)', 'Airflow / Prefect', 'Airbyte / Fivetran', 'Great Expectations', 'Monte Carlo'] },
  { area: 'Cloud Platforms', items: ['Snowflake', 'Databricks', 'Google BigQuery', 'AWS Redshift', 'Azure Synapse'] },
  { area: 'GenAI & ML', items: ['RAG pipelines', 'LangChain / LlamaIndex', 'Feature stores', 'MLflow', 'Vertex AI / Bedrock'] },
  { area: 'Governance & Quality', items: ['Data contracts', 'Column-level lineage', 'Data catalogs', 'RBAC/ABAC', 'Data observability'] },
  { area: 'Industries', items: ['Financial Services', 'Healthcare & Life Sciences', 'Retail & E-commerce', 'Manufacturing', 'IT Services'] },
]

const TIMELINE = [
  { year: '2024', event: 'Founded TheDatapedia', detail: 'Started as a POV blog. First 3 advisory clients within 90 days.' },
  { year: '2024', event: 'First GenAI Accelerator delivered', detail: 'RAG pipeline for a financial services firm. 80% hallucination reduction vs baseline.' },
  { year: '2025', event: 'AI Readiness Framework published', detail: '23-dimension framework adopted by 40+ enterprises for self-assessment.' },
  { year: '2025', event: 'Data Architecture practice launched', detail: 'Full lakehouse and data mesh engagements. First Databricks + dbt implementation.' },
  { year: '2026', event: 'thedatapedia.com relaunched', detail: 'Full consulting platform with daily AI intelligence feed and lead generation.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-black/10">
          <div>
            <div className="section-eyebrow">About TheDatapedia</div>
            <h1 className="font-serif text-5xl font-black tracking-tight text-ink mb-6 leading-tight">
              Built by a practitioner.<br />
              <span className="text-brand">Not a consulting firm.</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-6">
              TheDatapedia was founded on a simple observation: most enterprise AI failures are data failures in disguise. The market was full of AI strategy consultants who had never built a data pipeline and data engineers who had never thought about AI.
            </p>
            <p className="text-base text-ink-muted leading-relaxed mb-8">
              We exist in the gap — practitioners who understand data architecture deeply, speak the language of AI engineering, and can translate both into business outcomes that CFOs and CDOs care about.
            </p>
            <a href="/contact" className="btn-primary">Work With Us →</a>
          </div>

          {/* Profile card */}
          <div className="bg-ink rounded-xl p-10 font-mono flex flex-col justify-between">
            <div>
              <div className="text-[10px] tracking-widest uppercase text-white/25 mb-6">// Founder Profile</div>
              <div className="w-16 h-16 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center mb-6">
                <span className="font-serif text-2xl font-bold text-brand">TC</span>
              </div>
              <div className="font-sans text-xl font-semibold text-white mb-1">The Curator</div>
              <div className="text-[12px] text-white/40 mb-6">Data & AI Architect · Consultant · Educator</div>
              <div className="space-y-3 text-[12px]">
                {[
                  'Data & AI Practice Lead — IT Services Organization',
                  'Solution Architecture for Data, AI & GenAI platforms',
                  'PoC & Accelerator development for enterprise clients',
                  'Training & enablement for Data & AI teams',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-white/50">
                    <span className="text-brand mt-0.5 shrink-0">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
              <a href="https://linkedin.com" className="text-[11px] text-brand hover:text-brand/70 transition-colors no-underline uppercase tracking-widest">LinkedIn →</a>
              <a href="/contact" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline uppercase tracking-widest">Contact →</a>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="bg-paper-warm border-b border-black/10 py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div className="section-eyebrow">How We Work</div>
            <h2 className="section-h2">Four non-negotiable principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-xl overflow-hidden">
              {PRINCIPLES.map((p) => (
                <div key={p.num} className="bg-paper-warm p-8">
                  <div className="font-serif text-4xl font-black text-brand/20 mb-4">{p.num}</div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3">{p.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20 border-b border-black/10">
          <div className="section-eyebrow">Technical Depth</div>
          <h2 className="section-h2">Stack & expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {EXPERTISE.map((ex) => (
              <div key={ex.area} className="border border-black/10 rounded-lg p-6 bg-white">
                <div className="font-mono text-[10px] tracking-widest uppercase text-brand mb-4">{ex.area}</div>
                <ul className="space-y-1.5">
                  {ex.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-black/20 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="bg-ink py-20 px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="font-mono text-xs tracking-widest uppercase text-brand mb-3">Journey</div>
            <h2 className="font-serif text-3xl font-bold text-white mb-12">How TheDatapedia was built</h2>
            <div className="relative">
              <div className="absolute left-12 top-0 bottom-0 w-px bg-white/5" />
              <div className="space-y-0">
                {TIMELINE.map((t) => (
                  <div key={t.event + t.year} className="flex gap-8 pb-10 last:pb-0">
                    <div className="shrink-0 w-20 text-right">
                      <span className="font-mono text-xs text-white/25">{t.year}</span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full border border-brand/50 bg-ink flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand/60" />
                      </div>
                      <div className="font-sans text-base font-semibold text-white mb-1">{t.event}</div>
                      <div className="text-sm text-white/40 leading-relaxed">{t.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20 text-center">
          <h2 className="font-serif text-4xl font-bold text-ink mb-4">Ready to build something real?</h2>
          <p className="text-ink-muted text-lg max-w-md mx-auto mb-8">
            No sales team. No account managers. You talk directly to the practitioner who will do the work.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="btn-primary">Start a Conversation →</a>
            <a href="/framework" className="btn-ghost">Read Our Framework</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
