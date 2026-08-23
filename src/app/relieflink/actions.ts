"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Code Crafted Labs <ritik@codecraftedlabs.co.in>";
const INQUIRY_EMAIL = "ritiklrt2@gmail.com";

export type ReliefLinkInquiryResult = {
  success: boolean;
  error?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,18}$/;

function readField(formData: FormData, name: string, maxLength: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function submitReliefLinkInquiry(
  formData: FormData,
): Promise<ReliefLinkInquiryResult> {
  try {
    const name = readField(formData, "name", 100);
    const email = readField(formData, "email", 254).toLowerCase();
    const phone = readField(formData, "phone", 30);
    const city = readField(formData, "city", 120);
    const details = readField(formData, "details", 3000);

    if (!name || !email || !phone || !city || !details) {
      return { success: false, error: "Please complete all required fields." };
    }

    if (!emailPattern.test(email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    if (!phonePattern.test(phone)) {
      return { success: false, error: "Please enter a valid phone number." };
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      city: escapeHtml(city),
      details: escapeHtml(details).replaceAll("\n", "<br />"),
    };

    const { error: inquiryError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [INQUIRY_EMAIL],
      replyTo: email,
      subject: `[RELIEFLINK] New care inquiry from ${name}`,
      text: `New ReliefLink inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity/location: ${city}\n\nErrand details:\n${details}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#1c1b1a">
          <div style="background:#041920;color:#fff;padding:24px;border-radius:12px 12px 0 0">
            <p style="margin:0 0 6px;color:#fdb64e;font-size:12px;letter-spacing:.08em">NEW RELIEFLINK INQUIRY</p>
            <h1 style="margin:0;font-size:24px">Care request from ${safe.name}</h1>
          </div>
          <div style="border:1px solid #e5e2df;border-top:0;padding:24px;border-radius:0 0 12px 12px">
            <p><strong>Email:</strong> ${safe.email}</p>
            <p><strong>Phone:</strong> ${safe.phone}</p>
            <p><strong>City/location:</strong> ${safe.city}</p>
            <hr style="border:0;border-top:1px solid #e5e2df;margin:24px 0" />
            <p style="margin-bottom:8px"><strong>Errand details</strong></p>
            <p style="line-height:1.6;margin-top:0">${safe.details}</p>
          </div>
        </div>
      `,
    });

    if (inquiryError) {
      console.error("ReliefLink inquiry email error:", inquiryError);
      return {
        success: false,
        error: "We could not send your inquiry. Please try again shortly.",
      };
    }

    const { error: confirmationError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "We received your ReliefLink inquiry",
      text: `Hello ${name},\n\nThank you for contacting ReliefLink. We received your request for support in ${city} and will review the details shortly.\n\nRegards,\nReliefLink`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#1c1b1a">
          <h1 style="color:#041920;font-size:26px">Thank you, ${safe.name}.</h1>
          <p style="line-height:1.6">We received your request for support in <strong>${safe.city}</strong>. Our team will review the details and contact you shortly.</p>
          <p style="margin-top:28px">Regards,<br /><strong>ReliefLink</strong></p>
        </div>
      `,
    });

    if (confirmationError) {
      console.error("ReliefLink confirmation email error:", confirmationError);
    }

    return { success: true };
  } catch (error) {
    console.error("ReliefLink server action error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again shortly.",
    };
  }
}
