import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@smartedgebangladesh.com";
const FROM_EMAIL = process.env.FROM_EMAIL || `"SmartEdge Bangladesh" <info@smartedgebangladesh.com>`;

interface EmailResult {
  adminDelivered: boolean;
  customerDelivered: boolean;
  messageId?: string;
  error?: string;
}

export function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn(
      "[SMTP Warning] SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) are not fully configured in environment variables. Email will not be dispatched to external mail servers."
    );
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

function generateAdminProjectEmailHtml(data: {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl?: string;
  country: string;
  serviceRequired: string;
  projectBudget: string;
  projectTimeline: string;
  projectDescription: string;
  additionalRequirements?: string;
  submittedAt: string;
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry - SmartEdge Bangladesh</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0a1122 0%, #005cbb 100%); padding: 32px 28px; text-align: left; }
    .header h1 { color: #ffffff; margin: 0 0 6px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { color: #bfdbfe; margin: 0; font-size: 14px; }
    .body-content { padding: 32px 28px; }
    .badge { display: inline-block; background-color: #eff6ff; color: #005cbb; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 20px; border: 1px solid #dbeafe; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px; }
    .data-table th { width: 35%; text-align: left; padding: 12px 14px; background: #f8fafc; color: #475569; font-weight: 600; border-bottom: 1px solid #e2e8f0; }
    .data-table td { padding: 12px 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a; }
    .desc-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 20px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .cta-btn { display: inline-block; background: #005cbb; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>SmartEdge Bangladesh</h1>
      <p>Executive Enterprise Project Inquiry</p>
    </div>
    <div class="body-content">
      <div class="badge">Service: ${data.serviceRequired}</div>
      <p style="font-size: 15px; margin-top: 0; line-height: 1.5;">A new verified project inquiry has been received through the SmartEdge portal.</p>
      
      <table class="data-table">
        <tr>
          <th>Customer Name</th>
          <td><strong>${data.fullName}</strong></td>
        </tr>
        <tr>
          <th>Business Email</th>
          <td><a href="mailto:${data.businessEmail}" style="color: #005cbb; text-decoration: none;">${data.businessEmail}</a></td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td><a href="tel:${data.phoneNumber}" style="color: #005cbb; text-decoration: none;">${data.phoneNumber}</a></td>
        </tr>
        <tr>
          <th>Company / Entity</th>
          <td>${data.companyName}</td>
        </tr>
        ${data.websiteUrl ? `<tr><th>Website</th><td><a href="${data.websiteUrl}" target="_blank">${data.websiteUrl}</a></td></tr>` : ""}
        <tr>
          <th>Country</th>
          <td>${data.country}</td>
        </tr>
        <tr>
          <th>Budget Scope</th>
          <td><strong style="color: #0284c7;">${data.projectBudget}</strong></td>
        </tr>
        <tr>
          <th>Target Timeline</th>
          <td>${data.projectTimeline}</td>
        </tr>
        <tr>
          <th>Timestamp</th>
          <td>${data.submittedAt}</td>
        </tr>
      </table>

      <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 15px;">Project Scope & Description:</h4>
      <div class="desc-box">${data.projectDescription}</div>

      ${
        data.additionalRequirements
          ? `<h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 15px;">Additional Requirements & Constraints:</h4>
             <div class="desc-box">${data.additionalRequirements}</div>`
          : ""
      }

      <div style="text-align: center; margin-top: 28px;">
        <a href="mailto:${data.businessEmail}?subject=Re: Project Inquiry - SmartEdge Bangladesh" class="cta-btn">Reply Directly to Client</a>
      </div>
    </div>
    <div class="footer">
      SmartEdge Bangladesh Internal Dispatch System &bull; Official Email: info@smartedgebangladesh.com &bull; +8801743589784
    </div>
  </div>
</body>
</html>
  `;
}

function generateCustomerConfirmationEmailHtml(fullName: string, service: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Thank You for Contacting SmartEdge Bangladesh</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #0a1122; padding: 36px 32px; text-align: left; }
    .header h1 { color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { color: #94a3b8; margin: 0; font-size: 14px; }
    .body-content { padding: 36px 32px; font-size: 15px; line-height: 1.6; color: #334155; }
    .highlight-card { background: #f0f7ff; border-left: 4px solid #005cbb; padding: 18px 20px; border-radius: 0 8px 8px 0; margin: 24px 0; }
    .footer { background: #f8fafc; padding: 24px 32px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .contact-badge { display: inline-block; margin: 4px 8px; color: #005cbb; text-decoration: none; font-weight: 500; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>SmartEdge Bangladesh</h1>
      <p>Enterprise Software & Product Engineering</p>
    </div>
    <div class="body-content">
      <p>Dear <strong>${fullName}</strong>,</p>
      <p>Thank you for reaching out to <strong>SmartEdge Bangladesh</strong>. We have successfully received your inquiry regarding <strong>${service}</strong>.</p>
      
      <div class="highlight-card">
        <h4 style="margin: 0 0 6px 0; color: #005cbb; font-size: 16px;">What Happens Next?</h4>
        <p style="margin: 0; font-size: 14px; color: #1e3a8a;">
          1. Our solutions architecture team reviews your technical and business requirements.<br>
          2. A designated Senior Tech Lead will reach out to you within <strong>24 business hours</strong>.<br>
          3. We prepare an initial project roadmap, architectural scope, and feasibility estimation.
        </p>
      </div>

      <p>If you have urgent questions or would like to schedule an immediate consultation, feel free to contact us directly via WhatsApp or phone:</p>
      <p style="text-align: center; margin: 24px 0;">
        <a href="https://wa.me/8801743589784" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-right: 8px;">Chat on WhatsApp</a>
        <a href="tel:+8801743589784" style="display: inline-block; background: #005cbb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px;">Direct Call: +8801743589784</a>
      </p>

      <p>Warm regards,<br>
      <strong>SmartEdge Bangladesh Engineering Team</strong><br>
      <a href="https://smartedgebangladesh.com" style="color: #005cbb; text-decoration: none;">smartedgebangladesh.com</a></p>
    </div>
    <div class="footer">
      Official Email: info@smartedgebangladesh.com &bull; Dhaka, Bangladesh<br>
      &copy; ${new Date().getFullYear()} SmartEdge Bangladesh. All rights reserved.
    </div>
  </div>
</body>
</html>
  `;
}

export async function sendProjectInquiryEmails(data: {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl?: string;
  country: string;
  serviceRequired: string;
  projectBudget: string;
  projectTimeline: string;
  projectDescription: string;
  additionalRequirements?: string;
}): Promise<EmailResult> {
  const transporter = getTransporter();

  if (!transporter) {
    return {
      adminDelivered: false,
      customerDelivered: false,
      error: "SMTP transporter not configured (credentials missing in environment). Inquiry safely saved in database.",
    };
  }

  const submittedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  let adminDelivered = false;
  let customerDelivered = false;
  let lastError: string | undefined;
  let messageId: string | undefined;

  // 1. Send Admin Notification Email
  try {
    const adminMailOptions = {
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: data.businessEmail,
      subject: `New Project Inquiry: ${data.serviceRequired} - ${data.companyName} (${data.fullName})`,
      html: generateAdminProjectEmailHtml({ ...data, submittedAt }),
    };

    const adminInfo = await transporter.sendMail(adminMailOptions);
    adminDelivered = true;
    messageId = adminInfo.messageId;
    console.log(`[Email] Admin notification delivered successfully: ${messageId}`);
  } catch (err: any) {
    console.error("[Email Error] Failed to send admin project notification:", err?.message || err);
    lastError = `Admin delivery failed: ${err?.message || "Unknown error"}`;
  }

  // 2. Send Customer Confirmation Email
  try {
    const customerMailOptions = {
      from: FROM_EMAIL,
      to: data.businessEmail,
      subject: "Thank You for Contacting SmartEdge Bangladesh - Inquiry Received",
      html: generateCustomerConfirmationEmailHtml(data.fullName, data.serviceRequired),
    };

    await transporter.sendMail(customerMailOptions);
    customerDelivered = true;
    console.log(`[Email] Customer confirmation delivered to ${data.businessEmail}`);
  } catch (err: any) {
    console.error("[Email Error] Failed to send customer confirmation:", err?.message || err);
    if (!lastError) {
      lastError = `Customer confirmation failed: ${err?.message || "Unknown error"}`;
    }
  }

  return {
    adminDelivered,
    customerDelivered,
    messageId,
    error: lastError,
  };
}

export async function sendContactInquiryEmails(data: {
  fullName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  subject?: string;
  serviceInterest?: string;
  message: string;
}): Promise<EmailResult> {
  const transporter = getTransporter();

  if (!transporter) {
    return {
      adminDelivered: false,
      customerDelivered: false,
      error: "SMTP transporter not configured. Inquiry saved in database.",
    };
  }

  const submittedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  let adminDelivered = false;
  let customerDelivered = false;
  let lastError: string | undefined;
  let messageId: string | undefined;

  try {
    const adminHtml = `
      <h2>New Contact Inquiry from SmartEdge Website</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber || "Not provided"}</p>
      <p><strong>Company:</strong> ${data.companyName || "Not provided"}</p>
      <p><strong>Service Interest:</strong> ${data.serviceInterest || "General"}</p>
      <p><strong>Subject:</strong> ${data.subject || "Website Contact"}</p>
      <p><strong>Time:</strong> ${submittedAt}</p>
      <hr/>
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${data.message}</p>
    `;

    const adminInfo = await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Contact Inquiry: ${data.fullName} - SmartEdge Bangladesh`,
      html: adminHtml,
    });
    adminDelivered = true;
    messageId = adminInfo.messageId;
  } catch (err: any) {
    console.error("[Email Error] Contact admin delivery failed:", err);
    lastError = err?.message;
  }

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Thank You for Contacting SmartEdge Bangladesh",
      html: generateCustomerConfirmationEmailHtml(data.fullName, data.serviceInterest || "Software Engineering Services"),
    });
    customerDelivered = true;
  } catch (err: any) {
    console.error("[Email Error] Contact customer confirmation failed:", err);
  }

  return {
    adminDelivered,
    customerDelivered,
    messageId,
    error: lastError,
  };
}

export interface QuoteLeadEmailData {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName?: string;
  companyAddress?: string;
  websiteType: string;
  projectDescription: string;
  projectBudget: string;
  projectTimeline: string;
  meetingDate: string;
  meetingTime: string;
  meetingType: string;
}

function generateAdminQuoteLeadEmailHtml(data: QuoteLeadEmailData & { submittedAt: string }): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Qualified Lead & Quote Request - SmartEdge Bangladesh</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: #0a1122; padding: 32px 28px; border-bottom: 3px solid #ffcc00; }
    .header h1 { color: #ffffff; margin: 0 0 6px 0; font-size: 22px; font-weight: 800; }
    .header p { color: #94a3b8; margin: 0; font-size: 13px; }
    .body-content { padding: 32px 28px; }
    .alert-pill { display: inline-block; background-color: #fef08a; color: #713f12; padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 20px; }
    .section-title { font-size: 14px; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; margin: 24px 0 12px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
    .lead-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 14px; }
    .lead-table th { width: 38%; text-align: left; padding: 10px 12px; background: #f8fafc; color: #475569; font-weight: 600; border-bottom: 1px solid #f1f5f9; }
    .lead-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; }
    .desc-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #ffcc00; border-radius: 8px; padding: 16px; margin: 12px 0 20px 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .meeting-card { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 18px 20px; margin: 16px 0 24px 0; }
    .action-row { display: flex; gap: 10px; margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
    .btn { display: inline-block; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; margin-right: 8px; margin-bottom: 8px; }
    .btn-primary { background: #005cbb; color: #ffffff !important; }
    .btn-whatsapp { background: #22c55e; color: #ffffff !important; }
    .btn-phone { background: #0f172a; color: #ffffff !important; }
    .footer { background: #f8fafc; padding: 20px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>SmartEdge Bangladesh</h1>
      <p>Official Website Project Lead & Quote Request</p>
    </div>
    
    <div class="body-content">
      <div class="alert-pill">⚡ High-Priority Client Lead</div>
      <p style="font-size: 15px; margin: 0 0 20px 0; line-height: 1.5;">
        A new client lead has requested a project discussion and quote through the <strong>SmartEdge Bangladesh</strong> website.
      </p>

      <div class="section-title">1. Client Contact Information</div>
      <table class="lead-table">
        <tr>
          <th>Client Name</th>
          <td><strong style="font-size: 15px;">${data.fullName}</strong></td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td><a href="tel:${data.phoneNumber}" style="color: #005cbb; font-weight: 700; text-decoration: none;">${data.phoneNumber}</a></td>
        </tr>
        <tr>
          <th>Email Address</th>
          <td><a href="mailto:${data.email}" style="color: #005cbb; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <th>Company Name</th>
          <td>${data.companyName || '<span style="color: #94a3b8;">Not specified</span>'}</td>
        </tr>
        <tr>
          <th>Company Address / Location</th>
          <td>${data.companyAddress || '<span style="color: #94a3b8;">Not specified</span>'}</td>
        </tr>
      </table>

      <div class="section-title">2. Website & Project Requirements</div>
      <table class="lead-table">
        <tr>
          <th>Website Type Required</th>
          <td><strong style="color: #005cbb;">${data.websiteType}</strong></td>
        </tr>
        <tr>
          <th>Selected Project Budget</th>
          <td><span style="display: inline-block; background: #fef08a; color: #713f12; padding: 3px 8px; border-radius: 6px; font-weight: 700;">${data.projectBudget}</span></td>
        </tr>
        <tr>
          <th>Expected Project Timeline</th>
          <td><strong>${data.projectTimeline}</strong></td>
        </tr>
        <tr>
          <th>Submission Timestamp</th>
          <td>${data.submittedAt}</td>
        </tr>
      </table>

      <div class="section-title">Project Description</div>
      <div class="desc-box">${data.projectDescription}</div>

      <div class="section-title">3. Scheduled Meeting Preference</div>
      <div class="meeting-card">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #1e3a8a; font-weight: 600; width: 40%;">Preferred Meeting Date:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${data.meetingDate}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #1e3a8a; font-weight: 600;">Preferred Meeting Time:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${data.meetingTime}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #1e3a8a; font-weight: 600;">Meeting Type:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">
              <span style="background: #ffffff; padding: 4px 10px; border-radius: 6px; border: 1px solid #bfdbfe;">
                ${data.meetingType}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; color: #475569;">Quick Contact Actions:</p>
        <a href="mailto:${data.email}?subject=Project%20Discussion%20-%20SmartEdge%20Bangladesh" class="btn btn-primary">Reply by Email</a>
        <a href="tel:${data.phoneNumber}" class="btn btn-phone">Call Client</a>
        <a href="https://wa.me/${data.phoneNumber.replace(/[^0-9]/g, '')}" class="btn btn-whatsapp" target="_blank">Chat on WhatsApp</a>
      </div>
    </div>

    <div class="footer">
      SmartEdge Bangladesh Ltd. &bull; 1294 Rokeya Sharani, Mirpur-10, Dhaka 1216<br>
      Automated Lead Routing Engine &bull; info@smartedgebangladesh.com
    </div>
  </div>
</body>
</html>
  `;
}

function generateCustomerQuoteConfirmationEmailHtml(data: QuoteLeadEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>We Received Your Project Inquiry - SmartEdge Bangladesh</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #0a1122; padding: 36px 32px; text-align: left; border-bottom: 3px solid #ffcc00; }
    .header h1 { color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 700; }
    .header p { color: #94a3b8; margin: 0; font-size: 14px; }
    .body-content { padding: 36px 32px; font-size: 15px; line-height: 1.6; color: #334155; }
    .card { background: #f0fdf4; border-left: 4px solid #22c55e; padding: 18px 20px; border-radius: 0 8px 8px 0; margin: 24px 0; }
    .meeting-info { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; margin: 20px 0; }
    .footer { background: #f8fafc; padding: 24px 32px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>SmartEdge Bangladesh</h1>
      <p>Software Engineering & Digital Transformation Partner</p>
    </div>
    <div class="body-content">
      <p>Dear <strong>${data.fullName}</strong>,</p>
      <p>Thank you for reaching out to <strong>SmartEdge Bangladesh</strong>. We have successfully received your project specifications for a <strong>${data.websiteType}</strong>.</p>
      
      <div class="card">
        <h4 style="margin: 0 0 6px 0; color: #15803d; font-size: 16px;">What Happens Next?</h4>
        <p style="margin: 0; font-size: 14px; color: #166534;">
          1. Our solutions architecture team is reviewing your project requirements and budget scope (<strong>${data.projectBudget}</strong>).<br>
          2. We will confirm your preferred meeting on <strong>${data.meetingDate} at ${data.meetingTime}</strong> (${data.meetingType}).<br>
          3. We will send a dedicated Google Meet invite or confirm in-person office directions.
        </p>
      </div>

      <div class="meeting-info">
        <p style="margin: 0 0 8px 0; font-weight: 700; color: #0f172a; font-size: 14px;">Summary of Your Requested Discussion:</p>
        <p style="margin: 0; font-size: 13px; color: #475569;">
          &bull; <strong>Project Type:</strong> ${data.websiteType}<br>
          &bull; <strong>Budget Scope:</strong> ${data.projectBudget}<br>
          &bull; <strong>Timeline:</strong> ${data.projectTimeline}<br>
          &bull; <strong>Preferred Meeting:</strong> ${data.meetingDate} &bull; ${data.meetingTime} (${data.meetingType})
        </p>
      </div>

      <p>If you need immediate technical assistance or wish to chat right away, please connect with us directly on WhatsApp:</p>
      <p style="text-align: center; margin: 24px 0;">
        <a href="https://wa.me/8801743589784" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin-right: 8px;">Direct WhatsApp Consultation</a>
      </p>

      <p>Warm regards,<br>
      <strong>SmartEdge Bangladesh Solutions Team</strong><br>
      <a href="https://smartedgebangladesh.com" style="color: #005cbb; text-decoration: none;">smartedgebangladesh.com</a> &bull; +8801743589784</p>
    </div>
    <div class="footer">
      Head Office: 1294 Rokeya Sharani, Mirpur-10, Dhaka-1216, Next to Metro Pillar No. 267, Dhaka, Bangladesh 1216.<br>
      Official Email: info@smartedgebangladesh.com &bull; &copy; ${new Date().getFullYear()} SmartEdge Bangladesh.
    </div>
  </div>
</body>
</html>
  `;
}

export async function sendQuoteLeadEmails(data: QuoteLeadEmailData): Promise<EmailResult> {
  const transporter = getTransporter();

  const recipientEmail =
    process.env.ADMIN_EMAIL ||
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    "info@smartedgebangladesh.com";

  const submittedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  let adminDelivered = false;
  let customerDelivered = false;
  let lastError: string | undefined;
  let messageId: string | undefined;

  if (!transporter) {
    console.warn(
      `[Quote Lead Notification] SMTP not configured. Lead for "${data.fullName}" (${data.email}, ${data.phoneNumber}) was safely stored in database.`
    );
    return {
      adminDelivered: false,
      customerDelivered: false,
      error: "SMTP transporter not configured in environment. Lead has been securely stored in database.",
    };
  }

  // 1. Send complete lead information to company official email
  try {
    const adminInfo = await transporter.sendMail({
      from: FROM_EMAIL,
      to: recipientEmail,
      replyTo: data.email,
      subject: `⚡ New Project Lead: ${data.fullName} - ${data.websiteType} (${data.projectBudget})`,
      html: generateAdminQuoteLeadEmailHtml({ ...data, submittedAt }),
    });
    adminDelivered = true;
    messageId = adminInfo.messageId;
    console.log(`[Quote Lead Email] Delivered to official company email (${recipientEmail}): ${messageId}`);
  } catch (err: any) {
    console.error("[Quote Lead Email Error] Admin delivery failed:", err?.message || err);
    lastError = `Official email delivery failed: ${err?.message || "Unknown error"}`;
  }

  // 2. Send instant confirmation to client
  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Thank You for Contacting SmartEdge Bangladesh - Project Discussion Received",
      html: generateCustomerQuoteConfirmationEmailHtml(data),
    });
    customerDelivered = true;
    console.log(`[Quote Lead Email] Customer confirmation delivered to ${data.email}`);
  } catch (err: any) {
    console.error("[Quote Lead Email Error] Customer confirmation delivery failed:", err?.message || err);
  }

  return {
    adminDelivered,
    customerDelivered,
    messageId,
    error: lastError,
  };
}
