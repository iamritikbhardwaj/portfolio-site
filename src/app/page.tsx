import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import dynamic from "next/dynamic";

const InteractiveTerminal = dynamic(() => import("@/components/InteractiveTerminal"), {
  ssr: true,
  loading: () => (
    <div className="w-full h-[500px] bg-surface-container-lowest border border-outline-variant rounded-lg animate-pulse flex items-center justify-center text-on-surface-variant font-code-md">
      INITIALIZING_TERMINAL...
    </div>
  ),
});
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="min-h-[100dvh] font-sans selection:bg-primary selection:text-on-primary bg-background text-on-surface">
      <div className="flex flex-col min-h-[100dvh] relative overflow-hidden">
        {/* Navigation */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-[618px] flex items-center architecture-grid border-b border-outline-variant pt-20">
          <div className="px-6 md:px-margin-desktop max-w-max-width mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20 mt-16">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container border border-outline-variant rounded-full">
                <span className="led-dot led-active"></span>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase">
                  SYSTEMS_ACTIVE_v4.2
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">
                Build scalable{" "}
                <span className="text-primary">backend systems</span> for
                startups.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                High-performance infrastructure engineered with Go, Node.js, and
                AWS. Disciplined architecture for founders who demand technical
                rigor.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 text-on-surface-variant font-code-md text-[12px] sm:text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                  2+ years building production systems
                </div>
                <span className="hidden sm:inline-block text-outline-variant">|</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                  99.9% uptime delivered
                </div>
                <span className="hidden sm:inline-block text-outline-variant">|</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                  Microservices at scale
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:brightness-110 transition-bezier flex items-center gap-2"
                  href="#projects"
                >
                  EXPLORE_WORK{" "}
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="border border-outline-variant bg-surface px-8 py-4 font-label-caps text-label-caps hover:bg-surface-container transition-bezier"
                  href="https://cal.com/ritik-singh-3mjivg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK_CONSULTATION
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center order-first md:order-last w-full h-[320px] md:h-auto overflow-hidden">
              <div className="absolute inset-0 scale-[0.85] origin-top md:scale-100 md:relative w-full h-full">
                <InteractiveTerminal />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Technical Services Bento Grid */}
        <section
          id="systems"
          className="py-24 px-6 md:px-margin-desktop max-w-max-width mx-auto w-full mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* API Infrastructure */}
            <div className="md:col-span-8 bg-surface-container border border-outline-variant p-8 group relative overflow-hidden">
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <span className="material-symbols-outlined text-primary mb-4"
                    style={{ fontSize: "32px" }}
                   aria-hidden="true">
                    api
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface">
                    API Infrastructure
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-code-md text-code-md text-primary">
                    STATUS: PRODUCTION_READY
                  </span>
                </div>
              </div>
              <p className="text-on-surface-variant mb-8 max-w-xl relative z-10">
                Robust, documented, and strictly-typed API gateways. We utilize
                GraphQL and gRPC for internal service communication while
                maintaining REST compliance for client-facing interfaces.
              </p>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-surface-container p-4 border border-outline-variant">
                  <span className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                    LATENCY
                  </span>
                  <span className="font-headline-md text-headline-md text-primary">
                    &lt;45ms P99
                  </span>
                </div>
                <div className="bg-surface-container p-4 border border-outline-variant">
                  <span className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                    THROUGHPUT
                  </span>
                  <span className="font-headline-md text-headline-md text-primary">
                    100k+ RPS
                  </span>
                </div>
              </div>
            </div>
            {/* Authentication */}
            <div className="md:col-span-4 bg-surface-container-high border border-outline-variant p-8 relative overflow-hidden group">
              <span className="material-symbols-outlined text-tertiary mb-4 relative z-10"
                style={{ fontSize: "32px" }}
               aria-hidden="true">
                lock
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4 relative z-10">
                Zero-Trust Auth
              </h3>
              <ul className="space-y-3 font-code-md text-code-md text-on-surface-variant relative z-10">
                <li className="flex items-center gap-2">
                  <span className="text-tertiary">#</span> OAuth2 / OpenID
                  Connect
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-tertiary">#</span> JWT Rotation +
                  Revocation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-tertiary">#</span> RBAC / ABAC
                  Permissions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-tertiary">#</span> WebAuthn / Biometrics
                </li>
              </ul>
            </div>
            {/* Payment Workflows */}
            <div className="md:col-span-4 bg-surface-container-high border border-outline-variant p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary mb-4"
                  style={{ fontSize: "32px" }}
                 aria-hidden="true">
                  payments
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Ledger Systems
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Double-entry bookkeeping and transaction state machines with
                  100% data integrity.
                </p>
              </div>
              <div className="bg-black p-4 rounded border border-primary/20 relative z-10">
                <pre className="font-code-md text-[12px] text-primary overflow-hidden">{`{
  "ledger": "TX_9921",
  "status": "COMMITTED",
  "checksum": "0x4F...3B"
}`}</pre>
              </div>
            </div>
            {/* Distributed Microservices */}
            <div className="md:col-span-8 bg-surface-container border border-outline-variant p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                  Distributed Services
                </h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 bg-surface-variant border border-outline-variant font-code-md text-body-sm">
                    Kubernetes
                  </span>
                  <span className="px-3 py-1 bg-surface-variant border border-outline-variant font-code-md text-body-sm">
                    Kafka
                  </span>
                  <span className="px-3 py-1 bg-surface-variant border border-outline-variant font-code-md text-body-sm">
                    Redis OSS
                  </span>
                  <span className="px-3 py-1 bg-surface-variant border border-outline-variant font-code-md text-body-sm">
                    Terraform
                  </span>
                </div>
                <p className="text-on-surface-variant max-w-lg mb-0">
                  Decoupled logic using event-driven architectures. We eliminate
                  single points of failure by implementing circuit breakers and
                  automatic retry mechanisms across the service mesh.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="py-8 border-y border-outline-variant bg-surface-container-high w-full relative overflow-hidden">
          <div className="max-w-max-width mx-auto px-6 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <p className="font-code-md text-on-surface-variant text-center md:text-left text-sm">
              A specialized <strong className="font-normal text-primary">backend development agency</strong> building systems powering SaaS, internal tooling, and distributed services.
            </p>
            <div className="flex items-center gap-3 bg-surface border border-outline-variant px-4 py-2 shrink-0">
              <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">verified</span>
              <span className="font-label-caps text-[12px] tracking-wider text-on-surface">1000+ USERS SERVED ACROSS PRODUCTION ENVIRONMENTS</span>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section
          className="py-24 bg-surface-container-low border-y border-outline-variant w-full"
          id="projects"
        >
          <div className="px-6 md:px-margin-desktop max-w-max-width mx-auto w-full">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-label-caps text-label-caps text-primary mb-4">
                  SYSTEM_OUTPUT
                </h2>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  Architectural Case Studies
                </h3>
              </div>
              <div className="hidden md:block">
                <span className="font-code-md text-on-surface-variant text-[12px]">
                  FILTER: ALL_REPOS
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Project 1 */}
              <a
                href="/projects/crm-saas"
                className="flex flex-col bg-surface border border-outline-variant overflow-hidden group min-h-[420px]"
              >
                <div className="h-64 relative overflow-hidden bg-surface-container flex items-center justify-center architecture-grid w-full">
                  <div className="absolute top-4 left-4 bg-surface px-3 py-1 font-label-caps text-[10px] border border-outline-variant z-20">
                    PROJECT_01 // PAYMENT_FLOWS
                  </div>
                  <Image
                    src="/images/project-1.webp"
                    alt="CRM SaaS Architecture"
                    width={800}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="absolute inset-0 object-cover w-full h-full opacity-30 mix-blend-luminosity group-hover:opacity-50 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <span className="material-symbols-outlined text-[64px] text-primary opacity-50 group-hover:scale-110 transition-transform duration-300 relative z-10" aria-hidden="true">
                    account_balance
                  </span>
                </div>
                <div className="p-8">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">
                    CRM SaaS Platform
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                    Engineered high-performance multi-tenant platform
                    infrastructure capable of supporting concurrent real-time
                    actions for 1,000+ active users.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      GO
                    </span>
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      TYPESCRIPT
                    </span>
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      NODE.JS
                    </span>
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      REDIS
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-outline-variant">
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                        Latency
                      </p>
                      <p className="font-code-md text-primary">-30% Queries</p>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                        Scale
                      </p>
                      <p className="font-code-md text-primary">1,000+ Users</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* Project 2 */}
              <a
                href="/projects/emp-saas"
                className="flex flex-col bg-surface border border-outline-variant overflow-hidden group min-h-[420px]"
              >
                <div className="h-64 relative overflow-hidden bg-surface-container flex items-center justify-center architecture-grid w-full">
                  <div className="absolute top-4 left-4 bg-surface px-3 py-1 font-label-caps text-[10px] border border-outline-variant z-20">
                    PROJECT_02 // MULTI_TENANT
                  </div>
                  <Image
                    src="/images/project-2.webp"
                    alt="Enterprise Management Engine Architecture"
                    width={800}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="absolute inset-0 object-cover w-full h-full opacity-30 mix-blend-luminosity group-hover:opacity-50 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <span className="material-symbols-outlined text-[64px] text-primary opacity-50 group-hover:scale-110 transition-transform duration-300 relative z-10" aria-hidden="true">
                    corporate_fare
                  </span>
                </div>
                <div className="p-8">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">
                    emp-saas Management Engine
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                    Architected a scalable, developer-first multi-tenant cloud
                    engine centered on decentralized resource scheduling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      GO
                    </span>
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      NODE.JS
                    </span>
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      POSTGRESQL
                    </span>
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant font-code-md text-[11px]">
                      DOCKER
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-outline-variant">
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                        Reliability
                      </p>
                      <p className="font-code-md text-primary">
                        Safe Migrations
                      </p>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                        Optimization
                      </p>
                      <p className="font-code-md text-primary">
                        Predictable Perf
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Section: Why Backend Matters */}
        <section className="bg-surface-container py-32 border-y border-outline-variant">
          <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface mb-8">
                Reliability is a Feature, Not an Afterthought.
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">
                      dynamic_form
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-2">
                      Deterministic Scaling
                    </h4>
                    <p className="text-on-surface-variant">
                      Systems that react to load predictably. Our horizontal
                      auto-scaling triggers are based on deep telemetry,
                      ensuring users never feel the weight of your growth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-tertiary/10 border border-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary" aria-hidden="true">
                      monitoring
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-2">
                      Observability First
                    </h4>
                    <p className="text-on-surface-variant">
                      We don't guess; we measure. Every service includes
                      OpenTelemetry integration for distributed tracing,
                      logging, and real-time alerting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square bg-surface border border-outline-variant p-2 overflow-hidden group">
                <Image
                  src="/images/project-1.webp"
                  alt="Server schematic"
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-surface-container border border-primary p-6 flex flex-col justify-center">
                <span className="font-headline-xl text-headline-xl text-primary">
                  99.99
                </span>
                <span className="font-label-caps text-label-caps text-on-primary-container">
                  UPTIME SLA
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Engagement Models */}
        <section className="max-w-max-width mx-auto px-margin-desktop py-32">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Engagement Vectors
            </h2>
            <p className="text-on-surface-variant font-code-md">
              Tailored for early-stage pivots and enterprise-grade stability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Startup Seed */}
            <div className="p-8 border border-outline-variant hover:border-primary transition-colors flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface-variant mb-8">
                INFRASTRUCTURE_SPRINT
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                Core Infrastructure
              </h4>
              <p className="text-on-surface-variant mb-8 flex-grow">
                Rapid MVP development. Essential API layer, User management, and
                DB schema design. Focus on speed-to-market.
              </p>
              <div className="pt-8 border-t border-outline-variant mt-auto">
                <div className="font-headline-md text-headline-md text-on-surface mb-2">
                  Starting at $4k
                </div>
                <a
                  href="#contact"
                  className="block text-center w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps hover:brightness-110 transition-bezier"
                >
                  INITIALIZE
                </a>
              </div>
            </div>
            {/* Growth Scale */}
            <div className="p-8 border-2 border-primary bg-primary/5 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 text-[10px] font-bold text-on-primary font-label-caps">
                RECOMMENDED
              </div>
              <span className="font-label-caps text-label-caps text-primary mb-8">
                SCALE_PARTNERSHIP
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                Scale Architecture
              </h4>
              <p className="text-on-surface-variant mb-8 flex-grow">
                Full microservice migration, payment integration, and global CDN
                distribution. 24/7 on-call support included.
              </p>
              <div className="pt-8 border-t border-primary/20 mt-auto">
                <div className="font-headline-md text-headline-md text-on-surface mb-2">
                  Custom retainers
                </div>
                <a
                  href="#contact"
                  className="block text-center w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps hover:brightness-110 transition-bezier"
                >
                  INITIALIZE
                </a>
              </div>
            </div>
            {/* Enterprise */}
            <div className="p-8 border border-outline-variant hover:border-primary transition-colors flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface-variant mb-8">
                EMBEDDED_BACKEND
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                Custom Ecosystem
              </h4>
              <p className="text-on-surface-variant mb-8 flex-grow">
                Dedicated engineering squad. Multi-region redundancy,
                high-compliance security audits, and legacy system refactoring.
              </p>
              <div className="pt-8 border-t border-outline-variant mt-auto">
                <div className="font-headline-md text-headline-md text-on-surface mb-2">
                  Project-based
                </div>
                <a
                  href="#contact"
                  className="block text-center w-full py-4 border border-outline-variant text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-colors"
                >
                  CONTACT_SALES
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-24 bg-surface-container border-t border-outline-variant w-full">
          <div className="px-6 md:px-margin-desktop max-w-max-width mx-auto w-full">
            <h2 className="font-label-caps text-label-caps text-primary mb-12 text-center">
              CAREER_MILESTONES
            </h2>
            <div className="space-y-1">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border border-outline-variant hover:bg-surface-bright transition-bezier cursor-default">
                <span className="font-code-md text-primary">
                  OCT 2025 — PRES
                </span>
                <span className="font-code-md text-on-surface font-bold">
                  Backend Software Engineer
                </span>
                <div className="md:col-span-2 text-on-surface-variant text-body-sm">
                  <p className="mb-2 text-on-surface">Patch Infotech.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reduced API latency by 35%</li>
                    <li>Improved deployment reliability</li>
                    <li>Built scalable backend microservices</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border border-outline-variant hover:bg-surface-bright transition-bezier cursor-default">
                <span className="font-code-md text-primary">
                  MAY 2023 — SEP 2025
                </span>
                <span className="font-code-md text-on-surface font-bold">
                  Software Developer
                </span>
                <div className="md:col-span-2 text-on-surface-variant text-body-sm">
                  <p className="mb-2 text-on-surface">Infodia Technologies.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Maintained 99.9% uptime</li>
                    <li>Reduced deployment time by 80%</li>
                    <li>Improved backend observability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Founders Work With Me */}
        <section className="max-w-max-width mx-auto px-6 md:px-margin-desktop py-24 w-full">
          <div className="text-center mb-16">
            <h2 className="font-label-caps text-label-caps text-primary mb-4">
              WHY_FOUNDERS_WORK_WITH_ME
            </h2>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              The Architecture Advantage
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-8 border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors relative group">
              <span className="material-symbols-outlined text-tertiary mb-4 relative z-10" style={{ fontSize: "28px" }} aria-hidden="true">architecture</span>
              <h4 className="font-headline-md text-headline-md mb-3 relative z-10">Backend-first thinking</h4>
              <p className="text-on-surface-variant text-body-sm relative z-10">
                We prioritize solid data models and core business logic before painting the UI. Our <strong className="font-normal text-on-surface">cloud architecture consulting</strong> ensures your foundation won't crack under pressure.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors relative group">
              <span className="material-symbols-outlined text-primary mb-4 relative z-10" style={{ fontSize: "28px" }} aria-hidden="true">rocket_launch</span>
              <h4 className="font-headline-md text-headline-md mb-3 relative z-10">Fast shipping without technical debt</h4>
              <p className="text-on-surface-variant text-body-sm relative z-10">
                Speed doesn't require sacrificing quality. By leveraging proven patterns and <strong className="font-normal text-on-surface">golang development services</strong>, we deliver robust features on aggressive timelines.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-8 border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors relative group">
              <span className="material-symbols-outlined text-tertiary mb-4 relative z-10" style={{ fontSize: "28px" }} aria-hidden="true">verified_user</span>
              <h4 className="font-headline-md text-headline-md mb-3 relative z-10">Production-grade reliability</h4>
              <p className="text-on-surface-variant text-body-sm relative z-10">
                Startups need enterprise stability. We specialize in <strong className="font-normal text-on-surface">scalable API development</strong> and resilient <strong className="font-normal text-on-surface">microservices consulting</strong> that survive high-traffic spikes effortlessly.
              </p>
            </div>
            {/* Card 4 */}
            <div className="p-8 border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors relative group">
              <span className="material-symbols-outlined text-primary mb-4 relative z-10" style={{ fontSize: "28px" }} aria-hidden="true">forum</span>
              <h4 className="font-headline-md text-headline-md mb-3 relative z-10">Direct founder communication</h4>
              <p className="text-on-surface-variant text-body-sm relative z-10">
                No bloated management layers or junior hand-offs. You interface directly with the lead engineer building your systems, aligning technical execution flawlessly with business goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-24 px-6 md:px-margin-desktop max-w-max-width mx-auto w-full"
          id="contact"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-label-caps text-label-caps text-primary mb-4">
                ESTABLISH_CONNECTION
              </h2>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Start Your Project
              </h3>
            </div>
            <div className="bg-surface-container border border-outline-variant p-8 rounded-lg shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 scanline opacity-20 pointer-events-none"></div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
        <footer className="bg-surface-container-lowest pt-20 mt-20 border-t border-outline-variant">
          <div className="max-w-max-width mx-auto px-6 md:px-margin-desktop mb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                  terminal
                </span>
                <span className="font-label-caps text-label-caps tracking-tighter text-primary">
                  CODE_CRAFTED_LABS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-6">
                Architecting robust backend systems that scale predictably and
                fail gracefully.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/iamritikbhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container hover:border-primary transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="GitHub Profile"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden="true">
                    code
                  </span>
                </a>
                <a
                  href="https://linkedin.com/in/ritik-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container hover:border-primary transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="LinkedIn Profile"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden="true">
                    work
                  </span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8">
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface mb-6 uppercase">
                  Navigation
                </h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="#systems"
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    Systems
                  </a>
                  <a
                    href="#projects"
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    Deployments
                  </a>
                  <a
                    href="https://cal.com/ritik-singh-3mjivg"
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    Consultation
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface mb-6 uppercase">
                  Resources
                </h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="/resume"
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    Resume.pdf
                  </a>
                  <a
                    href="/metrics"
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    Uptime Metrics
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-margin-desktop py-8 border-t border-outline-variant/30 max-w-max-width mx-auto flex justify-between items-center w-full">
            <span className="font-code-md text-code-md text-on-surface-variant/50">
              © 2024 CODE_CRAFTED_LABS // SYSTEM_v2.0.4
            </span>
            <div className="flex gap-4">
              <button aria-label="Monitoring status" className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                monitoring
              </button>
              <button aria-label="Security status" className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-primary transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                security
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
