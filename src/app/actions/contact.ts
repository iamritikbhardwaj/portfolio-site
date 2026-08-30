"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Code Crafted Labs <ritik@codecraftedlabs.co.in>";
const INQUIRY_EMAIL = "ritiklrt2@gmail.com";
const CONSENT_VERSION = "2026-08-30";
const CONSENT_SOURCE = "https://codecraftedlabs.co.in/#contact";

function value(formData: FormData, key: string, maxLength: number) {
  return String(formData.get(key) ?? "").trim().slice(0, maxLength);
}

export async function submitContactForm(formData: FormData) {
  try {
    const fullName = value(formData, "fullName", 100);
    const email = value(formData, "email", 254).toLowerCase();
    const phone = value(formData, "phone", 20);
    const company = value(formData, "company", 120);
    const projectType = value(formData, "projectType", 80);
    const budget = value(formData, "budget", 50);
    const message = value(formData, "message", 5000);
    const website = value(formData, "website", 200);
    const smsConsent = formData.get("smsConsent") === "yes";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9().\-\s]{7,20}$/;

    if (website) {
      return { success: true };
    }

    if (!fullName || !emailPattern.test(email) || !message) {
      return { success: false, error: "CHECK_REQUIRED_FIELDS_AND_RETRY." };
    }

    if (smsConsent && !phonePattern.test(phone)) {
      return { success: false, error: "A_VALID_MOBILE_NUMBER_IS_REQUIRED_FOR_SMS_OPT_IN." };
    }

    const submittedAt = new Date().toISOString();
    const consentRecord = smsConsent
      ? `YES — disclosure version ${CONSENT_VERSION}; source ${CONSENT_SOURCE}; submitted ${submittedAt}`
      : "NO — no SMS permission granted";

    const { error: inquiryError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [INQUIRY_EMAIL],
      replyTo: email,
      subject: `[SYSTEM_ALERT] New Project Inquiry: ${fullName}`,
      text: [
        "=== NEW TRANSMISSION RECEIVED ===",
        `Sender: ${fullName}`,
        `Email: ${email}`,
        `Mobile: ${phone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        `Project Type: ${projectType || "Not specified"}`,
        `Budget: ${budget || "Not specified"}`,
        `SMS consent: ${consentRecord}`,
        "",
        "=== MESSAGE PAYLOAD ===",
        message,
      ].join("\n"),
    });

    if (inquiryError) {
      console.error("Resend inquiry error:", inquiryError.name);
      return { success: false, error: "TRANSMISSION_RELAY_FAILED. PLEASE_RETRY." };
    }

    const { error: confirmationError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "Transmission Received - Code Crafted Labs",
      text: [
        `Hello ${fullName},`,
        "",
        "Your project inquiry has been securely relayed to Code Crafted Labs. I will review it and respond shortly.",
        smsConsent
          ? `You also opted in to service-related SMS updates at ${phone}. Message frequency varies; message and data rates may apply. Reply STOP to unsubscribe or HELP for help.`
          : "You did not opt in to SMS updates.",
        "",
        "Thank you,",
        "Ritik Singh",
        "Code Crafted Labs",
      ].join("\n"),
    });

    if (confirmationError) {
      console.error("Resend confirmation error:", confirmationError.name);
    }

    return { success: true };
  } catch (error) {
    console.error("Contact action failed:", error instanceof Error ? error.name : "Unknown error");
    return { success: false, error: "UNEXPECTED_TRANSMISSION_ERROR. PLEASE_RETRY." };
  }
}
