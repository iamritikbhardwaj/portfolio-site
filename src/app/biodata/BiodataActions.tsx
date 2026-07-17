"use client";

import { Download, Share2 } from "lucide-react";

export default function BiodataActions() {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Marriage Biodata - Ritik Singh",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="flex gap-2 print:hidden">
      <button
        onClick={handlePrint}
        className="flex items-center justify-center rounded-lg h-9 bg-gray-100 dark:bg-white/10 text-[#181511] dark:text-white hover:bg-amber-600/20 dark:hover:bg-amber-500/20 transition-colors gap-2 text-sm font-bold px-4 cursor-pointer"
      >
        <Download className="w-5 h-5" />
        <span className="hidden sm:inline">Download PDF</span>
      </button>
      <button
        onClick={handleShare}
        className="flex items-center justify-center rounded-lg h-9 bg-gray-100 dark:bg-white/10 text-[#181511] dark:text-white hover:bg-amber-600/20 dark:hover:bg-amber-500/20 transition-colors gap-2 text-sm font-bold px-4 cursor-pointer"
      >
        <Share2 className="w-5 h-5" />
        <span className="hidden sm:inline">Share</span>
      </button>
    </div>
  );
}
