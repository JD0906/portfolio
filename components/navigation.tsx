"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Acerca de", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si hemos hecho scroll para cambiar la opacidad del nav
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detectar sección activa
      const sections = ["home", "about", "skills", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === "home" ? "" : section
        );
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section === "home" ? "home" : section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element =
      targetId === "home" ? document.body : document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-xl font-bold cursor-pointer transition-colors ${
              !scrolled ? "text-white" : "text-blue-600 dark:text-blue-400"
            }`}
            onClick={() => scrollToSection("#home")}
          >
            Portafolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection ===
                  (item.href === "#home" ? "home" : item.href.replace("#", ""))
                    ? !scrolled
                      ? "text-blue-300"
                      : "text-blue-600 dark:text-blue-400"
                    : !scrolled
                    ? "text-white/90 hover:text-blue-300"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className={`border-2 font-semibold transition-all ${
                !scrolled
                  ? "border-white/50 text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black bg-transparent"
              }`}
            >
              <Download className="mr-2 h-4 w-4" />
              CV
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                !scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 mt-1 rounded-b-lg"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection ===
                    (item.href === "#home"
                      ? "home"
                      : item.href.replace("#", ""))
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadResume}
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black bg-transparent font-semibold"
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
