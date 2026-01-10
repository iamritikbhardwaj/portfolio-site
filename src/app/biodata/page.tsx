import type { Metadata } from 'next';
import { Calendar, Ruler, Sparkles, Church, MapPin, GraduationCap, BookOpen, Briefcase, MapPinned, IndianRupee, User, Users, Phone, Mail, Download, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marriage Biodata - Ritik Singh',
  description: 'Marriage biodata of Ritik Singh',
};

// Biodata Information - Edit this object to update your details
const biodataInfo = {
  name: 'Ritik Singh',
  photo: 'https://i.pinimg.com/736x/29/85/3b/29853b52044d0ea63ab946afba8476a0.jpg',
  personalDetails: {
    dateOfBirth: '19th February, 2001',
    timeOfBirth: '01:30 AM',
    placeOfBirth: 'Bihar',
    rashi: 'Dhanu (Sagittarius)',
    height: "5 feet 9 inches",
    complexion: 'Medium',
    gotra: 'Bhardwaj',
    rajput: 'Goutam',
    rajputMother: 'Chauhan',
    religion: 'Hindu',
    caste: 'Rajput',
    location: 'Haridwar, Uttrakhand',
  },
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Chandigarh University',
      icon: GraduationCap,
    },
  ],
  professional: {
    designation: 'Technical Interviewer & Software Engineer',
    company: 'Patch Infotech',
    location: 'Sector 49, Gurgaon',
    salary: '5 LPA',
  },
  about: "I am a career-oriented individual with a blend of modern values and respect for traditions. Friends describe me as grounded, ambitious, and easy-going. I enjoy traveling, reading non-fiction, and staying fit. I am looking for a partner who is understanding, educated, and ready to share a journey of growth and happiness together.",
  family: {
    father: {
      name: 'Arjun Singh',
      occupation: 'Union Leader - Work Man, JK Tyres, Laksar, Haridwar',
    },
    mother: {
      name: 'Ritu Singh',
      occupation: 'House Wife',
    },
    siblings: [
      {
        relation: 'Sister',
        name: 'Esha Singh',
        status: 'Unmarried',
        education: 'B.Tech in Computer Science, Chandigarh University',
        occupation: 'Data Analyst, Global Logic',
      },
    ],
  },
  contact: {
    person: 'Arjun Singh (Father)',
    mobile: '+91 9149354756',
    alternate: '+91 9119060487',
    email: 'ritiklrt2@gmail.com',
    address: 'Gram Jigna Jagarnath, Post Jigna Jagarnath, Gopalganj, Bihar - 841438',
  },
};

