"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  Building,
  Landmark,
  Factory,
} from "lucide-react";

export default function Marquee() {
  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Add background elements */}
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

      <div className=" px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-2">
            Trusted by 1000+ happy users
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the community of successful professionals
          </p>
        </motion.div>

        <div className="mt-16 relative flex overflow-hidden">
          <motion.div
            className="flex items-center space-x-32"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[1, 2].map((set) => (
              <div
                key={set}
                className="flex items-center justify-between space-x-32 min-w-full"
              >
                {[
                  { Icon: Building2, name: "Enterprise" },
                  { Icon: Briefcase, name: "Business" },
                  { Icon: Building, name: "Corporate" },
                  { Icon: Landmark, name: "Institution" },
                  { Icon: Factory, name: "Industry" },
                ].map(({ Icon, name }, index) => (
                  <motion.div
                    key={`${set}-${index}`}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-16 w-16 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
