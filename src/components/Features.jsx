"use client";

import {
  Network,
  MessageSquare,
  GitBranch,
  BarChart3,
  Cloud,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      name: "Grow your network",
      description:
        "Expand your network with targeted connections from groups and events.",
      icon: Network,
      color: "from-blue-500/5 to-purple-500/5",
      iconColor: "text-blue-500",
    },
    {
      name: "Smart Reply Detection",
      description: "Auto-manage responses and maintain campaign quality.",
      icon: MessageSquare,
      color: "from-green-500/5 to-emerald-500/5",
      iconColor: "text-green-500",
    },
    {
      name: "Build personal funnels",
      description:
        "Create custom sequences with automated actions and personalized messages.",
      icon: GitBranch,
      color: "from-orange-500/5 to-red-500/5",
      iconColor: "text-orange-500",
    },
    {
      name: "Campaign performance",
      description: "Track key metrics to optimize your outreach campaigns.",
      icon: BarChart3,
      color: "from-purple-500/5 to-pink-500/5",
      iconColor: "text-purple-500",
    },
    {
      name: "Cloud Based automation",
      description: "24/7 lead generation in the cloud with zero maintenance.",
      icon: Cloud,
      color: "from-cyan-500/5 to-blue-500/5",
      iconColor: "text-cyan-500",
    },
    {
      name: "Activity control center",
      description:
        "Set daily limits for invitations, messages, and profile visits.",
      icon: Settings,
      color: "from-yellow-500/5 to-amber-500/5",
      iconColor: "text-yellow-500",
    },
  ];

  return (
    <div className="py-24 bg-background relative overflow-hidden" id="features">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Powerful Automation Features
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
            Streamline your networking and lead generation with our
            comprehensive suite of tools.
          </p>
        </motion.div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border  transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt className="flex flex-col items-center text-center">
                  <motion.div
                    className={`flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br ${feature.color} ${feature.iconColor} mb-6  transition-all duration-300`}
                  >
                    <feature.icon
                      className="h-8 w-8 transform  transition-all duration-300"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <p className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.name}
                  </p>
                </dt>
                <dd className="text-sm text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </dd>
                {/* Add decorative element */}
                <div
                  className={`absolute top-0 right-0 -mt-2 -mr-2 h-24 w-24 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
