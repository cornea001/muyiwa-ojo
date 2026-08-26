import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY!)
  try {
    const data = await req.json()

    const {
      name,
      address,
      contact,
      issues,
      improvements,
      support_level,
      lawn_sign,
      volunteer,
      extra
    } = data

    const result = await resend.emails.send({
      from: "Muyiwa Ojo Campaign <info@muyiwaojo.ca>",
      to: "info@muyiwaojo.ca",
      subject: "New Campaign Form Submission",
      html: `
        <h2>New Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Contact:</b> ${contact}</p>

        <p><b>Top Issues:</b><br/>${issues}</p>
        <p><b>Improvements:</b><br/>${improvements}</p>

        <p><b>Support Level:</b> ${support_level}</p>
        <p><b>Lawn Sign:</b> ${lawn_sign}</p>
        <p><b>Volunteer:</b> ${volunteer}</p>

        <p><b>Extra Notes:</b><br/>${extra}</p>
      `
    })



    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("RESEND ERROR:", error)

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}