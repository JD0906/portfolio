"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Inicio", href: "#home" },
  { name: "Acerca de", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);

      const sections = menuItems
        .map((item) => item.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const current = sections.findLast(
        (section) => window.scrollY + 140 >= section.offsetTop,
      );
      setActiveSection(current?.id ?? "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }

    setIsOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "CV-Juan-Diego-Durango-Rivera.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.open("/cv.pdf", "_blank");
    }, 100);
  };

  const mobileButtonTone = scrolled
    ? "text-foreground hover:bg-muted"
    : "text-white hover:bg-white/10";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "px-3 pt-3" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-500 ${
          scrolled
            ? "glass-nav rounded-full px-4"
            : "border-b border-white/10 bg-transparent px-4"
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-4">
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`cursor-pointer text-left transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => scrollToSection("#home")}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary/80">
              Portfolio
            </p>
            <p className="text-2xl font-semibold leading-none">Juan Diego</p>
          </motion.button>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur md:flex dark:border-white/5 dark:bg-white/[0.03]">
            {menuItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className={`rounded-full border px-5 font-semibold transition-all duration-300 ${
                scrolled
                  ? "border-primary/30 bg-background/70 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-white/20 bg-white/5 text-white hover:bg-white hover:text-slate-950"
              }`}
            >
              <Download className="mr-2 h-4 w-4" />
              CV
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={mobileButtonTone}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card mb-3 rounded-[2rem] p-4 md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={downloadResume}
                  className="w-full rounded-2xl border-primary/30 bg-background/70 font-semibold text-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="mr-2 h-4 w-4" />
                  CV
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
