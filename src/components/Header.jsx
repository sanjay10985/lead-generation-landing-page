"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Chrome } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full h-16 border-b border-border/40 bg-background/80 backdrop-blur-lg z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
              >
                <div className="relative group">
                  <Image
                    src="/logo.png"
                    width={150}
                    height={70}
                    className="transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.nav
            className="hidden md:flex space-x-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#features"
              onClick={(e) => scrollToSection(e, "features")}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Help Center
            </Link>
            <Link
              href="#pricing"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="https://cal.com/vidit-gupta/queries?duration=15"
              target="_blank"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Book a Call
            </Link>
          </motion.nav>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ThemeToggle />
            <Link
              target="_blank"
              href="https://chromewebstore.google.com/detail/leadseeder-smart-networki/ccabkgkocobdhpnlofbdonmdnpnnjaga?authuser=0&hl=en-GB"
            >
              <Button
                variant="outline"
                className="hidden sm:inline-flex items-center gap-2"
              >
                <Chrome className="w-5 h-5" />
                Chrome Extension
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
