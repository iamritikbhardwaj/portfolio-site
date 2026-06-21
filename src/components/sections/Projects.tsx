import React from "react";

const projects = [
  {
    id: "CASE_STUDY_01",
    title: "High-Concurrency Payment Engine",
    problem: "Payment bottlenecks and dropped transactions during sudden traffic spikes under legacy monolithic architecture.",
    solution: "Implemented a distributed, queue-based processing system utilizing Kafka for event streaming and Redis for state locks. Decoupled the ledger from the main API.",
    outcome: "72% reduction in transaction failures. Latency stabilized to <45ms P99 even during peak load events.",
    metrics: [
      { label: "THROUGHPUT", value: "10k TPS" },
      { label: "LATENCY", value: "45ms P99" }
    ],
    tags: ["GO", "KAFKA", "REDIS", "POSTGRESQL"],
    visual: (
      <div className="w-full h-48 bg-secondary-bg border border-border-soft flex items-center justify-center p-4">
        <div className="flex flex-col gap-2 font-mono-code text-[12px] text-text-muted w-full max-w-[300px]">
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">[API_GATEWAY]</span>
            <span className="text-accent-lime">10k TPS</span>
          </div>
          <div className="text-center">↓</div>
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">[KAFKA_TOPIC]</span>
            <span className="text-accent-lime">OK</span>
          </div>
          <div className="text-center">↓</div>
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">[LEDGER_WORKER]</span>
            <span className="text-warning-amber">LOCKED</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "CASE_STUDY_02",
    title: "Multi-Tenant Resource Scheduler",
    problem: "Inefficient hardware utilization and noisy neighbor issues in a multi-tenant SaaS environment.",
    solution: "Architected a decentralized scheduling engine utilizing Go coroutines and a custom greedy resource allocation algorithm to bin-pack workloads.",
    outcome: "Increased hardware utilization by 40% while strictly isolating tenant workloads. Eliminated P99 latency spikes for premium tenants.",
    metrics: [
      { label: "UTILIZATION", value: "+40%" },
      { label: "ISOLATION", value: "Strict" }
    ],
    tags: ["GO", "DOCKER", "GRPC", "ETCD"],
    visual: (
      <div className="w-full h-48 bg-secondary-bg border border-border-soft flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-2 font-mono-code text-[12px] text-text-muted w-full max-w-[300px]">
          <div className="col-span-2 text-center mb-2">NODE_CLUSTER_01</div>
          <div className="bg-elevated p-2 border border-accent-lime">TENANT_A (80%)</div>
          <div className="bg-elevated p-2 border border-border-standard">TENANT_B (20%)</div>
          <div className="bg-elevated p-2 border border-warning-amber">TENANT_C (95%)</div>
          <div className="bg-elevated p-2 border border-border-standard">TENANT_D (15%)</div>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-b border-border-standard">
      <div className="mb-16">
        <h2 className="font-mono-label text-accent-lime mb-2">SYSTEM_OUTPUT</h2>
        <h3 className="font-h1 text-text-primary">Architectural Case Studies</h3>
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 border border-border-soft bg-surface p-8">
            <div className="w-full md:w-1/2 flex flex-col">
              <span className="font-mono-label text-text-muted mb-4">{project.id}</span>
              <h3 className="font-h1 text-text-primary text-[24px] mb-6 leading-tight">{project.title}</h3>
              
              <div className="space-y-4 mb-8 text-[14px]">
                <div>
                  <span className="font-mono-label text-text-disabled block mb-1">PROBLEM:</span>
                  <p className="font-body-md text-text-secondary">{project.problem}</p>
                </div>
                <div>
                  <span className="font-mono-label text-text-disabled block mb-1">SOLUTION:</span>
                  <p className="font-body-md text-text-secondary">{project.solution}</p>
                </div>
                <div>
                  <span className="font-mono-label text-text-disabled block mb-1">OUTCOME:</span>
                  <p className="font-body-md text-text-primary">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="px-2 py-1 bg-elevated border border-border-standard font-mono-label text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-8 border-t border-border-soft pt-4">
                  {project.metrics.map((metric, midx) => (
                    <div key={midx}>
                      <span className="font-mono-label text-text-disabled block">{metric.label}</span>
                      <span className="font-mono-btn text-accent-lime">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              {project.visual}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
