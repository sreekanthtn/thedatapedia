import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, role, challenge, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TheDatapedia Contact <onboarding@resend.dev>',
        to: ['sreekanth.tn@live.com'],
        reply_to: email,
        subject: `[TheDatapedia] New inquiry from ${name} — ${company || 'No company'}`,
        html: `
          <div style="font-family: 'IBM Plex Mono', monospace; background: #0a0a0f; color: #c8c8d8; padding: 40px; border-radius: 8px; max-width: 600px;">
            <div style="border-bottom: 1px solid #1e1e2e; padding-bottom: 20px; margin-bottom: 24px;">
              <span style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #5555ff;">// TheDatapedia — New Lead</span>
            </div>
            <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
              <tr><td style="color: #3a3a5a; padding: 8px 0; border-bottom: 1px solid #111120;">Name</td><td style="color: #fff; padding: 8px 0; border-bottom: 1px solid #111120;">${name}</td></tr>
              <tr><td style="color: #3a3a5a; padding: 8px 0; border-bottom: 1px solid #111120;">Email</td><td style="color: #5555ff; padding: 8px 0; border-bottom: 1px solid #111120;">${email}</td></tr>
              <tr><td style="color: #3a3a5a; padding: 8px 0; border-bottom: 1px solid #111120;">Company</td><td style="color: #fff; padding: 8px 0; border-bottom: 1px solid #111120;">${company || '—'}</td></tr>
              <tr><td style="color: #3a3a5a; padding: 8px 0; border-bottom: 1px solid #111120;">Role</td><td style="color: #fff; padding: 8px 0; border-bottom: 1px solid #111120;">${role || '—'}</td></tr>
              <tr><td style="color: #3a3a5a; padding: 8px 0; border-bottom: 1px solid #111120;">Challenge</td><td style="color: #c8a84b; padding: 8px 0; border-bottom: 1px solid #111120;">${challenge || '—'}</td></tr>
            </table>
            <div style="margin-top: 24px; background: #111118; border: 1px solid #1e1e2e; border-radius: 6px; padding: 20px;">
              <div style="font-size: 10px; color: #3a3a5a; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px;">Message</div>
              <div style="font-size: 14px; color: #d4d4f0; line-height: 1.6; font-family: 'DM Sans', sans-serif;">${message}</div>
            </div>
            <div style="margin-top: 24px; font-size: 10px; color: #2a2a42; letter-spacing: 0.08em;">
              Sent from thedatapedia.com · ${new Date().toUTCString()}
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
