"use client";

import { motion } from "framer-motion";
import { Laptop, Palette, Cloud, Workflow } from "lucide-react";
import { ServiceAccordionItem } from "../components/ServiceAccordianItem";
import SectionHeading from "@/components/SectionHeading";
import SectionLayout from "@/layouts/SectionLayout";

const servicesData = [
  {
    icon: <Laptop size={28} strokeWidth={1.2} />,
    title: "Full-Stack Development",
    desc: "High-velocity, scalable software engineered with precision.",
    bullets: [
      "Production-grade architectures",
      "Modern UI engineering",
      "Performance-focused delivery",
    ],
    skills: ["Next.js", "React", "TypeScript", "Flask"],
  },
  {
    icon: <Palette size={28} strokeWidth={1.2} />,
    title: "UI/UX & Prototyping",
    desc: "Minimal, modern, user-first interfaces and design systems.",
    bullets: [
      "High-fidelity prototypes",
      "Elegant minimal UI",
      "User-centered flows",
    ],
    skills: ["Figma", "Research", "Wireframes"],
  },
  {
    icon: <Cloud size={28} strokeWidth={1.2} />,
    title: "Cloud Infra & DevOps",
    desc: "Secure, auto-scaling infrastructure built for hyper-growth.",
    bullets: [
      "Scalable cloud systems",
      "CI/CD pipelines",
      "Monitoring & reliability",
    ],
    skills: ["AWS", "GCP", "Azure", "Kubernetes"],
  },
  {
    icon: <Workflow size={28} strokeWidth={1.2} />,
    title: "Intelligent Automation",
    desc: "End-to-end automation to eliminate bottlenecks and manual work.",
    bullets: [
      "Workflow automation",
      "System integrations",
      "Operational efficiency",
    ],
    skills: ["n8n", "Zapier", "API Integration"],
  },
];

export default function Services() {
  return (
      <SectionLayout
      sectionTitle="END TO END DEVELOPMENT"
      sectionSubtitle="Services"
      sectionIndex={7}
      sectionColor="bg-neutral-50"
      stickyHeading={true}
    >

    {/* <section className="h-screen px-6 py-32 mt-20 text-neutral-900"> */}
      {/* <div className="px-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20"> */}


        {/* RIGHT — ACCORDION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          >
          {servicesData.map((service, i) => (
            <ServiceAccordionItem key={i} service={service} />
          ))}
        </motion.div>
      {/* </div> */}
    {/* </section> */}
          </SectionLayout>
  );
}
