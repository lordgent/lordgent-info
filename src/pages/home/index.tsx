"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// 1. Data Experience - Gaya bahasa santai & professional
const EXPERIENCES = [
  {
    title: "Fullstack Developer (IT Soho Engineer) – PT BIMASAKTI MULTI SINERGI",
    period: "December 2025 – Present",
    desc: "Developing 'Winme', an all-in-one platform that helps people start selling their products online instantly and hassle-free.",
    details: [
      "Designed and built a secure admin dashboard to keep track of all sales and financial transactions.",
      "Created easy-to-read reports and data summaries to help the team monitor business growth every day.",
      "Optimized the system to make sure everything runs smoothly as more users join the platform."
    ]
  },
  {
    title: "Fullstack Developer (Freelance) – OMNI IT Consulting",
    period: "March 2025 – August 2025",
    desc: "Helped retail businesses improve their internal systems to work more efficiently.",
    details: [
      "Built a custom management system for MJ Beauty to help them handle their beauty and skincare business more easily."
    ]
  },
  {
    title: "Backend Developer – Digital Center",
    period: "December 2022 – December 2025",
    desc: "Developed high-quality backend systems and services for large enterprise companies.",
    details: [
      "Automated the loan application process for Maybank, making it faster and more reliable.",
      "Developed an innovation hub for Oldmutual where employees can collaborate and share new ideas."
    ]
  },
  {
    title: "Frontend Developer – Ekosis",
    period: "January 2021 – December 2022",
    desc: "Worked on a digital marketplace for farmers, focusing on creating a friendly and easy-to-use interface.",
    details: [
      "Designed clean and responsive web pages to ensure a great experience for all users.",
      "Worked closely with the team to make sure the app stayed fast and connected."
    ]
  }
];
const PROJECTS = [
{ 
  img: "/images/mydocease.svg", 
  title: "MyDocEase (mydocease.my.id)", 
  status: "Development",
  desc: "web-based tool designed to help you manage, convert, and process various document formats quickly and easily." 
},
  { img: "/images/project-maybank.jpg", title: "Maybank Automation", status: "Production", desc: "Credit workflow automation & SLIK validation." },
  { img: "/images/innovoice.jpeg", title: "Oldmutual Platform", status: "Production", desc: "Internal platform for idea sharing among employees." },
  { img: "/images/ekosis-mart.png", title: "Ekosis Agribusiness", status: "Production", desc: "Marketplace and social media for farmers." },
  { img: "/images/mjbeauty.png", title: "Mj Beauty ERP", status: "Production", desc: "ERP system for cosmetics retailer." }
];

