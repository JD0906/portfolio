"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

type Project = {
  id: number
  name: string
  description: string
  url: string
  category: string
  technologies: string[]
  language: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Proyectos reales de Juan Diego con cambios actualizados
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          name: "Procesador Inteligente de Facturas Electrónicas",
          description:
            "Herramienta para facilitar el trabajo contable de profesionales independientes que deben presentar sus facturas electrónicas ante el Ministerio de Hacienda de Costa Rica.",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7353230505871302656/",
          category: "herramienta",
          technologies: ["react", "nestjs", "nextjs", "tailwind"],
          language: "TypeScript",
        },
        {
          id: 2,
          name: "Box App",
          description:
            "Un nuevo SaaS diseñado para transformar la gestión logística de paquetería y mensajería, ofreciendo una solución integral para empresas del sector.",
          url: "https://boxappadmin.com/landing",
          category: "saas",
          technologies: ["nestjs", "prisma", "postgresql", "react", "vite", "react-native", "jwt", "material-ui"],
          language: "TypeScript",
        },
        {
          id: 3,
          name: "Plataforma de Evidencias Digitales Blockchain",
          description:
            "Solución web para la creación y gestión de evidencias digitales utilizando la red Blockchain LACChain, dirigida a abogados para el respaldo de pruebas judiciales.",
          url: "#",
          category: "blockchain",
          technologies: ["solidity", "truffle", "react", "express", "material-ui"],
          language: "Solidity",
        },
        {
          id: 4,
          name: "Carnet Digital CMC",
          description:
            "Aplicación móvil para el Colegio de Médicos y Cirujanos de Costa Rica con panel web administrativo para gestión de contenido y carnets digitales.",
          url: "#",
          category: "mobile",
          technologies: ["react-native", "react-native-paper"],
          language: "TypeScript",
        },
        {
          id: 5,
          name: "Katu - Gestión de Buses",
          description:
            "Aplicación móvil para gestión de buses con panel web para administración dinámica, optimizando las operaciones de transporte público.",
          url: "#",
          category: "mobile",
          technologies: ["react-native", "react-native-paper"],
          language: "TypeScript",
        },
        {
          id: 6,
          name: "Sistema de Tokenización de Activos",
          description:
            "Sistema interno para tokenización de activos (tarjetas de crédito) con integración a pasarelas de pago como Greenpay para procesamiento seguro.",
          url: "#",
          category: "fintech",
          technologies: ["vite", "express", "react", "serverless", "dynamodb", "material-ui"],
          language: "TypeScript",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const getCategoryColor = (category: string) => {
    const colors = {
      herramienta: "hsl(var(--template-palette-info-main))",
      saas: "hsl(var(--template-palette-primary-main))",
      blockchain: "hsl(var(--template-palette-primary-dark))",
      mobile: "hsl(var(--template-palette-info-light))",
      fintech: "hsl(var(--template-palette-info-dark))",
    }
    return colors[category as keyof typeof colors] || "hsl(var(--template-palette-primary-main))"
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      herramienta: "Herramienta",
      saas: "SaaS",
      blockchain: "Blockchain",
      mobile: "Móvil",
      fintech: "FinTech",
    }
    return labels[category as keyof typeof labels] || category
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Proyectos Destacados</h2>
          <div
            className="h-1 w-20 mx-auto"
            style={{ backgroundColor: `hsl(var(--template-palette-primary-main))` }}
          ></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de mis proyectos profesionales más relevantes en desarrollo full-stack
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div
              className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2"
              style={{ borderColor: `hsl(var(--template-palette-primary-main))` }}
            ></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col project-card">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between gap-2">
                      <span className="text-lg font-semibold text-black dark:text-white leading-tight">
                        {project.name}
                      </span>
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <Badge
                          variant="outline"
                          className="font-medium text-white border-0 text-xs"
                          style={{
                            backgroundColor: getCategoryColor(project.category),
                          }}
                        >
                          {getCategoryLabel(project.category)}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="font-medium text-white border-0 text-xs"
                          style={{
                            backgroundColor: `hsl(var(--template-palette-primary-main))`,
                          }}
                        >
                          {project.language}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-black dark:text-white mb-4 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-medium text-white border-0"
                          style={{
                            backgroundColor: `hsl(var(--template-palette-info-main))`,
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {project.url && project.url !== "#" && (
                    <CardFooter>
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="w-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border-0"
                        style={{
                          backgroundColor: `hsl(var(--template-palette-primary-main))`,
                        }}
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {project.url.includes("linkedin") ? "Ver en LinkedIn" : "Ver Proyecto"}
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
