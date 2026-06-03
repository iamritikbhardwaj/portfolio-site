import Header from "@/components/header";
import { BookOpenCheck, Code, SquareArrowUpRight, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ritik Singh - Projects",
  description:
    "A showcase of my latest projects in web development, backend engineering, and DevOps automation.",
};

// Project Data Type
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  github: string;
  highlights: string[];
  featured?: boolean;
}

// Projects Data - Edit this array to update your projects
const projects: Project[] = [
  {
    id: "3",
    title: "FlightScanner",
    description:
      "A comprehensive flight search, comparison, and booking engine integrated with Kyte pre-ticketing, booking, and post-booking APIs, featuring live currency exchange conversion, interactive seat map grids, and automated Stripe billing/refund flows.",
    technologies: [
      "Next.js (App Router)",
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "Stripe",
      "PostgreSQL",
      "Firebase Auth",
      "Kyte API Integration",
    ],
    demo: "https://flightscanner.co.za/",
    github: "https://github.com/iamritikbhardwaj/flights-scanner",
    highlights: [
      "Integrated with Kyte API v3 for pre-booking, post-booking updates, and real-time seat map layouts.",
      "Engineered secure checkout sessions with automatic Stripe refund triggers on supplier ticketing confirmation failures.",
      "Developed responsive interactive seat maps mapping passenger age limitations and structural rules.",
      "Created real-time currency conversion filter layers powered by active exchange rates.",
    ],
    featured: true,
  },
  {
    id: "1",
    title: "CRM SaaS Platform",
    description:
      "A high-performance, multi-tenant CRM infrastructure using a microservices architecture to smoothly support 1,000+ active users.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Go (Golang)",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
    ],
    demo: "",
    github: "https://github.com/iamritikbhardwaj/travel-dmc-core",
    highlights: [
      "Engineered a high-performance, multi-tenant CRM infrastructure using microservices architecture.",
      "Integrated Redis caching layers and secure data isolation schemas, leading to a 30% improvement in core dashboard load times.",
      "Built secure, scalable RESTful APIs leveraging Go and Node.js, utilizing MongoDB for flexible data handling and PostgreSQL for relational consistency.",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Gorecon - Web Reconnaissance Tool",
    description:
      "A high-speed security command-line tool written in Go for automated network domain reconnaissance and target vulnerability scanning.",
    technologies: [
      "Go (Golang)",
      "CLI",
      "Networking",
      "Shell Scripting",
    ],
    demo: "",
    github: "https://github.com/iamritikbhardwaj/gorecon",
    highlights: [
      "Developed a high-speed security CLI tool in Go for automated network domain reconnaissance.",
      "Optimized performance and data gathering speeds by leveraging Go's Goroutines for parallelized task execution.",
    ],
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Main Container */}
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <main className="flex-1 px-4 sm:px-6 lg:px-20 py-12">
          <div className="mx-auto max-w-[1200px] flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-mono text-sm uppercase tracking-wider">
                  Portfolio
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">
                  Projects
                </span>
              </h1>
              <p className="text-slate-400 max-w-2xl text-lg">
                A collection of projects showcasing my expertise in web
                development, backend engineering, and cloud infrastructure.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-card-dark p-6 sm:p-8 ring-1 ring-white/10 transition-all duration-300 hover:ring-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.15)] hover:bg-[#231c30]"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 ring-1 ring-primary/40 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-primary text-[14px]">
                          <Star />
                        </span>
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">
                          Featured
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Glow Effect */}
                  <div className="absolute -top-12 -right-12 size-32 bg-primary/10 blur-3xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Project Content */}
                  <div className="relative z-10 flex flex-col gap-5">
                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-slate-400 text-sm"
                            >
                              <span className="text-primary mt-0.5">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-lg bg-[#2f2348] px-3 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/10 hover:bg-primary/20 hover:text-primary hover:ring-primary/40 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-primary/25"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          <SquareArrowUpRight />
                        </span>
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white text-sm font-bold transition-all hover:translate-y-[-2px]"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-8 flex flex-col items-center gap-4 text-center">
              <p className="text-slate-400 text-lg">Want to see more?</p>
              <a
                href="https://github.com/iamritikbhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-white/5 px-8 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10 hover:ring-primary/50"
              >
                <span>View All Projects on GitHub</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </main>

        {/* Decoration Gradients */}
        <div className="fixed top-20 right-10 size-96 rounded-full bg-primary/20 blur-[128px] pointer-events-none"></div>
        <div className="fixed bottom-20 left-10 size-80 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none"></div>
      </div>
    </div>
  );
}
