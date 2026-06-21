"use client";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "deploying" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("deploying");
    setLogs(["INITIATING DEPLOYMENT SEQUENCE..."]);
    
    const deploymentSteps = [
      "VERIFYING CREDENTIALS... [OK]",
      "ALLOCATING RESOURCES... [OK]",
      "COMPILING REQUIREMENTS... [OK]",
      "DISPATCHING COMMUNIQUE... [OK]",
      "DEPLOYMENT SUCCESSFUL. STANDBY FOR RESPONSE."
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < deploymentSteps.length) {
        setLogs(prev => [...prev, deploymentSteps[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setStatus("success");
      }
    }, 600);
  };

  return (
    <section id="contact" className="w-full max-w-[800px] mx-auto px-6 md:px-8 py-24">
      <div className="mb-12">
        <span className="font-mono-label text-accent-lime mb-2 block">ESTABLISH_CONNECTION</span>
        <h2 className="font-h1 text-text-primary">Initialize Project</h2>
      </div>

      <div className="bg-elevated border border-border-standard p-8">
        {status === "idle" ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono-label text-text-muted">NAME</label>
                <input id="name" required type="text" className="bg-surface border border-border-soft text-text-primary p-3 font-mono-code focus:border-accent-lime focus:outline-none transition-colors min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono-label text-text-muted">EMAIL</label>
                <input id="email" required type="email" className="bg-surface border border-border-soft text-text-primary p-3 font-mono-code focus:border-accent-lime focus:outline-none transition-colors min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-mono-label text-text-muted">COMPANY</label>
                <input id="company" type="text" className="bg-surface border border-border-soft text-text-primary p-3 font-mono-code focus:border-accent-lime focus:outline-none transition-colors min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="font-mono-label text-text-muted">BUDGET</label>
                <select id="budget" className="bg-surface border border-border-soft text-text-primary p-3 font-mono-code focus:border-accent-lime focus:outline-none transition-colors appearance-none min-h-[44px]">
                  <option>&lt; $5k</option>
                  <option>$5k - $15k</option>
                  <option>$15k+</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="requirements" className="font-mono-label text-text-muted">PROJECT_REQUIREMENTS</label>
              <textarea id="requirements" required rows={4} className="bg-surface border border-border-soft text-text-primary p-3 font-mono-code focus:border-accent-lime focus:outline-none transition-colors resize-none min-h-[44px]"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-text-primary text-primary-bg font-mono-btn hover:bg-text-secondary transition-colors mt-4 min-h-[44px]">
              INITIALIZE_PROJECT
            </button>
          </form>
        ) : (
          <div className="h-[400px] bg-secondary-bg border border-border-soft p-6 font-mono-code text-text-muted overflow-y-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="mb-2">
                <span className="text-accent-lime mr-2">&gt;</span>
                {log}
              </div>
            ))}
            {status !== "success" && (
              <div className="flex items-center mt-2">
                <span className="text-accent-lime mr-2">&gt;</span>
                <span className="w-2 h-4 bg-text-primary cursor-blink inline-block"></span>
              </div>
            )}
            {status === "success" && (
              <div className="mt-8 pt-8 border-t border-border-soft text-center">
                <button onClick={() => setStatus("idle")} className="font-mono-btn text-accent-lime border border-accent-lime px-6 py-2 hover:bg-accent-lime-subtle transition-colors">
                  RESET_TERMINAL
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
