"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:jdurango596@gmail.com",
      label: "Enviar email",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/juan-diego-durango-rivera-587150189",
      label: "Visitar perfil de LinkedIn",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/JD0906",
      label: "Visitar perfil de GitHub",
    },
  ];

  return (
    <footer className="section-shell border-t border-border/60 py-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 rounded-[2rem] border border-border/60 bg-background/70 p-8 backdrop-blur md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Juan Diego Durango Rivera
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">
              Desarrollador Full-Stack
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Desarrollo soluciones tecnológicas robustas, escalables y
              orientadas a resultados.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={
                      social.name !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Juan Diego Durango Rivera. Todos los
                derechos reservados.
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={scrollToTop}
              className="rounded-full border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Subir al inicio
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
