"use client";

import React, { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setError(result.error || "An error occurred");
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="p-8 border border-primary bg-primary/10 text-center rounded-lg terminal-glow">
        <h4 className="font-code-md text-primary mb-2 text-xl">TRANSMISSION_SUCCESSFUL</h4>
        <p className="font-body-sm text-on-surface-variant">Your project inquiry has been securely stored and relayed. I will review the payload and respond shortly.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-6 border border-outline-variant bg-surface px-6 py-2 font-label-caps text-[11px] hover:bg-surface-container transition-bezier uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          INITIATE_NEW_TRANSMISSION
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="p-4 border border-error bg-error/10 text-error font-code-md text-sm">
          [ERROR]: {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-caps text-[11px] text-on-surface-variant uppercase">Full_Name</label>
          <input name="fullName" required className="w-full bg-surface-container border border-outline-variant focus:border-primary text-on-surface px-4 py-3 outline-none transition-bezier focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" placeholder="e.g. Satoshi Nakamoto" type="text" />
        </div>
        <div className="space-y-2">
          <label className="font-label-caps text-[11px] text-on-surface-variant uppercase">Email_Endpoint</label>
          <input name="email" required className="w-full bg-surface-container border border-outline-variant focus:border-primary text-on-surface px-4 py-3 outline-none transition-bezier focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" placeholder="user@domain.com" type="email" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-caps text-[11px] text-on-surface-variant uppercase">Project_Type</label>
          <select name="projectType" className="w-full bg-surface-container border border-outline-variant focus:border-primary text-on-surface px-4 py-3 outline-none transition-bezier appearance-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            <option value="API_INFRASTRUCTURE">API_INFRASTRUCTURE</option>
            <option value="CLOUD_MIGRATION">CLOUD_MIGRATION</option>
            <option value="MICROSERVICES">MICROSERVICES</option>
            <option value="FULL_STACK_BUILD">FULL_STACK_BUILD</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-label-caps text-[11px] text-on-surface-variant uppercase">Allocated_Budget</label>
          <select name="budget" className="w-full bg-surface-container border border-outline-variant focus:border-primary text-on-surface px-4 py-3 outline-none transition-bezier appearance-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            <option value="< $1,000">&lt; $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $15,000">$5,000 - $15,000</option>
            <option value="$15,000+">$15,000+</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-caps text-[11px] text-on-surface-variant uppercase">Message_Payload</label>
        <textarea name="message" required className="w-full bg-surface-container border border-outline-variant focus:border-primary text-on-surface px-4 py-3 outline-none transition-bezier focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" placeholder="Describe the technical challenges and current stack..." rows={5}></textarea>
      </div>
      <button disabled={loading} className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps tracking-widest hover:brightness-110 transition-bezier uppercase disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-on-primary focus-visible:outline-offset-2" type="submit">
        {loading ? "TRANSMITTING..." : "SEND_TRANSMISSION"}
      </button>
    </form>
  );
}
