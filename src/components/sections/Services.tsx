import React from "react";

const services = [
  {
    title: "API Architecture",
    metrics: [
      { label: "LATENCY", value: "< 40ms" },
      { label: "UPTIME", value: "99.99%" },
    ]
  },
  {
    title: "Event Systems",
    metrics: [
      { label: "THROUGHPUT", value: "100k+ msg/s" },
      { label: "DELIVERY", value: "Exactly-once" },
    ]
  },
  {
    title: "Authentication",
    metrics: [
      { label: "SECURITY", value: "Zero-trust" },
      { label: "TOKENS", value: "JWT + JWE" },
    ]
  },
  {
    title: "Payment Infrastructure",
    metrics: [
      { label: "INTEGRITY", value: "ACID Compliant" },
      { label: "STATE", value: "Idempotent" },
    ]
  },
  {
    title: "Distributed Jobs",
    metrics: [
      { label: "EXECUTION", value: "Async Queue" },
      { label: "RETRY", value: "Exp Backoff" },
    ]
  },
  {
    title: "Cloud Deployments",
    metrics: [
      { label: "INFRA", value: "Terraform/K8s" },
      { label: "CI/CD", value: "Automated" },
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-b border-border-standard">
      <div className="mb-12">
        <h2 className="font-h1 text-text-primary mb-4">Core Infrastructure</h2>
        <p className="font-body-md text-text-secondary max-w-2xl">
          Systems engineered for predictability under load. We focus on decoupled architectures that scale horizontally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-elevated border border-border-soft p-6 rounded-sm flex flex-col">
            <h3 className="font-body-md font-bold text-text-primary mb-6">{service.title}</h3>
            
            <div className="mt-auto grid grid-cols-2 gap-4">
              {service.metrics.map((metric, midx) => (
                <div key={midx} className="flex flex-col">
                  <span className="font-mono-label text-text-disabled mb-1">{metric.label}</span>
                  <span className="font-mono-btn text-accent-lime">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
