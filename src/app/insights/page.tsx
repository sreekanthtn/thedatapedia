import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights — TheDatapedia',
  description: 'Practitioner POVs, frameworks, and case studies on AI-Ready Data. No vendor whitepapers — real patterns from real engagements.',
}

const FEATURED = {
  tag:'Featured POV',
  title:'Why Your Semantic Layer is the Most Important Investment Before Your First LLM',
  body:'Every enterprise racing toward GPT-4 wrappers is missing the foundational point. The bottleneck is never the model — it is the absence of a shared business vocabulary that both humans and machines can trust. At its core, a large language model is a statistical reasoning engine. Feed it ambiguous, inconsistently named, semantically disconnected data and it reasons beautifully — about the wrong thing.',
  insight:'The enterprises winning at GenAI in 2026 are not the ones with the best models. They are the ones that built their semantic layer 18 months ago and are now compounding on that foundation.',
  keyPoints:[
    'LLMs hallucinate in proportion to semantic ambiguity — not model size or prompt quality',
    'A unified metrics layer (dbt Semantic Layer or similar) reduces NL-to-SQL error rates by 60–80%',
    'Canonical entity model is prerequisite: one Customer, one Product, not 12 versions across systems',
    'The semantic layer becomes the AI\'s tool registry — the structured knowledge it can reliably query',
    'Teams that skip this step rebuild it after their first production AI failure — at 3× the cost',
  ],
  readTime:'8 min read',
  category:'Data Architecture',
  date:'May 2026',
}

const CASE_STUDIES = [
  {
    tag:'Case Study',
    industry:'Financial Services',
    title:'From Data Swamp to RAG-Ready in 12 Weeks',
    problem:'A mid-market wealth management firm had invested $2M in an AI-powered client advisor tool. Six months after launch, hallucination rates were at 34% on factual queries about client portfolios. The model was GPT-4. The problem was not the model.',
    diagnosis:'Our SIGNAL assessment revealed: Governance score 18/100. No column-level lineage. Metadata coverage under 12%. Three conflicting definitions of "client AUM" across four source systems. The RAG pipeline was retrieving semantically incorrect documents because the underlying data had no shared meaning.',
    solution:'12-week engagement: Weeks 1–3 data inventory and SIGNAL scoring. Weeks 4–7 unified entity model and metadata layer. Weeks 8–10 data contracts and lineage. Weeks 11–12 RAG pipeline rebuild on governed data corpus.',
    results:[
      {metric:'Hallucination rate',before:'34%',after:'6%',delta:'-83%'},
      {metric:'Query accuracy on portfolio data',before:'51%',after:'94%',delta:'+84%'},
      {metric:'Time to answer regulatory audit queries',before:'3 days',after:'4 hours',delta:'-94%'},
    ],
    quote:'We spent six months blaming the model. Turns out the model was fine. Our data was not.',
    readTime:'6 min',
    date:'Apr 2026',
  },
  {
    tag:'Case Study',
    industry:'Healthcare & Life Sciences',
    title:'Unstructured Data Governance for Clinical AI',
    problem:'A regional hospital network was building an AI-assisted clinical documentation system. The model performed excellently on benchmark datasets. In production, it generated clinically incorrect summaries 22% of the time — not because of model failure, but because unstructured clinical notes had never been governed.',
    diagnosis:'Clinical notes, radiology reports, and discharge summaries existed in 7 different formats across 4 EMR systems. No PII classification. No concept normalization (ICD-10 codes used inconsistently). No lineage between the training corpus and the source documents — making retraining on failure cases impossible.',
    solution:'Implemented AI-era governance for unstructured data: automated PII detection and redaction pipeline, clinical concept normalization layer mapped to ICD-10/SNOMED, column-level lineage from source EMR to training corpus to model output, and data contracts between the clinical data team and the AI engineering team.',
    results:[
      {metric:'Clinical documentation error rate',before:'22%',after:'3.8%',delta:'-83%'},
      {metric:'Regulatory compliance readiness',before:'Not auditable',after:'Full audit trail',delta:'✓'},
      {metric:'Model retraining cycle time',before:'6 weeks',after:'4 days',delta:'-95%'},
    ],
    quote:'We could not explain why the model was wrong. After implementing lineage, every error was traceable to a specific data quality issue in 3 minutes.',
    readTime:'7 min',
    date:'Mar 2026',
  },
]

