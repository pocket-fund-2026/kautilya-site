import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = (formData.get('fullName') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const phone = (formData.get('phone') as string)?.trim();
    const role = (formData.get('role') as string)?.trim();
    const workMode = (formData.get('workMode') as string)?.trim();
    const cv = formData.get('cv') as File | null;

    // Validate required fields
    if (!fullName || !email || !phone || !role || !workMode) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!cv) {
      return NextResponse.json({ error: 'CV attachment is required.' }, { status: 400 });
    }

    if (cv.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File must be under 5 MB.' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(cv.type)) {
      return NextResponse.json({ error: 'Only PDF, DOC, and DOCX files are allowed.' }, { status: 400 });
    }

    // Read file buffer
    const cvBuffer = Buffer.from(await cv.arrayBuffer());

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
      from: `"Kautilya Careers" <${process.env.SMTP_USER}>`,
      to: process.env.CAREERS_EMAIL || 'hello@pocket-fund.com',
      replyTo: email,
      subject: `Career Application: ${role}, ${fullName}`,
      html: `
        <h2>New Career Application</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px 16px;font-weight:bold;">Name</td><td style="padding:8px 16px;">${fullName}</td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Email</td><td style="padding:8px 16px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Phone</td><td style="padding:8px 16px;">${phone}</td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Role</td><td style="padding:8px 16px;">${role}</td></tr>
          <tr><td style="padding:8px 16px;font-weight:bold;">Work Mode</td><td style="padding:8px 16px;">${workMode}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#888;">Submitted from Kautilya Careers Page</p>
      `,
      attachments: [
        {
          filename: cv.name,
          content: cvBuffer,
          contentType: cv.type,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Career form submission error:', err);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 },
    );
  }
}
