"use client";
import { useState,useEffect } from "react";

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
  
    return () => clearTimeout(timer);
  }, []);
  
  const handleShowDetails = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
    setSelectedImage(null);
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
    <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="flex flex-col items-center bg-gray-800 pb-6">
        <img
          src="/background.jpg"
          alt="banner"
          className="w-full h-48 object-cover"
        />
        <img
          src="/images/me.jpeg"
          alt="profile"
          className="w-24 h-24 rounded-full -mt-12 border-4 border-gray-900"
        />
        <h1 className="mt-4 text-2xl font-bold">Lordgent Rafelino</h1>
        <p className="text-sm text-gray-400">Backend Engineer</p>
        {/* Social Links */}
        <div className="flex gap-6 mt-4 mb-2">
          <a
            href="https://www.linkedin.com/in/lordgent-rafelino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <img
              src="/images/linkedin.png"
              className="h-6"
              alt="linkedin-account"
            />
          </a>
          <a
            href="https://github.com/lordgent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <img
              src="/images/github.png"
              className="h-6"
              alt="github-account"
            />
          </a>
          <a
            href="https://gitlab.com/lorjenx08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <img
              src="/images/gitlab.png"
              className="h-6"
              alt="gitlab-account"
            />
          </a>
        </div>
        <a
          href="https://wa.me/628817083978"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 mb-4"
        >
          Contact
        </a>
      </header>

      {/* Nav Tabs */}
      <nav className="flex flex-nowrap justify-start md:justify-center mb-4 gap-6 text-gray-400 border-t border-b border-gray-700 py-3 bg-gray-800 sticky top-0 z-10 overflow-x-auto scrollbar-hide pl-4 pr-4">
      {[
          "Summary",
          "Experience",
          "Education",
          "Skills",
          "Projects",
          "Certifications",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition whitespace-nowrap"
          >
            {item}
          </a>
        ))}
      </nav>


      {/* Main Content */}
      <main className="flex-grow">
        {/* Feed */}
        <section id="summary" className="max-w-4xl mx-auto px-4 py-10">
  <p className="text-gray-300 text-base leading-relaxed">
    I am a passionate and results-driven <strong>Fullstack Developer</strong> with <
      strong>4 years of professional experience</strong> in building web-based 
      solutions across industries including banking, agribusiness, retail, and consulting. 
      Proficient in both <strong>Backend</strong> (Java Spring Boot, Laravel, Node.js) and 
      <strong> Frontend</strong> (React, Next.js, Tailwind CSS) technologies, I specialize 
      in developing scalable, secure, and high-performance applications. I’m committed to continuous 
      learning and delivering clean, maintainable, and high-quality software solutions.
  </p>
</section>

        {/* Experience */}
        <section id="experience" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {[
  {
    title: "Fullstack Developer (Freelance) – OMNI IT Consulting",
    period: "March 2025 – Present",
    desc: "Built and upgraded ERP systems for various retail companies.",
    details: [
      "MJ Beauty: Developed an ERP system for beauty products, cosmetics, skincare, personal care, and makeup industries.",
    ],
  },
  {
    title: "Backend Developer – Digital Center",
    period: "December 2022 – Present",
    desc: "Developed enterprise-level backend systems and internal tools.",
    details: [
      "Maybank: Automated the loan application process, implemented SLIK validation, and integrated AA and DOREME services.",
      "Oldmutual: Built an employee innovation platform to facilitate collaboration and idea management.",
    ],
  },
  {
    title: "Frontend Developer – Ekosis",
    period: "January 2021 – December 2022",
    desc: "Built a digital platform for agribusinesses.",
    details: [
      "Developed the frontend of an agribusiness platform using modern React technologies.",
      "Collaborated with the backend team for seamless API integration.",
    ],
  },
]
.map((exp, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400 text-sm">{exp.period}</p>
                <p className="text-gray-400 mt-2">{exp.desc}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2 text-sm">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {[
              {
                title: "Information System",
                institution: "Universitas Terbuka",
                period: "2023 - Present",
              },
              {
                title: "Fullstack Developer Bootcamp",
                institution: "Dumbways.id",
                period: "2021",
              },
            ].map((edu, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-gray-400 text-sm">
                  {edu.institution}
                </p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "JavaScript",
              "TypeScript",
              "Laravel",
              "PHP",
              "AWS",
              "Springboot",
              "Docker",
              "SQL",
              "Tailwind CSS",
              "Reactjs",
              "State Management"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: "/images/project-maybank.jpg",
                title: "Maybank – Credit Workflow Automation",
                desc: "Automated credit application process, SLIK validation, and module integration.",
              },
              {
                img: "/images/innovoice.jpeg",
                title: "Oldmutual – Internal Idea Sharing Platform",
                desc: "Internal platform for idea sharing among Oldmutual employees.",
              },
              {
                img: "/images/ekosis-mart.png",
                title: "Ekosis – Platform Agribusiness",
                desc: "Development of an agribusiness marketplace and social media platform.",
              },
              {
                img: "/images/mjbeauty.png",
                title: "Mj Beauty – ERP System",
                desc: "Development and enhancement of ERP system for cosmetics retailer.",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="rounded mb-4 object-cover h-40 w-full"
                />
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="max-w-4xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div
              className="flex flex-col items-center"
              onClick={() =>
                handleShowDetails("/certifications/java_basic.jpg")
              }
            >
              <img
                src="/certifications/java_basic.jpg"
                className="w-full h-40 object-cover rounded shadow cursor-pointer"
                alt="Java Basic Certification"
              />
              <p className="mt-2 text-center text-sm text-gray-300">
                Java Certification
              </p>
            </div>
            {/* Card 2 */}
            <div
              className="flex flex-col items-center"
              onClick={() =>
                handleShowDetails("/certifications/certificate-dumbways.jpg")
              }
            >
              <img
                src="/certifications/certificate-dumbways.jpg"
                className="w-full h-40 object-cover rounded shadow cursor-pointer"
                alt="Dumbways Fullstack Bootcamp Certificate"
              />
              <p className="mt-2 text-center text-sm text-gray-300">
                Dumbways Fullstack Bootcamp Certificate
              </p>
            </div>
            {/* Card 3 */}
            <div
              className="flex flex-col items-center"
              onClick={() => handleShowDetails("/certifications/bnsp.jpg")}
            >
              <img
                src="/certifications/bnsp.jpg"
                className="w-full h-40 object-cover rounded shadow cursor-pointer"
                alt="BNSP Certification"
              />
              <p className="mt-2 text-center text-sm text-gray-300">
                BNSP Certification
              </p>
            </div>
          </div>
        </section>

        {/* Modal for showing image in full size */}
        {showDetails && selectedImage && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-gray-900 p-4 rounded-lg max-w-3xl mx-auto">
              <img
                src={selectedImage}
                className="w-full h-auto rounded"
                alt="Selected Certification"
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-700 mt-10">
        <p>© 2025 Lordgent Rafelino</p>
      </footer>
    </div>
  );
}
