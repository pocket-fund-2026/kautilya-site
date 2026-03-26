import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kautilya Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.CAREERS_EMAIL || 'hello@pocket-fund.com',
      subject: `Newsletter Signup: ${email}`,
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="margin-top:16px;font-size:12px;color:#888;">Signed up via Kautilya website popup</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
  }
}
