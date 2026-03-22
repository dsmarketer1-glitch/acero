import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, topic, message } = await req.json();

    // 1. Validate required fields
    if (!firstName || !lastName || !email || !topic) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    const fromAddress = 'ACERO Digital <marketing@acerogrowth.com>';

    // 2. Send Internal Notification Email
    const internalEmail = await resend.emails.send({
      from: fromAddress,
      to: 'marketing@acerogrowth.com',
      subject: `New Contact Form Submission — ${topic} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1e293b; padding: 24px; text-align: center;">
            <h1 style="color: #d4af37; margin: 0; font-size: 24px;">New Contact Submission</h1>
          </div>
          <div style="padding: 24px;">
            <p style="margin-top: 0;">New message from the ACERO Digital website contact form.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td><td>${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Topic:</td><td>${topic}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Message:</td><td style="white-space: pre-line;">${message || 'No message provided'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Submitted:</td><td>${timestamp} (Central Time)</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    if (internalEmail.error) {
      console.error('Resend Internal Error:', internalEmail.error);
      throw new Error('Failed to send internal notification');
    }

    // 3. Send Auto-reply Confirmation Email
    const confirmationEmail = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'We received your message — ACERO Digital',
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1e293b; padding: 24px; text-align: center;">
            <h1 style="color: #d4af37; margin: 0; font-size: 24px;">Message Received</h1>
          </div>
          <div style="padding: 24px; line-height: 1.6;">
            <p>Hi ${firstName},</p>
            <p>Thanks for reaching out to ACERO Digital. We've received your message and will get back to you within 1 business day.</p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 20px 0;">
              <p style="margin-top: 0; font-weight: bold;">Here's a copy of what you sent us:</p>
              <p><strong>Topic:</strong> ${topic}</p>
              <p><strong>Message:</strong> ${message || '—'}</p>
            </div>
            <p>If this is urgent, call us at <strong>1-800-555-0199</strong>.</p>
            <p style="margin-bottom: 0;">— The ACERO Digital Team<br><a href="https://acerodigital.com" style="color: #d4af37; text-decoration: none; font-weight: bold;">acerodigital.com</a></p>
          </div>
        </div>
      `,
    });

    if (confirmationEmail.error) {
       console.error('Resend Confirmation Error:', confirmationEmail.error);
       // We don't necessarily want to fail the whole request if the confirmation email fails, 
       // but for this task we will follow instructions.
       throw new Error('Failed to send confirmation email');
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
