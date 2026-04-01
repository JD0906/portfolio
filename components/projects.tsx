"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
  category: string;
  technologies: string[];
  language: string;
};

const projects: Project[] = [
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
      "Creador y fundador de un SaaS diseñado para transformar la gestión logística de paquetería y mensajería, ofreciendo una solución integral para empresas del sector.",
    url: "https://boxappadmin.com/landing",
    category: "saas",
    technologies: [
      "nestjs",
      "prisma",
      "postgresql",
      "react",
      "vite",
      "react-native",
      "jwt",
      "material-ui",
    ],
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
    technologies: [
      "vite",
      "express",
      "react",
      "serverless",
      "dynamodb",
      "material-ui",
    ],
    language: "TypeScript",
  },
];

export default function Projects() {
  const getCategoryColor = (category: string) => {
    const colors = {
      herramienta: "hsl(var(--template-palette-info-main))",
      saas: "hsl(var(--template-palette-primary-main))",
      blockchain: "hsl(var(--template-palette-primary-dark))",
      mobile: "hsl(var(--template-palette-info-light))",
      fintech: "hsl(var(--template-palette-info-dark))",
    };
    return (
      colors[category as keyof typeof colors] ||
      "hsl(var(--template-palette-primary-main))"
    );
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      herramienta: "Herramienta",
      saas: "SaaS",
      blockchain: "Blockchain",
      mobile: "Móvil",
      fintech: "FinTech",
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <section
      id="projects"
      className="section-shell scroll-mt-24 py-20 md:py-24"
    >
      <div className="ambient-orb bottom-6 right-[-6rem] h-64 w-64 bg-primary/20" />

      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          >
            <div className="max-w-xl">
              <div className="section-kicker">Proyectos Destacados</div>
              <h2 className="section-title">
                Experiencia aplicada en producto, SaaS, móvil y soluciones
                especializadas
              </h2>
            </div>

            <div className="rounded-[2rem] border border-border/60 bg-background/70 p-6 md:p-8">
              <p className="text-base leading-7 text-muted-foreground md:text-lg">
                Una selección de mis proyectos profesionales más relevantes en
                desarrollo full-stack.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={
                  project.id === 1 ? "md:col-span-2 xl:col-span-2" : ""
                }
              >
                <Card className="project-card h-full rounded-[2rem] border border-border/60">
                  <CardHeader className="space-y-6 p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {String(project.id).padStart(2, "0")}
                      </span>
                      <div className="flex flex-wrap justify-end gap-2">
                        <Badge
                          variant="outline"
                          className="rounded-full border-0 px-3 py-1 text-xs font-semibold text-white"
                          style={{
                            backgroundColor: getCategoryColor(project.category),
                          }}
                        >
                          {getCategoryLabel(project.category)}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground"
                        >
                          {project.language}
                        </Badge>
                      </div>
                    </div>

                    <CardTitle className="flex items-start justify-between gap-4">
                      <span className="text-2xl font-semibold leading-tight text-foreground md:text-[2rem]">
                        {project.name}
                      </span>
                      {project.url && project.url !== "#" && (
                        <ArrowUpRight className="mt-1 h-5 w-5 text-primary" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-7 pt-0">
                    <p className="mb-6 text-sm leading-7 text-muted-foreground md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {project.url && project.url !== "#" && (
                    <CardFooter className="p-7 pt-0">
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="h-12 w-full rounded-full border-0 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: `hsl(var(--template-palette-primary-main))`,
                        }}
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {project.url.includes("linkedin")
                            ? "Ver en LinkedIn"
                            : "Ver Proyecto"}
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