const POVS = [
  {
    tag:'Framework',
    title:'The Data Contract Manifesto for the GenAI Era',
    body:'Data contracts are not a technical nicety. They are load-bearing walls for AI reliability. A data contract is a formal, versioned agreement between a data producer and a data consumer that specifies: schema, quality thresholds, freshness SLA, ownership, and breaking change policy. In the GenAI era, every RAG corpus, every feature store, every training dataset needs one.',
    keyInsight:'Without data contracts, your AI quality degrades silently. A schema change in an upstream system propagates downstream into your RAG index, your model outputs start drifting, and you have no audit trail to diagnose why.',
    framework:[
      'Schema contract — field names, types, nullable constraints, enumerated values',
      'Quality contract — completeness %, uniqueness, freshness window, anomaly tolerance',
      'SLA contract — update frequency, latency guarantees, incident response SLA',
      'Change contract — deprecation notice period, breaking vs non-breaking change policy',
    ],
    readTime:'6 min',
    category:'Governance',
    date:'May 2026',
  },
  {
    tag:'POV',
    title:'The Modern Data Stack is Dead. Long Live the AI Data Stack.',
    body:'The Modern Data Stack thesis — Ingest → Transform → Serve — was correct for the analytics era. It assumed the consumer of data was a human analyst running SQL. GenAI changes the consumer to an LLM that reasons in natural language, retrieves by semantic similarity, and fails silently when context is ambiguous. The MDS needs a new layer: Govern → Semanticize → Productize.',
    keyInsight:'The four tools that define the AI Data Stack in 2026: dbt (semantic layer), a vector database (retrieval), a data catalog with lineage (governance), and a data contract framework (trust). Everything else is plumbing.',
    framework:[
      'Replace batch-first with context-first — AI needs freshness windows, not snapshots',
      'Add semantic layer between transform and serve — LLMs query meaning, not columns',
      'Govern unstructured data with the same rigor as structured — it feeds your RAG',
      'Productize data before exposing to AI — APIs, not direct table access',
    ],
    readTime:'7 min',
    category:'Architecture',
    date:'Apr 2026',
  },
  {
    tag:'POV',
    title:'Stop Buying AI Tools. Start Buying Data Credibility.',
    body:'The enterprise AI tool market hit $47B in 2025. Most of that spend will produce no lasting value. The diagnostic question every CDO should ask before the next AI procurement: "Do we have a semantic layer?" If the answer is no, the tool budget is premature. You are buying a racing car before building a road.',
    keyInsight:'The organizations compounding on AI in 2026 are not the ones who moved fastest. They are the ones who invested in data credibility — governance, lineage, semantic clarity — while their competitors were buying AI tools.',
    framework:[
      'Audit: can your AI outputs be traced to source data? If not, stop and build lineage.',
      'Audit: do you have one authoritative definition of Customer, Product, Revenue? If not, build it.',
      'Audit: do your data pipelines have quality SLAs? If not, your AI has no trust foundation.',
      'Only after those three: evaluate AI tools for your specific use case.',
    ],
    readTime:'4 min',
    category:'Strategy',
    date:'Mar 2026',
  },
]

