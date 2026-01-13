"use client"
import React from "react";
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
} from "lucide-react";
import Header from "@/components/header";

const Page = () => {

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden transition-colors duration-300">
      <div className="relative min-h-screen flex flex-col">
        {/* Decorative Background Gradient */}
        <div className="fixed top-0 left-0 right-0 h-[500px] w-full bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

        {/* Navigation */}
        <Header />

        {/* Hero Section */}
        <main className="flex-grow flex flex-col justify-center relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary font-bold tracking-wide uppercase text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                  Available for hire
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                    Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Cloud Systems</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    I architect robust server-side solutions and high-performance infrastructure for modern applications. Expert in optimizing backend systems for scale.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button onClick={() => {
                    window.location.assign("/projects")
                  }} className="flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-white text-base font-bold h-12 px-8 transition-all shadow-lg shadow-primary/25 hover:translate-y-[-2px]">
                    <span>View Projects</span>
                    <span className="material-symbols-outlined text-xl"><ArrowBigRight /></span>
                  </button>
                  <button onClick={() => window.location.assign("https://drive.google.com/file/d/1B7PDy7INqIw-nir9RcSEx7wubiE5JFw8/view?usp=drive_link")} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-border-dark hover:bg-slate-100 dark:hover:bg-card-dark text-slate-900 dark:text-white text-base font-bold h-12 px-8 transition-all hover:translate-y-[-2px]">
                    <span className="material-symbols-outlined text-xl"><Download /></span>
                    <span>Resume</span> 
                  </button>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
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
                      <p className="text-xl font-bold leading-none">3</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Certifications</p>
                    </div>
                  </div>

                  <div className="w-px h-10 bg-border-dark hidden sm:block"></div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg dark:bg-card-dark dark:border dark:border-border-dark ">
                      <span className="material-symbols-outlined text-primary"><Rocket /></span>
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold leading-none">20+</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="relative order-1 lg:order-2 flex justify-center">
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
                        {/* Tech Chip 1 */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-white text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Cloud /></span>
                          AWS
                        </div>
                        
                        {/* Tech Chip 2 */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><BoxIcon /></span>
                          Docker
                        </div>
                        
                        {/* Tech Chip 3 */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Star /></span>
                          K8s
                        </div>
                        
                        {/* Tech Chip 4 */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Code2 /></span>
                          TypeScript
                        </div>
                        
                        {/* Tech Chip 5 */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Terminal /></span>
                          Go
                        </div>
                        
                        {/* Tech Chip 6 */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                          <span className="material-symbols-outlined text-[16px]"><Layers /></span>
                          Terraform
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infinite Scroll Tech Bar (Visual Flair) */}
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
        </main>
      </div>
    </div>
  );
};

export default Page;

