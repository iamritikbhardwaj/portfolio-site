"use client"

import { ArrowUpRight, Copy, Mail, MessageCircle, Terminal, UserPlus } from "lucide-react";

// Contact Information - Edit this object to update your contact details
const contactInfo = {
  email: 'ritiklrt@gmail.com',
  phone: '+91 9119060487',
  github: 'iamritikbhardwaj',
  linkedin: 'https://www.linkedin.com/in/ritik-singh-10b333227/',
  whatsapp: '+919119060487', // Format: country code + number (no spaces or special chars)
  resumeUrl: '/resume.pdf', // Update with your actual resume path
  resumeSize: '2.4MB', // Update with actual size
  availability: 'Available for work',
  tagline: "Let's Build Something Scalable",
  description: "I specialize in robust backend systems and cloud architecture. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
};

// Helper function to copy to clipboard
const handleCopy = (text: string) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
};

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-card-border bg-[#171122]/90 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary flex items-center justify-center bg-white/5 rounded-lg">
              <span className="material-symbols-outlined text-[24px]"><Terminal /></span>
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">Ritik Singh</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="/">Home</a>
            <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="/projects">Projects</a>
            <a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="/about">About</a>
            <a className="text-white text-sm font-medium border-b-2 border-primary py-5" href="/contact">Contact</a>
          </nav>
          <div className="hidden md:flex items-center">
            <a 
              href={contactInfo.resumeUrl}
              download
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold px-5 py-2 rounded-lg transition-all shadow-lg shadow-primary/20 group"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>CV</span>
            </a>
          </div>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative">
        {/* Background Decor */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="layout-container w-full max-w-[960px] px-6 py-12 md:py-20 z-10">
          {/* Heading Section */}
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              {contactInfo.availability}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight dark:text-white leading-tight">
              {contactInfo.tagline.split(' ').slice(0, 2).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">{contactInfo.tagline.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-[#a492c9] text-lg max-w-2xl leading-relaxed">
              {contactInfo.description}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Email Card */}
            <button
              onClick={() => handleCopy(contactInfo.email)}
              className="group relative flex flex-col p-6 rounded-xl bg-card-dark border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,19,236,0.25)] hover:border-primary cursor-pointer text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                  <span className="material-symbols-outlined text-[32px]"><Mail /></span>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><Copy /></span>
              </div>
              <h3 className="text-white text-xl font-bold mb-1">Email</h3>
              <p className="text-[#a492c9] text-sm mb-4">Best for detailed inquiries</p>
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
                  <span className="material-symbols-outlined text-[32px]"><UserPlus /></span>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><ArrowUpRight /></span>
              </div>
              <h3 className="text-white text-xl font-bold mb-1">LinkedIn</h3>
              <p className="text-[#a492c9] text-sm mb-4">Connect professionally</p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-300 text-sm">View Profile</span>
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
                  <span className="material-symbols-outlined text-[32px]"><MessageCircle /></span>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><ArrowUpRight /></span>
              </div>
              <h3 className="text-white text-xl font-bold mb-1">WhatsApp</h3>
              <p className="text-[#a492c9] text-sm mb-4">Quick chats &amp; concise messages</p>
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
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors"><ArrowUpRight /></span>
              </div>
              <h3 className="text-white text-xl font-bold mb-1">GitHub</h3>
              <p className="text-[#a492c9] text-sm mb-4">Check out my code &amp; projects</p>
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-gray-300 text-sm">@{contactInfo.github}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Visit</span>
              </div>
            </a>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center border-t border-white/5 pt-12">
            <p className="text-white text-lg font-medium leading-normal mb-2">Open to backend opportunities and cloud architecture projects.</p>
            <p className="text-[#a492c9] text-sm">Let's turn your requirements into efficient code.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#120d1c] border-t border-card-border mt-auto">
        <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#6b5a8e] text-sm text-center md:text-left">© 2024 Ritik Singh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a 
              href={`https://github.com/${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b5a8e] hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b5a8e] hover:text-[#0077b5] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">work</span>
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-[#6b5a8e] hover:text-accent-cyan transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
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
}