"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe, Server, Cpu, Smartphone, Cloud } from "lucide-react"

type Skill = {
  name: string
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

export default function Skills() {
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
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Habilidades Técnicas</h2>
          <div
            className="h-1 w-20 mx-auto"
            style={{ backgroundColor: `hsl(var(--template-palette-primary-main))` }}
          ></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi conjunto de herramientas técnicas abarca todo el stack de desarrollo, permitiéndome construir soluciones
            completas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-3 rounded-full text-white shadow-lg"
                      style={{ backgroundColor: `hsl(var(--template-palette-primary-main))` }}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">{category.name}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: `hsl(var(--template-palette-primary-main))` }}
                        ></div>
                        <span className="text-sm font-medium text-black dark:text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
