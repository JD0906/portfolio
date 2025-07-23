"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Acerca de Mí</h2>
          <div
            className="h-1 w-20 mx-auto"
            style={{ backgroundColor: `hsl(var(--template-palette-primary-main))` }}
          ></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Imagen del usuario - ahora a la izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden glass-card p-2">
                <Image
                  src="/images/profile-photo.png"
                  alt="Juan Diego Durango Rivera"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed opacity-20"
                style={{ borderColor: `hsl(var(--template-palette-primary-main))` }}
              ></div>
            </div>
          </motion.div>

          {/* Card de información - ahora a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <p className="text-lg mb-4 text-black dark:text-white leading-relaxed">
                  Desarrollador Full-Stack con más de 5 años de experiencia en el diseño e implementación de soluciones
                  tecnológicas robustas, escalables y orientadas a resultados. Especializado en el desarrollo de
                  software innovador bajo altos estándares de calidad y eficiencia.
                </p>
                <p className="text-lg mb-4 text-black dark:text-white leading-relaxed">
                  Destaco por mi capacidad analítica, adaptabilidad a entornos dinámicos y enfoque colaborativo,
                  contribuyendo al logro de objetivos empresariales mediante una comunicación efectiva y una alta
                  productividad.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge
                    variant="outline"
                    className="text-white border-0"
                    style={{ backgroundColor: `hsl(var(--template-palette-info-main))` }}
                  >
                    Solucionador de Problemas
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white border-0"
                    style={{ backgroundColor: `hsl(var(--template-palette-info-main))` }}
                  >
                    Código Limpio
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white border-0"
                    style={{ backgroundColor: `hsl(var(--template-palette-info-main))` }}
                  >
                    Optimización
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white border-0"
                    style={{ backgroundColor: `hsl(var(--template-palette-info-main))` }}
                  >
                    Trabajo en Equipo
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
