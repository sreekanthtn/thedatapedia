import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The SIGNAL Framework™ & AI-Ready Data Ladder™ — TheDatapedia',
  description: 'Two proprietary frameworks for enterprise AI-Ready Data: the SIGNAL Framework and the AI-Ready Data Ladder.',
}

const SIGNAL = [
  { letter:'S', word:'Semantic', title:'Semantic Layer', body:'LLMs hallucinate in direct proportion to semantic ambiguity in your data. A mature semantic layer defines canonical business entities — Customer, Product, Revenue — and surfaces them as queryable meaning, not raw column names. The single highest-ROI investment before any GenAI deployment.', metric:'60–80% reduction in hallucinations', color:'border-brand/30 bg-brand/5', dot:'bg-brand' },
  { letter:'I', word:'Integrity', title:'Data Integrity', body:'AI outputs inherit data quality. Integrity is not about perfect data — it is about known quality, explicitly communicated via data contracts. Every data product must carry a quality SLA: completeness %, freshness guarantees, and schema stability commitments AI consumers can rely on.', metric:'73% of AI projects fail due to data quality', color:'border-yellow-500/30 bg-yellow-500/5', dot:'bg-yellow-500' },
  { letter:'G', word:'Governance', title:'AI-Era Governance', body:'Governance must satisfy regulators AND enable AI agents to access exactly the context they need — nothing more. The EU AI Act, FINRA, and HIPAA now require column-level lineage and explainability for AI outputs. Most governance programs are built for auditors, not AI systems.', metric:'EU AI Act enforcement: Q3 2026', color:'border-teal-500/30 bg-teal-500/5', dot:'bg-teal-500' },
  { letter:'N', word:'Nodes', title:'Data Products', body:'Data nodes are governed data products with an owner, SLA, schema contract, and documented consumers. Domain teams own their products; AI applications consume them via stable APIs — not by querying raw warehouse tables. The data mesh principle applied to AI infrastructure.', metric:'2.8× faster AI deployment with data products', color:'border-purple-500/30 bg-purple-500/5', dot:'bg-purple-400' },
  { letter:'A', word:'Agentic', title:'Agentic Readiness', body:'Agentic AI systems need real-time context, knowledge graph reasoning, tool-callable data APIs, and memory systems. Less than 8% of enterprises have a data stack designed for autonomous AI agents. This is the capability gap defining competitive advantage through 2028.', metric:'Less than 8% of enterprises are agentic-ready', color:'border-red-500/30 bg-red-500/5', dot:'bg-red-400' },
  { letter:'L', word:'Lineage', title:'AI Audit Trail', body:'Lineage is how you prove your AI is trustworthy, debug hallucinations, and satisfy regulators. Column-level lineage traces every AI output back to its source rows and transformations. Less than 15% of enterprises have this. It is simultaneously a compliance risk and a competitive opportunity.', metric:'70% faster AI error debugging with lineage', color:'border-teal-400/30 bg-teal-400/5', dot:'bg-teal-400' },
]

const LADDER = [
  { num:'01', phase:'Diagnose', weeks:'2–3 wks', title:'Data Inventory & AI Utility Mapping', what:'Catalog every data asset. Classify by AI utility — RAG corpus, training data, real-time inference context, evaluation ground truth. Score current quality and accessibility against the SIGNAL framework.', why:'You cannot roadmap what you have not mapped. Most organizations discover 40% of their data assets are duplicated, ungoverned, or inaccessible to AI workloads during this phase.', deliverables:['AI Utility Heatmap','SIGNAL Score','Blocker Report','Priority Matrix'] },
  { num:'02', phase:'Unify', weeks:'4–6 wks', title:'Semantic Layer & Unified Data Model', what:'Build the semantic layer — the shared business vocabulary that both humans and AI query against. Define canonical entities. Implement the metrics layer. Resolve entity conflicts across source systems.', why:'LLMs operating without a semantic layer answer questions about your data the way a tourist answers questions about your city — technically possible, frequently wrong, always context-free.', deliverables:['Semantic Model','dbt Metrics Layer','Entity Definitions','Business Glossary'] },
  { num:'03', phase:'Govern', weeks:'4–8 wks', title:'Data Contracts, Lineage & Access Controls', what:'Implement data contracts between producer and consumer teams. Deploy column-level lineage. Enforce attribute-level access governance for AI agents. Establish audit trails for AI outputs.', why:'AI outputs are only as trustworthy as their inputs. Without lineage you cannot audit why your model said what it said — a critical requirement under EU AI Act Article 13.', deliverables:['Data Contracts','Column Lineage Graph','ABAC Policy','Audit Trail'] },
  { num:'04', phase:'Productize', weeks:'6–12 wks', title:'Data Products, Feature Store & AI Asset Layer', what:'Package governed data as reusable data products with SLAs. Build feature stores for ML. Create embedding pipelines and RAG-ready corpora. Implement knowledge graphs for agentic AI.', why:'Build once, power many AI applications. Teams with mature data product cultures deploy AI features 2.8× faster than those treating each AI use case as a one-off data engineering project.', deliverables:['Data Product Catalog','Feature Store','Embedding Pipelines','Vector Index','Knowledge Graph'] },
]

