import AnimatedBackground from "@/sections/AnimatedBackground";
import CaseStudies from "@/sections/CaseStudies";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Nav from "@/sections/Nav";
import Services from "@/sections/Services";
import WorkExperience from "@/sections/WorkExperience";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Nav />
      <Hero />
      <WorkExperience />
      <CaseStudies />
      <Services />
      <Contact />
    </div>
  );
}
