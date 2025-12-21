"use client";

import { motion, useScroll, useTransform,useSpring } from "framer-motion";
import { useRef } from "react";
import SectionLayout from "@/layouts/SectionLayout";

const workExperiences = [
  {
    title: "DevOps Engineer",
    company: "CarbonTeq",
    duration: "Jun 2025 - Present · 7 mos",
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
    duration: "Jun 2025 - Sep 2025 · 4 mos",
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
    duration: "Jun 2024 - Feb 2025 · 9 mos",
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
    duration: "Apr 2024 - Aug 2024 · 5 mos",
    location: "USA · Remote",
    description: [
      "Designed and developed UI/UX & frontend for Verify.pk.",
      "Built complete Figma wireframes and high-fidelity product screens.",
    ],
    skills: ["Figma", "UI/UX", "Frontend"],
  },
];

const ExperienceCard = ({ experience }: { experience: any }) => (
  <div className="p-8 bg-white border border-neutral-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-1">
      {experience.title}
    </h3>

    <p className="text-lg font-medium text-neutral-800 mb-1">
      {experience.company}
    </p>

    <p className="text-sm text-neutral-500 mb-4">
      {experience.duration} · {experience.location}
    </p>

    <ul className="space-y-2 text-neutral-700 text-sm mb-4">
      {experience.description.map((point: string, i: number) => (
        <li key={i}>• {point}</li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {experience.skills.map((skill: string, i: number) => (
        <span
          key={i}
          className="text-xs border border-neutral-300 px-3 py-1 rounded-full text-neutral-600"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function WorkExperience() {
  const sectionRef = useRef<HTMLElement>(null);

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end end"],
});

const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 40,
  damping: 28,
  mass: 0.9,
});

const cardCount = workExperiences.length;
const yTransforms = workExperiences.map((_, i) =>
  useTransform(smoothProgress, [i / cardCount, (i + 1) / cardCount], [60, 0])
);

const opacityTransforms = workExperiences.map((_, i) =>
  useTransform(smoothProgress, [i / cardCount, (i + 0.4) / cardCount], [0, 1])
);



  return (
    <SectionLayout
      ref={sectionRef}
      sectionTitle="WORK EXPERIENCE"
      sectionSubtitle="History"
      sectionIndex={6}
      sectionColor="bg-neutral-50"
      stickyHeading
    >
      <div className="flex flex-col gap-16">
        {workExperiences.map((exp, i) => (
          <motion.div
            key={i}
            style={{
              y: yTransforms[i],
              opacity: opacityTransforms[i],
            }}
          >
            <ExperienceCard experience={exp} />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
