'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  ChevronDown
} from 'lucide-react';
import styles from './page.module.css';

// Type definitions
interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Skill {
  name: string;
  color: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  github: string;
  image?: string;
}

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  target?: '_blank';
}

const page: React.FC = () => {
  // State with proper typing
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Effect for scroll handling
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections: string[] = ['home', 'about', 'work', 'contact'];
      const current = sections.find((section: string) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Data arrays with proper typing
  const navigationItems: NavigationItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skills: Skill[] = [
    { name: 'TypeScript', color: 'blue', level: 85 },
    { name: 'React', color: 'cyan', level: 85 },
    { name: 'Next.js', color: 'white', level: 80 },
    { name: 'Node.js', color: 'green', level: 80 },
    { name: 'Golang', color: 'blue', level: 50 },
    { name: 'Java', color: 'red', level: 75 },
    { name: 'Git', color: 'orange', level: 85 },
    { name: 'Linux', color: 'gray', level: 70 },
    { name: 'AWS', color: 'orange-light', level: 65 },
    { name: 'Blockchain', color: 'purple', level: 60 },
    { name: 'Docker', color: 'blue-light', level: 60 },
    { name: 'Github Actions', color: 'gray', level: 60 },
    { name: 'NGINX', color: 'red', level: 50 }
  ];

  const projects: Project[] = [
    {
      title: 'Scroll Animation Project',
      description: 'A smooth scrolling animation project with dynamic image transitions and modern UI interactions.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demo: './scrollani',
      github: 'https://github.com/iamritikbhardwaj/portfolio-site/tree/master/src/app/scrollani'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      demo: '/jymanime',
      github: 'https://github.com/iamritikbhardwaj/portfolio-site/tree/master/src/app/jymanime'
    },
    {
      title: 'Blockchain Voting App',
      description: 'Decentralized voting application built on Ethereum blockchain.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      demo: '#',
      github: 'https://github.com/iamritikbhardwaj/portfolio-site'
    }
  ];

  const contactItems: ContactItem[] = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'ritiklrt2@gmail.com', 
      href: 'mailto:ritiklrt2@gmail.com' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'Connect with me', 
      href: 'https://www.linkedin.com/in/ritik-singh-10b333227',
      target: '_blank'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'View my code', 
      href: 'https://github.com/iamritikbhardwaj',
      target: '_blank'
    },
    { 
      icon: Download, 
      label: 'Resume', 
      value: 'Download CV', 
      href: 'https://myactivitycrmbucket.s3.us-east-1.amazonaws.com/airTicketdocRitik%20Resume.pdf',
      target: '_blank'
    }
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/ritik-singh-10b333227',
      icon: Linkedin,
      label: 'LinkedIn Profile',
      hoverColor: 'linkedin'
    },
    {
      href: 'https://github.com/iamritikbhardwaj',
      icon: Github,
      label: 'GitHub Profile',
      hoverColor: 'github'
    },
    {
      href: 'mailto:ritiklrt2@gmail.com',
      icon: Mail,
      label: 'Email',
      hoverColor: 'email'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Enhanced Navigation */}
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            {/* Logo */}
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Code className={styles.logoIconSvg} />
              </div>
              <span className={styles.logoText}>
                Ritik Singh
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav}>
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`${styles.navButton} ${
                    activeSection === id ? styles.navButtonActive : ''
                  }`}
                  aria-label={`Navigate to ${label} section`}
                >
                  <Icon className={styles.navIcon} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map(({ href, icon: Icon, label, hoverColor }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${styles.socialLink} ${styles[`socialLink${hoverColor.charAt(0).toUpperCase() + hoverColor.slice(1)}`]}`}
                  aria-label={label}
                >
                  <Icon className={styles.socialIcon} />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.mobileMenuButton}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={styles.mobileNavButton}
                  aria-label={`Navigate to ${label} section`}
                >
                  <Icon className={styles.mobileNavIcon} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroAvatar}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarInner}>
                <Code className={styles.avatarIcon} />
              </div>
            </div>
          </div>
          
          <h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>
              Ritik Singh
            </span>
          </h1>
          
          <p className={styles.heroSubtitle}>Full Stack Developer</p>
          
          <p className={styles.heroDescription}>
            I speak in <code className={styles.codeTag}>&lt;code&gt;</code> so you don't have to.
          </p>
          
          <div className={styles.heroButtons}>
            <button
              onClick={() => scrollToSection('work')}
              className={styles.primaryButton}
              aria-label="View my work section"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={styles.secondaryButton}
              aria-label="Get in touch section"
            >
              Get In Touch
            </button>
          </div>
          
          <div className={styles.scrollIndicator}>
            <ChevronDown className={styles.scrollIcon} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              About Me
            </h2>
            <p className={styles.sectionDescription}>
              I am a passionate Full-Stack Developer based in India, creating innovative solutions with modern technologies. 
              I enjoy using my skill-set to empower people to accomplish their goals.
            </p>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.skillsSection}>
              <h3 className={styles.skillsTitle}>My Skills</h3>
              {skills.map((skill: Skill, index: number) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={`${styles.skillName} ${styles[`skill${skill.color.charAt(0).toUpperCase() + skill.color.slice(1)}`]}`}>
                      {skill.name}
                    </span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} skill level: ${skill.level}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.servicesSection}>
              <h3 className={styles.servicesTitle}>What I Do</h3>
              <div className={styles.servicesList}>
                {[
                  'Frontend Development with React, Next.js, and modern JavaScript/TypeScript',
                  'Backend Development with Node.js, Java, and cloud services',
                  'Blockchain Development and Smart Contract creation',
                  'DevOps and Cloud Infrastructure on AWS'
                ].map((service: string, index: number) => (
                  <div key={index} className={styles.serviceItem}>
                    <div className={`${styles.serviceDot} ${styles[`serviceDot${index}`]}`} />
                    <p className={styles.serviceText}>{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className={styles.workSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Featured Projects
            </h2>
            <p className={styles.sectionDescription}>Some of my recent work</p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project: Project, index: number) => (
              <article key={index} className={styles.projectCard}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techTags}>
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  <Link 
                    href={project.demo} 
                    className={styles.demoLink}
                    aria-label={`View demo of ${project.title}`}
                  >
                    <ExternalLink className={styles.linkIcon} />
                    <span>Demo</span>
                  </Link>
                  <Link 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.codeLink}
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github className={styles.linkIcon} />
                    <span>Code</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.sectionTitle}>
            Get In Touch
          </h2>
          <p className={styles.contactDescription}>
            Ready to work together? Let&apos;s create something amazing!
          </p>
          
          <div className={styles.contactGrid}>
            {contactItems.map((contact: ContactItem, index: number) => (
              <Link
                key={index}
                href={contact.href}
                target={contact.target}
                rel={contact.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={styles.contactCard}
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <contact.icon className={styles.contactIcon} />
                <h3 className={styles.contactLabel}>{contact.label}</h3>
                <p className={styles.contactValue}>{contact.value}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Designed and Developed by <span className={styles.footerName}>Ritik Singh</span>
            <sup className={styles.footerTrademark}>™</sup>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;