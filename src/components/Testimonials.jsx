"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Eve",
    role: "CEO at TechCorp",
    image: "/test1.png",
    quote:
      "Leadseeder has transformed the way I approach to generate leads and networking on Professional platform. It has improved my outreach efforts and expanded my professional network. It's Best alternative of Waalaxy",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Marketing Director at GrowthHub",
    image: "/test2.png",
    quote:
      "Using Leadseeder has been a great Linked Helper for our sales team. It's autoconnect feature has significantly empowered us to build valuable connections.",
    rating: 5,
  },
  {
    name: "Michael Davis",
    role: "Product Manager at InnovateCo",
    image: "/test3.png",
    quote:
      "Leadseeder's automation features have greatly enhanced our recruiting efforts, enabling us to connect with top talent and foster meaningful relationships.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="bg-secondary py-16 sm:py-24 relative overflow-hidden"
      id="testimonials"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-16 w-24 h-24 bg-secondary-light/20 rounded-full blur-2xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
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
            Trusted by businesses worldwide
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Here's what our satisfied customers have to say about StreamLine
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                key={currentIndex}
                className="w-full max-w-2xl mx-auto bg-background border border-border shadow-lg rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-8 py-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          className="h-16 w-16 rounded-full object-cover"
                          width={64}
                          height={64}
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xl font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonials[currentIndex].rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-lg text-muted-foreground italic leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </blockquote>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center px-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-background/80 border border-border backdrop-blur-sm text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-background/80 border border-border backdrop-blur-sm text-foreground hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
