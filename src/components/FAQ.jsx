"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What are Lead Generation Automation Tools?",
    answer:
      "Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.",
  },
  {
    question: "What is Leadseeder?",
    answer:
      "Leadseeder is a chrome extension which is a professional social media automation tool that is designed to streamline lead generation and marketing on LinkedIn.",
  },
  {
    question: "Can I get a demo of Leadseeder and get help with setup?",
    answer: "Yes! Book your demo here: https://cal.com/vidit-gupta/queries 😃",
  },
  {
    question: "What results can I expect from Leadseeder?",
    answer:
      "Our results so far from the average campaign:\n\n- Average LinkedIn invite acceptance rate is 40% \n- Average positive reply rate across different clients 5-15% \n\nNote: Every industry/profile is different. There are multiple factors like your message, LinkedIn profile optimisation, time as well as target profile, and industry.",
  },
  {
    question:
      "Do I need to keep my browser and laptop open while Leadseeder is up and running?",
    answer:
      "No, you don't. Leadseeder is a complete cloud based software that works even if you close your browser and switch off your laptop.",
  },
  {
    question: "Can I get a free trial?",
    answer:
      "Yes! When you install the Leadseeder Chrome extension, you'll receive a 7-day free trial. You won't be charged until the trial period ends.\n\nIf you need more time to explore the tool, feel free to reach out to us for a trial extension!",
  },
  {
    question: "How much does Leadseeder cost?",
    answer:
      "Leadseeder costs 17 USD per account per month. If you add multiple accounts into the system you may qualify for further discounts. Just pop up on the live chat for quotes on additional accounts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-24 bg-background" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Leadseeder
          </p>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                className={`w-full text-left p-6 rounded-lg border ${
                  openIndex === index ? "border-primary" : "border-border"
                } hover:border-primary transition-colors duration-300`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-foreground">
                    {faq.question}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-muted-foreground" />
                    )}
                  </motion.div>
                </div>
                <AnimatePresence mode="wait">
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                          opacity: {
                            duration: 0.2,
                            delay: 0.1,
                          },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            duration: 0.3,
                            ease: "easeIn",
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        },
                      }}
                      className="mt-4 text-muted-foreground whitespace-pre-line overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
