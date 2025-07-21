"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Home,
  User,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Download,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Server,
  Cloud,
  Database,
  Terminal,
  Cpu,
  Shield,
  Zap,
  GitBranch,
  Container,
  Activity,
  Globe,
  Monitor,
  FileCode,
} from "lucide-react";

const Page = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");

  const typewriterTexts = [
    "Building scalable APIs",
    "Architecting microservices",
    "Optimizing cloud infrastructure",
    "Automating DevOps pipelines",
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentText = typewriterTexts[textIndex];

      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const techStack = [
    { name: "Go", level: 90, color: "bg-blue-500", icon: Terminal },
    { name: "Node.js", level: 90, color: "bg-green-500", icon: Server },
    { name: "PostgreSQL", level: 85, color: "bg-blue-600", icon: Database },
    { name: "AWS", level: 85, color: "bg-orange-500", icon: Cloud },
    { name: "Docker", level: 85, color: "bg-blue-400", icon: Container },
    { name: "Microservices", level: 80, color: "bg-purple-500", icon: Cpu },
    { name: "Linux", level: 85, color: "bg-gray-600", icon: Monitor },
    { name: "REST APIs", level: 90, color: "bg-green-600", icon: Globe },
    { name: "MongoDB", level: 75, color: "bg-green-700", icon: Database },
    {
      name: "GitHub Actions",
      level: 80,
      color: "bg-gray-700",
      icon: GitBranch,
    },
    { name: "React", level: 70, color: "bg-cyan-500", icon: FileCode },
    { name: "Security", level: 75, color: "bg-red-500", icon: Shield },
  ];

  const projects = [
    {
      title: "gorecon - Advanced Web Reconnaissance Tool",
      description:
        "High-performance CLI reconnaissance tool built in Go with concurrent processing, DNS lookups, port scanning, and modular architecture. Features real-time results and extensible plugin system.",
      technologies: ["Go", "Concurrency", "CLI", "DNS", "Network Security"],
      demo: "https://crm.tomatotrails.com/portfolio/",
      github: "https://github.com/iamritikbhardwaj/gorecon",
      highlights: [
        "Concurrent processing",
        "Real-time scanning",
        "Modular design",
      ],
    },
    {
      title: "Cloud-Native E-Commerce Microservices",
      description:
        "Scalable e-commerce backend architecture with independent microservices for user management, product catalog, inventory, and order processing. Deployed on AWS with Docker containerization.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "AWS",
        "Microservices",
      ],
      demo: "https://crm.tomatotrails.com/portfolio/jymanime/",
      github:
        "https://github.com/iamritikbhardwaj/portfolio-site/tree/master/src/app/jymanime",
      highlights: ["Microservices architecture", "Auto-scaling", "API Gateway"],
    },
    {
      title: "DevOps Automation Pipeline",
      description:
        "Complete CI/CD pipeline with automated testing, Docker builds, AWS deployment, monitoring, and rollback capabilities. Reduces deployment time by 80% with zero-downtime deployments.",
      technologies: ["GitHub Actions", "Docker", "AWS", "Linux", "Monitoring"],
      demo: "https://crm.tomatotrails.com/portfolio/scrollani/",
      github: "https://github.com/iamritikbhardwaj/portfolio-site",
      highlights: [
        "Zero-downtime deployment",
        "Automated monitoring",
        "Infrastructure as Code",
      ],
    },
  ];

  const experiences = [
    {
      title: "Backend Developer",
      period: "2022 - Present",
      description:
        "Building high-performance APIs and microservices using Go and Node.js. Architected scalable systems handling 10k+ concurrent users.",
      technologies: ["Go", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Cloud Engineer",
      period: "2023 - Present",
      description:
        "Designed and implemented cloud infrastructure on AWS. Automated deployment pipelines reducing deployment time by 75%.",
      technologies: ["AWS", "Docker", "CI/CD", "Linux", "Monitoring"],
    },
    {
      title: "Systems Developer",
      period: "2022 - 2024",
      description:
        "Developed CLI tools and automation scripts. Created security-focused applications for web reconnaissance and system monitoring.",
      technologies: ["Go", "Bash", "Linux", "Security", "Automation"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ritik Singh
              </span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div style={{ whiteSpace: "nowrap" }} className="hidden md:flex items-center space-x-4">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "bg-purple-500/20 text-purple-300"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://github.com/iamritikbhardwaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-singh-10b333227"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-500/20">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-white/5 transition-colors rounded-lg mx-2"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-purple-500/20">
                <a
                  href="https://github.com/iamritikbhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ritik-singh-10b333227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Animated Avatar */}
            <div className="relative flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Server className="w-16 h-16 text-purple-400" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Activity className="w-4 h-4 text-white animate-pulse" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ritik Singh
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300">
                Backend & Cloud Developer
              </h2>
              <div className="h-16 flex items-center justify-center">
                <p className="text-lg sm:text-xl text-purple-300 font-mono">
                  {typedText}
                  <span className="animate-blink">|</span>
                </p>
              </div>
            </div>

            <p className="max-w-4xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
              Building scalable, production-grade systems with{" "}
              <span className="text-cyan-400 font-mono">Go</span>,
              <span className="text-green-400 font-mono"> Node.js</span>, and
              cloud-native architecture. Specializing in microservices, DevOps
              automation, and high-performance APIs with 2+ years of hands-on
              experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 font-semibold"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all duration-200 font-semibold"
              >
                Get In Touch
              </button>
            </div>

            <div className="pt-12">
              <ChevronDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Backend & Cloud Developer with 2+ years of hands-on experience
              building scalable, production-grade systems. I specialize in
              microservices architecture, DevOps automation, and secure API
              development with a focus on cloud-native applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Code className="w-6 h-6 mr-3 text-purple-400" />
                Tech Stack
              </h3>
              <div className="space-y-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <tech.icon className="w-5 h-5 text-purple-400" />
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div
                        className={`h-full rounded-full ${tech.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                What I Do
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Server,
                    title: "Backend Development",
                    description:
                      "High-performance APIs and microservices using Go and Node.js with focus on scalability and maintainability.",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Infrastructure",
                    description:
                      "AWS-based solutions with Docker containerization, auto-scaling, and infrastructure as code.",
                  },
                  {
                    icon: Database,
                    title: "Database Architecture",
                    description:
                      "Design and optimization of SQL/NoSQL databases (PostgreSQL, MySQL, MongoDB) for high-throughput applications.",
                  },
                  {
                    icon: GitBranch,
                    title: "DevOps & Automation",
                    description:
                      "CI/CD pipelines, automated testing, monitoring, and deployment strategies for production systems.",
                  },
                  {
                    icon: Terminal,
                    title: "CLI Tools & Security",
                    description:
                      "Command-line applications, automation scripts, and security-focused tools for system administration.",
                  },
                  {
                    icon: Shield,
                    title: "API Security",
                    description:
                      "Secure API development, authentication systems, and web security best practices implementation.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                  >
                    <service.icon className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              2+ years building production systems
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/30 rounded-xl p-6 sm:p-8 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                  <span className="text-purple-400 font-semibold mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 text-base sm:text-lg leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Production-ready applications and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/30 rounded-xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 hover:border-purple-500/50 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2 border border-purple-500 hover:bg-purple-500/10 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Ready to build something amazing together?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "ritiklrt2@gmail.com",
                href: "mailto:ritiklrt2@gmail.com",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Connect with me",
                href: "https://www.linkedin.com/in/ritik-singh-10b333227",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "View my code",
                href: "https://github.com/iamritikbhardwaj",
                color: "from-gray-700 to-gray-800",
              },
              {
                icon: Download,
                label: "Resume",
                value: "Download CV",
                href: "https://docs.google.com/document/d/1etiWlOR9qL_CTUcUgtD6tYx0uKoI1GKXhWWVUWR3ecA/edit?usp=sharing",
                color: "from-green-500 to-green-600",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group block p-6 sm:p-8 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 hover:border-purple-500/50"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{contact.label}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Always curious, always building — whether it&apos;s infrastructure on
              AWS, RESTful services, or CLI-based tools.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              Designed and Built by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Ritik Singh
              </span>
              <sup className="text-xs">™</sup>
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Page;