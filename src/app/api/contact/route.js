import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options - Confirmation email to user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting Neutron - We'll be in touch soon!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  <!-- Header with Logo -->
                  <tr>
                    <td align="center" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
                      <img src="https://neutron-organization.vercel.app/neutron.png" alt="Neutron Logo" style="max-width: 120px; height: auto; margin-bottom: 20px;" />
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Thank You for Reaching Out!</h1>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Hi <strong>${name}</strong>,
                      </p>
                      
                      <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        We've received your message and wanted to let you know that we'll get back to you as soon as possible. Our team is reviewing your inquiry and will contact you soon.
                      </p>
                      
                      <!-- Message Summary Box -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 30px 0; border-radius: 4px;">
                        <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Your Message Summary</h3>
                        <p style="margin: 8px 0; color: #555555; font-size: 14px;">
                          <strong style="color: #333;">Subject:</strong> ${subject}
                        </p>
                        <p style="margin: 8px 0; color: #555555; font-size: 14px;">
                          <strong style="color: #333;">Message:</strong><br/>
                          <span style="color: #666; font-size: 14px; line-height: 1.5;">${message}</span>
                        </p>
                      </div>
                      
                      <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                        In the meantime, feel free to explore more about what we do and stay connected with us.
                      </p>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                        Best regards,<br/>
                        <strong style="color: #667eea;">The Neutron Team</strong>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                      <p style="color: #6c757d; font-size: 14px; margin: 0 0 10px 0;">
                        This is an automated confirmation email. Please do not reply to this message.
                      </p>
                      <p style="color: #6c757d; font-size: 12px; margin: 0;">
                        © ${new Date().getFullYear()} Neutron. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Admin notification email
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your own email
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td align="center" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px;">
                      <img src="https://neutron-organization.vercel.app/neutron.png" alt="Neutron Logo" style="max-width: 100px; height: auto; margin-bottom: 15px;" />
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin-bottom: 30px; border-radius: 4px;">
                        <p style="margin: 0; color: #856404; font-size: 14px;">
                          <strong>⚡ Action Required:</strong> A new contact form has been submitted. Please respond promptly.
                        </p>
                      </div>
                      
                      <!-- Contact Details -->
                      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 6px; margin-bottom: 20px;">
                        <h3 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h3>
                        
                        <table width="100%" cellpadding="8" cellspacing="0">
                          <tr>
                            <td style="color: #555; font-size: 14px; font-weight: 600; width: 120px; vertical-align: top;">Name:</td>
                            <td style="color: #333; font-size: 14px;">${name}</td>
                          </tr>
                          <tr>
                            <td style="color: #555; font-size: 14px; font-weight: 600; width: 120px; vertical-align: top;">Email:</td>
                            <td style="color: #333; font-size: 14px;">
                              <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="color: #555; font-size: 14px; font-weight: 600; width: 120px; vertical-align: top;">Subject:</td>
                            <td style="color: #333; font-size: 14px;">${subject}</td>
                          </tr>
                          <tr>
                            <td style="color: #555; font-size: 14px; font-weight: 600; width: 120px; vertical-align: top;">Date:</td>
                            <td style="color: #333; font-size: 14px;">${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Message Content -->
                      <div style="background-color: #ffffff; border: 2px solid #e9ecef; padding: 25px; border-radius: 6px;">
                        <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h3>
                        <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                      </div>
                      
                      <!-- Quick Action Button -->
                      <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px;">Reply to ${name}</a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
                      <p style="color: #6c757d; font-size: 12px; margin: 0;">
                        This is an automated notification from your Neutron contact form.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions), // Confirmation to user
      transporter.sendMail(adminMailOptions) // Notification to admin
    ]);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
