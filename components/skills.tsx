"use client";

import type React from "react";
import { useMemo, useState } from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Globe,
  Server,
  Cpu,
  Smartphone,
  Cloud,
  Braces,
  Container,
  GitBranch,
} from "lucide-react";

type Skill = {
  name: string;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Vite" },
        { name: "TypeScript" },
        { name: "Redux Toolkit" },
        { name: "Material UI" },
        { name: "Tailwind CSS" },
        { name: "HTML/CSS" },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js" },
        { name: "TypeScript" },
        { name: "Express" },
        { name: "NestJS" },
        { name: "Serverless Framework" },
        { name: "REST API" },
        { name: "JSON" },
      ],
    },
    {
      name: "Base de Datos",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "SQL Server" },
        { name: "MongoDB" },
        { name: "DynamoDB" },
        { name: "SQL" },
      ],
    },
    {
      name: "Desarrollo Móvil",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "React Native CLI" },
        { name: "Expo SDK" },
        { name: "React Native Paper" },
        { name: "TypeScript" },
        { name: "Mobile UI/UX" },
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS Services" },
        { name: "Lambda" },
        { name: "S3" },
        { name: "RDS" },
        { name: "API Gateway" },
        { name: "Docker" },
        { name: "Railway" },
        { name: "Vercel" },
      ],
    },
    {
      name: "Blockchain & Otros",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Solidity" },
        { name: "Truffle Suite" },
        { name: "Smart Contracts" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Bitbucket" },
        { name: "Scrum" },
      ],
    },
  ];

  const featuredSkills = useMemo(() => {
    const current = skillCategories.find(
      (category) => category.name === activeCategory,
    );
    return current ? current.skills.slice(0, 5) : [];
  }, [activeCategory, skillCategories]);

  const movingTagsTop = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "NestJS",
    "Express",
    "React Native",
  ];

  const movingTagsBottom = [
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Serverless",
  ];

  const pillIconMap: Record<string, React.ReactNode> = {
    React: <Braces className="h-4 w-4" />,
    "Next.js": <Globe className="h-4 w-4" />,
    TypeScript: <Braces className="h-4 w-4" />,
    JavaScript: <Braces className="h-4 w-4" />,
    "Tailwind CSS": <Braces className="h-4 w-4" />,
    "Node.js": <Server className="h-4 w-4" />,
    NestJS: <Server className="h-4 w-4" />,
    Express: <Server className="h-4 w-4" />,
    "React Native": <Smartphone className="h-4 w-4" />,
    PostgreSQL: <Database className="h-4 w-4" />,
    MongoDB: <Database className="h-4 w-4" />,
    Prisma: <Database className="h-4 w-4" />,
    Git: <GitBranch className="h-4 w-4" />,
    Docker: <Container className="h-4 w-4" />,
    AWS: <Cloud className="h-4 w-4" />,
    Vercel: <Cloud className="h-4 w-4" />,
    Serverless: <Cloud className="h-4 w-4" />,
  };

  const renderTicker = (tags: string[], reverse = false) => (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="flex w-max gap-4"
      >
        {[...tags, ...tags].map((tag, index) => (
          <div
            key={`${tag}-${index}`}
            className="flex min-w-max items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200"
          >
            <span className="text-primary">
              {pillIconMap[tag] ?? <Braces className="h-4 w-4" />}
            </span>
            <span>{tag}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="skills" className="section-shell scroll-mt-24 py-20 md:py-24">
      <div className="container mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_45%),linear-gradient(180deg,#060b17_0%,#040811_100%)] px-6 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            My Skills
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Technologies & <span className="text-primary">Tools</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Mi conjunto de herramientas técnicas abarca todo el stack de
            desarrollo, permitiéndome construir soluciones completas.
          </p>
        </motion.div>

        <div className="mt-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max min-w-full items-center justify-center gap-3 px-1">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 md:px-5 ${
                  activeCategory === category.name
                    ? "border-primary/70 bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "border-white/15 bg-white/[0.04] text-slate-300 hover:border-primary/40 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-5">
          {featuredSkills.map((skill, index) => {
            const category = skillCategories.find(
              (entry) => entry.name === activeCategory,
            );
            return (
              <Card
                key={skill.name}
                className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <CardContent className="flex h-32 flex-col items-center justify-center gap-3 p-4 text-center sm:h-40 sm:gap-4 sm:p-5">
                  <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                    {category?.icon ?? <Braces className="h-6 w-6" />}
                  </div>
                  <p className="text-base font-medium text-white sm:text-lg">
                    {skill.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.24em]">
                    {activeCategory}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {renderTicker(movingTagsTop)}
          {renderTicker(movingTagsBottom, true)}
        </div>
      </div>
    </section>
  );
}
