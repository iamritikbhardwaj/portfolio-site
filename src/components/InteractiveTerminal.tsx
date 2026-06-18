"use client";

import React, { useState, useEffect, useRef } from "react";

const COMMAND_DATA: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  <span class='text-primary'>help</span>        - Display this menu",
    "  <span class='text-primary'>about</span>       - Mission statement & bio",
    "  <span class='text-primary'>stack</span>       - Tech stack inventory",
    "  <span class='text-primary'>projects</span>    - Recent engineering deployments",
    "  <span class='text-primary'>architecture</span>- System design philosophy",
    "  <span class='text-primary'>contact</span>     - Establish communication uplink",
    "  <span class='text-primary'>resume</span>      - Download experience metadata",
    "  <span class='text-primary'>clear</span>       - Wipe terminal buffer",
  ],
  about: [
    "ENTITY: <span class='text-tertiary'>Ritik Singh</span>",
    "STATUS: <span class='text-green-400'>Operational</span>",
    "MISSION: Engineering robust, scalable software solutions with structural integrity and aesthetic precision.",
    "LOCATION: Distributed / Cloud-Native",
    "BIO: Backend Software Engineer focused on high-performance infrastructure, distributed systems, and concurrency.",
  ],
  stack: [
    "TECHNOLOGY INVENTORY:",
    "  Languages: <span class='text-tertiary'>Go (Golang), Node.js, TypeScript, NestJS</span>",
    "  Systems:   <span class='text-tertiary'>REST, gRPC, Event-Driven Arch, Message Queues</span>",
    "  Databases: <span class='text-tertiary'>PostgreSQL, MongoDB, Redis In-Memory Caching</span>",
    "  Infra:     <span class='text-tertiary'>AWS (EC2, S3, IAM, Lambda), Docker, CI/CD</span>",
    "  Workflow:  <span class='text-tertiary'>Cursor, Claude Code, GitHub Actions</span>",
  ],
  projects: [
    "RECENT DEPLOYMENTS:",
    "  1. <span class='text-primary'>CRM_SAAS</span> - Multi-Tenant Platform with Payment Flows",
    "  2. <span class='text-primary'>EMP_SAAS</span> - Enterprise Management Engine",
    "  3. <span class='text-primary'>GORECON</span> - High-Velocity CLI Network Utilities",
    "Type <span class='text-secondary'>help</span> to see available commands or scroll down to explore.",
  ],
  architecture: [
    "SYSTEM DESIGN PHILOSOPHY:",
    "  - <span class='text-primary'>Functional Density:</span> Maximize utility per pixel.",
    "  - <span class='text-primary'>Statelessness:</span> Favor immutable data flows.",
    "  - <span class='text-primary'>Latency Minimization:</span> 100ms threshold for all critical paths.",
    "  - <span class='text-primary'>Observability:</span> Built-in metrics and logging at every layer.",
  ],
  contact: [
    "ESTABLISHING UPLINK...",
    "  Email: <a href='mailto:ritiklrt2@gmail.com' class='underline hover:text-primary transition-colors'>ritiklrt2@gmail.com</a>",
    "  Phone: +91-9119060487",
    "  GitHub: <a href='https://github.com/iamritikbhardwaj' target='_blank' class='underline hover:text-primary transition-colors'>github.com/iamritikbhardwaj</a>",
    "  LinkedIn: <a href='https://linkedin.com/in/ritik-singh' target='_blank' class='underline hover:text-primary transition-colors'>linkedin.com/in/ritik-singh</a>",
    "  Status: <span class='text-green-500'>Available for new architectural consultations.</span>",
    "  Action: Scroll up and click <a href='https://cal.com/ritik-singh-3mjivg' target='_blank' class='text-primary underline'>BOOK_CONSULTATION</a>.",
  ],
  resume: [
    "ACCESSING ARCHIVE...",
    "RESUME_RITIK_SINGH_PDF retrieved.",
    "Executing download protocol... <span class='text-primary'>[SUCCESS]</span>",
    "(Action simulated for this UI demonstration)",
  ],
};

