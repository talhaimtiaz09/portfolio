"use client";

import { motion, useScroll, useTransform,useSpring } from "framer-motion";
import { useRef,useState } from "react";
import SectionLayout from "@/layouts/SectionLayout";
import {  AnimatePresence } from "framer-motion";

const workExperiences = [
  {
    title: "DevOps Engineer",
    company: "CarbonTeq",
    duration: "Jun 2025 - Present",
    location: "Lahore · On-site",
    description: [
      "Deployed and managed Coolify and Dokploy on on-prem servers, improving dev workflows and platform uptime.",
      "Maintained GitHub Actions CI/CD pipelines ensuring fast, reliable deployments.",
      "Handled a server security incident and established long-term protection systems.",
      "Deployed a scalable multiplayer game on Kubernetes with Pulumi & KEDA autoscaling.",
    ],
    skills: ["DevOps", "Cybersecurity", "Coolify", "Kubernetes", "CI/CD"],
  },
  {
    title: "Founding Engineer",
    company: "RobinRelay",
    duration: "Jun 2025 - Sep 2025",
    location: "Spain · Remote",
    description: [
      "Built a smart Slack chatbot using n8n + Azure OpenAI with RAG architecture.",
      "Designed workflows, knowledge base, and production-ready automation systems.",
      "Live demo: Robinrelay.ai",
    ],
    skills: ["Automation", "n8n", "Azure OpenAI", "RAG"],
  },
  {
    title: "Software Engineer",
    company: "RSSD INFOTECH",
    duration: "Jun 2024 - Feb 2025",
    location: "India · Remote",
    description: [
      "Built a CASA web app integrating live microscope video feeds.",
      "Automated sperm analysis using custom CNN models, boosting lab efficiency.",
      "Implemented low-latency streaming and on-prem deployment pipeline.",
    ],
    skills: ["CNN", "Low-Latency Streaming", "Web Dev", "Socket.io"],
  },
  {
    title: "Frontend Developer & UI Designer",
    company: "Cube Programming",
    duration: "Apr 2024 - Aug 2024",
    location: "USA · Remote",
    description: [
      "Designed and developed UI/UX & frontend for Verify.pk.",
      "Built complete Figma wireframes and high-fidelity product screens.",
    ],
    skills: ["Figma", "UI/UX", "Frontend"],
  },
];



const ExperienceRow = ({ experience, index }: { experience: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mb-4">
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#0a0a0a" : "#ffffff",
          color: isOpen ? "#ffffff" : "#000000",
        }}
        whileHover={{ backgroundColor: "#171717", color: "#ffffff" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="group relative flex cursor-pointer items-center justify-between border border-neutral-800 p-8"
      >
        <div className="flex items-center gap-8">
          {/* Boxed Index */}
          <div className={`flex h-12 w-12 items-center justify-center font-bold text-lg transition-colors duration-300 ${isOpen ? 'bg-white text-black' : 'bg-black text-white'}`}>
            {index + 1}
          </div>

          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">
              {experience.title}
            </h3>
            <p className={`text-sm opacity-70 transition-colors ${isOpen ? 'text-neutral-300' : 'text-neutral-600'}`}>
              {experience.company} - {experience.location}
            </p>
          </div>
        </div>

        {/* Right Duration with Vertical Pipe */}
        <div className="flex items-center h-full">
          <div className="h-10 w-[1px] bg-neutral-400 mx-6 hidden md:block" />
          <span className="text-sm font-bold tracking-widest uppercase">
            JOB DURATION - {experience.duration}
          </span>
        </div>
      </motion.div>

      {/* Smooth Expandable Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden bg-neutral-100 border-x border-b border-neutral-800"
          >
            <div className="p-10">
              <ul className="space-y-3">
                {experience.description.map((point: string, i: number) => (
                  <li key={i} className="text-neutral-700 flex gap-2">
                    <span className="font-bold">—</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function WorkExperience() {
  return (
    <section className="py-20 px-10 w-5/6  mx-auto bg-white">
      <div className="text-left mb-16">
        <h2 className="text-6xl font-black uppercase mb-4">Experience</h2>
        <p className="max-w-xl  text-neutral-500 text-sm">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="space-y-4">
        {workExperiences.map((exp, i) => (
          <ExperienceRow key={i} experience={exp} index={i} />
        ))}
      </div>
    </section>
  );
}