const SKILLS = [
  { 
    category: "Backend", 
    items: ["Java Spring Boot", "Laravel", "Node.js", "PostgreSQL", "Third-party API Integration"] 
  },
  { 
    category: "Frontend", 
    items: ["React.js", "Vue.js", "Next.js", "Tailwind CSS"] 
  },
  { 
    category: "Infrastructure & Tools", // Pengganti Etc Tools yang lebih solid
    items: ["Docker", "Nginx", "VPS Management", "Linux Server", "Git"] 
  }
];

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleShowDetails = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowDetails(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col scroll-smooth">
      {/* Header Section */}
      <header className="relative flex flex-col items-center bg-gray-800 pb-6">
        <div className="w-full h-48 relative">
           <Image src="/background.jpg" alt="banner" fill className="object-cover" priority />
        </div>
        <div className="relative w-24 h-24 -mt-12">
            <Image 
                src="/images/me.jpeg" 
                alt="profile" 
                fill 
                className="rounded-full border-4 border-gray-900 object-cover"
            />
        </div>
        <h1 className="mt-4 text-2xl font-bold">Lordgent Rafelino</h1>
        <p className="text-sm text-pink-500 font-medium">Fullstack Developer</p>
        
        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          {['linkedin', 'github', 'gitlab'].map((platform) => (
            <a key={platform} href={platform === 'linkedin' ? "https://www.linkedin.com/in/lordgent-rafelino" : platform === 'github' ? "https://github.com/lordgent" : "https://gitlab.com/lorjenx08"} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition">
              <img src={`/images/${platform}.png`} className="h-6 w-6 object-contain" alt={platform} />
            </a>
          ))}
        </div>
        <a href="https://wa.me/628817083978" className="mt-6 bg-pink-500 text-white px-8 py-2 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105">
          Contact Me
        </a>
      </header>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-20 bg-gray-800/80 backdrop-blur-md border-y border-gray-700 py-4 overflow-x-auto">
        <div className="max-w-4xl mx-auto flex justify-around px-4 min-w-max gap-8">
          {["Summary", "Experience", "Skills", "Projects", "Certifications"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-pink-500 transition font-medium">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="flex-grow">
        {/* Summary Section */}
<section id="summary" className="max-w-4xl mx-auto px-4 py-16">
  <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
    <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center italic">
      "I'm a <strong className="text-pink-500 font-semibold">Fullstack Developer </strong> building secure and scalable digital products. I focus on creating efficient software that solves business problems.
    </p>
    
  </div>
</section>

        {/* Experience Section */}
        <section id="experience" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-pink-500 pl-4">Work Experience</h2>
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gray-700 group">
                <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[6.5px] top-2 group-hover:scale-125 transition"></div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-pink-400 text-xs font-mono bg-pink-500/10 px-2 py-0.5 rounded">{exp.period}</span>
                <p className="text-gray-400 mt-2 text-sm italic">{exp.desc}</p>
                <ul className="mt-3 space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-pink-500 mt-1">▹</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section - Tambahan Baru */}
        <section id="skills" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-pink-500 pl-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-colors">
                <h3 className="text-pink-500 font-bold mb-4 text-xs uppercase tracking-widest">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-md text-xs border border-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-8 border-l-4 border-pink-500 pl-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300 border border-gray-700">
                <div className="h-48 relative">
                   <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                     <span className="text-gray-500">Project Image</span>
                   </div>
                   <Image src={proj.img} alt={proj.title} fill className="object-cover relative z-10" />
                   {proj.status === "Development" && (
                     <span className="absolute top-3 right-3 z-20 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded">Personal project</span>
                   )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{proj.title}</h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{proj.desc}</p>
                  {proj.title.includes("mydocease") && (
                    <a href="https://mydocease.my.id" target="_blank" className="text-pink-500 text-xs mt-3 inline-block hover:underline">Visit Site ↗</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="max-w-4xl mx-auto py-10 px-4">
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-pink-500 pl-4">Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["software_engineer.jpg", "java_basic.jpg", "certificate-dumbways.jpg", "bnsp.jpg"].map((cert, idx) => (
                    <div key={idx} className="cursor-pointer group" onClick={() => handleShowDetails(`/certifications/${cert}`)}>
                        <div className="relative h-32 rounded-lg overflow-hidden border border-gray-700 group-hover:border-pink-500 transition">
                            <Image src={`/certifications/${cert}`} alt="Certificate" fill className="object-cover group-hover:scale-110 transition duration-500" />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Modal */}
        {showDetails && selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4" onClick={() => setShowDetails(false)}>
            <div className="relative max-w-4xl w-full">
              <img src={selectedImage} className="w-full h-auto rounded-lg shadow-2xl" alt="Full view" />
              <button className="absolute -top-10 right-0 text-white hover:text-pink-500 text-xl font-bold">✕ Close</button>
            </div>
          </div>
        )}
      </main>

      <footer className="py-12 text-center text-gray-500 bg-gray-800/30">
        <p className="text-sm">Built with Next.js & Tailwind CSS</p>
        <p className="mt-2 text-xs">© 2026 Lordgent Rafelino. All rights reserved.</p>
      </footer>
    </div>
  );
}