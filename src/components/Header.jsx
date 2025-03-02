"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Chrome } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", updateScrollState);
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headerScale = useTransform(scrollY, [0, 50], [1, 0.95]);
  const headerY = useTransform(scrollY, [0, 50], [0, -8]);
  const logoScale = useTransform(scrollY, [0, 50], [1, 0.85]);

  return (
    <motion.header
      style={{
        scale: headerScale,
        y: headerY,
      }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[100%] h-16 border border-border/40 bg-background/80 backdrop-blur-lg dark:bg-zinc-400/10 z-50 transition-all duration-300 ease-in-out rounded-none ${
        isScrolled ? "mt-4 !max-w-[90%]  shadow-lg !rounded-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.div
              style={{ scale: logoScale }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#hero"
                className="text-2xl font-bold text-primary  transition-opacity"
              >
                <div className="relative group">
                  <Image
                    src="/logo.png"
                    width={150}
                    height={70}
                    alt="Logo"
                    className="transform transition-transform  dark:invert"
                  />
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.nav
            className={`hidden md:flex space-x-10 transition-all duration-300 ${
              isScrolled ? "scale-90" : ""
            }`}
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
            className={`flex items-center space-x-4 transition-all duration-300 ${
              isScrolled ? "scale-90" : ""
            }`}
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
    </motion.header>
  );
}
