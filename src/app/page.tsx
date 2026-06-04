"use client"
import React, { useEffect, useState } from "react";
import {
  Server,
  Cloud,
  Database,
  Terminal,
  Verified,
  Medal,
  Rocket,
  ArrowBigRight,
  Download,
  BookCopy,
  ShieldBan,
  MonitorCheck,
  Layers,
  Code2,
  Star,
  BoxIcon,
  Settings,
  Cpu,
  Check,
  ArrowRight,
  MessageSquare,
  Quote,
  SquareArrowUpRight,
  CheckCircle,
  ArrowUpRight,
  Copy,
  Mail,
  MessageCircle,
  UserPlus
} from "lucide-react";
import Header from "@/components/header";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger for client-side execution
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Contact Information
const contactInfo = {
  email: 'ritiklrt@gmail.com',
  phone: '+91 9119060487',
  github: 'iamritikbhardwaj',
  linkedin: 'https://www.linkedin.com/in/ritik-singh-10b333227/',
  whatsapp: '+919119060487',
  resumeUrl: '/resume.pdf',
  resumeSize: '2.4MB',
  availability: 'Open for New Projects',
  tagline: "Let's Craft Scalable Solutions",
  description: "We specialize in building robust distributed backends, DevOps pipelines, and AI engineering services. Reach out to discuss your software engineering needs or technical challenges!",
};

// Helper function to copy to clipboard
const handleCopy = (text: string) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
};

interface Capability {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  description: string;
  details: string[];
  technologies: string[];
}

const capabilities: Capability[] = [
  {
    id: '1',
    title: 'High-Performance Backend Development',
    subtitle: 'Microservices & Distributed Systems',
    icon: Server,
    description: 'We architect and build robust, concurrent server-side solutions capable of handling millions of requests with low latency. Specialized in modular microservices and high-efficiency communication frameworks.',
    details: [
      'Engineered multi-tenant microservices communicating via high-speed gRPC and RESTful endpoints.',
      'Designed transactional schemas using PostgreSQL and MongoDB, utilizing Redis caching layers to boost data delivery speed by 30%.',
      'Developed low-latency concurrent tasks leveraging Go’s native Goroutines.'
    ],
    technologies: ['Go (Golang)', 'Node.js', 'Express.js', 'NestJS', 'gRPC', 'GraphQL', 'RESTful APIs'],
  },
  {
    id: '2',
    title: 'Cloud Infrastructure & DevOps Automation',
    subtitle: 'Scalable AWS & Automation Workflows',
    icon: Cloud,
    description: 'We orchestrate and secure production environments in the cloud, setting up zero-downtime automated deployment pipelines and maintaining near-perfect system availability.',
    details: [
      'Engineered automated deployment pipelines that slashed production deployment time by 60%.',
      'Orchestrated secure and monitored cloud infrastructure on AWS (EC2, S3, IAM, VPC).',
      'Automated containerization with Docker to establish 100% environment parity between development and production.'
    ],
    technologies: ['AWS (EC2, S3, IAM, VPC)', 'Docker', 'GitHub Actions', 'CI/CD Pipelines', 'Nginx', 'Linux Administration'],
  },
  {
    id: '3',
    title: 'AI Integration & Next-Gen Engineering',
    subtitle: 'Vector Workflows & LLM Applications',
    icon: Cpu,
    description: 'We leverage cutting-edge generative AI workflows and vector retrieval methods to deliver next-generation AI assistants, search features, and highly optimized delivery cycles.',
    details: [
      'Integrated LLM models and built Retrieval-Augmented Generation (RAG) pipelines.',
      'Designed vector workflows utilizing vector databases like Pinecone and Milvus for fast semantic search.',
      'Adopted advanced AI engineering workflows (Cursor, Claude Code, Cline) to accelerate sprint delivery and code quality.'
    ],
    technologies: ['LLM Integration', 'RAG Pipelines', 'Pinecone', 'Milvus', 'Cursor', 'Claude Code', 'Cline'],
  },
  {
    id: '4',
    title: 'Frontend Architecture & Modern Web Apps',
    subtitle: 'Interactive, High-Performance Interfaces',
    icon: Code2,
    description: 'We build interactive, responsive, and search-optimized web applications with modern component-driven architectures, ensuring premium user experiences.',
    details: [
      'Modernized web interfaces using React 18, Next.js (App Router), and TypeScript.',
      'Managed complex client state using Redux Toolkit and React Query.',
      'Created aesthetic, fully responsive layouts using custom CSS and Tailwind CSS.'
    ],
    technologies: ['React 18', 'TypeScript', 'Next.js', 'Redux Toolkit', 'React Query', 'Tailwind CSS'],
  },
];

