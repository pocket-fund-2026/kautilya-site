import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
      console.error('Newsletter signup misconfigured: BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID not set.');
      return NextResponse.json({ error: 'Newsletter signup is temporarily unavailable.' }, { status: 500 });
    }

    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'kautilya-pe.com',
          utm_medium: 'website_popup',
        }),
      }
    );

    if (!beehiivRes.ok) {
      const errBody = await beehiivRes.text();
      console.error('Beehiiv subscription error:', beehiivRes.status, errBody);
      return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 502 });
    }

    // Internal notification is best-effort — a failure here shouldn't fail
    // the signup itself, since the subscriber is already in Beehiiv.
    try {
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
        to: process.env.NEWSLETTER_EMAIL || 'newsletter@kautilya-pe.com',
        subject: `Newsletter Signup: ${email}`,
        html: `
          <h2>New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin-top:16px;font-size:12px;color:#888;">Signed up via Kautilya website popup — added to Beehiiv</p>
        `,
      });
    } catch (notifyErr) {
      console.error('Newsletter notification email failed:', notifyErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
  }
}
