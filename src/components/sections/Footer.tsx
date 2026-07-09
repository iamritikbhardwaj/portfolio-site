import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-bg border-t border-border-standard pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <div className="font-mono-label text-text-primary text-[12px] mb-2 tracking-widest">
            CODE_CRAFTED_LABS
          </div>
          <p className="font-body-md text-text-muted max-w-sm mb-6">
            Elite backend engineering.
          </p>
          <div className="flex items-center gap-2 px-3 py-1 bg-elevated border border-border-soft w-fit rounded-pill">
            <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
            <span className="font-mono-label text-text-muted">
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <span className="font-mono-label text-text-disabled mb-2">
              RESOURCES
            </span>
            <a
              href="https://www.upwork.com/freelancers/~01c95e7b8432cf26b1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-link text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] inline-flex items-center py-2"
            >
              UPWORK
            </a>

            <a
              href="https://github.com/iamritikbhardwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-link text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] inline-flex items-center py-2"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/ritik-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-link text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] inline-flex items-center py-2"
            >
              LINKEDIN
            </a>
            <a
              href="https://cal.com/ritik-singh-3mjivg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-link text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px] inline-flex items-center py-2"
            >
              CONSULTATION
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 border-t border-border-soft pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono-code text-[12px] text-text-disabled">
          © {new Date().getFullYear()} RITIK SINGH // SYSTEM_v3.0.0
        </span>
        <span className="font-mono-code text-[12px] text-text-disabled">
          latency: 24ms
        </span>
      </div>
    </footer>
  );
}
