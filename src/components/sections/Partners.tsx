import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const partners = [
  {
    name: "Flight Scanners",
    description: "Flight search and comparison platform",
    href: "https://flightscanner.co.za",
    logo: "/images/flight-scanners-logo.webp",
  },
];

export default function Partners() {
  const repeatedPartners = Array.from({ length: 4 }, () => partners[0]);

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="w-full border-b border-border-standard bg-secondary-bg"
    >
      <div className="mx-auto grid min-h-32 w-full max-w-[1200px] md:grid-cols-[260px_1fr]">
        <div className="flex items-center border-b border-border-standard px-6 py-7 md:border-b-0 md:border-r md:px-8">
          <div>
            <span className="mb-2 block font-mono-label text-accent-lime">
              TRUSTED_NETWORK
            </span>
            <h2 id="partners-heading" className="font-h1 text-[22px] text-text-primary">
              Our Partners
            </h2>
          </div>
        </div>

        <div className="partners-marquee group relative min-w-0 overflow-hidden">
          <a
            href={partners[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${partners[0].name} website`}
            className="absolute inset-0 z-10"
          >
            <span className="sr-only">
              Visit {partners[0].name}: {partners[0].description}
            </span>
          </a>

          <div className="partners-marquee-content flex min-h-32 w-max" aria-hidden="true">
            {[0, 1].map((group) => (
              <div key={group} className="partners-marquee-group flex shrink-0">
                {repeatedPartners.map((partner, index) => (
                  <div
                    key={`${group}-${index}`}
                    className="flex w-72 shrink-0 items-center gap-4 border-r border-border-standard px-6 py-6 md:px-8"
                  >
                    <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border-standard bg-white p-2">
                      <Image
                        src={partner.logo}
                        alt=""
                        width={96}
                        height={64}
                        sizes="64px"
                        loading="lazy"
                        className="h-auto w-full object-contain"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-bold text-text-primary transition-colors group-hover:text-accent-lime">
                        {partner.name}
                      </span>
                      <span className="mt-1 block text-sm leading-5 text-text-muted">
                        {partner.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-text-disabled transition-colors group-hover:text-accent-lime"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
