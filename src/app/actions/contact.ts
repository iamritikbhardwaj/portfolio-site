"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Code Crafted Labs <ritik@codecraftedlabs.co.in>"; // Ideally replace with your verified custom domain

export async function submitContactForm(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const projectType = formData.get("projectType") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;

    if (!fullName || !email || !message) {
      return { success: false, error: "Missing required fields" };
    }

    // 1. Send the inquiry payload to Ritik
    const { error: inquiryError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ["ritiklrt2@gmail.com"],
      subject: `[SYSTEM_ALERT] New Project Inquiry: ${fullName}`,
      text: `
        === NEW TRANSMISSION RECEIVED ===
        Sender: ${fullName}
        Endpoint: ${email}
        Project Type: ${projectType}
        Budget: ${budget}
        
        === MESSAGE PAYLOAD ===
        ${message}
      `,
    });

    if (inquiryError) {
      console.error("Resend Inquiry Error:", inquiryError);
      return {
        success: false,
        error: "Failed to relay transmission to the system admin.",
      };
    }

    // 2. Send the confirmation receipt to the user
    const { error: confirmationError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "Transmission Received - Code Crafted Labs",
      text: `
        Hello ${fullName},

        Your transmission has been securely relayed to Code Crafted Labs.
        I will review your project details (${projectType}) and budget (${budget}) and respond shortly.

        Thank you,
        Ritik Singh
        Backend Software Engineer
      `,
    });

    if (confirmationError) {
      console.error("Resend Confirmation Error:", confirmationError);
      // We don't necessarily fail the whole action if the confirmation email fails,
      // but we could log it.
    }

    return { success: true };
  } catch (err) {
    console.error("Server Action Error:", err);
    return {
      success: false,
      error: "An unexpected error occurred during transmission.",
    };
  }
}
