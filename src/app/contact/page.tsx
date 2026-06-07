'use client'

import { useState } from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const CHALLENGES = [
  'AI projects stalling due to data quality',
  'No data governance or lineage in place',
  'Need a modern data architecture',
  'Want to build a GenAI product / copilot',
  'Data stack is too complex / expensive',
  'Need AI readiness assessment',
  'Team training & enablement',
  'Something else',
]

const CONTACT_METHODS = [
  {
    icon: '◎',
    title: 'Book a Discovery Call',
    desc: '30-minute free call. Come with your biggest data problem. We will tell you honestly whether we can help.',
    action: 'Schedule via Calendly',
    href: 'https://calendly.com',
    accent: 'border-brand/30 hover:border-brand/60',
  },
  {
    icon: '◈',
    title: 'Get the AI Readiness Score',
    desc: 'Fill the form below. We will send a personalised 23-dimension diagnostic to your inbox within 24 hours.',
    action: 'Use the form below',
    href: '#form',
    accent: 'border-gold/30 hover:border-gold/60',
  },
  {
    icon: '⬡',
    title: 'Email Directly',
    desc: 'Prefer email? Reach out directly. Responses within one business day.',
    action: 'Use the form below',
    href: '#form',
    accent: 'border-teal-500/30 hover:border-teal-500/60',
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', challenge: '', message: '' })
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setState('error')
      setErrorMsg('Name, email, and message are required.')
      return
    }
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setState('success')
    } catch {
      setState('error')
      setErrorMsg('Something went wrong. Please email hello@thedatapedia.com directly.')
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-paper">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 pt-20 pb-16 border-b border-black/10">
          <div className="section-eyebrow">Get In Touch</div>
          <h1 className="font-serif text-5xl font-black tracking-tight text-ink mb-5 max-w-2xl leading-tight">
            Talk to the practitioner,<br />not a sales team.
          </h1>
          <p className="text-xl text-ink-muted max-w-xl leading-relaxed">
            Every inquiry is handled personally. No SDRs, no automated nurture sequences — just a direct conversation about your data and AI challenges.
          </p>
        </section>

        {/* CONTACT METHODS */}
        <section className="max-w-7xl mx-auto px-8 lg:px-20 py-16 border-b border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONTACT_METHODS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className={`block border rounded-xl p-8 bg-white no-underline transition-all duration-200 group ${c.accent}`}
              >
                <div className="text-2xl text-ink-faint mb-4 group-hover:text-brand transition-colors">{c.icon}</div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors">{c.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-5">{c.desc}</p>
                <span className="font-mono text-xs text-brand tracking-wider">{c.action} →</span>
              </a>
            ))}
          </div>
        </section>

        {/* FORM */}
        <section id="form" className="max-w-7xl mx-auto px-8 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left */}
            <div>
              <div className="section-eyebrow">Inquiry Form</div>
              <h2 className="font-serif text-3xl font-bold text-ink mb-4 leading-tight">
                Tell us about your challenge
              </h2>
              <p className="text-ink-muted text-base leading-relaxed mb-8">
                The more context you share, the more specific our response will be. We read every submission personally and respond within one business day.
              </p>

              {/* What happens next */}
              <div className="bg-ink rounded-xl p-8 font-mono">
                <div className="text-[10px] tracking-widest uppercase text-white/25 mb-5">// What happens after you submit</div>
                <div className="space-y-5">
                  {[
                    { step: '01', title: 'We read your submission', time: 'Within 2 hours', desc: 'Every inquiry is personally reviewed — no auto-responses.' },
                    { step: '02', title: 'We send a tailored response', time: 'Within 24 hours', desc: 'Our response will include specific thoughts on your challenge, not a brochure.' },
                    { step: '03', title: 'Discovery call (optional)', time: 'Within 1 week', desc: '30-minute call to go deeper. Zero pressure, zero pitch deck.' },
                    { step: '04', title: 'Proposal if there\'s a fit', time: 'Within 3 days of call', desc: 'Fixed-fee, scoped engagement proposal. No ambiguity.' },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <span className="font-serif text-2xl font-black text-brand/20 shrink-0 w-8">{s.step}</span>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[12px] text-white font-sans font-medium">{s.title}</span>
                          <span className="font-mono text-[9px] text-white/20 uppercase tracking-wider">{s.time}</span>
                        </div>
                        <p className="text-[11px] text-white/40 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              {state === 'success' ? (
                <div className="bg-paper-warm border border-black/10 rounded-xl p-12 text-center">
                  <div className="text-4xl mb-6">✓</div>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-3">Message received.</h3>
                  <p className="text-ink-muted leading-relaxed mb-6">
                    Thank you for reaching out. You will hear back within 24 hours — personally, not from a bot.
                  </p>
                  <p className="font-mono text-xs text-ink-faint uppercase tracking-wider">
                    A confirmation has been sent to {form.email}
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-faint block mb-2">
                        Full Name <span className="text-brand">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-white border border-black/15 text-ink font-sans text-sm px-4 py-3 rounded focus:outline-none focus:border-brand/40 placeholder:text-ink-faint"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-faint block mb-2">
                        Work Email <span className="text-brand">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-white border border-black/15 text-ink font-sans text-sm px-4 py-3 rounded focus:outline-none focus:border-brand/40 placeholder:text-ink-faint"
                      />
                    </div>
                  </div>

                  {/* Company + Role */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-faint block mb-2">Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full bg-white border border-black/15 text-ink font-sans text-sm px-4 py-3 rounded focus:outline-none focus:border-brand/40 placeholder:text-ink-faint"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-faint block mb-2">Your Role</label>
                      <input
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="e.g. CDO, VP Data, CTO"
                        className="w-full bg-white border border-black/15 text-ink font-sans text-sm px-4 py-3 rounded focus:outline-none focus:border-brand/40 placeholder:text-ink-faint"
                      />
                    </div>
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-ink-faint block mb-2">
                      Primary Challenge
                    </label>
                    <select
                      name="challenge"
                      value={form.challenge}
                      onChange={handleChange}
                      className="w-full bg-white border border-black/15 text-ink font-sans text-sm px-4 py-3 rounded focus:outline-none focus:border-brand/40"
                    >
                      <option value="">Select the closest match</option>
                      {CHALLENGES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-ink-faint block mb-2">
                      Tell us more <span className="text-brand">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your situation — what have you tried, what is blocking you, what does success look like?"
                      className="w-full bg-white border border-black/15 text-ink font-sans text-sm px-4 py-3 rounded focus:outline-none focus:border-brand/40 placeholder:text-ink-faint resize-none"
                    />
                  </div>

                  {state === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded font-sans">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={state === 'loading'}
                    className="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state === 'loading' ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p className="font-mono text-[10px] text-ink-faint text-center uppercase tracking-wider">
                    No spam · Replied personally within 24 hours
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
