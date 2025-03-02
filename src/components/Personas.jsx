"use client";

import { motion } from "framer-motion";
import { Users, Target, Network, UserSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

const personas = [
  {
    title: "Marketers",
    description:
      "Send automated connection requests. Scale your marketing through automated follow-ups",
    icon: Target,
    color: "from-blue-500/5 to-purple-500/5",
    iconColor: "text-blue-500",
  },
  {
    title: "Founders",
    description:
      "Network with like minded founders in your industry and generate leads.",
    icon: Network,
    color: "from-green-500/5 to-emerald-500/5",
    iconColor: "text-green-500",
  },
  {
    title: "Recruiters",
    description:
      'Grow your talent pool. Recruit the best talent with the automation. Use filter\'s like "Open to work"',
    icon: UserSearch,
    color: "from-orange-500/5 to-red-500/5",
    iconColor: "text-orange-500",
  },
  {
    title: "Sales Teams",
    description:
      "Pack your schedule with cloud-based technology. No tech expertise needed.",
    icon: Users,
    color: "from-purple-500/5 to-pink-500/5",
    iconColor: "text-purple-500",
  },
];

export default function Personas() {
  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Empowering Professionals
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Automate your lead generation on targeted prospects by creating a
            simple campaign
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              className="relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-zinc-200 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // whileHover={{ y: -1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br  ${persona.iconColor} ${persona.color} mb-6 transform `}
                >
                  <persona.icon
                    className="h-8 w-8  transition-all duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {persona.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() =>
              window.open(
                "https://cal.com/vidit-gupta/queries?duration=15",
                "_blank"
              )
            }
          >
            Book a Call with an Expert
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
