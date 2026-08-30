"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "min-h-[44px] bg-surface border border-border-soft p-3 font-mono-code text-text-primary transition-colors focus:border-accent-lime focus:outline-none";

export default function Contact() {
  const phoneRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const smsConsent = formData.get("smsConsent") === "yes";
    const phone = String(formData.get("phone") ?? "").trim();
    const phonePattern = /^\+?[0-9().\-\s]{7,20}$/;

    if (smsConsent && !phonePattern.test(phone)) {
      setStatus("error");
      setFeedback("ENTER_A_VALID_MOBILE_NUMBER_TO_ENABLE_SMS_UPDATES");
      phoneRef.current?.focus();
      return;
    }

    setStatus("submitting");
    setFeedback("ENCRYPTING_AND_RELAYING_TRANSMISSION...");
    const result = await submitContactForm(formData);

    if (!result.success) {
      setStatus("error");
      setFeedback(result.error ?? "TRANSMISSION_FAILED. PLEASE_RETRY.");
      return;
    }

    form.reset();
    setStatus("success");
    setFeedback("TRANSMISSION_RECEIVED. STANDBY_FOR_RESPONSE.");
  }

  return (
    <section id="contact" className="w-full max-w-[800px] mx-auto px-6 md:px-8 py-24">
      <div className="mb-12">
        <span className="font-mono-label text-accent-lime mb-2 block">ESTABLISH_CONNECTION</span>
        <h2 className="font-h1 text-text-primary">Initialize Project</h2>
      </div>

      <div className="bg-elevated border border-border-standard p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div hidden aria-hidden="true">
            <label htmlFor="portfolio-website">Leave this field empty</label>
            <input id="portfolio-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="font-mono-label text-text-muted">NAME *</label>
              <input id="fullName" name="fullName" required autoComplete="name" maxLength={100} type="text" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono-label text-text-muted">EMAIL *</label>
              <input id="email" name="email" required autoComplete="email" maxLength={254} type="email" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-mono-label text-text-muted">MOBILE_NUMBER (OPTIONAL)</label>
              <input ref={phoneRef} id="phone" name="phone" autoComplete="tel" inputMode="tel" maxLength={20} type="tel" placeholder="+1 555 555 0100" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="font-mono-label text-text-muted">COMPANY</label>
              <input id="company" name="company" autoComplete="organization" maxLength={120} type="text" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="projectType" className="font-mono-label text-text-muted">PROJECT_TYPE</label>
              <select id="projectType" name="projectType" defaultValue="Backend engineering" className={`${fieldClass} appearance-none`}>
                <option>Backend engineering</option>
                <option>Cloud architecture</option>
                <option>Full-stack product</option>
                <option>Technical consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="font-mono-label text-text-muted">BUDGET</label>
              <select id="budget" name="budget" defaultValue="Under $5k" className={`${fieldClass} appearance-none`}>
                <option>Under $5k</option>
                <option>$5k–$15k</option>
                <option>$15k+</option>
                <option>Not decided</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono-label text-text-muted">PROJECT_REQUIREMENTS *</label>
            <textarea id="message" name="message" required maxLength={5000} rows={5} className={`${fieldClass} resize-y`}></textarea>
          </div>

          <div className="border border-border-soft bg-secondary-bg p-4">
            <label htmlFor="smsConsent" className="flex cursor-pointer items-start gap-3 text-text-muted">
              <input id="smsConsent" name="smsConsent" value="yes" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent-lime)]" />
              <span className="font-body-md">
                I agree to receive recurring service-related SMS messages from Code Crafted Labs about my inquiry and project updates. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help. Consent is not a condition of purchase. See the{" "}
                <Link href="/sms-terms" className="text-accent-lime underline underline-offset-2">SMS Terms</Link>{" "}
                and{" "}<Link href="/privacy" className="text-accent-lime underline underline-offset-2">Privacy Policy</Link>.
              </span>
            </label>
          </div>

          <button type="submit" disabled={status === "submitting"} className="mt-4 min-h-[48px] w-full bg-text-primary py-4 font-mono-btn text-primary-bg transition-colors hover:bg-text-secondary disabled:cursor-wait disabled:opacity-60">
            {status === "submitting" ? "TRANSMITTING..." : "INITIALIZE_PROJECT"}
          </button>

          <div aria-live="polite" aria-atomic="true" className="min-h-6 font-mono-code text-sm">
            {feedback && (
              <p className={status === "error" ? "text-warning-amber" : status === "success" ? "text-accent-lime" : "text-text-muted"}>
                <span aria-hidden="true">&gt; </span>{feedback}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