interface ClientTestimonial {
  id: string;
  clientName: string;
  logoText: string;
  logoBg: string;
  projectTitle: string;
  feedback: string;
  reviewer: string;
  reviewerRole: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  featured?: boolean;
}

const clients: ClientTestimonial[] = [
  {
    id: "1",
    clientName: "FlightScanner Ltd",
    logoText: "FS",
    logoBg: "from-blue-500 to-indigo-600",
    projectTitle: "Flight Booking Engine & API Integration",
    feedback:
      "Code Crafted Labs delivered our flight comparison portal ahead of schedule. The integration with the Kyte API is robust, and the automated refund loops on Stripe have saved us countless support hours.",
    reviewer: "Gurmeet Singh",
    reviewerRole: "Chief Executive officer",
    technologies: [
      "Next.js",
      "Stripe Integration",
      "Kyte API v3",
      "Redux Toolkit",
      "PostgreSQL",
    ],
    highlights: [
      "Automated Stripe refund triggers on ticketing failures",
      "Interactive seat-map layouts and rules engine",
    ],
    link: "https://flightscanner.co.za/",
    featured: true,
  },
  {
    id: "2",
    clientName: "Hope Foundation",
    logoText: "HF",
    logoBg: "from-amber-500 to-orange-600",
    projectTitle: "Accessible Web Platform & Donation Portal",
    feedback:
      "The accessible, modern NGO website built by the agency has dramatically increased user engagement and donations. The interface is clean, modular, and extremely fast.",
    reviewer: "Simran Bhardwaj",
    reviewerRole: "Program Director",
    technologies: ["React", "Next.js", "Tailwind CSS", "Accessible Design"],
    highlights: [
      "Clean, modern, and accessible UI",
      "High-speed optimized image delivery",
    ],
    link: "https://ngo-site-nine.vercel.app/",
    featured: false,
  },
  {
    id: "3",
    clientName: "Crochet by Simran",
    logoText: "CS",
    logoBg: "from-pink-500 to-rose-600",
    projectTitle: "E-Commerce Catalog & Brand Showcase",
    feedback:
      "Code Crafted Labs built an elegant, lighting-fast showcase catalog for our custom crochet designs. The visual presentation is stunning and inventory inquiries have surged since launch.",
    reviewer: "Simran Kaur",
    reviewerRole: "Founder",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    highlights: [
      "High-definition catalog with optimized media loaders",
      "Interactive product inquiry and WhatsApp booking flow",
    ],
    featured: true,
    link: "https://crochetbysimran.vercel.app/",
  },
];

