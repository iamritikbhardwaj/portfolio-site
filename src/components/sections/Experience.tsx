import React from "react";

const commits = [
  {
    date: "2025 — PRESENT",
    message: "feat: scaled distributed backend infra",
    role: "Backend Software Engineer",
    company: "Patch Infotech.",
    details: [
      "Reduced API latency by 35% through query optimization",
      "Architected event-driven microservices with Kafka",
      "Improved deployment reliability via strict CI/CD pipelines"
    ]
  },
  {
    date: "2023 — 2025",
    message: "refactor: monolithic migration to microservices",
    role: "Software Developer",
    company: "Infodia Technologies.",
    details: [
      "Maintained 99.9% uptime SLA during peak loads",
      "Reduced deployment time by 80% via Docker/K8s",
      "Implemented full-stack observability with OpenTelemetry"
    ]
  }
];

export default function Experience() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-b border-border-standard">
      <h2 className="font-mono-label text-accent-lime mb-12 text-center uppercase">CAREER_MILESTONES // git log</h2>
      
      <div className="max-w-3xl mx-auto relative pl-8 border-l border-border-standard">
        {commits.map((commit, idx) => (
          <div key={idx} className="mb-12 relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-accent-lime"></div>
            
            <div className="flex flex-col gap-2">
              <span className="font-mono-label text-text-muted">{commit.date}</span>
              <span className="font-mono-code text-accent-lime">{commit.message}</span>
              
              <div className="mt-4 bg-elevated border border-border-soft p-6 rounded-sm">
                <h3 className="font-h1 text-[18px] text-text-primary mb-1 leading-tight">{commit.role}</h3>
                <p className="font-mono-label text-text-disabled mb-4">{commit.company}</p>
                <ul className="list-none space-y-2 font-body-md text-text-secondary">
                  {commit.details.map((detail, didx) => (
                    <li key={didx} className="flex items-start gap-2">
                      <span className="text-border-standard mt-[2px]">-</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute -left-[37px] bottom-0 w-4 h-4 rounded-full bg-surface border-2 border-border-standard"></div>
      </div>
    </section>
  );
}
