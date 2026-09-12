import Image from "next/image";
import {
  ArrowUpRight,
  ContactRound,
  Heart,
  HeartHandshake,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

type Product = {
  name: string;
  description: string;
  href: string;
  external?: boolean;
  logo?: string;
  icon?: LucideIcon;
};

const products: Product[] = [
  {
    name: "ReliefLink",
    description: "Trusted errand support for parents in India",
    href: "/relieflink",
    icon: HeartHandshake,
  },
  {
    name: "Casual Carry",
    description: "E-commerce platform for handcrafted leather bags",
    href: "https://www.casual-carry.com/",
    external: true,
    logo: "/images/casual-carry-logo.png",
  },
  {
    name: "EmpSaaS",
    description: "Labor, contractor and compliance management",
    href: "https://empsaas.codecraftedlabs.co.in/",
    external: true,
    logo: "/images/empsaas-logo.svg",
  },
  {
    name: "Flight Scanners",
    description: "Flight search and comparison platform",
    href: "https://flightscanner.co.za",
    external: true,
    logo: "/images/flight-scanners-logo.webp",
  },
  {
    name: "Hope Foundation",
    description: "NGO platform for education, health and empowerment",
    href: "https://ngo-site-nine.vercel.app/",
    external: true,
    icon: Heart,
  },
  {
    name: "Digital Card",
    description: "Portable professional profile and contact card",
    href: "/card",
    logo: "/ccl-logo.png",
  },
];

function ProductMark({ product }: { product: Product }) {
  if (product.logo) {
    return (
      <Image
        src={product.logo}
        alt=""
        width={64}
        height={64}
        sizes="64px"
        loading="lazy"
        className="max-h-12 max-w-12 object-contain"
      />
    );
  }

  const Icon = product.icon ?? ContactRound;
  return <Icon aria-hidden="true" className="size-8 text-[#0f766e]" strokeWidth={1.8} />;
}

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="w-full border-b border-border-standard bg-secondary-bg"
    >
      <div className="mx-auto grid min-h-32 w-full max-w-[1200px] md:grid-cols-[260px_1fr]">
        <div className="flex items-center border-b border-border-standard px-6 py-7 md:border-b-0 md:border-r md:px-8">
          <div>
            <span className="mb-2 block font-mono-label text-accent-lime">
              SHIPPED_SYSTEMS
            </span>
            <h2 id="products-heading" className="font-h1 text-[22px] text-text-primary">
              Products
            </h2>
          </div>
        </div>

        <div className="products-marquee relative min-w-0 overflow-hidden">
          <div className="products-marquee-content flex min-h-32 w-max">
            {[0, 1].map((group) => {
              const isDuplicate = group === 1;

              return (
                <div
                  key={group}
                  className="products-marquee-group flex shrink-0"
                  aria-hidden={isDuplicate || undefined}
                >
                  {products.map((product) => (
                    <a
                      key={`${group}-${product.name}`}
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noopener noreferrer" : undefined}
                      tabIndex={isDuplicate ? -1 : undefined}
                      className="group/product flex w-72 shrink-0 items-center gap-4 border-r border-border-standard px-6 py-6 transition-colors hover:bg-elevated focus-visible:bg-elevated md:px-8"
                    >
                      <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border-standard bg-white p-2">
                        <ProductMark product={product} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-bold text-text-primary transition-colors group-hover/product:text-accent-lime">
                          {product.name}
                        </span>
                        <span className="mt-1 block text-sm leading-5 text-text-muted">
                          {product.description}
                        </span>
                        {product.external && <span className="sr-only"> (opens in a new tab)</span>}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-text-disabled transition-colors group-hover/product:text-accent-lime"
                      />
                    </a>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
