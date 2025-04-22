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

  // Framer Motion variants for text, quote, and image with enhanced animations
  const textVariants = {
    initial: { opacity: 0, y: 20, skewY: 2 },
    animate: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 20, x: -10 },
    animate: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.9] } }, // Custom ease (back.out-like)
    hover: { x: 5, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95, rotate: -2 },
    animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]  text-[hsl(var(--foreground))] p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Section */}
          <motion.div
            className="left-section space-y-8"
            initial={{ opacity: 0, skewX: 3 }}
            animate={{ opacity: 1, skewX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-[5rem] md:text-[8rem] font-serif leading-[0.85] bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0 }}
            >
              About
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-5xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              I'm Apurv. A software developer, innovator, and problem solver.
            </motion.h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-[hsl(var(--foreground))]">
              <motion.p
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.4 }}
              >
                My journey in software development began with writing my first Python script, and since then, I've been
                hooked on building solutions that make an impact. From full-stack web applications to AI-driven platforms,
                I thrive on turning complex problems into elegant, scalable code.
              </motion.p>
              <motion.p
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.6 }}
              >
                Over the years, I've worked with technologies like Node.js, React, Python, LangChain, PyTorch, and APIs
                like Grok API to create projects ranging from car rental platforms to AI course generators. My experience
                spans front-end development, back-end systems, and machine learning, with a passion for integrating AI to
                enhance user experiences.
              </motion.p>
              <motion.p
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: 0.8 }}
              >
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
              whileHover="hover"
              transition={{ delay: 1.0 }}
            >
              <p className="text-lg font-light text-[hsl(var(--foreground))]">
                This is one of my favorite quotes (by Linus Torvalds):
              </p>
              <blockquote className="text-3xl md:text-4xl font-serif leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                "Talk is cheap. Show me the code."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right-section lg:pt-24"
            initial={{ opacity: 0, skewX: -3 }}
            animate={{ opacity: 1, skewX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-[3/4] w-full"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Developer coding setup"
                fill
                className="object-cover rounded-lg border-[hsl(var(--border))]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}