const MATURITY = [
  { level:'L1', name:'Fragmented', score:'0–25', width:'25%', color:'#e85555', desc:'Siloed systems, manual ETL, no unified model. AI projects die in dev or demo.' },
  { level:'L2', name:'Centralized', score:'26–50', width:'50%', color:'#c8a84b', desc:'Central warehouse exists. Basic governance. First ML models reach prod. Semantic gaps persist.' },
  { level:'L3', name:'Semantic', score:'51–75', width:'75%', color:'#5555ff', desc:'Unified semantic layer. Data contracts. Lineage tracked. GenAI apps reach production reliably.' },
  { level:'L4', name:'Agentic', score:'76–100', width:'97%', color:'#22a06b', desc:'Data products with SLAs. Knowledge graphs. Feature stores. AI agents operate autonomously.' },
]

export default function FrameworkPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 pt-20 pb-16 border-b border-black/10">
          <div className="section-eyebrow">Proprietary Frameworks</div>
          <h1 className="font-serif text-5xl lg:text-6xl font-black tracking-tight leading-tight text-ink mb-6 max-w-3xl">
            Two frameworks.<br />One AI-Ready<br /><span className="text-brand">Data Strategy.</span>
          </h1>
          <p className="text-xl text-ink-muted max-w-2xl leading-relaxed mb-10">
            The SIGNAL Framework™ diagnoses your data readiness across six dimensions. The AI-Ready Data Ladder™ sequences the investments to close the gaps. Built from patterns across 50+ enterprise engagements.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/contact" className="btn-primary">Get Your SIGNAL Score →</a>
            <a href="/services" className="btn-ghost">See Engagement Models</a>
          </div>
        </section>

        {/* SIGNAL */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20 border-b border-black/10">
          <div className="section-eyebrow">Framework 01</div>
          <h2 className="section-h2">The SIGNAL Framework™</h2>
          <p className="section-lead">Six dimensions that collectively determine whether your data infrastructure can power enterprise AI — or just another failed proof of concept.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {SIGNAL.map((s) => (
              <div key={s.letter} className={`border rounded-xl p-8 ${s.color}`}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-serif text-5xl font-black text-ink/15">{s.letter}</span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-0.5">{s.word}</div>
                    <h3 className="font-sans text-base font-semibold text-ink">{s.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">{s.body}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
                  <span className="font-mono text-[10px] text-ink-faint tracking-wider">{s.metric}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Maturity scores */}
          <div className="bg-ink rounded-xl p-10">
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-8">// SIGNAL Score Benchmarks by Maturity Stage</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {MATURITY.map((m) => (
                <div key={m.level}>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-wider">{m.level} · {m.name}</span>
                    <span className="font-mono text-[10px] text-white/20">{m.score}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-3">
                    <div className="h-full rounded-full" style={{width:m.width,background:m.color}} />
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-wider">S=Semantic · I=Integrity · G=Governance · N=Nodes · A=Agentic · L=Lineage</span>
              <a href="/contact" className="font-mono text-[10px] text-brand uppercase tracking-wider no-underline hover:text-brand/70">Get Your Score →</a>
            </div>
          </div>
        </section>

        {/* LADDER */}
        <section className="bg-ink py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div className="font-mono text-xs tracking-widest uppercase text-brand mb-3">Framework 02</div>
            <h2 className="font-serif text-4xl font-bold text-white mb-5 tracking-tight">The AI-Ready Data Ladder™</h2>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-16">The sequence matters. Organizations that skip rungs spend 18 months rebuilding the foundation while their AI demos gather dust. This is the order that compounds.</p>
            <div className="space-y-4">
              {LADDER.map((step, i) => (
                <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 p-8 rounded-xl border ${i===3?'border-brand/30 bg-brand/5':'border-white/6 bg-white/2'}`}>
                  <div>
                    <span className="font-serif text-4xl font-black text-white/10 leading-none block">{step.num}</span>
                    <span className="font-mono text-[9px] text-white/20 uppercase tracking-wider mt-2 block">{step.phase}</span>
                    <span className="font-mono text-[9px] text-brand/60 mt-1 block">{step.weeks}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-4 leading-tight">{step.title}</h3>
                    <div className="mb-3">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-white/25 mb-2">What we do</div>
                      <p className="text-[13px] text-white/55 leading-relaxed">{step.what}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-white/25 mb-2">Why it matters</div>
                      <p className="text-[13px] text-white/40 leading-relaxed">{step.why}</p>
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-white/25 mb-4">Deliverables</div>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d) => (
                        <span key={d} className="font-mono text-[9px] uppercase tracking-wider text-white/35 border border-white/10 px-2.5 py-1.5 rounded-sm">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20 border-b border-black/10">
          <div className="section-eyebrow">Reference Architecture</div>
          <h2 className="section-h2">AI-Ready Data Stack — Target State</h2>
          <p className="section-lead">The production architecture pattern that emerges after a full SIGNAL + Ladder engagement.</p>
          <div className="bg-ink rounded-xl p-10 font-mono overflow-x-auto">
            <div className="min-w-[600px] space-y-3">
              <div>
                <div className="text-[9px] tracking-widest uppercase text-white/20 mb-2">// Data Sources</div>
                <div className="flex gap-2">
                  {['CRM / ERP','Event Streams','Documents','External APIs','IoT / Sensors'].map((s)=>(
                    <div key={s} className="flex-1 bg-white/4 border border-white/8 rounded px-3 py-2 text-center text-[10px] text-white/40">{s}</div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center text-white/15 text-sm">↓ Airbyte · Kafka · Fivetran · Custom Connectors</div>
              <div className="grid grid-cols-3 gap-2">
                {[{name:'Bronze',sub:'Raw · Immutable',c:'bg-white/3 border-white/8'},{name:'Silver',sub:'Cleansed · Conformed',c:'bg-yellow-900/20 border-yellow-500/20'},{name:'Gold',sub:'Business-Ready',c:'bg-yellow-800/25 border-yellow-500/35'}].map((l)=>(
                  <div key={l.name} className={`${l.c} border rounded-lg p-4 text-center`}>
                    <div className="text-[9px] uppercase tracking-widest text-white/30 mb-1">{l.name} Layer</div>
                    <div className="text-[11px] text-white/55">{l.sub}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center text-white/15 text-sm">↓ dbt transformations · Great Expectations quality gates</div>
              <div className="bg-brand/15 border-2 border-brand/40 rounded-lg p-5 text-center">
                <div className="text-[9px] tracking-widest uppercase text-brand/70 mb-2">// Semantic Layer — SIGNAL S-Dimension</div>
                <div className="text-[13px] text-white/80">Unified Entity Model · dbt Metrics · Business Glossary · Data Contracts · Lineage Graph</div>
              </div>
              <div className="flex justify-center text-white/15 text-sm">↓ Governed access · ABAC enforcement · Audit trail</div>
              <div>
                <div className="text-[9px] tracking-widest uppercase text-white/20 mb-2">// AI Consumer Layer</div>
                <div className="grid grid-cols-4 gap-2">
                  {[{label:'RAG Pipeline',sub:'Vector DB + Hybrid Retrieval'},{label:'ML Platform',sub:'Feature Store + Training'},{label:'AI Agents',sub:'Tools + Memory + Planning'},{label:'NL Analytics',sub:'Semantic Layer → LLM'}].map((c)=>(
                    <div key={c.label} className="bg-purple-900/20 border border-purple-500/25 rounded-lg p-3 text-center">
                      <div className="text-[11px] text-purple-300/70 font-medium mb-1">{c.label}</div>
                      <div className="text-[10px] text-white/25">{c.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                {['Lineage','Governance','Observability','Access Control'].map((g)=>(
                  <span key={g} className="font-mono text-[9px] text-white/25 border border-white/8 px-2 py-1 rounded-sm">{g}</span>
                ))}
                <span className="text-[10px] text-white/20">runs across all layers</span>
              </div>
            </div>
          </div>
        </section>

        {/* GENAI PIPELINE */}
        <section className="bg-paper-warm border-b border-black/10 py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <div className="section-eyebrow">GenAI Data Pipeline</div>
            <h2 className="section-h2">From raw enterprise data to production RAG</h2>
            <p className="section-lead">The five-stage pipeline that transforms governed enterprise data into a reliable, hallucination-resistant GenAI system.</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-black/10 border border-black/10 rounded-xl overflow-hidden">
              {[
                {num:'01',title:'Ingest & Classify',items:['Structured sources','Unstructured docs','Real-time streams','External APIs'],h:false},
                {num:'02',title:'Cleanse & Enrich',items:['Quality validation','PII detection','Metadata tagging','Entity resolution'],h:false},
                {num:'03',title:'Semanticize',items:['Glossary mapping','Relationship graph','Lineage capture','Business context'],h:false},
                {num:'04',title:'Vectorize & Index',items:['Chunking strategy','Embedding model','Vector DB index','Hybrid retrieval'],h:true},
                {num:'05',title:'Serve & Monitor',items:['RAG pipeline','Hallucination eval','Access control','Drift detection'],h:false},
              ].map((stage)=>(
                <div key={stage.num} className={`p-6 ${stage.h?'bg-brand/5':'bg-white'}`}>
                  <div className="font-serif text-3xl font-black text-ink/10 mb-3">{stage.num}</div>
                  <div className="font-sans text-sm font-semibold text-ink mb-4">{stage.title}</div>
                  <div className="space-y-2">
                    {stage.items.map((item)=>(
                      <div key={item} className="flex items-center gap-2 text-xs text-ink-muted">
                        <span className="text-brand">·</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-20 text-center">
          <h2 className="font-serif text-4xl font-bold text-ink mb-4">Know your SIGNAL Score.</h2>
          <p className="text-ink-muted text-lg max-w-lg mx-auto mb-10 leading-relaxed">15 minutes. 23 dimensions. A precise readiness score across all six SIGNAL dimensions — and a prioritized roadmap to close the gaps.</p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="btn-primary">Get Your Free SIGNAL Score →</a>
            <a href="/services" className="btn-ghost">View Engagements</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
