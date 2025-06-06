import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, subject, message } = body

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransporter({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: "info@legalpro.com",
      subject: subject || service || "New Enquiry from LegalPro Website",
      html: `
        <h2>New Enquiry from LegalPro Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return Response.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}
