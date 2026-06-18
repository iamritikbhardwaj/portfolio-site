"use client";

import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email address"
      className="group relative flex flex-col p-6 rounded-xl bg-card-dark border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,19,236,0.25)] hover:border-primary cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/5 rounded-lg text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
          <span className="material-symbols-outlined text-[32px] flex items-center justify-center" aria-hidden="true">
            <Mail className="w-8 h-8" />
          </span>
        </div>
        <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right w-5 h-5"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </span>
      </div>
      <h4 className="text-white text-xl font-bold mb-1">Email</h4>
      <p className="text-[#a492c9] text-sm mb-4">
        {copied ? "Copied to clipboard!" : "ritik@codecraftedlabs.co.in"}
      </p>
      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-gray-300 text-sm">Drop a line</span>
        {copied ? (
          <CheckCircle className="w-4 h-4 text-accent-cyan" />
        ) : (
          <span className="text-xs font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            Copy
          </span>
        )}
      </div>
    </button>
  );
}
