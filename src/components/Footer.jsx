"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Chrome, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        {
          name: "Chrome Extension",
          href: "https://chromewebstore.google.com/detail/leadseeder-smart-networki/ccabkgkocobdhpnlofbdonmdnpnnjaga",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        {
          name: "Contact",
          href: "https://cal.com/vidit-gupta/queries?duration=15",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Chrome",
      icon: Chrome,
      href: "https://chromewebstore.google.com/detail/leadseeder-smart-networki/ccabkgkocobdhpnlofbdonmdnpnnjaga",
    },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/#hero" className="inline-block">
              <img
                src="/logo.png"
                alt="LeadSeeder Logo"
                className="h-8 w-auto dark:invert"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automate your lead generation and networking on professional
              platforms with our powerful chrome extension. Streamline your
              workflow and grow your network efficiently.
            </p>
          </motion.div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      target={link.href.startsWith("#") ? undefined : "_blank"}
                      rel={
                        link.href.startsWith("#")
                          ? undefined
                          : "noopener noreferrer"
                      }
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LeadSeeder. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
