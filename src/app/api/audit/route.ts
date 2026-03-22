import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName, email, phone, companyName,
      websiteUrl, trade, serviceArea, monthlyAdSpend, yearsInBusiness,
      primaryGoal, currentChannels, biggestChallenge, timeline
    } = body;

    // 1. Validation
    if (!fullName || !email || !companyName || !trade || !primaryGoal) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
    const fromAddress = 'ACERO Digital <marketing@acerogrowth.com>';

    // STEP A — Insert into Supabase
    const { error: supabaseError } = await supabase
      .from('audit_submissions')
      .insert([
        {
          full_name: fullName,
          email: email,
          phone: phone,
          company_name: companyName,
          website_url: websiteUrl,
          trade: trade,
          service_area: serviceArea,
          monthly_ad_spend: monthlyAdSpend,
          years_in_business: yearsInBusiness,
          primary_goal: primaryGoal,
          current_channels: currentChannels,
          biggest_challenge: biggestChallenge,
          timeline: timeline,
          source: 'website_audit_form'
        }
      ]);

    if (supabaseError) {
      console.error('Supabase Insert Error:', supabaseError);
      return NextResponse.json(
        { error: 'Submission failed. Please try again.' },
        { status: 500 }
      );
    }

    // STEP B — Send Internal Notification Email
    const internalEmail = await resend.emails.send({
      from: fromAddress,
      to: 'marketing@acerogrowth.com',
      subject: `New Audit Request — ${companyName} (${trade})`,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1e293b; padding: 24px; text-align: center;">
            <p style="color: #d4af37; margin: 0; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">New Audit Request</p>
            <h1 style="color: #ffffff; margin: 8px 0 0 0; font-size: 24px;">ACERO Digital</h1>
          </div>
          <div style="padding: 24px;">
            <p style="margin-top: 0; font-weight: bold; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">CONTACT INFO</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 150px; color: #64748b;">Name:</td><td>${fullName}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Email:</td><td>${email}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Phone:</td><td>${phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Company:</td><td>${companyName}</td></tr>
            </table>

            <p style="margin-top: 0; font-weight: bold; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">BUSINESS DETAILS</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 150px; color: #64748b;">Website:</td><td>${websiteUrl || 'Not provided'}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Trade:</td><td>${trade}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Service Area:</td><td>${serviceArea || 'Not provided'}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Monthly Spend:</td><td>${monthlyAdSpend || 'Not provided'}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Years in Biz:</td><td>${yearsInBusiness || 'Not provided'}</td></tr>
            </table>

            <p style="margin-top: 0; font-weight: bold; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">MARKETING GOALS</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 150px; color: #64748b;">Primary Goal:</td><td>${primaryGoal}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Current Channels:</td><td>${currentChannels?.length > 0 ? currentChannels.join(', ') : 'None'}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Challenge:</td><td>${biggestChallenge || 'Not provided'}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Timeline:</td><td>${timeline || 'Not provided'}</td></tr>
            </table>

            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px dashed #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              Submitted: ${timestamp} CT | Source: Website Audit Form
            </div>
          </div>
        </div>
      `,
    });

    if (internalEmail.error) {
      console.error('Resend Internal Error:', internalEmail.error);
    }

    // STEP C — Send Confirmation Email to Lead
    const firstName = fullName.split(' ')[0];
    const confirmationEmail = await resend.emails.send({
      from: fromAddress,
      to: email,
      replyTo: 'marketing@acerogrowth.com',
      subject: 'Your free audit request is confirmed — ACERO Digital',
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1e293b; padding: 24px; text-align: center;">
            <h1 style="color: #d4af37; margin: 0; font-size: 24px;">Audit Confirmation</h1>
          </div>
          <div style="padding: 24px; line-height: 1.6;">
            <p>Hi ${firstName},</p>
            <p>Great news — your free marketing audit request for <strong>${companyName}</strong> has been received!</p>
            
            <p style="font-weight: bold; margin-bottom: 8px;">Here's what happens next:</p>
            <ol style="padding-left: 20px;">
              <li>Our team reviews your business details (usually same day)</li>
              <li>We research your market, competitors, and current digital presence</li>
              <li>You receive a personalised audit within 24-48 hours</li>
            </ol>

            <div style="background-color: #f8fafc; padding: 20px; border-left: 4px solid #d4af37; border-radius: 4px; margin: 24px 0;">
              <p style="margin-top: 0; font-weight: bold; color: #1e293b;">What we'll cover in your audit:</p>
              <ul style="margin-bottom: 0; padding-left: 20px; font-size: 14px;">
                <li>Google Ads performance review</li>
                <li>Local SEO and Google Maps ranking analysis</li>
                <li>Website conversion rate assessment</li>
                <li>Competitor comparison for ${serviceArea || 'your area'}</li>
                <li>Custom growth recommendations for ${trade} businesses</li>
              </ul>
            </div>

            <p>In the meantime, explore our free tools and calculators at <a href="https://acerodigital.com/resources" style="color: #3040A0; text-decoration: underline;">acerodigital.com/resources</a>.</p>
            
            <p>Questions? Reply to this email or call us at <strong>1-800-555-0199</strong>.</p>
            
            <p style="margin-bottom: 0;">Best regards,<br><strong>The ACERO Digital Team</strong><br>marketing@acerogrowth.com</p>
          </div>
        </div>
      `,
    });

    if (confirmationEmail.error) {
       console.error('Resend Confirmation Error:', confirmationEmail.error);
       throw new Error('Failed to send confirmation email');
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('Audit API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send audit request. Please try again.' },
      { status: 500 }
    );
  }
}
