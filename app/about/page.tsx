"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  // GSAP animations on mount
  useEffect(() => {
    // Left section animation (fade in and slide up)
    gsap.fromTo(
      ".left-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".left-section",
          start: "top 80%",
        },
      }
    );

    // Right section animation (fade in and slide up)
    gsap.fromTo(
      ".right-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".right-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Framer Motion variants for text and quote
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Section */}
          <motion.div
            className="left-section space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[5rem] md:text-[8rem] font-serif leading-[0.85] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              About
            </h1>
            <motion.h2
              className="text-4xl md:text-5xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              I'm Apurv. A software developer, innovator, and problem solver.
            </motion.h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-200">
              <motion.p variants={textVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
                My journey in software development began with writing my first Python script, and since then, I've been
                hooked on building solutions that make an impact. From full-stack web applications to AI-driven platforms,
                I thrive on turning complex problems into elegant, scalable code.
              </motion.p>
              <motion.p variants={textVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
                Over the years, I've worked with technologies like Node.js, React, Python, LangChain, PyTorch, and APIs
                like Grok API to create projects ranging from car rental platforms to AI course generators. My experience
                spans front-end development, back-end systems, and machine learning, with a passion for integrating AI to
                enhance user experiences.
              </motion.p>
              <motion.p variants={textVariants} initial="initial" animate="animate" transition={{ delay: 0.3 }}>
                What drives me as a developer is crafting software that solves real-world problems, whether it's helping
                users rent a car seamlessly or guiding learners through personalized AI roadmaps. I’m also an active
                contributor to open-source projects, believing in the power of collaboration to push technology forward.
              </motion.p>
            </div>
            <motion.div
              className="space-y-4"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg font-light text-gray-200">
                This is one of my favorite quotes (by Linus Torvalds):
              </p>
              <blockquote className="text-3xl md:text-4xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                "Talk is cheap. Show me the code."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right-section lg:pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Developer coding setup"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}