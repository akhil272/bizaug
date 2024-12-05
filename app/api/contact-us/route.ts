import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, business, helpOptions } = body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "BizAug | Contact Us | Signup",
      html: `
        <h2>Contact Enquiry Information </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>About Business:</strong> ${business || "Not provided"}</p>
    <p><strong>How Can We Help:</strong> ${
      Array.isArray(helpOptions) ? helpOptions.join(", ") : "Not specified"
    }</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email successful" }, { status: 200 });
  } catch (error) {
    console.error("Contact signup error:", error);
    return NextResponse.json(
      { error: "Failed to process contact signup" },
      { status: 500 }
    );
  }
}