const BENCHMARKS = [
  {metric:'Orgs where AI is blocked by data, not model capability',value:'73%',source:'Gartner 2026'},
  {metric:'CDOs who have not adapted data strategy for GenAI',value:'57%',source:'AWS CDO Study 2025'},
  {metric:'Faster AI deployment with mature data product teams',value:'2.8×',source:'McKinsey 2025'},
  {metric:'Reduction in hallucinations with proper semantic layer',value:'60–80%',source:'TheDatapedia 2026'},
  {metric:'Enterprise orgs that have scaled AI to production',value:'7%',source:'McKinsey 2025'},
  {metric:'Orgs where unstructured data governance is mature',value:'< 11%',source:'Gartner 2026'},
]

const TAG_COLORS: Record<string,string> = {
  'Featured POV':'text-purple-600 bg-purple-500/8 border-purple-500/20',
  'Case Study':'text-teal-600 bg-teal-500/8 border-teal-500/20',
  'Framework':'text-brand bg-brand/8 border-brand/20',
  'POV':'text-yellow-600 bg-yellow-500/8 border-yellow-500/20',
}

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
            POVs, frameworks, and case studies written by practitioners who have shipped Data and AI in production — not consultants who have only sold it.
          </p>
        </section>

        {/* FEATURED */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-16 border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className={`inline-block text-xs font-mono uppercase tracking-wider border px-2.5 py-1 rounded-sm mb-5 ${TAG_COLORS[FEATURED.tag]}`}>{FEATURED.tag}</span>
              <h2 className="font-serif text-3xl font-bold text-ink leading-tight mb-5">{FEATURED.title}</h2>
              <p className="text-base text-ink-muted leading-relaxed mb-5">{FEATURED.body}</p>
              <div className="bg-paper-warm border-l-2 border-brand px-5 py-4 mb-6">
                <p className="text-sm text-ink-muted italic leading-relaxed">{FEATURED.insight}</p>
              </div>
              <div className="space-y-3 mb-8">
                {FEATURED.keyPoints.map((kp) => (
                  <div key={kp} className="flex items-start gap-3">
                    <span className="text-brand shrink-0 mt-1 font-mono">→</span>
                    <span className="text-sm text-ink-muted leading-relaxed">{kp}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-5">
                <a href="/contact" className="btn-primary">Discuss This With The Curator →</a>
                <span className="font-mono text-xs text-ink-faint">{FEATURED.readTime} · {FEATURED.date}</span>
              </div>
            </div>

            {/* Semantic layer visual */}
            <div className="bg-ink rounded-xl p-8 font-mono">
              <div className="text-[9px] tracking-widest uppercase text-white/25 mb-6">// What happens without a semantic layer</div>
              <div className="space-y-4 mb-6">
                {[
                  {q:'What is our customer churn rate?', issue:'3 different "churn" definitions', severity:'high'},
                  {q:'Show Q3 revenue by region', issue:'Revenue field exists in 5 tables, all different', severity:'high'},
                  {q:'Which products are at-risk?', issue:'No canonical product entity', severity:'med'},
                  {q:'Summarize top client portfolios', issue:'AUM computed differently per system', severity:'high'},
                ].map((item) => (
                  <div key={item.q} className="border border-white/8 rounded-lg p-3">
                    <div className="text-[11px] text-white/60 mb-2 font-sans">"{item.q}"</div>
                    <div className={`inline-block text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm ${item.severity==='high'?'bg-red-900/40 text-red-400 border border-red-500/20':'bg-yellow-900/30 text-yellow-500 border border-yellow-500/20'}`}>
                      ⚠ {item.issue}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/5 pt-4 text-center">
                <div className="text-[10px] text-white/20 mb-2 uppercase tracking-widest">Result</div>
                <div className="text-[12px] text-red-400 font-sans">Confident, wrong answers at scale</div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="bg-paper-warm border-b border-black/10 py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div className="section-eyebrow">Case Studies</div>
            <h2 className="section-h2">Engagements with measurable outcomes</h2>
            <p className="section-lead">Not anonymized composites — real engagement patterns with real numbers. Company names are withheld by agreement.</p>
            <div className="space-y-12">
              {CASE_STUDIES.map((cs) => (
                <div key={cs.title} className="bg-white border border-black/10 rounded-xl overflow-hidden">
                  <div className="p-8 border-b border-black/8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-mono uppercase tracking-wider border px-2.5 py-1 rounded-sm ${TAG_COLORS[cs.tag]}`}>{cs.tag}</span>
                      <span className="font-mono text-xs text-ink-faint uppercase tracking-wider">{cs.industry}</span>
                      <span className="font-mono text-xs text-ink-faint ml-auto">{cs.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ink mb-5 leading-tight">{cs.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-ink-faint mb-2">The Problem</div>
                        <p className="text-sm text-ink-muted leading-relaxed">{cs.problem}</p>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-ink-faint mb-2">The Diagnosis</div>
                        <p className="text-sm text-ink-muted leading-relaxed">{cs.diagnosis}</p>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-ink-faint mb-2">The Engagement</div>
                        <p className="text-sm text-ink-muted leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-ink">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-white/25 mb-5">// Results</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {cs.results.map((r) => (
                        <div key={r.metric} className="border border-white/8 rounded-lg p-4">
                          <div className="font-mono text-[9px] text-white/30 uppercase tracking-wider mb-3">{r.metric}</div>
                          <div className="flex items-baseline gap-3">
                            <span className="text-sm text-white/30 line-through">{r.before}</span>
                            <span className="text-xl font-serif font-bold text-white">{r.after}</span>
                          </div>
                          <div className="font-mono text-[10px] text-green-400 mt-1">{r.delta}</div>
                        </div>
                      ))}
                    </div>
                    <div className="border-l-2 border-brand/40 pl-4">
                      <p className="text-sm text-white/40 italic">"{cs.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POVs */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20 border-b border-black/10">
          <div className="section-eyebrow">Points of View</div>
          <h2 className="section-h2">Practitioner positions on contested questions</h2>
          <p className="section-lead">Not balanced takes. Actual positions, backed by field evidence. Agree or disagree — these are the conversations worth having.</p>
          <div className="space-y-8">
            {POVS.map((pov) => (
              <div key={pov.title} className="border border-black/10 rounded-xl p-8 bg-white hover:bg-paper-warm transition-colors">
                <div className="flex items-start justify-between gap-6 mb-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-mono uppercase tracking-wider border px-2.5 py-1 rounded-sm ${TAG_COLORS[pov.tag]}`}>{pov.tag}</span>
                      <span className="font-mono text-xs text-ink-faint">{pov.category} · {pov.date} · {pov.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ink leading-tight">{pov.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">{pov.body}</p>
                <div className="bg-paper-warm border-l-2 border-brand px-5 py-3 mb-5">
                  <p className="text-sm font-medium text-ink leading-relaxed">Key insight: {pov.keyInsight}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {pov.framework.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink-muted">
                      <span className="text-brand font-mono shrink-0 mt-0.5">0{i+1}</span>
                      <span className="leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENCHMARKS */}
        <section className="bg-ink py-20 px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs tracking-widest uppercase text-brand mb-3">Industry Benchmarks</div>
            <h2 className="font-serif text-3xl font-bold text-white mb-12 max-w-xl leading-tight">
              The numbers every CDO should have memorized
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
            One email, every Friday. The 3 most important developments in Data and AI that week — with practitioner commentary, not press release summaries.
          </p>
          <div className="flex gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Work email" className="flex-1 bg-paper-warm border border-black/15 text-ink font-sans text-sm px-5 py-3.5 rounded focus:outline-none focus:border-brand/40 placeholder:text-ink-faint" />
            <button className="btn-primary whitespace-nowrap">Subscribe →</button>
          </div>
          <p className="font-mono text-[10px] text-ink-faint mt-4 uppercase tracking-wider">No spam · Unsubscribe anytime</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