type HistoryEntry = {
  id: number;
  type: "command" | "output" | "error" | "system";
  content: string;
};

export const InteractiveTerminal = React.memo(function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: 1,
      type: "system",
      content:
        "<div class='opacity-70 mb-4'><p>Welcome to Code Crafted Labs Command Interface [Version 2.0.4.88]</p><p>(c) 2024 Systems Architecture Division. All rights reserved.</p><p class='mt-2'>Type <span class='text-primary'>'help'</span> to see available commands.</p></div>",
    },
    {
      id: 2,
      type: "system",
      content:
        "<div class='flex gap-4'><span class='text-outline invisible md:visible'>12:04:12</span><span class='text-primary'>[SYSTEM]</span><span>Initializing kernel modules... OK</span></div>",
    },
    {
      id: 3,
      type: "system",
      content:
        "<div class='flex gap-4'><span class='text-outline invisible md:visible'>12:04:13</span><span class='text-primary'>[SYSTEM]</span><span>Mounting remote project repositories... OK</span></div>",
    },
    {
      id: 4,
      type: "system",
      content:
        "<div class='flex gap-4'><span class='text-outline invisible md:visible'>12:04:13</span><span class='text-primary'>[SYSTEM]</span><span class='text-tertiary'>Warning: Unauthenticated access detected. Protocol \"GUEST\" active.</span></div>",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedCmd = input.trim().toLowerCase();
      setInput("");

      setHistory((prevHistory) => {
        const newHistory: HistoryEntry[] = [
          ...prevHistory,
          {
            id: Date.now(),
            type: "command",
            content: `<div class='flex gap-4 font-bold border-l-2 border-primary pl-4 my-4'><span class='text-secondary'>guest@codecraftedlabs</span><span class='text-primary'>$</span><span>${input}</span></div>`,
          },
        ];

        if (trimmedCmd === "clear") {
          return [];
        }

        if (COMMAND_DATA[trimmedCmd]) {
          const time = new Date().toLocaleTimeString("en-GB");
          COMMAND_DATA[trimmedCmd].forEach((line, index) => {
            newHistory.push({
              id: Date.now() + index + 1,
              type: "output",
              content: `<div class='flex gap-4 animate-in fade-in duration-300'><span class='text-outline invisible md:visible'>${time}</span><span class='flex-grow'>${line}</span></div>`,
            });
          });
        } else if (trimmedCmd !== "") {
          const time = new Date().toLocaleTimeString("en-GB");
          newHistory.push({
            id: Date.now() + 1,
            type: "error",
            content: `<div class='flex gap-4 text-error animate-in fade-in duration-300'><span class='text-outline invisible md:visible'>${time}</span><span>Command not found: ${trimmedCmd}. Type 'help' for available commands.</span></div>`,
          });
        }

        return newHistory;
      });
    }
  }, [input]);

  return (
    <div
      className="relative flex flex-col h-[500px] w-full rounded-lg border border-outline-variant bg-surface-container-lowest overflow-hidden terminal-glow group"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute inset-0 scanline opacity-30 pointer-events-none z-10" />
      <div ref={containerRef} className="flex-grow overflow-y-auto terminal-scroll p-6 font-code-md text-code-md space-y-2 relative z-0">
        {history.map((entry) => (
          <div
            key={entry.id}
            dangerouslySetInnerHTML={{ __html: entry.content }}
          />
        ))}
      </div>

      <div className="border-t border-outline-variant p-4 bg-surface-container-low relative z-20">
        <div className="flex items-center gap-3 font-code-md text-code-md">
          <span className="text-secondary hidden sm:inline">
            guest@codecraftedlabs
          </span>
          <span className="text-primary hidden sm:inline">:</span>
          <span className="text-tertiary hidden sm:inline">~</span>
          <span className="text-primary">$</span>
          <div className="relative flex-grow">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 font-code-md text-code-md text-on-surface"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default InteractiveTerminal;
