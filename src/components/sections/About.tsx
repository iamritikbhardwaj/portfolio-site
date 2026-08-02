import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";

const profileDetails = [
  {
    label: "CURRENT_ROLE",
    value: "Backend Software Engineer at Patch Infotech",
  },
  {
    label: "FOUNDATION",
    value: "B.Tech, Computer Engineering - Chandigarh University",
  },
  {
    label: "WORKING_STYLE",
    value: "Pragmatic systems, clear communication, reliable delivery",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-b border-border-standard scroll-mt-8"
    >
      <div className="grid items-stretch gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="relative min-h-[380px] overflow-hidden border border-border-standard bg-surface sm:min-h-[460px] lg:min-h-full">
          <Image
            src="/images/about.webp"
            alt="Ritik Singh, backend software engineer"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
            <div>
              <span className="mb-2 block font-mono-label text-accent-lime">
                BASE_LOCATION
              </span>
              <span className="inline-flex items-center gap-2 text-text-primary">
                <MapPin aria-hidden="true" className="size-4" />
                Gurugram, Haryana, India
              </span>
            </div>
            <span className="border border-white/20 bg-black/60 px-3 py-2 font-mono-label text-text-secondary backdrop-blur-sm">
              3+ YEARS IN SOFTWARE
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="mb-3 font-mono-label text-accent-lime">
            ABOUT_OPERATOR // RITIK_SINGH
          </span>
          <h2 id="about-heading" className="font-h1 text-text-primary mb-6">
            Beyond the architecture.
          </h2>

          <div className="max-w-2xl space-y-5 text-base leading-7 text-text-secondary">
            <p>
              I&apos;m a backend software engineer who enjoys turning complicated
              product requirements into systems that are calm under pressure. My
              work centers on Go, Node.js, cloud infrastructure, and distributed
              services, with enough full-stack experience to make decisions around
              the complete product rather than one isolated layer.
            </p>
            <p>
              I bring a practical, collaborative approach to engineering: understand
              the real constraint, design for maintainability, and leave the system
              easier for the next person to work with. Outside implementation, I
              value clear communication, thoughtful reviews, and helping teams ship
              with confidence.
            </p>
          </div>

          <dl className="my-8 grid gap-px border border-border-standard bg-border-standard sm:grid-cols-3">
            {profileDetails.map((detail) => (
              <div key={detail.label} className="bg-elevated p-5">
                <dt className="mb-2 font-mono-label text-text-disabled">
                  {detail.label}
                </dt>
                <dd className="text-sm leading-5 text-text-secondary">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/card"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-text-primary px-5 py-3 font-mono-btn text-primary-bg transition-colors hover:bg-accent-lime"
            >
              VIEW DIGITAL CARD
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <a
              href="https://www.linkedin.com/in/ritik-singh-10b333227/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-border-standard bg-surface px-5 py-3 font-mono-btn text-text-primary transition-colors hover:border-accent-lime hover:text-accent-lime"
            >
              <GraduationCap aria-hidden="true" className="size-4" />
              PROFESSIONAL PROFILE
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
