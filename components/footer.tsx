"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
  ]

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="p-3 rounded-full transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: `hsl(var(--template-palette-primary-main))`,
                    color: "white",
                  }}
                >
                  <IconComponent className="h-5 w-5" />
                </motion.a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Juan Diego Durango Rivera. Todos los derechos reservados.
            </p>
            <div
              className="h-1 w-10 mt-3 mx-auto"
              style={{ backgroundColor: `hsl(var(--template-palette-primary-main) / 0.5)` }}
            ></div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
