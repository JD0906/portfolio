"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Crear un enlace temporal para descargar
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "CV-Juan-Diego-Durango-Rivera.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // Agregar al DOM, hacer clic y remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fallback: abrir en nueva pestaña si la descarga falla
    setTimeout(() => {
      window.open("/cv.pdf", "_blank");
    }, 100);
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16 bg-background"
    >
      {/* Imagen de fondo difuminada */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10"></div>
        <Image
          src="/images/coding-background.png"
          alt="Coding background"
          fill
          className="object-cover blur-sm scale-105"
          priority
        />
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span style={{ color: `hsl(var(--template-palette-primary-light))` }}>
            Desarrollador
          </span>{" "}
          <span className="text-white">Full-Stack</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Juan Diego Durango Rivera
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-white font-semibold px-8 py-3 border-0 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: `hsl(var(--template-palette-primary-main))`,
            }}
          >
            Ver Proyectos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={downloadResume}
            className="contact-me-button border-2 hover:text-white font-semibold px-8 py-3 bg-transparent"
            style={{
              borderColor: `hsl(var(--template-palette-primary-light))`,
              color: `hsl(var(--template-palette-primary-light))`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `hsl(var(--template-palette-primary-light))`;
              e.currentTarget.style.borderColor = `hsl(var(--template-palette-primary-light))`;
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = `hsl(var(--template-palette-primary-light))`;
              e.currentTarget.style.color = `hsl(var(--template-palette-primary-light))`;
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar CV
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 z-10"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="animate-bounce bg-transparent text-white hover:bg-white/10"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}
