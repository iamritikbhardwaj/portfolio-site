"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  Server,
  Cloud,
  Database,
  Settings,
  Shield,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "strong" | "proficient";
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demoUrl: string;
  githubUrl: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const Page: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTypeText, setCurrentTypeText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );

  const typewriterTexts = [
    "Backend Developer",
    "Cloud Engineer",
    "Systems Architect",
    "DevOps Enthusiast",
  ];

  const skills: Skill[] = [
    { name: "Go", level: 90, category: "strong" },
    { name: "Node.js", level: 90, category: "strong" },
    { name: "PostgreSQL", level: 85, category: "strong" },
    { name: "AWS", level: 85, category: "strong" },
    { name: "Docker", level: 85, category: "strong" },
    { name: "Microservices", level: 80, category: "strong" },
    { name: "Linux", level: 85, category: "strong" },
    { name: "REST APIs", level: 90, category: "strong" },
    { name: "GitHub Actions", level: 80, category: "strong" },
    { name: "MongoDB", level: 75, category: "proficient" },
    { name: "React", level: 70, category: "proficient" },
    { name: "Security", level: 75, category: "proficient" },
  ];

  const projects: Project[] = [
    {
      title: "gorecon - Advanced Web Reconnaissance Tool",
      description:
        "High-performance CLI tool in Go with concurrent processing, DNS lookups, port scanning, and modular architecture for real-time security reconnaissance.",
      technologies: ["Go", "Concurrency", "CLI", "DNS", "Network Security"],
      highlights: [
        "Concurrent processing",
        "Real-time scanning",
        "Modular design",
      ],
      demoUrl: "https://crm.tomatotrails.com/portfolio/",
      githubUrl: "https://github.com/iamritikbhardwaj/gorecon",
    },
    {
      title: "Cloud-Native E-Commerce Microservices",
      description:
        "Scalable e-commerce backend with independent microservices for user, product, inventory, and order management. Deployed on AWS with Docker containers.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "AWS",
        "Microservices",
      ],
      highlights: ["Microservices architecture", "Auto-scaling", "API Gateway"],
      demoUrl: "/portfolio/jymanime",
      githubUrl:
        "https://github.com/iamritikbhardwaj/portfolio-site/tree/master/src/app/jymanime",
    },
    {
      title: "DevOps Automation Pipeline",
      description:
        "Complete CI/CD pipeline with automated testing, Docker builds, AWS deployment, monitoring, and rollback capabilities. Achieved 80% deployment time reduction.",
      technologies: ["GitHub Actions", "Docker", "AWS", "Linux", "Monitoring"],
      highlights: [
        "Zero-downtime deployment",
        "Automated monitoring",
        "Infrastructure as Code",
      ],
      demoUrl: "/portfolio/scrollani",
      githubUrl: "https://github.com/iamritikbhardwaj/portfolio-site",
    },
  ];

  const experiences: Experience[] = [
    {
      title: "Backend Developer",
      company: "Current Position",
      period: "2025 - Present",
      description:
        "Building high-performance APIs and microservices using Go and Node.js, architecting scalable systems capable of handling 10k+ concurrent users.",
      technologies: ["Go", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Cloud Engineer",
      company: "Previous Role",
      period: "2023 - 2024",
      description:
        "Designed and implemented AWS infrastructure solutions, automated deployment pipelines achieving 75% reduction in deployment time.",
      technologies: ["AWS", "Docker", "CI/CD", "Linux", "Monitoring"],
    },
    {
      title: "Systems Developer",
      company: "Early Career",
      period: "2022 - 2023",
      description:
        "Developed CLI tools and automation scripts, created security-focused web reconnaissance and monitoring applications.",
      technologies: ["Go", "Bash", "Linux", "Security", "Automation"],
    },
  ];

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "High-Performance APIs",
      description:
        "Building scalable REST APIs and microservices using Go and Node.js",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Cloud Solutions",
      description:
        "Designing cloud-native architecture with Docker, auto-scaling, and IaC",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Optimization",
      description:
        "SQL/NoSQL database design, optimization, and performance tuning",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps Automation",
      description:
        "CI/CD pipelines, automated testing, monitoring, and deployment",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "CLI Tools & Scripts",
      description:
        "Custom automation scripts and command-line tools development",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Development",
      description:
        "Security-focused applications, authentication, and web security",
    },
  ];

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentText = typewriterTexts[currentIndex];

        if (!isDeleting) {
          if (currentTypeText.length < currentText.length) {
            setCurrentTypeText(
              currentText.substring(0, currentTypeText.length + 1)
            );
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentTypeText.length > 0) {
            setCurrentTypeText(
              currentText.substring(0, currentTypeText.length - 1)
            );
          } else {
            setIsDeleting(false);
            setCurrentIndex(
              (prevIndex) => (prevIndex + 1) % typewriterTexts.length
            );
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentTypeText, currentIndex, isDeleting, typewriterTexts]);

  const handleProjectHover = (index: number) => {
    setHoveredProject(index);
    if (!iframeLoaded[index]) {
      setIframeLoaded((prev) => ({ ...prev, [index]: false }));
    }
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  const handleIframeLoad = (index: number) => {
    setIframeLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Ritik Singh
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-green-600 transition-colors text-gray-700"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-green-600 transition-colors text-gray-700"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-green-600 transition-colors text-gray-700"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-green-600 transition-colors text-gray-700"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block hover:text-green-600 transition-colors text-gray-700"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block hover:text-green-600 transition-colors text-gray-700"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block hover:text-green-600 transition-colors text-gray-700"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block hover:text-green-600 transition-colors text-gray-700"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-cyan-100/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Ritik Singh
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 h-12">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              {currentTypeText}
            </span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Building scalable, production-grade systems with 2+ years of
            experience in cloud-native architecture, microservices, and DevOps
            automation.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r text-white from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate Backend & Cloud Developer focused on building
                scalable, production-grade systems. With 2+ years of experience,
                I specialize in creating high-performance APIs, microservices
                architecture, and implementing robust cloud solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across modern technologies like Go, Node.js,
                AWS, and Docker, with a strong emphasis on DevOps practices,
                security, and automation. I'm driven by the challenge of solving
                complex problems and building systems that can scale to serve
                thousands of users.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          skill.category === "strong"
                            ? "bg-gradient-to-r from-green-500 to-cyan-500"
                            : "bg-gradient-to-r from-gray-400 to-gray-500"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What I Do */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-green-600">
              What I Do
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div className="text-green-600 mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-green-600">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-gray-700">{exp.company}</p>
                  </div>
                  <span className="text-cyan-600 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-green-100 to-cyan-100 border border-green-300 px-3 py-1 rounded-full text-sm text-gray-800"
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
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-200 p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] shadow-sm overflow-hidden"
                onMouseEnter={() => handleProjectHover(index)}
                onMouseLeave={handleProjectLeave}
              >
                {/* Project Content */}
                <div
                  className={`transition-all duration-500 ${
                    hoveredProject === index ? "lg:w-1/2" : "w-full"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-cyan-600">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-300 px-3 py-1 rounded-full text-sm text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-50"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Demo Preview Iframe */}
                {hoveredProject === index && (
                  <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
                    <div className="h-full p-4">
                      <div className="relative h-full bg-white rounded-lg shadow-2xl border-2 border-gray-300 overflow-hidden">
                        {/* Browser Chrome */}
                        <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-300">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 mx-4">
                            <div className="bg-white rounded px-3 py-1 text-xs text-gray-600 truncate">
                              {project.demoUrl}
                            </div>
                          </div>
                        </div>

                        {/* Loading State */}
                        {!iframeLoaded[index] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
                              <p className="text-sm text-gray-500">
                                Loading preview...
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Iframe */}
                        <iframe
                          src={
                            project.demoUrl.startsWith("http")
                              ? project.demoUrl
                              : `https://ritiksingh.dev${project.demoUrl}`
                          }
                          className="w-full h-full border-0"
                          onLoad={() => handleIframeLoad(index)}
                          onError={() =>
                            setIframeLoaded((prev) => ({
                              ...prev,
                              [index]: false,
                            }))
                          }
                          title={`${project.title} Demo`}
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        />

                        {/* Overlay to prevent interaction */}
                        <div
                          className="absolute inset-0 bg-transparent cursor-pointer"
                          onClick={() =>
                            window.open(
                              project.demoUrl.startsWith("http")
                                ? project.demoUrl
                                : `https://ritiksingh.dev${project.demoUrl}`,
                              "_blank"
                            )
                          }
                        />

                        {/* Corner badge */}
                        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                          Live Preview
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              Interested in working together or have a project in mind? I'd love
              to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:ritiklrt2@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">ritiklrt2@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ritik-singh-10b333227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">Connect with me</p>
                  </div>
                </a>

                <a
                  href="https://github.com/iamritikbhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <p className="text-gray-600">View my repositories</p>
                  </div>
                </a>
              </div>

              <div className="pt-6">
                <a
                  href="https://docs.google.com/document/d/1etiWlOR9qL_CTUcUgtD6tYx0uKoI1GKXhWWVUWR3ecA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r text-white from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r text-white from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Ritik Singh. All rights reserved. Built with Next.js &
            TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
