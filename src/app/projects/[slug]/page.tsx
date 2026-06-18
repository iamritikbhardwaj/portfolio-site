import React from "react";
import Image from "next/image";
import Header from "@/components/header";

// Mock database of project data
const projectsData = {
  "crm-saas": {
    title: "CRM SaaS Platform with Transactional Payment Flows",
    client: "SaaS Enterprise",
    role: "Backend Software Engineer",
    timeline: "2024",
    status: "STABLE_PRODUCTION",
    overview: "Engineered high-performance multi-tenant platform infrastructure written in Go and TypeScript capable of supporting concurrent real-time actions for 1,000+ active users.",
    problem: "Legacy monolithic architecture failed to scale horizontally during peak loads, resulting in cascading failures across downstream services. Thread contention in the primary message broker and lack of backpressure mechanisms.",
    constraints: [
      { label: "MAX_LATENCY", value: "50ms" },
      { label: "THROUGHPUT", value: "125k req/s" },
      { label: "AVAILABILITY", value: "99.99%" }
    ],
    performance: [
      { label: "P99_LATENCY", value: "12ms", sub: "Average reduction of 84% from previous architecture benchmarks." },
      { label: "CPU_EFFICIENCY", value: "+40%", sub: "Optimized resource utilization via Rust-based sidecars." },
      { label: "ERROR_RATE", value: "0.001%", sub: "Exceptional reliability achieved through circuit-breaker patterns." }
    ]
  },
  "emp-saas": {
    title: "emp-saas - Multi-Tenant Enterprise Management Engine",
    client: "B2B SaaS",
    role: "Backend Software Engineer",
    timeline: "2024",
    status: "SCALED",
    overview: "Architected a scalable, developer-first multi-tenant cloud engine centered on decentralized resource scheduling and custom event orchestration routines.",
    problem: "Ensuring predictable execution under simulated high-throughput message stress across complex containerized scheduling routines without degrading performance.",
    constraints: [
      { label: "MAX_LATENCY", value: "100ms" },
      { label: "THROUGHPUT", value: "50k req/s" },
      { label: "AVAILABILITY", value: "99.9%" }
    ],
    performance: [
      { label: "P99_LATENCY", value: "45ms", sub: "Optimized DB migrations and connection pools." },
      { label: "CPU_EFFICIENCY", value: "+25%", sub: "Better Docker resource allocation." },
      { label: "ERROR_RATE", value: "0.05%", sub: "Safe bounds via strict auth." }
    ]
  },
  "gorecon": {
    title: "Gorecon - High-Velocity Infrastructure Utilities",
    client: "Open Source",
    role: "Systems Developer",
    timeline: "2023",
    status: "PUBLISHED",
    overview: "Developed an optimized command-line utility in Go utilizing parallelized Goroutines to handle highly concurrent multi-thread operations, network target mapping, and automated stream discovery.",
    problem: "Managing Goroutine lifecycle and concurrency safely to prevent memory leaks and thread starvation during aggressive network reconnaissance.",
    constraints: [
      { label: "THREADS", value: "10,000+" },
      { label: "MEMORY", value: "< 50MB" },
      { label: "ACCURACY", value: "100%" }
    ],
    performance: [
      { label: "SCAN_SPEED", value: "2.4s", sub: "Full subnet sweep using highly concurrent routines." },
      { label: "MEM_USAGE", value: "14MB", sub: "Optimized GC cycles and channel closures." },
      { label: "ERROR_RATE", value: "0.00%", sub: "Zero thread panics in production." }
    ]
  }
};

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-on-surface flex items-center justify-center font-code-md">
        ERROR_404: PROJECT_NOT_FOUND
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary min-h-[100dvh]">
      <Header />
      <main className="pt-24 architecture-grid">
        {/* Hero Section: Project Header */}
        <section className="max-w-max-width mx-auto px-margin-desktop py-20 border-x border-outline-variant bg-surface/80 backdrop-blur-sm">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-primary-container text-on-primary-container font-code-md text-code-md rounded">CASE_STUDY</span>
              <span className="flex items-center gap-2 font-code-md text-code-md text-on-surface-variant uppercase">
                <span className="w-2 h-2 rounded-full bg-primary status-dot-active"></span>
                {project.status}
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface">{project.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              {project.overview}
            </p>
          </div>
        </section>

        {/* Problem & Constraints */}
        <section className="max-w-max-width mx-auto px-margin-desktop py-12 border-x border-t border-outline-variant grid md:grid-cols-2 gap-gutter bg-surface">
          <div className="flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg">01. The Problem</h2>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <p>{project.problem}</p>
              <ul className="list-none space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-error mt-1" style={{ fontVariationSettings: "'wght' 200" }}>error</span>
                  <span>Critical scaling constraints required immediate re-architecture.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 bg-surface-container-low border border-outline-variant">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">SYSTEM_CONSTRAINTS</h3>
            <div className="space-y-4 font-code-md text-code-md">
              {project.constraints.map((c, i) => (
                <div key={i} className="flex justify-between border-b border-outline-variant py-2">
                  <span className="text-on-surface-variant">{c.label}</span>
                  <span className="text-primary">{c.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Visualization */}
        <section className="max-w-max-width mx-auto px-margin-desktop py-20 border-x border-t border-outline-variant bg-surface-container-lowest">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg mb-2">02. Infrastructure Stack</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Visualizing the high-level service mesh and data flow.</p>
          </div>
          {/* Bento Grid of Services */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main API Gateway */}
            <div className="md:col-span-4 p-6 bg-surface-container border border-primary/30 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'wght' 200" }}>hub</span>
                <span className="font-label-caps text-[10px] px-2 py-0.5 border border-primary text-primary">INGRESS</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md">Edge Mesh</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Global entry point with TLS termination and rate limiting.</p>
              </div>
              <div className="mt-auto pt-4 border-t border-outline-variant font-code-md text-[12px] text-primary">
                proxy_pass backend_upstream;
              </div>
            </div>
            {/* Message Queue */}
            <div className="md:col-span-8 p-6 bg-surface-container border border-outline-variant flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'wght' 200" }}>reorder</span>
                <span className="font-label-caps text-[10px] px-2 py-0.5 border border-tertiary text-tertiary">MESSAGING</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-headline-md text-headline-md">Stream Bus</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Distributed log-based stream processing engine (Kafka/Pulsar).</p>
                </div>
                <div className="flex items-center justify-center bg-surface-container-low border border-outline-variant p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-tertiary"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-tertiary flex items-center justify-center text-[10px] font-bold">1</div>
                    <div className="w-8 h-1 bg-tertiary"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-tertiary flex items-center justify-center text-[10px] font-bold">2</div>
                    <div className="w-8 h-1 bg-tertiary"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Database Layer */}
            <div className="md:col-span-7 p-6 bg-surface-container border border-outline-variant">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'wght' 200" }}>database</span>
                <h4 className="font-headline-md text-headline-md">Persistence Layer</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-high border border-outline-variant">
                  <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">PRIMARY_DATA</span>
                  <span className="font-code-md text-code-md text-secondary">PostgreSQL_v15</span>
                  <div className="mt-2 h-1 w-full bg-outline-variant overflow-hidden">
                    <div className="h-full bg-secondary w-3/4"></div>
                  </div>
                </div>
                <div className="p-4 bg-surface-container-high border border-outline-variant">
                  <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">CACHE_LAYER</span>
                  <span className="font-code-md text-code-md text-secondary">Redis_Cluster</span>
                  <div className="mt-2 h-1 w-full bg-outline-variant overflow-hidden">
                    <div className="h-full bg-secondary w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Worker Pool */}
            <div className="md:col-span-5 p-6 bg-surface-container border border-outline-variant flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-on-surface text-3xl" style={{ fontVariationSettings: "'wght' 200" }}>memory</span>
                <span className="font-label-caps text-[10px] px-2 py-0.5 border border-on-surface text-on-surface">COMPUTE</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md">Autoscaling Workers</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Ephemeral compute nodes executing business logic via gRPC.</p>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-primary/20 border border-primary"></div>
                <div className="w-4 h-4 bg-primary/20 border border-primary"></div>
                <div className="w-4 h-4 bg-primary/20 border border-primary"></div>
                <div className="w-4 h-4 bg-primary/20 border border-primary animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* API Flow Diagram (Simplified) */}
        <section className="max-w-max-width mx-auto px-margin-desktop py-20 border-x border-t border-outline-variant bg-surface">
          <h2 className="font-headline-lg text-headline-lg mb-8">03. API Logic Flow</h2>
          <div className="relative overflow-hidden bg-surface-container-low border border-outline-variant p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              {/* Client */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-xl border border-outline-variant flex items-center justify-center bg-surface">
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'wght' 200" }}>laptop_mac</span>
                </div>
                <span className="font-label-caps text-[10px]">CLIENT</span>
              </div>
              <span className="material-symbols-outlined text-primary hidden md:block" style={{ fontVariationSettings: "'wght' 200" }}>trending_flat</span>
              {/* Gateway */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 border border-primary flex flex-col items-center justify-center bg-surface p-2 text-center">
                  <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'wght' 200" }}>security</span>
                  <span className="font-code-md text-[10px]">Auth &amp; Router</span>
                </div>
                <span className="font-label-caps text-[10px]">GATEWAY</span>
              </div>
              <span className="material-symbols-outlined text-primary hidden md:block" style={{ fontVariationSettings: "'wght' 200" }}>trending_flat</span>
              {/* Microservices */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 border border-outline-variant bg-surface-container-high w-48">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-code-md text-code-md">Main_Service</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-outline-variant bg-surface-container-high w-48">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-code-md text-code-md">Compute_Svc</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-outline-variant bg-surface-container-high w-48">
                  <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                  <span className="font-code-md text-code-md opacity-50">Notify_Svc</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg height="100%" width="100%">
                <path d="M 0 50 Q 500 0 1200 100" fill="transparent" stroke="white" strokeWidth="1"></path>
                <path d="M 0 80 Q 600 150 1200 50" fill="transparent" stroke="white" strokeWidth="1"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="max-w-max-width mx-auto px-margin-desktop py-20 border-x border-t border-outline-variant bg-surface">
          <h2 className="font-headline-lg text-headline-lg mb-8">04. Scale &amp; Performance Impact</h2>
          <div className="grid md:grid-cols-3 gap-gutter">
            <div className="p-6 border-l-2 border-primary bg-surface-container-low">
              <span className="font-label-caps text-label-caps text-on-surface-variant">{project.performance[0].label}</span>
              <div className="text-4xl font-headline-xl text-primary mt-2">{project.performance[0].value}</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">{project.performance[0].sub}</p>
            </div>
            <div className="p-6 border-l-2 border-secondary bg-surface-container-low">
              <span className="font-label-caps text-label-caps text-on-surface-variant">{project.performance[1].label}</span>
              <div className="text-4xl font-headline-xl text-secondary mt-2">{project.performance[1].value}</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">{project.performance[1].sub}</p>
            </div>
            <div className="p-6 border-l-2 border-tertiary bg-surface-container-low">
              <span className="font-label-caps text-label-caps text-on-surface-variant">{project.performance[2].label}</span>
              <div className="text-4xl font-headline-xl text-tertiary mt-2">{project.performance[2].value}</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">{project.performance[2].sub}</p>
            </div>
          </div>
        </section>

        {/* Visual Asset */}
        <section className="max-w-max-width mx-auto px-margin-desktop py-20 border-x border-t border-outline-variant bg-surface overflow-hidden">
          <div className="h-96 w-full relative">
            <div className="absolute inset-0 w-full h-full opacity-60">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
                alt="Core Cluster Visualization"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="font-headline-md text-headline-md">Core Cluster Visualization</h3>
              <p className="font-code-md text-code-md text-on-surface-variant">DC-01 // US-EAST-1 // AVAILABILITY_ZONE_A</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-surface-container border-t border-outline-variant mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-desktop py-12 max-w-max-width mx-auto">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-on-surface">CODE_CRAFTED_LABS</span>
            <p className="font-code-md text-code-md text-secondary max-w-sm">
              Architecting the future of distributed systems through technical excellence and disciplined engineering.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex flex-wrap gap-6 font-code-md text-code-md">
              <a className="text-on-surface-variant hover:text-on-surface transition-opacity" href="#">Sitemap</a>
              <a className="text-on-surface-variant hover:text-on-surface transition-opacity" href="#">Documentation</a>
              <a className="text-on-surface-variant hover:text-on-surface transition-opacity" href="#">GitHub</a>
              <span className="text-primary font-bold">Status: Operational</span>
            </div>
            <div className="font-code-md text-code-md text-on-surface-variant">
              © 2024 CODE CRAFTED LABS // SYSTEM_v2.0.4
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
