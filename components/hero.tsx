"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
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
      className="section-shell relative isolate flex min-h-screen items-center overflow-hidden pb-14 pt-28 md:pb-16 md:pt-32"
    >
      <div className="ambient-orb left-[-12rem] top-24 h-72 w-72 bg-primary/30" />
      <div className="ambient-orb bottom-10 right-[-8rem] h-80 w-80 bg-primary/20" />

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/55 dark:bg-slate-950/72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_42%)]" />
        <Image
          src="/images/coding-background.png"
          alt="Coding background"
          fill
          className="object-cover opacity-30 blur-[2px] saturate-50"
          priority
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center lg:max-w-5xl"
        >
          <div className="section-kicker border-white/20 bg-white/10 text-white/80">
            Desarrollador Full-Stack
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span
              style={{ color: "hsl(var(--template-palette-primary-light))" }}
            >
              Desarrollador
            </span>{" "}
            <span className="text-white">Full-Stack</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/75 md:text-2xl">
            Juan Diego Durango Rivera
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-lg">
            Desarrollador Full-Stack con más de 5 años de experiencia en el
            diseño e implementación de soluciones tecnológicas robustas,
            escalables y orientadas a resultados.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-14 rounded-full border-0 px-8 text-base font-semibold text-white shadow-2xl shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "hsl(var(--template-palette-primary-main))",
              }}
            >
              Ver Proyectos
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={downloadResume}
              className="contact-me-button h-14 rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-slate-950"
            >
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </Button>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-md grid-cols-2 gap-3 sm:mt-12 sm:max-w-none sm:gap-4">
            {[
              ["Experiencia", "5+ años"],
              ["Enfoque", "Web y móvil"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur sm:rounded-[1.75rem] sm:px-5 sm:py-5"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs sm:tracking-[0.25em]">
                  {label}
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 max-[420px]:hidden"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="h-12 w-12 animate-bounce rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}