export default function BiodataPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#181511] antialiased min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#181511]/80 backdrop-blur-md border-b border-[#f4f3f0] dark:border-[#332f25] px-4 md:px-10 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-[#181511] dark:text-white text-lg font-bold leading-tight tracking-tight">Biodata</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg h-9 bg-background-light dark:bg-white/10 text-[#181511] dark:text-white hover:bg-primary/20 transition-colors gap-2 text-sm font-bold px-4">
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-9 bg-background-light dark:bg-white/10 text-[#181511] dark:text-white hover:bg-primary/20 transition-colors gap-2 text-sm font-bold px-4">
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full py-8 px-4 md:px-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Biodata Card */}
          <div className="bg-white dark:bg-[#2a2418] shadow-sm rounded-xl overflow-hidden border border-[#f4f3f0] dark:border-[#3a3429]">
            {/* Card Header */}
            <div className="relative flex flex-col items-center pt-10 pb-6 px-6 text-center border-b border-[#f4f3f0] dark:border-[#3a3429]">
              {/* Om Symbol */}
              <div className="text-primary/80 mb-4 opacity-80">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"></path>
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fillOpacity="0.3"></path>
                </svg>
              </div>
              <h1 className="text-[#181511] dark:text-white text-4xl md:text-5xl font-black tracking-tighter mb-2">
                {biodataInfo.name}
              </h1>
              <p className="text-primary text-sm md:text-base font-medium tracking-widest uppercase">Marriage Biodata</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-2">Shubh Vivah</p>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* LEFT COLUMN: Sidebar */}
              <div className="w-full md:w-1/3 bg-[#fcfbf9] dark:bg-[#252015] border-r border-[#f4f3f0] dark:border-[#3a3429] p-6 md:p-8 flex flex-col gap-8">
                {/* Photo */}
                <div 
                  className="aspect-[3/4] w-full bg-cover bg-center rounded-lg shadow-inner overflow-hidden relative group"
                  style={{ backgroundImage: `url('${biodataInfo.photo}')` }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>

                {/* Personal Details */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-200 dark:border-gray-700 pb-2">
                    Personal Details
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4 items-start">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Date of Birth</p>
                        <p className="text-[#181511] dark:text-gray-200 font-medium">{biodataInfo.personalDetails.dateOfBirth}</p>
                        <p className="text-xs text-gray-400">{biodataInfo.personalDetails.timeOfBirth}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                        <Ruler className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Height</p>
                        <p className="text-[#181511] dark:text-gray-200 font-medium">{biodataInfo.personalDetails.height}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Rashi & Gotra</p>
                        <p className="text-[#181511] dark:text-gray-200 font-medium">{biodataInfo.personalDetails.rashi}</p>
                        <p className="text-sm text-gray-500">{biodataInfo.personalDetails.gotra}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                        <Church className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Religion</p>
                        <p className="text-[#181511] dark:text-gray-200 font-medium">{biodataInfo.personalDetails.religion}</p>
                        <p className="text-sm text-gray-500">{biodataInfo.personalDetails.caste}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Location</p>
                        <p className="text-[#181511] dark:text-gray-200 font-medium">{biodataInfo.personalDetails.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Sidebar */}
                <div className="flex flex-col gap-4 pt-2">
                  <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-200 dark:border-gray-700 pb-2">
                    Education
                  </h3>
                  {biodataInfo.education.map((edu, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <edu.icon className="text-primary w-[18px] h-[18px]" />
                      <span className="text-[#181511] dark:text-gray-200 text-sm font-medium">{edu.degree}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Main Content */}
              <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col gap-10">
                {/* About Me */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-primary rounded-full"></div>
                    <h3 className="text-2xl font-bold text-[#181511] dark:text-white">About Me</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {biodataInfo.about}
                  </p>
                </section>

                {/* Professional Background */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1 bg-primary rounded-full"></div>
                    <h3 className="text-2xl font-bold text-[#181511] dark:text-white">Professional Background</h3>
                  </div>
                  <div className="bg-[#f8f7f6] dark:bg-[#332d22] rounded-xl p-6 flex flex-col gap-4 border border-transparent hover:border-primary/20 transition-all">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-[#181511] dark:text-white">{biodataInfo.professional.designation}</h4>
                        <p className="text-primary font-medium">{biodataInfo.professional.company}</p>
                      </div>
                      <span className="bg-white dark:bg-[#2a2418] text-xs font-bold px-3 py-1 rounded-full text-gray-500 border border-gray-100 dark:border-gray-700">
                        Present
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Currently working as a technical interviewer and software engineer at {biodataInfo.professional.company}. Based in {biodataInfo.professional.location}.
                    </p>
                    <div className="flex gap-4 mt-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <IndianRupee className="w-4 h-4" />
                        <span>{biodataInfo.professional.salary}</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Family Background */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1 bg-primary rounded-full"></div>
                    <h3 className="text-2xl font-bold text-[#181511] dark:text-white">Family Background</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Father */}
                    <div className="flex items-center gap-4 p-4 border border-[#f4f3f0] dark:border-[#3a3429] rounded-xl">
                      <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center text-primary shrink-0">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Father</p>
                        <p className="font-bold text-[#181511] dark:text-white">{biodataInfo.family.father.name}</p>
                        <p className="text-sm text-gray-500">{biodataInfo.family.father.occupation}</p>
                      </div>
                    </div>

                    {/* Mother */}
                    <div className="flex items-center gap-4 p-4 border border-[#f4f3f0] dark:border-[#3a3429] rounded-xl">
                      <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center text-primary shrink-0">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Mother</p>
                        <p className="font-bold text-[#181511] dark:text-white">{biodataInfo.family.mother.name}</p>
                        <p className="text-sm text-gray-500">{biodataInfo.family.mother.occupation}</p>
                      </div>
                    </div>

                    {/* Siblings */}
                    {biodataInfo.family.siblings.map((sibling, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 border border-[#f4f3f0] dark:border-[#3a3429] rounded-xl md:col-span-2">
                        <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center text-primary shrink-0">
                          <Users className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-bold">{sibling.relation}</p>
                          <p className="font-bold text-[#181511] dark:text-white">{sibling.name} ({sibling.status})</p>
                          <p className="text-sm text-gray-500">{sibling.education}</p>
                          <p className="text-sm text-gray-500">{sibling.occupation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Contact Footer */}
                <div className="mt-auto pt-8 border-t border-[#f4f3f0] dark:border-[#3a3429]">
                  <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                    Contact Information
                  </h3>
                  <div className="flex flex-col gap-4 mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-bold">Contact Person:</span> {biodataInfo.contact.person}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a className="flex items-center gap-3 group" href={`tel:${biodataInfo.contact.mobile}`}>
                      <div className="bg-[#181511] dark:bg-white text-white dark:text-[#181511] p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Mobile</span>
                        <span className="font-bold text-[#181511] dark:text-white group-hover:text-primary transition-colors">
                          {biodataInfo.contact.mobile}
                        </span>
                      </div>
                    </a>
                    <a className="flex items-center gap-3 group" href={`mailto:${biodataInfo.contact.email}`}>
                      <div className="bg-[#181511] dark:bg-white text-white dark:text-[#181511] p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Email</span>
                        <span className="font-bold text-[#181511] dark:text-white group-hover:text-primary transition-colors">
                          {biodataInfo.contact.email}
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="mt-4 p-4 bg-[#f8f7f6] dark:bg-[#332d22] rounded-lg">
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">Permanent Address</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{biodataInfo.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="py-6 text-center">
            <p className="text-gray-500 dark:text-gray-400 italic mb-2">॥ शुभ विवाह ॥</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">May this union be blessed with happiness and prosperity</p>
            <p className="text-xs text-gray-400 mt-4">© 2024 {biodataInfo.name} Biodata. All rights reserved.</p>
          </div>
        </div>
      </main>
    </div>
  );
}