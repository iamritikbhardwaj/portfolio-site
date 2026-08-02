"use client";

import { Check, Download, Share2 } from "lucide-react";
import { useState } from "react";

const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Ritik Singh
N:Singh;Ritik;;;
ORG:Code Crafted Labs
TITLE:Backend Software Engineer
EMAIL;TYPE=INTERNET,WORK:ritiklrt2@gmail.com
URL:https://codecraftedlabs.co.in/card
URL;TYPE=LinkedIn:https://www.linkedin.com/in/ritik-singh-10b333227/
URL;TYPE=GitHub:https://github.com/iamritikbhardwaj
ADR;TYPE=WORK:;;;Gurugram;Haryana;;India
NOTE:Backend, microservices and cloud engineering with Go, Node.js, TypeScript and AWS.
END:VCARD`;

export default function CardActions() {
  const [copied, setCopied] = useState(false);

  const downloadVCard = () => {
    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ritik-singh.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const shareCard = async () => {
    const shareData = {
      title: "Ritik Singh - Backend Software Engineer",
      text: "Backend, microservices and cloud engineering by Ritik Singh.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={downloadVCard}
        className="min-h-12 inline-flex items-center justify-center gap-2 bg-text-primary px-4 py-3 font-mono-btn text-primary-bg transition-colors hover:bg-accent-lime cursor-pointer"
      >
        <Download aria-hidden="true" className="size-4" />
        SAVE CONTACT
      </button>
      <button
        type="button"
        onClick={shareCard}
        className="min-h-12 inline-flex items-center justify-center gap-2 border border-border-standard bg-surface px-4 py-3 font-mono-btn text-text-primary transition-colors hover:border-accent-lime hover:text-accent-lime cursor-pointer"
      >
        {copied ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <Share2 aria-hidden="true" className="size-4" />
        )}
        {copied ? "LINK COPIED" : "SHARE CARD"}
      </button>
    </div>
  );
}
