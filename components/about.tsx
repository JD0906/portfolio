"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-20 md:py-24">
      <div className="ambient-orb right-[-8rem] top-12 h-72 w-72 bg-primary/15" />

      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="section-kicker">Acerca de Mí</div>
            <h2 className="section-title">
              Experiencia técnica con enfoque en producto, calidad y
              escalabilidad
            </h2>
            <p className="section-copy">
              Perfil profesional centrado en construir software confiable, claro
              y alineado con objetivos reales de negocio.
            </p>
            <div className="section-divider" />
          </motion.div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card relative overflow-hidden rounded-[2rem] p-5 md:p-6">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <div className="grid gap-5">
                  <div className="relative mx-auto aspect-square w-full max-w-[23rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950">
                    <Image
                      src="/images/profile-photo.png"
                      alt="Juan Diego Durango Rivera"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        Fortalezas
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground">
                        Pensamiento analítico y enfoque colaborativo
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-primary">
                        Resultado
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground">
                        Soluciones robustas y orientadas a negocio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card overflow-hidden rounded-[2rem]">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/20 bg-primary/10 px-4 py-1 text-primary"
                    >
                      Solucionador de Problemas
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/20 bg-primary/10 px-4 py-1 text-primary"
                    >
                      Código Limpio
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/20 bg-primary/10 px-4 py-1 text-primary"
                    >
                      Optimización
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/20 bg-primary/10 px-4 py-1 text-primary"
                    >
                      Trabajo en Equipo
                    </Badge>
                  </div>

                  <p className="text-lg leading-8 text-foreground md:text-xl">
                    Desarrollador Full-Stack con más de 5 años de experiencia en
                    el diseño e implementación de soluciones tecnológicas
                    robustas, escalables y orientadas a resultados.
                    Especializado en el desarrollo de software innovador bajo
                    altos estándares de calidad y eficiencia.
                  </p>

                  <p className="mt-6 text-lg leading-8 text-foreground md:text-xl">
                    Destaco por mi capacidad analítica, adaptabilidad a entornos
                    dinámicos y enfoque colaborativo, contribuyendo al logro de
                    objetivos empresariales mediante una comunicación efectiva y
                    una alta productividad.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        Valor profesional
                      </p>
                      <p className="mt-2 text-base leading-7 text-foreground">
                        Capacidad para convertir requerimientos complejos en
                        entregables claros, mantenibles y útiles.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        Forma de trabajo
                      </p>
                      <p className="mt-2 text-base leading-7 text-foreground">
                        Comunicación efectiva, criterio técnico y foco constante
                        en impacto real para el negocio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
