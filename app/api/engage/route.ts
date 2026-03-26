import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const name = (data.name as string)?.trim();
    const firm = (data.firm as string)?.trim() || 'N/A';
    const email = (data.email as string)?.trim();
    const phone = (data.phone as string)?.trim() || 'N/A';
    const criteria = (data.acquisition_criteria as string)?.trim();

    if (!name || !email || !criteria) {
      return NextResponse.json({ error: 'Name, email, and acquisition criteria are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
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
      from: `"Kautilya" <${process.env.SMTP_USER}>`,
      to: process.env.CAREERS_EMAIL || 'hello@pocket-fund.com',
      replyTo: email,
      subject: `Acquisition Thesis Inquiry: ${name}`,
      html: `
        <h2>New Engagement Inquiry</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px 16px;font-weight:bold;">Name</td><td style="padding:8px 16px;">${name}</td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Firm</td><td style="padding:8px 16px;">${firm}</td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Email</td><td style="padding:8px 16px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Phone</td><td style="padding:8px 16px;">${phone}</td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Acquisition Criteria</td><td style="padding:8px 16px;">${criteria}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#888;">Submitted from Kautilya Engage Page</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Engage form submission error:', err);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again.' },
      { status: 500 },
    );
  }
}
