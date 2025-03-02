"use client";

import { motion } from "framer-motion";
import { Import, LayoutDashboard, ListChecks, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Import Prospects",
    description:
      "Search for your target users. Use Leadseeder chrome extension to import prospects from Groups, Events and connections effortlessly into your dashboard.",
    icon: Import,
    color: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-500",
  },
  {
    number: "02",
    title: "Open Dashboard & Create Campaign",
    description:
      "Open the Leadseeder dashboard to view all imported prospects. Create campaigns with a click and monitor analytics in real-time.",
    icon: LayoutDashboard,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    number: "03",
    title: "Select List & Personalize Actions",
    description:
      "Choose your prospect list and customize automation sequences with profile visits, connection requests, and personalized messages. Set perfect timing between actions.",
    icon: ListChecks,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500",
  },
  {
    number: "04",
    title: "Launch & Automate",
    description:
      "Click 'Start Campaign' and let Leadseeder handle all manual tasks, boosting your efficiency and saving you dozens of hours.",
    icon: Rocket,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
];

export default function Steps() {
  return (
    <div className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/20 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-2">
            Generate Leads in 4 Easy Steps
          </h2>
          <p className="text-xl text-muted-foreground">
            Start automating your lead generation today
          </p>
        </motion.div>

        <div className="mt-20 relative">
          {/* Animated Connecting Line */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="relative z-10 space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } relative`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative w-full max-w-lg">
                  {/* Animated Connecting Dot */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-y-1/2"
                    style={{
                      left: index % 2 === 0 ? "calc(100% + 2rem)" : "-2rem",
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  {/* Background Card with Enhanced Gradient */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    whileHover={{ scale: 1.02 }}
                  />

                  {/* Content Card with Enhanced Interactions */}
                  <motion.div
                    className="relative p-6 bg-card border border-border rounded-2xl transition-all duration-500 group-hover:-translate-y-2"
                    whileHover={{
                      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {/* Step Number with Progress Indicator */}
                    <div className="absolute -top-4 left-6 bg-background border border-border rounded-full px-3 py-1 text-sm font-semibold text-foreground flex items-center gap-2">
                      {step.number}
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>

                    {/* Enhanced Icon Animation */}
                    <motion.div
                      className={`w-12 h-12 rounded-xl  border border-border flex items-center justify-center mb-4 ${step.iconColor} ${step.color} `}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>

                    {/* Content with Enhanced Typography */}
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Enhanced Decorative Elements */}
                    <motion.div
                      className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
