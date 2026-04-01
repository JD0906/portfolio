import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Juan Diego Durango Rivera - Desarrollador Full-Stack",
  description:
    "Portafolio de Juan Diego Durango Rivera, desarrollador full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === "production";
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;

  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        {isProd && (
          <script
            defer
            src={umamiUrl}
            data-website-id={umamiWebsiteId}
          ></script>
        )}
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        <Navigation />
        <main className="relative min-h-screen overflow-x-clip">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
