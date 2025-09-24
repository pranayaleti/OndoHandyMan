"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy-key-for-dev");

type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  timeline?: string;
  message: string;
};

const leadSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  service: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string(),
});

export async function sendLead(payload: LeadPayload) {
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    console.error("Invalid lead payload", parsed.error.flatten());
    throw new Error("Invalid lead payload.");
  }

  if (!process.env.RESEND_API_KEY || !process.env.LEAD_INBOX_EMAIL) {
    console.warn("Missing mail configuration. RESEND_API_KEY or LEAD_INBOX_EMAIL not set.");
    // In development, just log the lead data instead of sending email
    console.log("Lead data (would be sent via email):", parsed.data);
    return { id: "dev-mode", from: "dev@ondo-handyman.com", to: ["dev@example.com"] };
  }

  const { data, error } = await resend.emails.send({
    from: "Ondo Handyman <hello@ondo-handyman.com>",
    to: [process.env.LEAD_INBOX_EMAIL],
    subject: `New project inquiry from ${parsed.data.name}`,
    reply_to: parsed.data.email,
    text: createTextBody(parsed.data),
    html: createHtmlBody(parsed.data),
  });

  if (error) {
    console.error("Resend email error", error);
    throw new Error("Failed to send lead email.");
  }

  return data;
}

function createTextBody(data: LeadPayload) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Service: ${data.service || "Not specified"}`,
    `Timeline: ${data.timeline || "Not specified"}`,
    "",
    "Project details:",
    data.message,
  ].join("\n");
}

function createHtmlBody(data: LeadPayload) {
  return `<!doctype html>
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
    <h2 style="color: #0c5a83;">New Ondo Handyman Inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
    <p><strong>Service:</strong> ${escapeHtml(data.service || "Not specified")}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(data.timeline || "Not specified")}</p>
    <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  </body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
