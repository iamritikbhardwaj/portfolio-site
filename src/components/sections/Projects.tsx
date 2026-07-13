import React from "react";

const projects = [
  {
    id: "CASE_STUDY_01",
    title: "Network Monitoring System (NMS)",
    problem:
      "High-frequency telemetry ingestion causing write bottlenecks and delayed alerting over time-series data collections.",
    solution:
      "Built an ingestion middleware layer in Go to batch-process metrics captured via Telegraf streams into a hyper-optimized TimescaleDB cluster, relying on parallel cron jobs for threshold validations.",
    outcome:
      "Achieved continuous real-time data streaming and ingestion with zero data point dropping, enabling immediate asynchronous hardware anomaly alerting.",
    metrics: [
      { label: "TELEMETRY", value: "REAL-TIME" },
      { label: "DB_ENGINE", value: "TIMESCALE" },
    ],
    tags: ["GO", "TIMESCALEDB", "TELEGRAF", "CRON"],
    visual: (
      <div className="w-full h-48 bg-secondary-bg border border-border-soft flex items-center justify-center p-4">
        <div className="flex flex-col gap-2 font-mono-code text-[12px] text-text-muted w-full max-w-[300px]">
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">
              [TELEMETRY_STREAM]
            </span>
            <span className="text-accent-lime">TELEGRAF</span>
          </div>
          <div className="text-center">↓</div>
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">
              [GO_MIDDLEWARE]
            </span>
            <span className="text-accent-lime">BATCH_OK</span>
          </div>
          <div className="text-center">↓</div>
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">
              [TIMESCALE_CLUSTER]
            </span>
            <span className="text-warning-amber">CRON_EVAL</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "CASE_STUDY_02",
    title: "Multi-Tenant Compliance SaaS",
    problem:
      "Operational overhead, data integrity leaks, and backend request blockages when processing large-scale batched contractor calculations manually.",
    solution:
      "Architected a decentralized multi-tenant infrastructure with strict multi-schema data isolation policies in PostgreSQL and embedded an asynchronous Redis memory caching layer to hold session states.",
    outcome:
      "Boosted backend analytical dashboard query processing loops by 30% while enforcing full multi-tenant data boundary security.",
    metrics: [
      { label: "DASHBOARD_QUERY", value: "+30% SPEED" },
      { label: "ISOLATION", value: "SCHEMA-LEVEL" },
    ],
    tags: ["NODE.JS", "POSTGRESQL", "REDIS", "DATA_PIPELINES"],
    visual: (
      <div className="w-full h-48 bg-secondary-bg border border-border-soft flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-2 font-mono-code text-[12px] text-text-muted w-full max-w-[300px]">
          <div className="col-span-2 text-center mb-2">
            [TENANT_ISOLATION_ROUTER]
          </div>
          <div className="bg-elevated p-2 border border-accent-lime text-center truncate">
            SCHEMA_JK_TYRES
          </div>
          <div className="bg-elevated p-2 border border-border-standard text-center truncate">
            REDIS_CACHE_STATE
          </div>
          <div className="bg-elevated p-2 border border-warning-amber text-center truncate">
            ASYNC_PIPELINE
          </div>
          <div className="bg-elevated p-2 border border-border-standard text-center truncate">
            BATCH_OK (200)
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "CASE_STUDY_03",
    title: "AI-Intern Orchestration Engine",
    problem:
      "High latency spikes, unstructured outputs, and unoptimized API token burn rates when processing complex automated developer tasks via LLMs.",
    solution:
      "Designed a deterministic backend workflow engine in NestJS/TypeScript utilizing Redis semantic caching layers for fast lookups. Built rigid prompt serialization schemas and an event-driven system logic to pipe structured model completions.",
    outcome:
      "Successfully accelerated automated execution loops, enforced reliable payload parsing, and cut system orchestration latency.",
    metrics: [
      { label: "LATENCY_REDUCTION", value: "OPTIMIZED" },
      { label: "COMPLETION", value: "STRUCTURED" },
    ],
    tags: ["NESTJS", "TYPESCRIPT", "REDIS", "LLM_ORCHESTRATION"],
    visual: (
      <div className="w-full h-48 bg-secondary-bg border border-border-soft flex items-center justify-center p-4">
        <div className="flex flex-col gap-2 font-mono-code text-[12px] text-text-muted w-full max-w-[300px]">
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">
              [PROMPT_PIPELINE]
            </span>
            <span className="text-accent-lime">SERIALIZED</span>
          </div>
          <div className="text-center">↓</div>
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">
              [REDIS_SEMANTIC_CACHE]
            </span>
            <span className="text-accent-lime">HIT_200</span>
          </div>
          <div className="text-center">↓</div>
          <div className="flex flex-wrap gap-1 justify-between items-center bg-elevated p-2 border border-border-standard">
            <span className="truncate max-w-[150px] sm:max-w-none">
              [STRUCT_OUTPUT_ENGINE]
            </span>
            <span className="text-accent-lime">VALIDATED</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "CASE_STUDY_04",
    title: "Microservices Travel DMC Platform",
    problem:
      "Maintaining tight loose-coupling boundaries, proper role-based validation, and clean data routing across segmented booking domains.",
    solution:
      "Architected an isolated multi-service ecosystem separating User Service, Admin control, and a central Channel Manager from standalone Activities, Transfers, and Hotels service dependencies interacting across PostgreSQL and MongoDB nodes. Integrated multi-supplier data logic strictly across Booking.com, GlobalTix, and iWay endpoints.",
    outcome:
      "Achieved modular service independence, enforced strong data boundary verification steps, and preserved high operational availability.",
    metrics: [
      { label: "ARCHITECTURE", value: "LOOSELY_COUPLED" },
      { label: "DATABASES", value: "POLYGLOT (PG/MONGO)" },
    ],
    tags: ["NODE.JS", "GO", "MICROSERVICES", "MOBI_DMC"],
    visual: (
      <div className="w-full h-48 bg-secondary-bg border border-border-soft flex items-center justify-center p-3">
        <div className="flex flex-col gap-1 font-mono-code text-[10px] text-text-muted w-full max-w-[320px]">
          <div className="grid grid-cols-2 gap-1 text-center">
            <div className="bg-elevated p-1 border border-border-standard">
              [User Service]
            </div>
            <div className="bg-elevated p-1 border border-border-standard">
              [Admin Service]
            </div>
          </div>
          <div className="text-center">↓</div>
          <div className="text-center bg-elevated p-1 border border-border-standard">
            [Channel Manager]
          </div>
          <div className="text-center">↓</div>
          <div className="grid grid-cols-3 gap-1 text-center text-[9px]">
            <div className="bg-elevated p-1 border border-accent-lime truncate">
              Hotels
              <br />
              (Booking.com)
            </div>
            <div className="bg-elevated p-1 border border-accent-lime truncate">
              Activities
              <br />
              (GlobalTix)
            </div>
            <div className="bg-elevated p-1 border border-accent-lime truncate">
              Transfers
              <br />
              (iWay)
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "CASE_STUDY_05",
    title: "High-Concurrency Flight Aggregator Engine",
    problem:
      "Runtime response distortion, extreme data coupling, and structural latency anomalies when consolidating variant global distribution streams.",
    solution:
      "Designed a centralized service Orchestrator layer utilizing the Strategy Design Pattern in Go to isolate distinct, injected transformation maps for downstream payload requests running concurrently across GoKyte, Duffel, and PKFare engines.",
    outcome:
      "Locked down flight search transactional integrity, minimized processing friction, and fully decoupled multi-vendor fallback mapping routes.",
    metrics: [
      { label: "PATTERN", value: "STRATEGY_ORCHESTRATOR" },
      { label: "EXECUTION", value: "HIGH-CONCURRENCY" },
    ],
    tags: ["GO", "FLIGHT_SCANNER", "STRATEGY_PATTERN", "ORCHESTRATOR"],
    visual: (
      <div className="w-full h-48 bg-secondary-bg border border-border-soft flex items-center justify-center p-4">
        <div className="flex flex-col gap-2 font-mono-code text-[12px] text-text-muted w-full max-w-[300px]">
          <div className="text-center bg-elevated p-1 border border-border-standard">
            [FLIGHT_ORCHESTRATOR_CORE]
          </div>
          <div className="text-center">↓ (Dynamic Strategy Selector)</div>
          <div className="flex gap-1 justify-between bg-elevated p-2 border border-warning-amber text-[10px]">
            <span>[Strategy: GoKyte]</span>
            <span>[Strategy: Duffel]</span>
            <span>[Strategy: PKFare]</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-b border-border-standard"
    >
      <div className="mb-16">
        <h2 className="font-mono-label text-accent-lime mb-2">SYSTEM_OUTPUT</h2>
        <h3 className="font-h1 text-text-primary">
          Architectural Case Studies
        </h3>
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-8 border border-border-soft bg-surface p-8"
          >
            <div className="w-full md:w-1/2 flex flex-col">
              <span className="font-mono-label text-text-muted mb-4">
                {project.id}
              </span>
              <h3 className="font-h1 text-text-primary text-[24px] mb-6 leading-tight">
                {project.title}
              </h3>

              <div className="space-y-4 mb-8 text-[14px]">
                <div>
                  <span className="font-mono-label text-text-disabled block mb-1">
                    PROBLEM:
                  </span>
                  <p className="font-body-md text-text-secondary">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="font-mono-label text-text-disabled block mb-1">
                    SOLUTION:
                  </span>
                  <p className="font-body-md text-text-secondary">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <span className="font-mono-label text-text-disabled block mb-1">
                    OUTCOME:
                  </span>
                  <p className="font-body-md text-text-primary">
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="px-2 py-1 bg-elevated border border-border-standard font-mono-label text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-8 border-t border-border-soft pt-4">
                  {project.metrics.map((metric, midx) => (
                    <div key={midx}>
                      <span className="font-mono-label text-text-disabled block">
                        {metric.label}
                      </span>
                      <span className="font-mono-btn text-accent-lime">
                        {metric.value}
                      </span>
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
