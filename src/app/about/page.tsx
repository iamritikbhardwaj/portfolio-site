"use client"
import Header from '@/components/header';
import { Cloud, Download, Link, Mail, Server, Settings, Terminal } from 'lucide-react';
import React from 'react';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'About Me - Ritik Singh',
//   description: 'Backend & Cloud Developer with 2+ years of experience in scalable microservices and cloud infrastructure',
// };

export default function Page() {

  return (

    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden text-slate-900 dark:text-white">
      {/* Top Navigation */}
      <Header />
      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section / Introduction */}
        <section className="w-full max-w-[1200px] px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Image / Left Col */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-card-dark">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://i.pinimg.com/736x/29/85/3b/29853b52044d0ea63ab946afba8476a0.jpg')" }}
                  role="img"
                  aria-label="Professional portrait of Ritik Singh, a software developer"
                ></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex gap-4 justify-center">
                    <a className="p-2 bg-white/10 hover:bg-primary rounded-full backdrop-blur-sm transition-colors text-white" href="https://github.com/iamritikbhardwaj" aria-label="GitHub">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                      </svg>
                    </a>
                    <a className="p-2 bg-white/10 hover:bg-primary rounded-full backdrop-blur-sm transition-colors text-white" href="https://www.linkedin.com/in/ritik-singh-10b333227/" aria-label="LinkedIn">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.451V1.729C24 .774 23.2 0 22.225 0z" fillRule="evenodd"></path>
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
                <span className="text-xs font-bold uppercase tracking-wide">Open to work</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Me</span>
              </h1>
              <div className="prose prose-lg prose-invert text-slate-600 dark:text-slate-300 max-w-none">
                <p className="leading-relaxed">
                  Hello! I'm <strong className="text-slate-900 dark:text-white">Ritik Singh</strong>, a passionate Backend & Cloud Developer based in India.
                </p>
                <p className="leading-relaxed mt-4">
                  With over <strong className="text-primary">3+ years of hands-on experience</strong>, I specialize in architecting scalable microservices, optimizing database performance, and automating cloud infrastructure. My approach combines robust engineering principles with modern DevOps practices to deliver high-performance solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a href='https://drive.google.com/file/d/1B7PDy7INqIw-nir9RcSEx7wubiE5JFw8/view?usp=sharing' target="_blank" className="flex items-center justify-center gap-2 rounded-xl h-12 px-8 bg-white dark:bg-card-dark text-slate-900 dark:text-white font-bold border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]"><Download /></span>
                  <span>Resume</span>
                </a>
                <a href='mailto:ritiklrt2@gmail.com' target='_blank' className="flex items-center justify-center gap-2 rounded-xl h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/25">
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

        {/* What I Do Section */}
        <section className="w-full bg-white dark:bg-[#130d1d] py-16 md:py-24 border-y border-gray-200 dark:border-border-dark/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="layout-container max-w-[1200px] px-6 mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Services</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What I Do</h3>
              </div>
              <p className="max-w-md text-slate-600 dark:text-slate-400 text-sm md:text-base">
                I build digital products with a focus on backend stability, cloud scalability, and efficient development pipelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl"><Server /></span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Backend Development</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Designing robust RESTful APIs and microservices using Go and Node.js. Optimized for high concurrency and low latency.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl"><Cloud /></span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cloud Infrastructure</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Managing scalable AWS environments (EC2, S3, Lambda) and serverless architectures with Terraform and CloudFormation.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl"><Settings /></span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">DevOps Automation</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Streamlining CI/CD pipelines with Docker, Kubernetes, and GitHub Actions to ensure rapid and reliable deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full py-16 md:py-24 max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Description */}
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

            {/* Progress Bars */}
            <div className="flex flex-col gap-6 bg-white dark:bg-card-dark p-8 rounded-3xl border border-gray-200 dark:border-border-dark shadow-2xl shadow-black/5 dark:shadow-black/20">
              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">code</span> Golang
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">95%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[95%] shadow-[0_0_10px_rgba(91,19,236,0.4)]"></div>
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
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[90%] shadow-[0_0_10px_rgba(91,19,236,0.4)]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">database</span> PostgreSQL / SQL
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">85%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[85%] shadow-[0_0_10px_rgba(91,19,236,0.4)]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">cloud_queue</span> AWS / Cloud
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">80%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[80%] shadow-[0_0_10px_rgba(91,19,236,0.4)]"></div>
                </div>
              </div>

              {/* Skill Item */}
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">deployed_code</span> Docker & K8s
                  </span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">75%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-purple-400 h-2.5 rounded-full w-[75%] shadow-[0_0_10px_rgba(91,19,236,0.4)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 px-6">
          <div className="max-w-[1200px] mx-auto w-full rounded-3xl overflow-hidden relative bg-primary">
            <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/300')] opacity-10 bg-repeat mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-900 opacity-90"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8 text-center md:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to scale your infrastructure?</h2>
                <p className="text-white/80 text-lg">Let's build robust, high-performance systems together.</p>
              </div>
              <button className="bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-4 rounded-xl font-bold text-lg shadow-xl shrink-0 min-w-[200px]">
                Start a Project
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 dark:border-border-dark py-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">© 2024 Ritik Singh. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}