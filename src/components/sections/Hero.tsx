import React from "react";
import TerminalLazyWrapper from "../terminal/TerminalLazyWrapper";

export default function Hero() {

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 flex flex-col md:flex-row items-center gap-12 mt-16 border-b border-border-standard">
      <div className="w-full md:w-1/2 flex flex-col items-start z-10">
        <div className="flex items-center gap-2 mb-8 px-3 py-1 rounded-pill border border-border-soft bg-surface">
          <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
          <span className="font-mono-label text-text-muted">AVAILABLE FOR Q3 PROJECTS</span>
        </div>
        
        <h1 className="font-h1 text-text-primary mb-6">
          I build backend systems that survive scale.
        </h1>
        
        <p className="font-body-md text-text-secondary mb-10 max-w-md">
          Distributed systems, cloud infrastructure, and high-performance APIs for startups shipping fast.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="font-mono-btn bg-text-primary text-primary-bg px-6 py-3 rounded-sm hover:bg-text-secondary transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
          >
            VIEW WORK
          </a>
          <a
            href="https://cal.com/ritik-singh-3mjivg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-btn bg-surface border border-border-standard text-text-primary px-6 py-3 rounded-sm hover:bg-elevated transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
          >
            BOOK CALL
          </a>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-1/2 h-[320px]">
        <TerminalLazyWrapper />
      </div>
    </section>
  );
}
