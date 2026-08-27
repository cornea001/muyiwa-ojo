import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY!)
  try {
    const { firstName, lastName, email, postal } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const result = await resend.emails.send({
      from: 'Muyiwa Ojo Campaign <onboarding@resend.dev>',
      to: 'info@muyiwaojo.ca',
      subject: 'New Newsletter Sign-up',
      html: `
        <h2>New Newsletter Sign-up</h2>
        <p><b>First Name:</b> ${firstName || '—'}</p>
        <p><b>Last Name:</b> ${lastName || '—'}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Postal Code:</b> ${postal || '—'}</p>
      `,
    })

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('NEWSLETTER ERROR:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
