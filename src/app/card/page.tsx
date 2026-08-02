import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import CardActions from "./CardActions";

const profileUrl = "https://codecraftedlabs.co.in/card";

export const metadata: Metadata = {
  title: "Ritik Singh - Backend Software Engineer",
  description:
    "Digital visiting card for Ritik Singh, a backend software engineer specializing in Go, Node.js, microservices, AWS, and scalable cloud systems.",
  keywords: [
    "Ritik Singh",
    "Backend Software Engineer",
    "Golang Developer Gurugram",
    "Microservices Engineer",
    "AWS Cloud Engineer",
    "Code Crafted Labs",
  ],
  alternates: { canonical: profileUrl },
  openGraph: {
    title: "Ritik Singh - Backend Software Engineer",
    description:
      "Backend, microservices, and cloud engineering for reliable systems at scale.",
    url: profileUrl,
    type: "profile",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ritik Singh - Backend Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Singh - Backend Software Engineer",
    description:
      "Backend, microservices, and cloud engineering for reliable systems at scale.",
    images: ["/opengraph-image.png"],
  },
};

const links = [
  {
    label: "EMAIL",
    value: "ritiklrt2@gmail.com",
    href: "mailto:ritiklrt2@gmail.com",
    icon: Mail,
  },
  {
    label: "LINKEDIN",
    value: "ritik-singh-10b333227",
    href: "https://www.linkedin.com/in/ritik-singh-10b333227/",
    icon: Linkedin,
  },
  {
    label: "GITHUB",
    value: "iamritikbhardwaj",
    href: "https://github.com/iamritikbhardwaj",
    icon: Github,
  },
];

const capabilities = [
  "Go / Golang",
  "Node.js & TypeScript",
  "Microservices",
  "AWS & cloud infrastructure",
  "PostgreSQL / MongoDB / Redis",
  "Docker & CI/CD",
];

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${profileUrl}#profilepage`,
  url: profileUrl,
  name: "Ritik Singh - Backend Software Engineer",
  mainEntity: {
    "@type": "Person",
    "@id": "https://codecraftedlabs.co.in/#person",
    name: "Ritik Singh",
    image: "https://codecraftedlabs.co.in/images/about.jpg",
    email: "mailto:ritiklrt2@gmail.com",
    jobTitle: "Backend Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Patch Infotech",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Chandigarh University",
    },
    sameAs: [
      "https://github.com/iamritikbhardwaj",
      "https://www.linkedin.com/in/ritik-singh-10b333227/",
      "https://www.upwork.com/freelancers/~01c95e7b8432cf26b1",
    ],
    knowsAbout: capabilities,
  },
};

export default function CardPage() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-primary-bg text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-lime-subtle blur-3xl"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6 md:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 font-mono-link text-text-muted transition-colors hover:text-accent-lime"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          CODE_CRAFTED_LABS
        </Link>
        <span className="hidden items-center gap-2 font-mono-label text-text-disabled sm:flex">
          <span className="size-2 rounded-full bg-accent-lime" />
          PROFILE_ONLINE
        </span>
      </header>

      <main id="main-content" className="relative z-10 mx-auto flex w-full max-w-[1200px] px-6 pb-12 pt-4 md:px-8 md:pb-20 md:pt-8">
        <article className="grid w-full overflow-hidden border border-border-standard bg-surface/95 shadow-2xl shadow-black lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[360px] overflow-hidden border-b border-border-standard lg:min-h-[680px] lg:border-b-0 lg:border-r">
            <Image
              src="/images/about.jpg"
              alt="Portrait of Ritik Singh"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="border border-white/20 bg-black/60 px-2 py-1 font-mono-label text-text-secondary backdrop-blur-sm">
                  BACKEND
                </span>
                <span className="border border-white/20 bg-black/60 px-2 py-1 font-mono-label text-text-secondary backdrop-blur-sm">
                  MICROSERVICES
                </span>
                <span className="border border-white/20 bg-black/60 px-2 py-1 font-mono-label text-text-secondary backdrop-blur-sm">
                  CLOUD
                </span>
              </div>
              <p className="font-mono-label text-accent-lime">ENGINEER_ID // RS_01</p>
            </div>
          </div>

          <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="border-b border-border-standard pb-8">
              <p className="mb-4 font-mono-label tracking-[0.18em] text-accent-lime">
                DIGITAL_VISITING_CARD
              </p>
              <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.92] tracking-[-0.06em] text-text-primary">
                Ritik Singh
              </h1>
              <p className="mt-5 text-lg font-medium text-text-secondary md:text-xl">
                Backend Software Engineer
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness aria-hidden="true" className="size-4 text-accent-lime" />
                  Patch Infotech
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin aria-hidden="true" className="size-4 text-accent-lime" />
                  Gurugram, India
                </span>
              </div>
            </div>

            <section aria-labelledby="profile-summary" className="border-b border-border-standard py-8">
              <h2 id="profile-summary" className="mb-3 font-mono-label text-text-disabled">
                PROFILE_SUMMARY
              </h2>
              <p className="max-w-2xl text-base leading-7 text-text-secondary">
                I design and scale distributed backend systems, cloud infrastructure,
                and high-performance APIs. My work spans Go and Node.js microservices,
                multi-tenant data platforms, real-time telemetry, and reliable delivery
                pipelines built for production load.
              </p>
            </section>

            <section aria-labelledby="capabilities" className="border-b border-border-standard py-8">
              <h2 id="capabilities" className="mb-4 font-mono-label text-text-disabled">
                CORE_STACK
              </h2>
              <ul className="flex flex-wrap gap-2">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="border border-border-standard bg-elevated px-3 py-2 font-mono-btn text-text-secondary"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="contact-links" className="py-8">
              <h2 id="contact-links" className="mb-4 font-mono-label text-text-disabled">
                ESTABLISH_CONNECTION
              </h2>
              <div className="divide-y divide-border-soft border-y border-border-soft">
                {links.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group grid min-h-14 grid-cols-[auto_1fr_auto] items-center gap-3 py-3 transition-colors hover:text-accent-lime"
                    >
                      <Icon aria-hidden="true" className="size-4 text-accent-lime" />
                      <span className="min-w-0">
                        <span className="block font-mono-label text-text-disabled">{item.label}</span>
                        <span className="block truncate text-sm text-text-secondary group-hover:text-accent-lime">
                          {item.value}
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                  );
                })}
              </div>
            </section>

            <div className="mt-auto space-y-3">
              <CardActions />
              <a
                href="https://cal.com/ritik-singh-3mjivg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-accent-lime bg-accent-lime-subtle px-4 py-3 font-mono-btn text-accent-lime transition-colors hover:bg-accent-lime hover:text-black"
              >
                <CalendarDays aria-hidden="true" className="size-4" />
                BOOK A CONSULTATION
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
