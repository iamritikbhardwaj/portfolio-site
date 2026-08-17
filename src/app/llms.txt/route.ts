import { NextResponse } from "next/server";

const content = `# Code Crafted Labs — Ritik Singh

> Elite backend engineering for startups and scale-ups. Specializing in distributed systems, cloud infrastructure, and high-performance APIs.

## About

Ritik Singh is a backend software engineer based in Gurugram, Haryana, India with 3+ years of professional experience. He is the founder of Code Crafted Labs, a boutique software engineering practice focused on building scalable backend systems using Go, Node.js, and cloud-native infrastructure.

Current role: Backend Software Engineer at Patch Infotech (2025–present).
Previous role: Software Developer at Infodia Technologies (2023–2025).
Education: B.Tech, Computer Engineering — Chandigarh University.

## Core Services

- **API Architecture**: High-performance REST and gRPC APIs with sub-40ms latency targets and 99.99% uptime SLAs.
- **Event-Driven Systems**: Kafka-backed async messaging with exactly-once delivery and 100k+ msg/s throughput.
- **Authentication Systems**: Zero-trust security models using JWT and JWE.
- **Payment Infrastructure**: ACID-compliant, idempotent payment flows.
- **Distributed Background Jobs**: Async queues with exponential backoff retry logic.
- **Cloud Deployments**: Terraform and Kubernetes infrastructure with fully automated CI/CD.

## Technical Stack

- **Languages**: Go, TypeScript/Node.js, NestJS
- **Databases**: PostgreSQL, TimescaleDB, MongoDB, Redis
- **Infrastructure**: AWS, Docker, Kubernetes, Terraform
- **Messaging**: Kafka, Redis Queues
- **Patterns**: Microservices, Event-Driven, Strategy Pattern, CQRS

## Notable Projects

### Network Monitoring System (NMS)
Built an ingestion middleware layer in Go to batch-process metrics captured via Telegraf streams into a TimescaleDB cluster. Achieved real-time telemetry ingestion with zero data point dropping.

### Multi-Tenant Compliance SaaS
Architected a multi-tenant infrastructure with strict schema-level data isolation in PostgreSQL and an async Redis caching layer. Boosted dashboard query performance by 30%.

### AI-Intern Orchestration Engine
Designed a deterministic backend workflow engine in NestJS/TypeScript with Redis semantic caching and rigid prompt serialization schemas to reduce LLM orchestration latency.

### Microservices Travel DMC Platform (Mobi DMC)
Architected an isolated multi-service ecosystem with a central Channel Manager integrating Booking.com, GlobalTix, and iWay suppliers across PostgreSQL and MongoDB nodes.

### High-Concurrency Flight Aggregator Engine (Flight Scanners)
Designed a centralized orchestrator in Go using the Strategy Design Pattern to isolate transformation maps across GoKyte, Duffel, and PKFare GDS engines running concurrently.

## Pages

- [Home](https://codecraftedlabs.co.in): Main portfolio page with full project case studies, experience timeline, and contact form.
- [Digital Card](https://codecraftedlabs.co.in/card): Compact digital business card with contact details.
- [Partners](https://codecraftedlabs.co.in/#partners): Current partner companies including Flight Scanners.

## Contact & Profiles

- Website: https://codecraftedlabs.co.in
- LinkedIn: https://www.linkedin.com/in/ritik-singh-10b333227/
- GitHub: https://github.com/iamritikbhardwaj
- Upwork: https://www.upwork.com/freelancers/~01c95e7b8432cf26b1
- Book a call: https://cal.com/ritik-singh-3mjivg

## Availability

Available for Q3 project engagements. Focus areas: backend architecture consulting, API design, cloud infrastructure, and microservices migration projects.
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
