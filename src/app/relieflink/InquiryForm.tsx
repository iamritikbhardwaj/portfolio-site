"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { submitReliefLinkInquiry } from "./actions";
import styles from "./relieflink.module.css";

type FormStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,18}$/;

export default function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const phone = String(formData.get("phone") ?? "").trim();

    if (!phonePattern.test(phone)) {
      setStatus({
        type: "error",
        message: "Please enter a valid phone number, including the country code.",
      });
      const phoneInput = form.elements.namedItem("phone");
      if (phoneInput instanceof HTMLInputElement) phoneInput.focus();
      return;
    }

    setStatus({ type: "loading" });
    const result = await submitReliefLinkInquiry(formData);

    if (result.success) {
      form.reset();
      setStatus({
        type: "success",
        message: "Your inquiry is on its way. We’ll contact you shortly.",
      });
      return;
    }

    setStatus({
      type: "error",
      message: result.error ?? "We could not send your inquiry. Please try again.",
    });
  }

  const isLoading = status.type === "loading";

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="relief-name">Full name</label>
          <input id="relief-name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" required minLength={2} maxLength={100} />
        </div>
        <div className={styles.field}>
          <label htmlFor="relief-email">Email address</label>
          <input id="relief-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="jane@example.com" required maxLength={254} />
        </div>
        <div className={styles.field}>
          <label htmlFor="relief-phone">Phone number</label>
          <input id="relief-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" required minLength={8} maxLength={30} />
        </div>
        <div className={styles.field}>
          <label htmlFor="relief-city">City or location in India</label>
          <input id="relief-city" name="city" type="text" autoComplete="address-level2" placeholder="e.g. Bengaluru, Mumbai" required minLength={2} maxLength={120} />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="relief-details">Errand details</label>
        <textarea id="relief-details" name="details" rows={5} placeholder="Tell us what your parent needs, preferred timing, and anything our care professional should know." required minLength={10} maxLength={3000} />
        <span className={styles.fieldHint}>Please avoid sharing medical records or sensitive financial information.</span>
      </div>

      {status.type === "success" && (
        <div className={`${styles.formNotice} ${styles.formSuccess}`} role="status">
          <CheckCircle2 aria-hidden="true" size={20} />{status.message}
        </div>
      )}
      {status.type === "error" && (
        <div className={`${styles.formNotice} ${styles.formError}`} role="alert">{status.message}</div>
      )}

      <button className={`${styles.button} ${styles.formSubmit}`} type="submit" disabled={isLoading}>
        {isLoading ? <LoaderCircle aria-hidden="true" size={19} className={styles.spinner} /> : <Send aria-hidden="true" size={18} />}
        {isLoading ? "Sending inquiry…" : "Send inquiry"}
      </button>
    </form>
  );
}
