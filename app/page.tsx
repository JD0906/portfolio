import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export const metadata: Metadata = {
  title: "Juan Diego Durango Rivera - Desarrollador Full-Stack",
  description:
    "Portafolio de Juan Diego Durango Rivera, desarrollador full-stack",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
