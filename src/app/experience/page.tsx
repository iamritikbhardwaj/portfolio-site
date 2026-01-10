import { Book, Calendar, Code, Code2, Headset, Layers, LucideProps, Phone, Server, Terminal } from 'lucide-react';
import type { Metadata } from 'next';
import {ReactElement} from 'react';

export const metadata: Metadata = {
  title: 'Ritik Singh - Professional Experience',
  description: 'A chronological overview of my journey in backend engineering and cloud architecture, highlighting key projects and technical achievements.',
};

// Experience Data Type
interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  current: boolean;
  icon: ReactElement<any, any>;
  achievements: string[];
  techStack: string[];
}

// Experience Data - Edit this array to update your experience
const experiences: Experience[] = [
  {
    id: '1',
    title: 'Technical Interviewer',
    company: 'Patch Infotech Pvt Ltd',
    period: 'Oct 2025 - Present',
    current: true,
    icon: <Terminal />,
    achievements: [
      'Conducting <strong>technical interviews</strong> for backend and full-stack roles, evaluating candidates on data structures, system design, and real-world problem solving.',
      'Designed structured interview flows to assess <strong>backend fundamentals</strong>, API design, databases, and cloud basics.',
      'Provided detailed feedback to hiring teams, improving candidate quality and hiring efficiency.',
    ],
    techStack: ['Backend Systems', 'DSA', 'System Design', 'APIs'],
  },
  {
    id: '2',
    title: 'Founding Software Development Engineer',
    company: 'ActivityBeds LLC',
    period: 'Feb 2025 - Sep 2025',
    current: false,
    icon: <Layers />,
    achievements: [
      'Built and maintained <strong>core backend systems</strong> for a travel technology platform using <strong>Node.js</strong> and <strong>Go</strong>.',
      'Designed and optimized <strong>SQL (PostgreSQL/MySQL)</strong> and <strong>NoSQL (MongoDB/Redis)</strong> databases for performance and scalability.',
      'Deployed and managed production systems on <strong>AWS</strong> and Linux-based VPS with high availability and security best practices.',
      'Implemented <strong>CI/CD pipelines</strong> and containerized services using <strong>Docker</strong>, streamlining deployments.',
      'Contributed to a <strong>microservices architecture</strong>, enabling independent service scaling and faster iteration.',
      'Owned features end-to-end — from planning and architecture to deployment, monitoring, and maintenance.',
    ],
    techStack: ['Node.js', 'Go', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: '3',
    title: 'Software Developer (Trainee)',
    company: 'Edios Global',
    period: 'Sep 2024 - Dec 2024',
    current: false,
    icon: <Code2 />,
    achievements: [
      'Worked on real-world <strong>software development tasks</strong> as part of a trainee program.',
      'Contributed to application development while learning industry-standard coding practices.',
      'Collaborated with senior developers to understand production-level workflows.',
    ],
    techStack: ['Software Development', 'Problem Solving'],
  },
  {
    id: '4',
    title: 'Software Development Engineer',
    company: 'Infodia Technologies Pvt. Ltd.',
    period: 'Sep 2023 - Sep 2024',
    current: false,
    icon: <Server />,
    achievements: [
      'Developed and maintained <strong>backend services</strong> using <strong>Node.js</strong> for scalable web applications.',
      'Designed and implemented <strong>RESTful APIs</strong> for web and mobile platforms.',
      'Worked extensively with <strong>MongoDB</strong> and <strong>PostgreSQL</strong>, optimizing schemas and queries.',
      'Implemented <strong>JWT and OAuth</strong> based authentication and authorization.',
      'Improved system stability through effective debugging, logging, and performance optimization.',
    ],
    techStack: ['Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'JWT', 'OAuth'],
  },
  {
    id: '5',
    title: 'Android Development Intern',
    company: 'ThinkNEXT',
    period: 'Jun 2022 - Sep 2022',
    current: false,
    icon: <Phone />,
    achievements: [
      'Developed <strong>Android applications</strong> using <strong>Java</strong> and <strong>Kotlin</strong>.',
      'Built interactive UIs with activities, fragments, and custom views.',
      'Integrated <strong>REST APIs</strong> using Retrofit and Volley.',
      'Used <strong>SQLite</strong> for efficient local data storage.',
    ],
    techStack: ['Java', 'Kotlin', 'Android', 'SQLite', 'REST APIs'],
  },
  {
    id: '7',
    title: 'Coding Instructor',
    company: 'Out Of the Box Solutions',
    period: 'Oct 2021 - Dec 2021',
    current: false,
    icon: <Book />,
    achievements: [
      'Delivered engaging <strong>coding lessons</strong> to learners of varying skill levels.',
      'Helped students develop strong <strong>problem-solving</strong> fundamentals.',
      'Contributed to the growth of an online startup focused on accessible coding education.',
    ],
    techStack: ['Teaching', 'Problem Solving', 'Mentorship'],
  },
];


export default function ExperiencePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Main Container */}
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-b-border-dark bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-20">
          <div className="flex items-center gap-4 text-white">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-400 text-white">
              <span className="material-symbols-outlined text-[20px]"><Code2 /></span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Ritik Singh</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-6">
              <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/about">About</a>
              <a className="text-white text-sm font-medium" href="/experience">Experience</a>
              <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/projects">Projects</a>
              <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="/contact">Contact</a>
            </nav>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-9 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
              <span>Resume</span>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 px-4 sm:px-6 lg:px-40 py-12">
          <div className="mx-auto max-w-[960px] flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-mono text-sm uppercase tracking-wider">Career Path</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">Experience</span>
              </h1>
              <p className="text-slate-400 max-w-2xl text-lg">
                A chronological overview of my journey in backend engineering and cloud architecture, highlighting key projects and technical achievements.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative mt-4">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-4 bottom-0 w-[2px] bg-[#2f2348]"></div>

              {/* Experience Items */}
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`group relative flex gap-6 ${index !== experiences.length - 1 ? 'pb-12 sm:pb-16' : ''}`}
                >
                  {/* Left Icon */}
                  <div className="relative flex-none z-10">
                    <div className={`flex size-10 items-center justify-center rounded-full ring-4 ring-background-dark transition-colors ${
                      exp.current 
                        ? 'bg-primary shadow-[0_0_15px_rgba(91,19,236,0.5)]' 
                        : 'bg-[#2f2348] group-hover:bg-primary/40'
                    }`}>
                      <span className={`material-symbols-outlined text-[20px] ${
                        exp.current ? 'text-white' : 'text-slate-200'
                      }`}>
                        {exp.icon}
                      </span>
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className="flex-1">
                    <div className={`relative overflow-hidden rounded-2xl bg-card-dark p-6 sm:p-8 ring-1 transition-all duration-300 hover:bg-[#231c30] ${
                      exp.current 
                        ? 'ring-white/10 hover:ring-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.15)]' 
                        : 'ring-white/5 hover:ring-white/20'
                    }`}>
                      {/* Active Glow Corner (only for current role) */}
                      {exp.current && (
                        <div className="absolute -top-12 -right-12 size-32 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
                      )}
                      
                      <div className={`flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6 ${exp.current ? 'relative z-10' : ''}`}>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-[#a492c9] font-medium text-lg">
                            <span className="material-symbols-outlined text-[18px]">business</span>
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ring-1 ring-inset ${
                          exp.current 
                            ? 'bg-primary/10 ring-primary/30' 
                            : 'bg-white/5 ring-white/10'
                        }`}>
                          <span className={`material-symbols-outlined text-[16px] ${
                            exp.current ? 'text-primary' : 'text-slate-400'
                          }`}>
                            <Calendar />
                          </span>
                          <span className={`font-mono text-xs font-bold uppercase ${
                            exp.current ? 'text-primary' : 'text-slate-300'
                          }`}>
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <div className={`mb-6 space-y-3 ${exp.current ? 'text-slate-300 relative z-10' : 'text-slate-400'}`}>
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex gap-3">
                            <span className={`mt-1.5 ${exp.current ? 'text-primary' : 'text-[#a492c9]'}`}>
                              {exp.current ? (
                                <svg fill="currentColor" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 5L10 5M5 0L5 10" stroke="currentColor" strokeWidth="2"></path>
                                </svg>
                              ) : (
                                '▹'
                              )}
                            </span>
                            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: achievement }}></p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className={`flex flex-wrap gap-2 ${exp.current ? 'relative z-10' : ''}`}>
                        {exp.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className={`inline-flex items-center rounded-lg bg-[#2f2348] px-3 py-1.5 text-xs font-medium ring-1 ring-inset cursor-default ${
                              exp.current 
                                ? 'text-white ring-white/10 hover:bg-primary/20 hover:text-primary hover:ring-primary/40 transition-colors' 
                                : 'text-slate-300 ring-white/5'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Fading Bottom Line */}
              <div className="absolute left-[19px] bottom-0 h-24 w-[2px] bg-gradient-to-b from-[#2f2348] to-transparent"></div>
            </div>

            {/* Footer / CTA */}
            <div className="mt-8 flex justify-center">
              <button className="group flex items-center gap-3 rounded-full bg-white/5 px-8 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10 hover:ring-primary/50">
                <span>Download Full Resume</span>
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
        </main>

        {/* Decoration Gradients */}
        <div className="fixed top-20 left-10 size-96 rounded-full bg-primary/20 blur-[128px] pointer-events-none"></div>
        <div className="fixed bottom-10 right-10 size-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
      </div>
    </div>
  );
}