const Page = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Entrance and scroll animations
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    const sections = ["#about", "#services", "#projects", "#contact"];
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden transition-colors duration-300">
      <div className="relative min-h-screen flex flex-col">
        {/* Decorative Background Gradient */}
        <div className="fixed top-0 left-0 right-0 h-[500px] w-full bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

        {/* Navigation */}
        <Header />

        {/* Hero Section */}
        <section id="home" className="flex-grow flex flex-col justify-center relative z-10 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
                <div className="hero-animate inline-flex items-center justify-center lg:justify-start gap-2 text-primary font-bold tracking-wide uppercase text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                  Available for hire
                </div>

                <div className="space-y-4">
                  <h1 className="hero-animate text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                    Code Crafted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Labs</span>
                  </h1>
                  <p className="hero-animate text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    High-performance software engineering agency. We design, scale, and maintain robust backend systems, distributed microservices, and modern web applications. Led by CTO Ritik Singh.
                  </p>
                </div>

                <div className="hero-animate flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a href="#projects" className="flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-white text-base font-bold h-12 px-8 transition-all shadow-lg shadow-primary/25 hover:translate-y-[-2px]">
                    <span>View Projects</span>
                    <span className="material-symbols-outlined text-xl"><ArrowBigRight /></span>
                  </a>
                  <a href="https://drive.google.com/file/d/1B7PDy7INqIw-nir9RcSEx7wubiE5JFw8/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-border-dark hover:bg-slate-100 dark:hover:bg-card-dark text-slate-900 dark:text-white text-base font-bold h-12 px-8 transition-all hover:translate-y-[-2px]">
                    <span className="material-symbols-outlined text-xl"><Download /></span>
                    <span>Resume</span> 
                  </a>
                </div>

                {/* Stats Row */}
                <div className="hero-animate flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg dark:bg-card-dark dark:border dark:border-border-dark">
                      <span className="material-symbols-outlined text-primary"><Verified /></span>
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold leading-none">3+</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Years Exp.</p>
                    </div>
                  </div>

                  <div className="w-px h-10 bg-border-dark hidden sm:block"></div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg dark:bg-card-dark dark:border dark:border-border-dark">
                      <span className="material-symbols-outlined text-primary"><Medal /></span>
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold leading-none">B.Tech</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Education</p>
                    </div>
                  </div>

                  <div className="w-px h-10 bg-border-dark hidden sm:block"></div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg dark:bg-card-dark dark:border dark:border-border-dark ">
                      <span className="material-symbols-outlined text-primary"><Rocket /></span>
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold leading-none">10+</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="relative order-1 lg:order-2 flex justify-center hero-animate">
                {/* Glow effect behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/30 to-transparent opacity-60 blur-3xl -z-10"></div>
                
                <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border border-border-dark shadow-2xl bg-card-dark group">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 z-10"></div>
                  
                  {/* Main Image */}
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/ad/2d/aa/ad2daaa9380ff25d24acfaeff16cd690.jpg')" }}
                    role="img"
                    aria-label="Professional portrait of a male developer working in a modern office environment with warm lighting"
                  ></div>
                  
                  {/* Floating Tech Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-background-dark/90 backdrop-blur-md border border-border-dark p-4 rounded-xl shadow-xl">
                      <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {/* Tech Chips */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-white text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Cloud /></span>
                          AWS
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><BoxIcon /></span>
                          Docker
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Star /></span>
                          React 18
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Code2 /></span>
                          TypeScript
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Terminal /></span>
                          Go (Golang)
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Layers /></span>
                          Node.js
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infinite Scroll Tech Bar */}
          <div className="w-full border-t border-border-dark bg-background-dark/50 overflow-hidden py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span className="material-symbols-outlined"><Database /></span> PostgreSQL
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span className="material-symbols-outlined"><Server /></span> Redis
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span className="material-symbols-outlined"><BookCopy /></span> GraphQL
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span className="material-symbols-outlined"><ShieldBan /></span> OAuth2
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span className="material-symbols-outlined"><MonitorCheck /></span> Prometheus
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 max-w-[1200px] px-6 mx-auto scroll-mt-24 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Image / Left Col */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-card-dark">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://i.pinimg.com/736x/29/85/3b/29853b52044d0ea63ab946afba8476a0.jpg')",
                  }}
                  role="img"
                  aria-label="Professional portrait of Ritik Singh, a software developer"
                ></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex gap-4 justify-center">
                    <a
                      className="p-2 bg-white/10 hover:bg-primary rounded-full backdrop-blur-sm transition-colors text-white"
                      href="https://github.com/iamritikbhardwaj"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="p-2 bg-white/10 hover:bg-primary rounded-full backdrop-blur-sm transition-colors text-white"
                      href="https://www.linkedin.com/in/ritik-singh-10b333227/"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.451V1.729C24 .774 23.2 0 22.225 0z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content / Right Col */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wide">
                  Open to work
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">CTO</span>
              </h2>
              <div className="prose prose-lg prose-invert text-slate-600 dark:text-slate-300 max-w-none">
                <p className="leading-relaxed">
                  Hello! I'm <strong className="text-slate-900 dark:text-white">Ritik Singh</strong>, Chief Technology Officer (CTO) of Code Crafted Labs.
                </p>
                <p className="leading-relaxed mt-4">
                  With over <strong className="text-primary">3+ years of hands-on experience</strong>, I specialize in designing, scaling, and maintaining robust backend microservices (Go, Node.js) and modern web applications (React, TypeScript). Expert at DevOps automation, slashing deployment overhead by 60% and maintaining 99.9% system uptime across complex AWS cloud environments. Expert at leveraging advanced AI-assisted engineering tools and vector workflows to accelerate delivery cycles.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="https://drive.google.com/file/d/1B7PDy7INqIw-nir9RcSEx7wubiE5JFw8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl h-12 px-8 bg-white dark:bg-card-dark text-slate-900 dark:text-white font-bold border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]"><Download /></span>
                  <span>Resume</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-xl h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/25"
                >
                  <span className="material-symbols-outlined text-[20px]"><Mail /></span>
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-border-dark mt-4">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">03+</span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Years Exp.</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">15+</span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Projects</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">100%</span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack & Skills Section */}
        <section className="w-full py-16 md:py-24 max-w-[1200px] px-6 mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Skills</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Tech Stack</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I am constantly learning and adapting to new technologies. Here is a snapshot of the core tools and languages I use on a daily basis to build resilient systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark">
                  <div className="size-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="font-medium text-slate-900 dark:text-white">System Design</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark">
                  <div className="size-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  <span className="font-medium text-slate-900 dark:text-white">Database Optimization</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark">
                  <div className="size-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                  <span className="font-medium text-slate-900 dark:text-white">Microservices</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark">
                  <div className="size-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
                  <span className="font-medium text-slate-900 dark:text-white">API Security</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-white dark:bg-card-dark p-8 rounded-3xl border border-gray-200 dark:border-border-dark shadow-2xl">
              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">code</span> Golang
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">95%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[95%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">javascript</span> Node.js / TypeScript
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">90%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[90%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">database</span> Databases (Postgres, Mongo, Redis)
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">85%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[85%]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">cloud_queue</span> AWS & DevOps (Docker, CI/CD)
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">85%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full bg-white dark:bg-[#130d1d] py-20 border-y border-gray-200 dark:border-border-dark/50 relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="layout-container max-w-[1200px] px-6 mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Services</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What We Do</h3>
              </div>
              <p className="max-w-md text-slate-600 dark:text-slate-400 text-sm md:text-base">
                We build, automate, and scale complex backend systems and premium client interfaces. Explore our core capabilities.
              </p>
            </div>
            
            <div className="relative flex flex-col gap-8">
              {capabilities.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <div 
                    key={cap.id} 
                    className="relative overflow-hidden rounded-2xl bg-card-dark p-6 sm:p-8 ring-1 ring-white/5 transition-all duration-300 hover:ring-primary/50 hover:bg-[#231c30] hover:shadow-[0_0_30px_rgba(91,19,236,0.15)]"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{cap.title}</h4>
                          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{cap.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">{cap.description}</p>

                    <div className="mb-6 space-y-3">
                      {cap.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-slate-400 text-sm sm:text-base">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <p className="leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {cap.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="inline-flex items-center rounded-lg bg-[#2f2348] px-3 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/5 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Engagement Process */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-purple-900/10 border border-primary/20">
              <h4 className="text-2xl font-bold text-white mb-4">Our Engagement Process</h4>
              <p className="text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">
                We work in streamlined cycles designed to minimize friction and maximize technical excellence:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <h5 className="font-bold text-white flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full size-5 flex items-center justify-center text-xs">1</span>
                    Architecture Design
                  </h5>
                  <p className="text-slate-400">Specifying technical layers, database schemas, and parity configurations.</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full size-5 flex items-center justify-center text-xs">2</span>
                    AI-Assisted Sprint Delivery
                  </h5>
                  <p className="text-slate-400">Rapid feature coding matching rigorous testing constraints.</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full size-5 flex items-center justify-center text-xs">3</span>
                    CI/CD & Monitoring
                  </h5>
                  <p className="text-slate-400">Continuous deployment to AWS with custom telemetry dashboards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects & Testimonials Section */}
        <section id="projects" className="w-full py-20 max-w-[1200px] px-6 mx-auto scroll-mt-24 z-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-mono text-sm uppercase tracking-wider">Success Stories</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">Testimonials</span>
              </h3>
              <p className="text-slate-400 max-w-2xl text-lg">
                Hear directly from the engineering leads and stakeholders who have scaled their operations and infrastructure with Code Crafted Labs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="group relative overflow-hidden rounded-2xl bg-card-dark p-6 sm:p-8 ring-1 ring-white/10 transition-all duration-300 hover:ring-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.15)] hover:bg-[#231c30] flex flex-col justify-between min-h-[380px]"
                >
                  <div className="absolute -top-12 -right-12 size-32 bg-primary/10 blur-3xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className={`size-12 rounded-xl bg-gradient-to-br ${client.logoBg} flex items-center justify-center font-bold text-white text-lg shadow-md`}>
                          {client.logoText}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white leading-tight">{client.clientName}</h4>
                          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">{client.projectTitle}</p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-primary/30" />
                    </div>

                    <p className="text-slate-300 leading-relaxed italic text-sm sm:text-base">"{client.feedback}"</p>

                    <div className="border-l-2 border-primary/50 pl-4 py-1">
                      <p className="text-sm font-bold text-white">{client.reviewer}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{client.reviewerRole}</p>
                    </div>

                    {client.highlights && client.highlights.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" /> Key Achievements
                        </h4>
                        <ul className="space-y-1.5 pl-5">
                          {client.highlights.map((highlight, idx) => (
                            <li key={idx} className="list-disc text-slate-400 text-sm">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 pt-6 border-t border-white/5 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {client.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-lg bg-[#2f2348] px-2.5 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {client.link && (
                      <div className="pt-2">
                        <a
                          href={client.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-primary/25"
                        >
                          <SquareArrowUpRight className="w-4 h-4" />
                          <span>Visit Client Site</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 max-w-[1200px] px-6 mx-auto scroll-mt-24 z-10">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              {contactInfo.availability}
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight dark:text-white leading-tight">
              {contactInfo.tagline.split(' ').slice(0, 2).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">{contactInfo.tagline.split(' ').slice(2).join(' ')}</span>
            </h3>
            <p className="text-[#a492c9] text-lg max-w-2xl leading-relaxed">{contactInfo.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Email Card */}
            <button
              onClick={() => handleCopy(contactInfo.email)}
              className="group relative flex flex-col p-6 rounded-xl bg-card-dark border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,19,236,0.25)] hover:border-primary cursor-pointer text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                  <span className="material-symbols-outlined text-[32px] flex items-center justify-center"><Mail className="w-8 h-8" /></span>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><Copy className="w-5 h-5" /></span>
              </div>
              <h4 className="text-white text-xl font-bold mb-1">Email</h4>
              <p className="text-[#a492c9] text-sm mb-4">Best for detailed project proposals</p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-300 font-mono text-sm">{contactInfo.email}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
              </div>
            </button>

            {/* LinkedIn Card */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-6 rounded-xl bg-card-dark border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,19,236,0.25)] hover:border-primary cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-[#0077b5] group-hover:bg-[#0077b5]/20 transition-colors">
                  <span className="material-symbols-outlined text-[32px] flex items-center justify-center"><UserPlus className="w-8 h-8" /></span>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><ArrowUpRight className="w-5 h-5" /></span>
              </div>
              <h4 className="text-white text-xl font-bold mb-1">LinkedIn</h4>
              <p className="text-[#a492c9] text-sm mb-4">Connect with our leadership</p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-300 text-sm">View CTO Profile</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Visit</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-6 rounded-xl bg-card-dark border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,19,236,0.25)] hover:border-primary cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors">
                  <span className="material-symbols-outlined text-[32px] flex items-center justify-center"><MessageCircle className="w-8 h-8" /></span>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><ArrowUpRight className="w-5 h-5" /></span>
              </div>
              <h4 className="text-white text-xl font-bold mb-1">WhatsApp</h4>
              <p className="text-[#a492c9] text-sm mb-4">Quick chats &amp; inquiries</p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Open</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={`https://github.com/${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-6 rounded-xl bg-card-dark border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,19,236,0.25)] hover:border-primary cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white/10 transition-colors">
                  <svg className="w-8 h-8 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><ArrowUpRight className="w-5 h-5" /></span>
              </div>
              <h4 className="text-white text-xl font-bold mb-1">GitHub</h4>
              <p className="text-[#a492c9] text-sm mb-4">Check out our open-source tools</p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-300 text-sm">@{contactInfo.github}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Visit</span>
              </div>
            </a>
          </div>

          <div className="mt-16 text-center border-t border-white/5 pt-12">
            <p className="dark:text-white text-lg font-medium leading-normal mb-2">Partner with Code Crafted Labs to build high-performance software.</p>
            <p className="text-[#a492c9] text-sm">Let's turn your specifications into production-grade systems.</p>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="w-full bg-[#120d1c] border-t border-card-border mt-auto relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#6b5a8e] text-sm text-center md:text-left">© 2026 Code Crafted Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a 
              href={`https://github.com/${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b5a8e] hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] flex items-center justify-center"><Terminal className="w-5 h-5" /></span>
            </a>
            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b5a8e] hover:text-[#0077b5] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] flex items-center justify-center"><UserPlus className="w-5 h-5" /></span>
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-[#6b5a8e] hover:text-accent-cyan transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] flex items-center justify-center"><Mail className="w-5 h-5" /></span>
            </a>
          </div>
          <div className="flex gap-6 text-sm">
            <a className="text-[#6b5a8e] hover:text-white transition-colors" href="#">Privacy</a>
            <a className="text-[#6b5a8e] hover:text-white transition-colors" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
