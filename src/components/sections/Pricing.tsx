import React from "react";

const models = [
  {
    id: "SPRINT_BUILD",
    title: "Core Infrastructure Sprint",
    desc: "Rapid MVP backend development. Essential API layer, User management, and DB schema design. Focus on fast time-to-market.",
    pricing: "Starting at $4k",
    cta: "INITIALIZE"
  },
  {
    id: "FRACTIONAL_LEAD",
    title: "Fractional Backend Lead",
    desc: "Scale architecture and team mentorship. Full microservice migration, complex state machines, and system observability. Ongoing partnership.",
    pricing: "Custom retainers",
    cta: "INITIALIZE",
    highlight: true
  },
  {
    id: "SYSTEM_ARCH",
    title: "Embedded Ecosystem",
    desc: "Dedicated engineering for enterprise needs. Multi-region redundancy, high-compliance security audits, and legacy refactoring.",
    pricing: "Project-based",
    cta: "CONTACT_SALES"
  }
];

export default function Pricing() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-b border-border-standard">
      <div className="mb-16 text-center">
        <h2 className="font-h1 text-text-primary mb-4">Engagement Models</h2>
        <p className="font-mono-label text-text-muted">SELECT DEPLOYMENT TARGET</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model, idx) => (
          <div key={idx} className={`p-8 border flex flex-col ${model.highlight ? 'border-accent-lime bg-accent-lime-subtle' : 'border-border-standard bg-elevated'}`}>
            <span className="font-mono-label text-text-muted mb-8">{model.id}</span>
            <h3 className="font-h1 text-[20px] text-text-primary mb-4 leading-tight">{model.title}</h3>
            <p className="font-body-md text-text-secondary mb-8 flex-grow">{model.desc}</p>
            
            <div className="pt-8 border-t border-border-soft mt-auto">
              <div className="font-mono-btn text-text-primary mb-4">{model.pricing}</div>
              <a
                href="#contact"
                className={`block text-center w-full py-4 font-mono-btn transition-colors ${
                  model.highlight 
                    ? 'bg-accent-lime text-black hover:bg-text-primary' 
                    : 'bg-surface border border-border-standard text-text-primary hover:bg-border-standard'
                }`}
              >
                {model.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
